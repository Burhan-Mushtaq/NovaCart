import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  User,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";

import { useCart } from "../../context/CartContext";
import CartDrawer from "../cart/CartDrawer";
import { useWishlist } from "../../context/WishlistContext";

const iconButton =
  "relative flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white/80 backdrop-blur shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 hover:shadow-lg";

const badge =
  "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-md";
  

const NavIcons = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const { totalItems } = useCart();
  const { wishlistCount } = useWishlist();

  return (
    <>
      <div className="flex items-center gap-2">
        {/* Search */}
        <button
          className={`${iconButton} xl:hidden`}
          aria-label="Search"
        >
          <Search size={20} />
        </button>

       <Link
  to="/wishlist"
  className={`${iconButton} hidden md:flex`}
  aria-label="Wishlist"
>
  <Heart size={20} />

  <motion.span
    key={wishlistCount}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    className={`${badge} bg-gradient-to-r from-pink-500 to-red-500`}
  >
    {wishlistCount}
  </motion.span>
</Link>

        {/* Cart */}
        <button
          onClick={() => setCartOpen(true)}
          className={iconButton}
          aria-label="Open cart"
        >
          <ShoppingCart size={20} />

          <motion.span
            key={totalItems}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`${badge} bg-gradient-to-r from-blue-600 to-indigo-600`}
          >
            {totalItems}
          </motion.span>
        </button>

        {/* Profile */}
        <button
          className={`${iconButton} hidden lg:flex`}
          aria-label="Profile"
        >
          <User size={20} />
        </button>
      </div>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </>
  );
};

export default NavIcons;