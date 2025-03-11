const testModel = require("../models/testModel");
const register = require("../models/apiModel");
const { hashPassword } = require("../utilities/utilities");



const createTest = async (name, age) => {
  const data = new testModel({
    name: name,
    age: age
  });
  await data.save();
  return data;
}

const registerUser = async (name, email, password, role) => {
    const hashedPassword = await hashPassword(password);
    const data = new register({
        name: name,
        email: email,
        password: hashedPassword,
        role: role
    });
    await data.save();
    return data;
}

module.exports = {createTest, registerUser};
