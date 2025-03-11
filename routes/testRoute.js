const express = require('express');
const { testGet,testPost } = require('../controller/testController');
const router = express.Router();

router.get('/', testGet);
// router.post("/create", testPost);

module.exports = router;
