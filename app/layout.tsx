import './globals.css';
import type { Metadata } from 'next';
import { Barlow, Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-barlow',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Detailing Bros | Premium Auto Detailing in Austin, TX',
  description:
    "Austin's trusted auto detailing experts. Professional ceramic coatings, paint correction, and interior detailing. Book your appointment today and experience the Detailing Bros difference.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
      <body className="bg-white text-[#0A0A0A]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
