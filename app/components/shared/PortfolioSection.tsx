'use client';

import { motion } from 'framer-motion';
import Card from './Card';
import Button from './Button';
import { useModal } from '@/app/lib/context/ModalContext';

interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  image?: string;
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Luxury Brand Launch',
    category: 'Brand Development',
    description: 'Complete brand identity and launch campaign for premium lifestyle brand',
    tags: ['Branding', 'Strategy', 'Launch'],
  },
  {
    title: 'Artist Development Campaign',
    category: 'Entertainment',
    description: 'Multi-platform promotional campaign for emerging recording artist',
    tags: ['Music', 'Social Media', 'PR'],
  },
  {
    title: 'Premium Event Experience',
    category: 'Event Production',
    description: 'High-profile brand activation and experiential marketing event',
    tags: ['Events', 'Activation', 'Experiential'],
  },
  {
    title: 'Digital Transformation',
    category: 'Digital Strategy',
    description: 'Comprehensive social media and content strategy overhaul',
    tags: ['Digital', 'Content', 'Growth'],
  },
  {
    title: 'Music Video Production',
    category: 'Creative Production',
    description: 'Full-scale music video production and creative direction',
    tags: ['Video', 'Production', 'Creative'],
  },
  {
    title: 'Industry Partnership',
    category: 'Consulting',
    description: 'Strategic consulting for major entertainment industry partnership',
    tags: ['Strategy', 'Partnerships', 'Growth'],
  },
];

export default function PortfolioSection() {
  const { openContactModal } = useModal();

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
            Featured Work
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Explore some of our recent projects and success stories
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Card className="group h-full overflow-hidden">
                {/* Image Placeholder */}
                <div className="mb-4 h-48 overflow-hidden rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900">
                  <div className="flex h-full items-center justify-center text-6xl font-bold text-zinc-700 transition-transform group-hover:scale-110">
                    {item.title.charAt(0)}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400">
                    {item.category}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-zinc-200 transition-colors">
                  {item.title}
                </h3>
                <p className="mb-4 text-sm text-zinc-400">{item.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-md bg-zinc-900 px-2 py-1 text-xs text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-6 text-lg text-zinc-400">
            Ready to create something extraordinary together?
          </p>
          <Button onClick={openContactModal} variant="primary" size="lg">
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
