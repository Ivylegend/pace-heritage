"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type MotionProps } from "framer-motion";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const ease = [0.19, 1, 0.22, 1] as const;

/* ─── FadeIn ──────────────────────────────────────────────────── */
type FadeInProps = ComponentPropsWithoutRef<"div"> &
  MotionProps & {
    children: ReactNode;
    delay?: number;
    as?: "div" | "article";
    /** When true, animates on scroll into view instead of on mount */
    animateOnScroll?: boolean;
  };

export function FadeIn({
  children,
  className,
  delay = 0,
  as = "div",
  animateOnScroll = false,
  ...props
}: FadeInProps) {
  const Component = as === "article" ? motion.article : motion.div;
  const base = { initial: { opacity: 0, y: 28 } };
  const scrollProps = {
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.72, delay, ease },
  };
  const mountProps = {
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.72, delay, ease },
  };

  return (
    <Component
      className={className}
      {...base}
      {...(animateOnScroll ? scrollProps : mountProps)}
      {...props}
    >
      {children}
    </Component>
  );
}

/* ─── SlideIn ─────────────────────────────────────────────────── */
type SlideInProps = ComponentPropsWithoutRef<"div"> &
  MotionProps & {
    children: ReactNode;
    delay?: number;
    from?: "left" | "right" | "bottom";
  };

export function SlideIn({
  children,
  className,
  delay = 0,
  from = "bottom",
  ...props
}: SlideInProps) {
  const initial =
    from === "left"
      ? { opacity: 0, x: -40 }
      : from === "right"
        ? { opacity: 0, x: 40 }
        : { opacity: 0, y: 40 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.72, delay, ease }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ─── Float ───────────────────────────────────────────────────── */
type FloatProps = ComponentPropsWithoutRef<"div"> &
  MotionProps & {
    children: ReactNode;
  };

export function Float({ children, className, ...props }: FloatProps) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ─── CountUp ─────────────────────────────────────────────────── */
export function CountUp({
  to,
  suffix = "",
  duration = 1.8,
  className,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / (duration * 1000), 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * to));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
