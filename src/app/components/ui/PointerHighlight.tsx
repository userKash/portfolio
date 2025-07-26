"use client";

import { cn } from "@/app/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface PointerHighlightProps {
  children: React.ReactNode;
  rectangleClassName?: string;
  pointerClassName?: string;
  containerClassName?: string;
}

export function PointerHighlight({
  children,
  rectangleClassName,
  pointerClassName,
  containerClassName,
}: PointerHighlightProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { amount: 0.7 });

  return (
    <span ref={ref} className={cn("relative inline-block", containerClassName)}>
      {/* Rectangle box */}
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        animate={
          isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }
        }
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformOrigin: "left" }}
        className={cn("absolute inset-0 rounded-lg border", rectangleClassName)}
      />

      {/* Cursor triangle */}
      <motion.span
        initial={{ y: -6, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: -6, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}
        className={cn(
          "absolute left-1/2 -translate-x-1/2 bottom-[-5px] w-0 h-0 border-x-[6px] border-x-transparent border-t-[6px] border-t-current",
          pointerClassName
        )}
      />

      {/* Text */}
      <span className="relative z-10 px-1">{children}</span>
    </span>
  );
}
