"use client";

import { useEffect, useRef } from "react";

export function AfricaDistributionMap() {
  const heroRef = useRef<HTMLDivElement>(null);
  const meshRef = useRef<HTMLCanvasElement>(null);
  const trailsRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const meshC = meshRef.current;
    const trailsC = trailsRef.current;
    if (!hero || !meshC || !trailsC) return;

    const mctx = meshC.getContext("2d")!;
    const tctx = trailsC.getContext("2d")!;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const LOOP = 12;
    const VBW = 840;
    const VBH = 460;

    let W = 0,
      H = 0,
      DPR = 1,
      SX = 1,
      SY = 1;

    function resize() {
      const r = hero!.getBoundingClientRect();
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = r.width;
      H = r.height;
      [meshC, trailsC].forEach((c) => {
        if (!c) return;
        c.width = W * DPR;
        c.height = H * DPR;
      });
      SX = W / VBW;
      SY = H / VBH;
    }
    resize();

    /* ---------- constellation mesh ---------- */
    const africaD =
      "M365.8 269L363.2 275.8L363.5 279L367.1 281L367.2 282.4L365.7 285.8L366 287.5L365.7 290.1L367.6 293.6L369.9 299L371.9 300.3L372.8 302.7L372.6 308.2L373.3 313.1L373.5 321.8L374.5 324.5L372.8 328.4L370.7 332.3L367.1 335.7L362.1 337.8L355.8 340.5L349.6 346.4L347.5 347.5L343.6 351.4L341.3 352.7L340.9 356.6L343.5 360.8L344.6 364L344.6 365.7L345.6 365.4L345.5 370.9L344.6 373.4L345.9 374.4L345 376.7L342.7 378.7L338.2 380.5L331.5 383.5L329.1 385.6L329.6 387.9L331 388.3L330.5 391.2L329.1 395.2L328.5 399.8L327 402.3L323.2 405.1L322.2 405.9L319.8 408.7L318.3 411.6L315.1 415.5L308.9 421.2L305 424.6L300.8 427.1L295 429.2L292.2 429.5L291.5 431.1L288.1 430.2L285.4 431.3L279.4 430.2L276 430.9L273.7 430.6L268 432.8L263.3 433.7L259.9 435.8L257.3 435.9L255 433.9L253.1 433.8L250.7 431.3L250.5 432.1L249.7 430.6L249.8 427.4L248 423.7L249.8 422.7L249.6 418.4L246 413.2L243.2 408.5L239.2 401.3L235.1 397.2L233 393.1L231.7 387.7L230.4 383.7L228.5 375.2L228.4 368.6L227.7 365.5L225.5 363.3L222.7 358.7L219.7 352.1L218.6 348.6L214 343.2L213.7 338.9L213.2 335.4L213.9 330.6L215.9 325.5L216.2 323.1L218 318.1L219.3 315.9L222.4 312.2L224.2 309.8L224.8 305.7L224.5 302.5L222.9 300.6L221.4 297.2L220 293.9L220.3 292.7L222 290.5L220.3 285.2L219.2 281.5L216.4 278L217 276.9L216.2 275.2L214.7 271L210.2 265.2L204.5 259.6L200.8 255L197.4 249.3L197.6 247.5L198.8 245.7L200.2 241.7L201.3 237.6L200.3 236.7L202.2 230.5L203 226.1L200.8 222.5L198.3 221.5L197.2 219.1L195.7 218.3L195.8 216.7L190.1 218.7L188 218.4L185.8 219.7L181.4 219.5L178.4 216.1L176.6 212.1L172.7 208.4L168.5 208.5L163.6 208.5L159.1 209.1L154.6 210.3L145.9 213.6L142.9 215.5L137.9 217.1L132.9 215.5L130.4 215.6L126.6 214.5L123 214.5L116.5 215.5L112.6 217.1L107.1 219.1L106.1 219L104.6 219L98.9 216.4L93.9 212.2L89.2 209.1L85.4 205.6L83.9 205.2L79.9 202.9L77.1 200L76.1 198L75.4 193.9L73 190.6L70.8 188.4L69.4 187.7L68 186.6L67.4 184.1L66.6 182.9L65 182L62 179.7L59.7 179.3L58.4 177.8L58.5 176.9L56.8 175.8L56.4 174.6L55.5 170.3L56.2 167.9L53.9 163.6L51.2 161.6L53.6 160.6L56.3 156.7L57.6 153.8L57.1 150.8L58.7 148.1L59.4 142.9L58.8 137.4L58.1 134.7L58.6 131.9L57.2 129.3L54.3 126.9L54.5 124.6L54.8 122L56.9 120.5L58.7 117.6L58.4 115.7L60.3 111.8L63.4 108.3L65.2 107.4L66.7 104.2L66.8 101.2L68.8 97.8L72.5 95.8L76 90.1L78.9 87.9L84.1 87.3L88.4 83.5L91.2 82.1L95.8 77.4L94.4 70.6L96.5 65.8L97.3 62.9L100.8 59.1L106.4 56.6L110.5 54.3L114.2 48.6L115.9 45.2L120 45.2L123.3 47.6L128.6 47.2L134.3 48.4L136.7 48.5L142.1 45.4L148 44.5L151.5 42.2L156.9 40.5L166.3 39.5L175.4 39.1L178.2 39.9L183.4 37.7L189.3 37.7L191.6 38.9L195.4 38.6L201.4 36.4L205.3 37L205.1 39.8L209.8 37.8L210.2 38.9L207.4 41.6L207.4 44.1L209.3 45.5L208.6 50.3L204.9 53.1L206 56.1L208.8 56.2L210.2 58.8L212.4 59.7L218.8 61.6L221.2 61.1L225.8 62.1L233.1 64.5L235.7 69.5L240.7 70.5L248.5 72.8L254.4 75.6L257.1 74.2L259.8 71.6L258.5 67.4L260.2 64.7L264.2 62.1L268 61.3L275.5 62.5L277.4 64.9L279.5 65L281.2 65.9L286.7 66.6L288.1 68.4L295.4 68.3L300.8 69.8L306.2 71.4L308.8 72.3L313.1 70.5L315.3 68.9L320.2 68.5L324.2 69.2L325.7 71.9L327 70.1L331.4 71.4L335.7 71.7L338.4 70.3L341.5 78.4L342.1 79.8L340.5 82.1L339.3 86.2L337.8 89.1L336.5 90.1L334.7 88.3L332.2 85.8L328.2 77.9L327.7 78.4L330 84.2L333.4 89.8L337.5 98.4L339.6 101.4L341.4 104.6L346.3 110.7L345.2 111.7L345.4 115.3L351.9 120.2L352.8 121.4L354.6 126.8L353.4 127.8L354.2 133.5L356.2 140.1L358.4 141.5L361.4 143.5L364.6 149.9L366.1 155L369.2 157.7L376.7 162.9L379.8 166.1L382.8 169.3L384.5 171.2L387.2 172.8L388.5 174.6L388.4 176.9L385.2 178.2L387.6 179.7L389.4 180.7L390.5 183L393 185.3L395.7 185.3L400.9 183.9L407 183.3L411.8 181.5L414.6 181.2L416.6 180.2L419.7 180L421.5 179.9L424 179L427 178.5L429.6 176.6L431.7 176.6L431.8 178.1L431.3 181.3L431.3 184.2L430.2 186.2L428.6 192.2L425.9 198.4L422.5 205.5L417.8 213.6L413 219.8L406.5 227.3L401 231.8L392.7 237.3L387.5 241.5L381.5 248.2L380.2 251.2L379 252.5L375.1 254.7L373.7 257L371.6 257.4L370.8 261.3L369.1 263.5L368 267.2L365.8 269ZM423 312.2L424.5 314.5L425.8 318.2L426.7 324.8L428.2 327.4L427.6 330.1L426.6 331.7L424.8 328.5L423.7 330.1L424.8 334.2L424.3 336.6L422.8 337.8L422.4 342.5L420.2 349L417.5 356.6L414.1 367.1L412 374.8L409.5 381.2L405 382.5L400.1 384.9L396.9 383.4L392.5 381.5L391 378.5L390.7 373.6L388.7 369.2L388.2 365.2L389.2 361.3L391.7 360.3L391.8 358.5L394.4 354.3L394.9 350.7L393.6 348.1L392.6 344.6L392.1 339.5L394 336.4L394.8 332.9L397.6 332.7L400.6 331.6L402.7 330.6L405.1 330.5L408.3 327.3L412.8 323.9L414.5 321.2L413.7 318.8L416.1 319.4L419.1 315.6L419.3 312.3L421.1 309.8L423 312.2Z";

    const africa2D = new Path2D(africaD);

    type Node = {
      x: number; y: number; r: number;
      k: number; ph: number; bright: boolean; out: boolean;
    };
    type Dust = {
      x: number; y: number; vx: number; vy: number;
      r: number; a: number; gold: boolean;
    };

    let nodes: Node[] = [];
    let links: [number, number, boolean][] = [];
    let dust: Dust[] = [];

    function rand(a: number, b: number) {
      return a + Math.random() * (b - a);
    }

    function buildMesh() {
      nodes = []; links = []; dust = [];
      let tries = 0;
      while (nodes.length < 110 && tries < 8000) {
        tries++;
        const x = rand(52, 434), y = rand(36, 438);
        if (mctx.isPointInPath(africa2D, x, y)) {
          nodes.push({ x, y, r: rand(0.8, 2.1), k: 2 + Math.floor(Math.random() * 5), ph: rand(0, Math.PI * 2), bright: Math.random() < 0.18, out: false });
        }
      }
      let added = 0; tries = 0;
      while (added < 60 && tries < 9000) {
        tries++;
        const x2 = rand(8, 832), y2 = rand(8, 452);
        if (mctx.isPointInPath(africa2D, x2, y2)) continue;
        if (x2 > 540 && y2 > 84 && y2 < 340 && Math.random() > 0.3) continue;
        nodes.push({ x: x2, y: y2, r: rand(0.7, 1.9), k: 2 + Math.floor(Math.random() * 5), ph: rand(0, Math.PI * 2), bright: Math.random() < 0.14, out: true });
        added++;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
          const ext = nodes[i].out || nodes[j].out;
          const max = ext ? 62 : 50;
          if (dx * dx + dy * dy < max * max) links.push([i, j, ext]);
        }
      }
      for (let d = 0; d < 26; d++) {
        dust.push({ x: rand(0, VBW), y: rand(0, VBH), vx: rand(-1.6, 1.6), vy: rand(-1.1, -0.3), r: rand(0.6, 1.6), a: rand(0.08, 0.3), gold: Math.random() < 0.3 });
      }
    }
    buildMesh();

    function drawMesh(t: number) {
      mctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      mctx.clearRect(0, 0, W, H);
      mctx.lineWidth = 0.7;
      mctx.strokeStyle = "rgba(70,130,210,0.16)";
      mctx.beginPath();
      for (const l of links) {
        if (l[2]) continue;
        const a = nodes[l[0]], b = nodes[l[1]];
        mctx.moveTo(a.x * SX, a.y * SY); mctx.lineTo(b.x * SX, b.y * SY);
      }
      mctx.stroke();
      mctx.strokeStyle = "rgba(70,130,210,0.09)";
      mctx.beginPath();
      for (const l of links) {
        if (!l[2]) continue;
        const a = nodes[l[0]], b = nodes[l[1]];
        mctx.moveTo(a.x * SX, a.y * SY); mctx.lineTo(b.x * SX, b.y * SY);
      }
      mctx.stroke();
      for (const n of nodes) {
        const tw = 0.5 + 0.5 * Math.sin(n.ph + n.k * (t / LOOP) * Math.PI * 2);
        let alpha = n.bright ? 0.35 + 0.6 * tw : 0.15 + 0.35 * tw;
        if (n.out) alpha *= 0.65;
        mctx.beginPath();
        mctx.fillStyle = n.bright ? `rgba(120,190,255,${alpha})` : `rgba(80,150,230,${alpha})`;
        mctx.arc(n.x * SX, n.y * SY, (n.bright ? n.r + 0.7 : n.r) * Math.min(SX, 1.4), 0, 7);
        mctx.fill();
        if (n.bright) {
          mctx.beginPath();
          mctx.fillStyle = `rgba(140,200,255,${alpha * 0.25})`;
          mctx.arc(n.x * SX, n.y * SY, (n.r + 4) * Math.min(SX, 1.4), 0, 7);
          mctx.fill();
        }
      }
      for (const p of dust) {
        p.x += p.vx * 0.016; p.y += p.vy * 0.016;
        if (p.y < -4) { p.y = VBH + 4; p.x = rand(0, VBW); }
        if (p.x < -4) p.x = VBW + 4;
        if (p.x > VBW + 4) p.x = -4;
        mctx.beginPath();
        mctx.fillStyle = p.gold ? `rgba(245,180,80,${p.a})` : `rgba(110,170,240,${p.a})`;
        mctx.arc(p.x * SX, p.y * SY, p.r, 0, 7);
        mctx.fill();
      }
    }

    /* ---------- light trails ---------- */
    const routeEls = Array.from(hero.querySelectorAll<SVGPathElement>("#routes .route"));
    const CYCLES = [6, 6, 6, 6, 6, 3, 6, 4];
    const routes = routeEls.map((el, i) => ({
      el,
      len: el.getTotalLength(),
      cycle: CYCLES[i] || 6,
      off: i * 0.85,
    }));

    function smooth(u: number, lo: number, hi: number) {
      const v = Math.min(Math.max((u - lo) / (hi - lo), 0), 1);
      return v * v * (3 - 2 * v);
    }

    function drawTrails(t: number) {
      tctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      tctx.clearRect(0, 0, W, H);
      tctx.globalCompositeOperation = "lighter";
      for (const r of routes) {
        const u = (((t - r.off) % r.cycle) + r.cycle) % r.cycle / r.cycle;
        const fade = smooth(u, 0, 0.12) * (1 - smooth(u, 0.86, 1));
        if (fade <= 0.01) continue;
        const headLen = u * r.len;
        const SEG = 13;
        for (let s = SEG; s >= 0; s--) {
          const L = headLen - s * 6;
          if (L < 0) continue;
          const pt = r.el.getPointAtLength(L);
          const k = 1 - s / SEG;
          const alpha = fade * (s === 0 ? 0.95 : 0.38 * k * k);
          const rad = (s === 0 ? 3 : 2.1 * k) * Math.min(SX, 1.5);
          tctx.beginPath();
          tctx.fillStyle = s === 0 ? `rgba(255,214,130,${alpha})` : `rgba(245,166,35,${alpha})`;
          if (s === 0) { tctx.shadowColor = "rgba(245,166,35,.9)"; tctx.shadowBlur = 10 * Math.min(SX, 1.5); }
          else tctx.shadowBlur = 0;
          tctx.arc(pt.x * SX, pt.y * SY, rad, 0, 7);
          tctx.fill();
        }
        tctx.shadowBlur = 0;
      }
      tctx.globalCompositeOperation = "source-over";
    }

    /* ---------- parallax ---------- */
    const layers = Array.from(hero.querySelectorAll<HTMLElement>(".adm-layer"));
    let mx = 0, my = 0, cmx = 0, cmy = 0;
    const onMouseMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - 0.5;
      my = (e.clientY - r.top) / r.height - 0.5;
    };
    const onMouseLeave = () => { mx = 0; my = 0; };
    hero.addEventListener("mousemove", onMouseMove);
    hero.addEventListener("mouseleave", onMouseLeave);

    function parallax(t: number) {
      cmx += (mx - cmx) * 0.04; cmy += (my - cmy) * 0.04;
      const swx = Math.sin((t / LOOP) * Math.PI * 2) * 3;
      const swy = Math.cos((t / LOOP) * Math.PI * 2) * 2;
      for (const layer of layers) {
        const d = parseFloat(layer.dataset.depth || "0") || 0;
        layer.style.transform = `translate3d(${cmx * -18 * d + swx * d}px,${cmy * -12 * d + swy * d}px,0)`;
      }
    }

    /* ---------- resize handler ---------- */
    const onResize = () => { resize(); buildMesh(); };
    window.addEventListener("resize", onResize);

    /* ---------- main loop ---------- */
    const t0 = performance.now();
    function frame(now: number) {
      const t = ((now - t0) / 1000) % LOOP;
      drawMesh(t);
      drawTrails(t);
      parallax(t);
      if (!reduced) rafRef.current = requestAnimationFrame(frame);
    }
    rafRef.current = requestAnimationFrame(frame);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      hero.removeEventListener("mousemove", onMouseMove);
      hero.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="adm-hero"
      aria-label="Distribution routes flowing from Nigeria across Africa"
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "840/460",
        overflow: "hidden",
        background: "transparent",
      }}
    >
      <style>{`
        .adm-layer{position:absolute;inset:-3%;width:106%;height:106%;will-change:transform}
        .adm-glow{position:absolute;border-radius:50%;filter:blur(40px);pointer-events:none}
        .adm-glow-nigeria{left:12%;top:24%;width:22%;height:34%;background:radial-gradient(circle,rgba(245,166,35,.18) 0%,transparent 70%);animation:adm-breathe 12s ease-in-out infinite}
        @keyframes adm-breathe{0%,100%{opacity:.75;transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}
        .adm-scene{position:absolute;inset:0;width:100%;height:100%;display:block}
        .adm-canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
        .adm-nigeria{filter:drop-shadow(0 0 10px rgba(245,166,35,.55));animation:adm-nigeriaGlow 6s ease-in-out infinite}
        @keyframes adm-nigeriaGlow{0%,100%{filter:drop-shadow(0 0 8px rgba(245,166,35,.45))}50%{filter:drop-shadow(0 0 18px rgba(245,166,35,.8))}}
        .adm-route{fill:none;stroke:#f5a623;stroke-width:1.4;stroke-linecap:round;stroke-dasharray:2 14;opacity:.5;animation:adm-flow 12s linear infinite}
        @keyframes adm-flow{to{stroke-dashoffset:-160}}
        .adm-ring{fill:none;stroke:#f5a623;stroke-width:1.2;transform-box:fill-box;transform-origin:center;animation:adm-pulse 3s ease-out infinite}
        @keyframes adm-pulse{0%{transform:scale(.35);opacity:.9}70%{transform:scale(1.9);opacity:0}100%{transform:scale(1.9);opacity:0}}
        .adm-hub-dot{fill:#ffd27a;stroke:rgba(245,166,35,.22);stroke-width:5;filter:drop-shadow(0 0 4px rgba(245,166,35,.9))}
        .adm-africa-outline{fill:rgba(18,52,110,.28);stroke:#2d6cb5;stroke-width:1.2;stroke-linejoin:round}
        .adm-callout{opacity:0;animation:adm-fadeUp 1.1s ease forwards}
        .adm-callout text{fill:#eef4ff;font-size:16px;font-weight:500;letter-spacing:.2px;font-family:"Inter","Segoe UI",system-ui,sans-serif}
        .adm-callout .adm-icon{stroke:#f5a623;stroke-width:1.6;fill:none;stroke-linecap:round;stroke-linejoin:round;filter:drop-shadow(0 0 6px rgba(245,166,35,.28))}
        .adm-callout .adm-badge{fill:rgba(245,166,35,.07);stroke:rgba(245,166,35,.5);stroke-width:1;animation:adm-badgePulse 6s ease-in-out infinite}
        .adm-callout .adm-fill-node{fill:#f5a623;stroke:none}
        @keyframes adm-badgePulse{0%,100%{stroke-opacity:.4}50%{stroke-opacity:.85}}
        .adm-callout .adm-connector{stroke:#f5a623;stroke-width:1;fill:none;opacity:.7}
        .adm-callout .adm-joint{fill:#f5a623}
        .adm-callout:nth-of-type(1){animation-delay:.3s}
        .adm-callout:nth-of-type(2){animation-delay:.55s}
        .adm-callout:nth-of-type(3){animation-delay:.8s}
        .adm-callout:nth-of-type(4){animation-delay:1.05s}
        @keyframes adm-fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        .adm-callouts-float{animation:adm-floaty 12s ease-in-out infinite}
        @keyframes adm-floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
        @media (prefers-reduced-motion:reduce){.adm-hero *{animation:none!important}}
      `}</style>

      {/* L1: ambient glow */}
      <div className="adm-layer" data-depth="0.25">
        <div className="adm-glow adm-glow-nigeria" />
      </div>

      {/* L2: constellation mesh canvas */}
      <div className="adm-layer" data-depth="0.45">
        <canvas ref={meshRef} className="adm-canvas" />
      </div>

      {/* L3: map + routes + hubs + callouts (SVG) */}
      <div className="adm-layer" data-depth="0.6">
        <svg
          className="adm-scene"
          viewBox="0 0 840 460"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Africa outline */}
          <path
            id="africaPath"
            className="adm-africa-outline"
            d="M365.8 269L363.2 275.8L363.5 279L367.1 281L367.2 282.4L365.7 285.8L366 287.5L365.7 290.1L367.6 293.6L369.9 299L371.9 300.3L372.8 302.7L372.6 308.2L373.3 313.1L373.5 321.8L374.5 324.5L372.8 328.4L370.7 332.3L367.1 335.7L362.1 337.8L355.8 340.5L349.6 346.4L347.5 347.5L343.6 351.4L341.3 352.7L340.9 356.6L343.5 360.8L344.6 364L344.6 365.7L345.6 365.4L345.5 370.9L344.6 373.4L345.9 374.4L345 376.7L342.7 378.7L338.2 380.5L331.5 383.5L329.1 385.6L329.6 387.9L331 388.3L330.5 391.2L329.1 395.2L328.5 399.8L327 402.3L323.2 405.1L322.2 405.9L319.8 408.7L318.3 411.6L315.1 415.5L308.9 421.2L305 424.6L300.8 427.1L295 429.2L292.2 429.5L291.5 431.1L288.1 430.2L285.4 431.3L279.4 430.2L276 430.9L273.7 430.6L268 432.8L263.3 433.7L259.9 435.8L257.3 435.9L255 433.9L253.1 433.8L250.7 431.3L250.5 432.1L249.7 430.6L249.8 427.4L248 423.7L249.8 422.7L249.6 418.4L246 413.2L243.2 408.5L239.2 401.3L235.1 397.2L233 393.1L231.7 387.7L230.4 383.7L228.5 375.2L228.4 368.6L227.7 365.5L225.5 363.3L222.7 358.7L219.7 352.1L218.6 348.6L214 343.2L213.7 338.9L213.2 335.4L213.9 330.6L215.9 325.5L216.2 323.1L218 318.1L219.3 315.9L222.4 312.2L224.2 309.8L224.8 305.7L224.5 302.5L222.9 300.6L221.4 297.2L220 293.9L220.3 292.7L222 290.5L220.3 285.2L219.2 281.5L216.4 278L217 276.9L216.2 275.2L214.7 271L210.2 265.2L204.5 259.6L200.8 255L197.4 249.3L197.6 247.5L198.8 245.7L200.2 241.7L201.3 237.6L200.3 236.7L202.2 230.5L203 226.1L200.8 222.5L198.3 221.5L197.2 219.1L195.7 218.3L195.8 216.7L190.1 218.7L188 218.4L185.8 219.7L181.4 219.5L178.4 216.1L176.6 212.1L172.7 208.4L168.5 208.5L163.6 208.5L159.1 209.1L154.6 210.3L145.9 213.6L142.9 215.5L137.9 217.1L132.9 215.5L130.4 215.6L126.6 214.5L123 214.5L116.5 215.5L112.6 217.1L107.1 219.1L106.1 219L104.6 219L98.9 216.4L93.9 212.2L89.2 209.1L85.4 205.6L83.9 205.2L79.9 202.9L77.1 200L76.1 198L75.4 193.9L73 190.6L70.8 188.4L69.4 187.7L68 186.6L67.4 184.1L66.6 182.9L65 182L62 179.7L59.7 179.3L58.4 177.8L58.5 176.9L56.8 175.8L56.4 174.6L55.5 170.3L56.2 167.9L53.9 163.6L51.2 161.6L53.6 160.6L56.3 156.7L57.6 153.8L57.1 150.8L58.7 148.1L59.4 142.9L58.8 137.4L58.1 134.7L58.6 131.9L57.2 129.3L54.3 126.9L54.5 124.6L54.8 122L56.9 120.5L58.7 117.6L58.4 115.7L60.3 111.8L63.4 108.3L65.2 107.4L66.7 104.2L66.8 101.2L68.8 97.8L72.5 95.8L76 90.1L78.9 87.9L84.1 87.3L88.4 83.5L91.2 82.1L95.8 77.4L94.4 70.6L96.5 65.8L97.3 62.9L100.8 59.1L106.4 56.6L110.5 54.3L114.2 48.6L115.9 45.2L120 45.2L123.3 47.6L128.6 47.2L134.3 48.4L136.7 48.5L142.1 45.4L148 44.5L151.5 42.2L156.9 40.5L166.3 39.5L175.4 39.1L178.2 39.9L183.4 37.7L189.3 37.7L191.6 38.9L195.4 38.6L201.4 36.4L205.3 37L205.1 39.8L209.8 37.8L210.2 38.9L207.4 41.6L207.4 44.1L209.3 45.5L208.6 50.3L204.9 53.1L206 56.1L208.8 56.2L210.2 58.8L212.4 59.7L218.8 61.6L221.2 61.1L225.8 62.1L233.1 64.5L235.7 69.5L240.7 70.5L248.5 72.8L254.4 75.6L257.1 74.2L259.8 71.6L258.5 67.4L260.2 64.7L264.2 62.1L268 61.3L275.5 62.5L277.4 64.9L279.5 65L281.2 65.9L286.7 66.6L288.1 68.4L295.4 68.3L300.8 69.8L306.2 71.4L308.8 72.3L313.1 70.5L315.3 68.9L320.2 68.5L324.2 69.2L325.7 71.9L327 70.1L331.4 71.4L335.7 71.7L338.4 70.3L341.5 78.4L342.1 79.8L340.5 82.1L339.3 86.2L337.8 89.1L336.5 90.1L334.7 88.3L332.2 85.8L328.2 77.9L327.7 78.4L330 84.2L333.4 89.8L337.5 98.4L339.6 101.4L341.4 104.6L346.3 110.7L345.2 111.7L345.4 115.3L351.9 120.2L352.8 121.4L354.6 126.8L353.4 127.8L354.2 133.5L356.2 140.1L358.4 141.5L361.4 143.5L364.6 149.9L366.1 155L369.2 157.7L376.7 162.9L379.8 166.1L382.8 169.3L384.5 171.2L387.2 172.8L388.5 174.6L388.4 176.9L385.2 178.2L387.6 179.7L389.4 180.7L390.5 183L393 185.3L395.7 185.3L400.9 183.9L407 183.3L411.8 181.5L414.6 181.2L416.6 180.2L419.7 180L421.5 179.9L424 179L427 178.5L429.6 176.6L431.7 176.6L431.8 178.1L431.3 181.3L431.3 184.2L430.2 186.2L428.6 192.2L425.9 198.4L422.5 205.5L417.8 213.6L413 219.8L406.5 227.3L401 231.8L392.7 237.3L387.5 241.5L381.5 248.2L380.2 251.2L379 252.5L375.1 254.7L373.7 257L371.6 257.4L370.8 261.3L369.1 263.5L368 267.2L365.8 269ZM423 312.2L424.5 314.5L425.8 318.2L426.7 324.8L428.2 327.4L427.6 330.1L426.6 331.7L424.8 328.5L423.7 330.1L424.8 334.2L424.3 336.6L422.8 337.8L422.4 342.5L420.2 349L417.5 356.6L414.1 367.1L412 374.8L409.5 381.2L405 382.5L400.1 384.9L396.9 383.4L392.5 381.5L391 378.5L390.7 373.6L388.7 369.2L388.2 365.2L389.2 361.3L391.7 360.3L391.8 358.5L394.4 354.3L394.9 350.7L393.6 348.1L392.6 344.6L392.1 339.5L394 336.4L394.8 332.9L397.6 332.7L400.6 331.6L402.7 330.6L405.1 330.5L408.3 327.3L412.8 323.9L414.5 321.2L413.7 318.8L416.1 319.4L419.1 315.6L419.3 312.3L421.1 309.8L423 312.2Z"
          />

          {/* Nigeria */}
          <g className="adm-nigeria">
            <path
              d="M163.6 208.5L164 199.6L163.8 196L164.9 192.6L166.6 190.9L169.3 187.4L168.7 185.9L169.8 183.7L168.5 180.4L168.7 178.6L169.1 173.7L170.7 171.4L171.5 168.2L172.9 167L178.9 166.4L184.4 168.5L186.5 170.5L189.3 170.6L191.9 169.3L198.7 172.1L201.5 172L204.7 169.6L208 169.8L209.6 169L212.6 169.4L216.9 171L221.2 167.9L222.5 168.1L226.2 174.2L227.3 174L229.5 176.2L228.8 177.2L228.6 179.1L223.9 183.4L222.4 186.9L221.6 189.8L220.5 191L219.3 194.9L216.4 197.2L215.5 200L214.3 202.2L213.8 204.5L210 206.4L206.9 204.1L204.8 204.2L201.5 207.4L199.9 207.5L197.2 212.8L195.8 216.7L190.1 218.7L188 218.4L185.8 219.7L181.4 219.5L178.4 216.1L176.6 212.1L172.7 208.4L168.5 208.5L163.6 208.5Z"
              fill="#f5a623"
              stroke="#ffd27a"
              strokeWidth="1"
            />
          </g>

          {/* Routes */}
          <g id="routes">
            <path className="adm-route" d="M196 184 Q272 102 320 79" />
            <path className="adm-route" d="M182 180 Q132 116 108 60" />
            <path className="adm-route" d="M202 190 Q284 164 361 192" />
            <path className="adm-route" d="M203 196 Q284 234 350 249" />
            <path className="adm-route" d="M199 202 Q238 300 303 386" />
            <path className="adm-route" d="M180 203 Q164 210 150 211" />
            <path className="adm-route" d="M202 200 Q310 310 410 346" />
            <path className="adm-route" d="M196 204 Q210 238 232 265" />
          </g>

          {/* Hubs */}
          <g id="hubs">
            <circle className="adm-ring" cx="190" cy="193" r="11" style={{ animationDelay: "0s" }} />
            <circle className="adm-hub-dot" cx="190" cy="193" r="3.4" />
            <g><circle className="adm-ring" cx="321" cy="77" r="8" style={{ animationDelay: "-0.4s" }} /><circle className="adm-hub-dot" cx="321" cy="77" r="2.4" /></g>
            <g><circle className="adm-ring" cx="107" cy="57" r="8" style={{ animationDelay: "-1.2s" }} /><circle className="adm-hub-dot" cx="107" cy="57" r="2.4" /></g>
            <g><circle className="adm-ring" cx="363" cy="193" r="8" style={{ animationDelay: "-2s" }} /><circle className="adm-hub-dot" cx="363" cy="193" r="2.4" /></g>
            <g><circle className="adm-ring" cx="352" cy="250" r="8" style={{ animationDelay: "-0.8s" }} /><circle className="adm-hub-dot" cx="352" cy="250" r="2.4" /></g>
            <g><circle className="adm-ring" cx="304" cy="388" r="8" style={{ animationDelay: "-1.6s" }} /><circle className="adm-hub-dot" cx="304" cy="388" r="2.4" /></g>
            <g><circle className="adm-ring" cx="148" cy="212" r="8" style={{ animationDelay: "-2.4s" }} /><circle className="adm-hub-dot" cx="148" cy="212" r="2.4" /></g>
            <g><circle className="adm-ring" cx="412" cy="348" r="8" style={{ animationDelay: "-2.8s" }} /><circle className="adm-hub-dot" cx="412" cy="348" r="2.4" /></g>
            <g><circle className="adm-ring" cx="233" cy="267" r="8" style={{ animationDelay: "-1s" }} /><circle className="adm-hub-dot" cx="233" cy="267" r="2.4" /></g>
          </g>

          {/* Callouts */}
          <g className="adm-callouts-float">
            <g className="adm-callout">
              <path className="adm-connector" d="M222 176 L460 120 L545 120" />
              <circle className="adm-joint" cx="460" cy="120" r="3.2" />
              <g className="adm-icon" transform="translate(550,102)">
                <circle className="adm-badge" cx="18" cy="18" r="16.5" />
                <circle className="adm-fill-node" cx="18" cy="18" r="2.3" />
                <circle cx="18" cy="9.5" r="2.7" /><circle cx="10.5" cy="23" r="2.7" /><circle cx="25.5" cy="23" r="2.7" />
                <path d="M18 15.7 L18 12.2 M16.1 19.4 L12.8 21.6 M19.9 19.4 L23.2 21.6" />
              </g>
              <text x="596" y="125">Strong Distribution Network</text>
            </g>
            <g className="adm-callout">
              <path className="adm-connector" d="M227 188 L460 184 L545 184" />
              <circle className="adm-joint" cx="460" cy="184" r="3.2" />
              <g className="adm-icon" transform="translate(550,166)">
                <circle className="adm-badge" cx="18" cy="18" r="16.5" />
                <rect x="8.5" y="12.5" width="11.5" height="8.5" rx="1.2" />
                <path d="M20 15 L24.6 15 L27.2 18.2 L27.2 21 L20 21" />
                <circle cx="12.5" cy="23.2" r="2" /><circle cx="23.5" cy="23.2" r="2" />
              </g>
              <text x="596" y="189">Reliable Logistics</text>
            </g>
            <g className="adm-callout">
              <path className="adm-connector" d="M222 204 L460 248 L545 248" />
              <circle className="adm-joint" cx="460" cy="248" r="3.2" />
              <g className="adm-icon" transform="translate(550,230)">
                <circle className="adm-badge" cx="18" cy="18" r="16.5" />
                <circle cx="18" cy="19.8" r="7" />
                <path d="M15.8 9.2 L20.2 9.2 M18 9.2 L18 12.8 M18 19.8 L18 15.6 M18 19.8 L21.2 21.6 M24.4 12.6 L25.8 11.2" />
              </g>
              <text x="596" y="253">Timely Delivery</text>
            </g>
            <g className="adm-callout">
              <path className="adm-connector" d="M210 216 L460 312 L545 312" />
              <circle className="adm-joint" cx="460" cy="312" r="3.2" />
              <g className="adm-icon" transform="translate(550,294)">
                <circle className="adm-badge" cx="18" cy="18" r="16.5" />
                <circle cx="13.6" cy="13.2" r="2.8" /><circle cx="22.4" cy="13.2" r="2.8" />
                <path d="M8.6 24.6 Q8.6 18.4 13.6 18.4 Q16.4 18.4 17.6 20.2 M18.4 20.2 Q19.6 18.4 22.4 18.4 Q27.4 18.4 27.4 24.6" />
              </g>
              <text x="596" y="317">Retailer Partnerships</text>
            </g>
          </g>
        </svg>
      </div>

      {/* L4: light trails canvas */}
      <div className="adm-layer" data-depth="0.75">
        <canvas ref={trailsRef} className="adm-canvas" />
      </div>
    </div>
  );
}
