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
            className="mb-12 flex flex-col items-center gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="bg-gradient-to-r from-zinc-200 via-white to-zinc-200 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl md:text-8xl"
              variants={itemVariants}
            >
              King Legend
            </motion.h1>

            <motion.div
              className="h-1 w-32 rounded-full bg-gradient-to-r from-transparent via-zinc-400 to-transparent"
              variants={dividerVariants}
            />

            <motion.p
              className="max-w-2xl text-xl leading-relaxed text-zinc-400 sm:text-2xl"
              variants={itemVariants}
            >
              Hospitality Management Excellence
            </motion.p>

            <motion.p
              className="max-w-3xl text-base leading-relaxed text-zinc-500 sm:text-lg"
              variants={itemVariants}
            >
              The operational engine of the PVT ecosystem — delivering disciplined hospitality management,
              data-driven performance, and brand-aligned guest experience across every asset under our care.
            </motion.p>
          </motion.div>

          {/* Tagline */}
          <motion.div
            className="mb-16 max-w-3xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <p className="text-lg leading-8 text-zinc-500">
              "PVT Hostel builds the frontier. King Legend operationalizes it at scale."
            </p>
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            id="features-section"
            className="grid w-full max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <FeatureCard
              title="KLX-Ops Framework"
              description="Proprietary operating system: Design → Deploy → Operate → Optimize lifecycle with WisdomOS integration."
            />
            <FeatureCard
              title="Performance Excellence"
              description="RevPAR optimization, 12-month asset dashboards, and data-driven hospitality at scale."
            />
            <FeatureCard
              title="Brand Governance"
              description="Guardian of PVT experience across all assets with predictable, trust-ready quality."
            />
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-16 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <Button onClick={openContactModal} variant="primary">
              Get Started
            </Button>
            <Button onClick={handleLearnMore} variant="secondary">
              Learn More
            </Button>
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
