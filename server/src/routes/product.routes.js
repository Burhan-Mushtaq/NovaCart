import express from "express";

import {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  getRelatedProducts,
  addReview,
} from "../controllers/product.controller.js";

import {
  protect,
  adminOnly,
} from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getProducts);

router.get("/search", searchProducts);

router.get("/related/:id", getRelatedProducts);

router.get("/:id", getProduct);

router.post(
  "/:id/review",
  protect,
  addReview
);

router.post(
  "/",
  protect,
  adminOnly,
  createProduct
);

router.put(
  "/:id",
  protect,
  adminOnly,
  updateProduct
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteProduct
);

export default router;