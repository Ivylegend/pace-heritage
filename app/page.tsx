import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { SlideIn } from "@/components/Motion";
import { Navbar } from "@/components/Navbar";
import { Retailers } from "@/components/Retailers";
import { SectionHeader } from "@/components/SectionHeader";
import {
  HeroAnimations,
  StatsStrip,
  MfgFeatures,
  DistributionSection,
  PrivateLabelSection,
} from "@/components/HomeAnimations";
import ProductCardsSection from "@/components/ProductSection";

const container =
  "mx-auto w-[min(1180px,calc(100%_-_40px))] max-sm:w-[calc(100%_-_28px)]";

const mfgFeatures = [
  { label: "Advanced technology", icon: "Cpu" },
  { label: "Hygienic production", icon: "ShieldCheck" },
  { label: "Quality assurance", icon: "Award" },
  { label: "Scalable capacity", icon: "TrendingUp" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section
          className="relative isolate min-h-[760px] lg:h-screen overflow-hidden bg-[radial-gradient(circle_at_66%_35%,rgba(17,166,232,0.28),transparent_33%),linear-gradient(125deg,#05142b_0%,#071a34_48%,#020d20_100%)] pt-[150px] pb-8 text-white max-lg:min-h-0 max-lg:pt-32 max-sm:pt-28"
          id="about"
        >
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

          <HeroAnimations container={container} />

          {/* ── Feature strip ─────────────────────────────────────── */}
          <StatsStrip container={container} />
        </section>

        {/* ── Products ──────────────────────────────────────────── */}
        <section
          className="bg-[linear-gradient(180deg,#fff_0%,#f4f7fb_100%)] py-20 md:py-24"
          id="products"
        >
          <div className={container}>
            <SlideIn from="bottom">
              <SectionHeader
                title="Our Product Range"
                description="Premium products for retail, foodservice, manufacturing, and private-label growth."
              />
            </SlideIn>
            {/* <ProductGrid products={products} /> */}
            <ProductCardsSection />
          </div>
        </section>

        {/* ── Manufacturing ─────────────────────────────────────── */}
        <section
          className="grid min-h-[620px] bg-[radial-gradient(circle_at_74%_32%,rgba(17,166,232,0.22),transparent_26%),linear-gradient(125deg,#061832_0%,#021025_100%)] text-white lg:grid-cols-2"
          id="manufacturing"
        >
          <SlideIn from="left">
            <div className="relative min-h-[360px] overflow-hidden lg:min-h-[620px]">
              <Image
                className="h-full w-full object-cover"
                src="/images/manufacturing-excellence.png"
                alt="Modern ice cream manufacturing facility with hygienic production equipment"
                width={1409}
                height={1117}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/40 pointer-events-none" />
            </div>
          </SlideIn>
          <SlideIn from="right">
            <div className="flex flex-col justify-center px-6 py-12 md:px-10 lg:px-[max(40px,calc((100vw-1180px)/2))] lg:py-18 lg:pl-16">
              <SectionHeader
                eyebrow="Manufacturing excellence"
                title="Built for Quality. Driven by Innovation."
                description="Our state-of-the-art manufacturing facility ensures the highest standards of quality, food safety, and consistency in every batch."
                light
              />
              <MfgFeatures features={mfgFeatures} />
            </div>
          </SlideIn>
        </section>

        {/* ── Distribution ──────────────────────────────────────── */}
        <DistributionSection container={container} />

        {/* ── Private label ─────────────────────────────────────── */}
        <PrivateLabelSection container={container} />

        <Retailers />
      </main>

      <Footer />

      <Link
        className="fixed right-6 bottom-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#24d366] text-sm font-black text-white shadow-[0_16px_36px_rgba(36,211,102,0.32)] max-sm:right-4 max-sm:bottom-4 max-sm:h-13 max-sm:w-13"
        href="https://wa.me/2348031234567"
        aria-label="Chat on WhatsApp"
      >
        <Image
          src="/icons/whatsapp.svg"
          width={32}
          height={32}
          alt="whatsapp"
          loading="eager"
        />
      </Link>
    </>
  );
}
