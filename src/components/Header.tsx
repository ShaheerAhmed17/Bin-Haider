import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Designs", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY + 10) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY - 10) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* BIN HAIDER Text - Left Side Vertical */}
      <motion.div
        initial={{ opacity: 1, x: 0 }}
        animate={{
          opacity: scrollDirection === "down" && lastScrollY > 100 ? 0 : 1,
          x: scrollDirection === "down" && lastScrollY > 100 ? -50 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-40"
      >
        <div className="flex flex-col gap-2 text-[#F7EDE2] font-light tracking-[0.3em] text-xs">
          {["B", "I", "N", "", "H", "A", "I", "D", "E", "R"].map((letter, idx) => (
            <div key={idx} className="h-8 flex items-center justify-center">
              {letter}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Menu Button - Hidden on scroll down, visible on scroll up */}
      <motion.button
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: scrollDirection === "down" && lastScrollY > 100 ? 0 : 1,
          y: scrollDirection === "down" && lastScrollY > 100 ? 100 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={() => setIsMenuOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#F7EDE2] text-[#4A4033] rounded-full shadow-lg flex items-center justify-center font-semibold hover:bg-[#EFE5D9] transition-colors pointer-events-auto"
      >
        <span className="text-xs font-medium">MENU</span>
      </motion.button>

      {/* Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Full Screen Background Fade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="fixed inset-0 z-50 bg-[#4A4033]"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Content - Centered */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="fixed inset-0 z-50 flex flex-col items-center justify-center"
            >
              {/* Close Button at Top-Right */}
              <motion.button
                className="absolute top-6 right-6 text-[#F7EDE2] hover:text-[#EFE5D9] transition-colors"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.3 } }}
                exit={{ opacity: 0 }}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              {/* Menu Items - Cinematic Staggered Animation */}
              <div className="flex flex-col items-center gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2 + i * 0.12,
                      type: "spring",
                      stiffness: 80,
                      damping: 20,
                    }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-4xl md:text-5xl font-light transition-colors ${
                        location.pathname === link.path
                          ? "text-[#D8C7A6] font-semibold"
                          : "text-[#F7EDE2] hover:text-[#D8C7A6]"
                      }`}
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;