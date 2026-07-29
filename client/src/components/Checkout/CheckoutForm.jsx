import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Home,
} from "lucide-react";

import AddressForm from "./AddressForm";
import DeliveryOptions from "./DeliveryOptions";
import PaymentMethods from "./PaymentMethods";

const inputStyle = `
w-full
rounded-2xl
border
border-gray-200
bg-white
px-5
py-4
outline-none
transition-all
duration-300
focus:border-blue-600
focus:ring-4
focus:ring-blue-100
`;

const CheckoutForm = () => {

  return (

    <motion.div
      initial={{
        opacity: 0,
        x: -20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      className="space-y-8"
    >

      {/* Contact Information */}

      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

        <h2 className="mb-8 text-3xl font-black text-gray-900">
          Contact Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          {/* First Name */}

          <div>

            <label className="mb-3 flex items-center gap-2 font-semibold">

              <User size={18} />

              First Name

            </label>

            <input
              type="text"
              placeholder="John"
              className={inputStyle}
            />

          </div>

          {/* Last Name */}

          <div>

            <label className="mb-3 flex items-center gap-2 font-semibold">

              <User size={18} />

              Last Name

            </label>

            <input
              type="text"
              placeholder="Doe"
              className={inputStyle}
            />

          </div>

          {/* Email */}

          <div>

            <label className="mb-3 flex items-center gap-2 font-semibold">

              <Mail size={18} />

              Email Address

            </label>

            <input
              type="email"
              placeholder="john@example.com"
              className={inputStyle}
            />

          </div>

          {/* Phone */}

          <div>

            <label className="mb-3 flex items-center gap-2 font-semibold">

              <Phone size={18} />

              Phone Number

            </label>

            <input
              type="tel"
              placeholder="+91 9876543210"
              className={inputStyle}
            />

          </div>

        </div>

      </div>
            {/* Shipping Address */}

      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

        <div className="mb-8 flex items-center gap-3">

          <MapPin
            size={24}
            className="text-blue-600"
          />

          <h2 className="text-3xl font-black">
            Shipping Address
          </h2>

        </div>

        <AddressForm />

      </div>

      {/* Delivery */}

      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

        <div className="mb-8 flex items-center gap-3">

          <Home
            size={24}
            className="text-blue-600"
          />

          <h2 className="text-3xl font-black">
            Delivery Method
          </h2>

        </div>

        <DeliveryOptions />

      </div>

      {/* Payment */}

      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

        <PaymentMethods />

      </div>

    </motion.div>

  );

};

export default CheckoutForm;