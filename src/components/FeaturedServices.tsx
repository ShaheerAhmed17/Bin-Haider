"use client";

import { Link } from "react-router-dom"; // React Router Link
import { motion } from "framer-motion";
import heroImage1 from "@/assets/Kitchen-Design.jpg";
import heroImage2 from "@/assets/Interior-Design.jpg";
import heroImage3 from "@/assets/media-wall.jpg";
import heroImage4 from "@/assets/Wardrobes.jpg";

const services = [
  {
    title: "Kitchen Designs",
    slug: "kitchen-designs",
    description:
      "From PVC to modern glass designs, we create kitchens that blend style with functionality.",
    image: heroImage1,
    link: "/services/kitchen-designs",
  },
  {
    title: "Interior Designs",
    slug: "interior-designs",
    description:
      "Complete interior solutions that transform houses into homes with personality.",
    image: heroImage2,
    link: "/services/interior-designs",
  },
  {
    title: "Media Walls",
    slug: "media-walls",
    description:
      "Stunning entertainment centers with integrated storage and ambient lighting.",
    image: heroImage3,
    link: "/services/media-walls",
  },
  {
    title: "Wardrobes",
    slug: "wardrobes",
    description:
      "Custom wardrobe solutions from walk-in closets to space-saving built-ins.",
    image: heroImage4,
    link: "/services/wardrobes",
  },
];

export default function FeaturedServices() {
  return (
    <section className="relative w-full min-h-screen bg-[#2a2720] text-[#f5f1eb] overflow-hidden py-32">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-20">
        <h2 className="text-5xl md:text-6xl font-serif font-semibold text-center mb-16 text-[#E0CDA9]">
          Featured Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {services.map((service) => (
            <Link key={service.slug} to={service.link}>
              <motion.div
                className="service-card relative overflow-hidden rounded-3xl bg-white/10 border border-white/10 backdrop-blur-lg shadow-xl cursor-pointer"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                {/* Image */}
                <div className="relative h-[420px] overflow-hidden rounded-3xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy" // lazy load added
                    className="w-full h-full object-cover object-center scale-105 transition-transform duration-[1000ms] ease-in-out hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 text-left">
                  <h3 className="text-3xl font-semibold mb-2 text-[#D8C7A6]">{service.title}</h3>
                  <p className="text-white/80 text-sm md:text-base">{service.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
