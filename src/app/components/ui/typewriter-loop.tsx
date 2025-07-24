"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const words = ["DEVELOPER", "DESIGNER"];

export const TypewriterLoop = ({
  className,
  textClassName,
  cursorClassName,
}: {
  className?: string;
  textClassName?: string;
  cursorClassName?: string;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const typingSpeed = isDeleting ? 80 : 150;

    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? current.slice(0, displayText.length - 1)
        : current.slice(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <div
      className={clsx(
        "text-4xl sm:text-6xl font-bold text-center leading-tight",
        className
      )}
    >
      <span className={clsx("text-[#0099ff]", textClassName)}>
        {displayText}
      </span>
      <motion.span
        className={clsx(
          "inline-block w-[4px] h-6 bg-blue-500 ml-1",
          cursorClassName
        )}
        animate={{ opacity: [0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
      />
    </div>
  );
};
