"use client";

import Image from "next/image";
import { ProfitCalculator, useReveal } from "./ProductPageClient";
import Link from "next/link";

export default function DryMixProductPage() {
  useReveal();

  return (
    <div className="dry-mix-theme">
      {/* ===================== HERO ===================== */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow ph-reveal">Premium Ice Cream Dry Mix</p>
            <h1 className="ph-reveal reveal-delay-1">
              More Servings.
              <br />
              More Customers.
              <br />
              <span className="gold">More Profit.</span>
            </h1>
            <p className="ph-reveal reveal-delay-2">
              Our premium ice cream dry mix helps you create smooth, delicious
              ice cream that customers love and keeps your profits growing.
            </p>
            <div className="hero-ctas ph-reveal reveal-delay-3">
              <Link
                href="/contact"
                className="btn btn-primary"
              >
                Order Dry Mix
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link href="#" className="btn btn-ghost">
                Download Spec Sheet
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 4v12m0 0l-5-5m5 5l5-5M4 20h16" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="hero-visual ph-reveal reveal-delay-2">
            <div
              className="hero-stage"
              role="img"
              aria-label="Pace Heritage Comprital Dry Mix 1kg and 2kg packs"
            >
              <Image
                src="/images/comparital/Main_Page_1kg_2kg_.png"
                alt="Pace Heritage Comprital Dry Mix 1kg and 2kg packs"
                fill
                className="object-contain p-6 relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FEATURES ===================== */}
      <section className="features">
        <div className="container features-grid">
          <div className="feature ph-reveal">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24">
                <path d="M4 19V5" />
                <path d="M4 19h16" />
                <path d="M7 15l4-4 3 3 5-6" />
                <path d="M16 8h3v3" />
              </svg>
            </div>
            <div>
              <h3>High Margin</h3>
              <p>Maximize profit on every serving.</p>
            </div>
          </div>
          <div className="feature ph-reveal reveal-delay-1">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24">
                <path d="M4 13h16a8 8 0 0 1-16 0Z" />
                <path d="M15 13 19 4" />
                <path d="M17.5 5.5 21 7" />
              </svg>
            </div>
            <div>
              <h3>Easy To Prepare</h3>
              <p>Simple process with consistent results.</p>
            </div>
          </div>
          <div className="feature ph-reveal reveal-delay-2">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="9" r="5" />
                <path d="m9 13-2 8 5-3 5 3-2-8" />
              </svg>
            </div>
            <div>
              <h3>Premium Quality</h3>
              <p>Smooth, creamy &amp; delicious.</p>
            </div>
          </div>
          <div className="feature ph-reveal reveal-delay-3">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 7h11v9H3z" />
                <path d="M14 10h4l3 3v3h-7" />
                <circle cx="7" cy="18" r="1.8" />
                <circle cx="17" cy="18" r="1.8" />
              </svg>
            </div>
            <div>
              <h3>Reliable Supply</h3>
              <p>Nationwide delivery you can count on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CALCULATOR + STREAMS ===================== */}
      <section className="calc-section">
        <div className="container calc-grid">
          <div className="ph-reveal reveal-delay-1">
            <ProfitCalculator />
          </div>

          <div className="streams">
            <p className="eyebrow ph-reveal">
              One Product. Multiple Revenue Streams.
            </p>
            <div className="orbit ph-reveal reveal-delay-1">
              <div className="orbit-ring" aria-hidden="true" />
              <div className="orbit-center">
                <Image
                  src="/images/comparital/one product. multipl revenue.png"
                  alt="One Product, Multiple Revenue Streams"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="orbit-node top">
                <div className="node-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2q2 1.2 1.2 2.6Q15.6 4.6 15 6.6q2 .4 1 2.4 1.4.8.2 2.4H7.8q-1.2-1.6.2-2.4-1-2 1-2.4-.6-2 1.8-2Q10 3.2 12 2Z" />
                    <path d="m9 12 1.5 9h3L15 12" />
                  </svg>
                </div>
                <span>Soft Serve</span>
              </div>
              <div className="orbit-node right">
                <div className="node-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 19h16" />
                    <path d="M5 19v-6q0-2 2.5-2h9Q19 11 19 13v6" />
                    <path d="M8 11V9q0-1.5 2-1.5h4Q16 7.5 16 9v2" />
                    <circle cx="12" cy="4.5" r="1.3" />
                  </svg>
                </div>
                <span>Scooped Ice Cream</span>
              </div>
              <div className="orbit-node bottom">
                <div className="node-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M7 8h10l-1.4 13H8.4Z" />
                    <path d="M7 8l8-5" />
                    <path d="M6.2 12h11.6" />
                  </svg>
                </div>
                <span>Milkshakes</span>
              </div>
              <div className="orbit-node left">
                <div className="node-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 20h16" />
                    <path d="M5 20l1.5-9h11L19 20" />
                    <path d="M7 14.5h10" />
                    <path d="M9 11V8.5q3-2 6 0V11" />
                  </svg>
                </div>
                <span>Desserts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STEPS ===================== */}
      <section className="steps-section">
        <div className="container">
          <p className="eyebrow ph-reveal">Simple Steps. Premium Results.</p>
          <div className="steps-grid">
            <div className="step ph-reveal">
              <span className="ghost" aria-hidden="true">
                01
              </span>
              <div className="step-medal">
                <svg viewBox="0 0 24 24">
                  <path d="M9 3q1.5 2 0 3.5M12.5 3q1.5 2 0 3.5" />
                  <path d="M4 13h16a8 8 0 0 1-16 0Z" />
                  <path d="M4 13q4-2.5 8 0 4 2.5 8 0" />
                </svg>
              </div>
              <h3>Mix</h3>
              <p>Add the required amount of powder to water or milk.</p>
            </div>
            <div className="step-arrow" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12h16M14 6l6 6-6 6" />
              </svg>
            </div>
            <div className="step ph-reveal reveal-delay-1">
              <span className="ghost" aria-hidden="true">
                02
              </span>
              <div className="step-medal">
                <svg viewBox="0 0 24 24">
                  <path d="M19 3 9 13" />
                  <path d="M9 13q-2.5 0-2.5 2.5T9 18t2.5-2.5T9 13Z" />
                  <path d="M4 18h16a7 7 0 0 1-14 3" />
                </svg>
              </div>
              <h3>Blend</h3>
              <p>
                Mix for 3–5 minutes until the mixture is smooth and lump-free.
              </p>
            </div>
            <div className="step-arrow" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12h16M14 6l6 6-6 6" />
              </svg>
            </div>
            <div className="step ph-reveal reveal-delay-2">
              <span className="ghost" aria-hidden="true">
                03
              </span>
              <div className="step-medal">
                <svg viewBox="0 0 24 24">
                  <path d="M5 3h14v5H5Z" />
                  <path d="M9 8v2.5q3-1.5 6 0V8" />
                  <path d="M12 12q1.6 1 .8 2.4 1.6.4 1 2-1 .8-1.8.6V21" />
                  <path d="M12 12q-1.6 1-.8 2.4-1.6.4-1 2 1 .8 1.8.6" />
                </svg>
              </div>
              <h3>Freeze</h3>
              <p>
                Pour the mixture into your ice cream machine and start freezing.
              </p>
            </div>
            <div className="step-arrow" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12h16M14 6l6 6-6 6" />
              </svg>
            </div>
            <div className="step ph-reveal reveal-delay-3">
              <span className="ghost" aria-hidden="true">
                04
              </span>
              <div className="step-medal">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2q2 1.2 1.2 2.6 2.4 0 1.8 2 2 .4 1 2.4H8q-1-2 1-2.4-.6-2 1.8-2Q10 3.2 12 2Z" />
                  <path d="m9 12 1.5 10h3L15 12" />
                  <path d="M9.6 16h4.8" />
                </svg>
              </div>
              <h3>Serve</h3>
              <p>
                Serve and enjoy creamy, delicious ice cream that sells every
                time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== VARIANTS ===================== */}
      <section className="variants-section">
        <div className="container">
          <p className="eyebrow ph-reveal">Our Dry Mix Variants</p>
          <div className="variants-grid">
            <article className="variant ph-reveal">
              <Image
                className="scoop-art object-contain"
                src="/images/comparital/Our Dry Mix Variants _van.png"
                alt="Vanilla variant"
                width={96}
                height={108}
              />
              <div>
                <h3>Vanilla</h3>
                <p className="badge">Most Popular</p>
                <ul>
                  <li>
                    <svg viewBox="0 0 24 24">
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                    High Margin
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24">
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                    Great for all business types
                  </li>
                </ul>
              </div>
            </article>

            <article className="variant ph-reveal reveal-delay-1">
              <Image
                className="scoop-art object-contain"
                src="/images/comparital/Our Dry Mix Variants_choc.png"
                alt="Chocolate variant"
                width={96}
                height={108}
              />
              <div>
                <h3>Chocolate</h3>
                <p className="badge">Rich &amp; Creamy</p>
                <ul>
                  <li>
                    <svg viewBox="0 0 24 24">
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                    High Margin
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24">
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                    Perfect for cafés, restaurants &amp; kiosks
                  </li>
                </ul>
              </div>
            </article>

            <article className="variant ph-reveal reveal-delay-2">
              <Image
                className="scoop-art object-contain"
                src="/images/comparital/Our Dry Mix Variants_str.png"
                alt="Strawberry variant"
                width={96}
                height={108}
              />
              <div>
                <h3>Strawberry</h3>
                <p className="badge">Customer Favorite</p>
                <ul>
                  <li>
                    <svg viewBox="0 0 24 24">
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                    High Margin
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24">
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                    Great for all business types
                  </li>
                </ul>
              </div>
            </article>
          </div>
          <div className="variants-cta ph-reveal">
            <Link href="#" className="btn btn-ghost">
              View All Specifications
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="cta-section" id="contact">
        <div className="container cta-grid">
          <div>
            <h2 className="ph-reveal">
              Ready To Grow Your
              <br />
              <span className="gold">Ice Cream Business?</span>
            </h2>
            <p className="ph-reveal reveal-delay-1">
              Join thousands of retailers and entrepreneurs making more profit
              with Pace Heritage Dry Mix.
            </p>
            <div className="hero-ctas ph-reveal reveal-delay-2">
              <Link
                href="/contact"
                className="btn btn-gold"
              >
                Request Wholesale Pricing
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link href="tel:+2347065934811" className="btn btn-ghost">
                Speak With Our Team
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="cta-art ph-reveal reveal-delay-1">
            <Image
              src={"/images/comparital/UncH.png"}
              width={400}
              height={400}
              alt="image of ice cream"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
