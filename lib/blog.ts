import { services } from "@/lib/constants";

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTimeMinutes: number;
  keywords: string;
};

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "unity-game-development-guide",
    title:
      "Unity Game Development: Production-Ready 2D/3D Games for Mobile, PC & Steam",
    description:
      "How studios plan, build, and ship Unity games with performance, multiplayer, and store compliance—plus when to pair Unity with playable ads, web games, and porting.",
    publishedAt: "2026-05-01",
    readingTimeMinutes: 11,
    keywords:
      "Unity game development, mobile Unity games, Steam, multiplayer, HelixCore Studio",
  },
  {
    slug: "playable-ads-development-guide",
    title:
      "Playable Ads Development: High-Converting Creatives for UA Channels",
    description:
      "What makes playable ads succeed on Meta, TikTok, AppLovin, and Unity Ads—file size, hooks, MRAID, and how they connect to full game builds.",
    publishedAt: "2026-05-01",
    readingTimeMinutes: 10,
    keywords:
      "playable ads, HTML5 playable, user acquisition, mobile games, HelixCore Studio",
  },
  {
    slug: "mobile-game-development-strategy",
    title:
      "Mobile Game Development & Porting: From First Build to Global Stores",
    description:
      "Mobile-first design, performance budgets, store requirements, and how porting and cross-platform strategy reduce cost and time to market.",
    publishedAt: "2026-05-01",
    readingTimeMinutes: 10,
    keywords:
      "mobile game development, iOS Android games, game porting, HelixCore Studio",
  },
];

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getOtherPosts(currentSlug: string): BlogPostMeta[] {
  return blogPosts.filter((p) => p.slug !== currentSlug);
}

const sidebarServiceSlugs: Record<string, string[]> = {
  "unity-game-development-guide": [
    "unity-game-development",
    "game-development",
    "playable-ads-development",
    "mobile-console-porting",
    "html5-web-games",
    "full-stack-web-development",
  ],
  "playable-ads-development-guide": [
    "playable-ads-development",
    "game-development",
    "unity-game-development",
    "html5-web-games",
    "mobile-console-porting",
    "automation-services",
  ],
  "mobile-game-development-strategy": [
    "mobile-console-porting",
    "game-development",
    "unity-game-development",
    "playable-ads-development",
    "web-development",
    "ai-development",
  ],
};

export function getBlogSidebarServiceLinks(slug: string): { href: string; label: string }[] {
  const slugs = sidebarServiceSlugs[slug];
  if (!slugs?.length) return [{ href: "/services", label: "All services" }];
  return slugs
    .map((s) => {
      const svc = services.find((x) => x.slug === s);
      return svc ? { href: `/services/${svc.slug}`, label: svc.title } : null;
    })
    .filter((x): x is { href: string; label: string } => x != null);
}
