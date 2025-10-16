"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="relative w-full h-screen md:h-[50vh] overflow-hidden bg-[#4A4033]">
      {/* Wavy background pattern */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          {[...Array(12)].map((_, i) => (
            <path
              key={i}
              d={`M 0 ${150 + i * 50} Q 300 ${130 + i * 50}, 600 ${150 + i * 50} T 1200 ${150 + i * 50}`}
              fill="none"
              stroke="#F7EDE2"
              strokeWidth="0.8"
              opacity={0.06}
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-6 md:px-12 py-4 md:py-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 pl-6 md:pl-12"
          >
            <h2
              className="text-4xl md:text-6xl font-light leading-tight text-[#F7EDE2] italic"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Refined<br />sophistication,<br />timeless design.
            </h2>
            <p className="text-[#F7EDE2]/70 text-base md:text-lg leading-relaxed">
              If you have any questions, need more information, or want to speak with our design experts.
            </p>
          </motion.div>

          {/* Right Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6 pr-6 md:pr-12"
          >
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-0 py-3 border-b border-[#F7EDE2]/40 bg-transparent placeholder-[#F7EDE2]/50 text-[#F7EDE2] focus:outline-none focus:border-[#F7EDE2]/80 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-0 py-3 border-b border-[#F7EDE2]/40 bg-transparent placeholder-[#F7EDE2]/50 text-[#F7EDE2] focus:outline-none focus:border-[#F7EDE2]/80 transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-0 py-3 border-b border-[#F7EDE2]/40 bg-transparent placeholder-[#F7EDE2]/50 text-[#F7EDE2] focus:outline-none focus:border-[#F7EDE2]/80 transition-colors"
            />
            <textarea
              placeholder="Message"
              className="w-full px-0 py-3 border-b border-[#F7EDE2]/40 bg-transparent placeholder-[#F7EDE2]/50 text-[#F7EDE2] focus:outline-none focus:border-[#F7EDE2]/80 transition-colors resize-none h-24"
            />
            <div className="flex justify-end pt-6">
              <Button
                size="lg"
                className="bg-[#F7EDE2] hover:bg-[#EFE5D9] text-[#4A4033] font-medium px-8 py-3 rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
                type="submit"
              >
                Submit →
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;