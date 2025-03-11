const express = require("express");
const { categoryPost } = require("../controller/categoryController");
const router = express.Router();

router.post("/route", categoryPost);

module.exports = router;
