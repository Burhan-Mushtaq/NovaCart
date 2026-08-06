import Product from "../models/Product.js";
import Category from "../models/Category.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createProduct = asyncHandler(async (req, res) => {

  const category = await Category.findById(req.body.category);

  if (!category) {
    return res.status(404).json({
      success: false,
      message: "Category not found",
    });
  }

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });

});


export const getProducts = asyncHandler(async (req, res) => {

  const page = Number(req.query.page) || 1;

  const limit = Number(req.query.limit) || 12;

  const skip = (page - 1) * limit;

  const query = {};

  if (req.query.category) {
    query.category = req.query.category;
  }

  if (req.query.brand) {
    query.brand = req.query.brand;
  }

  if (req.query.featured === "true") {
    query.featured = true;
  }

  if (req.query.bestseller === "true") {
    query.bestseller = true;
  }

  const total = await Product.countDocuments(query);

  const products = await Product.find(query)
    .populate("category", "name slug")
    .skip(skip)
    .limit(limit);

  res.json({
    success: true,
    total,
    page,
    pages: Math.ceil(total / limit),
    products,
  });

});

export const getProduct = asyncHandler(async (req, res) => {

  const product = await Product.findById(req.params.id)
    .populate("category")
    .populate("reviews.user", "name");

  if (!product) {

    return res.status(404).json({
      success: false,
      message: "Product not found",
    });

  }

  res.json({
    success: true,
    product,
  });

});


export const updateProduct = asyncHandler(async (req, res) => {

  const product = await Product.findByIdAndUpdate(

    req.params.id,

    req.body,

    {
      new: true,
      runValidators: true,
    }

  );

  if (!product) {

    return res.status(404).json({
      success: false,
      message: "Product not found",
    });

  }

  res.json({
    success: true,
    product,
  });

});

export const deleteProduct = asyncHandler(async (req, res) => {

  const product = await Product.findById(req.params.id);

  if (!product) {

    return res.status(404).json({
      success: false,
      message: "Product not found",
    });

  }

  await product.deleteOne();

  res.json({
    success: true,
    message: "Product deleted successfully",
  });

});