const express = require("express");
const { categoryPost,getCatagories } = require("../controller/categoryController");
const router = express.Router();

router.get("/", getCatagories);
router.post("/create", categoryPost);

module.exports = router;
