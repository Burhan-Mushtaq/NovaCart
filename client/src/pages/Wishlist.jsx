import { Link } from "react-router-dom";
import { Heart, ArrowLeft, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/product/ProductCard";

const Wishlist = () => {
  const {
    wishlistItems,
    clearWishlist,
  } = useWishlist();

  return (
    <main className="min-h-screen bg-[#FAFAFA] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <Link
              to="/"
              className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-blue-600"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-red-500 text-white shadow-lg">
                <Heart size={23} className="fill-current" />
              </div>

              <div>
                <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
                  My Wishlist
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                  {wishlistItems.length}{" "}
                  {wishlistItems.length === 1
                    ? "product"
                    : "products"}{" "}
                  saved
                </p>
              </div>
            </div>
          </div>

          {/* Clear Wishlist */}
          {wishlistItems.length > 0 && (
            <button
              onClick={clearWishlist}
              className="self-start rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50 sm:self-auto"
            >
              Clear Wishlist
            </button>
          )}
        </div>

        {/* Empty State */}
        {wishlistItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex min-h-[55vh] flex-col items-center justify-center rounded-3xl border border-gray-200 bg-white px-6 text-center shadow-sm"
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-pink-50 text-pink-500">
              <Heart size={42} />
            </div>

            <h2 className="mt-6 text-2xl font-black text-gray-900">
              Your wishlist is empty
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
              Save products you love here so you can easily
              find them later.
            </p>

            <Link
              to="/shop"
              className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <ShoppingBag size={18} />
              Explore Products
            </Link>
          </motion.div>
        ) : (
          <>
            {/* Wishlist Info */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Your saved products
              </p>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                {wishlistItems.length} saved
              </span>
            </div>

            {/* Products */}
            <motion.div
              layout
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {wishlistItems.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </main>
  );
};

export default Wishlist;