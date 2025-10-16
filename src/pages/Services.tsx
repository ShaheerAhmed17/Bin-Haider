"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 🎬 Background Image
import bgShowcase from "@/assets/kitchens/bg-showcase.jpg";

// 🖼 Kitchen Images (18)
import pvcNice from "@/assets/kitchens/pvc-nice-kitchen.jpg";
import pvcModern from "@/assets/kitchens/pvc-modern-kitchen.jpg";
import pvcLuxury from "@/assets/kitchens/pvc-luxury-kitchen.jpg";
import pvcGorgeous from "@/assets/kitchens/pvc-gorgeous-kitchen.jpg";
import pvcPremium from "@/assets/kitchens/pvc-premium-kitchen.jpg";
import pvcGlamorous from "@/assets/kitchens/pvc-glamorous-kitchen.jpg";

import sgAwesome from "@/assets/kitchens/semiglass-awesome-house.jpg";
import sgModern from "@/assets/kitchens/semiglass-modern-home.jpg";
import sgCity from "@/assets/kitchens/semiglass-city-center.jpg";
import sgGorgeous from "@/assets/kitchens/semiglass-gorgeous-kitchen.jpg";
import sgLuxury from "@/assets/kitchens/semiglass-luxury-kitchen.jpg";
import sgGlamorous from "@/assets/kitchens/semiglass-glamorous-kitchen.jpg";

import shAwesome from "@/assets/kitchens/sheet-awesome-kitchen.jpg";
import shModern from "@/assets/kitchens/sheet-modern-kitchen.jpg";
import shCity from "@/assets/kitchens/sheet-city-kitchen.jpg";
import shStudio from "@/assets/kitchens/sheet-studio-kitchen.jpg";
import shLuxury from "@/assets/kitchens/sheet-luxury-kitchen.jpg";
import shGlamorous from "@/assets/kitchens/sheet-glamorous-kitchen.jpg";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const panels = [
  { title: "PVC — Nice Kitchen", img: pvcNice },
  { title: "PVC — Modern", img: pvcModern },
  { title: "PVC — Luxury", img: pvcLuxury },
  { title: "PVC — Gorgeous", img: pvcGorgeous },
  { title: "PVC — Premium", img: pvcPremium },
  { title: "PVC — Glamorous", img: pvcGlamorous },

  { title: "Semi Glass — Awesome House", img: sgAwesome },
  { title: "Semi Glass — Modern Home", img: sgModern },
  { title: "Semi Glass — City Center", img: sgCity },
  { title: "Semi Glass — Gorgeous", img: sgGorgeous },
  { title: "Semi Glass — Luxury", img: sgLuxury },
  { title: "Semi Glass — Glamorous", img: sgGlamorous },

  { title: "Sheet — Awesome", img: shAwesome },
  { title: "Sheet — Modern", img: shModern },
  { title: "Sheet — City", img: shCity },
  { title: "Sheet — Studio", img: shStudio },
  { title: "Sheet — Luxury", img: shLuxury },
  { title: "Sheet — Glamorous", img: shGlamorous },
];

export default function HorizontalScrollShowcase() {
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !wrapRef.current) return;

    const ctx = gsap.context(() => {
      const sections = wrapRef.current!.querySelectorAll(".panel");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: wrapRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${window.innerWidth * sections.length}`,
        },
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  const handleClick = () => (window.location.href = "/contact");

  return (
    <div className="min-h-screen bg-[#4A4033] text-[#F5EBDC] overflow-x-hidden relative">
      <Header />

      <main className="relative">
        {/* 🎬 Hero Section with Cinematic Background */}
        <section className="relative h-screen flex items-center justify-center">
          <img
            src={bgShowcase}
            alt="Cinematic Background"
            className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#4A4033]/60 to-[#4A4033]" />

          <div className="text-center relative z-10">
            <h1 className="text-5xl font-serif text-[#D8C7A6] drop-shadow-lg">
              Cinematic Showcase
            </h1>
            <p className="text-[#F5EBDC]/80 mt-3 max-w-2xl mx-auto text-lg">
              Scroll down to move horizontally through our finest kitchen interiors.
            </p>
          </div>
        </section>

        {/* 🧱 Horizontal Scroll Panels */}
        <section ref={wrapRef} className="relative">
          <div className="flex gap-10 items-stretch px-8 py-16">
            {panels.map((p, i) => (
              <div
                key={i}
                className="panel w-screen flex-shrink-0 flex items-center justify-center cursor-pointer group"
                style={{ minHeight: "80vh" }}
                onClick={handleClick}
              >
                <div className="relative max-w-5xl rounded-3xl overflow-hidden shadow-2xl w-[90%] bg-[#3B332A] transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[70vh] object-cover rounded-t-3xl transform-gpu transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="p-8 bg-[#3B332A]">
                    <h3 className="text-3xl font-serif text-[#D8C7A6]">{p.title}</h3>
                    <p className="text-[#F5EBDC]/80 mt-2">Luxurious finishes, cinematic photography.</p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/60 flex items-center justify-center">
                    <span className="text-[#D8C7A6] font-semibold text-lg tracking-wide">
                      Contact Us →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🌟 Outro Section */}
        <section className="h-screen flex items-center justify-center">
          <div className="text-center max-w-3xl">
            <h2 className="text-4xl font-serif text-[#D8C7A6]">Explore More</h2>
            <p className="text-[#F5EBDC]/80 mt-4">
              Click any card to reach out for inquiries or quotations.
            </p>
          </div>
        </section>
      </main>

      <style>{`
        .panel {
          padding: 0 20px;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
