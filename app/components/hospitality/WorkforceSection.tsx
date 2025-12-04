'use client';

import { motion } from 'framer-motion';
import Card from '../shared/Card';

export default function WorkforceSection() {
  const talentPipeline = [
    {
      stage: 'Recruitment',
      description: 'Strategic talent acquisition through Ambassador-to-Staff pipeline and industry partnerships',
      features: [
        'Ambassador Program Graduates',
        'Industry Partnerships',
        'Local Talent Scouting',
        'Cultural Fit Assessment',
      ],
    },
    {
      stage: 'Certification',
      description: 'Comprehensive training through PVT Hostel Academy with AI-augmented learning',
      features: [
        'PVT Academy Curriculum',
        'AI-Enhanced Training',
        'Certification Pathways',
        'Continuous Education',
      ],
    },
    {
      stage: 'Development',
      description: 'Ongoing growth with performance tracking and advancement opportunities',
      features: [
        'Performance Dashboards',
        'Skill Development Programs',
        'Leadership Pathways',
        'Cross-Property Mobility',
      ],
    },
    {
      stage: 'Culture',
      description: 'WisdomOS-powered culture architecture rooted in transformation principles',
      features: [
        'WisdomOS Integration',
        'Integrity Frameworks',
        'Community Building',
        'Personal Growth Support',
      ],
    },
  ];

  const cultureValues = [
    {
      principle: 'Hospitality Intelligence',
      description: 'Deep understanding of guest psychology, cultural awareness, and service excellence',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      principle: 'Operational Precision',
      description: 'System-first approach with disciplined execution and attention to detail',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
    },
    {
      principle: 'Continuous Growth',
      description: 'Commitment to learning, adaptation, and personal transformation',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      principle: 'Brand Integrity',
      description: 'Unwavering commitment to PVT standards and guest experience excellence',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  const trainingModules = [
    'Guest Experience Fundamentals',
    'PVT Brand Standards',
    'Aurora PMS Mastery',
    'Revenue Management Basics',
    'Safety & Compliance',
    'Crisis Management',
    'Community Building',
    'Digital Tools & Analytics',
  ];

  return (
    <section className="py-24 bg-zinc-900/30">
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
            Workforce & Culture System
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-400">
            Building an aligned workforce capable of delivering PVT-level excellence anywhere in the
            world through comprehensive talent development and culture architecture.
          </p>
        </motion.div>

        {/* Talent Pipeline */}
        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {talentPipeline.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-l-4 border-l-zinc-700">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">{stage.stage}</h3>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-xs font-bold text-zinc-400">
                    {index + 1}
                  </div>
                </div>
                <p className="mb-4 text-sm text-zinc-400">{stage.description}</p>
                <ul className="space-y-1">
                  {stage.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-zinc-500">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Culture Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="mb-8 text-center text-3xl font-bold text-white">
            Culture Architecture Principles
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {cultureValues.map((value, index) => (
              <Card key={index} className="text-center">
                <div className="mb-4 flex justify-center text-zinc-400">{value.icon}</div>
                <h4 className="mb-2 text-lg font-bold text-white">{value.principle}</h4>
                <p className="text-sm text-zinc-400">{value.description}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Training & Academy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-2 border-zinc-700">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-white">PVT Hostel Academy Integration</h3>
                <p className="mb-6 text-sm text-zinc-400">
                  All King Legend staff undergo comprehensive certification through the PVT Academy,
                  ensuring consistent excellence and brand-aligned service delivery across the ecosystem.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/30 p-3">
                    <svg
                      className="h-5 w-5 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm text-zinc-300">AI-Augmented Training Programs</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/30 p-3">
                    <svg
                      className="h-5 w-5 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    <span className="text-sm text-zinc-300">Certification & Badge System</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/30 p-3">
                    <svg
                      className="h-5 w-5 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span className="text-sm text-zinc-300">Ambassador-to-Staff Pipeline</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="mb-4 text-lg font-bold text-white">Core Training Modules</h4>
                <div className="grid grid-cols-2 gap-2">
                  {trainingModules.map((module, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3 text-center text-xs text-zinc-400"
                    >
                      {module}
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-lg bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-4">
                  <p className="text-sm text-zinc-300">
                    <span className="font-semibold text-white">Result:</span> An aligned workforce
                    delivering consistent PVT-level excellence with cultural intelligence and operational
                    precision.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
