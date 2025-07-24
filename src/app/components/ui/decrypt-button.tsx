"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

function decryptText(target: string, step = 0): string {
  return target
    .split("")
    .map((char, i) => {
      if (i < step) return char;
      return characters[Math.floor(Math.random() * characters.length)];
    })
    .join("");
}

export function DecryptButton({
  text = "VIEW",
  icon = "🔍",
}: {
  text: string;
  icon?: string;
}) {
  const [display, setDisplay] = useState(text);

  const handleHover = () => {
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setDisplay(decryptText(text, step));
      if (step >= text.length) clearInterval(interval);
    }, 30);
  };

  return (
    <motion.button
      onMouseEnter={handleHover}
      onMouseLeave={() => setDisplay(text)}
      className="w-full sm:w-auto px-6 py-3 border border-white/30 rounded-lg text-white font-mono text-sm tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:border-white hover:shadow-[0_0_0_1px_white]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <span>{icon}</span>
      <span>{display}</span>
    </motion.button>
  );
}
