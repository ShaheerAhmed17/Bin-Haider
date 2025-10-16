"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, AnimatePresence, Variants } from "framer-motion";
import heroImage from "@/assets/spacejoy-9M66C_w_ToM-unsplash.jpg";
import heroImage2 from "@/assets/texture for cinematic sand background.jpg";
import logo from "@/assets/BinHaiderLogo.jpg";

const LOADER_DURATION = 2000;
const HEADLINE_WORDS = ["Crafting", "Timeless", "Elegance."];

const SCROLL_RANGES = {
  text: { start: 0, end: 0.45 },
  philosophy: { start: 0.45, end: 0.85 },
  logo: { start: 0, end: 1 },
} as const;

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

  // Background animations
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const bgBrightness = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.25]);

  // Text animations
  const textOpacity = useTransform(
    scrollYProgress,
    [SCROLL_RANGES.text.start, SCROLL_RANGES.text.end],
    [1, 0]
  );
  const textY = useTransform(
    scrollYProgress,
    [SCROLL_RANGES.text.start, SCROLL_RANGES.text.end],
    ["0px", "40px"]
  );

  // Philosophy box animations
  const philosophyOpacity = useTransform(scrollYProgress, [0.45, 0.6, 0.7, 0.85], [0, 1, 1, 0]);
  const philosophyY = useTransform(scrollYProgress, [0.45, 0.6, 0.7, 0.85], ["100px", "0px", "0px", "-100px"]);
  const philosophyBgY = useTransform(scrollYProgress, [0.45, 1], ["5%", "-5%"]);
  const philosophyBgScale = useTransform(scrollYProgress, [0.45, 1], [1, 1.08]);

  // Logo animations
  const logoY = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-40%", "-100%"]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [1, 1, 0]);
  const logoGlow = useTransform(scrollYProgress, [0, 0.4, 0.6], [0, 10, 0]);

  // Variants (TypeScript-safe)
  const headlineVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: 2.6 + custom * 0.3,
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1], // TS-safe cubic-bezier
        },
      }),
    }),
    []
  );

  const underlineVariants: Variants = useMemo(
    () => ({
      hidden: { scaleX: 0 },
      visible: (custom: number) => ({
        scaleX: 1,
        transition: {
          delay: 2.6 + custom * 0.4,
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        },
      }),
    }),
    []
  );

  const loaderVariants: Variants = useMemo(
    () => ({
      initial: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
    }),
    []
  );

  const philosophyVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] } },
    }),
    []
  );

  return (
    <>
      {/* Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            variants={loaderVariants}
            initial="initial"
            exit="exit"
            className="fixed inset-0 z-[200] bg-[#4A4033] flex items-center justify-center overflow-hidden"
          >
            <motion.div
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              exit={{ height: "0%" }}
              transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-[#D8C7A6] to-transparent"
            />
            <motion.img
              src={logo}
              alt="Bin Haider Logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, y: -100 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-24 w-auto z-20"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Section */}
      <section ref={containerRef} className="relative h-[500vh] w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#f8f6f2]">
          {/* Background */}
          <motion.div className="absolute inset-0 z-0" style={{ scale: bgScale, y: bgY }}>
            <img src={heroImage} alt="Luxury interior" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>

          {/* Texture Overlay */}
          <motion.div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay" style={{ scale: philosophyBgScale, y: philosophyBgY }}>
            <img src={heroImage2} alt="Texture" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>

          {/* Brightness */}
          <motion.div
            className="absolute inset-0 z-5"
            style={{
              backgroundColor: useTransform(bgBrightness, (v) => `rgba(255, 255, 255, ${(v - 1) * 0.3})`),
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent z-10" />

          {/* Logo */}
          <motion.div
            className="absolute left-1/2 top-[12%] -translate-x-1/2 z-30 will-change-transform"
            style={{
              y: logoY,
              opacity: logoOpacity,
              filter: useTransform(logoGlow, (v) => `drop-shadow(0 0 ${v}px #D8C7A6)`),
            }}
          >
            <img src={logo} alt="Bin Haider Logo" className="h-16 w-auto" loading="lazy" />
          </motion.div>

          {/* Hero Headline */}
          <motion.div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center will-change-transform" style={{ opacity: textOpacity, y: textY }}>
            <div className="space-y-3">
              {HEADLINE_WORDS.map((word, idx) => (
                <div key={idx}>
                  <motion.h1
                    className="text-[5rem] font-serif font-semibold text-[#2b2b2b] leading-tight tracking-tight"
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
            </div>

            <motion.p
              className="mt-10 max-w-2xl text-lg text-[#5c5c5c] font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.4, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Every space we design is a narrative of craftsmanship and emotion —
              blending warmth, light, and refined form into pure harmony.
            </motion.p>
          </motion.div>

          {/* Philosophy Box */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none"
            style={{ opacity: philosophyOpacity, y: philosophyY }}
          >
            <motion.div
              variants={philosophyVariants}
              initial="hidden"
              animate="visible"
              className="bg-[#E8DCC4]/90 backdrop-blur-sm shadow-2xl rounded-2xl px-10 py-16 max-w-2xl text-center pointer-events-auto"
            >
              <h2 className="text-4xl font-serif text-[#1e1e1e] mb-6">Our Philosophy</h2>
              <p className="text-[#5a5a5a] text-lg leading-relaxed font-sans">
                We believe every home tells a story. Our design process is built
                around your narrative — bringing balance, emotion, and art into
                every space.
              </p>
            </motion.div>
          </motion.div>

          {/* Film Grain */}
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