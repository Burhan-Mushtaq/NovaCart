import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShoppingBag,
  Truck,
  Receipt,
} from "lucide-react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {

  const orderId =
    "#" +
    Math.floor(
      100000 + Math.random() * 900000
    );

  return (

    <section className="min-h-screen bg-gradient-to-b from-green-50 via-white to-white">

      <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-20">

        <motion.div
          initial={{
            scale: .7,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: .5,
          }}
          className="
          flex
          h-36
          w-36
          items-center
          justify-center
          rounded-full
          bg-green-100
        "
        >

          <CheckCircle2
            size={70}
            className="text-green-600"
          />

        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .2,
          }}
          className="
          mt-10
          text-center
          text-5xl
          font-black
          text-gray-900
        "
        >
          Order Placed Successfully
        </motion.h1>

        <p
          className="
          mt-6
          max-w-2xl
          text-center
          text-lg
          leading-8
          text-gray-500
        "
        >
          Thank you for your purchase.
          Your order has been confirmed and
          will be shipped soon.
        </p>

        <div
          className="
          mt-10
          rounded-3xl
          border
          border-green-200
          bg-green-50
          px-8
          py-5
        "
        >

          <p className="text-sm text-gray-500">
            Order Number
          </p>

          <h2 className="mt-2 text-3xl font-black text-green-700">
            {orderId}
          </h2>

        </div>
                {/* Timeline */}

        <div className="mt-14 w-full rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

          <h2 className="mb-8 text-2xl font-black text-gray-900">
            Order Timeline
          </h2>

          <div className="space-y-8">

            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2
                  size={26}
                  className="text-green-600"
                />
              </div>

              <div>

                <h3 className="font-bold text-lg">
                  Order Confirmed
                </h3>

                <p className="mt-1 text-gray-500">
                  Your order has been received successfully.
                </p>

              </div>

            </div>

            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                <ShoppingBag
                  size={26}
                  className="text-blue-600"
                />
              </div>

              <div>

                <h3 className="font-bold text-lg">
                  Preparing Your Order
                </h3>

                <p className="mt-1 text-gray-500">
                  Our warehouse is packing your products.
                </p>

              </div>

            </div>

            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
                <Truck
                  size={26}
                  className="text-orange-600"
                />
              </div>

              <div>

                <h3 className="font-bold text-lg">
                  Shipping
                </h3>

                <p className="mt-1 text-gray-500">
                  Estimated delivery in 3–5 business days.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Order Summary */}

        <div className="mt-10 grid w-full gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm">

            <Receipt
              size={36}
              className="mx-auto text-blue-600"
            />

            <h3 className="mt-4 text-lg font-bold">
              Payment
            </h3>

            <p className="mt-2 text-gray-500">
              Paid Successfully
            </p>

          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm">

            <Truck
              size={36}
              className="mx-auto text-green-600"
            />

            <h3 className="mt-4 text-lg font-bold">
              Delivery
            </h3>

            <p className="mt-2 text-gray-500">
              3–5 Business Days
            </p>

          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm">

            <ShoppingBag
              size={36}
              className="mx-auto text-purple-600"
            />

            <h3 className="mt-4 text-lg font-bold">
              Status
            </h3>

            <p className="mt-2 font-semibold text-green-600">
              Processing
            </p>

          </div>

        </div>
                {/* Action Buttons */}

        <div className="mt-14 flex w-full flex-col gap-5 sm:flex-row sm:justify-center">

          <Link
            to="/shop"
            className="
              flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              px-8
              py-4
              text-lg
              font-bold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >

            <ShoppingBag size={20} />

            Continue Shopping

          </Link>

          <Link
            to="/orders"
            className="
              flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              border-gray-300
              bg-white
              px-8
              py-4
              text-lg
              font-bold
              text-gray-800
              transition-all
              duration-300
              hover:border-blue-600
              hover:text-blue-600
            "
          >

            View My Orders

          </Link>

        </div>

        {/* Invoice */}

        <button
          className="
            mt-6
            flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            border
            border-dashed
            border-gray-300
            bg-gray-50
            px-8
            py-4
            font-semibold
            text-gray-700
            transition-all
            duration-300
            hover:border-blue-600
            hover:bg-blue-50
            hover:text-blue-600
          "
        >

          <Receipt size={20} />

          Download Invoice

        </button>

        {/* Thank You */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .6,
          }}
          className="
            mt-16
            w-full
            rounded-3xl
            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-purple-600
            p-10
            text-center
            text-white
          "
        >

          <h2 className="text-3xl font-black">
            Thank You For Shopping With Us ❤️
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-100">
            We appreciate your trust in our store.
            We hope you enjoy your purchase and look
            forward to serving you again soon.
          </p>

        </motion.div>

      </div>

    </section>

  );

};

export default OrderSuccess;