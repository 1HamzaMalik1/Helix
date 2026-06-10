import { companyInfo, services, siteUrl, seoContent, testimonials } from "@/lib/constants";
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
      alternateName: ["HelixCore", "HelixCore Studio Lahore", "HelixCore Studio Pakistan"],
      description: metaDescription(
        `${companyInfo.name} is a premier software development company providing AI development, game development, and web apps. Founded in Lahore, Pakistan, we serve clients across USA, Canada, UAE, and worldwide.`,
      ),
      slogan: companyInfo.tagline,
      email: companyInfo.email,
      telephone: companyInfo.phone,
      address: postalAddress,
      location: { "@id": localBusinessSchemaId },
      foundingDate: "2019",
      foundingLocation: {
        "@type": "Place",
        name: "Lahore, Pakistan",
      },
      areaServed: [
        { "@type": "Country", name: "Pakistan" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Place", name: "Worldwide" },
      ],
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        value: "10",
        unitText: "full-time developers"
      },
      qualifications: [
        "5+ years of software development experience",
        "150+ projects delivered globally",
        "Expertise in AI, game development, and web platforms",
        "Cloud infrastructure and DevOps certified"
      ],
      knowsAbout: [
        "Software development services",
        "Artificial intelligence software development",
        "AI agents and automation",
        "LLM integrations",
        "Video game development",
        "Unity engine development",
        "Playable ads development",
        "Web application development",
        "Next.js and React",
        "Full-stack development",
        "Mobile game porting",
        "Ecommerce development",
        "Cloud deployment and DevOps"
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
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "Canada" },
              { "@type": "Country", name: "United Arab Emirates" },
              { "@type": "Place", name: "Worldwide" }
            ],
            serviceType: s.title,
          },
        })),
      },
      sameAs: [companyInfo.linkedInCompany],
      employee: [
        {
          "@type": "Person",
          name: "Hamza Hakim",
          jobTitle: "CEO & Lead Game Developer",
          description: "Experienced game developer with 5+ years of expertise in Unity and multiplayer systems. Masters in Software Engineering.",
          url: "https://www.linkedin.com/in/hamza-hakim1/",
          expertise: ["Unity Engine", "Multiplayer Systems", "Game Architecture", "Project Leadership"]
        },
        {
          "@type": "Person",
          name: "Samran Shoukat",
          jobTitle: "CTO & Senior Software Engineer",
          description: "Senior engineer specializing in scalable architecture, full-stack development, and reliable cloud deployment.",
          url: "https://www.linkedin.com/in/samran-shoukat-36b930213/",
          expertise: ["React", "Next.js", "Node.js", "Cloud Architecture"]
        }
      ],
      aggregateRating: (() => {
        const validRatings = testimonials.filter((t: any) => t.rating && t.rating > 0);
        const avgRating = validRatings.length > 0
          ? (validRatings.reduce((sum: number, t: any) => sum + t.rating, 0) / validRatings.length).toFixed(1)
          : "5.0";
        return {
          "@type": "AggregateRating",
          ratingValue: parseFloat(avgRating),
          bestRating: "5",
          worstRating: "1",
          ratingCount: validRatings.length,
          reviewCount: validRatings.length,
        };
      })(),
      review: testimonials
        .filter((t: any) => t.rating && t.rating > 0)
        .slice(0, 5)
        .map((t: any, index: number) => ({
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: t.rating,
            bestRating: "5",
            worstRating: "1",
          },
          reviewBody: t.comment || "",
          author: {
            "@type": "Person",
            name: t.name || "Client",
            addressCountry: t.countryCode || "Global",
          },
          datePublished: t.date ? new Date().toISOString().split('T')[0] : undefined,
        })),
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
      "@context": "https://schema.org/",
      name: companyInfo.name,
      url: siteUrl,
      image: [logoSvgUrl, faviconUrl],
      telephone: companyInfo.phone,
      email: companyInfo.email,
      priceRange: "$$",
      description: metaDescription(
        "HelixCore Studio is a premier software development company delivering AI solutions, game development, and modern web applications. Serving clients in USA, Canada, UAE, and worldwide since 2019."
      ),
      parentOrganization: { "@id": organizationSchemaId },
      address: postalAddress,
      geo: {
        "@type": "GeoCoordinates",
        latitude: 31.5204,
        longitude: 74.3587,
      },
      areaServed: [
        { "@type": "City", name: "Lahore", "containedInPlace": { "@type": "Country", name: "Pakistan" } },
        { "@type": "State", name: "Punjab", "containedInPlace": { "@type": "Country", name: "Pakistan" } },
        { "@type": "Country", name: "Pakistan" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Place", name: "Worldwide" },
      ],
      serviceArea: [
        { "@type": "City", name: "New York", "containedInPlace": { "@type": "Country", name: "United States" } },
        { "@type": "City", name: "Los Angeles", "containedInPlace": { "@type": "Country", name: "United States" } },
        { "@type": "City", name: "San Francisco", "containedInPlace": { "@type": "Country", name: "United States" } },
        { "@type": "City", name: "Toronto", "containedInPlace": { "@type": "Country", name: "Canada" } },
        { "@type": "City", name: "Vancouver", "containedInPlace": { "@type": "Country", name: "Canada" } },
        { "@type": "City", name: "Dubai", "containedInPlace": { "@type": "Country", name: "United Arab Emirates" } },
        { "@type": "City", name: "Abu Dhabi", "containedInPlace": { "@type": "Country", name: "United Arab Emirates" } },
      ],
      sameAs: [companyInfo.linkedInCompany],
      contactPoint: {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "telephone": companyInfo.phone,
        "email": companyInfo.email,
        "url": companyInfo.calendlyUrl,
        "availableLanguage": ["en", "ur"]
      },
      knowsAbout: [
        "AI Development",
        "Game Development",
        "Web Development",
        "Software Outsourcing",
        "Startup Development"
      ]
    },
  ];
}
