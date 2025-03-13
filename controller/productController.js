const { registerUser, loginUser, createProduct } = require("../dbOperations/createData");

const productPost = async (req, res) => {
  const { title, description, price, categoryId, artisanId, images, inventoryCount } = req.body;

  try {
    const newProductItem = await createProduct(
      title,
      description,
      price,
      categoryId,
      artisanId,
      images,
      inventoryCount,
    );

    res.status(201).json(newProductItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { productPost };
