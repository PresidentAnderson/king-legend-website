import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | King Legend, Inc',
  description: 'Get in touch with King Legend to discuss your project. We\'d love to hear about your vision and how we can help bring it to life.',
  openGraph: {
    title: 'Contact King Legend, Inc',
    description: 'Let\'s create something extraordinary together.',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
