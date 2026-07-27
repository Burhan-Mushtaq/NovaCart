import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  Truck,
  ShieldCheck,
} from "lucide-react";

import { useCart } from "../../context/CartContext";

const CartDrawer = ({ open, onClose }) => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalItems,
    subtotal,
  } = useCart();

  const freeShippingLimit = 4999;

  const remaining = Math.max(
    freeShippingLimit - (subtotal ?? 0),
    0
  );

  const shippingProgress = Math.min(
    ((subtotal ?? 0) / freeShippingLimit) * 100,
    100
  );

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
          />

          {/* Drawer */}

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 32,
            }}
            className="
            fixed
            right-0
            top-0
            z-[70]
            flex
            h-screen
            w-full
            max-w-md
            flex-col
            bg-white
            shadow-2xl
          "
          >

            {/* Header */}

            <div className="border-b border-gray-100 px-6 py-5">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div
                    className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-blue-600
                    to-indigo-600
                    text-white
                    shadow-lg
                  "
                  >
                    <ShoppingBag size={22} />
                  </div>

                  <div>

                    <h2 className="text-xl font-bold">
                      Shopping Cart
                    </h2>

                    <p className="text-sm text-gray-500">
                      {totalItems || 0}{" "}
                      {(totalItems || 0) === 1
                        ? "item"
                        : "items"}
                    </p>

                  </div>

                </div>

                <button
                  onClick={onClose}
                  className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-gray-200
                  transition
                  hover:bg-gray-100
                "
                >
                  <X size={20} />
                </button>

              </div>

            </div>

            {/* Free Shipping */}

            {cartItems.length > 0 && (

              <div className="border-b border-gray-100 px-6 py-4">

                {remaining > 0 ? (

                  <p className="mb-3 text-sm text-gray-600">

                    Add{" "}

                    <span className="font-bold text-blue-600">

                      ₹{remaining.toLocaleString()}

                    </span>

                    {" "}more to unlock FREE Shipping.

                  </p>

                ) : (

                  <div className="mb-3 flex items-center gap-2 text-green-600">

                    <Truck size={17} />

                    <span className="font-semibold">
                      Free Shipping Unlocked
                    </span>

                  </div>

                )}

                <div className="h-2 overflow-hidden rounded-full bg-gray-100">

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${shippingProgress}%`,
                    }}
                    transition={{
                      duration: .5,
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

              </div>

            )}

            {/* Cart Body */}

            <div className="flex-1 overflow-y-auto px-6 py-5">
              {cartItems.length === 0 ? (

  <div className="flex h-full flex-col items-center justify-center text-center">

    <div
      className="
      flex
      h-24
      w-24
      items-center
      justify-center
      rounded-full
      bg-blue-50
      text-blue-600
    "
    >
      <ShoppingBag size={40} />
    </div>

    <h3 className="mt-6 text-2xl font-bold text-gray-900">
      Your cart is empty
    </h3>

    <p className="mt-3 max-w-xs text-sm leading-7 text-gray-500">
      Looks like you haven't added any products yet.
      Start shopping and discover amazing deals.
    </p>

    <button
      onClick={onClose}
      className="
      mt-8
      rounded-2xl
      bg-gradient-to-r
      from-blue-600
      to-indigo-600
      px-8
      py-3
      font-semibold
      text-white
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
    "
    >
      Continue Shopping
    </button>

  </div>

) : (

  <div className="space-y-5">

    {cartItems.map((item) => (

      <motion.div
        key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
        layout
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-4
        shadow-sm
      "
      >

        <div className="flex gap-4">

          {/* Image */}

          <div
            className="
            flex
            h-24
            w-24
            shrink-0
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
              transition-transform
              duration-300
              hover:scale-110
            "
            />

          </div>

          {/* Info */}

          <div className="flex flex-1 flex-col">

            <div className="flex items-start justify-between">

              <div>

                <h3 className="line-clamp-2 text-sm font-bold text-gray-900">

                  {item.name}

                </h3>

                <div className="mt-2 flex flex-wrap gap-2">

                  {item.selectedColor && (

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">

                      {item.selectedColor}

                    </span>

                  )}

                  {item.selectedSize && (

                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">

                      Size {item.selectedSize}

                    </span>

                  )}

                </div>

              </div>

              <button
                onClick={() =>
                  removeFromCart(
                    item.id,
                    item.selectedSize,
                    item.selectedColor
                  )
                }
                className="
                rounded-xl
                p-2
                text-gray-400
                transition
                hover:bg-red-50
                hover:text-red-500
              "
              >
                <Trash2 size={18} />
              </button>

            </div>

            <div className="mt-4 flex items-center justify-between">

              <div>

                <p className="text-lg font-black text-blue-600">

                  ₹{(item.price ?? 0).toLocaleString()}

                </p>

              </div>

              {/* Quantity */}

              <div className="flex items-center rounded-xl border border-gray-200">

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
                  h-9
                  w-9
                  items-center
                  justify-center
                  transition
                  hover:bg-gray-100
                "
                >
                  <Minus size={15} />
                </button>

                <span className="w-10 text-center font-semibold">

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
                  h-9
                  w-9
                  items-center
                  justify-center
                  transition
                  hover:bg-gray-100
                "
                >
                  <Plus size={15} />
                </button>

              </div>

            </div>

            <div className="mt-3 flex justify-end">

              <span className="text-sm font-bold text-gray-900">

                Total :

                {" "}

                ₹{(
                  (item.price ?? 0) *
                  (item.quantity ?? 1)
                ).toLocaleString()}

              </span>

            </div>

          </div>

        </div>

      </motion.div>

    ))}

  </div>

)}
            </div>

            {/* Footer */}

            {cartItems.length > 0 && (

              <div className="border-t border-gray-100 bg-white px-6 py-5">

                {/* Coupon */}

                <div className="mb-5 flex gap-3">

                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="
                    flex-1
                    rounded-xl
                    border
                    border-gray-200
                    px-4
                    py-3
                    text-sm
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
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-black
                  "
                  >
                    Apply
                  </button>

                </div>

                {/* Summary */}

                <div className="space-y-3">

                  <div className="flex items-center justify-between text-gray-600">

                    <span>Subtotal</span>

                    <span className="font-semibold">
                      ₹{(subtotal ?? 0).toLocaleString()}
                    </span>

                  </div>

                  <div className="flex items-center justify-between text-gray-600">

                    <span>Shipping</span>

                    <span className="font-semibold">
                      {remaining > 0 ? "Calculated at checkout" : "FREE"}
                    </span>

                  </div>

                  <div className="border-t border-dashed pt-3">

                    <div className="flex items-center justify-between">

                      <span className="text-lg font-bold">
                        Total
                      </span>

                      <span className="text-2xl font-black text-blue-600">
                        ₹{(subtotal ?? 0).toLocaleString()}
                      </span>

                    </div>

                  </div>

                </div>

                {/* Security */}

                <div className="my-5 flex items-center justify-center gap-2 text-sm text-green-600">

                  <ShieldCheck size={18} />

                  <span>100% Secure Checkout</span>

                </div>

                {/* Checkout */}

                <button
                  onClick={() => {
                    onClose();
                  }}
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

              </div>

            )}

          </motion.aside>

        </>

      )}

    </AnimatePresence>

  );

};

export default CartDrawer;