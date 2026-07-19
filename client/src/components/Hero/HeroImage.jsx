import { motion } from "framer-motion";
import {
  Star,
  Truck,
  BadgePercent,
  ShoppingBag,
} from "lucide-react";

import Shoe from "../../assets/images/shoe-image.png";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex items-center justify-center py-12"
    >
      {/* Background Glow */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-gradient-to-br from-blue-300/30 via-indigo-300/20 to-violet-300/30 blur-3xl" />

      {/* Decorative Circles */}
      <div className="absolute top-12 left-10 h-16 w-16 rounded-full border border-blue-200 bg-white/40 backdrop-blur-sm" />

      <div className="absolute bottom-10 right-10 h-10 w-10 rounded-full bg-blue-500/20" />

      {/* Main Product */}
      <motion.img
        src={Shoe}
        alt="Premium Sneaker"
        animate={{
          y: [0, -18, 0],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-20 w-full max-w-xl drop-shadow-[0_40px_60px_rgba(37,99,235,0.25)]"
      />

      {/* Discount Card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute left-0 top-16 z-30 rounded-2xl bg-white p-4 shadow-xl"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-100 p-3">
            <BadgePercent
              className="text-blue-600"
              size={22}
            />
          </div>

          <div>
            <h4 className="font-bold text-gray-900">
              30% OFF
            </h4>

            <p className="text-xs text-gray-500">
              Limited Offer
            </p>
          </div>
        </div>
      </motion.div>

      {/* Rating Card */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute right-0 top-32 z-30 rounded-2xl bg-white p-4 shadow-xl"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-yellow-100 p-3">
            <Star
              size={22}
              className="fill-yellow-500 text-yellow-500"
            />
          </div>

          <div>
            <h4 className="font-bold text-gray-900">
              4.9 Rating
            </h4>

            <p className="text-xs text-gray-500">
              18k+ Reviews
            </p>
          </div>
        </div>
      </motion.div>

      {/* Shipping Card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-12 left-10 z-30 rounded-2xl bg-white p-4 shadow-xl"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-green-100 p-3">
            <Truck
              className="text-green-600"
              size={22}
            />
          </div>

          <div>
            <h4 className="font-bold text-gray-900">
              Free Shipping
            </h4>

            <p className="text-xs text-gray-500">
              On orders above ₹4,999
            </p>
          </div>
        </div>
      </motion.div>

      {/* Floating Shopping Bag */}
      <motion.div
        animate={{
          rotate: [0, 12, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute bottom-8 right-8 z-20 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white shadow-xl"
      >
        <ShoppingBag size={24} />
      </motion.div>
    </motion.div>
  );
};

export default HeroImage;