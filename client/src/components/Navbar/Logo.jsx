import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 group"
    >
      {/* Brand Mark */}
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-blue-600
          via-indigo-600
          to-violet-600
          shadow-lg
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:rotate-6
        "
      >
        <div className="h-5 w-5 rounded-md bg-white rotate-45"></div>
      </div>

      <div>
        <h1 className="text-2xl font-extrabold tracking-tight">
          NovaCart
        </h1>

        <p className="text-xs text-gray-500 -mt-1 tracking-widest uppercase">
          Premium Store
        </p>
      </div>
    </Link>
  );
};

export default Logo;