'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/app/components/shared/HeroSection';
import Card from '@/app/components/shared/Card';
import Button from '@/app/components/shared/Button';
import { useModal } from '@/app/lib/context/ModalContext';

export default function ServicesPage() {
  const { openContactModal } = useModal();

  const services = [
    {
      title: 'Premium Brand Development',
      description: 'Strategic brand positioning, visual identity design, and comprehensive brand guidelines.',
      features: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Voice & Messaging'],
    },
    {
      title: 'Entertainment Management',
      description: 'Artist development, career strategy, and entertainment industry connections.',
      features: ['Artist Development', 'Career Strategy', 'Industry Partnerships', 'Growth Planning'],
    },
    {
      title: 'Campaign Activation & Events',
      description: 'Launch events, brand activations, and high-profile entertainment experiences.',
      features: ['Launch Events', 'Brand Activations', 'Experiential Marketing', 'Event Production'],
    },
    {
      title: 'Digital & Social Strategy',
      description: 'Social media management, influencer partnerships, and content strategy.',
      features: ['Social Management', 'Influencer Marketing', 'Content Strategy', 'Community Building'],
    },
    {
      title: 'Production & Creative Services',
      description: 'Music/video production coordination, content creation, and creative direction.',
      features: ['Production Coordination', 'Content Creation', 'Creative Direction', 'Post-Production'],
    },
    {
      title: 'Entertainment Consulting',
      description: 'Industry guidance, partnership development, and market positioning.',
      features: ['Industry Guidance', 'Partnership Development', 'Market Analysis', 'Strategic Advisory'],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understand your vision, goals, and challenges through in-depth consultation.',
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop comprehensive, tailored approach aligned with your objectives.',
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Implement with excellence and precision, ensuring quality at every stage.',
    },
    {
      step: '04',
      title: 'Growth',
      description: 'Measure, optimize, and scale success through ongoing partnership.',
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive brand and entertainment solutions tailored to your vision"
      />

      {/* Services Grid */}
      <section className="mb-24">
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Card className="h-full">
                <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mb-4 text-sm text-zinc-400">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zinc-500">
                      <svg
                        className="mr-2 h-4 w-4 text-zinc-400"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">Our Process</h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            A proven four-step approach to delivering exceptional results
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <div className="mb-4 text-4xl font-bold text-zinc-700">{item.step}</div>
                <h3 className="mb-2 text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Ready to Get Started?</h2>
            <p className="mb-8 text-lg text-zinc-400">
              Let's discuss how we can bring your vision to life
            </p>
            <Button onClick={openContactModal} variant="primary" size="lg">
              Start Your Project
            </Button>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
