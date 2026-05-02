import { services } from "@/lib/constants";

export type BlogPostMeta = {
  slug: string;
  title: string;
  /** SEO title ~50–60 characters when set */
  metaTitle?: string;
  description: string;
  publishedAt: string;
  readingTimeMinutes: number;
  keywords: string;
};

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "how-ai-transforms-businesses",
    title: "How AI is Transforming Businesses",
    metaTitle: "How AI Is Transforming Businesses | HelixCore",
    description:
      "Discover how practical AI adoption—from automation to copilots—is reshaping operations, customer experience, and competitive advantage in 2026, with guidance tied to real delivery.",
    publishedAt: "2026-05-02",
    readingTimeMinutes: 9,
    keywords:
      "AI transforming business, AI adoption, AI development services Lahore, automation, HelixCore Studio",
  },
  {
    slug: "cost-of-game-development-2026",
    title: "Cost of Game Development in 2026",
    metaTitle: "Cost of Game Development in 2026 | HelixCore",
    description:
      "A realistic look at game budgets in 2026: milestones, platforms, UA creatives, and hidden costs—plus how studios stretch runway without sacrificing quality.",
    publishedAt: "2026-05-02",
    readingTimeMinutes: 10,
    keywords:
      "game development cost 2026, Unity budget, playable ads cost, game development company, HelixCore Studio",
  },
  {
    slug: "why-businesses-need-modern-web-apps",
    title: "Why Businesses Need Modern Web Apps",
    metaTitle: "Why Businesses Need Modern Web Apps | HelixCore",
    description:
      "Modern web apps combine SEO, speed, and integrations businesses rely on. Learn what “modern” means in 2026 and how to prioritize investments.",
    publishedAt: "2026-05-02",
    readingTimeMinutes: 9,
    keywords:
      "modern web apps, Next.js business, web development services Lahore, SaaS, HelixCore Studio",
  },
];

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getOtherPosts(currentSlug: string): BlogPostMeta[] {
  return blogPosts.filter((p) => p.slug !== currentSlug);
}

const sidebarServiceSlugs: Record<string, string[]> = {
  "how-ai-transforms-businesses": [
    "ai-development",
    "automation-services",
    "web-development",
    "full-stack-web-development",
    "ai-agent-services",
  ],
  "cost-of-game-development-2026": [
    "game-development",
    "unity-game-development",
    "playable-ads-development",
    "html5-web-games",
    "mobile-console-porting",
  ],
  "why-businesses-need-modern-web-apps": [
    "web-development",
    "full-stack-web-development",
    "ecommerce-development",
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
