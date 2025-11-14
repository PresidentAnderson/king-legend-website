'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/app/components/shared/HeroSection';
import ContactForm from '@/app/components/contact/ContactForm';
import Card from '@/app/components/shared/Card';

export default function ContactPage() {
  const contactInfo = [
    {
      title: 'Email',
      value: 'hello@kinglegend.com',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Phone',
      value: '+1 (555) 000-0000',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      title: 'Hours',
      value: 'Monday - Friday, 9am - 6pm EST',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: 'IG', href: '#' },
    { name: 'Twitter', icon: 'X', href: '#' },
    { name: 'LinkedIn', icon: 'in', href: '#' },
    { name: 'TikTok', icon: 'TT', href: '#' },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <HeroSection
        title="Get In Touch"
        subtitle="We'd love to hear about your project and how we can help bring your vision to life"
      />

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <h2 className="mb-6 text-2xl font-bold text-white">Send us a message</h2>
            <ContactForm />
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Contact Info Cards */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-white">Contact Information</h2>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} hover={false}>
                  <div className="flex items-start gap-4">
                    <div className="text-zinc-400">{info.icon}</div>
                    <div>
                      <h3 className="mb-1 text-sm font-semibold text-zinc-400">{info.title}</h3>
                      <p className="text-white">{info.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Response Time */}
          <Card hover={false} className="bg-zinc-800/50">
            <h3 className="mb-2 text-lg font-semibold text-white">Response Time</h3>
            <p className="text-sm text-zinc-400">
              We typically respond to all inquiries within 24 business hours. For urgent matters,
              please call us directly during business hours.
            </p>
          </Card>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 text-sm font-semibold text-zinc-400 hover:border-zinc-500 hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <Card hover={false}>
            <h3 className="mb-4 text-lg font-semibold text-white">Frequently Asked</h3>
            <div className="space-y-4">
              <div>
                <h4 className="mb-1 text-sm font-semibold text-zinc-300">
                  What is your consultation process?
                </h4>
                <p className="text-sm text-zinc-500">
                  We start with a free initial consultation to understand your needs and provide
                  tailored recommendations.
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-zinc-300">
                  Do you work with clients remotely?
                </h4>
                <p className="text-sm text-zinc-500">
                  Yes, we work with clients worldwide through virtual meetings and digital
                  collaboration tools.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
