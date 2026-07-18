import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Collections", path: "/collections" },
  { name: "New", path: "/new" },
  { name: "Sale", path: "/sale" },
];

const DesktopNav = () => {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {links.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `group relative text-sm font-medium transition-all duration-300 ${
              isActive
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600"
            }`
          }
        >
          {item.name}

          <span
         className="
    absolute
    -bottom-2
    left-0
    h-0.5
    rounded-full
    bg-blue-600
    transition-all
    duration-300
    w-0
    group-hover:w-full
  "
/>
        </NavLink>
      ))}
    </nav>
  );
};

export default DesktopNav;