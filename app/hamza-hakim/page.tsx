import type { Metadata } from "next";
import HamzaPortfolio from "@/components/portfolio/HamzaPortfolio";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { companyInfo, siteUrl } from "@/lib/constants";
import { metaDescription } from "@/lib/seo-meta";
import { openGraphShareImages, twitterSummaryLarge } from "@/lib/share-metadata";
import { personalPortfolioJsonLdGraph } from "@/lib/page-jsonld";

const portfolioShare = openGraphShareImages(
  "/opengraph-image",
  "Hamza Hakim - Senior Unity Multiplayer Developer portfolio | HelixCore Studio",
);

export const metadata: Metadata = {
  title: `Hamza Hakim | Senior Unity Multiplayer Developer | ${companyInfo.name}`,
  description: metaDescription(
    "Senior Unity multiplayer developer and playable ads expert. Portfolio showcasing Photon Fusion, PlayFab, Firebase, WebGL, and high-converting playable ads.",
  ),
  alternates: {
    canonical: "/hamza-hakim",
  },
  openGraph: {
    title: `Hamza Hakim | Senior Unity Multiplayer Developer | ${companyInfo.name}`,
    description: metaDescription(
      "Senior Unity multiplayer developer and playable ads expert. Portfolio showcasing Photon Fusion, PlayFab, Firebase, WebGL, and live game delivery.",
    ),
    url: `${siteUrl}/hamza-hakim`,
    type: "website",
    siteName: companyInfo.name,
    ...portfolioShare.openGraph,
  },
  twitter: {
    ...twitterSummaryLarge,
    title: "Hamza Hakim | Senior Unity Multiplayer Developer",
    description: metaDescription(
      "Senior Unity multiplayer developer and playable ads expert. Portfolio showcasing Photon Fusion, PlayFab, Firebase, WebGL, and live game delivery.",
    ),
  },
};

export default function HamzaHakimPage() {
  return (
    <>
      <PageJsonLd id="jsonld-hamza-hakim" graph={personalPortfolioJsonLdGraph()} />
      <HamzaPortfolio />
    </>
  );
}
