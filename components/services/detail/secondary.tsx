import Link from "next/link";
import type { ReactNode } from "react";
import type { ServiceFaqItem } from "@/lib/page-jsonld";
import { LinkAI, LinkGame, LinkWeb } from "./InternalLink";

export const secondaryFaqs: Record<string, ServiceFaqItem[]> = {
  "unity-game-development": [
    {
      question: "What types of Unity games do you build?",
      answer:
        "We build 2D and 3D experiences for mobile, PC, and Steam where applicable—casual to mid-core depending on scope—plus tooling for analytics hooks and remote content when live ops matter. Multiplayer features are scoped with networking architecture and cheating/abuse considerations early.",
    },
    {
      question: "How do you optimize Unity builds for mobile performance?",
      answer:
        "We profile CPU vs GPU bottlenecks, manage draw calls and overdraw, tune asset bundles, and validate on reference devices—not only emulators. Memory spikes and thermal throttling factor into art decisions and update cadence.",
    },
    {
      question: "Can you integrate Steamworks or platform achievements?",
      answer:
        "Yes, where your distribution strategy includes Steam or other PC storefronts. We map achievement definitions, cloud saves where supported, and build pipelines that platform partners expect for certification.",
    },
    {
      question: "Do Unity projects include analytics and crash reporting?",
      answer:
        "We wire industry-standard SDKs where you specify them, define event taxonomies for funnel analysis, and ensure symbols upload for readable crash stacks. Privacy disclosures follow store policies for your audience regions.",
    },
    {
      question: "How does Unity development relate to playable ads?",
      answer:
        "Many UA strategies pair full-game production with lightweight creatives. We align hooks and branding between the Unity build and playable variants so acquisition messaging matches the store listing—see our playable ads service for network-specific constraints.",
    },
    {
      question: "Do you work with clients outside Pakistan?",
      answer:
        "Yes. HelixCore Studio routinely ships for publishers and indie teams globally with remote repositories, milestone demos, and documented release notes.",
    },
  ],
  "playable-ads-development": [
    {
      question: "What is a playable ad?",
      answer:
        "A playable ad is an interactive mini-experience—often HTML5 or Unity-exported—embedded in mobile ad networks so users try a slice of gameplay before install. Networks impose strict size, load-time, and interaction rules.",
    },
    {
      question: "Which ad networks do you support?",
      answer:
        "We build for major UA channels including Meta, TikTok, AppLovin, Unity Ads, ironSource / Unity LevelPlay, Mintegral, and similar partners—each with SDK nuances and creative QA steps.",
    },
    {
      question: "How do you hit aggressive file-size and load-time budgets?",
      answer:
        "We prioritize the core hook in the first seconds, compress assets intelligently, defer non-critical audio, and test on throttled networks. Iteration cycles focus on CTR and IPM improvements backed by your MMP data.",
    },
    {
      question: "Can playables match our full game branding?",
      answer:
        "Yes. We sync UI motifs, characters, and win/lose moments with your store assets while respecting technical limits. Misalignment between creative and store page hurts conversion—we avoid that drift deliberately.",
    },
    {
      question: "How do playable ads connect to full game development?",
      answer:
        "Hooks tested in playables inform tutorial design in the full Unity build. When HelixCore Studio handles both, feedback loops stay tight between UA creatives and product milestones.",
    },
    {
      question: "What does iteration cost look like?",
      answer:
        "Smaller tweaks—timing, copy, end cards—cycle quickly. Larger gameplay pivots or new mechanics reset QA paths; we estimate effort against network re-submission timelines.",
    },
  ],
  "ecommerce-development": [
    {
      question: "Which ecommerce platforms do you customize?",
      answer:
        "Shopify, WooCommerce on WordPress, Webflow commerce, Wix, and fully custom stacks when differentiation requires bespoke catalogs, pricing rules, or integrations beyond template limits.",
    },
    {
      question: "How do you approach checkout conversion and security?",
      answer:
        "We streamline guest checkout where appropriate, surface trust signals, instrument funnel drop-offs, and enforce HTTPS, PCI-aligned payment flows, and least-privilege admin access.",
    },
    {
      question: "Can you integrate ERP, CRM, or fulfillment tools?",
      answer:
        "Yes—via APIs, middleware, or scheduled jobs depending on volumes and latency needs. We document reconciliation paths for inventory and returns so finance teams stay aligned.",
    },
    {
      question: "Will my store be SEO-friendly?",
      answer:
        "We implement semantic HTML, structured data for products where relevant, clean URL patterns, and performance budgets that support Core Web Vitals—especially on listing and detail templates.",
    },
    {
      question: "How is ecommerce scoped alongside broader web work?",
      answer:
        "Stores often share auth, analytics, and design systems with marketing sites or SaaS portals. We coordinate with our web development practice so components and APIs stay DRY.",
    },
    {
      question: "Do you support international selling?",
      answer:
        "Multi-currency, duties estimates, and regional tax rules vary by platform and provider; we map requirements early and test edge cases before peak seasons.",
    },
  ],
  "ai-agent-services": [
    {
      question: "What is an AI agent in a business context?",
      answer:
        "An AI agent is software that plans steps, calls tools (APIs, databases, ticketing systems), and produces outputs within guardrails—often via LLMs plus orchestration. Unlike static chatbots, agents can chain actions when policies allow.",
    },
    {
      question: "How do you prevent agents from taking unauthorized actions?",
      answer:
        "Role-based permissions, explicit tool allowlists, confirmation steps for sensitive operations, and verbose audit logs. We model worst-case misuse scenarios during design—not after launch.",
    },
    {
      question: "Can agents connect to Slack, Zendesk, or custom backends?",
      answer:
        "Yes. Integrations are core to ROI: notifications, ticket updates, knowledge retrieval, and CRM writes happen through stable APIs with backoff and idempotency.",
    },
    {
      question: "How is this different from general AI development?",
      answer:
        "AI agent services emphasize orchestration, tool reliability, and multi-step workflows rather than single-shot prompts. Many clients combine agents with broader AI development for retrieval and model strategy.",
    },
    {
      question: "What metrics define success?",
      answer:
        "Deflection rate, average handle time, task completion without escalation, error rates on tool calls, and cost per resolved issue—chosen collaboratively during discovery.",
    },
    {
      question: "Do you serve international teams?",
      answer:
        "Yes. Agents are deployed where your infrastructure lives; we coordinate compliance reviews when customer data crosses borders.",
    },
  ],
  "automation-services": [
    {
      question: "What processes are good candidates for automation?",
      answer:
        "High-volume, rule-heavy workflows with clear inputs—onboarding checks, invoice routing, report compilation, lead enrichment—especially when humans currently copy-paste between SaaS tools.",
    },
    {
      question: "Do you use RPA or code-first automation?",
      answer:
        "We prefer APIs and event-driven workflows when systems expose them; RPA-style UI automation is a fallback when legacy tools lack APIs, with maintenance trade-offs documented upfront.",
    },
    {
      question: "How do you handle failures and retries?",
      answer:
        "Idempotent jobs, dead-letter queues, alerting thresholds, and human escalation paths. Automation should degrade gracefully—not silently corrupt data.",
    },
    {
      question: "Can automation connect to AI features?",
      answer:
        "Yes. Classification, summarization, or extraction steps may feed deterministic workflows. We isolate nondeterministic stages so audits remain sensible.",
    },
    {
      question: "What is the typical engagement shape?",
      answer:
        "Discovery workshop, prioritized backlog, milestone deliveries per workflow, and hypercare after cutover with runbooks for operations teams.",
    },
    {
      question: "How does automation relate to web platforms?",
      answer:
        "Many triggers originate from web apps—form submits, transactions, admin approvals. We align events with your Next.js or API layers so automation stays observable.",
    },
  ],
  "full-stack-web-development": [
    {
      question: "What does full-stack cover in your engagements?",
      answer:
        "Browser clients, API services, persistence, authentication/authorization, background jobs, and deployment pipelines—with observability so teams can operate what we ship.",
    },
    {
      question: "Which databases and clouds do you support?",
      answer:
        "PostgreSQL is common for relational models; we also use managed offerings on AWS/GCP/Azure aligned to your compliance and latency needs—not dogmatic preferences.",
    },
    {
      question: "How do you approach testing?",
      answer:
        "Automated tests at unit and integration layers for critical paths, contract tests where services split, and staging data strategies that reflect production edge cases without exposing PII.",
    },
    {
      question: "Can you embed AI features responsibly?",
      answer:
        "Yes—feature-flagged model calls, caching where safe, and human review for sensitive outputs. Coordination with our AI development team keeps latency and cost predictable.",
    },
    {
      question: "Is full-stack distinct from marketing web development?",
      answer:
        "Marketing sites emphasize content velocity and SEO; full-stack products emphasize accounts, roles, transactions, and uptime SLAs. Overlap exists—we reuse component libraries when practical.",
    },
    {
      question: "Do you support remote teams across time zones?",
      answer:
        "Yes. Repositories, CI, and scheduled demos keep distributed stakeholders aligned.",
    },
  ],
  "html5-web-games": [
    {
      question: "When should we choose HTML5 instead of native mobile?",
      answer:
        "HTML5 excels when distribution requires instant play—ads, portals, classrooms—or when install friction hurts acquisition. Native suits heavier graphics and deeper OS integration.",
    },
    {
      question: "How do you optimize WebGL and Canvas performance?",
      answer:
        "Asset budgets, texture atlasing, pooling objects, adaptive quality steps, and cautious physics fidelity—validated on mid-tier mobile browsers where users actually play.",
    },
    {
      question: "Can HTML5 games monetize with ads or IAP?",
      answer:
        "Yes, platform policies permitting. Technical architecture differs by channel; we clarify constraints before mechanics lock.",
    },
    {
      question: "Are progressive web apps (PWAs) supported?",
      answer:
        "Where offline shells or install prompts help retention, we can package PWAs—balanced against store policies if you also ship native wrappers.",
    },
    {
      question: "How do HTML5 games tie into playable ads?",
      answer:
        "Shared hooks and assets reduce duplication when UA needs bite-sized versions of the same creative narrative.",
    },
    {
      question: "Do you build for international audiences?",
      answer:
        "Yes—localization hooks, RTL considerations where needed, and CDN strategies for asset delivery.",
    },
  ],
  "mobile-console-porting": [
    {
      question: "What does a porting project include?",
      answer:
        "Input remapping, resolution and aspect handling, performance profiling, platform-specific APIs (achievements, cloud saves where applicable), submission preparation, and patch planning.",
    },
    {
      question: "How long does porting take?",
      answer:
        "Depends on source complexity, engine parity, and certification history. A straightforward mobile port may take weeks; console-first titles with strict performance bars may take longer with TRC iterations.",
    },
    {
      question: "Can you port from PC to console or between mobile stores?",
      answer:
        "Yes—each path carries unique certification and control schemes; we document parity gaps explicitly rather than implying pixel-perfect sameness.",
    },
    {
      question: "How do you handle controller UX and tutorials?",
      answer:
        "We revise prompts, dead zones, and camera assists where thumbsticks replace touch; tutorials adapt when pacing differs from mobile.",
    },
    {
      question: "What performance targets do you test against?",
      answer:
        "Platform holders publish guidance; we bake frame-time budgets, loading ceilings, and thermal considerations into test matrices.",
    },
    {
      question: "Do porting clients engage your game development team for updates?",
      answer:
        "Often yes—live titles need parity patches across SKUs; coordinating porting with ongoing feature work reduces drift.",
    },
  ],
};

