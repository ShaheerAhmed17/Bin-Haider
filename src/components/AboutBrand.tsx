"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/about-image.jpg";
import { useRef } from "react";

export default function AboutBrand() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]); // smooth parallax effect

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#0c0b08] via-[#1a1914] to-[#2b2a24] text-white py-28"
    >
      {/* Ambient Glow */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-[#D8C7A6]/10 blur-[150px] rounded-full"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-[#E0CDA9]/10 blur-[180px] rounded-full"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">

          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <span className="text-[#D8C7A6] tracking-[0.25em] uppercase text-sm font-semibold">
              Reflection of Space
            </span>

            <h2 className="text-5xl md:text-6xl font-serif leading-tight font-light">
              Where <span className="font-semibold text-[#E0CDA9]">Design</span> Meets{" "}
              <span className="italic text-[#C9B49A]">Soul</span>
            </h2>

            <p className="italic text-white/60 text-lg">
              Every corner is a reflection of your inner world.
            </p>

            <div className="space-y-5">
              <p className="text-white/70 text-lg leading-relaxed">
                At Bin Haider, we don’t just create interiors — we design reflections of
                emotion, purpose, and personality. Each project is an exploration of
                balance between architecture, art, and soul.
              </p>

              <p className="text-white/70 text-lg leading-relaxed">
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

          {/* Right Image with Reflections */}
          <div className="relative order-1 lg:order-2">
            {/* Glass reflection layer */}
            <motion.div
              className="absolute -bottom-10 -left-10 w-72 h-72 bg-white/10 backdrop-blur-md rounded-3xl"
              animate={{ opacity: [0.1, 0.25, 0.1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute -top-8 -right-8 w-44 h-44 border border-[#D8C7A6]/20 rounded-3xl"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            {/* Image with Parallax */}
            <motion.div
              style={{ y }}
              className="relative overflow-hidden rounded-[2rem] shadow-[0_0_80px_rgba(255,255,255,0.05)]"
            >
              <img
                src={aboutImage}
                alt="Luxury interior space"
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-[2500ms] ease-[cubic-bezier(.19,1,.22,1)]"
              />

              {/* Subtle glass reflection */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
