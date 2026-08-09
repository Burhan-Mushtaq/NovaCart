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
  updateReview,
  deleteReview,
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

router.put(
  "/:id/review",
  protect,
  updateReview
);

router.delete(
  "/:id/review",
  protect,
  deleteReview
);
export default router;