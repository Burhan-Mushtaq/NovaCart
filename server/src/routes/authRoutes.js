import express from "express";

import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  sendOTP,
  verifyOTP,
  resetPassword,
} from "../controllers/auth.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/send-otp", sendOTP);

router.post("/verify-otp", verifyOTP);

router.post("/reset-password", resetPassword);router.get("/me", protect, getCurrentUser);

router.post("/logout", protect, logoutUser);

export default router;