import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/Motion";
import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import {
  featureStrip,
  manufacturingFeatures,
  products,
  retailers,
} from "@/lib/site-data";

const container =
  "mx-auto w-[min(1180px,calc(100%_-_40px))] max-sm:w-[calc(100%_-_28px)]";
const primaryButton =
  "inline-flex min-h-12 items-center justify-center gap-3 rounded-[10px] bg-gradient-to-br from-[#c8791c] to-[#f3b23f] px-6 text-sm font-black text-white shadow-[0_14px_34px_rgba(217,149,36,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(217,149,36,0.36)] max-sm:w-full";
const ghostButton =
  "inline-flex min-h-12 items-center justify-center gap-3 rounded-[10px] border border-white/35 bg-white/[0.06] px-6 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-white/65 hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)] max-sm:w-full";
const goldIcon =
  "h-10 w-10 shrink-0 rounded-full border-2 border-[#f3b23f] bg-[linear-gradient(90deg,transparent_45%,#f3b23f_45%_55%,transparent_55%),linear-gradient(transparent_45%,#f3b23f_45%_55%,transparent_55%)]";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="relative isolate min-h-[760px] overflow-hidden bg-[radial-gradient(circle_at_66%_35%,rgba(17,166,232,0.28),transparent_33%),linear-gradient(125deg,#05142b_0%,#071a34_48%,#020d20_100%)] pt-[150px] pb-8 text-white max-lg:min-h-0 max-lg:pt-32 max-sm:pt-28"
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

          <div
            className={`${container} grid items-center gap-6 lg:grid-cols-[minmax(560px,0.9fr)_minmax(0,1.1fr)]`}
          >
            <FadeIn className="max-w-xl">
              <p className="mb-3.5 text-xs font-black uppercase tracking-[0.08em] text-[#f3b23f]">
                Nigeria&apos;s leading
              </p>
              <h1 className="font-serif text-[clamp(3.1rem,5.1vw,4.25rem)] leading-[0.96] max-sm:text-[clamp(2.75rem,11.7vw,4.1rem)] max-sm:leading-[1.02]">
                Ice Cream{" "}
                <span className="block text-[#f3b23f]">Manufacturing</span>{" "}
                Company
              </h1>
              <p className="mt-5 max-w-[520px] text-[1.05rem] leading-8 text-white/85">
                Supplying premium ice cream products to retailers nationwide and
                expanding distribution across Africa.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 max-sm:flex-col">
                <Link className={primaryButton} href="#contact">
                  Request Wholesale Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link className={ghostButton} href="#products">
                  View Our Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>

            <Image
              className="relative z-10 mx-auto w-[min(760px,100%)] drop-shadow-[0_34px_44px_rgba(0,0,0,0.28)] lg:translate-y-10 lg:drop-shadow-[0_48px_58px_rgba(0,0,0,0.38)] lg:scale-160"
              src="/images/hero-2.png"
              alt="Pace Heritage ice cream, cones, and dry mix products"
              width={1391}
              height={1131}
              priority
            />
          </div>

          <FadeIn
            className={`${container} mt-8 grid overflow-hidden rounded-2xl border border-white/15 bg-white/8 shadow-[0_22px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl md:grid-cols-2 lg:grid-cols-4`}
            delay={0.15}
          >
            {featureStrip.map((feature) => (
              <div
                key={feature}
                className="flex min-h-[92px] items-center gap-3.5 border-white/10 bg-[#021025]/40 px-6 py-4 text-white max-sm:min-h-[74px] lg:border-r last:border-r-0"
              >
                <span className={goldIcon} aria-hidden="true" />
                <strong className="text-sm leading-snug">{feature}</strong>
              </div>
            ))}
          </FadeIn>
        </section>

        <section
          className="bg-[linear-gradient(180deg,#fff_0%,#f4f7fb_100%)] py-20 md:py-24"
          id="products"
        >
          <div className={container}>
            <SectionHeader
              title="Our Product Range"
              description="Premium products for retail, foodservice, manufacturing, and private-label growth."
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product, index) => (
                <FadeIn
                  as="article"
                  className="group flex min-h-[430px] flex-col justify-between overflow-hidden rounded-lg border border-[#07182f]/10 bg-white/85 shadow-[0_18px_55px_rgba(7,24,47,0.08)] transition hover:-translate-y-1.5 hover:shadow-[0_26px_70px_rgba(7,24,47,0.15)]"
                  delay={index * 0.05}
                  key={product.name}
                >
                  <div className="grid min-h-[255px] place-items-center bg-linear-to-b from-[#eef4fb] to-white">
                    <Image
                      className="h-[255px] w-full object-contain p-4 transition duration-500 group-hover:scale-[1.035]"
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
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section
          className="grid min-h-[620px] bg-[radial-gradient(circle_at_74%_32%,rgba(17,166,232,0.22),transparent_26%),linear-gradient(125deg,#061832_0%,#021025_100%)] text-white lg:grid-cols-2"
          id="manufacturing"
        >
          <FadeIn className="relative min-h-[360px] overflow-hidden lg:min-h-[560px]">
            <Image
              className="h-full w-full object-cover"
              src="/images/manufacturing-excellence.png"
              alt="Modern ice cream manufacturing facility with hygienic production equipment"
              width={1409}
              height={1117}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/40 pointer-events-none" />
          </FadeIn>
          <FadeIn
            className="flex flex-col justify-center px-6 py-12 md:px-10 lg:px-[max(40px,calc((100vw-1180px)/2))] lg:py-18 lg:pl-16"
            delay={0.1}
          >
            <SectionHeader
              eyebrow="Manufacturing excellence"
              title="Built for Quality. Driven by Innovation."
              description="Our state-of-the-art manufacturing facility ensures the highest standards of quality, food safety, and consistency in every batch."
              light
            />
            <div className="mb-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {manufacturingFeatures.map((feature) => (
                <div className="grid justify-items-start gap-3" key={feature}>
                  <span className={goldIcon} aria-hidden="true" />
                  <p className="m-0 text-sm leading-snug text-white/85">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
            <Link className={primaryButton} href="#contact">
              Explore Our Manufacturing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </section>

        <section
          className="overflow-hidden bg-[radial-gradient(circle_at_74%_32%,rgba(17,166,232,0.22),transparent_26%),linear-gradient(125deg,#061832_0%,#021025_100%)] bg-[#001034] py-20 text-white md:py-24"
          id="distribution"
        >
          <div
            className={`${container} grid items-center gap-8 lg:grid-cols-[minmax(280px,0.7fr)_minmax(360px,1.3fr)]`}
          >
            <FadeIn className="relative z-10">
              <SectionHeader
                eyebrow="Distribution across Africa"
                title="Expanding Horizons. Delivering Excellence."
                description="Pace Heritage supplies premium ice cream to retailers across Nigeria and is expanding into other African markets."
                light
              />
              <Link className={ghostButton} href="#contact">
                Become a Distributor
                <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Image
                className="w-full"
                src="/images/distribution_africa_bg_removed.png"
                alt="Distribution map highlighting Nigeria and expansion across Africa"
                width={1724}
                height={912}
                sizes="(max-width: 900px) 100vw, 58vw"
              />
            </FadeIn>
          </div>
        </section>

        <section
          className="bg-white py-20 md:py-24"
          id="private-label"
        >
          <div
            className={`${container} grid items-center gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(420px,1fr)]`}
          >
            <FadeIn>
              <SectionHeader
                eyebrow="Private label manufacturing"
                title="Your Brand. Our Expertise. Endless Possibilities."
                description="We help brands bring their vision to life with custom formulations, premium ingredients, and world-class manufacturing."
              />
              <Link className={primaryButton} href="#contact">
                Start Your Private Label Journey
                <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>
            <FadeIn
              className="overflow-hidden"
              delay={0.1}
            >
              <Image
                className="h-auto w-full"
                src="/images/manufacturing-ingredients.png"
                alt="Manufacturing ingredients including soft ice cream premix and cones"
                width={1672}
                height={941}
                sizes="(max-width: 900px) 100vw, 46vw"
              />
            </FadeIn>
          </div>
        </section>

        <section className="bg-white pb-16">
          <FadeIn
            className={`${container} rounded-lg border border-[#07182f]/10 bg-white p-7 text-center shadow-[0_18px_50px_rgba(7,24,47,0.08)]`}
          >
            <p className="mb-3.5 text-xs font-black uppercase tracking-[0.08em] text-[#f3b23f]">
              Trusted by leading retailers
            </p>
            <div
              className="grid items-center gap-5 md:grid-cols-5"
              aria-label="Retailer partners"
            >
              {retailers.map((retailer, index) => {
                if (index === 0) {
                  return (
                    <Image
                      key={retailer}
                      src="/icons/spar-logo.png"
                      alt="SPAR Logo"
                      width={120}
                      height={32}
                      className="mx-auto h-8 w-auto object-contain transition duration-300 hover:scale-105"
                    />
                  );
                }
                if (index === 1) {
                  return (
                    <Image
                      key={retailer}
                      src="/icons/shoprite.png"
                      alt="Shoprite Logo"
                      width={120}
                      height={32}
                      className="mx-auto h-8 w-auto object-contain transition duration-300 hover:scale-105"
                    />
                  );
                }
                return (
                  <span
                    className={[
                      "text-[clamp(1.05rem,2.2vw,1.55rem)] font-black",
                      index === 2 ? "text-[#8a4a2e]" : "",
                      index === 3 ? "text-[#17406c]" : "",
                      index === 4 ? "text-[#18844d]" : "",
                    ].join(" ")}
                    key={retailer}
                  >
                    {retailer}
                  </span>
                );
              })}
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
      <Link
        className="fixed right-6 bottom-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#24d366] text-sm font-black text-white shadow-[0_16px_36px_rgba(36,211,102,0.32)] max-sm:right-4 max-sm:bottom-4 max-sm:h-13 max-sm:w-13"
        href="https://wa.me/2348031234567"
        aria-label="Chat on WhatsApp"
      >
        <Image
          src={"/icons/whatsapp.svg"}
          width={32}
          height={32}
          alt="whatsapp"
        />
      </Link>
    </>
  );
}
