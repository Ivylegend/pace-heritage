"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type FadeInProps = ComponentPropsWithoutRef<"div"> &
  MotionProps & {
    children: ReactNode;
    delay?: number;
    as?: "div" | "article";
  };

export function FadeIn({ children, className, delay = 0, as = "div", ...props }: FadeInProps) {
  const Component = as === "article" ? motion.article : motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.72, delay, ease: [0.19, 1, 0.22, 1] }}
      {...props}
    >
      {children}
    </Component>
  );
}

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
