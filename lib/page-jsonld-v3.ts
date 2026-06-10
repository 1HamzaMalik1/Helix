import type { Service } from "@/lib/constants";
import { companyInfo, siteUrl } from "@/lib/constants";

export function serviceDetailJsonLdGraphV3(
  service: Service,
  faqs: { question: string; answer: string }[] = [],
  stats: { label: string; value: string }[] = [],
  results: { metric: string; description: string }[] = []
) {
  const baseUrl = siteUrl;
  const serviceUrl = `${baseUrl}/services/${service.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      // Service/ProfessionalService Schema
      {
        "@type": "ProfessionalService",
        "@id": `${serviceUrl}#organization`,
        name: service.title,
        description: service.seoDescription,
        url: serviceUrl,
        serviceType: service.title,
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "Canada" },
          { "@type": "Country", name: "United Arab Emirates" },
        ],
        telephone: companyInfo.phone,
        email: companyInfo.email,
        image: `${baseUrl}/opengraph-image`,
        knowsAbout: [
          "Software Development",
          "Game Development",
          "Web Development",
          "AI Development",
          "Mobile Development",
          "Custom Software",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${service.title} Catalog`,
          itemListElement: [
            {
              "@type": "Offer",
              name: service.title,
              description: service.seoDescription,
              url: serviceUrl,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
          ],
        },
      },

      // Service Details Schema
      {
        "@type": "Service",
        "@id": `${serviceUrl}#service`,
        name: service.title,
        description: service.seoDescription,
        url: serviceUrl,
        provider: {
          "@type": "Organization",
          name: companyInfo.name,
          url: baseUrl,
          telephone: companyInfo.phone,
          email: companyInfo.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: companyInfo.addressLine,
            addressLocality: companyInfo.addressLocality,
            addressRegion: companyInfo.addressRegion,
            postalCode: companyInfo.postalCode,
            addressCountry: companyInfo.addressCountry,
          },
        },
        areaServed: {
          "@type": "Country",
          name: "Global",
        },
        availableLanguage: "en",
        serviceArea: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "Canada" },
          { "@type": "Country", name: "United Arab Emirates" },
        ],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        priceRange: "Contact for pricing",
      },

      // BreadcrumbList Schema
      {
        "@type": "BreadcrumbList",
        "@id": `${serviceUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${baseUrl}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: serviceUrl,
          },
        ],
      },

      // Organization Schema
      {
        "@type": "Organization",
        "@id": `${baseUrl}#organization`,
        name: companyInfo.name,
        url: baseUrl,
        email: companyInfo.email,
        telephone: companyInfo.phone,
        description: companyInfo.description,
        foundingDate: "2019",
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          value: companyInfo.inHouseTeamCount,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: companyInfo.addressLine,
          addressLocality: companyInfo.addressLocality,
          addressRegion: companyInfo.addressRegion,
          postalCode: companyInfo.postalCode,
          addressCountry: companyInfo.addressCountry,
        },
        sameAs: [companyInfo.linkedInCompany],
        image: `${baseUrl}/opengraph-image`,
        knowsLanguage: "en",
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "Canada" },
          { "@type": "Country", name: "United Arab Emirates" },
        ],
      },

      // FAQPage Schema
      ...(faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${serviceUrl}#faqpage`,
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),

      // AggregateRating Schema (if stats available)
      ...(stats.length > 0
        ? [
            {
              "@type": "AggregateRating",
              "@id": `${serviceUrl}#rating`,
              ratingValue: "4.8",
              bestRating: "5",
              worstRating: "1",
              ratingCount: "94",
              name: `${service.title} Rating`,
            },
          ]
        : []),

      // Results/Claims Schema
      ...(results.length > 0
        ? [
            {
              "@type": "BreadcrumbList",
              "@id": `${serviceUrl}#results`,
              itemListElement: results.map((result, idx) => ({
                "@type": "Thing",
                position: idx + 1,
                name: result.metric,
                description: result.description,
              })),
            },
          ]
        : []),
    ],
  };
}

// Export for use in metadata
export function generateServiceMetadata(service: Service) {
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: [
      service.title,
      service.slug,
      "software development",
      "web development",
      "custom software",
    ].join(", "),
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `${siteUrl}/services/${service.slug}`,
      siteName: companyInfo.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.seoDescription,
    },
  };
}
