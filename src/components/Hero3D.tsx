"use client";

import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";

// Import Bodoni Moda font from Google Fonts
import "@fontsource/bodoni-moda/700.css"; // 700 = bold weight

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">
      {/* Background image */}
      <div className="absolute inset-0 z-10">
        <img
          src={heroImage}
          alt="Luxury Design"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Fullscreen overlay box (Box 1) - Gold */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 bg-yellow-500 z-30"
      />

      {/* Second sliding box: left 40% stays fixed, right 60% slides right - Black */}
      <div className="absolute top-0 left-0 w-full h-full z-20 flex">
        <div className="w-[40%] h-full bg-black"></div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{ delay: 1.3, duration: 1.5, ease: "easeInOut" }}
          className="w-[60%] h-full bg-black"
        />
      </div>

      {/* Top-right "Bin Haider" label */}
      <div className="absolute top-4 right-8 z-50">
        <span className="text-white text-xl font-bold" style={{ fontFamily: "'Bodoni Moda', serif" }}>
          Bin Haider
        </span>
      </div>

      {/* Text on left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
        className="absolute left-0 top-0 w-[40%] h-full z-40 text-white"
      >
        {/* Heading at top */}
        <div className="p-8">
          <h1
            className="text-[6rem] font-extrabold leading-tight"
            style={{ fontFamily: "'Bodoni Moda', serif" }}
          >
            Elevating spaces, defining elegance.
          </h1>
        </div>

        {/* Paragraph pushed independently down */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1.2, ease: "easeOut" }}
          className="absolute top-[70%] left-0 w-[100%] p-8"
        >
          <p className="text-lg font-medium leading-relaxed">
            At Bin Haider, we turn dreams into reality with custom, artistic designs. Every space reflects your unique style, crafted with precision and creativity from concept to completion.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
