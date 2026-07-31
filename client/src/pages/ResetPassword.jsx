import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
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

const ResetPassword = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();

    setTimeout(() => {

      navigate("/login");

    }, 2000);

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
              bg-green-100
            "
          >

            <CheckCircle2
              size={48}
              className="text-green-600"
            />

          </div>

          <h1 className="mt-8 text-center text-4xl font-black">
            Reset Password
          </h1>

          <p className="mt-4 text-center leading-7 text-gray-500">
            Choose a strong password for your account.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >
                        {/* New Password */}

            <div>

              <label className="mb-3 block font-semibold">
                New Password
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
                  placeholder="New Password"
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

            {/* Strength */}

            <div>

              <div className="mb-2 flex justify-between">

                <span className="text-sm text-gray-500">
                  Password Strength
                </span>

                <span className="text-sm font-semibold text-green-600">
                  Strong
                </span>

              </div>

              <div className="h-2 rounded-full bg-gray-200">

                <div className="h-full w-4/5 rounded-full bg-green-500" />

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

              Reset Password

            </button>

          </form>

          <div className="mt-8 text-center">

            <Link
              to="/login"
              className="
                font-semibold
                text-blue-600
                hover:underline
              "
            >

              Back to Login

            </Link>

          </div>

        </motion.div>

      </div>

    </section>

  );

};

export default ResetPassword;