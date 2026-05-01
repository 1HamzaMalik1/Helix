import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
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
  metadataBase: new URL('https://helixcorestudio.com'),
  title: 'HelixCore Studio – AI, Game & Web Development Company',
  description: 'HelixCore Studio delivers AI-powered game development and scalable web solutions.',
  keywords: seoContent.keywords,
  authors: [{ name: companyInfo.ceo }],
  publisher: companyInfo.name,
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.ico' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: seoContent.title,
    description: seoContent.description,
    url: 'https://helixcorestudio.com',
    type: 'website',
    locale: 'en_US',
    siteName: companyInfo.name,
    images: [
      {
        url: 'https://helixcorestudio.com/og-image.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoContent.title,
    description: seoContent.description,
    images: ['https://helixcorestudio.com/og-image.jpg'],
  },
};

const GTM_ID = 'GTM-MM5DXNVF';

const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://helixcorestudio.com/#organization',
      name: 'HelixCore Studio',
      url: 'https://helixcorestudio.com',
      logo: 'https://helixcorestudio.com/logo.png',
      alternateName: 'HelixCore',
      description: 'AI-powered game and web development company',
      sameAs: [
        'https://www.linkedin.com/company/helixcore-studio/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://helixcorestudio.com/#website',
      name: 'HelixCore Studio',
      url: 'https://helixcorestudio.com',
      publisher: {
        '@id': 'https://helixcorestudio.com/#organization',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://helixcorestudio.com/#webpage',
      name: 'HelixCore Studio – AI, Game & Web Development',
      url: 'https://helixcorestudio.com',
      isPartOf: {
        '@id': 'https://helixcorestudio.com/#website',
      },
      about: {
        '@id': 'https://helixcorestudio.com/#organization',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://helixcorestudio.com/#localbusiness',
      name: 'HelixCore Studio',
      url: 'https://helixcorestudio.com',
      image: 'https://helixcorestudio.com/logo.png',
      telephone: '+923201469571',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lahore',
        addressCountry: 'PK',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} bg-white text-primary overflow-x-hidden antialiased`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height={0}
            width={0}
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        <Script
          id="gtm"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: gtmScript }}
        />
        <Script
          id="schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="min-h-screen flex flex-col relative overflow-x-hidden">
          <Navbar />
          <main className="flex-grow overflow-x-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}