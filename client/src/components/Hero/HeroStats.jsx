import { motion } from "framer-motion";

const stats = [
  {
    value: "50K+",
    label: "Happy Customers",
  },
  {
    value: "500+",
    label: "Premium Products",
  },
  {
    value: "4.9★",
    label: "Average Rating",
  },
];

const HeroStats = () => {
  return (
    <div className="grid grid-cols-3 gap-6 pt-6">
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.2,
            duration: 0.5,
          }}
          className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm"
        >
          <h3 className="text-3xl font-black text-blue-600">
            {item.value}
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroStats;