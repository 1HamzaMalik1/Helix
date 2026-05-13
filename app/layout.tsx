import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import './globals.css';
import { companyInfo, seoContent, siteUrl } from "@/lib/constants";
import { metaDescription } from "@/lib/seo-meta";
import { twitterSummaryLarge } from "@/lib/share-metadata";
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
  description: metaDescription(seoContent.description),
  keywords: seoContent.keywords,
  authors: [{ name: companyInfo.ceo }],
  publisher: companyInfo.name,
  creator: companyInfo.name,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-video-preview": -1,
    "max-image-preview": "large",
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: companyInfo.name,
    title: seoContent.title,
    description: metaDescription(seoContent.description),
    url: siteUrl,
  },
  twitter: {
    ...twitterSummaryLarge,
    title: seoContent.title,
    description: metaDescription(seoContent.description),
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/favicon.ico", sizes: "180x180", type: "image/x-icon" }],
  },
};

const GTM_ID = 'GTM-MM5DXNVF';

const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

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
        <div className="min-h-screen flex flex-col relative overflow-x-hidden">
          <Navbar />
          <main className="flex-grow overflow-x-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}