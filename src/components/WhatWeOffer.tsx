"use client";

import { ChefHat, Home, Warehouse } from "lucide-react";

const offerings = [
  {
    icon: ChefHat,
    title: "Kitchen Design",
    description:
      "Kitchen design is more than layout; it's about crafting a space that embodies style, efficiency, and comfort. We transform kitchens into personalized culinary havens, blending form and function seamlessly.",
  },
  {
    icon: Home,
    title: "Interior Design",
    description:
      "Interior design transforms spaces into reflections of personality and purpose. We curate interiors that evoke emotion, elevate living, and turn houses into homes with timeless elegance.",
  },
  {
    icon: Warehouse,
    title: "Wardrobe Design",
    description:
      "Wardrobe design combines style and functionality. From luxurious walk-ins to space-saving built-ins, we craft bespoke storage solutions with superior craftsmanship and elegance.",
  },
];

const WhatWeOffer = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#f0ede5] via-[#ede9e1] to-[#f5f1eb] text-[#1e1e1e] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-amber-500 text-sm font-semibold tracking-[0.2em] uppercase">
            We're Here To Help You
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mt-4 mb-6">
            What Are You
            <br />
            <span className="text-amber-400">Looking For?</span>
          </h2>
          <p className="text-[#3b3b3b] text-lg">
            Explore our premium design services crafted to elevate your spaces with sophistication and style.
          </p>
        </div>

        {/* Offerings Inline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {offerings.map((offering, index) => (
            <div key={index} className="flex flex-col items-start space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100/20 rounded-full mb-4">
                <offering.icon className="w-10 h-10 text-amber-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-amber-600">
                {offering.title}
              </h3>
              <p className="text-[#3b3b3b] text-base leading-relaxed">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-amber-400/5 blur-[180px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/5 blur-[220px] rounded-full pointer-events-none animate-pulse" />
    </section>
  );
};

export default WhatWeOffer;
