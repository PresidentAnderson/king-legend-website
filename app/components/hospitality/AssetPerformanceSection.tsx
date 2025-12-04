'use client';

import { motion } from 'framer-motion';
import Card from '../shared/Card';

export default function AssetPerformanceSection() {
  const performanceMetrics = [
    {
      category: 'Revenue Optimization',
      metrics: [
        'RevPAR Optimization',
        'Dynamic Pricing Models',
        'Occupancy Forecasting',
        'Channel Mix Strategy',
      ],
    },
    {
      category: 'Financial Governance',
      metrics: [
        '12-Month Asset Dashboards',
        'Leakage Prevention Systems',
        'Cost Audit Protocols',
        'Vendor Risk Scoring',
      ],
    },
    {
      category: 'Guest Performance',
      metrics: [
        'Resident LTV Tracking',
        'NPS & Satisfaction Scores',
        'Repeat Guest Rate',
        'Ambassador Conversion',
      ],
    },
    {
      category: 'Operational Excellence',
      metrics: [
        'SOPs Compliance Rate',
        'Safety & Cleanliness Scores',
        'Staff Certification Levels',
        'Crisis Response Time',
      ],
    },
  ];

  const assetTypes = [
    {
      name: 'PVT Hostel (Flagship)',
      description: 'Full-service community-driven hostels with complete KLX-Ops deployment',
      features: ['150+ beds', 'Full tech stack', 'Academy integration', 'Ambassador program'],
    },
    {
      name: 'PVT Micro',
      description: 'Compact urban footprints with essential PVT experience modules',
      features: ['30-80 beds', 'Core PMS', 'Essential SOPs', 'Digital-first'],
    },
    {
      name: 'PVT Hybrid',
      description: 'Mixed-use properties combining hospitality with co-living or coworking',
      features: ['Flexible inventory', 'Extended stays', 'Community spaces', 'Partnership revenue'],
    },
    {
      name: 'PVT Extended Stay',
      description: 'Long-term resident-focused properties with membership models',
      features: ['30+ day stays', 'Member benefits', 'Workspace access', 'Local integration'],
    },
  ];

  const managementAgreement = [
    { item: 'Term Structure', value: '10-15 years with renewal options' },
    { item: 'Base Fee', value: '3-5% of gross revenue' },
    { item: 'Incentive Fee', value: 'Tied to NOI or RevPAR thresholds' },
    { item: 'Tech Licensing', value: 'Aurora PMS + system integration' },
    { item: 'Performance Standards', value: 'Monthly board-style reporting' },
    { item: 'Brand Compliance', value: 'PVT experience arc enforcement' },
  ];

  return (
    <section className="py-24">
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
            Asset Management & Performance
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-400">
            Turning design, technology, and brand philosophies into financially and operationally
            performant reality across the PVT ecosystem.
          </p>
        </motion.div>

        {/* Performance Metrics Grid */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {performanceMetrics.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <h3 className="mb-4 text-lg font-bold text-white">{category.category}</h3>
                <ul className="space-y-2">
                  {category.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-start text-sm text-zinc-400">
                      <svg
                        className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {metric}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Asset Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="mb-8 text-center text-3xl font-bold text-white">
            Brand Extensions & Asset Classes
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {assetTypes.map((asset, index) => (
              <Card key={index} className="group hover:border-zinc-700">
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="text-xl font-bold text-white">{asset.name}</h4>
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </div>
                <p className="mb-4 text-sm text-zinc-400">{asset.description}</p>
                <div className="flex flex-wrap gap-2">
                  {asset.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-400"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Management Agreement Structure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-2 border-zinc-700">
            <div className="mb-6 text-center">
              <h3 className="mb-2 text-2xl font-bold text-white">Management Agreement Framework</h3>
              <p className="text-sm text-zinc-400">
                Structured partnership model for asset owners and investors
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {managementAgreement.map((term, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between rounded-lg border border-zinc-800 bg-zinc-900/30 p-4"
                >
                  <div className="flex-1">
                    <div className="mb-1 text-sm font-semibold text-zinc-300">{term.item}</div>
                    <div className="text-xs text-zinc-500">{term.value}</div>
                  </div>
                  <svg className="h-5 w-5 text-zinc-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 p-4 text-center">
              <p className="text-sm text-zinc-300">
                <span className="font-semibold text-white">Operator + System Integrator:</span> Every
                agreement structures King Legend as both operational excellence partner and technology
                backbone provider
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
