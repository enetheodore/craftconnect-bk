const { createCategory } = require("../dbOperations/createData");

const categoryPost = async (req, res) => {
  const { name, description, createdAt } = req.body;
  
  try {
    const category = await createCategory(name, description, createdAt);
    res.status(201).json(category.id);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { categoryPost };
