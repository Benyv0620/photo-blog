'use client';

import { clsx } from 'clsx';
import { useTheme } from 'next-themes';
import { Toaster } from 'sonner';

export default function ToasterWithThemes() {
  const { theme } = useTheme();
  return (
    <Toaster
      theme={theme as 'system' | 'light' | 'dark'}
      toastOptions={{
        classNames: {
          toast: clsx(
            'font-mono font-normal',
            '!border-gray-200 dark:!border-gray-800',
          ),
        },
      }}
    />
  );
}
