"use client";

import { useEffect, useRef, useState } from "react";

/* ─── Profit Calculator (Dry Mix) ──────────────────────────── */
export function ProfitCalculator() {
  const SERVINGS_PER_KG = 20;
  const COST_PER_KG = 6000;

  const [kg, setKg] = useState(20);
  const [price, setPrice] = useState(1000);

  const servings = kg * SERVINGS_PER_KG;
  const revenue = servings * price;
  const cost = kg * COST_PER_KG;
  const profit = revenue - cost;
  const margin = revenue > 0 ? Math.round((profit / revenue) * 100) : 0;

  const fmt = (n: number) => n.toLocaleString("en-NG");

  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[.22em] text-[#e0a64c]">See How Much You Could Earn</p>
      <h2 className="mb-8 font-serif text-[clamp(28px,3.4vw,38px)] font-semibold text-white">Profit Calculator</h2>

      {/* Row 1 */}
      <div className="mb-5 rounded-2xl border border-[rgba(224,166,76,.16)] bg-[linear-gradient(180deg,rgba(20,38,72,.55),rgba(12,27,54,.55))] p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-center">
            <div className="mb-2 inline-flex gap-1 rounded-[9px] border border-[rgba(224,166,76,.3)] bg-[rgba(6,13,28,.75)] p-[3px]">
              {[20, 1].map((k) => (
                <button
                  key={k}
                  onClick={() => setKg(k)}
                  className={`rounded-md px-4 py-1.5 text-sm font-semibold transition ${
                    kg === k
                      ? "bg-linear-to-b from-[#f0b85e] to-[#c8893a] text-[#1c1303]"
                      : "text-[#a8b6cc] hover:text-white"
                  }`}
                >
                  {k}kg
                </button>
              ))}
            </div>
            <div className="text-xs text-[#a8b6cc]">Dry Mix Bag</div>
          </div>
          <div className="text-[#e0a64c] opacity-80">→</div>
          <div className="text-center">
            <div className="text-2xl font-semibold text-white">{fmt(servings)}</div>
            <div className="mt-1 text-xs text-[#a8b6cc]">Servings (100ml)</div>
          </div>
          <div className="text-[#e0a64c] opacity-80">→</div>
          <div className="text-center">
            <div className="text-2xl font-semibold text-white">
              ₦<input
                type="number"
                value={price}
                min={0}
                step={50}
                onChange={(e) => setPrice(Math.max(0, Number(e.target.value) || 0))}
                className="w-[5ch] appearance-none rounded-lg border border-[rgba(224,166,76,.35)] bg-[rgba(6,13,28,.75)] px-2 py-1 text-center text-2xl font-semibold text-white outline-none focus:border-[#f0b85e] focus:shadow-[0_0_0_3px_rgba(224,166,76,.18)]"
              />
            </div>
            <div className="mt-1 text-xs text-[#a8b6cc]">Selling Price / serving</div>
          </div>
          <div className="text-[#e0a64c] opacity-80">→</div>
          <div className="text-center">
            <div className="text-2xl font-semibold text-[#f0b85e]">₦{fmt(revenue)}</div>
            <div className="mt-1 text-xs text-[#a8b6cc]">Potential Revenue</div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="rounded-2xl border border-[rgba(224,166,76,.16)] bg-[linear-gradient(180deg,rgba(20,38,72,.55),rgba(12,27,54,.55))] p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-center">
            <div className="mb-1 text-xs text-[#a8b6cc]">Ingredient Cost ({kg}kg Bag)</div>
            <div className="text-2xl font-semibold text-white">₦{fmt(cost)}</div>
          </div>
          <div className="text-[#e0a64c] opacity-80">→</div>
          <div className="text-center">
            <div className="mb-1 text-xs text-[#a8b6cc]">Potential Gross Profit</div>
            <div className="text-3xl font-semibold text-[#f0b85e]">₦{fmt(profit)}</div>
          </div>
          <div className="text-center">
            <div className="mb-1 text-xs text-[#a8b6cc]">Gross Profit Margin</div>
            <div className="text-3xl font-semibold text-[#f0b85e]">{margin}%</div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-[rgba(168,182,204,.65)]">*Values are estimated and may vary based on location and operational costs.</p>
    </div>
  );
}

/* ─── Count-up hook ──────────────────────────────────────────── */
function useCountUp(target: number, duration = 1400, trigger = false) {
  const [value, setValue] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    function frame(now: number) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf.current = requestAnimationFrame(frame);
    }
    raf.current = requestAnimationFrame(frame);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [target, duration, trigger]);

  return value;
}

/* ─── Carton Flow (Cones) ────────────────────────────────────── */
export function CartonFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  const cones = useCountUp(320, 1400, triggered);
  const servings = useCountUp(320, 1400, triggered);
  const price = useCountUp(1000, 1400, triggered);
  const revenue = useCountUp(320000, 1400, triggered);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const fmt = (n: number) => n.toLocaleString("en-NG");

  const items = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-11 w-11" fill="none" stroke="#e8a83d" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 8 12 4l8 4v8l-8 4-8-4Z"/><path d="M4 8l8 4 8-4M12 12v8"/>
        </svg>
      ),
      val: "1 Carton",
      sub: <>{fmt(cones)} Cones</>,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-11 w-11" fill="none" stroke="#e8a83d" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2q2 1.2 1.2 2.6 2.4 0 1.8 2 2 .4 1 2.4H8q-1-2 1-2.4-.6-2 1.8-2Q10 3.2 12 2Z"/><path d="m9.5 9 1.5 12h2L14.5 9"/>
        </svg>
      ),
      val: <>{fmt(servings)} Servings</>,
      sub: "Potential",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-11 w-11" fill="none" stroke="#e8a83d" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 3h6v6L9 19l-6-6Z"/><circle cx="16" cy="6.5" r="1.4"/>
        </svg>
      ),
      val: <>₦{fmt(price)}</>,
      sub: "Avg. Selling Price",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-11 w-11" fill="none" stroke="#e8a83d" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19V5M4 19h16"/><path d="M7 15l4-4 3 3 5-6M16 8h3v3"/>
        </svg>
      ),
      val: <span className="text-[#e8a83d]">₦{fmt(revenue)}</span>,
      sub: "Potential Revenue*",
    },
  ];

  return (
    <div ref={ref} className="flex flex-wrap items-start justify-between gap-6">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className="flex flex-col items-center text-center min-w-[100px]">
            <div className="mb-3 flex h-[58px] w-[58px] items-center justify-center">{item.icon}</div>
            <div className="text-lg font-semibold text-white">{item.val}</div>
            <div className="mt-1 text-xs text-[#a8b6cc] leading-snug">{item.sub}</div>
          </div>
          {i < items.length - 1 && (
            <span className="mt-[30px] text-[#e8a83d] opacity-80 text-lg">→</span>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Scroll-reveal hook ─────────────────────────────────────── */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".ph-reveal");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { els.forEach((el) => el.classList.add("ph-visible")); return; }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("ph-visible"); io.unobserve(e.target); }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
