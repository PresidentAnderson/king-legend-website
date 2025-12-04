import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Account | King Legend, Inc',
  description: 'Create your King Legend account to access premium brand and entertainment services.',
  openGraph: {
    title: 'Register - King Legend, Inc',
    description: 'Create your account today.',
    type: 'website',
  },
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
