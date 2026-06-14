"use client";

import { useRef } from "react";
import { Award, Zap, Users, ShieldCheck } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";

/* ─── Timeline data ────────────────────────────────────────────── */
const timelineData = [
  {
    year: "1995",
    title: "The Beginning",
    description:
      "Pace Heritage began in Lagos as a neighborhood convenience store selling ice cream for a major manufacturer.",
    image: "/images/beginning.png",
  },
  {
    year: "Journey to Italy",
    title: "The Italian Inspiration",
    description:
      "Our founders, Mr. & Mrs. Prosper C. Okigue, were inspired by the art and compassion Italian gelato makers put into every flavor, the ambience, and the rich aroma of Italian espresso and gelato shops.",
    image: "/images/italy.png",
  },
  {
    year: "Sophisticated Flavors",
    title: "The Olde English Era",
    description:
      "The inspiration led to The Olde English Jazz Bar/Restaurant, where every meal was paired with exquisite ice cream desserts. It became a local Mecca for jazz lovers and a home for emerging artists.",
    image: "/images/old-english.png",
  },
  {
    year: "Innovation",
    title: "A Cone of Our Own",
    description:
      "We introduced ice cream cones — a complete departure from plastic cups. Demand for our takeaway ice cream and cones grew rapidly.",
    image: "/images/product-cone.png",
  },
  {
    year: "1995 - 2005",
    title: "Building for Growth",
    description:
      "We moved to a 240 square meter factory at Lagos State Small Scale Industries Estate, Matori, Lagos, equipped with automatic machines and premium ingredients from leading Italian firms.",
    image: "/images/hero-bg.png",
  },
  {
    year: "2005",
    title: "A New Chapter",
    description:
      "Pace expanded to a 1.5-hectare factory at Agbara Industrial Estate and secured NAFDAC certification in 2006 for all our products.",
    image: "/images/new-chapter.png",
  },
  {
    year: "Future",
    title: "Today & Beyond",
    description:
      "The Pace Heritage dream became reality, and the drive to achieve excellence remains unstoppable. We continue to innovate and deliver premium ice cream products across Nigeria and beyond.",
    image: "/images/lick.png",
  },
];

/* ─── Spring config for buttery scroll-driven motion ──────────── */
const springConfig = { stiffness: 280, damping: 38, mass: 0.7 };

