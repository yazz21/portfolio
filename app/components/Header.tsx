"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const mobileMenuVariants = {
  open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 20, damping: 20 } },
  closed: { opacity: 0, x: "-100%", transition: { duration: 0.3 } },
};

interface HeaderProps {
  navItems: { label: string; href: string }[];
}

export default function Header({ navItems }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="py-4 sticky top-0 z-50 bg-[var(--background)] border-b border-dashed border-[var(--accent)] transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Name/Brand */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/#hero" className={`text-xl font-bold text-[var(--foreground)]`}>
            YOSEF_ABATE $ <span className="animate-pulse">_</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-5">
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
                  className="text-[var(--foreground)] hover:text-[var(--link)] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
          <ThemeSwitcher />
        </nav>

        {/* Mobile Menu Button & Theme Switcher */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeSwitcher />
          <button
            onClick={toggleMobileMenu}
            className="text-xl z-50 focus:outline-none relative"
          >
            {isMobileMenuOpen ? (
              <Image src={"/close.png"} width={22} height={22} alt={""} className="invert dark:invert-0" />
            ) : (
              <Image src={"/menu.png"} width={22} height={22} alt={""} className="invert dark:invert-0" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              className="fixed top-0 left-0 h-full w-screen bg-[var(--background)] bg-opacity-95 backdrop-blur-md flex flex-col justify-center items-center space-y-8 z-40 md:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-lg"
                >
                  <Link
                    href={item.href}
                    className="text-[var(--foreground)] hover:text-[var(--link)] transition-colors duration-200"
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}