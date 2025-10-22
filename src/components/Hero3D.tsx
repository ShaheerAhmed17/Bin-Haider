"use client";
import { useRef, useState, useEffect, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  Variants,
  useSpring,
} from "framer-motion";
import heroImage from "@/assets/spacejoy-9M66C_w_ToM-unsplash.jpg";
import heroImage2 from "@/assets/texture for cinematic sand background.jpg";
import logo from "@/assets/BinHaiderLogo.jpg";

const LOADER_DURATION = 1800;
const HEADLINE_WORDS = ["Crafting", "Timeless", "Elegance."];

export default function HeroLuxuryReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), LOADER_DURATION);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Use spring for smoother, GPU-accelerated interpolation
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  // Background transforms
  const bgScale = useTransform(smoothScroll, [0, 1], [1.05, 1.15]);
  const bgY = useTransform(smoothScroll, [0, 1], ["0%", "-8%"]);

  // Text transforms
  const textOpacity = useTransform(smoothScroll, [0, 0.4], [1, 0]);
  const textY = useTransform(smoothScroll, [0, 0.4], ["0px", "40px"]);

  // Philosophy transforms — reduced range and smoother
  const philosophyOpacity = useTransform(smoothScroll, [0.35, 0.55, 0.8], [0, 1, 0]);
  const philosophyY = useTransform(smoothScroll, [0.35, 0.55, 0.8], ["50px", "0px", "-60px"]);

  // Logo transforms
  const logoY = useTransform(smoothScroll, [0, 0.5, 1], ["0%", "-20%", "-60%"]);
  const logoOpacity = useTransform(smoothScroll, [0, 0.3, 0.8], [1, 1, 0]);

  // Variants
  const headlineVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: 2.4 + i * 0.25,
          duration: 0.6,
          ease: "easeOut",
        },
      }),
    }),
    []
  );

  const underlineVariants: Variants = useMemo(
    () => ({
      hidden: { scaleX: 0 },
      visible: (i: number) => ({
        scaleX: 1,
        transition: {
          delay: 2.4 + i * 0.3,
          duration: 0.7,
          ease: "easeOut",
        },
      }),
    }),
    []
  );

  const loaderVariants: Variants = useMemo(
    () => ({
      initial: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: 0.8, ease: "easeOut" } },
    }),
    []
  );

  return (
    <>
      {/* Loader Curtain */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[200] bg-[#4A4033] flex items-center justify-center overflow-hidden"
            variants={loaderVariants}
            initial="initial"
            exit="exit"
          >
            <motion.div
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              exit={{ height: "0%" }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-[#D8C7A6] to-transparent"
            />
            <motion.img
              src={logo}
              alt="Bin Haider Logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, y: -100 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-24 w-auto z-20"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Section */}
      <section ref={containerRef} className="relative h-[400vh] w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden will-change-transform">

          {/* Background Image */}
          <motion.img
            src={heroImage}
            alt="Luxury interior"
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            style={{ scale: bgScale, y: bgY }}
            loading="lazy"
          />

          {/* Texture Overlay */}
          <motion.img
            src={heroImage2}
            alt="Texture overlay"
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay will-change-transform"
            style={{ scale: bgScale, y: bgY }}
            loading="lazy"
          />

          {/* Light Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent z-10" />

          {/* Logo */}
          <motion.img
            src={logo}
            alt="Bin Haider Logo"
            className="absolute left-1/2 top-[12%] -translate-x-1/2 h-16 w-auto z-20 will-change-transform"
            style={{ y: logoY, opacity: logoOpacity }}
          />

          {/* Hero Headline */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-30"
            style={{ opacity: textOpacity, y: textY }}
          >
            {HEADLINE_WORDS.map((word, idx) => (
              <div key={idx} className="mb-3">
                <motion.h1
                  className="text-[4.5rem] md:text-[5rem] font-serif font-semibold text-[#2b2b2b]"
                  variants={headlineVariants}
                  initial="hidden"
                  animate="visible"
                  custom={idx}
                >
                  {word}
                </motion.h1>
                <motion.div
                  className="mx-auto mt-2 h-[2px] w-24 bg-gradient-to-r from-[#D8C7A6] to-transparent"
                  variants={underlineVariants}
                  initial="hidden"
                  animate="visible"
                  custom={idx}
                />
              </div>
            ))}
            <motion.p
              className="mt-10 max-w-2xl text-lg text-[#5c5c5c] font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.7 }}
            >
              Every space we design is a narrative of craftsmanship and emotion — blending warmth, light, and refined form.
            </motion.p>
          </motion.div>

          {/* Philosophy Box */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none will-change-transform"
            style={{ opacity: philosophyOpacity, y: philosophyY }}
          >
            <div className="bg-[#E8DCC4]/85 shadow-xl rounded-2xl px-8 py-12 max-w-2xl text-center pointer-events-auto">
              <h2 className="text-4xl font-serif text-[#1e1e1e] mb-4">Our Philosophy</h2>
              <p className="text-[#5a5a5a] text-lg leading-relaxed font-sans">
                We believe every home tells a story. Our design process is built around your narrative — bringing balance, emotion, and art into every space.
              </p>
            </div>
          </motion.div>

          {/* Film grain overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-50 opacity-10 mix-blend-overlay"
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png')",
            }}
          />
        </div>
      </section>
    </>
  );
}
