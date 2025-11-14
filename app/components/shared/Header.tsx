'use client';

import Link from 'next/link';
import Navigation from './Navigation';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
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
        <button className="md:hidden text-white">
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.header>
  );
}
