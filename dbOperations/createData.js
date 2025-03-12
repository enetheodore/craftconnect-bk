const bcrypt = require("bcrypt"); 
const testModel = require("../models/testModel");
const userModel = require("../models/userModel");
const productSchema = require("../models/productModel");
const categorySchema = require("../models/categoryModel");
const { hashPassword , generateToken} = require("../utilities/utilities");

const createTest = async (name, age) => {
  const data = new testModel({
    name: name,
    age: age,
  });
  await data.save();
  return data;
};

const createCategory = async (name, description, createdAt) => {
  const data = new categorySchema({
    name: name,
    description: description,
    createdAt: new Date(),
  });
  await data.save();
  return data;
};

const registerUser = async (name, email, password, role) => {
  const hashedPassword = await hashPassword(password);
  const data = new userModel({
    name: name,
    email: email,
    password: hashedPassword,
    role: role,
  });
  await data.save();
  return data;
};

const loginUser = async (email, password) => {
  const user = await userModel.findOne({ email: email });

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid password");
  }

  const token = await generateToken(user);

  const { password: _, ...userData } = user.toObject();
  return { token, user: userData };
};

const createProduct = async (
  title,
  description,
  price,
  categoryId,
  artisanId,
  images,
  inventoryCount,
) => {
  const productItem = new productSchema({
    title: title,
    description: description,
    price: price,
    categoryId: categoryId,
    artisanId: artisanId,
    images: images,
    inventoryCount: inventoryCount,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  await productItem.save();
  return productItem;
};

module.exports = { createTest, registerUser, loginUser, createProduct, createCategory };
