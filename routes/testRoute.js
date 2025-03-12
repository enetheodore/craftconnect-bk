const express = require('express');
const { testGet,testPost, testUpdate } = require('../controller/testController');
const router = express.Router();
const protectRoute = require('../middleware/authMiddleware');
const { isAdmin } = require('../utilities/utilities');

router.get('/',protectRoute,isAdmin, testGet);
router.post("/create", testPost);
router.put("/update", testUpdate);

module.exports = router;
