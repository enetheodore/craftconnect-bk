const { registerUser } = require("../dbOperations/createData");

const registerPost = (req, res) => {
  console.log(req.body);
  const { name, email, password, role } = req.body;
  const register = registerUser(name, email, password, role);
  res.send("post response");
};

module.exports = { registerPost }; 
