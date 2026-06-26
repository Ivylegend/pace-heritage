"use client";

import Image from "next/image";
import { AfricaDistributionMap } from "@/components/AfricaDistributionMap";
import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  ShieldCheck,
  Award,
  TrendingUp,
  Truck,
  Crown,
  Clock,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import { motion, type TargetAndTransition, type Transition } from "framer-motion";
import { SlideIn } from "@/components/Motion";
import { SectionHeader } from "@/components/SectionHeader";

const ease = [0.19, 1, 0.22, 1] as const;

const primaryButton =
  "inline-flex min-h-12 items-center justify-center gap-3 rounded-[10px] bg-gradient-to-br from-[#c8791c] to-[#f3b23f] px-6 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(217,149,36,0.32)] transition hover:-translate-y-0.5 hover:from-[#d98a2a] hover:to-[#f5c14f] hover:shadow-[0_18px_44px_rgba(217,149,36,0.36)] max-sm:w-full";
const ghostButton =
  "inline-flex min-h-12 items-center justify-center gap-3 rounded-[10px] border border-white/35 bg-white/[0.06] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15 hover:border-white/65 hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)] max-sm:w-full";

/* ─── Icon map ───────────────────────────────────────────────── */
const iconMap: Record<string, LucideIcon> = {
  Cpu,
  ShieldCheck,
  Award,
  TrendingUp,
  Truck,
  Crown,
  Clock,
  Handshake,
};

