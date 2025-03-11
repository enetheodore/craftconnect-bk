const express = require("express");
const { cartPost } = require("../controller/apiController");
const { deleteCart } = require("../dbOperations/deleteData");
const router = express.Router();

router.post("/", cartPost);
router.delete("/delete", deleteCart);

module.exports = router;
