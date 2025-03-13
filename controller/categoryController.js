const { createCategory } = require("../dbOperations/createData");
const asyncHandler = require("express-async-handler");
const categoryModel = require("../models/categoryModel");
const categoryPost = async (req, res) => {
  const { name, description, createdAt } = req.body;
  
  try {
    const category = await createCategory(name, description, createdAt);
    res.status(201).json(category.id);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getCatagories = asyncHandler(async (req, res) => {
  const name = req.query.name;

  const query = {};
  if (name?.length > 3) {
    query.name = { $regex: new RegExp(name, "i") };
  }

  const page = parseInt(req.query.page) || 1; // Get the current page from the query parameter, default to 1 if not provided
  const limit = parseInt(req.query.limit) || 10; // Get the limit of items per page from the query parameter, default to 10 if not provided
  const startIndex = (page - 1) * limit; // Calculate the starting index for the current page

  const total = await categoryModel.countDocuments(query); // Get the total number of documents
  const catagories = await categoryModel.find(query)
    .skip(startIndex)
    .limit(limit)
    .sort({ createdAt: -1 })
    .lean();
  console.log(catagories);
  // if (!drivers?.length) {
  //   return res.status(400).json({ message: "No drivers found" });
  // }

  res.status(200).json({
    message: "Found categories",
    currentPage: page,
    totalPages: Math.ceil(total / limit),
    totalItems: total,
    catagories: catagories,
  });
});

module.exports = { categoryPost ,getCatagories};
