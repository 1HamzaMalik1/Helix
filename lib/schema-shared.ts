import { companyInfo, siteUrl, seoContent } from "@/lib/constants";
import { metaDescription } from "@/lib/seo-meta";

export const organizationSchemaId = `${siteUrl}/#organization`;
export const websiteSchemaId = `${siteUrl}/#website`;

export function sharedEntityGraph(): Record<string, unknown>[] {
  return [
    {
      "@type": "Organization",
      "@id": organizationSchemaId,
      name: companyInfo.name,
      legalName: companyInfo.legalName,
      alternateName: "HelixCore",
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
      description: companyInfo.description,
      email: companyInfo.email,
      telephone: companyInfo.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: companyInfo.addressLine,
        addressLocality: companyInfo.addressLocality,
        addressRegion: companyInfo.addressRegion,
        postalCode: companyInfo.postalCode,
        addressCountry: companyInfo.addressCountry,
      },
      sameAs: [
        companyInfo.linkedInCompany,
        companyInfo.googlePlayDeveloper,
        companyInfo.youtubeUrl,
        companyInfo.facebookUrl,
        companyInfo.instagramUrl,
        companyInfo.tiktokUrl,
        companyInfo.clutchUrl,
        companyInfo.goodFirmsUrl,
      ],
      employee: {
        "@type": "Person",
        name: companyInfo.ceo,
        jobTitle: "CEO",
        url: `${siteUrl}/hamza-hakim`,
        sameAs: [companyInfo.linkedInCeo],
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteSchemaId,
      name: companyInfo.name,
      url: siteUrl,
      inLanguage: "en-US",
      description: metaDescription(seoContent.description),
      publisher: { "@id": organizationSchemaId },
    },
  ];
}
