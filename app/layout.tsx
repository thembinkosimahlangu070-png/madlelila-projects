import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Madlelila Projects | Mining Recycling Solutions',
  description: 'Professional conveyor belt and steel recycling for mines. Saving costs at Zibulo Colliery and beyond.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
