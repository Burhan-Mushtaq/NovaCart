import User from "../models/User.js";
import asyncHandler from "../utils/asyncHandler.js";


export const registerUser = asyncHandler(async (req, res) => {

  const {
    name,
    email,
    phone,
    password,
  } = req.body;

  if (
    !name ||
    !email ||
    !password
  ) {
    return res.status(400).json({
      success: false,
      message: "Please fill all required fields.",
    });
  }

  const existingUser = await User.findOne({
    email,
  });

  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "User already exists.",
    });
  }

  const user = await User.create({
    name,
    email,
    phone,
    password,
  });

  const token = user.generateToken();

  res
    .status(201)
    .cookie("token", token, {
      httpOnly: true,
      secure:
        process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge:
        7 * 24 * 60 * 60 * 1000,
    })
    .json({
      success: true,
      message: "Registration successful.",
      token,
      user,
    });

});

export const loginUser = asyncHandler(async (req, res) => {

  const {
    email,
    password,
  } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required.",
    });
  }

  const user = await User.findOne({
    email,
  }).select("+password");

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password.",
    });
  }

  const isMatch =
    await user.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password.",
    });
  }

  const token = user.generateToken();

  res
    .cookie("token", token, {
      httpOnly: true,
      secure:
        process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge:
        7 * 24 * 60 * 60 * 1000,
    })
    .status(200)
    .json({
      success: true,
      message: "Login successful.",
      token,
      user,
    });

});

export const logoutUser = asyncHandler(async (req, res) => {

  res
    .clearCookie("token")
    .status(200)
    .json({
      success: true,
      message: "Logged out successfully.",
    });

});

export const getCurrentUser =
  asyncHandler(async (req, res) => {

    const user = await User.findById(
      req.user.id
    );

    res.status(200).json({
      success: true,
      user,
    });

  });


export const sendOTP =
  asyncHandler(async (req, res) => {

    const { email } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    const otp =
      user.generateOTP();

    await user.save();
    res.status(200).json({
      success: true,
      message: "OTP sent successfully.",
      otp,
    });

  });

export const verifyOTP =
  asyncHandler(async (req, res) => {

    const {
      email,
      otp,
    } = req.body;

    const user = await User.findOne({
      email,
    });

    if (
      !user ||
      user.otp !== otp ||
      user.otpExpiry < Date.now()
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired OTP.",
      });
    }

    user.clearOTP();

    user.isVerified = true;

    await user.save();

    res.status(200).json({
      success: true,
      message: "OTP verified successfully.",
    });

  });

export const resetPassword =
  asyncHandler(async (req, res) => {

    const {
      email,
      password,
    } = req.body;

    const user = await User.findOne({
      email,
    }).select("+password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    user.password = password;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Password updated successfully.",
    });

  });
  