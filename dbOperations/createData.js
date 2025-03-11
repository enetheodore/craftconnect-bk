const testModel = require("../models/testModel");



const createTest = async (name, age) => {
  const data = new testModel({
    name: name,
    age: age
  });
  await data.save();
  return data;
}

module.exports = {createTest};
