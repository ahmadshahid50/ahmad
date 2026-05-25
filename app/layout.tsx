import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import Cursor from '../components/Cursor';

export const metadata: Metadata = {
  title: 'Ahmad Shahid | Software Engineer',
  description: 'A modern portfolio for a software engineer specializing in frontend development, React, Next.js, and animation-driven UX.',
  metadataBase: new URL('https://example.com'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
