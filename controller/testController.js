const {createTest} = require("../dbOperations/createData");
const { testFetch } = require("../dbOperations/fetchData");
const { updateTest } = require("../dbOperations/updateData");


const testGet = async (req, res) => { 
  const testData = await testFetch() ;
  console.log(testData, "from controller");
  res.status(200).json({message:"Data fetched successfully",data:testData});
}
const testPost = (req, res) => {
    console.log(req.body);
   const { name,age } = req.body;
   const test = createTest(name, age);  
  res.send("post response");
};

const testUpdate = (req, res) => {
  console.log(req.body);
  const { id,newName } = req.body;
  const updatedData = updateTest(id,newName);
  res.status(200).json({message:"Data updated successfully",data:updatedData});
};
module.exports = { testGet, testPost, testUpdate };    
