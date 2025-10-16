"use client";

import { useParams } from "react-router-dom";
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
      "From PVC to modern glass designs, we create kitchens that blend style with functionality. Our team ensures every design element is perfectly aligned with your space requirements, lighting, and aesthetics to create a kitchen that’s both elegant and efficient.",
    image: heroImage1,
  },
  {
    title: "Interior Designs",
    slug: "interior-designs",
    description:
      "We bring your interiors to life with customized concepts that enhance comfort and reflect your personality. From color palettes to furniture and lighting, our experts blend creativity and practicality seamlessly.",
    image: heroImage2,
  },
  {
    title: "Media Walls",
    slug: "media-walls",
    description:
      "Transform your living area with breathtaking media walls that merge technology with design. Built with modern textures, ambient lighting, and sleek finishes, our walls redefine entertainment spaces.",
    image: heroImage3,
  },
  {
    title: "Wardrobes",
    slug: "wardrobes",
    description:
      "Our bespoke wardrobes are crafted to maximize space and elegance. Choose from a variety of finishes and materials for a perfect blend of functionality and luxury, suited to your lifestyle.",
    image: heroImage4,
  },
];

export default function FeaturedServicesDetail() {
  const { serviceSlug } = useParams();
  const service = services.find((s) => s.slug === serviceSlug);

  if (!service)
    return (
      <div className="min-h-screen bg-[#0b0b0b] text-white flex items-center justify-center text-2xl">
        Service not found.
      </div>
    );

  return (
    <motion.div
      className="min-h-screen bg-[#0b0b0b] text-white px-6 py-24 flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">
        {service.title}
      </h1>

      <div className="relative w-full max-w-4xl mx-auto mb-12">
        <img
          src={service.image}
          alt={service.title}
          className="w-full rounded-3xl shadow-[0_0_80px_rgba(255,255,255,0.05)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-3xl" />
      </div>

      <p className="text-lg max-w-3xl mx-auto leading-relaxed text-white/80 text-center">
        {service.description}
      </p>
    </motion.div>
  );
}
