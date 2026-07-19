import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const Logo = () => {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3"
    >
      {/* Logo Icon */}
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
          text-white
          shadow-lg
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:rotate-6
          group-hover:shadow-blue-300/40
        "
      >
        <ShoppingBag size={22} strokeWidth={2.4} />
      </div>

      {/* Text */}
      <div className="hidden sm:block">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
          NovaCart
        </h1>

        <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500">
          Premium Store
        </p>
      </div>
    </Link>
  );
};

export default Logo;