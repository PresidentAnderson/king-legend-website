'use client';

import { ReactNode } from 'react';
import { ModalProvider } from './lib/context/ModalContext';

export function Providers({ children }: { children: ReactNode }) {
  return <ModalProvider>{children}</ModalProvider>;
}
