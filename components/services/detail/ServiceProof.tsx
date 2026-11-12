import Link from "next/link";
import { ArrowRight } from "lucide-react";
import StudioProofBadges from "@/components/seo/StudioProofBadges";

type Proof = {
  heading: string;
  paragraphs: string[];
  links: { label: string; href: string }[];
};

const proofBySlug: Record<string, Proof> = {
  "game-development": {
    heading: "Unity game development from prototype to release",
    paragraphs: ["Start with a playable build that tests the core loop. Then plan the level progression, performance targets, device testing, and store submission around the platforms you intend to launch on. See Smash Fest for an example of our physics puzzle work on Android."],
    links: [
      { label: "Explore Smash Fest on Android", href: "/smash-fest" },
      { label: "Unity game development services", href: "/services/unity-game-development" },
      { label: "Budget a Unity game prototype for 2027", href: "/blog/unity-game-prototype-cost-2027" },
      { label: "Playable ads for games", href: "/services/playable-ads-development" },
    ],
  },
  "web-development": {
    heading: "Custom software development for web products",
    paragraphs: ["We build SaaS products, customer portals, and internal tools. A typical scope covers user roles, data models, API integrations, and deployment, with a working build to review at each milestone. For existing systems, we start by identifying which workflows and integrations need to carry over."],
    links: [
      { label: "Full-stack software development", href: "/services/full-stack-web-development" },
      { label: "Compare custom software development estimates", href: "/blog/custom-software-development-estimate-2027" },
      { label: "Guide to outsourcing software development", href: "/blog/outsource-software-development-pakistan-lahore" },
      { label: "Shopify and ecommerce development", href: "/services/ecommerce-development" },
    ],
  },
  "ecommerce-development": {
    heading: "Shopify website development and store migrations",
    paragraphs: ["We scope Shopify builds around your catalog, storefront, and fulfillment workflow. Work can include Liquid theme customization, product collections, store navigation, and integrations for inventory, analytics, or subscriptions.", "For a migration, plan the product and collection URL mapping before launch. Review redirects, product metadata, and sitemap coverage alongside checkout and order testing so shoppers and search engines can find the new storefront."],
    links: [
      { label: "Shopify migration SEO checklist", href: "/blog/shopify-migration-seo-checklist-2027" },
      { label: "Custom web development and integrations", href: "/services/web-development" },
    ],
  },
  "playable-ads-development": {
    heading: "HTML5 playable ads built around one gameplay hook",
    paragraphs: ["Turn a core mechanic into an interactive ad a player can understand in seconds. We scope the first interaction, feedback, and call to action, then prepare the HTML5 build around each destination network's package, input, and load requirements.", "A video ad and a playable can test the same idea in different formats: one shows the mechanic, and the other lets a player try it. Compare creative variants using the install and engagement metrics your campaign already tracks."],
    links: [
      { label: "See our playable ads portfolio", href: "/hamza-hakim#projects" },
      { label: "Read our playable ads development guide", href: "/blog/playable-ads-development-services" },
      { label: "Troubleshoot Google Ads playable upload errors", href: "/blog/html5-playable-ad-upload-errors-2027" },
      { label: "Mobile game video ads production", href: "/services/video-ads-development" },
    ],
  },
  "video-ads-development": {
    heading: "Short-form video creative for mobile game campaigns",
    paragraphs: ["Start with the game build or gameplay footage, your brand assets, and the placements you plan to use. We plan an opening hook, a clear demonstration of the mechanic, and an end card with a call to action.", "Build variants by changing one element at a time, such as the opening shot, caption, or gameplay sequence. Agree on the lengths, aspect ratios, language versions, and export specifications in the brief so each cut fits its intended placement."],
    links: [
      { label: "Watch the Smash Fest gameplay preview", href: "/smash-fest#smash-fest-video" },
      { label: "Diagnose video ad creative fatigue", href: "/blog/mobile-game-video-ad-creative-fatigue-2027" },
      { label: "Pair your video with a playable ad", href: "/services/playable-ads-development" },
      { label: "Explore Unity game development", href: "/services/unity-game-development" },
    ],
  },
};

export function getServiceProof(slug: string): Proof | undefined {
  return proofBySlug[slug];
}

export default function ServiceProof({ proof }: { proof: Proof }) {
  return (
    <section aria-labelledby="service-proof-heading" className="border-b border-zinc-200 bg-zinc-50 py-12 md:py-16">
      <div className="container mx-auto max-w-6xl space-y-6">
        <div className="max-w-3xl space-y-4">
          <h2 id="service-proof-heading" className="text-2xl font-bold leading-snug text-zinc-950 md:text-3xl">{proof.heading}</h2>
          {proof.paragraphs.map((paragraph) => <p key={paragraph} className="text-sm leading-relaxed text-zinc-700 md:text-base">{paragraph}</p>)}
          <ul className="space-y-2">
            {proof.links.map(({ label, href }) => (
              <li key={href}><Link href={href} className="inline-flex items-center gap-2 py-1 text-sm font-semibold text-orange-800 underline underline-offset-4 hover:text-zinc-950"><ArrowRight className="h-4 w-4 shrink-0" aria-hidden />{label}</Link></li>
            ))}
          </ul>
        </div>
        <StudioProofBadges />
      </div>
    </section>
  );
}
