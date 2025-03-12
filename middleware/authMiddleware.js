const { verify } = require("jsonwebtoken");
const { verifyToken } = require("../utilities/utilities");
const userModel = require("../models/userModel");

const protectRoute = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized no access token" });
    }   
  const decoded =await verifyToken(req.headers.authorization);
  const authUser=await userModel.findById(decoded.id);
  console.log("authUser",authUser);
  if (!authUser) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  req.authUser = authUser;
  next();
};

module.exports = protectRoute;  
