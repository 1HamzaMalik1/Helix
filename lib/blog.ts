import type { ServiceFaqItem } from "@/lib/page-jsonld";
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
  {
    slug: "mvp-development-cost-and-timeline-2026",
    title: "MVP Development Cost & Timeline in 2026",
    metaTitle: "MVP Cost & Timeline 2026 | HelixCore",
    description:
      "What founders actually pay for an MVP in 2026, how long discovery-to-launch takes, and how to scope so you learn fast without burning runway—plus FAQs for budgeting.",
    publishedAt: "2026-05-15",
    readingTimeMinutes: 11,
    keywords:
      "MVP development cost, MVP timeline, startup MVP budget, SaaS MVP, prototype cost 2026, HelixCore Studio",
  },
  {
    slug: "outsource-software-development-pakistan-lahore",
    title: "Outsourcing Software Development to Pakistan & Lahore",
    metaTitle: "Outsource Software to Pakistan | HelixCore",
    description:
      "Why teams hire Pakistan-based engineering, what to look for in a partner, time zones and IP, and how to run pilots that de-risk offshore delivery—with practical FAQs.",
    publishedAt: "2026-05-15",
    readingTimeMinutes: 10,
    keywords:
      "outsource software development Pakistan, Lahore software house, offshore development team, hire developers Pakistan, HelixCore Studio",
  },
  {
    slug: "hire-unity-developers-what-to-know-2026",
    title: "Hire Unity Developers: What to Know in 2026",
    metaTitle: "Hire Unity Developers 2026 | HelixCore",
    description:
      "Skills to test, red flags in job posts, freelance vs studio, rates vs outcomes, and how to structure trials before you commit—FAQ-backed guidance for hiring managers.",
    publishedAt: "2026-05-15",
    readingTimeMinutes: 10,
    keywords:
      "hire Unity developer, Unity freelancer vs agency, game developer interview, Unity 2026, HelixCore Studio",
  },
  {
    slug: "ai-chatbot-for-business-website-guide",
    title: "AI Chatbots for Business Websites: A Practical Guide",
    metaTitle: "AI Chatbot for Business Website | HelixCore",
    description:
      "When a customer-facing chatbot makes sense, RAG vs scripted bots, compliance basics, and how to measure ROI—without turning your homepage into an experiment.",
    publishedAt: "2026-05-15",
    readingTimeMinutes: 10,
    keywords:
      "AI chatbot business website, ChatGPT customer support, website chatbot ROI, RAG chatbot, HelixCore Studio",
  },
];

