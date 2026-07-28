import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  ArrowLeft,
  ShoppingCart,
} from "lucide-react";

import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <section className="min-h-screen bg-gray-50">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">

          <motion.div
            initial={{ scale: .8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: .5 }}
            className="
            flex
            h-28
            w-28
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-blue-100
            to-indigo-100
            text-blue-600
            shadow-lg
          "
          >
            <ShoppingCart size={52} />
          </motion.div>

          <h1 className="mt-8 text-4xl font-black text-gray-900">
            Your Cart is Empty
          </h1>

          <p className="mt-4 max-w-xl text-lg leading-8 text-gray-500">
            Looks like you haven't added any products yet.
            Discover thousands of premium products and
            start shopping today.
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
    <section className="bg-gray-50 py-12">

      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >

          <div className="flex items-center gap-4">

            <div
              className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-blue-600
              to-indigo-600
              text-white
            "
            >
              <ShoppingBag size={28} />
            </div>

            <div>

              <h1 className="text-4xl font-black">

                Shopping Cart

              </h1>

              <p className="mt-1 text-gray-500">

                Review your items before checkout

              </p>

            </div>

          </div>

        </motion.div>

        {/* Main Grid */}

        <div className="grid gap-8 xl:grid-cols-[1.7fr_.8fr]">

          {/* Left Side */}

          <div className="space-y-6">
            {cartItems.map((item, index) => (
  <motion.div
    key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    className="
      rounded-3xl
      border
      border-gray-200
      bg-white
      p-6
      shadow-sm
      transition-all
      duration-300
      hover:shadow-xl
    "
  >
    <div className="flex flex-col gap-6 md:flex-row">

      {/* Product Image */}

      <div
        className="
          flex
          h-44
          w-full
          items-center
          justify-center
          overflow-hidden
          rounded-2xl
          bg-gray-50
          md:w-44
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
            hover:scale-110
          "
        />
      </div>

      {/* Product Details */}

      <div className="flex flex-1 flex-col">

        <div className="flex flex-col justify-between gap-4 lg:flex-row">

          <div>

            <h2 className="text-2xl font-bold text-gray-900">
              {item.name}
            </h2>

            <p className="mt-3 text-gray-500 leading-7">
              Premium quality product with modern
              craftsmanship and superior comfort.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">

              {item.selectedColor && (
                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
                  Color : {item.selectedColor}
                </span>
              )}

              {item.selectedSize && (
                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                  Size : {item.selectedSize}
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

        <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          {/* Price */}

          <div>

            <p className="text-sm text-gray-500">
              Price
            </p>

            <h3 className="text-3xl font-black text-blue-600">
              ₹{(item.price ?? 0).toLocaleString()}
            </h3>

          </div>

          {/* Quantity */}

          <div className="flex items-center rounded-2xl border border-gray-200">

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

            <span className="w-12 text-center font-bold">
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

          {/* Total */}

          <div className="text-right">

            <p className="text-sm text-gray-500">
              Total
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              ₹
              {(
                (item.price ?? 0) *
                (item.quantity ?? 1)
              ).toLocaleString()}
            </h3>

          </div>

        </div>

      </div>

    </div>

  </motion.div>
))}
          </div>

          {/* Right Side */}

          <div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="
                sticky
                top-28
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-8
                shadow-lg
              "
            >

              <h2 className="mb-8 text-2xl font-black text-gray-900">
                Order Summary
              </h2>

              {/* Coupon */}

              <div className="mb-8">

                <label className="mb-3 block font-semibold text-gray-700">
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
                      transition
                      hover:bg-black
                    "
                  >
                    Apply
                  </button>

                </div>

              </div>

              {/* Summary */}

              <div className="space-y-5">

                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Subtotal
                  </span>

                  <span className="font-semibold">
                    ₹{(subtotal ?? 0).toLocaleString()}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Shipping
                  </span>

                  <span className="font-semibold text-green-600">
                    FREE
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Tax
                  </span>

                  <span className="font-semibold">
                    ₹{(tax ?? 0).toLocaleString()}
                  </span>

                </div>

                <div className="border-t pt-5">

                  <div className="flex justify-between">

                    <span className="text-xl font-bold">
                      Total
                    </span>

                    <span className="text-3xl font-black text-blue-600">
                      ₹{(total ?? 0).toLocaleString()}
                    </span>

                  </div>

                </div>

              </div>

              {/* Secure */}

              <div
                className="
                  my-8
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-green-50
                  py-4
                  text-green-700
                "
              >

                <ShieldCheck size={22} />

                <span className="font-semibold">
                  Secure SSL Checkout
                </span>

              </div>

              {/* Checkout */}

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
                    group-hover:translate-x-1
                  "
                />

              </button>

              <p className="mt-5 text-center text-sm text-gray-500">
                Taxes and shipping calculated at checkout.
              </p>

            </motion.div>

          </div>

        </div>
              </div>

      {/* Recommended Products */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <div className="mb-10 flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-black text-gray-900">
              You May Also Like
            </h2>

            <p className="mt-2 text-gray-500">
              Hand-picked products just for you
            </p>

          </div>

          <Link
            to="/shop"
            className="
              rounded-xl
              border
              border-gray-200
              px-5
              py-3
              font-semibold
              transition
              hover:border-blue-600
              hover:text-blue-600
            "
          >
            View All
          </Link>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {[1, 2, 3, 4].map((item) => (

            <motion.div
              key={item}
              whileHover={{ y: -8 }}
              className="
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-5
                shadow-sm
                transition
                hover:shadow-xl
              "
            >

              <div className="aspect-square rounded-2xl bg-gray-100" />

              <div className="mt-5">

                <div className="h-5 w-40 rounded bg-gray-200" />

                <div className="mt-3 h-4 w-28 rounded bg-gray-100" />

                <div className="mt-6 flex items-center justify-between">

                  <div className="h-6 w-20 rounded bg-blue-100" />

                  <div className="h-10 w-10 rounded-full bg-blue-600" />

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </motion.section>
</section>

);
};

export default Cart;