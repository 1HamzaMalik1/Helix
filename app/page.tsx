import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Process from '@/components/Process';
import { seoContent, siteUrl } from '@/lib/constants';

export const metadata: Metadata = {
  title: seoContent.title,
  description: seoContent.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: seoContent.title,
    description: seoContent.description,
    url: `${siteUrl}/`,
    type: 'website',
    siteName: 'HelixCore Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: seoContent.title,
    description: seoContent.description,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Services />
      <Process/>
      <Team />
      <Contact />
    </>
  );
}