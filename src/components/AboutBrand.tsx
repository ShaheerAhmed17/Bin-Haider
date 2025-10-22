"use client";

import { motion, useScroll, useTransform, LazyMotion, domAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef, Suspense } from "react";

// ✅ Lazy load the image to improve initial page load speed
const AboutImage = () => (
  <img
    src={new URL("@/assets/about-image.jpg", import.meta.url).href}
    alt="Luxury interior space"
    loading="lazy"
    decoding="async"
    className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-[2500ms] ease-[cubic-bezier(.19,1,.22,1)]"
  />
);

export default function AboutBrand() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -60]); // smoother parallax

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="relative w-full overflow-hidden bg-gradient-to-br from-[#0c0b08] via-[#1a1914] to-[#2b2a24] text-white py-24 md:py-28"
      >
        {/* Ambient Glow Effects (made GPU-friendly) */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#D8C7A6]/10 blur-[120px] rounded-full will-change-transform"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-[#E0CDA9]/10 blur-[150px] rounded-full will-change-transform"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-7xl mx-auto">

            {/* Text Section */}
            <div className="space-y-8 order-2 lg:order-1">
              <span className="text-[#D8C7A6] tracking-[0.25em] uppercase text-xs sm:text-sm font-semibold">
                Reflection of Space
              </span>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-tight font-light">
                Where <span className="font-semibold text-[#E0CDA9]">Design</span> Meets{" "}
                <span className="italic text-[#C9B49A]">Soul</span>
              </h2>

              <p className="italic text-white/60 text-lg">
                Every corner is a reflection of your inner world.
              </p>

              <div className="space-y-5 text-white/70 text-lg leading-relaxed">
                <p>
                  At Bin Haider, we don’t just create interiors — we design reflections of
                  emotion, purpose, and personality. Each project is an exploration of
                  balance between architecture, art, and soul.
                </p>
                <p>
                  Our spaces are crafted to mirror who you are — refined, modern, and timeless.
                  We blend minimalism with warmth, creating environments that breathe harmony
                  and inspire connection.
                </p>
              </div>

              <Button
                size="lg"
                asChild
                className="bg-[#D8C7A6] hover:bg-[#C9B49A] text-[#1a1a1a] font-medium shadow-lg shadow-[#D8C7A6]/20 px-8 py-6 rounded-full transition-all duration-500 hover:scale-105"
              >
                <Link to="/about">Discover the Essence</Link>
              </Button>
            </div>

            {/* Image Section */}
            <div className="relative order-1 lg:order-2 will-change-transform">
              {/* Glass reflection layers — reduced blur for GPU efficiency */}
              <motion.div
                className="absolute -bottom-10 -left-10 w-60 md:w-72 h-60 md:h-72 bg-white/10 backdrop-blur-sm rounded-3xl"
                animate={{ opacity: [0.1, 0.25, 0.1] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute -top-8 -right-8 w-36 md:w-44 h-36 md:h-44 border border-[#D8C7A6]/20 rounded-3xl"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              {/* Parallax image */}
              <motion.div
                style={{ y }}
                className="relative overflow-hidden rounded-[2rem] shadow-[0_0_80px_rgba(255,255,255,0.05)]"
              >
                <Suspense fallback={<div className="h-[400px] bg-gray-900/30 animate-pulse" />}>
                  <AboutImage />
                </Suspense>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
