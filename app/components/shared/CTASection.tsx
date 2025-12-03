'use client';

import { motion } from 'framer-motion';
import Button from './Button';
import { useModal } from '@/app/lib/context/ModalContext';

export default function CTASection() {
  const { openContactModal } = useModal();

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900 to-black p-12 text-center md:p-16"
        >
          {/* Background Gradient Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/20 to-transparent" />

          <div className="relative">
            <motion.h2
              className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to Build Your{' '}
              <span className="bg-gradient-to-r from-zinc-200 via-white to-zinc-200 bg-clip-text text-transparent">
                Legend
              </span>
              ?
            </motion.h2>

            <motion.p
              className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Let's collaborate to create extraordinary brand experiences and entertainment
              excellence that leave a lasting impact.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button onClick={openContactModal} variant="primary" size="lg">
                Start Your Project
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Services
              </Button>
            </motion.div>

            <motion.div
              className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>24-Hour Response</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Tailored Solutions</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
