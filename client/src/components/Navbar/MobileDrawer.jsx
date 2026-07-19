import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  X,
  Home,
  ShoppingBag,
  LayoutGrid,
  BadgePercent,
  Heart,
  ShoppingCart,
  Package,
  User,
  Phone,
  Search,
  ChevronRight,
  LogIn,
} from "lucide-react";

const links = [
  {
    name: "Home",
    path: "/",
    icon: Home,
  },
  {
    name: "Shop",
    path: "/shop",
    icon: ShoppingBag,
  },
  {
    name: "Collections",
    path: "/collections",
    icon: LayoutGrid,
  },
  {
    name: "Sale",
    path: "/sale",
    icon: BadgePercent,
  },
  {
    name: "Wishlist",
    path: "/wishlist",
    icon: Heart,
  },
  {
    name: "Cart",
    path: "/cart",
    icon: ShoppingCart,
  },
  {
    name: "Orders",
    path: "/orders",
    icon: Package,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: Phone,
  },
];

const MobileDrawer = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />

          {/* Drawer */}

          <motion.aside
            initial={{ x: -420 }}
            animate={{ x: 0 }}
            exit={{ x: -420 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="fixed left-0 top-0 z-50 flex h-screen w-[330px] flex-col overflow-hidden bg-white shadow-2xl"
          >
            {/* Header */}

            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 px-6 pb-8 pt-7 text-white">

              {/* Decorative Blur */}

              <div className="absolute -right-12 -top-10 h-36 w-36 rounded-full bg-white/10 blur-3xl" />

              <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-white/10 blur-2xl" />

              {/* Top Row */}

              <div className="relative flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">

                    <User size={28} />

                  </div>

                  <div>

                    <h2 className="text-xl font-bold tracking-tight">

                      NovaCart

                    </h2>

                    <p className="text-sm text-blue-100">

                      Premium Shopping

                    </p>

                  </div>

                </div>

                <button
                  onClick={onClose}
                  className="rounded-xl bg-white/15 p-2 transition hover:bg-white/25"
                >
                  <X size={22} />
                </button>

              </div>

              {/* Welcome */}

              <div className="relative mt-7">

                <p className="text-sm text-blue-100">

                  Welcome back 👋

                </p>

                <h3 className="mt-1 text-2xl font-bold">

                  Explore New Arrivals

                </h3>

              </div>

            </div>

            {/* Search */}

            <div className="border-b border-gray-100 p-5">

              <div className="flex items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 transition-all duration-300 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-100">

                <Search
                  size={18}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Search products..."
                  className="h-12 flex-1 bg-transparent pl-3 text-sm outline-none placeholder:text-gray-400"
                />

              </div>

            </div>

            {/* Navigation */}

            <div className="flex-1 overflow-y-auto px-4 py-5">

              <div className="space-y-2">
                                {links.map((item) => {
                  const Icon = item.icon;

                  return (
                    <NavLink key={item.path} to={item.path} onClick={onClose}>
                      {({ isActive }) => (
                        <motion.div
                          whileTap={{ scale: 0.98 }}
                          className={`group flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ${
                                isActive
                                  ? "bg-white/20"
                                  : "bg-gray-100 group-hover:bg-white"
                              }`}
                            >
                              <Icon size={20} />
                            </div>

                            <span className="font-medium">
                              {item.name}
                            </span>
                          </div>

                          <ChevronRight
                            size={18}
                            className={`transition-transform duration-300 ${
                              isActive
                                ? "translate-x-1"
                                : "group-hover:translate-x-1"
                            }`}
                          />
                        </motion.div>
                      )}
                    </NavLink>
                  );
                })}
              </div>
            </div>

            {/* Footer */}

            <div className="border-t border-gray-100 p-5">

              <NavLink
                to="/login"
                onClick={onClose}
                className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <LogIn size={18} />

                Login / Register
              </NavLink>

              <div className="mt-6 rounded-2xl bg-gray-50 p-4">

                <p className="text-sm font-semibold text-gray-800">
                  Need Help?
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Our support team is available 24/7 to help with orders,
                  returns and account issues.
                </p>

                <button className="mt-4 w-full rounded-xl border border-gray-200 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600">
                  Contact Support
                </button>

              </div>

              <div className="mt-5 text-center">

                <p className="text-xs text-gray-400">
                  NovaCart v1.0
                </p>

                <p className="mt-1 text-[11px] text-gray-400">
                  © 2026 NovaCart. All rights reserved.
                </p>

              </div>

            </div>

          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileDrawer;