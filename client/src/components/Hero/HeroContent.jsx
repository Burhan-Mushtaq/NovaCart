import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import HeroStats from "./HeroStats";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700 shadow-sm">
        <Sparkles size={16} />

        New Summer Collection 2026
      </div>

      {/* Heading */}

      <div className="space-y-5">
        <h1 className="text-5xl font-black leading-tight text-gray-900 md:text-6xl xl:text-7xl">
          Elevate
          <br />

          Every{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Step.
          </span>
        </h1>

        <p className="max-w-xl text-lg leading-8 text-gray-600">
          Discover premium sneakers crafted for performance,
          comfort, and timeless style. Explore the newest
          arrivals from the world's leading brands.
        </p>
      </div>

      {/* Buttons */}

      <div className="flex flex-wrap items-center gap-4">
        <button className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          Shop Now

          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />
        </button>

        <button className="rounded-2xl border border-gray-200 bg-white px-8 py-4 font-semibold text-gray-800 shadow-sm transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg">
          Explore Collection
        </button>
      </div>

      {/* Stats */}

      <HeroStats />
    </motion.div>
  );
};

export default HeroContent;