/* ─── Hero – staggered entrance animations ───────────────────── */
export function HeroAnimations({ container }: { container: string }) {
  return (
    <div
      className={`${container} grid items-center gap-6 lg:grid-cols-[minmax(560px,0.9fr)_minmax(0,1.1fr)]`}
    >
      {/* Text stack */}
      <div className="max-w-xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-3.5 text-xs font-medium uppercase tracking-[0.08em] text-[#f3b23f]"
        >
          Nigeria&apos;s leading
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.1, ease }}
          className="font-serif text-[clamp(3.1rem,5.1vw,4.25rem)] leading-[0.96] max-sm:text-[clamp(2.75rem,11.7vw,4.1rem)] max-sm:leading-[1.02]"
        >
          Ice Cream <span className="block text-[#f3b23f]">Manufacturing</span>{" "}
          Company
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.2, ease }}
          className="mt-5 max-w-[520px] text-[1.05rem] leading-8 text-white/85"
        >
          Premium ice cream dry mix, cones, and dessert solutions trusted by
          retailers across Nigeria.
        </motion.p>

        {/* Heritage badge */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.26, ease }}
          className="mt-7 flex items-center gap-4 border-t border-[#f3b23f]/40 pt-5"
        >
          <Image
            src="/images/anniversary-badge.png"
            alt="30 Years Anniversary Badge"
            width={80}
            height={80}
            className="h-12 w-12 shrink-0 object-contain"
          />
          <div>
            <p className="text-[0.95rem] font-medium leading-snug text-white/90">
              Crafting Ice Cream Excellence Since 1995
            </p>
            <p className="text-[0.95rem] font-medium italic leading-snug text-[#f3b23f] font-serif">
              30 Years of Manufacturing Heritage
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.32, ease }}
          className="mt-6 flex flex-wrap gap-4 max-sm:flex-col"
        >
          <Link className={primaryButton} href="mailto:info@paceheritage.com">
            Request Wholesale Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link className={ghostButton} href="/#products">
            View Our Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.97 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.18, ease }}
        className="relative"
      >
        {/* Anniversary badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6, ease }}
          className="absolute top-40 sm:top-48 right-16 lg:-right-16 z-20 w-[clamp(90px,16vw,150px)]"
        >
          <Image
            src="/images/anniversary-badge.png"
            alt="Pace Heritage Anniversary Badge"
            width={320}
            height={320}
            style={{ width: "100%", height: "auto" }}
            className="drop-shadow-[0_8px_24px_rgba(243,178,63,0.35)]"
            priority
          />
        </motion.div>

        <Image
          className="relative z-10 mx-auto w-[min(760px,100%)] drop-shadow-[0_34px_44px_rgba(0,0,0,0.28)] lg:translate-y-10 lg:drop-shadow-[0_48px_58px_rgba(0,0,0,0.38)]"
          src="/images/homepage/HeroPage.png"
          alt="Pace Heritage ice cream, cones, and dry mix products"
          width={1391}
          height={1131}
          style={{ height: "auto" }}
          priority
        />
      </motion.div>
    </div>
  );
}

/* ─── Per-icon looping animations (gif-like) ─────────────────── */
const iconAnimations: Record<string, { animate: TargetAndTransition; transition: Transition }> = {
  Truck: {
    animate: { x: [0, 3, -3, 2, 0] },
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
  Crown: {
    animate: { y: [0, -4, 0], rotate: [0, -6, 6, 0] },
    transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
  },
  Clock: {
    animate: { rotate: [0, 15, -15, 10, 0] },
    transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
  },
  Handshake: {
    animate: { rotate: [0, 12, -12, 8, -8, 0], y: [0, -2, 0] },
    transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
  },
  Cpu: {
    animate: { scale: [1, 1.12, 1], rotate: [0, 0, 90, 90, 0] },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
  ShieldCheck: {
    animate: { scale: [1, 1.1, 1], y: [0, -3, 0] },
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
  Award: {
    animate: { rotate: [0, -10, 10, -5, 0], y: [0, -3, 0] },
    transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
  },
  TrendingUp: {
    animate: { x: [0, 3, 0], y: [0, -4, 0] },
    transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
  },
};

/* ─── Stats strip (below hero) ───────────────────────────────── */
export function StatsStrip({ container }: { container: string }) {
  const features = [
    { label: "Nationwide Distribution", icon: "Truck" },
    { label: "Premium Quality", icon: "Crown" },
    { label: "Consistent Supply", icon: "Clock" },
    { label: "Trusted by Retailers", icon: "Handshake" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease }}
      className={`${container} mt-8 lg:mt-20 grid overflow-hidden rounded-2xl border border-white/15 bg-white/8 shadow-[0_22px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl md:grid-cols-2 lg:grid-cols-4`}
    >
      {features.map(({ label, icon }) => {
        const Icon = iconMap[icon];
        const anim = iconAnimations[icon];
        return (
          <div
            key={label}
            className="flex min-h-[92px] items-center gap-4 border-white/10 bg-[#021025]/40 px-6 py-4 max-sm:min-h-[74px] lg:border-r last:border-r-0"
          >
            <motion.div
              animate={anim.animate}
              transition={anim.transition}
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#f3b23f] text-[#f3b23f]"
              aria-hidden="true"
            >
              <Icon className="h-7 w-7" />
            </motion.div>
            <strong className="text-sm leading-snug">{label}</strong>
          </div>
        );
      })}
    </motion.div>
  );
}

/* ─── Product grid with staggered cards ──────────────────────── */
type Product = { name: string; description: string; image: string };

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product, index) => (
        <motion.article
          key={product.name}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: index * 0.07, ease }}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="group flex min-h-[430px] flex-col justify-between overflow-hidden rounded-lg border border-[#07182f]/10 bg-white/85 shadow-[0_18px_55px_rgba(7,24,47,0.08)] hover:shadow-[0_26px_70px_rgba(7,24,47,0.15)] cursor-default"
        >
          <div className="grid min-h-[255px] place-items-center bg-linear-to-b from-[#eef4fb] to-white">
            <Image
              className="h-[255px] w-full object-contain p-4 transition duration-500 group-hover:scale-[1.04]"
              src={product.image}
              alt={product.name}
              width={560}
              height={430}
              sizes="(max-width: 760px) 92vw, (max-width: 1100px) 45vw, 31vw"
            />
          </div>
          <div className="p-5">
            <h2 className="text-lg font-black text-[#07182f]">
              {product.name}
            </h2>
            <p className="mt-2.5 leading-7 text-[#637083]">
              {product.description}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

/* ─── Manufacturing features – staggered pills ───────────────── */
export function MfgFeatures({
  features,
}: {
  features: { label: string; icon: string }[];
}) {
  return (
    <div className="mb-8 grid gap-4.5 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
      {features.map(({ label, icon }, i) => {
        const Icon = iconMap[icon];
        const anim = iconAnimations[icon];
        return (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.09, ease }}
            className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-3"
          >
            <motion.div
              animate={anim?.animate}
              transition={anim?.transition}
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#f3b23f] text-[#f3b23f]"
              aria-hidden="true"
            >
              <Icon className="h-7 w-7" />
            </motion.div>
            <p className="m-0 text-sm leading-snug text-white/85">{label}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─── Distribution section ───────────────────────────────────── */
export function DistributionSection({ container }: { container: string }) {
  return (
    <section
      className="overflow-hidden bg-[radial-gradient(circle_at_74%_32%,rgba(17,166,232,0.22),transparent_26%),linear-gradient(125deg,#061832_0%,#021025_100%)] bg-[#001034] py-20 text-white md:py-24"
      id="distribution"
    >
      <div
        className={`${container} grid items-center gap-8 lg:grid-cols-[minmax(280px,0.7fr)_minmax(360px,1.3fr)]`}
      >
        <SlideIn from="left">
          <SectionHeader
            eyebrow="Distribution across Africa"
            title="Expanding Horizons. Delivering Excellence."
            description="Pace Heritage supplies premium ice cream to retailers across Nigeria and is expanding into other African markets."
            light
          />
          <Link className={ghostButton} href="mailto:info@paceheritage.com">
            Become a Distributor
            <ArrowRight className="h-4 w-4" />
          </Link>
        </SlideIn>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, delay: 0.1, ease }}
        >
          <AfricaDistributionMap />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Private label section ──────────────────────────────────── */
export function PrivateLabelSection({ container }: { container: string }) {
  return (
    <section className="overflow-hidden bg-white py-20 md:py-24" id="private-label">
      <div
        className={`${container} grid items-center gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(420px,1fr)]`}
      >
        <SlideIn from="left">
          <SectionHeader
            eyebrow="Private label manufacturing"
            title="Your Brand. Our Expertise. Endless Possibilities."
            description="We help brands bring their vision to life with custom formulations, premium ingredients, and world-class manufacturing."
          />
          <Link className={primaryButton} href="mailto:info@paceheritage.com">
            Start Your Private Label Journey
            <ArrowRight className="h-4 w-4" />
          </Link>
        </SlideIn>

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, delay: 0.12, ease }}
          className="overflow-hidden"
        >
          <Image
            className="h-auto w-full"
            src="/images/manufacturing-ingredients.png"
            alt="Manufacturing ingredients including soft ice cream premix and cones"
            width={1672}
            height={941}
            loading="eager"
            sizes="(max-width: 900px) 100vw, 46vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
