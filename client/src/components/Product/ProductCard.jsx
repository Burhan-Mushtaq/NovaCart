import { useCart } from "../../context/CartContext";
import { motion } from "framer-motion";
import {
  Heart,
  ShoppingCart,
  Eye,
  Star,
} from "lucide-react";

const badgeColors = {
  New: "bg-blue-600",
  Sale: "bg-red-500",
  Trending: "bg-green-600",
  "Best Seller": "bg-amber-500",
};

const ProductCard = ({ product }) => {
  // ✅ Hook goes here
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl"
    >
      {/* Image Section */}

      <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">

        {/* Badge */}

        <span
          className={`absolute left-4 top-4 z-20 rounded-full px-4 py-1 text-xs font-semibold text-white ${
            badgeColors[product.badge]
          }`}
        >
          {product.badge}
        </span>

        {/* Wishlist */}

        <button
          className="
          absolute
          right-4
          top-4
          z-20
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-md
          opacity-0
          transition-all
          duration-300
          group-hover:opacity-100
          hover:text-red-500
        "
        >
          <Heart size={18} />
        </button>

        {/* Product Image */}

        <img
          src={product.image}
          alt={product.name}
          className="mx-auto h-72 object-contain transition-transform duration-500 group-hover:scale-110"
        />

        {/* Quick View */}

        <button
          className="
          absolute
          bottom-5
          left-1/2
          flex
          -translate-x-1/2
          translate-y-8
          items-center
          gap-2
          rounded-full
          bg-white
          px-5
          py-2
          text-sm
          font-medium
          shadow-lg
          opacity-0
          transition-all
          duration-300
          group-hover:translate-y-0
          group-hover:opacity-100
        "
        >
          <Eye size={16} />
          Quick View
        </button>
      </div>

      {/* Content */}

      <div className="space-y-4 p-6">
        <h3 className="truncate text-lg font-bold text-gray-900">
          {product.name}
        </h3>

        {/* Rating */}

        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={16}
                className={
                  star <= Math.round(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>

          <span className="text-sm text-gray-500">
            ({product.rating})
          </span>
        </div>

        {/* Price */}

        <div className="flex items-center gap-3">
          <span className="text-2xl font-black text-blue-600">
            ₹{product.price.toLocaleString()}
          </span>

          <span className="text-gray-400 line-through">
            ₹{product.oldPrice.toLocaleString()}
          </span>
        </div>

        {/* Add To Cart */}

        <button
          onClick={() => addToCart(product)}
          className="
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          py-3
          font-semibold
          text-white
          shadow-md
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
        "
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;