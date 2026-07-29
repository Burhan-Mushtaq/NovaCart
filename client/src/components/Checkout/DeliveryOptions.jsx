import { useState } from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Zap,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const options = [
  {
    id: "standard",
    title: "Standard Delivery",
    description: "Delivered in 5-7 business days",
    price: "FREE",
    icon: Truck,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: "express",
    title: "Express Delivery",
    description: "Delivered in 2-3 business days",
    price: "₹199",
    icon: Zap,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    id: "same-day",
    title: "Same Day Delivery",
    description: "Available in selected cities",
    price: "₹499",
    icon: Clock3,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

const DeliveryOptions = () => {

  const [selected, setSelected] = useState("standard");

  return (

    <div className="space-y-5">

      {options.map((option) => {

        const Icon = option.icon;

        const active = selected === option.id;

        return (

          <motion.button
            key={option.id}
            whileHover={{ y: -3 }}
            whileTap={{ scale: .98 }}
            onClick={() => setSelected(option.id)}
            className={`
              relative
              w-full
              rounded-3xl
              border-2
              p-6
              text-left
              transition-all
              duration-300
              ${
                active
                  ? "border-blue-600 bg-blue-50 shadow-lg"
                  : "border-gray-200 bg-white hover:border-blue-300"
              }
            `}
          >

            {active && (

              <CheckCircle2
                size={24}
                className="
                  absolute
                  right-5
                  top-5
                  text-blue-600
                "
              />

            )}

            <div className="flex items-center gap-5">

              <div
                className={`
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  ${option.bg}
                `}
              >

                <Icon
                  size={30}
                  className={option.color}
                />

              </div>

              <div className="flex-1">

                <h3 className="text-xl font-bold text-gray-900">
                  {option.title}
                </h3>

                <p className="mt-2 text-gray-500">
                  {option.description}
                </p>

              </div>

              <div className="text-right">

                <span
                  className={`
                    text-xl
                    font-black
                    ${
                      option.price === "FREE"
                        ? "text-green-600"
                        : "text-gray-900"
                    }
                  `}
                >
                  {option.price}
                </span>

              </div>

            </div>

          </motion.button>

        );

      })}

    </div>

  );

};

export default DeliveryOptions;