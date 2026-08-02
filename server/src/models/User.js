import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const addressSchema = new mongoose.Schema(
  {
    fullName: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    country: String,
    postalCode: String,
    isDefault: {
      type: Boolean,
      default: false,
    },
  },
  {
    _id: false,
  }
);

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      default: "",
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },

    avatar: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    otp: String,

    otpExpiry: Date,

    addresses: [addressSchema],
        wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],

    cart: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },

        quantity: {
          type: Number,
          default: 1,
        },

        color: String,

        size: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.pre(
  "save",
  async function (next) {

    if (!this.isModified("password")) {
      return next();
    }

    const salt = await bcrypt.genSalt(10);

    this.password = await bcrypt.hash(
      this.password,
      salt
    );

    next();

  }
);

userSchema.methods.comparePassword =
  async function (enteredPassword) {

    return await bcrypt.compare(
      enteredPassword,
      this.password
    );

  };
userSchema.methods.generateToken =
  function () {

    return jwt.sign(
      {
        id: this._id,
        role: this.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn:
          process.env.JWT_EXPIRE,
      }
    );

  };
userSchema.methods.generateOTP =
  function () {

    const otp = Math.floor(
      100000 +
      Math.random() * 900000
    ).toString();

    this.otp = otp;

    this.otpExpiry =
      Date.now() + 10 * 60 * 1000;

    return otp;

  };

  userSchema.methods.clearOTP =
  function () {

    this.otp = undefined;

    this.otpExpiry = undefined;

  };

  const User = mongoose.model(
  "User",
  userSchema
);

export default User;