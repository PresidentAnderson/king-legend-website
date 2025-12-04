'use client';

import { ReactNode } from 'react';
import { ModalProvider } from './lib/context/ModalContext';
import { AuthProvider } from './lib/context/AuthContext';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <ModalProvider>{children}</ModalProvider>
    </AuthProvider>
  );
}