/** FAQs for JSON-LD and in-article rendering; keyed by post slug. */
export const blogPostFaqs: Record<string, ServiceFaqItem[]> = {
  "mvp-development-cost-and-timeline-2026": [
    {
      question: "How much does an MVP typically cost in 2026?",
      answer:
        "A focused web or mobile MVP with auth, core workflows, and analytics often lands in a wide band depending on design fidelity, integrations, and compliance. Marketing sites are cheaper; multi-tenant SaaS or regulated flows cost more. The honest answer is: define the smallest shippable slice first—then estimate against that scope, not a vague “full product later.”",
    },
    {
      question: "How long does MVP development take?",
      answer:
        "Calendar time depends on discovery depth, design assets, and third-party APIs. Many teams plan in milestones: discovery and UX, vertical slice, alpha with internal users, then a controlled beta. Rushing discovery usually borrows time from launch stability—budget explicit iterations instead of pretending one linear timeline fits.",
    },
    {
      question: "Should I build a no-code MVP first?",
      answer:
        "No-code can validate messaging and simple funnels quickly. If you expect to evolve auth, permissions, reporting, or integrations, plan a migration path early—otherwise you rebuild twice. Hybrid approaches (no-code front + custom backend) work only when boundaries are crisp.",
    },
    {
      question: "What is included in an MVP vs a prototype?",
      answer:
        "A prototype proves an idea to stakeholders or investors; an MVP is stable enough for paying or high-intent users with observability and support paths. MVPs include error handling, backups, and basic security—because real usage will find edge cases immediately.",
    },
    {
      question: "How do I control MVP scope creep?",
      answer:
        "Write a one-page outcome definition, freeze “must-have” user stories, and timebox “nice-to-haves.” Change control should name cost and schedule impact before work starts. Good partners push back politely when scope silently expands—protecting your runway is part of the job.",
    },
  ],
  "outsource-software-development-pakistan-lahore": [
    {
      question: "Is Pakistan a good place to outsource software development?",
      answer:
        "Pakistan has a deep engineering pipeline, competitive rates, and strong English communication in professional firms. Success depends less on geography than on vendor maturity: documentation, CI/CD, security practices, and references from comparable projects—not generic portfolio screenshots.",
    },
    {
      question: "What about time zone overlap with the US and Europe?",
      answer:
        "Lahore-based teams commonly offer overlapping hours for standups, demos, and releases—often mornings aligned to EU and late afternoon windows for US East Coast. Async discipline (written decisions, recorded demos) matters as much as live overlap.",
    },
    {
      question: "How do I protect IP when outsourcing offshore?",
      answer:
        "Use NDAs and master services agreements that cover code ownership, confidentiality, and subprocessors. Repositories should live under your org where possible, with least-privilege access. Ask how vendors handle secrets, backups, and offboarding—before kickoff, not after incidents.",
    },
    {
      question: "What red flags should I watch for in an offshore partner?",
      answer:
        "Opaque teams (“we’ll assign someone later”), no staging environment, missing test strategy, or unwillingness to show recent client references for similar complexity. Also beware quotes that assume zero discovery—those collapse when reality arrives.",
    },
    {
      question: "Should I start with a fixed-price pilot?",
      answer:
        "Fixed-price works when requirements are bounded and acceptance criteria are objective. For discovery-heavy work, time-and-materials with a capped budget or phased SOWs reduces gaming estimates. Many healthy relationships begin with a small paid pilot, then scale.",
    },
  ],
  "hire-unity-developers-what-to-know-2026": [
    {
      question: "What skills should a Unity developer have in 2026?",
      answer:
        "Strong C#, component architecture, profiling (CPU/GPU/memory), and platform packaging for your targets (mobile, PC, WebGL). For multiplayer, ask about prediction, authority models, and cheating considerations—not buzzwords. Version control habits and CI familiarity separate seniors from copy-paste tutorials.",
    },
    {
      question: "Freelance Unity developer vs game studio: which should I pick?",
      answer:
        "Freelancers fit narrow tasks with clear specs. Studios add redundancy, code review, and continuity if someone gets sick mid-milestone. If your roadmap spans art, backend, and store submission, a studio or blended team usually reduces coordination tax.",
    },
    {
      question: "How should I structure a paid trial before hiring?",
      answer:
        "Pick a bounded task with a realistic brief—implement a mechanic slice, fix a performance regression, or ship a tiny internal build. Pay fairly; free trials attract the wrong incentives. Evaluate communication cadence and how they document assumptions.",
    },
    {
      question: "What Unity interview questions actually matter?",
      answer:
        "Ask them to walk through a past bug hunt or optimization pass with metrics before/after. Scenario questions about asset bundles, scene management, and build size trade-offs reveal depth better than trivia about API names.",
    },
    {
      question: "How do rates for Unity developers compare globally?",
      answer:
        "Rates vary by seniority and region, but outcome variance is wider than hourly spread. A senior who ships stable builds in two weeks can cost less than a junior who burns a month on avoidable refactors—optimize for milestone velocity and defect rates, not sticker price alone.",
    },
  ],
  "ai-chatbot-for-business-website-guide": [
    {
      question: "Should I add an AI chatbot to my business website?",
      answer:
        "Add one when you have clear intents—sales qualification, support deflection, booking—and content or tools the bot can ground answers in. If your problem is simply “we never answer email,” sometimes forms, SLA-backed humans, or better FAQs move the needle faster than models.",
    },
    {
      question: "What is RAG and when do I need it?",
      answer:
        "Retrieval-augmented generation lets a model answer from your documents or help center instead of guessing from general training. It helps for policy-heavy or product-specific questions. You still need evaluation, access control, and human escalation for sensitive actions.",
    },
    {
      question: "Are customer-facing chatbots risky for compliance?",
      answer:
        "They can be if they invent policies or leak private data. Mitigate with guardrails, logging, PII minimization, and disclosures where regulations require them. For finance or health-adjacent flows, legal review should precede broad rollout—not post-launch panic patches.",
    },
    {
      question: "How do I measure chatbot ROI?",
      answer:
        "Track deflection rate, average handle time for escalated tickets, conversion on assisted sessions, and error rates on tool calls. Tie metrics to business outcomes—qualified leads, refunds avoided, onboarding completion—not vanity conversation counts.",
    },
    {
      question: "Can I start small and expand later?",
      answer:
        "Yes. Launch on a narrow FAQ or internal pilot, measure quality, then widen channels. Feature flags and staged rollouts prevent a bad bot experience from damaging brand trust site-wide.",
    },
  ],
};

export function getBlogPostFaqs(slug: string): ServiceFaqItem[] {
  return blogPostFaqs[slug] ?? [];
}

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/** Newest `publishedAt` first — use for blog index, JSON-LD, and “more posts” lists. */
export function getSortedBlogPosts(): BlogPostMeta[] {
  return [...blogPosts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getOtherPosts(currentSlug: string): BlogPostMeta[] {
  return getSortedBlogPosts().filter((p) => p.slug !== currentSlug);
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
  "mvp-development-cost-and-timeline-2026": [
    "full-stack-web-development",
    "web-development",
    "ai-development",
    "ecommerce-development",
  ],
  "outsource-software-development-pakistan-lahore": [
    "web-development",
    "full-stack-web-development",
    "ai-development",
    "game-development",
  ],
  "hire-unity-developers-what-to-know-2026": [
    "unity-game-development",
    "game-development",
    "playable-ads-development",
    "mobile-console-porting",
  ],
  "ai-chatbot-for-business-website-guide": [
    "ai-agent-services",
    "ai-development",
    "web-development",
    "automation-services",
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