function LongformShell({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="service-longform space-y-10 text-[#2A2E30]">{children}</div>;
}

export function SecondaryServiceContent({ slug }: { slug: string }) {
  switch (slug) {
    case "unity-game-development":
      return (
        <LongformShell>
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              Unity remains the backbone of countless mobile and PC titles because it balances artist-friendly tooling with
              engineer-level control. HelixCore Studio delivers Unity game development focused on stable frame rates, clean
              architecture for gameplay systems, and milestone transparency—whether you are bootstrapping an indie release or
              supplementing an internal team ahead of a publisher deadline.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              Our Lahore-based engineers collaborate globally on gameplay programming, UI implementation, build pipelines,
              and platform integrations. When your roadmap includes{" "}
              <LinkGame>game development</LinkGame> at scale or companion{" "}
              <LinkWeb>web development</LinkWeb> for account services, we keep interfaces and schedules aligned so builds do
              not drift between disciplines.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              From puzzle loops to competitive multiplayer, we scope networking complexity honestly—prediction, host
              migration, and cheat resistance are not afterthoughts. Where appropriate we coordinate with{" "}
              <LinkAI>AI solutions</LinkAI> for analytics-driven tuning or player-support automation without compromising
              competitive integrity.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Services overview</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              Engagements may cover prototyping, vertical slices, production milestones, hardening passes, and submission
              support. Art pipelines integrate with your directors or external studios; engineering owns prefab discipline,
              scene management, and memory hygiene so artists iterate safely.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              We also support seasonal content drops when live ops demand repeatable tooling—remote assets, feature flags,
              and staged rollouts—coordinated with analytics events your growth team depends on.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Our process</h2>
            <ol className="list-decimal pl-5 space-y-4 text-sm md:text-base leading-relaxed opacity-90">
              <li>
                <strong>Mechanics &amp; risk review.</strong> Validate fun before scaling content volume.
              </li>
              <li>
                <strong>Architecture pass.</strong> Systems for progression, economy, saves, and networking boundaries.
              </li>
              <li>
                <strong>Production sprints.</strong> Integrated gameplay, UI, audio hooks, localization readiness.
              </li>
              <li>
                <strong>Performance &amp; soak testing.</strong> Device labs, crash analytics, memory leaks hunted early.
              </li>
              <li>
                <strong>Submission packaging.</strong> Store metadata, privacy questionnaires, symbol uploads.
              </li>
            </ol>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Technologies we use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base opacity-90 mb-4">
              <li>Unity2022+ pipelines; URP/HDRP choices tied to art direction</li>
              <li>C# gameplay frameworks—composition over brittle inheritance</li>
              <li>Addressables and bundle strategies for mobile footprint</li>
              <li>Platform SDKs for achievements, ads, and analytics as required</li>
            </ul>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              Companion services: explore{" "}
              <Link href="/services/playable-ads-development" className="font-semibold text-[#F46530] hover:underline">
                playable ads development
              </Link>{" "}
              for UA and{" "}
              <Link href="/services/mobile-console-porting" className="font-semibold text-[#F46530] hover:underline">
                mobile &amp; console porting
              </Link>{" "}
              when SKUs multiply.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Benefits for businesses</h2>
            <ul className="list-disc pl-5 space-y-3 text-sm md:text-base leading-relaxed opacity-90">
              <li>Predictable milestones with playable checkpoints—not opaque percentages.</li>
              <li>Engineering practices that survive content scaling and staff changes.</li>
              <li>Cross-functional empathy for UA, analytics, and store compliance.</li>
              <li>Cost leverage versus solely in-house hiring for peak periods.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Why choose HelixCore Studio</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              Our portfolio spans shipped titles and high-stakes deadlines; communication cadence and documentation reduce
              thrash when priorities shift. Teams trust us to say no to risky scope creep with data—not ego.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              Pair Unity expertise with <LinkGame>game development</LinkGame> leadership and{" "}
              <LinkWeb>web development</LinkWeb> for live services—one partner narrative for investors and players alike.
            </p>
          </section>
        </LongformShell>
      );
    case "playable-ads-development":
      return (
        <LongformShell>
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              Playable ads compress your game’s hook into seconds—often under tight megabyte ceilings—while satisfying network
              QA. HelixCore Studio engineers creatives that respect MRAID constraints, device fragmentation, and iteration
              velocity so UA teams can test hypotheses weekly.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              We collaborate with growth marketers translating CPI/IPM data back into creative revisions. When full-game
              production sits with us under <LinkGame>game development</LinkGame>, creative continuity strengthens message
              match between ad, store page, and first session.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              Lahore-based delivery with worldwide clients means async handoffs paired with scheduled creative reviews—ideal
              for teams running multi-network tests across Meta, TikTok, AppLovin, and Unity Ads simultaneously.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Services overview</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              Services span concept storyboards, mechanical prototypes, asset optimization, audio prioritization, end-card
              variants, and technical submission per partner. We document known limitations—shader support, audio autoplay
              policies—before art locks.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              For franchises also investing in <LinkWeb>web development</LinkWeb> landing pages, we align UTM flows and
              creative IDs so analytics attributions stay trustworthy.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Our process</h2>
            <ol className="list-decimal pl-5 space-y-4 text-sm md:text-base leading-relaxed opacity-90">
              <li>
                <strong>Hook definition.</strong> Identify the single interaction proving fun within seconds.
              </li>
              <li>
                <strong>Prototype &amp; size audit.</strong> Early budgets prevent painful cuts later.
              </li>
              <li>
                <strong>Network-specific QA.</strong> Device labs plus emulator matrices where allowed.
              </li>
              <li>
                <strong>Iteration loops.</strong> Creative variants tied to structured experiments.
              </li>
              <li>
                <strong>Handoff packages.</strong> Source archives, build notes, and compliance screenshots.
              </li>
            </ol>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Technologies we use</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              HTML5 canvas/WebGL exports, Unity lightweight builds, custom minifiers, and texture atlasing tuned for mobile
              GPUs. Analytics bridges vary by network—we adapt rather than force one toolkit.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              Related:{" "}
              <Link href="/services/html5-web-games" className="font-semibold text-[#F46530] hover:underline">
                HTML5 &amp; web games
              </Link>{" "}
              for longer-form browser experiences outside ad containers.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Benefits for businesses</h2>
            <ul className="list-disc pl-5 space-y-3 text-sm md:text-base leading-relaxed opacity-90">
              <li>Faster creative learning cycles without ballooning headcount.</li>
              <li>Technical credibility with network reviewers—fewer rejections.</li>
              <li>Alignment between UA metrics and product roadmap decisions.</li>
              <li>Reusable hooks when expanding into new geos or placements.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Why choose HelixCore Studio</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              We blend engineering rigor with marketing empathy—understanding that the prettiest creative fails if latency
              spikes or tutorials confuse. Partner with us alongside <LinkAI>AI solutions</LinkAI> when dynamic creative
              pipelines or summarization assists enter your UA ops stack.
            </p>
          </section>
        </LongformShell>
      );
    case "ecommerce-development":
      return (
        <LongformShell>
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              Ecommerce is where brand storytelling meets conversion discipline: fast pages, trustworthy checkout, and
              integrations that keep finance and fulfillment accurate. HelixCore Studio designs storefronts that scale—from
              curated catalogs to complex B2B pricing—without trapping you in unmaintainable plugins.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              Based in Lahore, we serve merchants and SaaS-led retailers worldwide. Our{" "}
              <LinkWeb>web development</LinkWeb> practice supplies shared component libraries so marketing pages and store
              experiences feel cohesive, improving both SEO and user trust.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              When merchandising benefits from recommendations or support chat, we coordinate{" "}
              <LinkAI>AI solutions</LinkAI> carefully—transparent disclosures, guardrails, and human escalation paths protect
              brand reputation at checkout.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Services overview</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              Platform implementations, headless architectures, subscription billing, marketplace feeds, and ERP connectors.
              We inventory SKUs, variants, and edge cases—bundles, preorders, back-in-stock—before theming drives deadlines.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              Performance budgets pair with analytics events so merchandisers see which modules earn their pixels—hero
              carousels vs dense grids—backed by real user monitoring where configured.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Our process</h2>
            <ol className="list-decimal pl-5 space-y-4 text-sm md:text-base leading-relaxed opacity-90">
              <li>
                <strong>Catalog &amp; journey mapping.</strong> Personas, channels, fulfillment assumptions.
              </li>
              <li>
                <strong>Platform selection.</strong> Trade-offs on TCO, extensibility, and editor autonomy.
              </li>
              <li>
                <strong>Design system &amp; build.</strong> Components tied to inventory schema—not generic templates.
              </li>
              <li>
                <strong>Integration hardening.</strong> Taxes, shipping, fraud signals as needed.
              </li>
              <li>
                <strong>Launch rehearsal.</strong> Load tests, redirect audits, payment sandbox sign-offs.
              </li>
            </ol>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Technologies we use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base opacity-90 mb-4">
              <li>Shopify Liquid and Hydrogen where headless fits</li>
              <li>WooCommerce, Webflow commerce, or custom Next.js stacks</li>
              <li>Payment gateways, tax engines, and observability hooks</li>
            </ul>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              Explore complementary{" "}
              <Link href="/services/full-stack-web-development" className="font-semibold text-[#F46530] hover:underline">
                full-stack web development
              </Link>{" "}
              when your storefront shares authentication with SaaS features.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Benefits for businesses</h2>
            <ul className="list-disc pl-5 space-y-3 text-sm md:text-base leading-relaxed opacity-90">
              <li>Higher conversion via performance and trust-forward UX patterns.</li>
              <li>Reduced manual reconciliation through integrations.</li>
              <li>SEO-ready templates supporting organic acquisition.</li>
              <li>Editor empowerment—marketing ships without waiting on dev bandwidth.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Why choose HelixCore Studio</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              We speak merchant economics—AOV, returns, and inventory risk—not only pixels. Coupled with{" "}
              <LinkGame>game development</LinkGame> partnerships, we understand seasonal spikes when IPs launch bundles or
              collector editions online.
            </p>
          </section>
        </LongformShell>
      );
    case "ai-agent-services":
      return (
        <LongformShell>
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              AI agents turn brittle scripts into adaptive workflows—triaging tickets, updating records, or coordinating
              approvals—while staying inside policies you define. HelixCore Studio focuses on reliability: tool schemas,
              retries, and operator dashboards—not demos that break on edge cases.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              Agents complement broader <LinkAI>AI solutions</LinkAI> strategy: models supply reasoning; your systems supply
              truth. When customer-facing touchpoints require polished UX, we coordinate <LinkWeb>web development</LinkWeb>{" "}
              for portals where humans supervise automation.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              Studios blending player support with live ops can pair agents with{" "}
              <LinkGame>game development</LinkGame> telemetry—surfacing issues before they flood Discord or reviews.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Services overview</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              Offerings include agent design workshops, tool integrations (CRM, helpdesk, bespoke APIs), evaluation harnesses,
              red-teaming for misuse, and production rollout with canaries. We distinguish between user-facing agents and
              internal copilots—different risk appetites and logging requirements.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              Handoffs to operations include runbooks: how to pause agents, rotate credentials, and audit decisions when
              regulators or partners ask questions.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Our process</h2>
            <ol className="list-decimal pl-5 space-y-4 text-sm md:text-base leading-relaxed opacity-90">
              <li>
                <strong>Workflow archaeology.</strong> Map states, actors, and exceptions today.
              </li>
              <li>
                <strong>Policy &amp; safety framing.</strong> Allowed tools, escalation triggers, retention limits.
              </li>
              <li>
                <strong>Implementation.</strong> Orchestration code, observability, secrets hygiene.
              </li>
              <li>
                <strong>Pilot cohort.</strong> Limited queues or regions before broad enablement.
              </li>
              <li>
                <strong>Optimize &amp; expand.</strong> Metric-driven backlog—accuracy alone is insufficient.
              </li>
            </ol>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Technologies we use</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              LLM providers, structured outputs, vector stores when retrieval helps, workflow runners, and queue systems.
              On-prem or VPC deployments evaluated when contracts demand data locality.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              Pair with{" "}
              <Link href="/services/automation-services" className="font-semibold text-[#F46530] hover:underline">
                automation services
              </Link>{" "}
              for deterministic bridges—webhooks, ETL, scheduled reconciliations.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Benefits for businesses</h2>
            <ul className="list-disc pl-5 space-y-3 text-sm md:text-base leading-relaxed opacity-90">
              <li>Lower handle times without sacrificing quality on edge cases.</li>
              <li>Consistency across shifts—agents do not fatigue.</li>
              <li>Measurable ROI tied to operational KPIs, not novelty.</li>
              <li>Future-ready integrations as vendors expose richer APIs.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Why choose HelixCore Studio</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              Pragmatic ethics: we highlight uncertainty, log rationales where appropriate, and train staff on hybrid
              workflows—especially for Lahore-based enterprises expanding internationally where expectations on disclosure
              differ.
            </p>
          </section>
        </LongformShell>
      );
    case "automation-services":
      return (
        <LongformShell>
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              Automation eliminates repetitive swivel-chair work—copying fields between SaaS apps, compiling weekly reports,
              or chasing approvals—so skilled staff focus on judgment-intensive tasks. HelixCore Studio maps brittle processes
              end-to-end before writing connectors, ensuring automation amplifies quality instead of hiding errors faster.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              Projects often intersect <LinkWeb>web development</LinkWeb>—forms, admin approvals, customer onboarding—and{" "}
              <LinkAI>AI solutions</LinkAI> when classification or extraction unlocks the next efficiency tier.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              For game studios, automation can tie build pipelines, localization imports, and store metadata pushes—freeing
              producers to focus on creative risk under <LinkGame>game development</LinkGame> schedules.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Services overview</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              Engagements include workflow discovery, integration architecture, monitoring, and documentation for NOC-style
              ownership. We prioritize API-first approaches; screen scraping remains a labeled fallback with maintenance
              implications spelled out.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              Security reviews cover OAuth scopes, least-privilege service accounts, and secrets rotation—especially when
              finance or HR data traverses workflows.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Our process</h2>
            <ol className="list-decimal pl-5 space-y-4 text-sm md:text-base leading-relaxed opacity-90">
              <li>
                <strong>Shadow &amp; document.</strong> Capture exceptions—not only happy paths.
              </li>
              <li>
                <strong>Prioritize ROI.</strong> Rank by volume × minutes saved × error risk.
              </li>
              <li>
                <strong>Build &amp; test.</strong> Sandbox data sets mirroring production quirks.
              </li>
              <li>
                <strong>Pilot &amp; monitor.</strong> Alerts on failures, SLAs for retries.
              </li>
              <li>
                <strong>Iterate.</strong> Quarterly reviews when vendors change APIs or UIs.
              </li>
            </ol>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Technologies we use</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              Event buses, serverless functions, containerized workers, idempotent databases, and workflow DSLs where teams
              prefer visual ops ownership—chosen per client maturity, not fashion.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              Combine with{" "}
              <Link href="/services/ai-agent-services" className="font-semibold text-[#F46530] hover:underline">
                AI agent services
              </Link>{" "}
              when nondeterministic steps must coexist with deterministic gates.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Benefits for businesses</h2>
            <ul className="list-disc pl-5 space-y-3 text-sm md:text-base leading-relaxed opacity-90">
              <li>Predictable operational capacity without linear hiring.</li>
              <li>Fewer human errors on high-volume transactions.</li>
              <li>Faster reporting cycles for leadership decisions.</li>
              <li>Audit trails when compliance teams ask what happened, when.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Why choose HelixCore Studio</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              Honest scoping: we say when manual review must remain—automating the wrong process simply scales mistakes.
              Remote-first delivery from Lahore fits global teams needing overlap windows—not expensive on-site retainers.
            </p>
          </section>
        </LongformShell>
      );
    case "full-stack-web-development":
      return (
        <LongformShell>
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              Full-stack delivery means owning user experience, API contracts, persistence, and deployment—so features do
              not stall at handoffs. HelixCore Studio builds products where frontend polish matches backend rigor: typed APIs,
              migration discipline, and observability that on-call engineers actually use.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              Our Lahore team collaborates internationally using shared repositories, CI gates, and definition-of-done criteria
              tied to analytics and uptime—not checkbox ticket closure. When AI features ship, we loop in{" "}
              <LinkAI>AI solutions</LinkAI> expertise for cost/latency guardrails.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              Game clients frequently need companion SaaS—creator portals, tournament admin—adjacent to{" "}
              <LinkGame>game development</LinkGame>; unified ownership avoids fragmented accountability.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Services overview</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              Roadmaps span authentication patterns (SSO, MFA), authorization matrices, background jobs, file ingestion,
              exports, and admin auditing. We embed SEO and performance considerations when surfaces are public-facing,
              coordinating with our broader <LinkWeb>web development</LinkWeb> standards.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              Data protection approaches—encryption at rest, field-level redaction, retention policies—surface early for HR,
              finance, or health-adjacent workloads even when not legally mandated everywhere you operate.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Our process</h2>
            <ol className="list-decimal pl-5 space-y-4 text-sm md:text-base leading-relaxed opacity-90">
              <li>
                <strong>Domain modeling.</strong> Entities, invariants, and state machines before screens attach.
              </li>
              <li>
                <strong>API &amp; UI parallel tracks.</strong> Contract-first to unblock teams.
              </li>
              <li>
                <strong>Continuous integration.</strong> Linting, tests, preview environments per PR.
              </li>
              <li>
                <strong>Hardening.</strong> Load tests, threat modeling basics, dependency audits.
              </li>
              <li>
                <strong>Release engineering.</strong> Feature flags, migrations, rollback drills.
              </li>
            </ol>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Technologies we use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base opacity-90 mb-4">
              <li>React / Next.js, Node services, PostgreSQL, Redis where caching fits</li>
              <li>Infra-as-code patterns and secrets managers</li>
              <li>OpenTelemetry-friendly instrumentation hooks</li>
            </ul>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              Merchants may pair with{" "}
              <Link href="/services/ecommerce-development" className="font-semibold text-[#F46530] hover:underline">
                ecommerce development
              </Link>{" "}
              when commerce shares stack components.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Benefits for businesses</h2>
            <ul className="list-disc pl-5 space-y-3 text-sm md:text-base leading-relaxed opacity-90">
              <li>Faster feature throughput with fewer integration defects.</li>
              <li>Operational clarity—logs and metrics align to user journeys.</li>
              <li>Scalable foundations supporting investor diligence.</li>
              <li>Flexibility to embed AI or gaming telemetry later without rewiring everything.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Why choose HelixCore Studio</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              We optimize for maintainability: boring tech when possible, exciting tech when justified—documented ADRs,
              code review norms, and empathetic handoffs for your internal team takeover if desired.
            </p>
          </section>
        </LongformShell>
      );
    case "html5-web-games":
      return (
        <LongformShell>
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              HTML5 games deliver instant play—critical for education markets, publisher portals, and creative campaigns—without
              store friction. HelixCore Studio engineers browser titles that respect GPU diversity, audio unlock rules, and
              touch-first layouts while preserving gameplay clarity on desktop.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              When UA strategies demand compressed variants, lessons learned transfer directly to{" "}
              <Link href="/services/playable-ads-development" className="font-semibold text-[#F46530] hover:underline">
                playable ads development
              </Link>
              , minimizing duplicated creative effort alongside broader <LinkGame>game development</LinkGame>.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              Companion <LinkWeb>web development</LinkWeb> ensures landing pages, embed codes, and analytics align—especially
              when campaigns span regions with differing consent frameworks.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Services overview</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              Services include engine selection (custom Canvas/WebGL vs frameworks), asset budgeting, input abstraction,
              localization hooks, and deployment to CDNs with cache semantics tuned for updates.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              Monetization—ads, IAP via wrappers, sponsorship integrations—requires upfront policy alignment with platforms
              distributing your game.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Our process</h2>
            <ol className="list-decimal pl-5 space-y-4 text-sm md:text-base leading-relaxed opacity-90">
              <li>
                <strong>Mechanics prototype.</strong> Validate input feel on phones early.
              </li>
              <li>
                <strong>Art &amp; audio pass.</strong> Compression trade-offs per network budgets.
              </li>
              <li>
                <strong>Performance tuning.</strong> Profilers on throttled CPU/network profiles.
              </li>
              <li>
                <strong>QA matrix.</strong> Browser engines—not only Chrome—when audiences vary.
              </li>
              <li>
                <strong>Release &amp; monitor.</strong> Real user metrics guide iteration.
              </li>
            </ol>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Technologies we use</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              WebGL, Canvas, audio sprites, physics tuned for JS runtimes, bundlers with tree-shaking, and optional WASM
              modules when hotspots demand it—without locking small teams into unmaintainable stacks.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              Explore <Link href="/services/unity-game-development" className="font-semibold text-[#F46530] hover:underline">
                Unity game development
              </Link>{" "}
              when scope grows beyond browser budgets but shares IP assets.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Benefits for businesses</h2>
            <ul className="list-disc pl-5 space-y-3 text-sm md:text-base leading-relaxed opacity-90">
              <li>Lower acquisition friction via instant play links.</li>
              <li>Cross-platform reach without duplicating native teams prematurely.</li>
              <li>Rapid creative iteration for campaigns and partnerships.</li>
              <li>Analytics-friendly event hooks for funnel optimization.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Why choose HelixCore Studio</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              We respect constraints—CPU throttling, autoplay policies, and offline ambiguity—rather than promising desktop
              fidelity everywhere. Optional <LinkAI>AI solutions</LinkAI> can personalize tutorials when datasets justify
              governance investments.
            </p>
          </section>
        </LongformShell>
      );
    case "mobile-console-porting":
      return (
        <LongformShell>
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              Porting is more than recompiling—controls, performance envelopes, certification suites, and platform UX norms
              shift materially between ecosystems. HelixCore Studio plans parity gaps explicitly: what stays identical, what
              adapts, and what ships later as enhancements.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              Our Lahore team supports studios worldwide extending successful titles to new audiences—often pairing with{" "}
              <LinkGame>game development</LinkGame> for simultaneous content drops across SKUs.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              Player account portals or patch notes frequently rely on <LinkWeb>web development</LinkWeb>; telemetry may feed{" "}
              <LinkAI>AI solutions</LinkAI> for anomaly detection when live issues spike post-port.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Services overview</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              Offerings include control remapping, shader refactors for GPU deltas, save migration, achievement mapping,
              localization revalidation, and submission cycles with fix-forward discipline when cert failures arise.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              We document performance budgets per SKU—frame pacing, resolution scaling, dynamic fidelity steps—to avoid
              shipping uncapped effects that cert labs reject.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Our process</h2>
            <ol className="list-decimal pl-5 space-y-4 text-sm md:text-base leading-relaxed opacity-90">
              <li>
                <strong>Asset &amp; engine audit.</strong> Identify risk areas early—physics, networking, third-party SDKs.
              </li>
              <li>
                <strong>Control &amp; UX adaptation.</strong> Tutorials, camera assists, haptics where supported.
              </li>
              <li>
                <strong>Performance passes.</strong> Profilers per platform owner guidelines.
              </li>
              <li>
                <strong>Certification rehearsal.</strong> Checklists, crash logs, submission packages.
              </li>
              <li>
                <strong>Live patch alignment.</strong> Parity updates alongside primary SKU schedules.
              </li>
            </ol>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Technologies we use</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              Platform SDKs, shader variants, symbol servers for crash triage, CI build matrices, and staging kits matched to
              retail hardware classes—not developer-only rigs.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              Coordinate with{" "}
              <Link href="/services/html5-web-games" className="font-semibold text-[#F46530] hover:underline">
                HTML5 &amp; web games
              </Link>{" "}
              when marketing spins browser demos alongside console launches.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Benefits for businesses</h2>
            <ul className="list-disc pl-5 space-y-3 text-sm md:text-base leading-relaxed opacity-90">
              <li>Revenue expansion without greenfield production risk.</li>
              <li>Brand consistency through coordinated releases.</li>
              <li>Fewer cert surprises via staged rehearsals.</li>
              <li>Operational clarity—parity matrices stakeholders can inspect.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Why choose HelixCore Studio</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              Transparent communication when platforms move goalposts—TDs documented, decisions logged, stakeholders aligned
              before burn rates spike. Trusted by teams who cannot afford a silent port that misses holiday windows.
            </p>
          </section>
        </LongformShell>
      );
    default:
      return null;
  }
}
