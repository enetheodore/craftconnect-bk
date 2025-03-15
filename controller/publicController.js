const {
  registerUser,
  loginUser,
  createProduct,
} = require("../dbOperations/createData");
const asyncHandler = require("express-async-handler");

const productModel = require("../models/productModel");

const exploreProducts = asyncHandler(async (req, res) => {
  const title = req.query.title;

  const query = {};
  if (title?.length > 3) {
    query.title = { $regex: new RegExp(title, "i") };
  }

  const page = parseInt(req.query.page) || 1; // Get the current page from the query parameter, default to 1 if not provided
  const limit = parseInt(req.query.limit) || 10; // Get the limit of items per page from the query parameter, default to 10 if not provided
  const startIndex = (page - 1) * limit; // Calculate the starting index for the current page

  const total = await productModel.countDocuments(query); // Get the total number of documents
  const products = await productModel
    .find(query)
    .skip(startIndex)
    .limit(limit)
    .sort({ createdAt: -1 })
    .lean();

  res.status(200).json({
    message: "Found categories",
    currentPage: page,
    totalPages: Math.ceil(total / limit),
    totalItems: total,
    products: products,
  });
});

module.exports = { exploreProducts };
