'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 50, suffix: '+', label: 'Successful Projects' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 5, suffix: '.0', label: 'Average Rating' },
  { value: 25, suffix: '+', label: 'Industry Partners' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-zinc-900">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Proven Excellence
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Numbers that speak to our commitment and results
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 text-center backdrop-blur-sm"
            >
              <div className="mb-3 text-5xl font-bold text-white">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-zinc-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
