'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      className={`rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm ${className}`}
      whileHover={hover ? { scale: 1.02, borderColor: '#52525b' } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
