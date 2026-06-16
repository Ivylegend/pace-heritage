"use client";

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
              More Servings.<br />More Customers.<br /><span className="gold">More Profit.</span>
            </h1>
            <p className="ph-reveal reveal-delay-2">
              Our premium ice cream dry mix helps you create smooth, delicious ice cream that customers love and keeps your profits growing.
            </p>
            <div className="hero-ctas ph-reveal reveal-delay-3">
              <Link href="mailto:info@paceheritage.com" className="btn btn-gold">
                Request Wholesale Pricing
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link href="#" className="btn btn-ghost">
                Download Spec Sheet
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4v12m0 0l-5-5m5 5l5-5M4 20h16" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="hero-visual ph-reveal reveal-delay-2">
            <div className="hero-stage" role="img" aria-label="Pace Heritage 20kg premium ice cream dry mix bag with soft serve cone and ice cream scoops">
              {/* product bag */}
              <div className="bag-wrap">
                <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="bagBody" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#ffffff" />
                      <stop offset=".55" stopColor="#f4f4f6" />
                      <stop offset="1" stopColor="#e3e4e9" />
                    </linearGradient>
                    <linearGradient id="swooshBlue" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="#2a7fc1" />
                      <stop offset="1" stopColor="#1b5fa0" />
                    </linearGradient>
                    <linearGradient id="swooshPink" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="#c2358f" />
                      <stop offset="1" stopColor="#9c2374" />
                    </linearGradient>
                  </defs>
                  {/* crimped top */}
                  <path d="M48 38 L252 38 L246 64 L54 64 Z" fill="#d9dade" />
                  <path d="M48 38 L252 38 L250 48 L50 48 Z" fill="#c6c8ce" />
                  {/* bag body */}
                  <path d="M54 64 L246 64 Q258 200 250 356 Q252 374 232 376 L68 376 Q48 374 50 356 Q42 200 54 64 Z" fill="url(#bagBody)" />
                  <path d="M54 64 L246 64 Q258 200 250 356 Q252 374 232 376 L68 376 Q48 374 50 356 Q42 200 54 64 Z" fill="none" stroke="#cfd1d7" strokeWidth="1.5" />
                  {/* branding */}
                  <text x="150" y="118" textAnchor="middle" fontFamily="'Playfair Display',serif" fontSize="26" fontWeight="600" letterSpacing="4" fill="#1d2d52">PACE</text>
                  <text x="150" y="150" textAnchor="middle" fontFamily="'Playfair Display',serif" fontSize="26" fontWeight="600" letterSpacing="3" fill="#1d2d52">HERITAGE</text>
                  <text x="150" y="186" textAnchor="middle" fontFamily="var(--font-jost),sans-serif" fontSize="16.5" fill="#23355e">Premium Ice Cream</text>
                  <text x="150" y="208" textAnchor="middle" fontFamily="var(--font-jost),sans-serif" fontSize="16.5" fill="#23355e">Dry Mix</text>
                  {/* swoosh */}
                  <path d="M84 268 Q150 226 224 252 Q160 250 112 282 Q96 290 84 268 Z" fill="url(#swooshBlue)" />
                  <path d="M96 296 Q166 252 228 278 Q168 278 124 308 Q106 316 96 296 Z" fill="url(#swooshPink)" />
                  {/* weight */}
                  <text x="222" y="348" textAnchor="middle" fontFamily="var(--font-jost),sans-serif" fontSize="19" fontWeight="600" fill="#1d2d52">20kg</text>
                  <text x="222" y="364" textAnchor="middle" fontFamily="var(--font-jost),sans-serif" fontSize="9" letterSpacing="1.5" fill="#5a6885">NET WEIGHT</text>
                </svg>
              </div>
              {/* soft serve cone */}
              <div className="cone-wrap">
                <svg viewBox="0 0 120 260" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="coneG" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#d99a4e" />
                      <stop offset="1" stopColor="#a96a2c" />
                    </linearGradient>
                    <linearGradient id="creamG" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#fdf6e6" />
                      <stop offset="1" stopColor="#e9d9b8" />
                    </linearGradient>
                  </defs>
                  <path d="M60 252 L24 130 L96 130 Z" fill="url(#coneG)" />
                  <path d="M30 142 L92 142 M36 160 L88 160 M42 178 L82 178 M48 196 L76 196 M54 214 L70 214" stroke="#8a5523" strokeWidth="2" opacity=".55" />
                  <ellipse cx="60" cy="128" rx="40" ry="13" fill="#c98f45" />
                  <path d="M60 8 Q78 18 70 32 Q92 32 86 52 Q104 56 94 76 Q108 84 96 102 Q106 116 88 124 L32 124 Q14 116 26 102 Q12 84 28 76 Q18 56 36 52 Q30 32 52 32 Q44 16 60 8 Z" fill="url(#creamG)" />
                  <path d="M40 118 Q60 108 82 118 M34 98 Q60 88 88 98 M40 76 Q60 68 82 76 M48 54 Q62 48 74 54" stroke="#d4c096" strokeWidth="2.5" fill="none" opacity=".8" />
                </svg>
              </div>
              {/* bowl of scoops */}
              <div className="scoops-wrap">
                <svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="sV" cx=".35" cy=".3" r="1">
                      <stop offset="0" stopColor="#fbf3dd" />
                      <stop offset="1" stopColor="#d9c79c" />
                    </radialGradient>
                    <radialGradient id="sP" cx=".35" cy=".3" r="1">
                      <stop offset="0" stopColor="#f6a8c0" />
                      <stop offset="1" stopColor="#d76b92" />
                    </radialGradient>
                    <radialGradient id="sC" cx=".35" cy=".3" r="1">
                      <stop offset="0" stopColor="#84563a" />
                      <stop offset="1" stopColor="#4e2f1b" />
                    </radialGradient>
                  </defs>
                  <circle cx="70" cy="58" r="34" fill="url(#sP)" />
                  <circle cx="146" cy="56" r="36" fill="url(#sC)" />
                  <circle cx="108" cy="78" r="34" fill="url(#sV)" />
                  <path d="M28 92 L192 92 Q188 134 152 140 L68 140 Q32 134 28 92 Z" fill="#10182b" />
                  <path d="M28 92 L192 92 Q188 134 152 140 L68 140 Q32 134 28 92 Z" fill="none" stroke="#26334e" strokeWidth="2" />
                </svg>
              </div>
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
            <p className="eyebrow ph-reveal">One Product. Multiple Revenue Streams.</p>
            <div className="orbit ph-reveal reveal-delay-1">
              <div className="orbit-ring" aria-hidden="true" />
              <div className="orbit-center">
                <svg viewBox="0 0 150 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pace Heritage dry mix bag">
                  <path d="M26 20 L124 20 L121 33 L29 33 Z" fill="#d9dade" />
                  <path d="M29 33 L121 33 Q127 100 123 176 Q124 187 113 188 L37 188 Q26 187 27 176 Q23 100 29 33 Z" fill="#f2f2f4" stroke="#cfd1d7" />
                  <text x="75" y="62" textAnchor="middle" fontFamily="'Playfair Display',serif" fontSize="13" fontWeight="600" letterSpacing="1.5" fill="#1d2d52">PACE</text>
                  <text x="75" y="78" textAnchor="middle" fontFamily="'Playfair Display',serif" fontSize="13" fontWeight="600" letterSpacing="1" fill="#1d2d52">HERITAGE</text>
                  <text x="75" y="98" textAnchor="middle" fontFamily="var(--font-jost),sans-serif" fontSize="9" fill="#23355e">Premium Ice Cream</text>
                  <text x="75" y="110" textAnchor="middle" fontFamily="var(--font-jost),sans-serif" fontSize="9" fill="#23355e">Dry Mix</text>
                  <path d="M44 138 Q75 118 110 130 Q78 130 56 145 Q48 149 44 138 Z" fill="#2a7fc1" />
                  <path d="M50 152 Q82 132 112 144 Q84 144 62 158 Q54 162 50 152 Z" fill="#c2358f" />
                  <text x="75" y="178" textAnchor="middle" fontFamily="var(--font-jost),sans-serif" fontSize="10" fontWeight="600" fill="#1d2d52">20kg</text>
                </svg>
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
              <span className="ghost" aria-hidden="true">01</span>
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12h16M14 6l6 6-6 6" />
              </svg>
            </div>
            <div className="step ph-reveal reveal-delay-1">
              <span className="ghost" aria-hidden="true">02</span>
              <div className="step-medal">
                <svg viewBox="0 0 24 24">
                  <path d="M19 3 9 13" />
                  <path d="M9 13q-2.5 0-2.5 2.5T9 18t2.5-2.5T9 13Z" />
                  <path d="M4 18h16a7 7 0 0 1-14 3" />
                </svg>
              </div>
              <h3>Blend</h3>
              <p>Mix for 3–5 minutes until the mixture is smooth and lump-free.</p>
            </div>
            <div className="step-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12h16M14 6l6 6-6 6" />
              </svg>
            </div>
            <div className="step ph-reveal reveal-delay-2">
              <span className="ghost" aria-hidden="true">03</span>
              <div className="step-medal">
                <svg viewBox="0 0 24 24">
                  <path d="M5 3h14v5H5Z" />
                  <path d="M9 8v2.5q3-1.5 6 0V8" />
                  <path d="M12 12q1.6 1 .8 2.4 1.6.4 1 2-1 .8-1.8.6V21" />
                  <path d="M12 12q-1.6 1-.8 2.4-1.6.4-1 2 1 .8 1.8.6" />
                </svg>
              </div>
              <h3>Freeze</h3>
              <p>Pour the mixture into your ice cream machine and start freezing.</p>
            </div>
            <div className="step-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12h16M14 6l6 6-6 6" />
              </svg>
            </div>
            <div className="step ph-reveal reveal-delay-3">
              <span className="ghost" aria-hidden="true">04</span>
              <div className="step-medal">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2q2 1.2 1.2 2.6 2.4 0 1.8 2 2 .4 1 2.4H8q-1-2 1-2.4-.6-2 1.8-2Q10 3.2 12 2Z" />
                  <path d="m9 12 1.5 10h3L15 12" />
                  <path d="M9.6 16h4.8" />
                </svg>
              </div>
              <h3>Serve</h3>
              <p>Serve and enjoy creamy, delicious ice cream that sells every time.</p>
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
              <svg className="scoop-art" viewBox="0 0 96 108" aria-hidden="true">
                <radialGradient id="vSc" cx=".35" cy=".3" r="1">
                  <stop offset="0" stopColor="#fdf6e2" />
                  <stop offset="1" stopColor="#d8c391" />
                </radialGradient>
                <circle cx="48" cy="44" r="34" fill="url(#vSc)" />
                <path d="M30 36q8-8 18-6M26 50q4 6 12 7" stroke="#c9b27c" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity=".7" />
                <ellipse cx="48" cy="88" rx="34" ry="10" fill="#0f1a30" />
                <path d="M40 78q8-6 16 0l-4 8h-8Z" fill="#e9dfc2" />
                <circle cx="48" cy="74" r="3" fill="#e0a64c" />
              </svg>
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
              <svg className="scoop-art" viewBox="0 0 96 108" aria-hidden="true">
                <radialGradient id="cSc" cx=".35" cy=".3" r="1">
                  <stop offset="0" stopColor="#8a5a3a" />
                  <stop offset="1" stopColor="#46281a" />
                </radialGradient>
                <circle cx="48" cy="44" r="34" fill="url(#cSc)" />
                <path d="M30 36q8-8 18-6M26 50q4 6 12 7" stroke="#5d3a24" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity=".8" />
                <ellipse cx="48" cy="88" rx="34" ry="10" fill="#0f1a30" />
                <rect x="36" y="72" width="12" height="9" rx="2" fill="#5b3520" transform="rotate(-12 42 76)" />
                <rect x="50" y="74" width="12" height="9" rx="2" fill="#3e2212" transform="rotate(10 56 78)" />
              </svg>
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
              <svg className="scoop-art" viewBox="0 0 96 108" aria-hidden="true">
                <radialGradient id="pSc" cx=".35" cy=".3" r="1">
                  <stop offset="0" stopColor="#f8b3c8" />
                  <stop offset="1" stopColor="#d56a90" />
                </radialGradient>
                <circle cx="48" cy="44" r="34" fill="url(#pSc)" />
                <path d="M30 36q8-8 18-6M26 50q4 6 12 7" stroke="#c25e83" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity=".7" />
                <ellipse cx="48" cy="88" rx="34" ry="10" fill="#0f1a30" />
                <path d="M56 72q8 1 8 9t-8 8-9-7q1-8 9-10Z" fill="#d3405f" />
                <path d="M56 72q-2 8 0 17" stroke="#a92d47" strokeWidth="1.5" fill="none" />
                <path d="M55 70q2-4 6-3-1 4-6 3Z" fill="#3f7d3f" />
              </svg>
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            <h2 className="ph-reveal">Ready To Grow Your<br /><span className="gold">Ice Cream Business?</span></h2>
            <p className="ph-reveal reveal-delay-1">Join thousands of retailers and entrepreneurs making more profit with Pace Heritage Dry Mix.</p>
            <div className="hero-ctas ph-reveal reveal-delay-2">
              <Link href="mailto:info@paceheritage.com" className="btn btn-gold">
                Request Wholesale Pricing
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link href="tel:+2348031234567" className="btn btn-ghost">
                Speak With Our Team
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="cta-art ph-reveal reveal-delay-1">
            <svg viewBox="0 0 360 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Waffle bowl with three scoops of ice cream">
              <defs>
                <radialGradient id="fV" cx=".35" cy=".3" r="1">
                  <stop offset="0" stopColor="#fdf6e2" />
                  <stop offset="1" stopColor="#d8c391" />
                </radialGradient>
                <radialGradient id="fP" cx=".35" cy=".3" r="1">
                  <stop offset="0" stopColor="#f8b3c8" />
                  <stop offset="1" stopColor="#d56a90" />
                </radialGradient>
                <radialGradient id="fC" cx=".35" cy=".3" r="1">
                  <stop offset="0" stopColor="#8a5a3a" />
                  <stop offset="1" stopColor="#46281a" />
                </radialGradient>
                <linearGradient id="fW" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#d99a4e" />
                  <stop offset="1" stopColor="#a3672c" />
                </linearGradient>
              </defs>
              {/* splash drops */}
              <circle cx="46" cy="120" r="5" fill="#e9eef7" opacity=".6" />
              <circle cx="318" cy="96" r="4" fill="#e9eef7" opacity=".5" />
              <circle cx="300" cy="208" r="6" fill="#e9eef7" opacity=".45" />
              <circle cx="62" cy="210" r="4" fill="#e9eef7" opacity=".4" />
              {/* scoops */}
              <circle cx="118" cy="116" r="56" fill="url(#fC)" />
              <circle cx="240" cy="110" r="58" fill="url(#fV)" />
              <circle cx="180" cy="150" r="56" fill="url(#fP)" />
              <path d="M88 100q14-14 32-10M212 92q16-14 36-8M152 136q12-12 28-10" stroke="rgba(255,255,255,.35)" strokeWidth="4" fill="none" strokeLinecap="round" />
              {/* waffle bowl */}
              <path d="M74 178 L286 178 Q278 262 218 274 L142 274 Q82 262 74 178 Z" fill="url(#fW)" />
              <path d="M86 196 L274 196 M98 222 L262 222 M116 248 L244 248" stroke="#7e4d20" strokeWidth="3" opacity=".6" />
              <path d="M110 178 L132 274 M156 178 L168 274 M204 178 L194 274 M250 178 L228 274" stroke="#7e4d20" strokeWidth="3" opacity=".6" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
