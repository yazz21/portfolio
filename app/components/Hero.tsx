"use client"; 

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import TypewriterEffect from './TypewriterEffect';

export default function Hero() {
  return (
    <section
      id="hero"
      className="text-center flex flex-col items-center justify-center"
      style={{ minHeight: 'calc(100dvh - 50px)' }} // Adjusted height calculation based on header/footer
    >
      {/* Profile Picture */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image src="/yosef.png" quality={100} width={150} height={150} alt="Yosef Abate Profile Picture" className="rounded-full mx-auto border-2 border-[var(--border)] w-40 h-40 object-cover mb-8" />
  
      </motion.div>
      {/* Name/Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[var(--foreground)] h-12">
        <TypewriterEffect text="Yosef Abate" delay={0.4} />
      </h2>
      {/* Subtitle/Specialization */}
      <motion.p
        className="text-md md:text-lg max-w-xl mx-auto mb-6 text-[var(--accent)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
         Full-Stack Developer | Next.js | React | Angular | .NET
      </motion.p>
      {/* Social Media Links */}
      <motion.div
        className="flex justify-center space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Link href="https://github.com/yazz21" target="_blank" rel="noopener noreferrer"
           className="text-[var(--link)] hover:text-[var(--foreground)] transition-colors duration-200 text-base">
          [GitHub]
        </Link>
        <Link href="https://linkedin.com/in/yoseph-abate" target="_blank" rel="noopener noreferrer"
           className="text-[var(--link)] hover:text-[var(--foreground)] transition-colors duration-200 text-base">
          [LinkedIn]
        </Link>
      </motion.div>
    </section>
  );
}