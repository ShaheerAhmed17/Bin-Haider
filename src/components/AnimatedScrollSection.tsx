"use client";

import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AnimatedScrollSection() {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  useEffect(() => {
    document.body.style.scrollSnapType = "y mandatory";
    document.body.style.overflowY = "scroll";
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
      {/* Section 1 — Pink stat card animation */}
      <section className="relative flex justify-center items-center h-screen bg-[#f4c9c9] text-black snap-start">
        <motion.div
          style={{ scale, y }}
          transition={{ duration: 1 }}
          className="relative z-10 bg-[#f4c9c9] border border-gray-700 p-20 rotate-3 shadow-2xl"
        >
          <h1 className="text-7xl font-light leading-tight">10+</h1>
          <p className="text-sm text-gray-700 mt-2">
            Globally-renowned brands under one roof
          </p>

          <h1 className="text-7xl font-light leading-tight mt-10">500</h1>
          <p className="text-sm text-gray-700 mt-2">
            Square metre showroom space in DIFC, Dubai
          </p>

          <h1 className="text-7xl font-light leading-tight mt-10">100+</h1>
          <p className="text-sm text-gray-700 mt-2">
            Products available across our showrooms
          </p>
        </motion.div>
      </section>

      {/* Section 2 */}
      <section className="flex flex-col justify-center items-center h-screen bg-white snap-start">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="max-w-3xl text-center"
        >
          <h2 className="text-5xl font-semibold mb-6">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We blend art and architecture to create timeless design
            experiences.
          </p>
        </motion.div>
      </section>

      {/* Section 3 */}
      <section className="flex flex-col justify-center items-center h-screen bg-black text-white snap-start">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-3xl text-center"
        >
          <h2 className="text-5xl font-semibold mb-6">Contact Us</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Let’s build something extraordinary together.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
