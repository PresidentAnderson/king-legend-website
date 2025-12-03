import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | King Legend, Inc',
  description: 'Comprehensive brand development, entertainment management, digital strategy, and creative production services tailored to your vision.',
  openGraph: {
    title: 'Services - King Legend, Inc',
    description: 'Premium brand and entertainment solutions from strategy to execution.',
    type: 'website',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
