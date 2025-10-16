"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  Variants,
  cubicBezier,
} from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Header from "@/components/Header";

import aboutHero from "@/assets/about/about-hero.jpg";
import listenImg from "@/assets/about/listen.jpg";
import imagineImg from "@/assets/about/imagine.jpg";
import createImg from "@/assets/about/create.jpg";
import refineImg from "@/assets/about/refine.jpg";
import teamImg from "@/assets/about/team.jpg";

import type { StaticImageData } from "next/image";

gsap.registerPlugin?.(ScrollTrigger);

const easeCurve = cubicBezier(0.25, 0.1, 0.25, 1);

function getImageUrl(img: string | StaticImageData): string {
  if (typeof img === "object" && img && "src" in img) return img.src;
  return String(img || "");
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: easeCurve },
  }),
};

function AnimatedCounter({ from = 0, to }: { from?: number; to: number }) {
  const count = useMotionValue(from);
  const spring = useSpring(count, { stiffness: 60, damping: 15 });
  const rounded = useTransform(spring, (v) => Math.floor(v).toLocaleString());

  React.useEffect(() => {
    const id = setTimeout(() => count.set(to), 300);
    return () => clearTimeout(id);
  }, [to, count]);

  return <motion.span>{rounded}</motion.span>;
}

const About: React.FC = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const shimmerRef = useRef<HTMLDivElement | null>(null);
  const journeyRef = useRef<HTMLDivElement | null>(null);
  const moodRef = useRef<HTMLDivElement | null>(null);

  const aboutHeroUrl = getImageUrl(aboutHero);
  const listenUrl = getImageUrl(listenImg);
  const imagineUrl = getImageUrl(imagineImg);
  const createUrl = getImageUrl(createImg);
  const refineUrl = getImageUrl(refineImg);
  const teamUrl = getImageUrl(teamImg);

  // small parallax for hero text via framer useScroll
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    // 1) Shimmer sweep
    if (shimmerRef.current) {
      gsap.to(shimmerRef.current, {
        xPercent: 100,
        duration: 10,
        ease: "none",
        repeat: -1,
        repeatDelay: 1.5,
      });
    }

    // 2) Floating gold particles (noticeable)
    const particleEls: HTMLDivElement[] = [];
    const particleCount = 9;
    for (let i = 0; i < particleCount; i++) {
      const el = document.createElement("div");
      el.className =
        "gold-particle pointer-events-none absolute rounded-full";
      const size = 8 + Math.round(Math.random() * 22);
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.left = `${5 + Math.random() * 90}%`;
      el.style.top = `${8 + Math.random() * 70}%`;
      el.style.opacity = `${0.5 + Math.random() * 0.5}`;
      el.style.filter = "blur(6px)";
      el.style.zIndex = "5";
      heroRef.current?.appendChild(el);
      particleEls.push(el);
      gsap.to(el, {
        y: `-=${10 + Math.random() * 80}`,
        x: `+=${-30 + Math.random() * 60}`,
        duration: 6 + Math.random() * 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: Math.random() * 2,
      });
    }

    // 3) Cinematic journey - dynamic end to avoid giant spacer
    if (journeyRef.current) {
      const scenes = journeyRef.current.querySelectorAll<HTMLElement>(
        ".journey-scene"
      );
      const sceneCount = Math.max(1, scenes.length);
      // compute end distance based on viewport and number of scenes
      const viewportH = window.innerHeight || 800;
      const perSceneScroll = Math.round(viewportH * 0.8); // compact per-scene scroll
      const totalEnd = perSceneScroll * sceneCount;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: journeyRef.current,
          start: "top top",
          end: () => `+=${totalEnd}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      });

      scenes.forEach((sec, idx) => {
        // small overlap between scenes
        tl.fromTo(
          sec,
          { autoAlpha: 0, y: 40, scale: 0.995 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" },
          idx * 0.9
        ).to(
          sec,
          { autoAlpha: 0, y: -30, duration: 0.6, ease: "power2.inOut" },
          idx * 0.9 + 0.7
        );
      });

      // ensure last scene fades directly into next section (no blank)
      // last scene will end with autoAlpha 0, so the next section sits directly after.
    }

    // 4) Moodboard gentle parallax
    if (moodRef.current) {
      gsap.to(moodRef.current, {
        y: -28,
        ease: "none",
        scrollTrigger: {
          trigger: moodRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // cleanup
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      particleEls.forEach((el) => el.remove());
    };
  }, []);

  const moodItems = [
    { label: "Calacatta Marble", color: "#EAE7E1", img: imagineUrl },
    { label: "Walnut Finish", color: "#7a4f36", img: createUrl },
    { label: "Velvet Upholstery", color: "#b99387", img: refineUrl },
    { label: "Sandstone", color: "#d8c7a6", img: listenUrl },
    { label: "Brass Accent", color: "#d4b85b", img: teamUrl },
    { label: "Matte Black", color: "#2b2a29", img: aboutHeroUrl },
  ];

  return (
    <div className="min-h-screen bg-[#4A4033] text-[#F5EBDC] overflow-x-hidden">
      <Header />

      <main>
        {/* HERO */}
        <section
          ref={heroRef}
          className="relative h-[90vh] md:h-[85vh] flex items-center justify-center overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${aboutHeroUrl})` }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff12] to-[#4A4033]/95" />

          {/* Gold shimmer */}
          <div
            ref={shimmerRef}
            aria-hidden
            className="absolute -left-[60%] top-0 w-[160%] h-full pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,228,148,0.08) 30%, rgba(255,212,82,0.36) 50%, rgba(255,228,148,0.08) 70%, rgba(255,255,255,0) 100%)",
              mixBlendMode: "overlay",
              filter: "blur(28px) saturate(120%)",
              transform: "translateX(-10%)",
            }}
          />

          {/* unified hero text */}
          <div
            className="relative z-20 text-center px-6"
            style={{ perspective: 900 }}
          >
            <motion.h1
              style={{ y: yText, opacity: opacityText }}
              className="font-serif text-[56px] md:text-[86px] lg:text-[108px] leading-none"
            >
              <span
                className="inline-block"
                style={{
                  color: "#F5EBDC",
                  textShadow:
                    "0 8px 26px rgba(0,0,0,0.6), 0 0 46px rgba(212,184,91,0.28)",
                  transform: "translateZ(10px)",
                }}
              >
                About Us
              </span>
            </motion.h1>

            <motion.p
              style={{ y: yText, opacity: opacityText }}
              className="mt-6 max-w-2xl mx-auto text-lg text-[#F5EBDC]/86"
            >
              The story behind our design philosophy — cinematic interiors,
              crafted for living.
            </motion.p>
          </div>

          {/* scroll hint — ensure visible and above shimmer */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
            <div className="text-xs uppercase tracking-widest text-[#F5EBDC]/70 animate-bounce">
              Scroll to explore
            </div>
          </div>
        </section>

        {/* JOURNEY (pinned, dynamic end to avoid large blank gap) */}
        <section
          ref={journeyRef}
          className="relative bg-[#3B332A] text-[#F5EBDC] py-10"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12 text-center">
              <h2 className="text-4xl md:text-5xl font-serif text-[#D8C7A6]">
                Our Journey
              </h2>
              <p className="text-[#F5EBDC]/80 mt-4 max-w-2xl mx-auto">
                A cinematic walkthrough of our process. Scroll to move through
                each chapter.
              </p>
            </div>

            <div className="relative h-[72vh] md:h-[78vh]">
              {[
                {
                  img: listenUrl,
                  title: "We Listen",
                  text: "We start with conversations — understanding lifestyle, light, and legacy so the design fits seamlessly into how you live.",
                },
                {
                  img: imagineUrl,
                  title: "We Imagine",
                  text: "Concepts, sketches and renders shape the vision — where material, light and proportion meet.",
                },
                {
                  img: createUrl,
                  title: "We Create",
                  text: "Expert craftsmen and trusted partners bring the vision to life with detail-first execution.",
                },
                {
                  img: refineUrl,
                  title: "We Refine",
                  text: "Styling, lighting and finishing touches make the space a living experience.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`journey-scene absolute inset-0 flex items-center justify-center p-8`}
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-8 items-center ${
                      idx % 2 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full rounded-2xl shadow-2xl object-cover h-96"
                    />
                    <div>
                      <h3 className="text-4xl font-serif text-[#D8C7A6] mb-4">
                        {item.title}
                      </h3>
                      <p className="text-[#F5EBDC]/80 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MOODBOARD — matches dark theme, no bright white */}
        <section className="py-20 bg-[#3B332A] text-[#F5EBDC]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-serif text-[#D8C7A6] mb-6">
              Moodboard
            </h2>
            <p className="text-[#F5EBDC]/70 mb-6 max-w-3xl">
              A curated lookbook of materials, textures and finishes — drag or
              swipe to explore.
            </p>

            <div
              ref={moodRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-6"
              style={{ WebkitOverflowScrolling: "touch", scrollBehavior: "smooth" }}
            >
              {moodItems.map((m, idx) => (
                <div
                  key={idx}
                  className="snap-center flex-shrink-0 w-[280px] md:w-[360px] rounded-2xl bg-[#4A4033] shadow-lg overflow-hidden border border-[#D8C7A6]/14 transform transition-transform"
                >
                  <div className="relative h-48 md:h-56">
                    <img
                      src={m.img}
                      alt={m.label}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute left-4 bottom-4 px-3 py-1 rounded-md text-sm font-semibold"
                      style={{
                        background: "rgba(74,64,51,0.82)",
                        color: "#F5EBDC",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      {m.label}
                    </div>
                  </div>

                  <div className="p-4 bg-[#4A4033]">
                    <div
                      className="h-6 w-full rounded-md mb-2"
                      style={{ background: m.color }}
                    />
                    <p className="text-sm text-[#F5EBDC]/70">
                      {m.label} — signature texture in our palette.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-sm text-[#F5EBDC]/60">
              Tip: drag or swipe horizontally to explore more materials.
            </div>
          </div>
        </section>

        {/* PHILOSOPHY + STATS */}
        <section className="py-20 bg-[#4A4033] text-[#F5EBDC]">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-serif text-[#D8C7A6] mb-4">
                Our Philosophy
              </h2>
              <p className="text-[#F5EBDC]/80 leading-relaxed mb-6">
                At Bin Haider Interiors, we craft interiors that tell a story —
                balancing form, light and function to create timeless spaces.
              </p>
              <img
                src={teamUrl}
                alt="team"
                className="rounded-2xl shadow-2xl w-full h-72 object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { num: 2500, label: "Kitchen Designs" },
                { num: 4156, label: "Satisfied Clients" },
                { num: 1380, label: "Interior Designs" },
                { num: 929, label: "Furniture Designs" },
              ].map((it, i) => (
                <div
                  key={i}
                  className="bg-[#463D34]/40 rounded-xl p-6 text-center"
                >
                  <div className="text-4xl md:text-5xl font-serif text-[#D8C7A6] mb-2">
                    <AnimatedCounter to={it.num} />+
                  </div>
                  <div className="text-sm text-[#F5EBDC]/70 uppercase tracking-wide">
                    {it.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#3B332A] text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h3 className="text-3xl md:text-4xl font-serif text-[#D8C7A6] mb-4">
              Let’s design the story your space deserves.
            </h3>
            <p className="text-[#F5EBDC]/80 mb-6">
              Tell us about your project and let’s begin the journey together.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#D8C7A6] text-[#392E25] px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition"
            >
              Start Your Project
            </a>
          </div>
        </section>
      </main>

      <style>{`
        .gold-particle {
          background: radial-gradient(circle at 30% 30%, rgba(255,230,170,0.95), rgba(212,184,91,0.6));
          box-shadow: 0 8px 28px rgba(212,184,91,0.28);
          mix-blend-mode: screen;
        }
        /* scrollbar styling for moodboard */
        .overflow-x-auto::-webkit-scrollbar {
          height: 8px;
        }
        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.12);
          border-radius: 999px;
        }
      `}</style>
    </div>
  );
};

export default About;