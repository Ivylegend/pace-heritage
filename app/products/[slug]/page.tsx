import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { products, getProductBySlug } from "@/lib/products";
import type { Metadata } from "next";
import DryMixProductPage from "@/components/DryMixProductPage";
import ConesProductPage from "@/components/ConesProductPage";

/* ── Static params ───────────────────────────────────────────── */
export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

/* ── Metadata ────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.brand} ${product.name}`,
    description: product.description,
    openGraph: {
      images: [{ url: product.heroImage, width: 1200, height: 630 }],
    },
  };
}

/* ── Page ─────────────────────────────────────────────────────── */
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  /* sibling products (exclude current) */
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  if (slug === "comprital-soft-ice-cream-premix") {
    return (
      <>
        <Navbar />
        <main>
          <DryMixProductPage />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "pace-ice-cream-cones") {
    return (
      <>
        <Navbar />
        <main>
          <ConesProductPage />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-[#f8fafc] min-h-screen">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_66%_35%,rgba(17,166,232,0.24),transparent_34%),linear-gradient(125deg,#05142b_0%,#071a34_48%,#020d20_100%)] pt-32 pb-20 text-white md:pt-40 md:pb-24">
          {/* subtle grid */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[72px_72px]" />

          <div className="mx-auto w-[min(1180px,calc(100%-40px))] grid items-center gap-12 lg:grid-cols-2">
            {/* Text side */}
            <div className="order-1 lg:order-1">
              {/* breadcrumb */}
              <Link
                href="/#products"
                className="mb-6 inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-white/90"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Products
              </Link>

              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#f3b23f]">
                {product.category}
              </p>
              <h1 className="font-serif text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.02] font-bold">
                {product.brand}{" "}
                <span className="block text-[#f3b23f]">{product.name}</span>
              </h1>
              <p className="mt-2 text-lg font-medium italic text-white/60 font-serif">
                {product.tagline}
              </p>
              <p className="mt-5 max-w-[520px] text-[1.02rem] leading-8 text-white/80">
                {product.description}
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-[10px] bg-linear-to-br from-[#c8791c] to-[#f3b23f] px-7 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(217,149,36,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(217,149,36,0.42)]"
              >
                Request Wholesale Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Image side */}
            <div className="order-2 flex items-center justify-center lg:order-2">
              <div className="relative flex h-[340px] w-full max-w-[440px] items-center justify-center lg:h-[440px]">
                {/* glow behind image */}
                <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_60%,rgba(243,178,63,0.18),transparent_65%)]" />
                <Image
                  src={product.heroImage}
                  alt={`${product.brand} ${product.name}`}
                  width={800}
                  height={800}
                  className={`relative z-10 w-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.4)] ${
                    product.slug === "paceheritage-ice-cream"
                      ? "max-h-[85%]"
                      : "max-h-full"
                  }`}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Details + Features ────────────────────────────────── */}
        <section className="py-18 md:py-24">
          <div className="mx-auto w-[min(1180px,calc(100%-40px))] grid gap-10 lg:grid-cols-[1fr_420px]">
            {/* Features */}
            <div>
              <h2 className="mb-7 font-serif text-2xl font-bold text-[#021025] md:text-3xl">
                Key Features
              </h2>
              <ul className="space-y-4">
                {product.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#c8791c]" />
                    <span className="text-[1.02rem] leading-snug text-[#344054]">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs card */}
            <div className="rounded-2xl border border-[#e4eaf2] bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
              <h2 className="mb-5 font-serif text-xl font-bold text-[#021025]">
                Product Details
              </h2>
              <dl className="divide-y divide-[#f0f4f8]">
                {product.details.map(({ label, value }) => (
                  <div key={label} className="flex justify-between py-3.5">
                    <dt className="text-sm font-medium text-[#667085]">
                      {label}
                    </dt>
                    <dd className="text-sm font-semibold text-[#021025]">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              <Link
                href="/contact"
                className="mt-6 flex min-h-11 items-center justify-center gap-2 rounded-[10px] border border-[#c8791c]/40 bg-[#c8791c]/6 px-5 text-sm font-semibold text-[#c8791c] transition hover:bg-[#c8791c]/12 hover:border-[#c8791c]/70"
              >
                Enquire about this product
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Related Products ─────────────────────────────────── */}
        <section className="border-t border-[#e8eef5] bg-white py-18 md:py-24">
          <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
            <h2 className="mb-10 font-serif text-2xl font-bold text-[#021025] md:text-3xl">
              Other Products
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#e4eaf2] bg-[#f8fafc] shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)]"
                >
                  <div className="flex h-[180px] items-center justify-center bg-linear-to-b from-[#eef3fa] to-[#f8fafc] p-6">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={300}
                      height={300}
                      className="max-h-[140px] w-auto object-contain transition duration-300 group-hover:scale-105 drop-shadow-md"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#c8791c]">
                        {p.brand}
                      </p>
                      <h3 className="mt-1 font-semibold text-[#021025] leading-snug">
                        {p.name}
                      </h3>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#c8791c] transition group-hover:gap-2.5">
                      View product <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
