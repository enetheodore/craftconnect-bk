const express = require('express');
const { registerPost,loginPost } = require("../controller/apiController");
const router = express.Router();

router.post("/", registerPost);
router.post("/login", loginPost);

module.exports = router;
