const express = require('express');
const { registerPost } = require("../controller/apiController");
const router = express.Router();

router.post("/", registerPost);

module.exports = router;
