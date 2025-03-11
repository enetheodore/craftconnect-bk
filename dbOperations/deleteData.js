const Product = require("../models/productModel");
const User = require("../models/apiModel");

const deleteProduct = async (productId) => {
  const deletedProductItem = await Product.findByIdAndDelete(productId);

  if (!deletedProductItem) {
    throw new Error("Product not found");
  }

  return deletedProductItem;
};

const deleteUser = async (userId) => {
  const deletedUser = await User.findByIdAndDelete(userId);

  if (!deletedUser) {
    throw new Error("User not found");
  }

  return deletedUser;
};

module.exports = { deleteProduct, deleteUser };
