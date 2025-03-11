const express = require('express');
const { testGet,testPost, testUpdate } = require('../controller/testController');
const router = express.Router();

router.get('/', testGet);
router.post("/create", testPost);
router.put("/update", testUpdate);

module.exports = router;
