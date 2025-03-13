const express = require("express");
const { productPost ,getProducts} = require("../controller/productController");
const router = express.Router(); 

router.get("/", getProducts);
router.post("/create", productPost);


module.exports = router;
