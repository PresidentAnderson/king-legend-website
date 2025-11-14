'use client';

import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <motion.div
      className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm transition-all hover:border-zinc-700 hover:bg-zinc-900/80"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
    </motion.div>
  );
}
