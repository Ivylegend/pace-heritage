"use client";

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
              <div className="hero-cone">
                <svg viewBox="0 0 220 420" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="cupG" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#d99a4e" />
                      <stop offset="1" stopColor="#a3672c" />
                    </linearGradient>
                    <linearGradient id="swirlR" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#e8506e" />
                      <stop offset="1" stopColor="#c22f50" />
                    </linearGradient>
                    <linearGradient id="swirlW" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#fdf7e9" />
                      <stop offset="1" stopColor="#ecdcbb" />
                    </linearGradient>
                  </defs>
                  {/* swirl: white body with strawberry stripes clipped to shape */}
                  <clipPath id="swirlClip">
                    <ellipse cx="110" cy="256" rx="60" ry="20" />
                    <ellipse cx="110" cy="228" rx="56" ry="22" />
                    <ellipse cx="110" cy="194" rx="50" ry="22" />
                    <ellipse cx="110" cy="160" rx="44" ry="21" />
                    <ellipse cx="110" cy="128" rx="37" ry="19" />
                    <ellipse cx="110" cy="98" rx="29" ry="16" />
                    <ellipse cx="110" cy="74" rx="21" ry="13" />
                    <path d="M92 78 Q98 36 124 22 Q137 17 131 30 Q119 52 126 80 Z" />
                  </clipPath>
                  <g fill="url(#swirlW)">
                    <ellipse cx="110" cy="256" rx="60" ry="20" />
                    <ellipse cx="110" cy="228" rx="56" ry="22" />
                    <ellipse cx="110" cy="194" rx="50" ry="22" />
                    <ellipse cx="110" cy="160" rx="44" ry="21" />
                    <ellipse cx="110" cy="128" rx="37" ry="19" />
                    <ellipse cx="110" cy="98" rx="29" ry="16" />
                    <ellipse cx="110" cy="74" rx="21" ry="13" />
                    <path d="M92 78 Q98 36 124 22 Q137 17 131 30 Q119 52 126 80 Z" />
                  </g>
                  <g clipPath="url(#swirlClip)">
                    <g transform="rotate(-24 110 150)" fill="url(#swirlR)">
                      <rect x="-30" y="12" width="280" height="22" rx="11" />
                      <rect x="-30" y="68" width="280" height="22" rx="11" />
                      <rect x="-30" y="124" width="280" height="22" rx="11" />
                      <rect x="-30" y="180" width="280" height="22" rx="11" />
                      <rect x="-30" y="236" width="280" height="22" rx="11" />
                      <rect x="-30" y="292" width="280" height="22" rx="11" />
                    </g>
                    <path d="M56 250q54 14 108 0M58 222q52 14 104 0M64 188q46 13 92 0M70 154q40 12 80 0M77 122q33 11 66 0M85 92q25 9 50 0" stroke="rgba(120,80,40,.16)" strokeWidth="3" fill="none" />
                  </g>
                  {/* cup */}
                  <path d="M52 272 L168 272 L156 398 Q155 410 140 410 L80 410 Q65 410 64 398 Z" fill="url(#cupG)" />
                  <path d="M58 290 L162 290 M60 314 L160 314 M62 338 L158 338 M64 362 L156 362 M66 384 L154 384" stroke="#7e4d20" strokeWidth="2.5" opacity=".55" />
                  <path d="M76 272 L84 410 M104 272 L106 410 M132 272 L128 410 M152 272 L146 410" stroke="#7e4d20" strokeWidth="2.5" opacity=".55" />
                  <ellipse cx="110" cy="272" rx="58" ry="10" fill="#b87b35" />
                </svg>
              </div>
              <div className="hero-berries" aria-hidden="true">
                <svg viewBox="0 0 140 110" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="berry" cx=".35" cy=".3" r="1">
                      <stop offset="0" stopColor="#e8506e" />
                      <stop offset="1" stopColor="#b02540" />
                    </radialGradient>
                  </defs>
                  <path d="M50 38q18-4 28 8 12 22-4 40-14 16-34 8-18-8-14-30 4-20 24-26Z" fill="url(#berry)" />
                  <path d="M96 52q14-2 20 8 8 16-4 28-10 10-24 5-12-6-9-21 3-15 17-20Z" fill="url(#berry)" />
                  <path d="M48 38q-8-12 4-18 4 8 14 8-2 8-18 10Z" fill="#3f7d3f" />
                  <path d="M94 52q-5-9 3-13 3 6 10 6-1 6-13 7Z" fill="#3f7d3f" />
                  <g fill="#f6d6a0" opacity=".85">
                    <circle cx="44" cy="58" r="1.8" />
                    <circle cx="56" cy="50" r="1.8" />
                    <circle cx="66" cy="62" r="1.8" />
                    <circle cx="50" cy="74" r="1.8" />
                    <circle cx="62" cy="80" r="1.8" />
                    <circle cx="96" cy="66" r="1.5" />
                    <circle cx="106" cy="60" r="1.5" />
                    <circle cx="102" cy="76" r="1.5" />
                  </g>
                </svg>
              </div>
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
            <svg viewBox="0 0 440 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Open Pace Cones carton holding 320 waffle cones">
              <defs>
                <linearGradient id="boxFront" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#c89b6a" />
                  <stop offset="1" stopColor="#a87c4d" />
                </linearGradient>
                <linearGradient id="boxSide" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#8f6437" />
                  <stop offset="1" stopColor="#7a5026" />
                </linearGradient>
                <linearGradient id="coneRoll" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#d99a4e" />
                  <stop offset="1" stopColor="#a3672c" />
                </linearGradient>
              </defs>
              {/* back flaps */}
              <path d="M80 120 L60 62 L210 48 L218 104 Z" fill="#b08755" />
              <path d="M218 104 L226 46 L380 70 L368 126 Z" fill="#9c7340" />
              {/* cones inside */}
              <g>
                <path d="M104 118 L96 64 L128 60 L132 114 Z" fill="url(#coneRoll)" />
                <path d="M148 112 L142 58 L174 56 L176 110 Z" fill="url(#coneRoll)" />
                <path d="M192 110 L190 54 L222 54 L220 108 Z" fill="url(#coneRoll)" />
                <path d="M236 110 L238 56 L270 58 L264 110 Z" fill="url(#coneRoll)" />
                <path d="M280 112 L286 60 L318 64 L308 114 Z" fill="url(#coneRoll)" />
                <path d="M100 86 L132 84 M146 84 L176 82 M191 82 L221 82 M237 83 L267 84 M283 86 L313 89" stroke="#8a5523" strokeWidth="2" opacity=".5" />
                <ellipse cx="116" cy="62" rx="17" ry="6" fill="#7e4d20" />
                <ellipse cx="158" cy="57" rx="17" ry="6" fill="#7e4d20" />
                <ellipse cx="206" cy="54" rx="17" ry="6" fill="#7e4d20" />
                <ellipse cx="254" cy="57" rx="17" ry="6" fill="#7e4d20" />
                <ellipse cx="302" cy="62" rx="17" ry="6" fill="#7e4d20" />
              </g>
              {/* box body */}
              <path d="M70 122 L240 132 L238 296 L74 282 Z" fill="url(#boxFront)" />
              <path d="M240 132 L382 122 L378 272 L238 296 Z" fill="url(#boxSide)" />
              <path d="M70 122 L60 64 L36 110 L66 156 Z" fill="#bd9261" />
              <path d="M382 122 L394 66 L416 112 L386 158 Z" fill="#8a6133" />
              {/* branding */}
              <text x="118" y="200" fontFamily="'Playfair Display',serif" fontSize="34" fontWeight="700" fill="#1d2d52" transform="rotate(3 118 200)">Pace</text>
              <text x="112" y="238" fontFamily="'Playfair Display',serif" fontSize="34" fontWeight="700" fill="#1d2d52" transform="rotate(3 112 238)">Cones</text>
              <path d="M196 246q14-10 26-2-12 0-18 8-6 4-8-6Z" fill="#2a7fc1" transform="rotate(3 200 248)" />
              <text x="296" y="208" fontFamily="var(--font-jost),sans-serif" fontSize="30" fontWeight="600" fill="#f3e3c8" transform="rotate(-4 296 208)">320</text>
              <text x="288" y="230" fontFamily="var(--font-jost),sans-serif" fontSize="12" letterSpacing="1" fill="#e8d3b0" transform="rotate(-4 288 230)">PCS PER</text>
              <text x="288" y="246" fontFamily="var(--font-jost),sans-serif" fontSize="12" letterSpacing="1" fill="#e8d3b0" transform="rotate(-4 288 246)">CARTON</text>
              {/* shadow */}
              <ellipse cx="226" cy="306" rx="170" ry="16" fill="rgba(0,0,0,.35)" />
            </svg>
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
            <svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Golden waffle cone lying on a marble counter with crumbs">
              <defs>
                <linearGradient id="bigCone" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#d99a4e" />
                  <stop offset="1" stopColor="#94591f" />
                </linearGradient>
                <radialGradient id="counter" cx=".5" cy=".5" r=".8">
                  <stop offset="0" stopColor="#efe6d3" />
                  <stop offset="1" stopColor="#ddcfb4" />
                </radialGradient>
              </defs>
              <rect x="0" y="0" width="460" height="320" rx="18" fill="url(#counter)" />
              {/* cone lying down: opening left, tip right */}
              <ellipse cx="350" cy="262" rx="86" ry="12" fill="rgba(90,60,20,.18)" />
              <clipPath id="bigConeClip">
                <path d="M96 128 Q128 70 196 84 L408 232 Q414 244 400 248 L120 226 Q70 196 96 128 Z" />
              </clipPath>
              <path d="M96 128 Q128 70 196 84 L408 232 Q414 244 400 248 L120 226 Q70 196 96 128 Z" fill="url(#bigCone)" />
              {/* waffle lattice */}
              <g stroke="#7e4d20" strokeWidth="2.5" opacity=".55" fill="none" clipPath="url(#bigConeClip)">
                <path d="M150 92 L382 236M196 86 L404 230M122 110 L342 252M106 140 L286 254M104 176 L222 240" />
                <path d="M120 220 L208 100M160 226 L250 120M204 230 L296 148M250 234 L340 178M298 238 L378 210" />
              </g>
              {/* cone opening */}
              <ellipse cx="146" cy="158" rx="36" ry="58" fill="#5d3a17" transform="rotate(-24 146 158)" />
              <ellipse cx="150" cy="156" rx="30" ry="50" fill="#7a4d1f" transform="rotate(-24 150 156)" />
              {/* crumbs */}
              <g fill="#a3672c">
                <path d="M84 268l8-5 5 8-8 5z" />
                <path d="M132 282l7-3 3 7-7 3z" />
                <path d="M396 270l8-4 4 8-8 4z" />
                <path d="M310 286l6-4 4 6-6 4z" />
                <path d="M226 290l7-2 2 6-7 2z" />
                <circle cx="178" cy="286" r="3" />
                <circle cx="356" cy="288" r="3" />
                <circle cx="64" cy="244" r="2.5" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* ===================== OCCASIONS ===================== */}
      <section className="occasions-section">
        <div className="container occasions-grid">
          <div className="occasions-art ph-reveal">
            <svg viewBox="0 0 440 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pace Cones retail box with waffle cones beside it">
              <defs>
                <linearGradient id="rBox" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#ffffff" />
                  <stop offset="1" stopColor="#ece8df" />
                </linearGradient>
                <linearGradient id="rSide" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#d9d4c8" />
                  <stop offset="1" stopColor="#c8c2b4" />
                </linearGradient>
                <linearGradient id="rCone" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#d99a4e" />
                  <stop offset="1" stopColor="#a3672c" />
                </linearGradient>
              </defs>
              <ellipse cx="220" cy="290" rx="190" ry="16" fill="rgba(90,60,20,.15)" />
              {/* retail box */}
              <path d="M48 108 L238 96 L242 268 L54 278 Z" fill="url(#rBox)" />
              <path d="M238 96 L300 116 L302 254 L242 268 Z" fill="url(#rSide)" />
              <path d="M48 108 L110 84 L300 116 L238 96 Z" fill="#f5f2ea" />
              {/* box branding */}
              <path d="M64 130q40-8 110-10" stroke="#c0392b" strokeWidth="14" fill="none" strokeLinecap="round" opacity=".9" />
              <text x="84" y="186" fontFamily="'Playfair Display',serif" fontSize="38" fontWeight="700" fill="#1d2d52" transform="rotate(-2 84 186)">Pace</text>
              <text x="80" y="226" fontFamily="'Playfair Display',serif" fontSize="38" fontWeight="700" fill="#c0392b" transform="rotate(-2 80 226)">Cones</text>
              <path d="M186 232q16-12 30-2-14 0-20 10-8 4-10-8Z" fill="#2a7fc1" />
              <text x="64" y="254" fontFamily="var(--font-jost),sans-serif" fontSize="11" letterSpacing="1" fill="#5a6885" transform="rotate(-2 64 254)">BEST TASTE. EVERY TIME.</text>
              <text x="252" y="160" fontFamily="var(--font-jost),sans-serif" fontSize="20" fontWeight="600" fill="#8a6133" transform="rotate(4 252 160)">320</text>
              <circle cx="216" cy="120" r="5" fill="#2a7fc1" />
              <circle cx="200" cy="132" r="4" fill="#e0a64c" />
              <circle cx="226" cy="138" r="4" fill="#3f7d3f" />
              {/* cone standing tip-up beside box */}
              <path d="M338 150 L306 270 L370 270 Z" fill="url(#rCone)" />
              <g stroke="#7e4d20" strokeWidth="2" opacity=".55">
                <path d="M331 178 L346 178 M325 200 L352 200 M319 224 L358 224 M313 248 L363 248" />
                <path d="M327 192 L336 268 M350 188 L342 268" />
              </g>
              <ellipse cx="338" cy="270" rx="32" ry="8" fill="#8f5a22" />
              {/* cone lying in front, tip to the right */}
              <path d="M378 246 L444 236 Q450 240 446 246 L392 278 Q376 264 378 246 Z" fill="url(#rCone)" />
              <path d="M392 252 L432 244 M398 264 L424 252" stroke="#7e4d20" strokeWidth="2" opacity=".5" />
              <ellipse cx="386" cy="260" rx="11" ry="16" fill="#7a4d1f" transform="rotate(-22 386 260)" />
            </svg>
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
              <svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bowl filled with golden waffle cones">
                <defs>
                  <linearGradient id="bCone" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#e0a455" />
                    <stop offset="1" stopColor="#9c6126" />
                  </linearGradient>
                </defs>
                <ellipse cx="210" cy="278" rx="160" ry="14" fill="rgba(0,0,0,.4)" />
                {/* cones fanned in bowl */}
                <g>
                  <path d="M150 160 L96 36 L176 60 Z" fill="url(#bCone)" />
                  <path d="M196 156 L186 22 L258 44 Z" fill="url(#bCone)" />
                  <path d="M246 162 L300 40 L348 92 Z" fill="url(#bCone)" />
                  <path d="M120 176 L40 96 L106 86 Z" fill="url(#bCone)" />
                  <path d="M286 178 L390 122 L384 176 Z" fill="url(#bCone)" />
                  <g stroke="#7e4d20" strokeWidth="2" opacity=".5" fill="none">
                    <path d="M118 70 L162 120M138 56 L172 134M196 60 L226 130M214 44 L238 122M292 72 L268 136M316 76 L282 150M76 96 L118 144M96 88 L126 158M356 138 L312 166M368 156 L322 172" />
                  </g>
                  <ellipse cx="136" cy="48" rx="42" ry="14" fill="#7a4d1f" transform="rotate(16 136 48)" />
                  <ellipse cx="222" cy="33" rx="38" ry="13" fill="#7a4d1f" transform="rotate(8 222 33)" />
                  <ellipse cx="324" cy="66" rx="36" ry="13" fill="#7a4d1f" transform="rotate(-38 324 66)" />
                  <ellipse cx="72" cy="91" rx="34" ry="12" fill="#7a4d1f" transform="rotate(42 72 91)" />
                  <ellipse cx="387" cy="149" rx="30" ry="11" fill="#7a4d1f" transform="rotate(-72 387 149)" />
                </g>
                {/* bowl */}
                <path d="M86 162 L334 162 Q326 252 256 264 L164 264 Q94 252 86 162 Z" fill="#111c30" />
                <path d="M86 162 L334 162 Q326 252 256 264 L164 264 Q94 252 86 162 Z" fill="none" stroke="#2a3a58" strokeWidth="2.5" />
                {/* crumbs */}
                <g fill="#b87b35">
                  <path d="M58 252l8-4 4 8-8 4z" />
                  <path d="M362 248l7-4 4 7-7 4z" />
                  <circle cx="120" cy="272" r="3" />
                  <circle cx="312" cy="274" r="3" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
