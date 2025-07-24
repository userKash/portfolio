"use client";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const screens = [
  "/screen1.png",
  "/screen6.png",
  "/screen3.png",
  "/screen4.png",
  "/screen2.png",
  "/screen5.png",
];

export default function MobileMockupShowcase() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [70, 0, 0]);
  const rotateX = useSpring(rawRotateX, {
    stiffness: 300,
    damping: 30,
  });

  return (
    <section
      className="w-screen bg-[#0c0c0c]overflow-hidden !mx-0 !px-0 "
      ref={ref}
    >
      <div className="flex justify-center items-center gap-6 flex-wrap perspective-[2000px] pb-32">
        {screens.map((src, i) => (
          <motion.div
            key={i}
            style={{ rotateX }}
            className="w-[140px] sm:w-[180px] origin-bottom"
          >
            <Image
              src={src}
              alt={`screen-${i}`}
              width={350}
              height={800}
              unoptimized // disables Next.js image compression
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
