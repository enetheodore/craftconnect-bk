const express = require("express");
const { registerPost, loginPost } = require("../controller/userController");
const { deleteUser } = require("../dbOperations/deleteData");
const router = express.Router();

router.post("/", registerPost);
router.post("/login", loginPost);
router.delete("/delete", deleteUser);

module.exports = router;
