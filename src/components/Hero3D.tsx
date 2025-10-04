"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";

export default function Hero2d() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollProgress = useMotionValue(0);

  // Smooth easing helper
  const easedValue = useMotionValue(0);
  useEffect(() => {
    const unsubscribe = scrollProgress.onChange((val) => {
      animate(easedValue, val, { type: "spring", stiffness: 80, damping: 20 });
    });
    return () => unsubscribe();
  }, [scrollProgress, easedValue]);

  // Animations
  const leftBoxX = useTransform(easedValue, [0, 0.5], [0, -window.innerWidth * 0.4]);
  const leftBoxOpacity = useTransform(easedValue, [0.4, 0.6], [1, 0]);
  const bgScale = useTransform(easedValue, [0, 0.5, 1], [1, 1, 1.2]);
  const bgX = useTransform(easedValue, [0, 0.5, 1], [0, 0, -50]);
  const rightTextX = useTransform(easedValue, [0, 1], [0, 400]);
  const rightTextOpacity = useTransform(easedValue, [0, 0.8], [1, 0]);

  // Text reveal after main animation
  const textStart = 0.6;
  const textEnd = 1;
  const textProgress = useTransform(easedValue, [textStart, textEnd], [0, 1]);

  const lines = [
    "Our creations fuse bold",
    "Innovation with enduring elegance,",
    "Turning every space into a statement",
    "of art and sophistication",
  ];

  const lineAnimations = lines.map((_, i) => ({
    y: useTransform(textProgress, [0 + i * 0.05, 1], [30, 0]),
    opacity: useTransform(textProgress, [0 + i * 0.05, 1], [0, 1]),
  }));

  const paraY = useTransform(textProgress, [0, 1], [30, 0]);
  const paraOpacity = textProgress;

  // Scroll handler
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isMenuOpen) {
        e.preventDefault();
        const delta = e.deltaY * 0.001;
        scrollProgress.set(Math.min(Math.max(scrollProgress.get() + delta, 0), 1));
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [scrollProgress, isMenuOpen]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-10 bg-cover bg-center"
        style={{
          x: bgX,
          scale: bgScale,
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* Left box */}
      <motion.div
        className="absolute top-0 left-0 w-[40%] h-full bg-black z-20"
        style={{ x: leftBoxX, opacity: leftBoxOpacity }}
      >
        <div className="p-8">
          <h1 className="text-[6rem] font-extrabold text-white leading-tight">
            Elevating spaces, defining elegance.
          </h1>
        </div>
        <div className="absolute top-[70%] left-0 w-full p-8">
          <p className="text-lg text-white font-medium leading-relaxed">
            At Bin Haider, we turn dreams into reality with custom, artistic designs. Every space reflects your unique style, crafted with precision and creativity.
          </p>
        </div>
      </motion.div>

      {/* Top-right brand */}
      <motion.div
        className="absolute top-4 right-8 text-white text-xl font-bold z-30 max-w-xs text-right"
        style={{ x: rightTextX, opacity: rightTextOpacity }}
      >
        Bin Haider
      </motion.div>

      {/* Animated Text */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-start z-40 px-4"
        style={{
          fontFamily: "'Love Ya Like A Sister', cursive",
          fontSize: "3rem",
          textAlign: "center",
          color: "#fff",
          paddingTop: "15vh",
        }}
      >
        {lines.map((line, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden w-full"
            style={{
              y: lineAnimations[idx].y,
              opacity: lineAnimations[idx].opacity,
            }}
          >
            <span className="inline-block">{line}</span>
          </motion.div>
        ))}

        <motion.p
          className="mt-24 text-xl max-w-2xl"
          style={{
            y: paraY,
            opacity: paraOpacity,
            textAlign: "center",
          }}
        >
          At Bin Haider, we specialize in turning dreams into reality through our artistic and custom designs. With meticulous attention to detail and a passion for creativity, we craft spaces that reflect your unique style and personality. From concept to completion, we collaborate closely with our clients to ensure every aspect of their vision is brought to life with precision and excellence.
        </motion.p>
      </div>

      {/* Menu Button */}
      <div
        className="fixed bottom-6 right-6 z-50 cursor-pointer bg-white text-black w-16 h-16 flex items-center justify-center rounded-full shadow-lg font-bold"
        onClick={() => setIsMenuOpen(true)}
      >
        Menu
      </div>

      {/* Fullscreen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center gap-8">
          {["Home", "About Us", "Services", "Portfolio", "Contact"].map((link, idx) => (
            <div key={idx} className="text-3xl font-bold text-white cursor-pointer">
              {link}
            </div>
          ))}
          {/* Close Button */}
          <div
            className="absolute top-6 right-6 text-white text-lg cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Close
          </div>
        </div>
      )}
    </section>
  );
}
