const createTest = require("../dbOperations/createData");


const testGet = (req, res) => {  
  res.send("get response!");
}
const testPost = (req, res) => {
    console.log(req.body);
   const { name,age } = req.body;
   const test = createTest(name, age);  
  res.send("post response");
};
module.exports = { testGet, testPost };    
