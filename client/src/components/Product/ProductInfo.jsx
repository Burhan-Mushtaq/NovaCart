import { useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Heart,
  ShoppingCart,
  Zap,
  Minus,
  Plus,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const ProductInfo = ({ product }) => {

  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] || "Default"
  );

  const [selectedSize, setSelectedSize] = useState(
    product.sizes?.[0] || "Free Size"
  );

  const [quantity, setQuantity] = useState(1);

  const increase = () =>
    setQuantity((prev) => prev + 1);

  const decrease = () =>
    setQuantity((prev) =>
      prev > 1 ? prev - 1 : 1
    );

  const handleAddToCart = () => {

    addToCart({
      ...product,
      quantity,
      selectedColor,
      selectedSize,
    });

  };

  const handleWishlist = () => {

    addToWishlist(product);

  };

  return (

    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-8"
    >

      {/* Brand */}

      <span
        className="
        inline-flex
        rounded-full
        bg-blue-100
        px-4
        py-2
        text-sm
        font-semibold
        text-blue-700
      "
      >
        {product.brand}
      </span>

      {/* Product Name */}

      <h1 className="text-5xl font-black leading-tight text-gray-900">

        {product.name}

      </h1>

      {/* Rating */}

      <div className="flex flex-wrap items-center gap-4">

        <div className="flex items-center">

          {[1,2,3,4,5].map((star)=>(

            <Star
              key={star}
              size={20}
              className={
                star <= Math.round(product.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />

          ))}

        </div>

        <span className="font-semibold">

          {product.rating}

        </span>

        <span className="text-gray-500">

          ({product.reviews} Reviews)

        </span>

      </div>

      {/* Price */}

      <div className="flex flex-wrap items-end gap-5">

        <span className="text-5xl font-black text-blue-600">

          ₹{product.price.toLocaleString()}

        </span>

        {product.oldPrice && (

          <span className="text-2xl text-gray-400 line-through">

            ₹{product.oldPrice.toLocaleString()}

          </span>

        )}

        {product.discount && (

          <span
            className="
            rounded-full
            bg-red-100
            px-4
            py-2
            font-semibold
            text-red-600
          "
          >

            {product.discount}% OFF

          </span>

        )}

      </div>

      {/* Description */}

      <p className="leading-8 text-gray-600">

        {product.description}

      </p>

      {/* Stock */}

      <div className="flex items-center gap-3">

        <span className="h-3 w-3 rounded-full bg-green-500"></span>

        <span className="font-semibold text-green-600">

          In Stock

        </span>

      </div>
            {/* Colors */}

      {product.colors?.length > 0 && (

        <div>

          <h3 className="mb-4 text-lg font-bold text-gray-900">
            Color
          </h3>

          <div className="flex flex-wrap gap-3">

            {product.colors.map((color) => (

              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`
                  rounded-xl
                  border
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    selectedColor === color
                      ? "border-blue-600 bg-blue-600 text-white shadow-lg"
                      : "border-gray-200 bg-white hover:border-blue-400"
                  }
                `}
              >
                {color}
              </button>

            ))}

          </div>

        </div>

      )}

      {/* Sizes */}

      {product.sizes?.length > 0 && (

        <div>

          <h3 className="mb-4 text-lg font-bold text-gray-900">
            Size
          </h3>

          <div className="flex flex-wrap gap-3">

            {product.sizes.map((size) => (

              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`
                  h-12
                  min-w-[52px]
                  rounded-xl
                  border
                  px-5
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    selectedSize === size
                      ? "border-blue-600 bg-blue-600 text-white shadow-lg"
                      : "border-gray-200 bg-white hover:border-blue-400"
                  }
                `}
              >
                {size}
              </button>

            ))}

          </div>

        </div>

      )}

      {/* Quantity */}

      <div>

        <h3 className="mb-4 text-lg font-bold text-gray-900">
          Quantity
        </h3>

        <div className="flex w-fit items-center overflow-hidden rounded-2xl border border-gray-200">

          <button
            onClick={decrease}
            className="flex h-12 w-12 items-center justify-center hover:bg-gray-100"
          >
            <Minus size={18} />
          </button>

          <span className="w-14 text-center text-lg font-bold">
            {quantity}
          </span>

          <button
            onClick={increase}
            className="flex h-12 w-12 items-center justify-center hover:bg-gray-100"
          >
            <Plus size={18} />
          </button>

        </div>

      </div>

      {/* Action Buttons */}

      <div className="grid gap-4 md:grid-cols-2">

        <button
          onClick={handleAddToCart}
          className="
            flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            py-4
            font-bold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-2xl
          "
        >
          <ShoppingCart size={22} />

          Add To Cart
        </button>

        <button
          className="
            flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-orange-500
            to-red-500
            py-4
            font-bold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-2xl
          "
        >
          <Zap size={20} />

          Buy Now
        </button>

      </div>

      {/* Wishlist */}

      <button
        onClick={handleWishlist}
        className="
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          border
          border-gray-200
          bg-white
          py-4
          font-semibold
          transition-all
          duration-300
          hover:border-red-400
          hover:bg-red-50
          hover:text-red-500
        "
      >
        <Heart size={20} />

        Add to Wishlist
      </button>
            {/* Service Cards */}

      <div className="grid gap-4">

        <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5">

          <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
            <Truck size={24} />
          </div>

          <div>

            <h3 className="font-bold text-gray-900">
              Free Shipping
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-500">
              Free delivery on orders above ₹4,999.
              Estimated delivery in 3–5 business days.
            </p>

          </div>

        </div>

        <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5">

          <div className="rounded-xl bg-green-100 p-3 text-green-600">
            <RotateCcw size={24} />
          </div>

          <div>

            <h3 className="font-bold text-gray-900">
              Easy Returns
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-500">
              Return or exchange your order within
              30 days with no hassle.
            </p>

          </div>

        </div>

        <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5">

          <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
            <ShieldCheck size={24} />
          </div>

          <div>

            <h3 className="font-bold text-gray-900">
              Secure Payments
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-500">
              100% secure checkout using SSL
              encryption and trusted payment gateways.
            </p>

          </div>

        </div>

      </div>

      {/* Product Details */}

      <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">

        <h3 className="mb-5 text-xl font-bold text-gray-900">
          Product Information
        </h3>

        <div className="space-y-4">

          <div className="flex justify-between border-b border-gray-200 pb-3">

            <span className="text-gray-500">
              Brand
            </span>

            <span className="font-semibold text-gray-900">
              {product.brand}
            </span>

          </div>

          <div className="flex justify-between border-b border-gray-200 pb-3">

            <span className="text-gray-500">
              Category
            </span>

            <span className="font-semibold text-gray-900">
              {product.category}
            </span>

          </div>

          <div className="flex justify-between border-b border-gray-200 pb-3">

            <span className="text-gray-500">
              SKU
            </span>

            <span className="font-semibold text-gray-900">
              {product.sku || "N/A"}
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-500">
              Availability
            </span>

            <span className="font-semibold text-green-600">
              In Stock
            </span>

          </div>

        </div>

      </div>

    </motion.div>

  );

};

export default ProductInfo;