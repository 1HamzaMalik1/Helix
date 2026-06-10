import type { BlogPostMeta } from "@/lib/blog";
import type { Service } from "@/lib/constants";
import { getSortedBlogPosts } from "@/lib/blog";
import { companyInfo, services, siteUrl, seoContent } from "@/lib/constants";
import { metaDescription } from "@/lib/seo-meta";
import {
  organizationSchemaId,
  sharedEntityGraph,
  websiteSchemaId,
} from "@/lib/schema-shared";

function withShared(nodes: Record<string, unknown>[]): Record<string, unknown>[] {
  return [...sharedEntityGraph(), ...nodes];
}

export function homePageJsonLdGraph(): Record<string, unknown>[] {
  return withShared([
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: seoContent.title,
      description: metaDescription(seoContent.description),
      isPartOf: { "@id": websiteSchemaId },
      about: { "@id": organizationSchemaId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/og-image.jpg`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
      ],
    },
  ]);
}

export function servicesIndexJsonLdGraph(): Record<string, unknown>[] {
  return withShared([
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/services#webpage`,
      url: `${siteUrl}/services`,
      name: "Software Development Services | HelixCore Studio",
      description: metaDescription(
        "Software development services: AI, game production, web apps, Unity, playables, ecommerce, and automation—detailed pages from HelixCore Studio.",
      ),
      isPartOf: { "@id": websiteSchemaId },
      about: { "@id": organizationSchemaId },
      inLanguage: "en-US",
    },
    {
      "@type": "CollectionPage",
      "@id": `${siteUrl}/services#collection`,
      url: `${siteUrl}/services`,
      name: "Our software development services",
      isPartOf: { "@id": websiteSchemaId },
      publisher: { "@id": organizationSchemaId },
      mainEntity: { "@id": `${siteUrl}/services#itemlist` },
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/services#itemlist`,
      name: `${companyInfo.name} software development service offerings`,
      numberOfItems: services.length,
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        url: `${siteUrl}/services/${s.slug}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      ],
    },
  ]);
}

export type ServiceFaqItem = { question: string; answer: string };

export function serviceDetailJsonLdGraph(
  service: Service,
  faqs: ServiceFaqItem[] = [],
): Record<string, unknown>[] {
  const pageUrl = `${siteUrl}/services/${service.slug}`;
  const base: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: service.seoTitle,
      description: metaDescription(service.seoDescription),
      isPartOf: { "@id": websiteSchemaId },
      about: { "@id": organizationSchemaId },
      mainEntity: { "@id": `${pageUrl}#service` },
      inLanguage: "en-US",
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: service.title,
      description: service.longDescription,
      url: pageUrl,
      serviceType: service.title,
      provider: { "@id": organizationSchemaId },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        bestRating: "5",
        worstRating: "1",
        ratingCount: 15,
      },
      areaServed: [
        { "@type": "City", name: "Lahore", containedInPlace: { "@type": "Country", name: "Pakistan" } },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Place", name: "Worldwide" },
      ],
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
        { "@type": "ListItem", position: 3, name: service.title, item: pageUrl },
      ],
    },
  ];

  if (faqs.length === 0) return withShared(base);

  const faqPage: Record<string, unknown> = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    isPartOf: { "@id": `${pageUrl}#webpage` },
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return withShared([...base, faqPage]);
}

export function blogIndexJsonLdGraph(): Record<string, unknown>[] {
  const blogUrl = `${siteUrl}/blog`;
  return withShared([
    {
      "@type": "Blog",
      "@id": `${blogUrl}#blog`,
      name: `Insights & Guides | ${companyInfo.name}`,
      description: metaDescription(
        `${companyInfo.name} articles on AI, games, web apps, MVPs, offshore delivery, Unity hiring, and chatbots—with links to software development services.`,
      ),
      url: blogUrl,
      publisher: { "@id": organizationSchemaId },
      blogPost: getSortedBlogPosts().map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        description: metaDescription(p.description),
        datePublished: p.publishedAt,
        url: `${siteUrl}/blog/${p.slug}`,
      })),
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${blogUrl}#webpage`,
      url: blogUrl,
      name: `Insights & Guides | ${companyInfo.name}`,
      isPartOf: { "@id": websiteSchemaId },
      about: { "@id": `${blogUrl}#blog` },
      mainEntity: { "@id": `${blogUrl}#blog` },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: blogUrl },
      ],
    },
  ]);
}

