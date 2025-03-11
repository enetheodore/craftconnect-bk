const bcrypt = require("bcrypt"); 
const testModel = require("../models/testModel");
const register = require("../models/apiModel");
const { hashPassword } = require("../utilities/utilities");

const createTest = async (name, age) => {
  const data = new testModel({
    name: name,
    age: age,
  });
  await data.save();
  return data;
};

const registerUser = async (name, email, password, role) => {
  const hashedPassword = await hashPassword(password);
  const data = new register({
    name: name,
    email: email,
    password: hashedPassword,
    role: role,
  });
  await data.save();
  return data;
};

const loginUser = async (email, password) => {
  const user = await register.findOne({ email: email });

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid password");
  }

  const { password: _, ...userData } = user.toObject();
  return userData;
};

module.exports = { createTest, registerUser, loginUser };
