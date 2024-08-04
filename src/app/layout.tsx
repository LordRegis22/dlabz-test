import { NavBar } from '@/components/shared';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Destruction Labz',
  description: 'Destruction Labz - Next level E-gamming',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bahnschrift'>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
