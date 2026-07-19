import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CategoryCard = ({ category }) => {
  const Icon = category.icon;

  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-2xl"
    >
      <div
        className={`mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${category.color} text-white transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon size={38} />
      </div>

      <h3 className="text-2xl font-bold text-gray-900">
        {category.title}
      </h3>

      <p className="mt-2 text-gray-500">
        {category.products}
      </p>

      <div className="mt-8 flex items-center gap-2 font-semibold text-blue-600">
        Explore

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-2"
        />
      </div>
    </motion.div>
  );
};

export default CategoryCard;