'use client';

import { motion } from 'framer-motion';
import { useAuth } from '@/app/lib/context/AuthContext';
import ProtectedRoute from '@/app/components/shared/ProtectedRoute';
import Card from '@/app/components/shared/Card';
import Button from '@/app/components/shared/Button';

function DashboardContent() {
  const { user, logout } = useAuth();

  const stats = [
    { label: 'Active Projects', value: '12', change: '+2 this month' },
    { label: 'Total Clients', value: '47', change: '+5 this quarter' },
    { label: 'Revenue', value: '$125k', change: '+18% vs last month' },
    { label: 'Satisfaction', value: '98%', change: '+3% improvement' },
  ];

  const recentActivity = [
    { action: 'New project inquiry', time: '2 hours ago', type: 'message' },
    { action: 'Contract signed', time: '5 hours ago', type: 'success' },
    { action: 'Payment received', time: '1 day ago', type: 'payment' },
    { action: 'Project completed', time: '2 days ago', type: 'success' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-black/80 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="bg-gradient-to-r from-zinc-200 via-white to-zinc-200 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
              King Legend Dashboard
            </h1>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium text-white">{user?.name}</p>
                <p className="text-xs text-zinc-500">{user?.role}</p>
              </div>
              <Button onClick={logout} variant="secondary" size="sm">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="mb-2 text-3xl font-bold text-white">
            Welcome back, {user?.name}!
          </h2>
          <p className="text-zinc-400">Here's what's happening with your account today.</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <div className="mb-2 text-sm text-zinc-400">{stat.label}</div>
                <div className="mb-1 text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-green-400">{stat.change}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <h3 className="mb-6 text-xl font-bold text-white">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 border-b border-zinc-800 pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800">
                      {activity.type === 'message' && (
                        <svg
                          className="h-5 w-5 text-zinc-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                      {activity.type === 'success' && (
                        <svg
                          className="h-5 w-5 text-green-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                      {activity.type === 'payment' && (
                        <svg
                          className="h-5 w-5 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white">{activity.action}</p>
                      <p className="text-xs text-zinc-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <h3 className="mb-6 text-xl font-bold text-white">Quick Actions</h3>
              <div className="space-y-3">
                <Button href="/dashboard/projects" variant="primary" className="w-full">
                  View All Projects
                </Button>
                <Button href="/dashboard/clients" variant="secondary" className="w-full">
                  Manage Clients
                </Button>
                <Button href="/dashboard/analytics" variant="secondary" className="w-full">
                  View Analytics
                </Button>
                <Button href="/dashboard/settings" variant="secondary" className="w-full">
                  Account Settings
                </Button>
              </div>
            </Card>

            {/* User Info */}
            <Card className="mt-6">
              <h3 className="mb-4 text-lg font-bold text-white">Account Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Email:</span>
                  <span className="text-white">{user?.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Role:</span>
                  <span className="text-white capitalize">{user?.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Status:</span>
                  <span className="text-green-400">Active</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}
