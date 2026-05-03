import { services, type Service } from "@/lib/constants";

export type NavServiceGroup = {
  title: string;
  description: string;
  slugs: readonly string[];
};

/** Groupings for mega menus, footer columns, and homepage service bands — edit slugs only; titles are display copy. */
export const NAV_SERVICE_GROUPS: readonly NavServiceGroup[] = [
  {
    title: "AI & automation",
    description: "Agents, integrations, and intelligent workflows",
    slugs: ["ai-development", "ai-agent-services", "automation-services"],
  },
  {
    title: "Games & interactive",
    description: "Unity, playables, web games, and porting",
    slugs: [
      "game-development",
      "unity-game-development",
      "playable-ads-development",
      "html5-web-games",
      "mobile-console-porting",
    ],
  },
  {
    title: "Web & platforms",
    description: "Full-stack products, ecommerce, and cloud-ready apps",
    slugs: ["web-development", "full-stack-web-development", "ecommerce-development"],
  },
] as const;

export function getNavServiceGroups(): {
  title: string;
  description: string;
  items: Service[];
}[] {
  return NAV_SERVICE_GROUPS.map((group) => ({
    title: group.title,
    description: group.description,
    items: group.slugs
      .map((slug) => services.find((s) => s.slug === slug))
      .filter((s): s is Service => Boolean(s)),
  })).filter((g) => g.items.length > 0);
}
