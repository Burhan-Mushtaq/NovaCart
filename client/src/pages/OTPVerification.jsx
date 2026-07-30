import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";

const OTPVerification = () => {

  const [otp, setOtp] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const inputRefs = useRef([]);

  const handleChange = (value, index) => {

    if (!/^\d?$/.test(value)) return;

    const updated = [...otp];

    updated[index] = value;

    setOtp(updated);

    if (
      value &&
      index < otp.length - 1
    ) {
      inputRefs.current[index + 1]?.focus();
    }

  };

  const handleKeyDown = (
    e,
    index
  ) => {

    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {

      inputRefs.current[index - 1]?.focus();

    }

  };

  return (

    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

      <div className="mx-auto flex min-h-screen items-center justify-center px-5">

        <motion.div
          initial={{
            opacity:0,
            y:30,
          }}
          animate={{
            opacity:1,
            y:0,
          }}
          className="
            w-full
            max-w-xl
            rounded-3xl
            bg-white
            p-10
            shadow-2xl
          "
        >

          <div
            className="
              mx-auto
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              bg-blue-100
            "
          >

            <ShieldCheck
              size={46}
              className="text-blue-600"
            />

          </div>

          <h1 className="mt-8 text-center text-4xl font-black">
            Verify OTP
          </h1>

          <p className="mt-4 text-center text-gray-500 leading-7">
            Enter the 6-digit verification code sent to your email.
          </p>
                    <div className="mt-10 flex justify-center gap-3">

            {otp.map((digit, index) => (

              <input
                key={index}
                ref={(el) =>
                  (inputRefs.current[index] = el)
                }
                value={digit}
                onChange={(e) =>
                  handleChange(
                    e.target.value,
                    index
                  )
                }
                onKeyDown={(e) =>
                  handleKeyDown(
                    e,
                    index
                  )
                }
                maxLength={1}
                className="
                  h-16
                  w-16
                  rounded-2xl
                  border
                  border-gray-300
                  text-center
                  text-2xl
                  font-bold
                  outline-none
                  transition-all
                  duration-300
                  focus:border-blue-600
                  focus:ring-4
                  focus:ring-blue-100
                "
              />

            ))}

          </div>

          <div className="mt-8 text-center">

            <p className="text-gray-500">

              Code expires in

              <span className="ml-2 font-bold text-blue-600">

                01:59

              </span>

            </p>

          </div>
                    <button
            className="
              mt-10
              w-full
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              via-indigo-600
              to-purple-600
              py-4
              font-bold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >

            Verify OTP

          </button>

          <button
            className="
              mt-5
              w-full
              rounded-2xl
              border
              border-gray-200
              py-4
              font-semibold
              transition
              hover:bg-gray-50
            "
          >

            Resend Code

          </button>

          <div className="mt-8 text-center">

            <Link
              to="/forgot-password"
              className="
                inline-flex
                items-center
                gap-2
                font-semibold
                text-blue-600
                hover:underline
              "
            >

              <ArrowLeft size={18} />

              Back

            </Link>

          </div>

        </motion.div>

      </div>

    </section>

  );

};

export default OTPVerification;