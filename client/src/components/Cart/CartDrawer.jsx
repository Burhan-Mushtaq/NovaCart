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
    totalPrice,
  } = useCart();

  const freeShippingLimit = 4999;
  const remaining = Math.max(freeShippingLimit - totalPrice, 0);

  const shippingProgress = Math.min(
    (totalPrice / freeShippingLimit) * 100,
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
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="fixed right-0 top-0 z-[70] flex h-screen w-full max-w-md flex-col bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                    <ShoppingBag size={21} />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-gray-900">
                      Your Cart
                    </h2>

                    <p className="text-sm text-gray-500">
                      {totalItems}{" "}
                      {totalItems === 1 ? "item" : "items"}
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Free Shipping */}
            {cartItems.length > 0 && (
              <div className="border-b border-gray-100 px-5 py-4">
                {remaining > 0 ? (
                  <p className="mb-2 text-sm text-gray-600">
                    Add{" "}
                    <span className="font-bold text-blue-600">
                      ₹{remaining.toLocaleString()}
                    </span>{" "}
                    more for free shipping.
                  </p>
                ) : (
                  <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-green-600">
                    <Truck size={16} />
                    You unlocked free shipping!
                  </p>
                )}

                <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${shippingProgress}%` }}
                    transition={{ duration: 0.5 }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                  />
                </div>
              </div>
            )}

            {/* Products */}
            <div className="flex-1 overflow-y-auto px-5 py-5">
              {cartItems.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <ShoppingBag size={32} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-gray-900">
                    Your cart is empty
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
                    Looks like you haven't added anything to your cart yet.
                  </p>

                  <button
                    onClick={onClose}
                    className="mt-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <motion.div
                      layout
                      key={item.id}
                      className="rounded-2xl border border-gray-100 bg-gray-50 p-3"
                    >
                      <div className="flex gap-4">
                        {/* Image */}
                        <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-contain"
                          />
                        </div>

                        {/* Details */}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="line-clamp-2 text-sm font-bold text-gray-900">
                              {item.name}
                            </h3>

                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="shrink-0 text-gray-400 transition hover:text-red-500"
                              aria-label={`Remove ${item.name}`}
                            >
                              <Trash2 size={17} />
                            </button>
                          </div>

                          <p className="mt-2 font-bold text-blue-600">
                            ₹{item.price.toLocaleString()}
                          </p>

                          {/* Quantity */}
                          <div className="mt-3 flex items-center justify-between">
                            <div className="flex items-center rounded-xl border border-gray-200 bg-white">
                              <button
                                onClick={() =>
                                  decreaseQuantity(item.id)
                                }
                                className="flex h-8 w-8 items-center justify-center text-gray-600 transition hover:text-blue-600"
                                aria-label="Decrease quantity"
                              >
                                <Minus size={14} />
                              </button>

                              <span className="w-8 text-center text-sm font-semibold">
                                {item.quantity}
                              </span>

                              <button
                                onClick={() =>
                                  increaseQuantity(item.id)
                                }
                                className="flex h-8 w-8 items-center justify-center text-gray-600 transition hover:text-blue-600"
                                aria-label="Increase quantity"
                              >
                                <Plus size={14} />
                              </button>
                            </div>

                            <p className="text-sm font-bold text-gray-900">
                              ₹
                              {(
                                item.price * item.quantity
                              ).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Checkout */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-100 bg-white px-5 pb-6 pt-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Subtotal
                  </span>

                  <span className="text-xl font-black text-gray-900">
                    ₹{totalPrice.toLocaleString()}
                  </span>
                </div>

                <div className="mb-5 flex items-center justify-center gap-2 text-xs text-gray-500">
                  <ShieldCheck size={15} className="text-green-600" />
                  Secure checkout
                </div>

                <button
                  onClick={() => {
                    onClose();
                  }}
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Proceed to Checkout

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
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