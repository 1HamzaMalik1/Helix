import type { BlogPostMeta } from "./blog";

type Guide = {
  meta: BlogPostMeta;
  intro: string;
  sections: { heading: string; paragraphs?: string[]; steps?: string[] }[];
  services: string[];
  links: { label: string; href: string }[];
};

const publishedAt = "2026-11-12";

export const guides2027: Guide[] = [
  {
    meta: {
      slug: "html5-playable-ad-upload-errors-2027",
      title: "HTML5 Playable Ad Upload Errors: A 2027 Google Ads Checklist",
      metaTitle: "Fix HTML5 Playable Ad Upload Errors in 2027",
      description: "Diagnose rejected or blank HTML5 playable ads for Google App campaigns. Check ZIP packaging, asset paths, orientation, exits, and mobile QA.",
      publishedAt,
      readingTimeMinutes: 3,
      keywords: "HTML5 playable ad upload error, Google Ads playable ads, HTML5 ad validator, playable ad ZIP",
    },
    intro: "If a playable works in your browser but fails in Google Ads, test the exact ZIP you uploaded. A development server can quietly provide assets, rewrite paths, or allow interactions that the ad placement does not. First confirm that the campaign type supports HTML5 playables, then isolate whether the problem is packaging, rendering, or the exit.",
    sections: [
      { heading: "1. Check the campaign and package", steps: [
        "Use the requirements for HTML5 assets in App campaigns. Google has separate rules for uploaded Display creatives, and a checklist written for one is not interchangeable with the other.",
        "Unzip the exported package into a clean folder. Confirm the HTML entry point, orientation declaration, and the size and file count against the current campaign requirements.",
        "Check filenames and paths after export. For example, assets/hand.webp and assets/Hand.webp may resolve the same way on your laptop and differently on a case-sensitive host. Inspect the exported references, including paths inside CSS and JavaScript.",
      ] },
      { heading: "2. Reproduce a blank screen", paragraphs: [
        "Serve the unpacked files locally and reload with the browser cache disabled. Look at the first failed request and the first console exception before changing the design. Test without access to your staging CDN so you can find dependencies that were never bundled.",
        "On a phone, test the first tap, drag, or swipe, then check what happens at the end of a round. A build that renders but cannot receive touch input is still broken. Check both declared orientations if the export supports both.",
      ] },
      { heading: "3. Validate the final ZIP and exit", paragraphs: [
        "Use Google's HTML5 Validator on the exact upload file. Follow the App campaign documentation for any custom exit rather than copying a click handler from another network. Preview the end card and confirm that a gameplay gesture does not accidentally trigger a store exit.",
        "Name the export with the network, orientation, and revision. Record the rejected ZIP, validator output, and what changed. If the fixed build still fails, those three items make a useful support handoff.",
      ] },
    ],
    services: ["playable-ads-development", "video-ads-development"],
    links: [
      { label: "Google Ads: HTML5 and playable App campaign requirements", href: "https://support.google.com/google-ads/answer/9981650" },
      { label: "Google Ads: App campaign asset and validator guidance", href: "https://support.google.com/google-ads/answer/9176652" },
      { label: "Mobile game video ad testing guide", href: "/blog/mobile-game-video-ad-creative-fatigue-2027" },
    ],
  },
  {
    meta: {
      slug: "mobile-game-video-ad-creative-fatigue-2027",
      title: "Mobile Game Video Ads in 2027: How to Diagnose Creative Fatigue",
      metaTitle: "Mobile Game Video Ads: Fix Creative Fatigue in 2027",
      description: "Diagnose rising install costs and test mobile game video ad hooks, gameplay cuts, and end cards without confusing creative fatigue with delivery changes.",
      publishedAt,
      readingTimeMinutes: 3,
      keywords: "mobile game video ads, creative fatigue, video ad hooks, mobile game user acquisition, rising CPI",
    },
    intro: "A higher cost per install does not automatically mean your video has worn out. Compare spend, impressions, installs, and post-install actions across similar dates and markets before paying for a new batch of ads. The goal is to find which part of the path from impression to gameplay changed.",
    sections: [
      { heading: "Find where performance changed", steps: [
        "If impressions cost more while click and install rates are steady, investigate delivery changes first: placement mix, market, audience, bid, and budget.",
        "If clicks or installs per impression drop while delivery conditions are comparable, test the opening shot or message. Check whether the same decline appears across all creatives or is concentrated in one concept.",
        "If clicks hold but installs or tutorial completion fall, inspect the store listing and the ad-to-game match. A hook can win attention while attracting players who expect a different game.",
      ] },
      { heading: "Plan three variants from one gameplay capture", paragraphs: [
        "For a physics puzzle, try an opening that shows the target, one that starts just before a near miss, and one that starts with the result before showing how the player got there. Keep the mechanic, end card, and store destination consistent for that round of testing.",
        "Compose the footage for each intended aspect ratio. On a small phone, a cropped board can hide the target and make the action unreadable. Preview muted as well as with sound; captions should clarify the objective without covering the interaction.",
      ] },
      { heading: "Decide what to keep before the test goes live", paragraphs: [
        "Keep an existing version as a baseline and define the outcome you care about, such as cost per player who completes the tutorial. Track spend, installs, and the number of players who reach that event. Compare cohorts with enough time to mature and treat tiny samples as inconclusive.",
        "Google App campaigns combine assets and can deliver them unevenly. Use asset reports as directional feedback; use a controlled experiment when you need to isolate one change. If players need to feel the mechanic to understand it, test a playable based on the same concept as a separate creative.",
      ] },
    ],
    services: ["video-ads-development", "playable-ads-development"],
    links: [
      { label: "Google Ads: make better creative assets for App campaigns", href: "https://support.google.com/google-ads/answer/6167158" },
      { label: "HTML5 playable ad upload checklist", href: "/blog/html5-playable-ad-upload-errors-2027" },
    ],
  },
  {
    meta: {
      slug: "shopify-migration-seo-checklist-2027",
      title: "Shopify Migration SEO Checklist for 2027: Redirects, Indexing, and Recovery",
      metaTitle: "Shopify Migration SEO Checklist for 2027",
      description: "Plan Shopify redirects, preserve valuable landing pages, and diagnose organic traffic drops after a store migration using Google Search Console.",
      publishedAt,
      readingTimeMinutes: 3,
      keywords: "Shopify migration SEO checklist, Shopify 301 redirects, Shopify traffic drop after migration, Shopify website development",
    },
    intro: "Before moving a store to Shopify, make a list of the old URLs people actually use. A product import moves catalog data; it does not tell browsers or Google where old landing pages went. Build a redirect map and test it before making the new storefront public.",
    sections: [
      { heading: "Before launch: map the pages worth preserving", paragraphs: [
        "Combine old sitemap URLs with landing pages from Search Console, analytics, and backlinks. For each row, record the old URL, new destination, page type, and whether the destination is ready. Include collections and buying guides as well as products.",
        "For example, map /gear/running-shoes to the matching new collection, rather than to the homepage. If an old product has no equivalent, decide whether a genuinely useful successor exists or the URL should return 404. Review Shopify's redirect restrictions early, especially when a source path already resolves to a live Shopify page.",
      ] },
      { heading: "At launch: verify a direct path to the new page", steps: [
        "Test important old URLs against the public domain. Confirm each permanent redirect lands on the intended final URL in one hop and that the final page returns HTTP 200.",
        "Update menus, collection links, and product links to point directly to the new addresses. Verify the new pages are indexable and that canonical tags and the sitemap point to the intended URLs.",
        "Submit the new sitemap in Search Console. If the domain itself changes and the move qualifies, follow Google's Change of Address process. Keep permanent redirects in place for at least a year where possible.",
      ] },
      { heading: "After launch: investigate traffic loss by page type", paragraphs: [
        "Compare Search Console impressions and clicks for the old and new pages together, grouped by products, collections, and editorial pages. Inspect a sample of missing destinations for unexpected noindex directives, redirect chains, or mismatched canonicals. If impressions are stable but orders drop, check analytics and checkout before assuming you have an indexing issue.",
      ] },
    ],
    services: ["ecommerce-development", "web-development"],
    links: [
      { label: "Shopify Help: creating, importing, and testing URL redirects", href: "https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect" },
      { label: "Google Search Central: site moves with URL changes", href: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" },
    ],
  },
  {
    meta: {
      slug: "unity-game-prototype-cost-2027",
      title: "Unity Game Prototype Cost in 2027: Build a Budget Before Full Production",
      metaTitle: "Unity Game Prototype Cost and Budget in 2027",
      description: "Estimate a Unity game prototype using milestones, device tests, and a worked budget. Decide when a prototype needs a vertical slice or multiplayer spike.",
      publishedAt,
      readingTimeMinutes: 3,
      keywords: "Unity game prototype cost, game prototype budget, Unity vertical slice cost, mobile game development estimate",
    },
    intro: "Budget a Unity prototype around the question it needs to answer. For a mobile puzzle, that might be whether players understand a mechanic without a tutorial. For a multiplayer game, it might be whether play remains fair under network delay. Those prototypes need different work, even if both contain one level.",
    sections: [
      { heading: "Choose between a prototype and a vertical slice", paragraphs: [
        "A prototype tests a mechanic or a technical risk with whatever art is sufficient to learn. A vertical slice shows a representative piece of the intended release, so it can also require polished art, UI, sound, and performance work. Specify which outcome you need in your brief; vendors otherwise may quote different products.",
      ] },
      { heading: "Price deliverables and acceptance criteria", steps: [
        "Name the core loop and the smallest playable level that tests it. List the build target and real devices or operating system versions that must be tested.",
        "Separate engineering, temporary assets, playtest setup, bug fixes, and handover in the estimate. Specify who owns the Unity project, what third-party licenses are needed, and what happens after the review.",
        "If networking, procedural generation, or difficult physics is the main unknown, price a short technical spike first. Define a stop condition and decide what evidence would justify more production work.",
      ] },
      { heading: "A worked budget example", paragraphs: [
        "Suppose a quote allocates 50 hours to the loop and level, 15 to temporary assets and UI, 15 to device testing and fixes, and 10 to review and handover. At an assumed blended rate of $60 per hour, 90 hours costs $5,400 before a buffer. A 15% buffer adds $810, for an illustrative budget of $6,210. These inputs are examples, not market rates or a HelixCore quote.",
        "Compare estimates against the same handover: for example, one playable Android build, the editable Unity project, and a short playtest report. Check whether store submission, live operations, backend hosting, or a second platform are included before treating one proposal as cheaper.",
      ] },
    ],
    services: ["unity-game-development", "game-development"],
    links: [
      { label: "Unity's game development report for industry context", href: "https://unity.com/blog/2026-unity-game-development-report-trends" },
      { label: "See our published Unity puzzle game, Smash Fest", href: "/smash-fest" },
    ],
  },
  {
    meta: {
      slug: "custom-software-development-estimate-2027",
      title: "Custom Software Development Cost in 2027: How to Compare Estimates",
      metaTitle: "Custom Software Development Estimates in 2027",
      description: "Compare custom software development estimates by workflow, integrations, migration, testing, and support with a worked example for a customer portal.",
      publishedAt,
      readingTimeMinutes: 3,
      keywords: "custom software development cost, software project estimate, customer portal development cost, compare software development quotes",
    },
    intro: "Custom software costs are easier to compare when every vendor estimates the same workflow. A request for a customer portal might mean a simple login and order history to one team, but role-based approvals, CRM synchronization, and data migration to another. Write down the differences before comparing prices.",
    sections: [
      { heading: "Give every vendor the same brief", steps: [
        "List the users and roles, what each can see or change, and the workflows that need to work on day one. Include examples of exceptions, such as a canceled order or a user whose access was revoked.",
        "Name the systems you need to connect, who controls the credentials, which system owns each field, and how much existing data must be migrated. Share a redacted sample instead of production credentials.",
        "Ask for separate estimates for discovery, build, migration, acceptance testing, and launch support. Include recurring costs for hosting, third-party tools, and maintenance so the first invoice is not your only comparison.",
      ] },
      { heading: "Compare the acceptance criteria behind each quote", paragraphs: [
        "Take an order history screen. One quote includes a daily import from a CSV. Another includes near-real-time updates, retry handling when the source goes offline, and an audit history for support. Both list an order history screen, but only one prices the reliability requirements. Ask which approach matches the business need before selecting either proposal.",
        "Request a written list of exclusions and dependencies. A fixed price is useful for a clearly bounded scope; for an unknown integration, a time-boxed discovery task can expose costs before you commit to a full build.",
      ] },
      { heading: "Build a first-year estimate, not just a build estimate", paragraphs: [
        "Suppose a portal proposal is $24,000 for design and engineering, $3,000 for migration, and $500 per month for infrastructure and support. The first-year total is $33,000 before taxes or contingency. This example shows how to compare quotes; it is not a market benchmark. Ask how usage growth, new integrations, and post-launch changes affect that number.",
      ] },
    ],
    services: ["web-development", "full-stack-web-development"],
    links: [{ label: "How to evaluate an outsourced software development team", href: "/blog/outsource-software-development-pakistan-lahore" }],
  },
];

export function getGuide2027(slug: string) {
  return guides2027.find(({ meta }) => meta.slug === slug);
}
