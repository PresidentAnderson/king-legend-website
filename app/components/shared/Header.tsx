'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from './Navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" onClick={closeMobileMenu}>
            <motion.h1
              className="bg-gradient-to-r from-zinc-200 via-white to-zinc-200 bg-clip-text text-2xl font-bold tracking-tight text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              King Legend
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <Navigation />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <motion.svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={isMobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-[73px] left-0 right-0 z-40 border-b border-zinc-800 bg-black/95 backdrop-blur-lg md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Navigation onLinkClick={closeMobileMenu} isMobile={true} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
