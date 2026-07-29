import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "../data/products";
import {
  ShoppingBag,
  ShoppingCart,
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  Trash2,
  ShieldCheck,
  Truck,
  Tag,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import ProductCard from "../components/product/ProductCard";

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    subtotal,
    totalItems,
  } = useCart();

  const shipping = subtotal >= 4999 ? 0 : 199;

  const tax = subtotal * 0.18;

  const total = subtotal + shipping + tax;
  const recommendedProducts = products.filter(
  (product) =>
    !cartItems.some((item) => item.id === product.id)
);

  if (cartItems.length === 0) {
    return (
      <section className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">

          <motion.div
            initial={{ scale: .8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: .5 }}
            className="
            flex
            h-32
            w-32
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-blue-600
            to-indigo-600
            text-white
            shadow-2xl
          "
          >
            <ShoppingCart size={60} />
          </motion.div>

          <h1 className="mt-8 text-5xl font-black text-gray-900">
            Your Cart is Empty
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-500">
            Looks like you haven't added any products yet.
            Explore thousands of premium products and
            discover amazing deals.
          </p>

          <Link
            to="/shop"
            className="
            mt-10
            inline-flex
            items-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            px-8
            py-4
            text-lg
            font-semibold
            text-white
            shadow-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-2xl
          "
          >
            <ArrowLeft size={20} />
            Continue Shopping
          </Link>

        </div>

      </section>
    );
  }

  return (

    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-12">

      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >

          <div className="flex flex-wrap items-center justify-between gap-6">

            <div className="flex items-center gap-5">

              <div
                className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-3xl
                bg-gradient-to-br
                from-blue-600
                to-indigo-600
                text-white
                shadow-xl
              "
              >
                <ShoppingBag size={30} />
              </div>

              <div>

                <h1 className="text-5xl font-black text-gray-900">
                  Shopping Cart
                </h1>

                <p className="mt-2 text-gray-500">
                  {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
                </p>

              </div>

            </div>

            <Link
              to="/shop"
              className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-gray-200
              bg-white
              px-5
              py-3
              font-semibold
              shadow-sm
              transition
              hover:border-blue-600
              hover:text-blue-600
            "
            >
              <ArrowLeft size={18} />
              Continue Shopping
            </Link>

          </div>

        </motion.div>

        {/* Main Grid */}

        <div className="grid gap-8 xl:grid-cols-[1.7fr_.8fr]">

          {/* Cart Items */}

          <div className="space-y-6">
            {cartItems.map((item, index) => (
  <motion.div
    key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: index * 0.05,
      duration: 0.35,
    }}
    className="
      group
      rounded-3xl
      border
      border-gray-200
      bg-white
      p-6
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-blue-200
      hover:shadow-xl
    "
  >

    <div className="flex flex-col gap-6 lg:flex-row">

      {/* Product Image */}

      <div
        className="
          relative
          flex
          h-52
          w-full
          items-center
          justify-center
          overflow-hidden
          rounded-3xl
          bg-gradient-to-br
          from-gray-100
          to-gray-50
          lg:h-44
          lg:w-44
        "
      >

        <img
          src={item.image}
          alt={item.name}
          className="
            h-full
            w-full
            object-contain
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col">

        {/* Top */}

        <div className="flex flex-col justify-between gap-5 lg:flex-row">

          <div>

            <h2 className="text-2xl font-black text-gray-900">
              {item.name}
            </h2>

            <p className="mt-3 leading-7 text-gray-500">
              Premium quality product designed for
              maximum comfort, durability and style.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">

              {item.selectedColor && (
                <span
                  className="
                    rounded-full
                    bg-gray-100
                    px-4
                    py-2
                    text-sm
                    font-medium
                  "
                >
                  🎨 {item.selectedColor}
                </span>
              )}

              {item.selectedSize && (
                <span
                  className="
                    rounded-full
                    bg-blue-100
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-blue-700
                  "
                >
                  Size {item.selectedSize}
                </span>
              )}

            </div>

          </div>

          {/* Remove */}

          <button
            onClick={() =>
              removeFromCart(
                item.id,
                item.selectedSize,
                item.selectedColor
              )
            }
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              border
              border-gray-200
              text-gray-500
              transition-all
              duration-300
              hover:border-red-300
              hover:bg-red-50
              hover:text-red-500
            "
          >
            <Trash2 size={20} />
          </button>

        </div>

        {/* Bottom */}

        <div className="mt-8 flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

          {/* Price */}

          <div>

            <p className="text-sm text-gray-500">
              Price
            </p>

            <h3 className="mt-1 text-3xl font-black text-blue-600">
              ₹{(item.price ?? 0).toLocaleString()}
            </h3>

          </div>

          {/* Quantity */}

          <div
            className="
              flex
              items-center
              overflow-hidden
              rounded-2xl
              border
              border-gray-200
            "
          >

            <button
              onClick={() =>
                decreaseQuantity(
                  item.id,
                  item.selectedSize,
                  item.selectedColor
                )
              }
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                transition
                hover:bg-gray-100
              "
            >
              <Minus size={18} />
            </button>

            <span className="w-12 text-center text-lg font-bold">
              {item.quantity}
            </span>

            <button
              onClick={() =>
                increaseQuantity(
                  item.id,
                  item.selectedSize,
                  item.selectedColor
                )
              }
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                transition
                hover:bg-gray-100
              "
            >
              <Plus size={18} />
            </button>

          </div>

          {/* Item Total */}

          <div className="text-right">

            <p className="text-sm text-gray-500">
              Total
            </p>

            <h2 className="mt-1 text-3xl font-black text-gray-900">
              ₹
              {(
                (item.price ?? 0) *
                (item.quantity ?? 1)
              ).toLocaleString()}
            </h2>

          </div>

        </div>

      </div>

    </div>

  </motion.div>
))}
          </div>

          {/* Order Summary */}

          <div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .4 }}
              className="
              sticky
              top-28
              overflow-hidden
              rounded-3xl
              border
              border-gray-200
              bg-white
              shadow-xl
            "
            >

              {/* Header */}

              <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 text-white">

                <h2 className="text-3xl font-black">
                  Order Summary
                </h2>

                <p className="mt-2 text-blue-100">
                  Review your order before checkout
                </p>

              </div>

              <div className="p-6">

                {/* Coupon */}

                <div className="mb-8">

                  <label className="mb-3 flex items-center gap-2 font-semibold text-gray-700">

                    <Tag size={18} />

                    Coupon Code

                  </label>

                  <div className="flex gap-3">

                    <input
                      type="text"
                      placeholder="Enter coupon"
                      className="
                      flex-1
                      rounded-xl
                      border
                      border-gray-200
                      px-4
                      py-3
                      outline-none
                      transition
                      focus:border-blue-600
                    "
                    />

                    <button
                      className="
                      rounded-xl
                      bg-gray-900
                      px-5
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:bg-black
                    "
                    >
                      Apply
                    </button>

                  </div>

                </div>

                {/* Shipping Progress */}

                <div className="mb-8 rounded-2xl bg-blue-50 p-5">

                  {shipping === 0 ? (

                    <div className="flex items-center gap-2 text-green-600">

                      <Truck size={18} />

                      <span className="font-semibold">
                        Congratulations! Free Shipping Unlocked
                      </span>

                    </div>

                  ) : (

                    <>
                      <div className="flex items-center justify-between">

                        <span className="text-sm text-gray-600">
                          Add
                          {" "}
                          ₹{(4999 - subtotal).toLocaleString()}
                          {" "}
                          more for FREE Shipping
                        </span>

                      </div>

                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white">

                        <motion.div
                          initial={{ width: 0 }}
                          animate={{
                            width: `${Math.min(
                              (subtotal / 4999) * 100,
                              100
                            )}%`,
                          }}
                          className="
                          h-full
                          rounded-full
                          bg-gradient-to-r
                          from-blue-500
                          to-indigo-600
                        "
                        />

                      </div>

                    </>

                  )}

                </div>

                {/* Summary */}

                <div className="space-y-5">

                  <div className="flex justify-between">

                    <span className="text-gray-500">
                      Subtotal
                    </span>

                    <span className="font-bold">
                      ₹{subtotal.toLocaleString()}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-gray-500">
                      Shipping
                    </span>

                    <span
                      className={`font-bold ${
                        shipping === 0
                          ? "text-green-600"
                          : "text-gray-800"
                      }`}
                    >
                      {shipping === 0
                        ? "FREE"
                        : `₹${shipping}`}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-gray-500">
                      GST (18%)
                    </span>

                    <span className="font-bold">
                      ₹{tax.toLocaleString()}
                    </span>

                  </div>

                  <div className="border-t border-dashed pt-5">

                    <div className="flex items-center justify-between">

                      <span className="text-xl font-bold">
                        Grand Total
                      </span>

                      <span className="text-4xl font-black text-blue-600">
                        ₹{total.toLocaleString()}
                      </span>

                    </div>

                  </div>

                </div>

                {/* Security */}

                <div className="my-8 rounded-2xl bg-green-50 p-5">

                  <div className="flex items-center gap-3">

                    <ShieldCheck
                      size={24}
                      className="text-green-600"
                    />

                    <div>

                      <h4 className="font-bold text-green-700">
                        Secure Checkout
                      </h4>

                      <p className="text-sm text-green-600">
                        SSL encrypted payment protection
                      </p>

                    </div>

                  </div>

                </div>

                {/* Checkout Button */}

                <button
                  className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  via-indigo-600
                  to-purple-600
                  py-4
                  text-lg
                  font-bold
                  text-white
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                "
                >

                  Proceed to Checkout

                  <ArrowRight
                    size={20}
                    className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                  />

                </button>

                <p className="mt-5 text-center text-sm text-gray-500">
                  Taxes and shipping calculated according to your delivery address.
                </p>

              </div>

            </motion.div>

          </div>

        </div>
              {/* Recommended Products */}

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20"
      >

        <div className="mb-10 flex flex-col items-center justify-between gap-5 md:flex-row">

          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Recommended
            </span>

            <h2 className="mt-4 text-4xl font-black text-gray-900">
              You May Also Like
            </h2>

            <p className="mt-2 text-gray-500">
              Based on your shopping activity
            </p>

          </div>

          <Link
            to="/shop"
            className="
              rounded-2xl
              border
              border-gray-200
              bg-white
              px-6
              py-3
              font-semibold
              shadow-sm
              transition-all
              duration-300
              hover:border-blue-600
              hover:text-blue-600
              hover:shadow-lg
            "
          >
            View All Products
          </Link>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {recommendedProducts
            .slice(0, 4)
            .map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

        </div>

      </motion.section>
          </div>

  </section>

);

};

export default Cart;