import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ShoppingBag,
} from "lucide-react";

const inputStyle = `
w-full
rounded-2xl
border
border-gray-200
py-4
pl-12
pr-12
outline-none
transition-all
duration-300
focus:border-blue-600
focus:ring-4
focus:ring-blue-100
`;

const Register = () => {

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  return (

    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

      <div className="mx-auto flex min-h-screen max-w-7xl">

        {/* Left */}

        <div className="hidden w-1/2 items-center justify-center bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 lg:flex">

          <motion.div
            initial={{
              opacity:0,
              x:-30,
            }}
            animate={{
              opacity:1,
              x:0,
            }}
            className="max-w-md text-white"
          >

            <ShoppingBag size={70} />

            <h1 className="mt-8 text-5xl font-black">
              Create Account
            </h1>

            <p className="mt-6 text-lg leading-8 text-blue-100">
              Join thousands of customers and enjoy
              fast checkout, wishlist syncing,
              order tracking and exclusive offers.
            </p>

          </motion.div>

        </div>

        {/* Right */}

        <div className="flex flex-1 items-center justify-center px-6">

          <motion.div
            initial={{
              opacity:0,
              y:30,
            }}
            animate={{
              opacity:1,
              y:0,
            }}
            className="w-full max-w-xl rounded-3xl bg-white p-10 shadow-xl"
          >

            <h2 className="text-4xl font-black">
              Register
            </h2>

            <p className="mt-3 text-gray-500">
              Create your new account
            </p>

            <form className="mt-10 space-y-6">
                            {/* Full Name */}

              <div>

                <label className="mb-3 block font-semibold">
                  Full Name
                </label>

                <div className="relative">

                  <User
                    size={20}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="John Doe"
                    className={inputStyle}
                  />

                </div>

              </div>

              {/* Email */}

              <div>

                <label className="mb-3 block font-semibold">
                  Email
                </label>

                <div className="relative">

                  <Mail
                    size={20}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className={inputStyle}
                  />

                </div>

              </div>

              {/* Phone */}

              <div>

                <label className="mb-3 block font-semibold">
                  Phone Number
                </label>

                <div className="relative">

                  <Phone
                    size={20}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <input
                    type="tel"
                    placeholder="+91 9876543210"
                    className={inputStyle}
                  />

                </div>

              </div>
                            {/* Password */}

              <div>

                <label className="mb-3 block font-semibold">
                  Password
                </label>

                <div className="relative">

                  <Lock
                    size={20}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Password"
                    className={inputStyle}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-4"
                  >
                    {showPassword
                      ? <EyeOff size={20}/>
                      : <Eye size={20}/>
                    }
                  </button>

                </div>

              </div>

              {/* Confirm Password */}

              <div>

                <label className="mb-3 block font-semibold">
                  Confirm Password
                </label>

                <div className="relative">

                  <Lock
                    size={20}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm Password"
                    className={inputStyle}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    className="absolute right-4 top-4"
                  >
                    {showConfirmPassword
                      ? <EyeOff size={20}/>
                      : <Eye size={20}/>
                    }
                  </button>

                </div>

              </div>
                            {/* Password Strength */}

              <div>

                <div className="mb-2 flex items-center justify-between">

                  <span className="text-sm font-medium text-gray-600">
                    Password Strength
                  </span>

                  <span className="text-sm font-semibold text-green-600">
                    Strong
                  </span>

                </div>

                <div className="h-2 overflow-hidden rounded-full bg-gray-200">

                  <div className="h-full w-4/5 rounded-full bg-green-500" />

                </div>

              </div>

              {/* Terms */}

              <label className="flex items-start gap-3">

                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-blue-600"
                />

                <span className="text-sm leading-6 text-gray-600">

                  I agree to the{" "}

                  <Link
                    to="/terms"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Terms & Conditions
                  </Link>

                  {" "}and{" "}

                  <Link
                    to="/privacy"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Privacy Policy
                  </Link>

                </span>

              </label>

              {/* Register Button */}

              <button
                type="submit"
                className="
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

                Create Account

              </button>
                            {/* Divider */}

              <div className="relative py-2">

                <div className="absolute inset-0 flex items-center">

                  <div className="w-full border-t border-gray-200" />

                </div>

                <div className="relative flex justify-center">

                  <span className="bg-white px-4 text-sm text-gray-500">
                    OR
                  </span>

                </div>

              </div>

              {/* Social Login */}

              <div className="grid gap-4 md:grid-cols-2">

                <button
                  type="button"
                  className="
                    rounded-2xl
                    border
                    border-gray-200
                    py-4
                    font-semibold
                    transition
                    hover:bg-gray-50
                  "
                >
                  Continue with Google
                </button>

                <button
                  type="button"
                  className="
                    rounded-2xl
                    border
                    border-gray-200
                    py-4
                    font-semibold
                    transition
                    hover:bg-gray-50
                  "
                >
                  Continue with GitHub
                </button>

              </div>

            </form>

            <p className="mt-8 text-center text-gray-600">

              Already have an account?

              <Link
                to="/login"
                className="ml-2 font-bold text-blue-600 hover:underline"
              >
                Login
              </Link>

            </p>

          </motion.div>

        </div>

      </div>

    </section>

  );

};

export default Register;