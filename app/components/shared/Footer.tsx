'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: 'IG' },
    { name: 'Twitter', href: '#', icon: 'X' },
    { name: 'LinkedIn', href: '#', icon: 'in' },
  ];

  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand Section */}
          <div>
            <h3 className="bg-gradient-to-r from-zinc-200 via-white to-zinc-200 bg-clip-text text-xl font-bold text-transparent">
              King Legend
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              Premium Brand & Entertainment Excellence
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <motion.span
                      className="text-sm text-zinc-400 hover:text-white"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-sm text-zinc-400 hover:border-zinc-500 hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-zinc-800 pt-8 text-center">
          <p className="text-sm text-zinc-600">
            &copy; {currentYear} King Legend, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
