import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import './globals.css';
import { companyInfo, seoContent, siteUrl, services } from "@/lib/constants";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: true,
  preload: true,
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#2A2E30" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoContent.title,
    template: `%s | ${companyInfo.name}`,
  },
  applicationName: companyInfo.name,
  description: seoContent.description,
  keywords: seoContent.keywords,
  authors: [{ name: companyInfo.ceo }],
  publisher: companyInfo.name,
  creator: companyInfo.name,
  alternates: { canonical: "/" },
  category: "technology",
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
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: companyInfo.name,
  },
  twitter: {
    card: "summary_large_image",
    title: seoContent.title,
    description: seoContent.description,
  },
};

const GTM_ID = 'GTM-MM5DXNVF';

const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

const iconUrl = `${siteUrl}/icon`;
const logoSvgUrl = `${siteUrl}/logo.svg`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: companyInfo.name,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: iconUrl,
        contentUrl: iconUrl,
        caption: `${companyInfo.name} logo`,
      },
      alternateName: ["HelixCore", "HelixCore Studio Lahore"],
      description: companyInfo.description,
      slogan: companyInfo.tagline,
      email: companyInfo.email,
      telephone: companyInfo.phone,
      foundingLocation: {
        "@type": "Place",
        name: "Lahore, Pakistan",
      },
      areaServed: [
        { "@type": "Country", name: "Pakistan" },
        { "@type": "Place", name: "Worldwide" },
      ],
      knowsAbout: [
        "Artificial intelligence software development",
        "Video game development",
        "Unity engine",
        "Playable ads",
        "Web application development",
        "Next.js",
        "Mobile game porting",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${companyInfo.name} professional services`,
        itemListElement: services.map((s, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: s.title,
            description: s.description,
            url: `${siteUrl}/services/${s.slug}`,
          },
        })),
      },
      sameAs: [companyInfo.linkedInCompany],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: companyInfo.name,
      url: siteUrl,
      inLanguage: "en-US",
      description: seoContent.description,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: companyInfo.name,
      url: siteUrl,
      image: [iconUrl, logoSvgUrl],
      telephone: companyInfo.phone,
      priceRange: "$$",
      parentOrganization: { "@id": `${siteUrl}/#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: companyInfo.addressLine,
        addressLocality: companyInfo.addressLocality,
        addressRegion: companyInfo.addressRegion,
        postalCode: companyInfo.postalCode,
        addressCountry: companyInfo.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 31.5204,
        longitude: 74.3587,
      },
      areaServed: [
        { "@type": "City", name: "Lahore" },
        { "@type": "Country", name: "Pakistan" },
      ],
      sameAs: [companyInfo.linkedInCompany],
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
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{ __html: gtmScript }}
        />
        <Script
          id="schema-global-entity"
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