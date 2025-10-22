"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Designs", path: "/portfolio" },
  { name: "Projects", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUI, setShowUI] = useState(true);
  const location = useLocation();
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll listener to hide/show UI
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowUI(false); // scroll down -> hide
      } else {
        setShowUI(true); // scroll up -> show
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Vertical "Bin Haider" on bottom-left */}
      <AnimatePresence>
        {showUI && !isMenuOpen && (
          <motion.div
            className="fixed bottom-6 left-6 z-50 font-serif text-2xl font-bold text-black select-none h-[50vh] flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.05 }}
          >
            {"BINHAIDER".split("").map((letter, i) => (
              <span key={i} className="leading-none flex-1 flex items-center justify-center">
                {letter}
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Menu Button */}
      <AnimatePresence>
        {showUI && !isMenuOpen && (
          <motion.button
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-black text-white rounded-full shadow-lg flex items-center justify-center font-semibold hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <span className="text-sm text-center">Menu</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8"
          >
            {/* Menu Links with staggered animation */}
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 100 }}
                style={{ willChange: "transform, opacity" }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-3xl font-bold text-white hover:text-gray-400 transition-colors ${
                    location.pathname === link.path ? "text-gray-400" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Close Button */}
            <motion.div
              className="absolute top-6 right-6 text-white text-lg cursor-pointer select-none"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
              style={{ willChange: "opacity" }}
            >
              Close
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
