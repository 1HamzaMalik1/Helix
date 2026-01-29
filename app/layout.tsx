import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { companyInfo, seoContent } from '@/lib/constants';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: seoContent.title,
  description: seoContent.description,
  keywords: seoContent.keywords,
  authors: [{ name: companyInfo.ceo }],
  openGraph: {
    title: seoContent.title,
    description: seoContent.description,
    type: 'website',
    locale: 'en_US',
    siteName: companyInfo.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: seoContent.title,
    description: seoContent.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#FFFFFF" />
      </head>
      <body className={`${poppins.className} bg-white text-primary overflow-x-hidden antialiased`}>
        <div className="min-h-screen flex flex-col relative overflow-x-hidden">
          <Navbar />
          <main className="flex-grow overflow-x-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}