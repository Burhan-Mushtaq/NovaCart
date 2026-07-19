import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import SearchBox from "./SearchBox";
import NavIcons from "./NavIcons";
import MobileDrawer from "./MobileDrawer";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.55,
          ease: "easeOut",
        }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-2xl border-b border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        }`}
      >
        {/* Glow */}

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-50/50 via-transparent to-indigo-50/50" />

        {/* Bottom Border */}

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* Left */}

          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileOpen(true)}
              className="
              flex
              lg:hidden
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-gray-200
              bg-white/90
              backdrop-blur
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-blue-50
              hover:border-blue-500
              hover:text-blue-600
              hover:shadow-lg
              "
            >
              <Menu size={22} />
            </button>

            <Logo />
          </div>

          {/* Center */}

          <DesktopNav />

          {/* Right */}

          <div className="flex items-center gap-4">
            <SearchBox />

            <NavIcons />
          </div>
        </div>
      </motion.header>

      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      <div className="h-20" />
    </>
  );
};

export default Navbar;