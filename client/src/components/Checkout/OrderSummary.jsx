import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Tag,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import { useCart } from "../../context/CartContext";

const OrderSummary = () => {

  const { cartItems, totalPrice } = useCart();

  const shipping =
    totalPrice >= 4999 || totalPrice === 0
      ? 0
      : 199;

  const tax = Math.round(totalPrice * 0.18);

  const total = totalPrice + shipping + tax;

  return (

    <motion.aside
      initial={{
        opacity: 0,
        x: 20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      className="
      sticky
      top-28
      h-fit
      rounded-3xl
      border
      border-gray-200
      bg-white
      p-8
      shadow-lg
    "
    >

      <h2 className="mb-8 text-3xl font-black">
        Order Summary
      </h2>

      {/* Products */}

      <div className="space-y-5">

        {cartItems.map((item) => (

          <div
            key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
            className="
            flex
            gap-4
            border-b
            border-gray-100
            pb-5
          "
          >

            <div
              className="
              flex
              h-20
              w-20
              items-center
              justify-center
              overflow-hidden
              rounded-2xl
              bg-gray-50
            "
            >

              <img
                src={item.image}
                alt={item.name}
                className="
                h-full
                w-full
                object-contain
              "
              />

            </div>

            <div className="flex-1">

              <h3 className="font-semibold line-clamp-2">
                {item.name}
              </h3>

              <p className="mt-2 text-sm text-gray-500">

                Qty : {item.quantity}

              </p>

              {item.selectedColor && (

                <p className="text-sm text-gray-500">

                  Color : {item.selectedColor}

                </p>

              )}

              {item.selectedSize && (

                <p className="text-sm text-gray-500">

                  Size : {item.selectedSize}

                </p>

              )}

            </div>

            <span className="font-bold text-blue-600">

              ₹
              {(
                item.price *
                item.quantity
              ).toLocaleString()}

            </span>

          </div>

        ))}

      </div>
            {/* Coupon */}

      <div className="my-8">

        <label className="mb-3 flex items-center gap-2 font-semibold">

          <Tag size={18} />

          Coupon Code

        </label>

        <div className="flex gap-3">

          <input
            type="text"
            placeholder="SAVE10"
            className="
            flex-1
            rounded-xl
            border
            border-gray-200
            px-4
            py-3
            outline-none
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
          "
          >
            Apply
          </button>

        </div>

      </div>

      {/* Price Details */}

      <div className="space-y-5 border-t border-gray-200 pt-6">

        <div className="flex justify-between">

          <span className="text-gray-500">
            Subtotal
          </span>

          <span className="font-semibold">
            ₹{totalPrice.toLocaleString()}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-500">
            Shipping
          </span>

          <span
            className={
              shipping === 0
                ? "font-bold text-green-600"
                : "font-semibold"
            }
          >
            {shipping === 0
              ? "FREE"
              : `₹${shipping}`}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-500">
            Tax (18%)
          </span>

          <span className="font-semibold">
            ₹{tax.toLocaleString()}
          </span>

        </div>

        <div className="border-t border-gray-200 pt-5">

          <div className="flex justify-between">

            <span className="text-2xl font-black">
              Total
            </span>

            <span className="text-3xl font-black text-blue-600">
              ₹{total.toLocaleString()}
            </span>

          </div>

        </div>

      </div>
            <div
        className="
        my-8
        flex
        items-center
        gap-4
        rounded-2xl
        bg-green-50
        p-5
      "
      >

        <ShieldCheck
          size={28}
          className="text-green-600"
        />

        <div>

          <h3 className="font-bold text-green-700">
            Secure Checkout
          </h3>

          <p className="text-sm text-green-600">
            SSL encrypted payment & buyer protection.
          </p>

        </div>

      </div>

      <Link
        to="/order-success"
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

        Place Order

        <ArrowRight
          size={20}
          className="
          transition-transform
          group-hover:translate-x-1
        "
        />

      </Link>

      <p className="mt-5 text-center text-sm text-gray-500">
        By placing your order, you agree to our
        Terms & Conditions.
      </p>

    </motion.aside>

  );

};

export default OrderSummary;