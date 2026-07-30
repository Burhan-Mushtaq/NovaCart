import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Mail,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";

const ForgotPassword = () => {

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
            max-w-lg
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
              size={45}
              className="text-blue-600"
            />

          </div>

          <h1 className="mt-8 text-center text-4xl font-black">
            Forgot Password?
          </h1>

          <p className="mt-4 text-center leading-7 text-gray-500">

            Enter your registered email address and
            we'll send you a verification code.

          </p>

          <form className="mt-10 space-y-6">
                        <div>

              <label className="mb-3 block font-semibold">

                Email Address

              </label>

              <div className="relative">

                <Mail
                  size={20}
                  className="
                    absolute
                    left-4
                    top-4
                    text-gray-400
                  "
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
                    transition-all
                    duration-300
                    focus:border-blue-600
                    focus:ring-4
                    focus:ring-blue-100
                  "
                />

              </div>

            </div>

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

              Send Verification Code

            </button>

          </form>
                    <div className="mt-8 text-center">

            <Link
              to="/login"
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

              Back to Login

            </Link>

          </div>

        </motion.div>

      </div>

    </section>

  );

};

export default ForgotPassword;