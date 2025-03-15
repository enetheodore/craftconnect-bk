const express = require("express");
const { exploreProducts } = require("../controller/publicController");
const router = express.Router();

router.put("/products", exploreProducts);

module.exports = router;
