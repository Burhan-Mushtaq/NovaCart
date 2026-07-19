import {
  Heart,
  ShoppingCart,
  User,
  Search,
} from "lucide-react";

import { useCart } from "../../context/CartContext";

const iconButton =
  "relative flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white/80 backdrop-blur shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 hover:shadow-lg";

const badge =
  "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-md";

const NavIcons = () => {
  const { totalItems } = useCart();

  return (
    <div className="flex items-center gap-2">
      {/* Search */}
      <button className={`${iconButton} xl:hidden`}>
        <Search size={20} />
      </button>

      {/* Wishlist */}
      <button className={`${iconButton} hidden md:flex`}>
        <Heart size={20} />

        <span
          className={`${badge} bg-gradient-to-r from-pink-500 to-red-500`}
        >
          0
        </span>
      </button>

      {/* Cart */}
      <button className={iconButton}>
        <ShoppingCart size={20} />

        <span
          className={`${badge} bg-gradient-to-r from-blue-600 to-indigo-600`}
        >
          {totalItems}
        </span>
      </button>

      {/* Profile */}
      <button className={`${iconButton} hidden lg:flex`}>
        <User size={20} />
      </button>
    </div>
  );
};

export default NavIcons;