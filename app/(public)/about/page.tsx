'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/app/components/shared/HeroSection';
import Card from '@/app/components/shared/Card';

export default function AboutPage() {
  const values = [
    {
      title: 'Innovation',
      description: 'Pioneering new frontiers in entertainment and branding',
    },
    {
      title: 'Excellence',
      description: 'Uncompromising quality in every deliverable',
    },
    {
      title: 'Authenticity',
      description: 'Genuine connections between brands and audiences',
    },
    {
      title: 'Vision',
      description: 'Strategic thinking that creates lasting impact',
    },
    {
      title: 'Collaboration',
      description: 'Empowering partners to achieve extraordinary results',
    },
  ];

  const milestones = [
    { year: '2020', event: 'King Legend founded with vision for premium brand experiences' },
    { year: '2021', event: 'First major brand partnerships and artist collaborations' },
    { year: '2022', event: 'Expansion into entertainment management and production' },
    { year: '2023', event: 'Recognition for innovative campaigns and industry impact' },
    { year: '2024', event: 'Continued growth and vision for the future' },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <HeroSection
        title="About King Legend"
        subtitle="Creating extraordinary experiences at the intersection of innovation, creativity, and excellence"
      />

      {/* Mission & Vision */}
      <section className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">Our Mission</h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400">
            King Legend is dedicated to creating premium brand experiences and entertainment
            excellence. We partner with visionary artists, brands, and creators to build lasting
            legacies at the intersection of creativity, strategy, and innovation.
          </p>
        </motion.div>

        {/* Core Values Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
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
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Card>
                <h3 className="mb-2 text-xl font-semibold text-white">{value.title}</h3>
                <p className="text-sm text-zinc-400">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">Our Journey</h2>
        </motion.div>

        <div className="relative space-y-8">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-zinc-800" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="relative pl-20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Dot */}
              <div className="absolute left-6 top-2 h-5 w-5 rounded-full border-4 border-zinc-800 bg-white" />

              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <div className="mb-2 text-sm font-semibold text-zinc-400">{milestone.year}</div>
                <p className="text-white">{milestone.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">Why Choose Us</h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-zinc-400">
            We bring together industry expertise, creative vision, and strategic thinking to deliver
            results that exceed expectations.
          </p>

          <Card className="text-left">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">Industry Experience</h3>
                <p className="text-zinc-400">
                  Years of expertise in brand development, entertainment management, and creative
                  strategy across diverse markets and audiences.
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">Proven Results</h3>
                <p className="text-zinc-400">
                  Track record of successful campaigns, partnerships, and projects that have created
                  measurable impact and lasting value.
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">Tailored Approach</h3>
                <p className="text-zinc-400">
                  Custom strategies designed specifically for your unique goals, challenges, and
                  vision for success.
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">End-to-End Support</h3>
                <p className="text-zinc-400">
                  Comprehensive services from concept to execution, ensuring seamless delivery and
                  exceptional outcomes.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
