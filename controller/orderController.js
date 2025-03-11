const { acceptOrder, shipOrder, deliverOrder } = require("../dbOperations/updateData");

const acceptOrder = async (req, res) => {
  const orderId = req.params.id;

  try {
    const updatedOrder = await acceptOrder(orderId);
    res.status(200).json({ message: "Order accepted", updatedOrder });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const shipOrder = async (req, res) => {
  const orderId = req.params.id;

  try {
    const updatedOrder = await shipOrder(orderId);
    res.status(200).json({ message: "Order shipped", updatedOrder });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deliverOrder = async (req, res) => {
  const orderId = req.params.id;

  try {
    const updatedOrder = await deliverOrder(orderId);
    res.status(200).json({ message: "Order delivered", updatedOrder });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
