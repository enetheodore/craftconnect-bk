const Cart = require("../models/cartModel"); 
const User = require("../models/apiModel"); 

const deleteCart = async (cartId) => {
  const deletedCartItem = await Cart.findByIdAndDelete(cartId);

  if (!deletedCartItem) {
    throw new Error("Cart item not found");
  }

  return deletedCartItem;
};

const deleteUser = async (userId) => {
  const deletedUser = await User.findByIdAndDelete(userId);

  if (!deletedUser) {
    throw new Error("User not found");
  }

  return deletedUser;
};

module.exports = { deleteCart, deleteUser };
