"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/lib/products";

const ease = [0.19, 1, 0.22, 1] as const;

/* Map product slugs into the two display sections */
const productSections = [
  {
    title: "Retail Ice Cream",
    darkHeader: true,
    slugs: [
      "venezia-italian-gelato",
      "paceheritage-ice-cream",
      "venezia-gourmet-ice-cream",
    ],
  },
  {
    title: "Manufacturing Ingredients",
    darkHeader: false,
    slugs: ["comprital-soft-ice-cream-premix", "pace-ice-cream-cones"],
  },
];

export default function ProductCardsSection() {
  return (
    <section className="w-full py-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        {productSections.map((section, sectionIdx) => {
          const sectionProducts = section.slugs
            .map((slug) => products.find((p) => p.slug === slug))
            .filter(Boolean) as typeof products;

          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: sectionIdx * 0.15, ease }}
              className={`overflow-hidden rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] ${
                section.darkHeader
                  ? "bg-[linear-gradient(to_bottom,#021025_0%,#021025_18%,white_28%,white_100%)] sm:bg-[linear-gradient(to_bottom,#021025_0%,#021025_55%,white_75%,white_100%)]"
                  : "bg-white border border-gray-100"
              }`}
            >
              <div className="px-6 pt-8 pb-2 text-center">
                <h2
                  className={`text-xl font-serif md:text-[1.4rem] font-medium tracking-wide ${
                    section.darkHeader ? "text-white" : "text-[#021025]"
                  }`}
                >
                  {section.title}
                </h2>
              </div>

              <div
                className={`grid gap-8 px-6 pb-10 pt-2 ${
                  sectionProducts.length === 3
                    ? "grid-cols-1 max-sm:gap-12 sm:grid-cols-3"
                    : "grid-cols-1 sm:grid-cols-2 gap-x-12 px-12 max-sm:gap-12"
                }`}
              >
                {sectionProducts.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="group block"
                  >
                    <motion.div
                      whileHover={{
                        y: -8,
                        transition: { duration: 0.3, ease },
                      }}
                      className="flex flex-col text-center"
                    >
                      <div
                        className={`mb-6 flex items-end justify-center ${
                          section.darkHeader ? "h-[180px]" : "h-[200px]"
                        }`}
                      >
                        <Image
                          width={500}
                          height={500}
                          src={product.image}
                          alt={product.name}
                          style={{ width: "auto", height: "auto" }}
                          className={`w-auto object-cover drop-shadow-xl transition-all duration-300 ${
                            section.darkHeader
                              ? product.slug === "paceheritage-ice-cream"
                                ? "max-h-[100px] scale-125 sm:scale-[1.4]"
                                : product.slug === "venezia-gourmet-ice-cream"
                                  ? "max-h-[100px] scale-125 sm:scale-[1.0]"
                                  : "max-h-[160px] scale-125 sm:scale-[1.5]"
                              : "max-h-[190px]"
                          }`}
                        />
                      </div>

                      <div className="mt-auto">
                        <h3 className="text-[15px] font-bold text-[#021025] uppercase tracking-wide">
                          {product.brand}
                        </h3>
                        <p className="mt-1.5 text-[14px] leading-snug text-[#021025]/80">
                          {product.name}
                        </p>
                        <span className="mt-3 inline-block text-xs font-semibold text-[#c8791c] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                          View product →
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
