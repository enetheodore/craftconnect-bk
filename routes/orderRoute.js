const express = require("express");
const {
  getOrderController,
  createOrderController,
} = require("../controller/orderController");
const router = express.Router();

router.get("/", getOrderController);
router.post("/create", createOrderController);

// router.put("/accept/:id", acceptOrder);

// router.put("/ship/:id/", shipOrder);

// router.put("/deliver/:id/", deliverOrder);

module.exports = router;
