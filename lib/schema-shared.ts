import { companyInfo, services, siteUrl, seoContent } from "@/lib/constants";
import { metaDescription } from "@/lib/seo-meta";

/** Stable @ids referenced across JSON-LD graphs */
export const organizationSchemaId = `${siteUrl}/#organization`;
export const websiteSchemaId = `${siteUrl}/#website`;
export const localBusinessSchemaId = `${siteUrl}/#localbusiness`;

/**
 * Core Organization, WebSite, and LocalBusiness nodes—prepended to page-specific graphs so each route
 * exposes complete structured data (services, blog, home) without relying on a separate layout script.
 */
export function sharedEntityGraph(): Record<string, unknown>[] {
  const logoSvgUrl = `${siteUrl}/logo.svg`;
  const faviconUrl = `${siteUrl}/favicon.ico`;
  const postalAddress: Record<string, unknown> = {
    "@type": "PostalAddress",
    streetAddress: companyInfo.addressLine,
    addressLocality: companyInfo.addressLocality,
    addressRegion: companyInfo.addressRegion,
    postalCode: companyInfo.postalCode,
    addressCountry: companyInfo.addressCountry,
  };

  return [
    {
      "@type": "Organization",
      "@id": organizationSchemaId,
      name: companyInfo.name,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: logoSvgUrl,
        contentUrl: logoSvgUrl,
        caption: `${companyInfo.name} logo`,
      },
      alternateName: ["HelixCore", "HelixCore Studio Lahore"],
      description: metaDescription(
        `${companyInfo.name} provides software development services—AI, game development, and web apps—from Lahore for clients worldwide.`,
      ),
      slogan: companyInfo.tagline,
      email: companyInfo.email,
      telephone: companyInfo.phone,
      address: postalAddress,
      location: { "@id": localBusinessSchemaId },
      foundingLocation: {
        "@type": "Place",
        name: "Lahore, Pakistan",
      },
      areaServed: [
        { "@type": "Country", name: "Pakistan" },
        { "@type": "Place", name: "Worldwide" },
      ],
      knowsAbout: [
        "Software development services",
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
        name: `${companyInfo.name} software development services`,
        itemListElement: services.map((s, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: s.title,
            description: metaDescription(s.description),
            url: `${siteUrl}/services/${s.slug}`,
          },
        })),
      },
      sameAs: [companyInfo.linkedInCompany],
    },
    {
      "@type": "WebSite",
      "@id": websiteSchemaId,
      name: companyInfo.name,
      url: siteUrl,
      inLanguage: "en-US",
      description: metaDescription(seoContent.description),
      publisher: {
        "@id": organizationSchemaId,
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": localBusinessSchemaId,
      name: companyInfo.name,
      url: siteUrl,
      image: [logoSvgUrl, faviconUrl],
      telephone: companyInfo.phone,
      priceRange: "$$",
      description: metaDescription(seoContent.description),
      parentOrganization: { "@id": organizationSchemaId },
      address: postalAddress,
      geo: {
        "@type": "GeoCoordinates",
        latitude: 31.5204,
        longitude: 74.3587,
      },
      areaServed: [
        { "@type": "City", name: "Lahore" },
        { "@type": "Country", name: "Pakistan" },
        { "@type": "Place", name: "Worldwide" },
      ],
      sameAs: [companyInfo.linkedInCompany],
    },
  ];
}
