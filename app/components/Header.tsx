"use client"; 

import Link from 'next/link';
import { motion } from 'framer-motion';

// Header component receives navigation items and colors as props
export default function Header({ navItems, bgColor, accentColor, textColor }) {
  return (
    <header
      style={{ backgroundColor: bgColor, borderBottom: `1px solid ${accentColor}` }}
      className="py-4 sticky top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Name/Brand */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/#hero" className="text-xl font-bold" style={{ color: textColor }}>
            YOSEF_ABATE $ <span className="animate-pulse">_</span>
          </Link>
        </motion.div>
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-5">
            {navItems.map((item) => (
              <motion.li
                key={item.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm md:text-base"
              >
                <Link
                  href={item.href}
                  style={{ color: textColor }}
                  className="hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}