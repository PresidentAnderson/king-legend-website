import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | King Legend, Inc',
  description: 'Manage your projects, clients, and account settings from your King Legend dashboard.',
  robots: 'noindex, nofollow', // Private page - don't index
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
