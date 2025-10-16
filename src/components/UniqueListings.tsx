"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import aboutImage from "@/assets/about-image.jpg";
import mediaWall from "@/assets/media-wall.jpg";
import wardrobe from "@/assets/wardrobe.jpg";

const listings = [
  {
    id: 1,
    title: "Elegant Design",
    category: "PVC Kitchen",
    image:
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1920&h=1080&fit=crop",
    link: "/portfolio",
  },
  {
    id: 2,
    title: "Beautiful Design",
    category: "Modern Kitchen",
    image:
      "https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=1920&h=1080&fit=crop",
    link: "/portfolio",
  },
  {
    id: 3,
    title: "Glass Design",
    category: "Glass Kitchen",
    image:
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1920&h=1080&fit=crop",
    link: "/portfolio",
  },
  {
    id: 4,
    title: "Gorgeous",
    category: "Interior Design",
    image: aboutImage,
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Luxury",
    category: "Media Wall",
    image: mediaWall,
    link: "/portfolio",
  },
  {
    id: 6,
    title: "Glamorous",
    category: "Wardrobe",
    image: wardrobe,
    link: "/portfolio",
  },
];

const UniqueListings = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide change every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % listings.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % listings.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + listings.length) % listings.length);

  const currentListing = listings[current];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Image + Ken Burns Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentListing.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <motion.img
            src={currentListing.image}
            alt={currentListing.title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1, x: -20 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ duration: 7, ease: "easeOut" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24 text-white">
        <motion.div
          key={currentListing.id + "-text"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <p className="text-sm md:text-base uppercase tracking-[0.25em] text-gray-300 mb-4">
            {currentListing.category}
          </p>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
            {currentListing.title}
          </h2>

          <Button
            asChild
            className="bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 rounded-full px-6 py-3 text-lg"
          >
            <Link to={currentListing.link}>Discover the Essence</Link>
          </Button>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-12 right-12 flex gap-4 z-20">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-all"
        >
          <ChevronLeft className="text-white w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-all"
        >
          <ChevronRight className="text-white w-6 h-6" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-12 left-12 text-white/80 text-sm tracking-widest z-20">
        {String(current + 1).padStart(2, "0")} — {listings.length}
      </div>
    </section>
  );
};

export default UniqueListings;
