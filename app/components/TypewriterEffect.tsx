"use client";

import { motion } from "framer-motion";

interface TypewriterEffectProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TypewriterEffect({ text, className = "", delay = 0 }: TypewriterEffectProps) {
  // Split the text into characters
  const characters = Array.from(text);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  const childVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      style={{ display: "inline-block" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {characters.map((char, index) => (
        <motion.span key={index} variants={childVariants}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="inline-block ml-1 bg-current w-[2px] h-[1em] align-middle"
      />
    </motion.span>
  );
}
