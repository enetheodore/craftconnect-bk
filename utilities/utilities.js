const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const isAdmin = async (req, res, next) => {
    if (req.authUser.role !== "admin") {
        return res.status(401).json({ message: "Unauthorized only admins are allowed" });
    }
    next();
}
const isArtisan = async (req, res, next) => {
    if (req.authUser.role !== "artisan") {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
}

const isCustomer = async (req, res, next) => {
    if (req.authUser.role !== "customer") {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
}
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

const generateToken = async (user) => {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
    return token;
};  

const verifyToken = async (token) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
}

module.exports = { hashPassword , generateToken, verifyToken, isAdmin, isArtisan, isCustomer }; 
