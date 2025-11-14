'use client';

import { useState, FormEvent } from 'react';
import Button from '../shared/Button';

interface ContactFormProps {
  onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'brand',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');

    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', projectType: 'brand', message: '' });
      setSubmitStatus('idle');
      if (onSuccess) onSuccess();
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
          Name *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
          placeholder="Your name"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
          placeholder="your@email.com"
        />
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
          placeholder="+1 (555) 000-0000"
        />
      </div>

      {/* Project Type */}
      <div>
        <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-white">
          Project Type
        </label>
        <select
          id="projectType"
          value={formData.projectType}
          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
        >
          <option value="brand">Brand Development</option>
          <option value="entertainment">Entertainment Management</option>
          <option value="digital">Digital & Social Strategy</option>
          <option value="production">Production & Creative</option>
          <option value="consulting">Consulting</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
          placeholder="Tell us about your project..."
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" variant="primary" className="w-full" size="lg">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      {/* Status Message */}
      {submitStatus === 'success' && (
        <p className="text-center text-sm text-green-400">
          Message sent successfully! We'll get back to you soon.
        </p>
      )}
      {submitStatus === 'error' && (
        <p className="text-center text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
