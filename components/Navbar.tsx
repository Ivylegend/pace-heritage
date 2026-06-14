"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation } from "@/lib/site-data";

const linkClass =
  "relative text-sm font-medium text-white/90 transition hover:text-white after:absolute after:-bottom-2.5 after:left-0 after:h-0.5 after:w-0 after:bg-[#f3b23f] after:transition-all hover:after:w-full";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 z-50 transition-all duration-500 ${scrolled ? "top-2" : "top-[18px]"}`}
    >
      <motion.div
        className={[
          "mx-auto flex w-[min(1180px,calc(100%-40px))] items-center justify-between gap-5 rounded-[20px] border px-5 py-3.5 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-[18px] transition-all duration-500 max-sm:w-[calc(100%-28px)] max-sm:rounded-2xl max-sm:px-3.5",
          scrolled
            ? "min-h-16 border-[#d99524]/30 bg-[#021025]/90"
            : "min-h-[78px] border-white/15 bg-[#021025]/60",
        ].join(" ")}
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
      >
        <Link
          className="relative block h-12 w-[210px] max-sm:w-[178px]"
          href="/"
          aria-label="Pace Heritage home"
        >
          <Image
            className="h-full w-full object-cover object-left"
            src="/images/ph-logo.png"
            alt="Pace Heritage"
            width={370}
            height={74}
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <Link className={linkClass} key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          className="hidden min-h-12 items-center justify-center gap-3 rounded-[10px] bg-linear-to-br from-[#c8791c] to-[#f3b23f] px-5 text-sm font-medium text-white shadow-[0_14px_34px_rgba(217,149,36,0.32)] transition hover:-translate-y-0.5 hover:from-[#d98a2a] hover:to-[#f5c14f] hover:shadow-[0_18px_44px_rgba(217,149,36,0.36)] lg:inline-flex"
          href="#contact"
        >
          Request Quote
          <ArrowRight className="h-4 w-4" />
        </Link>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white lg:hidden"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="grid gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>
      </motion.div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="absolute left-5 right-5 top-[calc(100%+10px)] grid overflow-hidden rounded-2xl border border-white/15 bg-[#021025]/95 shadow-2xl backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            {navigation.map((item) => (
              <Link
                className="bg-white/3 px-5 py-4 font-medium text-white"
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="bg-white/3 px-5 py-4 font-medium text-white"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              Request Quote
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
