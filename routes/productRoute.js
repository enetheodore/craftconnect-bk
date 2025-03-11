const express = require("express");
const { productPost } = require("../controller/userController");
const { deleteProduct } = require("../dbOperations/deleteData");
const router = express.Router();

router.post("/", productPost);
router.delete("/delete", deleteProduct);

module.exports = router;
