'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link key={link.href} href={link.href} className="relative">
            <motion.span
              className={`text-sm font-medium transition-colors ${
                isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
            </motion.span>
            {isActive && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                layoutId="activeNav"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
