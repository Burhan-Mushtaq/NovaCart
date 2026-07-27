import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ProductCard from "./ProductCard";
import products from "../../data/products";

const RelatedProducts = () => {
  const relatedProducts = products.slice(0, 4);

  return (
    <section className="mx-auto mt-20 max-w-7xl px-4 pb-20">

      {/* Header */}

      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

        <div>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            You May Also Like
          </span>

          <h2 className="mt-4 text-4xl font-black text-gray-900">
            Related Products
          </h2>

          <p className="mt-2 max-w-2xl text-gray-500">
            Explore more premium products carefully selected based on your interests.
          </p>

        </div>

        <Link
          to="/shop"
          className="
          inline-flex
          items-center
          gap-2
          rounded-2xl
          border
          border-blue-600
          px-6
          py-3
          font-semibold
          text-blue-600
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-blue-600
          hover:text-white
        "
        >
          View All

          <ArrowRight size={18} />
        </Link>

      </div>

      {/* Desktop Grid */}

      <div className="hidden gap-7 md:grid md:grid-cols-2 xl:grid-cols-4">

        {relatedProducts.map((product, index) => (

          <motion.div
            key={product.id}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.12,
              duration: 0.4,
            }}
          >
            <ProductCard product={product} />
          </motion.div>

        ))}

      </div>

      {/* Mobile Horizontal Scroll */}

      <div className="flex gap-5 overflow-x-auto pb-4 md:hidden scrollbar-hide">

        {relatedProducts.map((product, index) => (

          <motion.div
            key={product.id}
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.08,
            }}
            className="min-w-[280px] max-w-[280px]"
          >
            <ProductCard product={product} />
          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default RelatedProducts;