export function blogPostJsonLdGraph(
  post: BlogPostMeta,
  faqs: ServiceFaqItem[] = [],
): Record<string, unknown>[] {
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const blogUrl = `${siteUrl}/blog`;
  const base: Record<string, unknown>[] = [
    {
      "@type": "BlogPosting",
      "@id": `${postUrl}#article`,
      headline: post.title,
      description: metaDescription(post.description),
      datePublished: post.publishedAt,
      url: postUrl,
      keywords: post.keywords,
      author: { "@id": organizationSchemaId },
      publisher: { "@id": organizationSchemaId },
      isPartOf: {
        "@type": "Blog",
        "@id": `${blogUrl}#blog`,
        name: `Insights | ${companyInfo.name}`,
        url: blogUrl,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${postUrl}#webpage`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${postUrl}#webpage`,
      url: postUrl,
      name: post.title,
      description: metaDescription(post.description),
      isPartOf: { "@id": websiteSchemaId },
      mainEntity: { "@id": `${postUrl}#article` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: blogUrl },
        { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
      ],
    },
  ];

  if (faqs.length === 0) return withShared(base);

  const faqPage: Record<string, unknown> = {
    "@type": "FAQPage",
    "@id": `${postUrl}#faq`,
    url: postUrl,
    isPartOf: { "@id": `${postUrl}#webpage` },
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return withShared([...base, faqPage]);
}

export function teamPageJsonLdGraph(): Record<string, unknown>[] {
  const pageUrl = `${siteUrl}/team`;
  const title = `Our team & story | ${companyInfo.name}`;
  const desc = metaDescription(
    `Meet ${companyInfo.ceo}, CEO of ${companyInfo.name}, and learn how our ${companyInfo.inHouseTeamCount}-person remote studio ships AI, games, and web products for clients worldwide—with clear communication and senior-led delivery.`,
  );
  return withShared([
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description: desc,
      isPartOf: { "@id": websiteSchemaId },
      about: { "@id": organizationSchemaId },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Team", item: pageUrl },
      ],
    },
  ]);
}

export function privacyPolicyJsonLdGraph(): Record<string, unknown>[] {
  const pageUrl = `${siteUrl}/privacy-policy`;
  return withShared([
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Privacy Policy (Children's Apps) | HelixCore Studio",
      description: metaDescription(
        "Privacy Policy for HelixCore Studio’s child-directed apps on Google Play (under 13): COPPA-aligned practices, limited data, non-personalized ads, and parental contact.",
      ),
      isPartOf: { "@id": websiteSchemaId },
      about: { "@id": organizationSchemaId },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Privacy Policy", item: pageUrl },
      ],
    },
  ]);
}

/**
 * Generate AggregateRating schema for the organization based on testimonials
 * This signals trust and authority to search engines
 */
export function organizationAggregateRatingSchema(testimonials: any[] = []): Record<string, unknown> {
  const validRatings = testimonials.filter((t) => t.rating && t.rating > 0);
  const avgRating = validRatings.length > 0
    ? (validRatings.reduce((sum, t) => sum + t.rating, 0) / validRatings.length).toFixed(1)
    : "5.0";

  return {
    "@type": "AggregateRating",
    "@id": `${siteUrl}/#aggregaterating`,
    ratingValue: parseFloat(avgRating),
    bestRating: "5",
    worstRating: "1",
    ratingCount: validRatings.length,
    reviewCount: validRatings.length,
  };
}

/**
 * Generate Review schema for individual testimonials/client feedback
 */
export function testimonialReviewsSchema(testimonials: any[] = []): Record<string, unknown>[] {
  return testimonials
    .filter((t) => t.rating && t.rating > 0)
    .slice(0, 5) // Limit to top 5 for performance
    .map((t, index) => ({
      "@type": "Review",
      "@id": `${siteUrl}/#review-${index}`,
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
      },
      publisher: { "@id": organizationSchemaId },
    }));
}