/* ─── Sticky timeline card ─────────────────────────────────────── */
function TimelineCard({
  item,
  index,
  total,
  scrollYProgress,
}: {
  item: (typeof timelineData)[0];
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const slotSize = 1 / total;
  const start = index * slotSize;

  // Use 50% of the slot for the slide-up entrance (was 20%).
  // Card 0 is already in place — no entrance needed.
  const entranceStart = index === 0 ? 0 : start;
  const entranceEnd   = index === 0 ? 0.001 : start + slotSize * 0.5;

  // Raw scroll-linked transforms
  const rawY = useTransform(
    scrollYProgress,
    [entranceStart, entranceEnd],
    index === 0 ? ["0%", "0%"] : ["100%", "0%"]
  );

  const rawOpacity = useTransform(
    scrollYProgress,
    index === 0
      ? [0, 1]
      : [entranceStart, entranceStart + slotSize * 0.25],
    [1, 1] // card 0 stays fully visible
  );
  // For non-zero cards, override with a 0→1 fade
  const rawOpacityNonZero = useTransform(
    scrollYProgress,
    [entranceStart, entranceStart + slotSize * 0.3],
    [0, 1]
  );

  // Spring-smooth everything for buttery feel
  const y = useSpring(rawY, springConfig);
  const opacity = useSpring(
    index === 0 ? rawOpacity : rawOpacityNonZero,
    springConfig
  );

  // Subtle content entrance: text slides from one side, image from the other
  const rawTextX = useTransform(
    scrollYProgress,
    [entranceStart, entranceEnd],
    index === 0 ? ["0px", "0px"] : ["-24px", "0px"]
  );
  const rawImageX = useTransform(
    scrollYProgress,
    [entranceStart, entranceEnd],
    index === 0 ? ["0px", "0px"] : ["24px", "0px"]
  );
  const textX = useSpring(rawTextX, springConfig);
  const imageX = useSpring(rawImageX, springConfig);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      style={{ y, opacity, zIndex: index + 1 }}
      className="absolute inset-0 flex items-center bg-white overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col lg:flex-row gap-12 items-center ${
            isEven ? "" : "lg:flex-row-reverse"
          }`}
        >
          {/* Text */}
          <motion.div style={{ x: textX }} className="flex-1 space-y-6">
            <div className="text-[#f3b23f] font-bold text-sm tracking-[0.12em] uppercase">
              {item.year}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#07182f]">
              {item.title}
            </h2>
            <div className="w-16 h-0.5 bg-[#f3b23f]" />
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">
              {item.description}
            </p>
            {/* Step indicator */}
            <div className="flex items-center gap-1.5 pt-2">
              {timelineData.map((_, i) => (
                <span
                  key={i}
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-6 bg-[#f3b23f]"
                      : "w-1.5 bg-[#07182f]/20"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div style={{ x: imageX }} className="flex-1 w-full">
            <div className="relative h-[320px] md:h-[400px] overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(7,24,47,0.16)]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────── */
export default function AboutPage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="min-h-screen bg-white font-sans text-[#0A1A2F]">
      <Navbar />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative isolate min-h-[760px] lg:h-screen max-lg:min-h-0 pt-[150px] pb-8 max-lg:pt-32 max-sm:pt-28 overflow-hidden bg-[radial-gradient(circle_at_66%_35%,rgba(17,166,232,0.28),transparent_33%),linear-gradient(125deg,#05142b_0%,#071a34_48%,#020d20_100%)] text-white">
        <Image
          className="absolute inset-0 -z-30 h-full w-full object-cover object-right opacity-[0.42] blur-[1px]"
          src="/images/hero-bg.png"
          alt="Hero background"
          fill
          priority
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(4,16,34,0.96)_0%,rgba(4,16,34,0.72)_38%,rgba(4,16,34,0.23)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_42%_18%,rgba(243,178,63,0.12),transparent_18%),radial-gradient(circle_at_74%_20%,rgba(255,255,255,0.16),transparent_8%),radial-gradient(circle_at_88%_62%,rgba(17,166,232,0.18),transparent_22%)] opacity-90" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[82px_82px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left – text */}
            <div className="space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#f3b23f] text-xs font-medium uppercase tracking-widest"
              >
                Our Story
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
                className="font-serif text-[clamp(3.1rem,5.1vw,4.25rem)] leading-[0.96] max-sm:text-[clamp(2.75rem,11.7vw,4.1rem)] max-sm:leading-[1.02]"
              >
                A Heritage of Passion.
                <br />
                <span className="text-[#f3b23f]">A Future of Excellence.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.22, ease: [0.19, 1, 0.22, 1] }}
                className="text-[1.05rem] text-white/80 leading-8 max-w-xl"
              >
                Our journey began with a simple love for ice cream and a dream
                to create exceptional experiences for every customer.
              </motion.p>
            </div>

            {/* Right – image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.18, ease: [0.19, 1, 0.22, 1] }}
              className="relative w-full h-[500px] overflow-hidden"
            >
              <Image
                src="/images/ab.png"
                alt="Premium Ice Cream"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover scale-110 lg:scale-120"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Sticky Scroll Timeline ───────────────────────────────── */}
      {/*
        The outer div is taller than the screen by (n-1) × 100vh so that
        scrolling through it advances the progress tracker.
        The inner div is sticky so the content appears frozen while the user
        scrolls, and each card slides up over the previous one.
      */}
      <div
        ref={timelineRef}
        style={{ height: `${timelineData.length * 65}vh` }}
        className="relative bg-white"
      >
        {/* Section label – visible before sticky kicks in */}
        <div className="py-20 text-center sticky top-0 z-0 pointer-events-none">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#f3b23f]">
            Our history
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl font-bold text-[#07182f]">
            30 Years of Craftsmanship
          </h2>
        </div>

        {/* Sticky frame */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="relative h-full">
            {timelineData.map((item, index) => (
              <TimelineCard
                key={index}
                item={item}
                index={index}
                total={timelineData.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Our Promise ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#07182f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-serif">
              Quality Today. Excellence Always.
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We remain committed to crafting premium ice cream products with
              integrity, innovation and a passion for bringing joy to every
              customer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {([
              {
                icon: "Award" as const,
                title: "Premium Quality",
                desc: "Using only the finest ingredients sourced globally.",
                anim: { animate: { rotate: [0, -10, 10, -5, 0], y: [0, -3, 0] }, transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" as const } },
              },
              {
                icon: "Zap" as const,
                title: "Innovation Driven",
                desc: "Constant evolution of flavors and manufacturing.",
                anim: { animate: { scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }, transition: { duration: 1.4, repeat: Infinity, ease: "easeInOut" as const } },
              },
              {
                icon: "Users" as const,
                title: "Customer Focused",
                desc: "Every scoop is designed for your ultimate satisfaction.",
                anim: { animate: { y: [0, -4, 0], x: [0, 2, -2, 0] }, transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut" as const } },
              },
              {
                icon: "ShieldCheck" as const,
                title: "Proudly Nigerian",
                desc: "Building local excellence with international standards.",
                anim: { animate: { scale: [1, 1.1, 1], y: [0, -3, 0] }, transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const } },
              },
            ]).map((promise, i) => {
              const IconComp = { Award, Zap, Users, ShieldCheck }[promise.icon];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.19, 1, 0.22, 1] }}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#f3b23f]/50 transition-all group"
                >
                  <motion.div
                    animate={promise.anim.animate}
                    transition={promise.anim.transition}
                    className="mb-5"
                  >
                    <IconComp className="text-[#f3b23f]" size={44} />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-3">{promise.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {promise.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
