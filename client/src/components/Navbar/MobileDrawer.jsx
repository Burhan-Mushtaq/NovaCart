import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Home,
  ShoppingBag,
  Grid2X2,
  BadgePercent,
  Heart,
  ShoppingCart,
  Package,
  User,
  Phone,
  Search,
} from "lucide-react";

const links = [
  { name: "Home", path: "/", icon: Home },
  { name: "Shop", path: "/shop", icon: ShoppingBag },
  { name: "Categories", path: "/categories", icon: Grid2X2 },
  { name: "Deals", path: "/deals", icon: BadgePercent },
  { name: "Wishlist", path: "/wishlist", icon: Heart },
  { name: "Cart", path: "/cart", icon: ShoppingCart },
  { name: "Orders", path: "/orders", icon: Package },
  { name: "Profile", path: "/profile", icon: User },
  { name: "Contact", path: "/contact", icon: Phone },
];

const MobileDrawer = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-0 z-50 flex h-screen w-80 flex-col bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b p-5">
              <div>
                <h2 className="text-xl font-bold">NovaCart</h2>
                <p className="text-sm text-gray-500">
                  Premium Shopping
                </p>
              </div>

              <button
                onClick={onClose}
               className="
flex
h-11
w-11
items-center
justify-center
rounded-full
border
border-gray-200
bg-white
shadow-sm
transition-all
duration-300
hover:-translate-y-1
hover:border-blue-500
hover:text-blue-600
hover:shadow-lg
">
                <X size={24} />
              </button>
            </div>

            {/* Search */}
            <div className="p-5">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full rounded-full border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none transition focus:border-blue-600 focus:bg-white"
                />
              </div>
            </div>

            {/* Links */}
            <div className="flex-1 px-4">
              <div className="space-y-2">
                {links.map((item) => {
                  const Icon = item.icon;

                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `flex items-center gap-4 rounded-xl px-4 py-3 transition ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "hover:bg-gray-100"
                        }`
                      }
                    >
                      <Icon size={20} />
                      <span>{item.name}</span>
                    </NavLink>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t p-5">
              <NavLink
                to="/login"
                onClick={onClose}
                className="block rounded-xl bg-blue-600 py-3 text-center font-medium text-white transition hover:bg-blue-700"
              >
                Login
              </NavLink>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileDrawer;