"use client";

import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-[#D8C7A6]">
      {/* Background Gradient & Subtle Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0f0e0d] via-[#121212] to-[#0f0e0d]" />
      <motion.div
        className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-amber-500/5 blur-[150px] rounded-full"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[180px] rounded-full"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 items-start">
          {/* Vertical Rotated Logo */}
          <div className="flex justify-center md:justify-start items-center h-full">
            <div className="text-4xl md:text-5xl font-serif font-bold tracking-widest leading-[1] transform -rotate-90 origin-center text-gradient animate-gradient">
              BIN HAIDER
            </div>
          </div>

          {/* Right Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Addresses */}
            <div className="space-y-6">
              <h4 className="uppercase font-semibold text-sm tracking-widest text-[#BDAF9B]">
                Factory
              </h4>
              <p className="text-sm leading-relaxed">
                Bin Haider Factory Outlet, Plot#1134, Near Suzuki Capital Motors,
                Main Industrial Area, Model, Humak Town, Islamabad, 45700, Pakistan
              </p>

              <h4 className="uppercase font-semibold text-sm tracking-widest text-[#BDAF9B]">
                Showroom
              </h4>
              <p className="text-sm leading-relaxed">
                Bin Haider Showroom, Plaza#18, Main Faqir Aipee Road, near Metro Cash n Carry,
                I-11/3, Islamabad Capital Territory, 44800
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h4 className="uppercase font-semibold text-sm tracking-widest text-[#BDAF9B]">
                Contact
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  <a href="tel:+923005012720" className="hover:text-white transition-colors">
                    +92 3005012720
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  <a href="tel:+923212141000" className="hover:text-white transition-colors">
                    +92 321 2141000
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href="mailto:info@binhaider.pk" className="hover:text-white transition-colors">
                    info@binhaider.pk
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="uppercase font-semibold text-sm tracking-widest text-[#BDAF9B]">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/portfolio" className="hover:text-white transition-colors">Designs</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#3a3a3a] mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#BDAF9B] gap-4">
          <p>© {new Date().getFullYear()} Bin Haider. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Gradient Text Animation */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background: linear-gradient(90deg, #D8C7A6, #BDAF9B, #D8C7A6);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 8s ease infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
