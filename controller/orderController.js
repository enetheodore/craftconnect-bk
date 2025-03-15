const {
  acceptOrder,
  shipOrder,
  deliverOrder,
  createOrder,
  getOrders,
} = require("../dbOperations/updateData");
const orderModel = require("../models/orderModel");
const asyncHandler = require("express-async-handler");
const createOrderController = async (req, res) => {
  console.log(req.body);
  const { customerId, artisanId, products, totalAmount, productId } = req.body;
  // const orderId = req.params.id;

  try {
    const newOrder = await createOrder(
      customerId,
      artisanId,
      products,
      totalAmount,
      productId
    );
    res.status(200).json({ message: "Order created", newOrder });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
const getOrderController = asyncHandler(async (req, res) => {
  console.log(req.query);
  const { userId } = req.query;
  // const title = req.query.title;
  const customerId = userId;
  const query = {};
  // query.customerId = { $regex: new RegExp(customerId, "i") };

  const page = parseInt(req.query.page) || 1; // Get the current page from the query parameter, default to 1 if not provided
  const limit = parseInt(req.query.limit) || 10; // Get the limit of items per page from the query parameter, default to 10 if not provided
  const startIndex = (page - 1) * limit; // Calculate the starting index for the current page

  const total = await orderModel.countDocuments(query); // Get the total number of documents
  const orders = await orderModel
    .find(query)
    .skip(startIndex)
    .limit(limit)
    .sort({ createdAt: -1 })
    .lean();

  res.status(200).json({
    message: "Found orders",
    currentPage: page,
    totalPages: Math.ceil(total / limit),
    totalItems: total,
    orders: orders,
  });
});
const acceptOrderController = async (req, res) => {
  const orderId = req.params.id;

  try {
    const updatedOrder = await acceptOrder(orderId);
    res.status(200).json({ message: "Order accepted", updatedOrder });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const shipOrderController = async (req, res) => {
  const orderId = req.params.id;

  try {
    const updatedOrder = await shipOrder(orderId);
    res.status(200).json({ message: "Order shipped", updatedOrder });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deliverOrderController = async (req, res) => {
  const orderId = req.params.id;

  try {
    const updatedOrder = await deliverOrder(orderId);
    res.status(200).json({ message: "Order delivered", updatedOrder });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createOrderController,
  getOrderController,
};
