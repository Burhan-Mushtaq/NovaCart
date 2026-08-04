import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (
  req,
  res,
  next
) => {

  try {

    let token;

    if (
      req.cookies &&
      req.cookies.token
    ) {

      token = req.cookies.token;

    }

    if (!token) {

      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });

    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = await User.findById(
      decoded.id
    );

    next();

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });

  }

};
export const adminOnly = (
  req,
  res,
  next
) => {

  if (req.user.role !== "admin") {

    return res.status(403).json({
      success: false,
      message: "Access denied",
    });

  }

  next();

};
