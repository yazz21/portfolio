"use client"; 

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero({ accentColor, textColor, linkColor }) {
  return (
    <section
      id="hero"
      className="text-center flex flex-col items-center justify-center"
      style={{ minHeight: 'calc(100vh - 50px)' }} // Adjusted height calculation based on header/footer
    >
      {/* Profile Picture */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image src="/yosef.png" quality={100} width={400} height={400}  alt="Yosef Abate Profile Picture" className="rounded-full  mx-auto border-2"
          style={{ borderColor: accentColor  }}/>
  
      </motion.div>
      {/* Name/Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{ color: textColor }}
      >
        Yosef Abate
      </motion.h2>
      {/* Subtitle/Specialization */}
      <motion.p
        className="text-md md:text-lg max-w-xl mx-auto mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ color: accentColor }}
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
        < Link href="https://github.com/yazz21" target="_blank" rel="noopener noreferrer"
           style={{ color: linkColor }}
           className="hover:text-white transition-colors duration-200 text-base">
          [GitHub]
        </Link>
        <Link href="https://linkedin.com/in/yoseph-abate" target="_blank" rel="noopener noreferrer"
           style={{ color: linkColor }}
           className="hover:text-white transition-colors duration-200 text-base">
          [LinkedIn]
        </Link>
      </motion.div>
    </section>
  );
}