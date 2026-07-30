import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShoppingBag,
} from "lucide-react";
import { useState } from "react";

const Login = () => {

  const [showPassword, setShowPassword] =
    useState(false);

  return (

    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

      <div className="mx-auto flex min-h-screen max-w-7xl">

        {/* Left */}

        <div className="hidden w-1/2 items-center justify-center bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 lg:flex">

          <motion.div
            initial={{ opacity:0,x:-30 }}
            animate={{ opacity:1,x:0 }}
            className="max-w-md text-white"
          >

            <ShoppingBag size={70}/>

            <h1 className="mt-8 text-5xl font-black">

              Welcome Back

            </h1>

            <p className="mt-6 text-lg leading-8 text-blue-100">

              Sign in to manage your orders,
              wishlist, addresses and enjoy
              seamless shopping.

            </p>

          </motion.div>

        </div>

        {/* Right */}

        <div className="flex flex-1 items-center justify-center px-6">

          <motion.div
            initial={{ opacity:0,y:30 }}
            animate={{ opacity:1,y:0 }}
            className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl"
          >

            <h2 className="text-4xl font-black">

              Login

            </h2>

            <p className="mt-3 text-gray-500">

              Continue to your account

            </p>

            <form className="mt-10 space-y-6">
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
                    className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    py-4
                    pl-12
                    pr-4
                    outline-none
                    transition
                    focus:border-blue-600
                  "
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
                    className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    py-4
                    pl-12
                    pr-12
                    outline-none
                    transition
                    focus:border-blue-600
                  "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="
                    absolute
                    right-4
                    top-4
                  "
                  >

                    {showPassword
                      ? <EyeOff size={20}/>
                      : <Eye size={20}/>
                    }

                  </button>

                </div>

              </div>
                            <div className="flex items-center justify-between">

                <label className="flex items-center gap-2">

                  <input type="checkbox"/>

                  Remember me

                </label>

                <Link
                  to="/forgot-password"
                  className="text-blue-600"
                >

                  Forgot Password?

                </Link>

              </div>

              <button
                className="
                w-full
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                py-4
                font-bold
                text-white
                transition
                hover:shadow-xl
              "
              >

                Login

              </button>

            </form>

            <p className="mt-8 text-center">

              Don't have an account?

              <Link
                to="/register"
                className="ml-2 font-bold text-blue-600"
              >

                Register

              </Link>

            </p>

          </motion.div>

        </div>

      </div>

    </section>

  );

};

export default Login;