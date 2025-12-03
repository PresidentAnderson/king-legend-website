'use client';

import { motion } from 'framer-motion';
import Card from './Card';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'Luxury Lifestyle Co.',
    content:
      'King Legend transformed our brand identity and helped us launch with incredible impact. Their strategic vision and execution excellence are unmatched.',
    rating: 5,
  },
  {
    name: 'Marcus Williams',
    role: 'Recording Artist',
    company: 'Independent',
    content:
      'Working with King Legend was a game-changer for my career. They understood my vision and helped me reach audiences I never thought possible.',
    rating: 5,
  },
  {
    name: 'Jennifer Chen',
    role: 'Marketing Director',
    company: 'Premium Events Inc.',
    content:
      'The team at King Legend delivered an unforgettable event experience. Their attention to detail and creative approach exceeded all expectations.',
    rating: 5,
  },
  {
    name: 'David Rodriguez',
    role: 'Brand Manager',
    company: 'Elite Entertainment',
    content:
      'From strategy to execution, King Legend demonstrated professionalism and creativity at every turn. Highly recommend their services.',
    rating: 5,
  },
  {
    name: 'Amanda Foster',
    role: 'Creative Director',
    company: 'Urban Collective',
    content:
      'King Legend brought our creative vision to life in ways we couldn\'t have imagined. True partners in innovation and excellence.',
    rating: 5,
  },
  {
    name: 'Michael Thompson',
    role: 'Founder',
    company: 'Next Gen Studios',
    content:
      'The strategic guidance and industry connections King Legend provided were invaluable. They truly understand the entertainment landscape.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
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
            Client Testimonials
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Hear from the clients and partners who have trusted us with their vision
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
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
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <Card className="h-full">
                {/* Rating Stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 border-t border-zinc-800 pt-4">
                  {/* Avatar Placeholder */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 text-lg font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-xs text-zinc-500">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="mb-2 text-4xl font-bold text-white">50+</div>
              <div className="text-sm text-zinc-400">Successful Projects</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-white">5.0</div>
              <div className="text-sm text-zinc-400">Average Rating</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-white">100%</div>
              <div className="text-sm text-zinc-400">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
