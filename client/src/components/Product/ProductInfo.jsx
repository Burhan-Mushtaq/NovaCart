import { useState } from "react";
import {
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  Minus,
  Plus,
  Check,
  ShoppingCart,
  CreditCard,
} from "lucide-react";

import { useCart } from "../../context/CartContext";

const colors = [
  {
    name: "Black",
    value: "bg-black",
  },
  {
    name: "White",
    value: "bg-white border",
  },
  {
    name: "Blue",
    value: "bg-blue-600",
  },
  {
    name: "Red",
    value: "bg-red-500",
  },
];

const sizes = ["7", "8", "9", "10", "11"];

const ProductInfo = ({ product }) => {
  const { addToCart } = useCart();

  const [selectedColor, setSelectedColor] =
    useState(colors[0].name);

  const [selectedSize, setSelectedSize] =
    useState("9");

  const [quantity, setQuantity] =
    useState(1);

  const discount = Math.round(
    ((product.oldPrice - product.price) /
      product.oldPrice) *
      100
  );

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      selectedColor,
      selectedSize,
    });
  };

  return (
    <div className="space-y-8">

      {/* Brand */}

      <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

        {product.brand}

      </span>

      {/* Title */}

      <div>

        <h1 className="text-4xl font-black leading-tight text-gray-900">

          {product.name}

        </h1>

        <p className="mt-4 leading-8 text-gray-500">

          {product.description}

        </p>

      </div>

      {/* Rating */}

      <div className="flex flex-wrap items-center gap-4">

        <div className="flex">

          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={18}
              className={`${
                star <= Math.round(product.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}

        </div>

        <span className="font-semibold">

          {product.rating}

        </span>

        <span className="text-gray-500">

          (256 Reviews)

        </span>

        <span
          className={`
          flex
          items-center
          gap-2
          rounded-full
          px-3
          py-1
          text-sm
          font-semibold
          ${
            product.stock > 0
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }
        `}
        >

          <Check size={16} />

          {product.stock > 0
            ? "In Stock"
            : "Out Of Stock"}

        </span>

      </div>

      {/* Price */}

      <div className="flex flex-wrap items-end gap-4">

        <h2 className="text-5xl font-black text-blue-600">

          ${product.price}

        </h2>

        <span className="pb-2 text-2xl text-gray-400 line-through">

          ${product.oldPrice}

        </span>

        <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-bold text-red-600">

          {discount}% OFF

        </span>

      </div>

      <div className="h-px bg-gray-200" />

      {/* Colors */}

      <div>

        <h3 className="mb-4 text-lg font-bold">

          Select Color

        </h3>

        <div className="flex gap-4">

          {colors.map((color) => (

            <button
              key={color.name}
              onClick={() =>
                setSelectedColor(color.name)
              }
              className={`
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              transition-all
              ${
                selectedColor === color.name
                  ? "ring-4 ring-blue-200"
                  : ""
              }
            `}
            >

              <div
                className={`h-8 w-8 rounded-full ${color.value}`}
              />

            </button>

          ))}

        </div>

      </div>

      {/* Sizes */}

      <div>

        <h3 className="mb-4 text-lg font-bold">

          Select Size

        </h3>

        <div className="flex flex-wrap gap-3">

          {sizes.map((size) => (

            <button
              key={size}
              onClick={() =>
                setSelectedSize(size)
              }
              className={`
              h-12
              w-12
              rounded-xl
              border
              font-semibold
              transition-all
              ${
                selectedSize === size
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-gray-200 hover:border-blue-500"
              }
            `}
            >

              {size}

            </button>

          ))}

        </div>

      </div>

      {/* Quantity */}

      <div>

        <h3 className="mb-4 text-lg font-bold">

          Quantity

        </h3>

        <div className="flex w-fit items-center rounded-2xl border border-gray-200">
                    <button
            onClick={() =>
              setQuantity((prev) => Math.max(1, prev - 1))
            }
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-l-2xl
            transition
            hover:bg-gray-100
          "
          >
            <Minus size={18} />
          </button>

          <div
            className="
            flex
            h-12
            min-w-[70px]
            items-center
            justify-center
            border-x
            border-gray-200
            text-lg
            font-bold
          "
          >
            {quantity}
          </div>

          <button
            onClick={() =>
              setQuantity((prev) => prev + 1)
            }
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-r-2xl
            transition
            hover:bg-gray-100
          "
          >
            <Plus size={18} />
          </button>

        </div>

      </div>

      {/* Action Buttons */}

      <div className="grid gap-4 sm:grid-cols-2">

        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="
          flex
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          px-6
          py-4
          text-lg
          font-semibold
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
        >
          <ShoppingCart size={20} />

          Add To Cart

        </button>

        <button
          className="
          flex
          items-center
          justify-center
          gap-3
          rounded-2xl
          border-2
          border-blue-600
          bg-white
          px-6
          py-4
          text-lg
          font-semibold
          text-blue-600
          transition-all
          duration-300
          hover:bg-blue-600
          hover:text-white
        "
        >
          <CreditCard size={20} />

          Buy Now

        </button>

      </div>

      {/* Product Information */}

      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

        <h3 className="mb-6 text-xl font-bold">
          Why You'll Love It
        </h3>

        <div className="space-y-5">

          <div className="flex items-start gap-4">

            <div className="rounded-2xl bg-blue-100 p-3 text-blue-600">
              <Truck size={22} />
            </div>

            <div>

              <h4 className="font-semibold text-gray-900">
                Free Shipping
              </h4>

              <p className="mt-1 text-sm leading-6 text-gray-500">
                Enjoy free delivery on all orders over $99 with
                fast and reliable shipping.
              </p>

            </div>

          </div>

          <div className="flex items-start gap-4">

            <div className="rounded-2xl bg-green-100 p-3 text-green-600">
              <RotateCcw size={22} />
            </div>

            <div>

              <h4 className="font-semibold text-gray-900">
                Easy Returns
              </h4>

              <p className="mt-1 text-sm leading-6 text-gray-500">
                Return or exchange your purchase within 30 days
                with no hassle.
              </p>

            </div>

          </div>

          <div className="flex items-start gap-4">

            <div className="rounded-2xl bg-purple-100 p-3 text-purple-600">
              <ShieldCheck size={22} />
            </div>

            <div>

              <h4 className="font-semibold text-gray-900">
                Secure Payments
              </h4>

              <p className="mt-1 text-sm leading-6 text-gray-500">
                Your payment is protected with encrypted checkout
                and trusted payment gateways.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Extra Details */}

      <div className="grid gap-4 rounded-3xl border border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 sm:grid-cols-3">

        <div>

          <p className="text-sm text-gray-500">
            Brand
          </p>

          <h4 className="mt-1 font-bold text-gray-900">
            {product.brand}
          </h4>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            Category
          </p>

          <h4 className="mt-1 font-bold text-gray-900">
            {product.category}
          </h4>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            Available
          </p>

          <h4 className="mt-1 font-bold text-gray-900">
            {product.stock} Items
          </h4>

        </div>

      </div>

    </div>
  );
};

export default ProductInfo;