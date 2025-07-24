"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/app/lib/utils";

export function FloatingNav() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (typeof previous === "number" && latest > previous && latest > 100) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={cn("fixed top-10 inset-x-0 flex justify-center z-50")}
    >
      <div className="rounded-full border border-white/[0.1] bg-[#0c0c0c]/50 backdrop-blur-lg px-4 py-2 text-sm text-white shadow-lg flex gap-6 items-center">
        <Link href="/">
          <Image
            src="/ownlogo.png"
            alt="logo"
            width={28}
            height={28}
            className="rounded-full"
          />
        </Link>

        <Link href="/" className="hover:text-blue-400 transition">
          Home
        </Link>
        <Link href="#projects" className="hover:text-blue-400 transition">
          Projects
        </Link>
        <Link href="/about" className="hover:text-blue-400 transition">
          About
        </Link>
        <Link
          href="https://github.com/userKash?tab=repositories"
          target="_blank"
          className="hover:text-gray-400 transition"
        >
          <svg
            className="w-5 h-4 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 .297a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.78-1.34-1.78-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.9 0-1.3.47-2.36 1.24-3.19-.12-.3-.54-1.51.12-3.14 0 0 1-.32 3.3 1.22a11.5 11.5 0 0 1 6 0C17 4.42 18 4.74 18 4.74c.66 1.63.24 2.84.12 3.14.77.83 1.24 1.89 1.24 3.19 0 4.59-2.81 5.6-5.49 5.89.44.38.81 1.11.81 2.24v3.32c0 .32.21.7.83.58A12 12 0 0 0 12 .297Z"
            />
          </svg>
        </Link>
        <Link
          href="https://www.linkedin.com/in/klumabi/"
          target="_blank"
          className="hover:text-blue-400 transition"
        >
          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H13v2.75h.08c.75-1.4 2.57-2.75 5.42-2.75C22.12 8 24 10 24 14.18V24h-5v-8.3c0-1.98-.04-4.52-2.75-4.52-2.75 0-3.17 2.15-3.17 4.36V24H7.5V8z" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
