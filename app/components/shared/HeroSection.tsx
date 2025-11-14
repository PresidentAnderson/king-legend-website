'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function HeroSection({ title, subtitle, children }: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      className="mb-16 flex flex-col items-center gap-6 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="bg-gradient-to-r from-zinc-200 via-white to-zinc-200 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl"
        variants={itemVariants}
      >
        {title}
      </motion.h1>

      {subtitle && (
        <motion.p
          className="max-w-2xl text-xl leading-relaxed text-zinc-400 sm:text-2xl"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
      )}

      {children && <motion.div variants={itemVariants}>{children}</motion.div>}
    </motion.div>
  );
}
