const Order = require("../models/orderModel");

const updateTest = async (id, newName) => {
  const updateData = await testModel.updateOne(
    { _id: id },
    { $set: { name: newName } }
  );
  return updateData;
};

// Function to update order status
const createOrder = async (
  customerId,
  artisanId,
  products,
  totalAmount,
  productId
) => {
  const newOrder = new Order({
    customerId,
    artisanId,
    products,
    totalAmount,
    orderStatus: "ordered",
    productId,
  });

  await newOrder.save();
  return newOrder;
};

// Get all orders for a customer or artisan
const getOrders = async (userId) => {
  const orders = await Order.find({ customerId: userId });
  return orders;
  // console.log(userId)
  // return await Order.find({
  //   $or: [{ customerId: userId }],
  // }).populate("customerId artisanId products.productId");
};

const updateOrderStatus = async (orderId, newStatus) => {
  const validStatuses = ["ordered", "accepted", "shipped", "delivered"];

  if (!validStatuses.includes(newStatus)) {
    throw new Error("Invalid status provided");
  }

  const order = await Order.findById(orderId);

  if (!order) {
    throw new Error("Order not found");
  }

  const currentIndex = validStatuses.indexOf(order.orderStatus);
  const newIndex = validStatuses.indexOf(newStatus);

  if (newIndex <= currentIndex) {
    throw new Error("Cannot revert to a previous status");
  }

  order.orderStatus = newStatus;
  order.updatedAt = new Date();

  await order.save();
  return order;
};

const acceptOrder = async (orderId) => {
  return await updateOrderStatus(orderId, "accepted");
};

const shipOrder = async (orderId) => {
  return await updateOrderStatus(orderId, "shipped");
};

const deliverOrder = async (orderId) => {
  return await updateOrderStatus(orderId, "delivered");
};

module.exports = {
  createOrder,
  getOrders,
  acceptOrder,
  shipOrder,
  deliverOrder,
  updateTest,
};
