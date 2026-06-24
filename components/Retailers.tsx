"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "@/components/Motion";
import { retailers } from "@/lib/site-data";

const container =
  "mx-auto w-[min(1180px,calc(100%_-_40px))] max-sm:w-[calc(100%_-_28px)]";

export function Retailers() {
  const renderRetailer = (retailer: { name: string; logo?: string; colorClass?: string }) => {
    if (retailer.logo) {
      return (
        <Image
          src={retailer.logo}
          alt={`${retailer.name} Logo`}
          width={120}
          height={32}
          style={{ width: "auto", height: "auto" }}
          className="mx-auto h-8 w-auto object-contain transition duration-300 hover:scale-105"
        />
      );
    }
    return (
      <span
        className={[
          "text-[clamp(1.05rem,2.2vw,1.55rem)] font-black whitespace-nowrap",
          retailer.colorClass || "",
        ].join(" ")}
      >
        {retailer.name}
      </span>
    );
  };

  return (
    <section className="bg-white pb-16">
      <FadeIn
        className={`${container} rounded-lg border border-[#07182f]/10 bg-white p-7 text-center shadow-[0_18px_50px_rgba(7,24,47,0.08)]`}
      >
        <p className="mb-3.5 text-xs font-black uppercase tracking-[0.08em] text-[#f3b23f]">
          Trusted by leading retailers
        </p>

        {/* Endless Marquee — all screen sizes */}
        <div
          className="relative w-full overflow-hidden py-2.5"
          aria-label="Retailer partners"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-linear-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-white to-transparent z-10" />

          <motion.div
            className="flex w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            }}
          >
            {/* Original set */}
            {retailers.map((retailer) => (
              <div
                key={`${retailer.name}-orig`}
                className="mx-10 shrink-0 flex items-center justify-center min-w-[120px] md:mx-16 md:min-w-[160px]"
              >
                {renderRetailer(retailer)}
              </div>
            ))}
            {/* Duplicated set for seamless loop */}
            {retailers.map((retailer) => (
              <div
                key={`${retailer.name}-dup`}
                className="mx-10 shrink-0 flex items-center justify-center min-w-[120px] md:mx-16 md:min-w-[160px]"
              >
                {renderRetailer(retailer)}
              </div>
            ))}
          </motion.div>
        </div>
      </FadeIn>
    </section>
  );
}
