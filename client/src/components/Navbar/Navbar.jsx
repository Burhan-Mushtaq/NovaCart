import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import DesktopNav from "./DesktopNav";
import SearchBox from "./SearchBox";
import NavIcons from "./NavIcons";
import MobileDrawer from "./MobileDrawer";
import Logo from "./Logo";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
  scrolled
    ? "bg-white/70 backdrop-blur-2xl shadow-lg border-b border-white/50"
    : "bg-transparent"
}`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileOpen(true)}
              className="
flex
h-11
w-11
items-center
justify-center
rounded-full
border
border-gray-200
bg-white
shadow-sm
transition-all
duration-300
hover:-translate-y-1
hover:border-blue-500
hover:text-blue-600
hover:shadow-lg
">
              <Menu size={26} />
            </button>
            <Logo />
          </div>

          {/* CENTER */}
          <DesktopNav />

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <SearchBox />
            <NavIcons />
          </div>
        </div>
      </motion.header>

      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      {/* Spacer */}
      <div className="h-16 lg:h-20" />
    </>
  );
};

export default Navbar;