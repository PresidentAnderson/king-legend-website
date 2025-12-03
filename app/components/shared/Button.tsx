'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-block rounded-full font-semibold transition-all text-center';

  const variantStyles = {
    primary: 'bg-white text-black hover:bg-zinc-200',
    secondary: 'border border-zinc-700 text-white hover:border-zinc-500 hover:bg-zinc-900',
    ghost: 'text-zinc-400 hover:text-white hover:bg-zinc-900/50',
  };

  const sizeStyles = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href}>
        <motion.span
          className={combinedClassName}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
}
