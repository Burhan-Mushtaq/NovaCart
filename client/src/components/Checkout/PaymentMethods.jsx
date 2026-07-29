import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CreditCard,
  Landmark,
  Wallet,
  Banknote,
  ShieldCheck,
} from "lucide-react";

const methods = [
  {
    id: "card",
    title: "Credit / Debit Card",
    subtitle: "Visa, Mastercard, RuPay",
    icon: CreditCard,
  },
  {
    id: "upi",
    title: "UPI Payment",
    subtitle: "Google Pay, PhonePe, Paytm",
    icon: Wallet,
  },
  {
    id: "netbanking",
    title: "Net Banking",
    subtitle: "All major banks",
    icon: Landmark,
  },
  {
    id: "cod",
    title: "Cash on Delivery",
    subtitle: "Pay when your order arrives",
    icon: Banknote,
  },
];

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

const PaymentMethods = () => {

  const [method, setMethod] = useState("card");

  return (

    <div>

      <h2 className="mb-8 text-3xl font-black text-gray-900">
        Payment Method
      </h2>

      <div className="space-y-4">

        {methods.map((item) => {

          const Icon = item.icon;

          return (

            <motion.button
              key={item.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: .99 }}
              onClick={() => setMethod(item.id)}
              className={`
                flex
                w-full
                items-center
                justify-between
                rounded-2xl
                border-2
                p-5
                transition-all
                duration-300
                ${
                  method === item.id
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300"
                }
              `}
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white
                  shadow-sm
                "
                >
                  <Icon size={24} />
                </div>

                <div className="text-left">

                  <h3 className="font-bold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.subtitle}
                  </p>

                </div>

              </div>

              <div
                className={`
                  h-6
                  w-6
                  rounded-full
                  border-2
                  ${
                    method === item.id
                      ? "border-blue-600 bg-blue-600"
                      : "border-gray-300"
                  }
                `}
              />

            </motion.button>

          );

        })}

      </div>
            <AnimatePresence>

        {method === "card" && (

          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="mt-8 space-y-5 overflow-hidden"
          >

            <input
              type="text"
              placeholder="Cardholder Name"
              className={inputStyle}
            />

            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className={inputStyle}
            />

            <div className="grid gap-5 md:grid-cols-2">

              <input
                type="text"
                placeholder="MM / YY"
                className={inputStyle}
              />

              <input
                type="password"
                placeholder="CVV"
                className={inputStyle}
              />

            </div>

          </motion.div>

        )}

      </AnimatePresence>

      <div
        className="
        mt-8
        flex
        items-center
        gap-3
        rounded-2xl
        bg-green-50
        p-5
      "
      >

        <ShieldCheck
          size={26}
          className="text-green-600"
        />

        <div>

          <h3 className="font-bold text-green-700">
            Secure Payment
          </h3>

          <p className="text-sm text-green-600">
            Your payment information is encrypted and
            securely processed.
          </p>

        </div>

      </div>

    </div>

  );

};

export default PaymentMethods;