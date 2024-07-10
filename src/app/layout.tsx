import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { BlobsBgs } from '@/components/blobs';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/providers/ThemeProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aaron Soto | Fullstack Developer',
  description:
    "Welcome to my corner of the web! I'm a fullstack developer based in Arizona.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={cn(inter.className, 'dark')}>
          <BlobsBgs />
          <Navbar></Navbar>
          {children}
          <Footer />
          <Toaster />
        </body>
      </html>
    </ThemeProvider>
  );
}
