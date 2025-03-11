const testModel = require("../models/testModel");


const updateTest = async(id, newName) => {
  // logic to update data in database
   const updateData = await testModel.updateOne({ _id: id }, { $set: { name: newName} });
  return updateData;
}


module.exports = {updateTest};
