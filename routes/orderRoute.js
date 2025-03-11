const express = require("express");
const { acceptOrder, shipOrder, deliverOrder } = require("../dbOperations/updateData"); 
const router = express.Router();

router.put("/order/:id/accept", acceptOrder);

router.put("/order/:id/ship", shipOrder);

router.put("/order/:id/deliver", deliverOrder);

module.exports = router;
