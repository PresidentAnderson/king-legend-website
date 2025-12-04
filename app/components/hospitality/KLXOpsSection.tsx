'use client';

import { motion } from 'framer-motion';
import Card from '../shared/Card';

export default function KLXOpsSection() {
  const framework = [
    {
      phase: '01',
      title: 'Design',
      description: 'Strategic planning, market analysis, and experience architecture aligned with PVT brand standards.',
      features: ['Market Scouting', 'Feasibility Studies', 'Brand Guidelines', 'Experience Modules'],
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      phase: '02',
      title: 'Deploy',
      description: 'Rapid implementation with tech stack integration, staff onboarding, and system activation.',
      features: ['Aurora PMS Integration', 'Staff Certification', 'Tech Deployment', 'Vendor Partnerships'],
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      phase: '03',
      title: 'Operate',
      description: 'Daily excellence through standardized operations, guest experience delivery, and continuous quality.',
      features: ['Guest Flow Management', 'Revenue Optimization', 'Compliance Audits', 'Brand Standards'],
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      phase: '04',
      title: 'Optimize',
      description: 'Data-driven refinement, performance tracking, and continuous improvement across all metrics.',
      features: ['Analytics Dashboard', 'Performance Reporting', 'Leakage Prevention', 'LTV Tracking'],
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  const integrations = [
    { name: 'PVT Aurora PMS', status: 'Core System' },
    { name: 'WisdomOS', status: 'Culture Layer' },
    { name: 'PVT Check-in System', status: 'Guest Flow' },
    { name: 'GA4 + Tag Manager', status: 'Analytics' },
    { name: 'Resident App', status: 'Guest Engagement' },
    { name: 'Ambassador Program', status: 'Community' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-zinc-900 to-black">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            KLX-Ops Framework v1.0
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-400">
            Our proprietary operating system transforms hospitality operations into a disciplined,
            technology-first approach that feels like premium service.
          </p>
          <div className="mt-6 inline-block rounded-full border border-zinc-700 bg-zinc-900/50 px-6 py-2">
            <p className="text-sm text-zinc-300">
              <span className="font-semibold text-white">Philosophy:</span>{' '}
              Operates like technology, feels like hospitality
            </p>
          </div>
        </motion.div>

        {/* Framework Steps */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {framework.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                {/* Icon */}
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 text-zinc-400">
                  {step.icon}
                </div>

                {/* Phase Number */}
                <div className="mb-2 text-sm font-bold text-zinc-600">{step.phase}</div>

                {/* Title */}
                <h3 className="mb-3 text-2xl font-bold text-white">{step.title}</h3>

                {/* Description */}
                <p className="mb-4 text-sm text-zinc-400">{step.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {step.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs text-zinc-500">
                      <svg
                        className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-zinc-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* System Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <h3 className="mb-6 text-2xl font-bold text-white">Native Technology Integrations</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/50 p-4"
                >
                  <span className="font-medium text-white">{integration.name}</span>
                  <span className="rounded-full bg-green-900/30 px-3 py-1 text-xs font-medium text-green-400">
                    {integration.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-blue-900/30 bg-blue-900/10 p-4">
              <p className="text-sm text-blue-300">
                <span className="font-semibold">Data-Emitting Assets:</span> Every property becomes a
                continuous feedback loop powering real-time optimization and strategic intelligence.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
