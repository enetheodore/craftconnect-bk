const express = require('express');
const { uploadFile, getFile } = require('../controller/fileController');
const router = express.Router();
const protectRoute = require('../middleware/authMiddleware');
const { isAdmin } = require('../utilities/utilities');          

router.post("/upload",protectRoute, uploadFile);
router.get("/:filename", getFile);      

module.exports = router;
