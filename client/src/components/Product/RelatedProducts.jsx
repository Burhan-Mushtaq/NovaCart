import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { products } from "../../data/products";
import ProductCard from "./ProductCard";

const RelatedProducts = ({ product }) => {

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (

    <section className="mt-24">

      {/* Heading */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="mb-10"
      >

        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <div>

            <span
              className="
              rounded-full
              bg-blue-100
              px-4
              py-2
              text-sm
              font-semibold
              text-blue-700
            "
            >
              Recommended
            </span>

            <h2 className="mt-4 text-4xl font-black text-gray-900">
              Related Products
            </h2>

            <p className="mt-3 text-lg text-gray-500">
              Similar products you might love.
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
              border-gray-200
              bg-white
              px-6
              py-3
              font-semibold
              shadow-sm
              transition-all
              duration-300
              hover:border-blue-600
              hover:text-blue-600
              hover:shadow-lg
            "
          >

            View All

            <ArrowRight size={18} />

          </Link>

        </div>

      </motion.div>

      {/* Products */}

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

        {relatedProducts.map((item) => (

          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: .35,
            }}
          >

            <ProductCard
              product={item}
            />

          </motion.div>

        ))}

      </div>

    </section>

  );

};

export default RelatedProducts;