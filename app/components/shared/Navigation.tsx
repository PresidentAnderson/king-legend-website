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

interface NavigationProps {
  onLinkClick?: () => void;
  isMobile?: boolean;
}

export default function Navigation({ onLinkClick, isMobile = false }: NavigationProps) {
  const pathname = usePathname();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  if (isMobile) {
    return (
      <motion.nav
        className="flex flex-col py-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <motion.div key={link.href} variants={itemVariants}>
              <Link
                href={link.href}
                onClick={onLinkClick}
                className={`block border-l-4 px-6 py-4 text-base font-medium transition-colors ${
                  isActive
                    ? 'border-white bg-zinc-900/50 text-white'
                    : 'border-transparent text-zinc-400 hover:border-zinc-700 hover:bg-zinc-900/30 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          );
        })}
      </motion.nav>
    );
  }

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
