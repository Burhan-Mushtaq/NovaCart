import { motion } from "framer-motion";
import {
  ChevronRight,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";

import CheckoutForm from "../components/checkout/CheckoutForm";
import OrderSummary from "../components/checkout/OrderSummary";

const Checkout = () => {

  return (

    <section className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white py-10">

      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Breadcrumb */}

        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">

          <Link to="/">
            Home
          </Link>

          <ChevronRight size={16} />

          <Link to="/cart">
            Cart
          </Link>

          <ChevronRight size={16} />

          <span className="font-semibold text-gray-900">
            Checkout
          </span>

        </div>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 flex items-center gap-5"
        >

          <div
            className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-3xl
            bg-gradient-to-br
            from-blue-600
            to-indigo-600
            text-white
          "
          >
            <ShoppingBag size={30} />
          </div>

          <div>

            <h1 className="text-5xl font-black">
              Checkout
            </h1>

            <p className="mt-2 text-gray-500">
              Complete your purchase securely.
            </p>

          </div>

        </motion.div>

        {/* Layout */}

        <div className="grid gap-10 xl:grid-cols-[1.6fr_.8fr]">

          <CheckoutForm />

          <OrderSummary />

        </div>

      </div>

    </section>

  );

};

export default Checkout;