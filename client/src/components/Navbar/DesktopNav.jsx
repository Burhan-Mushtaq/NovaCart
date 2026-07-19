import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Shop",
    path: "/shop",
  },
  {
    name: "Collections",
    path: "/collections",
  },
  {
    name: "Sale",
    path: "/sale",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const DesktopNav = () => {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {links.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `group relative py-2 text-sm font-semibold tracking-wide transition-all duration-300 ${
              isActive
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600"
            }`
          }
        >
          {item.name}

          {/* Animated Underline */}
          <span
            className="
              absolute
              left-0
              -bottom-1
              h-[3px]
              w-0
              rounded-full
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              transition-all
              duration-300
              group-hover:w-full
            "
          />

          {/* Glow */}
          <span
            className="
              absolute
              inset-0
              -z-10
              rounded-lg
              opacity-0
              transition-all
              duration-300
              group-hover:bg-blue-50
              group-hover:opacity-100
            "
          />
        </NavLink>
      ))}
    </nav>
  );
};

export default DesktopNav;