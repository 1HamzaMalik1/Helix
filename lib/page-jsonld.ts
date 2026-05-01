import type { BlogPostMeta } from "@/lib/blog";
import type { Service } from "@/lib/constants";
import { blogPosts } from "@/lib/blog";
import { companyInfo, services, siteUrl, seoContent } from "@/lib/constants";

const orgId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

export function homePageJsonLdGraph(): Record<string, unknown>[] {
  return [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: seoContent.title,
      description: seoContent.description,
      isPartOf: { "@id": websiteId },
      about: { "@id": orgId },
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
  ];
}

export function servicesIndexJsonLdGraph(): Record<string, unknown>[] {
  return [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/services#webpage`,
      url: `${siteUrl}/services`,
      name: "Software Services | HelixCore Studio",
      description:
        "Explore HelixCore Studio services including game development, AI agents, automation, ecommerce, and full-stack web development.",
      isPartOf: { "@id": websiteId },
      about: { "@id": orgId },
      inLanguage: "en-US",
    },
    {
      "@type": "CollectionPage",
      "@id": `${siteUrl}/services#collection`,
      url: `${siteUrl}/services`,
      name: "Our Services",
      isPartOf: { "@id": websiteId },
      publisher: { "@id": orgId },
      mainEntity: { "@id": `${siteUrl}/services#itemlist` },
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/services#itemlist`,
      name: `${companyInfo.name} service offerings`,
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
  ];
}

export function serviceDetailJsonLdGraph(service: Service): Record<string, unknown>[] {
  const pageUrl = `${siteUrl}/services/${service.slug}`;
  return [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: service.seoTitle,
      description: service.seoDescription,
      isPartOf: { "@id": websiteId },
      about: { "@id": orgId },
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
      provider: { "@id": orgId },
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
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
}

export function blogIndexJsonLdGraph(): Record<string, unknown>[] {
  const blogUrl = `${siteUrl}/blog`;
  return [
    {
      "@type": "Blog",
      "@id": `${blogUrl}#blog`,
      name: `Insights & Guides | ${companyInfo.name}`,
      description: `${companyInfo.name} articles on Unity, playable ads, mobile games, and related services.`,
      url: blogUrl,
      publisher: { "@id": orgId },
      blogPost: blogPosts.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        description: p.description,
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
      isPartOf: { "@id": websiteId },
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
  ];
}

export function blogPostJsonLdGraph(post: BlogPostMeta): Record<string, unknown>[] {
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const blogUrl = `${siteUrl}/blog`;
  return [
    {
      "@type": "BlogPosting",
      "@id": `${postUrl}#article`,
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      url: postUrl,
      keywords: post.keywords,
      author: {
        "@type": "Organization",
        name: companyInfo.name,
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        name: companyInfo.name,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.png`,
        },
      },
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
      description: post.description,
      isPartOf: { "@id": websiteId },
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
}
