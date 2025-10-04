import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Designs", path: "/portfolio" },
    { name: "Projects", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Round Menu Button (Bottom-Right) */}
      <button
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-black text-white rounded-full shadow-lg flex items-center justify-center font-semibold hover:bg-gray-800 transition-colors"
        onClick={() => setIsMenuOpen(true)}
      >
        <span className="text-sm text-center">Menu</span>
      </button>

      {/* Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8"
          >
            {/* Menu Items with staggered animation */}
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-3xl font-bold text-white hover:text-gray-400 ${
                    location.pathname === link.path ? "text-gray-400" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Close Button at Top-Right */}
            <motion.div
              className="absolute top-6 right-6 text-white text-lg cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
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
