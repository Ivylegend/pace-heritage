"use client";

import Image from "next/image";
import { CartonFlow, useReveal } from "./ProductPageClient";
import Link from "next/link";

export default function ConesProductPage() {
  useReveal();

  return (
    <div className="cones-theme">
      {/* ===================== HERO ===================== */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="hero-badge ph-reveal">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2q2 1.2 1.2 2.6 2.4 0 1.8 2 2 .4 1 2.4H8q-1-2 1-2.4-.6-2 1.8-2Q10 3.2 12 2Z" />
                  <path d="m9.5 9 1.5 12h2L14.5 9" />
                </svg>
                Premium Waffle Cones
              </span>
              <h1 className="ph-reveal reveal-delay-1">
                Every Scoop<br />Starts With<br />A <span className="gold">Cone.</span>
              </h1>
              <p className="lead ph-reveal reveal-delay-2">
                Crisp, delicious and perfectly crafted cones that elevate every ice cream experience.
              </p>
              <div className="hero-ctas ph-reveal reveal-delay-2">
                <Link href="mailto:info@paceheritage.com" className="btn btn-gold">
                  Request Wholesale Pricing
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
                <Link href="#" className="btn btn-outline">
                  Download Spec Sheet
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4v12m0 0l-5-5m5 5l5-5M4 20h16" />
                  </svg>
                </Link>
              </div>
              <div className="hero-mini ph-reveal reveal-delay-3">
                <div className="mini">
                  <div className="mini-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 3q1.8 1 1 2.3 2 0 1.5 1.7 1.7.4.8 2H8.7q-.9-1.6.8-2-.5-1.7 1.5-1.7-.8-1.3 1-2.3Z" />
                      <path d="m9.8 9 1.4 11h1.6L14.2 9" />
                    </svg>
                  </div>
                  <span>Crisp &amp;<br />Delicious</span>
                </div>
                <div className="mini">
                  <div className="mini-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 3 5 6v5q0 6 7 9 7-3 7-9V6Z" />
                      <path d="m9 11.5 2 2 4-4.5" />
                    </svg>
                  </div>
                  <span>Consistent<br />Quality</span>
                </div>
                <div className="mini">
                  <div className="mini-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M4 8 12 4l8 4v8l-8 4-8-4Z" />
                      <path d="M4 8l8 4 8-4M12 12v8" />
                    </svg>
                  </div>
                  <span>Hygienically<br />Packed</span>
                </div>
              </div>
            </div>

            <div className="hero-visual ph-reveal reveal-delay-1" role="img" aria-label="Strawberry and vanilla soft serve swirl in a Pace Heritage waffle cone cup, 320 pieces per carton">
              <div className="pcs-badge">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2q2 1.2 1.2 2.6 2.4 0 1.8 2 2 .4 1 2.4H8q-1-2 1-2.4-.6-2 1.8-2Q10 3.2 12 2Z" />
                  <path d="m9.5 9 1.5 12h2L14.5 9" />
                </svg>
                <span className="big">320</span>
                <small>PCS<br />Per Carton</small>
              </div>
              <Image
                src="/images/pace_cones_page/Everyscoop (2).png"
                alt="Strawberry and vanilla soft serve swirl in a Pace Heritage waffle cone cup"
                width={700}
                height={700}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CARTON (DARK) ===================== */}
      <section className="dark carton-section">
        <div className="container carton-grid">
          <div className="ph-reveal">
            <p className="eyebrow">More Cones. More Sales.</p>
            <h2>One Carton.<br /><span className="gold">Huge Opportunity.</span></h2>
            <div className="ph-reveal reveal-delay-1 mt-6">
              <CartonFlow />
            </div>
            <p className="flow-note ph-reveal reveal-delay-2 mt-4">*Revenue depends on your selling price and location.</p>
          </div>

          <div className="carton-art ph-reveal reveal-delay-1">
            <Image
              src="/images/pace_cones_page/onecarton.png"
              alt="Open Pace Cones carton holding 320 waffle cones"
              width={800}
              height={600}
              style={{ width: "min(420px, 100%)", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* ===================== QUALITY ===================== */}
      <section className="quality-section">
        <div className="container quality-grid">
          <div>
            <p className="eyebrow ph-reveal">Why Retailers Choose Us</p>
            <h2 className="ph-reveal">Built For Quality.<br />Made For Business.</h2>
            <div className="qfeatures">
              <div className="qfeature ph-reveal">
                <div className="qfeature-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 3q1.8 1 1 2.3 2 0 1.5 1.7 1.7.4.8 2H8.7q-.9-1.6.8-2-.5-1.7 1.5-1.7-.8-1.3 1-2.3Z" />
                    <path d="m9.8 9 1.4 11h1.6L14.2 9" />
                  </svg>
                </div>
                <div>
                  <h3>Crisp &amp; Delicious</h3>
                  <p>Perfect crunch in every bite.</p>
                </div>
              </div>
              <div className="qfeature ph-reveal reveal-delay-1">
                <div className="qfeature-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 3 5 6v5q0 6 7 9 7-3 7-9V6Z" />
                    <path d="m9 11.5 2 2 4-4.5" />
                  </svg>
                </div>
                <div>
                  <h3>Consistent Quality</h3>
                  <p>Uniform shape, size and golden bake.</p>
                </div>
              </div>
              <div className="qfeature ph-reveal reveal-delay-1">
                <div className="qfeature-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 3 5 6v5q0 6 7 9 7-3 7-9V6Z" />
                    <path d="M12 8v5M12 15.5v.5" />
                  </svg>
                </div>
                <div>
                  <h3>Strong &amp; Reliable</h3>
                  <p>Designed to hold every scoop with confidence.</p>
                </div>
              </div>
              <div className="qfeature ph-reveal reveal-delay-2">
                <div className="qfeature-icon">
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
          </div>

          <div className="quality-art ph-reveal reveal-delay-1">
            <Image
              src="/images/pace_cones_page/BuiltwQuality.png"
              alt="Golden waffle cone — built for quality"
              width={800}
              height={600}
              style={{ width: "min(460px, 100%)", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* ===================== OCCASIONS ===================== */}
      <section className="occasions-section">
        <div className="container occasions-grid">
          <div className="occasions-art ph-reveal">
            <Image
              src="/images/pace_cones_page/PerfectFor.png"
              alt="Pace Cones — perfect for every occasion"
              width={800}
              height={600}
              style={{ width: "min(440px, 100%)", height: "auto" }}
            />
          </div>

          <div>
            <p className="eyebrow ph-reveal">Made For Every Business</p>
            <h2 className="ph-reveal">Perfect For<br />Every Occasion</h2>
            <div className="occasion-row ph-reveal reveal-delay-1">
              <div className="occasion">
                <div className="occasion-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 3q1.8 1 1 2.3 2 0 1.5 1.7 1.7.4.8 2H8.7q-.9-1.6.8-2-.5-1.7 1.5-1.7-.8-1.3 1-2.3Z" />
                    <path d="m9.8 9 1.4 11h1.6L14.2 9" />
                  </svg>
                </div>
                <span>Ice Cream<br />Parlors</span>
              </div>
              <div className="occasion">
                <div className="occasion-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M5 9h11v6q0 4-4 4H9q-4 0-4-4Z" />
                    <path d="M16 10h2q2 0 2 2t-2 2h-2" />
                    <path d="M8 6q-1-1.5 0-3M11.5 6q-1-1.5 0-3" />
                  </svg>
                </div>
                <span>Cafés</span>
              </div>
              <div className="occasion">
                <div className="occasion-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 18h16" />
                    <path d="M5 18a7 7 0 0 1 14 0" />
                    <path d="M12 11V9" />
                    <path d="M10.5 9h3" />
                  </svg>
                </div>
                <span>Hotels</span>
              </div>
              <div className="occasion">
                <div className="occasion-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 20h16" />
                    <path d="M5 20l1.5-8h11L19 20" />
                    <path d="M7 16h10" />
                    <path d="M9 12V9q3-2.5 6 0v3" />
                    <circle cx="12" cy="6" r="1" />
                  </svg>
                </div>
                <span>Dessert<br />Shops</span>
              </div>
              <div className="occasion">
                <div className="occasion-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 5h2l2.5 11h9L20 8H7" />
                    <circle cx="10" cy="19.5" r="1.5" />
                    <circle cx="16.5" cy="19.5" r="1.5" />
                  </svg>
                </div>
                <span>Supermarkets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA (DARK) ===================== */}
      <section className="dark cta-section" id="contact">
        <div className="container">
          <div className="cta-grid">
            <div className="cta-copy">
              <h2 className="ph-reveal">Ready To Serve<br /><span className="gold">More Customers?</span></h2>
              <p className="ph-reveal reveal-delay-1">Stock your business with premium waffle cones trusted by retailers across Nigeria.</p>
              <Link href="mailto:info@paceheritage.com" className="btn btn-gold ph-reveal reveal-delay-2">
                Request Wholesale Pricing
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
            <div className="cta-art ph-reveal reveal-delay-1">
              <Image
                src="/images/pace_cones_page/ReadytoS.png"
                alt="Ready to serve more customers with Pace Cones"
                width={800}
                height={600}
                style={{ width: "min(420px, 88%)", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
