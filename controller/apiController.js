const { registerUser, loginUser, createProduct } = require("../dbOperations/createData");

const registerPost = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const user = await registerUser(name, email, password, role);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginPost = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await loginUser(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const productPost =async (req, res) => {
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

module.exports = { registerPost ,loginPost, productPost }; 
