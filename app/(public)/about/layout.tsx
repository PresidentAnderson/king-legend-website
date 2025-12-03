import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | King Legend, Inc',
  description: 'Learn about King Legend\'s mission, values, and journey in creating premium brand experiences and entertainment excellence.',
  openGraph: {
    title: 'About King Legend, Inc',
    description: 'Creating extraordinary experiences at the intersection of innovation, creativity, and excellence.',
    type: 'website',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
