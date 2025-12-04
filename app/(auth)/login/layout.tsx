import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | King Legend, Inc',
  description: 'Sign in to your King Legend account to access your dashboard and manage your projects.',
  openGraph: {
    title: 'Login - King Legend, Inc',
    description: 'Sign in to access your account.',
    type: 'website',
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
