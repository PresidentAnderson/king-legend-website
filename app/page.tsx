'use client';

import { motion } from 'framer-motion';
import FeatureCard from './components/FeatureCard';
import Button from './components/shared/Button';
import Modal from './components/shared/Modal';
import ContactForm from './components/contact/ContactForm';
import PortfolioSection from './components/shared/PortfolioSection';
import TestimonialsSection from './components/shared/TestimonialsSection';
import StatsSection from './components/shared/StatsSection';
import CTASection from './components/shared/CTASection';
import KLXOpsSection from './components/hospitality/KLXOpsSection';
import AssetPerformanceSection from './components/hospitality/AssetPerformanceSection';
import WorkforceSection from './components/hospitality/WorkforceSection';
import { useModal } from './lib/context/ModalContext';

export default function Home() {
  const { isContactModalOpen, openContactModal, closeContactModal } = useModal();

  const handleLearnMore = () => {
    const featuresSection = document.getElementById('features-section');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

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

  const dividerVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
    },
  };

  return (
    <>
      <motion.div
        className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-zinc-900 font-sans"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <main className="flex flex-col items-center justify-center px-6 py-24 text-center">
          {/* Hero Section */}
          <motion.div
            className="mb-16 flex flex-col items-center gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="bg-gradient-to-r from-zinc-200 via-white to-zinc-200 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl"
              variants={itemVariants}
            >
              Hospitality Management Excellence
            </motion.h1>

            <motion.div
              className="h-1 w-32 rounded-full bg-gradient-to-r from-transparent via-zinc-400 to-transparent"
              variants={dividerVariants}
            />

            <motion.p
              className="max-w-4xl text-center text-xl leading-relaxed text-zinc-300 sm:text-2xl"
              variants={itemVariants}
            >
              Where disciplined operations, intelligent systems, and cultural architecture converge to deliver PVT-level performance across every asset we manage.
            </motion.p>
          </motion.div>

          {/* Executive Positioning */}
          <motion.div
            className="mb-20 max-w-4xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h2 className="mb-6 text-center text-3xl font-bold text-white sm:text-4xl">
              The Operational Engine of the PVT Ecosystem
            </h2>
            <div className="mb-6 text-center">
              <p className="text-xl text-zinc-400">PVT builds the frontier.</p>
              <p className="text-2xl font-semibold text-white">King Legend operationalizes it at scale.</p>
            </div>
            <p className="text-center text-lg leading-8 text-zinc-400">
              We transform hospitality assets into intelligent, financially optimized, brand-aligned operations powered by the KLX-Ops Framework and integrated with Aurora PMS and WisdomOS culture architecture.
            </p>
            <div className="mt-8 rounded-2xl border border-zinc-700 bg-zinc-900/50 p-6 text-center">
              <p className="text-lg text-zinc-300">
                <span className="font-bold text-white">Our mandate is simple:</span>
                <br />
                Precision in execution. Predictability in performance. Integrity in experience.
              </p>
            </div>
          </motion.div>

          {/* Philosophy Statement */}
          <motion.div
            id="philosophy-section"
            className="mb-16 w-full max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <div className="rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-900 to-black p-8 text-center">
              <p className="text-2xl font-semibold italic text-zinc-300">
                "Hospitality has historically been intuition-driven.
                <br />
                <span className="text-white">We rebuilt it as a systems-first operating discipline</span>
                <br />
                that feels like premium service."
              </p>
            </div>
          </motion.div>

        </main>
      </motion.div>

      {/* KLX-Ops Framework Section */}
      <KLXOpsSection />

      {/* Asset Management & Performance */}
      <AssetPerformanceSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Workforce & Culture System */}
      <WorkforceSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Final CTA Section */}
      <CTASection />

      {/* Contact Modal */}
      <Modal isOpen={isContactModalOpen} onClose={closeContactModal} title="Get Started">
        <ContactForm onSuccess={closeContactModal} />
      </Modal>
    </>
  );
}
