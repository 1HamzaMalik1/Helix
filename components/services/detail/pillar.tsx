import Link from "next/link";
import type { ServiceFaqItem } from "@/lib/page-jsonld";
import { LinkAI, LinkGame, LinkWeb } from "./InternalLink";

export const pillarFaqs: Record<string, ServiceFaqItem[]> = {
  "ai-development": [
    {
      question: "What is AI development?",
      answer:
        "AI development is the practice of designing, training, and deploying software systems that learn from data or instructions—such as large language models (LLMs), retrieval-augmented workflows, and autonomous agents—to automate decisions, generate content, or assist users. At HelixCore Studio we focus on practical integrations: secure APIs, prompt and tool design, evaluation, and production monitoring so AI creates measurable business value rather than one-off demos.",
    },
    {
      question: "How do you keep AI outputs safe and on-brand for our business?",
      answer:
        "We combine guardrails (policy prompts, output filtering, human review gates where needed), access control for APIs and data sources, and logging so you can audit behavior. For customer-facing assistants we define escalation paths to humans and tune retrieval corpora so answers stay aligned with your policies.",
    },
    {
      question: "Can AI integrate with our existing CRM, helpdesk, or internal tools?",
      answer:
        "Yes. Most enterprise AI value comes from integrations—ticketing systems, CRMs, databases, and messaging channels. We map your workflows, build connectors or use middleware, and orchestrate tools so agents read and write only what you authorize.",
    },
    {
      question: "Do you work with international clients while based in Lahore?",
      answer:
        "Absolutely. We routinely collaborate across time zones with clear sprint schedules, written specs, and async updates. Many HelixCore Studio clients are outside Pakistan; our delivery model is built for remote-first partnerships.",
    },
    {
      question: "How long does an AI pilot typically take?",
      answer:
        "A focused pilot—from discovery to limited production—often ranges from a few weeks for a narrow use case (e.g., internal doc Q&A) to several months for regulated or multi-system workflows. Scope, data readiness, and approval cycles drive the timeline; we agree milestones upfront.",
    },
    {
      question: "How does AI relate to your game or web offerings?",
      answer:
        "AI can power NPC behavior, moderation, live ops analytics, and player support in games, or personalization and ops automation on web products. We coordinate with our game development and web development teams when your roadmap spans multiple surfaces.",
    },
  ],
  "game-development": [
    {
      question: "How much does game development cost?",
      answer:
        "Cost depends on genre, platform count, art scope, multiplayer complexity, and live service plans. A small mobile prototype differs sharply from a cross-platform multiplayer title with seasonal content. We scope milestones—prototype, vertical slice, soft launch—so you can fund in phases and validate retention before scaling spend.",
    },
    {
      question: "What platforms and engines do you build games for?",
      answer:
        "We ship Unity experiences for mobile, PC, and console where applicable, HTML5 and WebGL for browser and playable ads, and support porting across stores. Playable ads and UA creatives are optimized for strict size and load budgets on networks like Meta, TikTok, and AppLovin.",
    },
    {
      question: "How long does it take to build a playable ad or a mobile game milestone?",
      answer:
        "Playable ads can move from concept to submission in a tight schedule when the hook and core loop are defined. Full game milestones vary: a vertical slice may take several weeks to months depending on mechanics and asset volume. We align schedules to your marketing calendar or publisher milestones.",
    },
    {
      question: "Do you help with store submission and compliance?",
      answer:
        "Yes. We prepare builds for App Store and Google Play requirements, handle common rejection causes (permissions, content ratings, performance), and advise on store listings. Console work follows partner-specific certification processes.",
    },
    {
      question: "Can you support live operations and updates after launch?",
      answer:
        "We can structure update pipelines—remote config, asset bundles, analytics hooks—and help prioritize patches based on crash and retention data. Ongoing engagement is scoped as retainers or milestone-based SOWs.",
    },
    {
      question: "Do you work with studios outside Pakistan?",
      answer:
        "Yes. HelixCore Studio collaborates with publishers, indie teams, and agencies worldwide. Clear documentation, build handoffs, and shared repositories keep production smooth across regions.",
    },
  ],
  "web-development": [
    {
      question: "How long does web development take for a SaaS or ecommerce project?",
      answer:
        "Timelines depend on discovery depth, design fidelity, integrations, and compliance needs. A marketing site may take weeks; a multi-tenant SaaS or custom ecommerce build typically spans multiple months with phased releases. We front-load architecture and analytics so later iterations stay fast.",
    },
    {
      question: "What stack do you recommend for SEO-friendly and fast web apps?",
      answer:
        "We often use Next.js on the frontend for server rendering and performance budgets that support SEO, paired with Node or other backends and PostgreSQL or managed databases. Infrastructure choices follow your scale, team skills, and compliance requirements—not buzzwords.",
    },
    {
      question: "Can you migrate our legacy site or store without losing rankings?",
      answer:
        "Yes. We map URLs, redirects, structured data, and indexation risks before cutover, run staging checks, and monitor Search Console after launch. Content parity and redirect discipline are central to protecting authority.",
    },
    {
      question: "Do you build APIs and admin dashboards for internal teams?",
      answer:
        "Yes. Many projects pair customer-facing apps with admin consoles, role-based access, reporting, and integrations to ERP or fulfillment systems. We design APIs for versioning and observability from day one.",
    },
    {
      question: "Do you work with international clients from Lahore?",
      answer:
        "Yes. Remote collaboration is standard: shared repos, CI/CD, scheduled demos, and written decisions. Our clients span multiple continents; we align on overlap hours for reviews and releases.",
    },
    {
      question: "How does web development complement AI or games?",
      answer:
        "Web apps often host analytics, account portals, and marketing funnels for games. AI features—recommendations, chat support, or internal tools—frequently ship as part of a modern web stack. We align roadmaps when products span web, AI, and games.",
    },
  ],
};

export function AiDevelopmentContent() {
  return (
    <div className="service-longform space-y-10 text-[#2A2E30]">
      <section>
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
          Organizations across Lahore, Pakistan, and global markets are adopting{" "}
          <strong>AI development services</strong> to reduce manual work, improve customer response times, and unlock
          insights from unstructured data. HelixCore Studio engineers practical AI systems—agents, copilots, and automation
          pipelines—grounded in your tools and risk tolerance rather than generic chat demos.
        </p>
        <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
          Whether you need retrieval-augmented knowledge bases, workflow orchestration, or LLM-backed APIs, we align
          technology choices with measurable KPIs: ticket deflection, sales cycle length, or operational throughput. Our work
          sits alongside strong{" "}
          <LinkGame>game development</LinkGame> and <LinkWeb>web development</LinkWeb> when your product spans multiple
          channels.
        </p>
        <p className="text-sm md:text-base leading-relaxed opacity-90">
          For Lahore-based enterprises evaluating pilots versus enterprise rollouts, we document assumptions about data
          residency, latency targets, and human oversight—especially where regulated industries require traceability. That
          groundwork prevents costly rework when policies evolve or when you expand from internal assistants to
          customer-facing experiences tied to your CRM.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Services overview</h2>
        <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
          Our AI offering spans discovery, integration, and production hardening. We help you choose between fine-tuning,
          prompt programs, and retrieval pipelines; connect models to your CRM, warehouse, or ticketing stack; and define
          evaluation sets so quality improves iteratively. For teams exploring automation without a full agent rollout, we
          also pair AI with our broader{" "}
          <Link href="/services/automation-services" className="font-semibold text-[#F46530] hover:underline">
            automation services
          </Link>{" "}
          for deterministic workflows that complement probabilistic models.
        </p>
        <p className="text-sm md:text-base leading-relaxed opacity-90">
          Engagement formats include fixed-scope pilots, milestone-based product builds, and advisory on model selection,
          cost controls, and vendor SLAs. Every roadmap emphasizes security—least-privilege API keys, PII handling, and
          audit trails appropriate to your industry.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Our process</h2>
        <ol className="list-decimal pl-5 space-y-4 text-sm md:text-base leading-relaxed opacity-90">
          <li>
            <strong className="text-[#2A2E30]">Discovery &amp; use-case design.</strong> We document actors, data sources,
            success metrics, and failure modes. Where helpful we benchmark against non-AI baselines so ROI stays honest.
          </li>
          <li>
            <strong className="text-[#2A2E30]">Architecture &amp; data readiness.</strong> We specify embeddings,
            connectors, rate limits, and caching. If retrieval is involved, we structure documents and access policies.
          </li>
          <li>
            <strong className="text-[#2A2E30]">Build &amp; integration.</strong> Implement prompts, tools, and APIs with
            staging environments that mirror production constraints.
          </li>
          <li>
            <strong className="text-[#2A2E30]">Evaluation &amp; safety.</strong> Automated and human review loops,
            regression suites for critical intents, and monitoring hooks for drift or abuse.
          </li>
          <li>
            <strong className="text-[#2A2E30]">Launch &amp; iterate.</strong> Gradual rollouts, dashboards, and backlog
            grooming driven by real usage—not vanity accuracy scores.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Technologies we use</h2>
        <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
          Stacks vary by client, but we commonly integrate OpenAI and other LLM APIs, vector databases or managed retrieval
          services, Python and Node orchestration layers, and observability tools. Frontends may include React or Next.js
          where{" "}
          <LinkWeb>web development</LinkWeb> surfaces expose AI features to users or admins. For gaming clients, we can
          connect analytics and moderation workflows back to your{" "}
          <LinkGame>game development</LinkGame> roadmap.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base opacity-90">
          <li>LLM APIs, embeddings, and function/tool calling patterns</li>
          <li>Vector search, knowledge bases, and document ingestion pipelines</li>
          <li>Workflow engines, queues, and idempotent job design</li>
          <li>Cloud IAM, secrets management, and encrypted transit</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Benefits for businesses</h2>
        <ul className="list-disc pl-5 space-y-3 text-sm md:text-base leading-relaxed opacity-90">
          <li>
            <strong className="text-[#2A2E30]">Operational leverage:</strong> automate repetitive tickets, summarize
            meetings, or accelerate internal search without hiring linearly.
          </li>
          <li>
            <strong className="text-[#2A2E30]">Faster experimentation:</strong> ship assistants and copilots behind
            feature flags to learn what users actually value.
          </li>
          <li>
            <strong className="text-[#2A2E30]">Vendor-neutral guidance:</strong> we recommend models and hosting patterns
            suited to latency, budget, and residency—not hype cycles.
          </li>
          <li>
            <strong className="text-[#2A2E30]">Cross-functional alignment:</strong> shared specs with product, legal, and IT
            reduce rework before models touch production data.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Why choose HelixCore Studio</h2>
        <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
          Based in Lahore with global delivery experience, we combine hands-on engineering with pragmatic project
          governance. You work directly with builders who understand failure domains—hallucinations, quota spikes, prompt
          injection—and engineer mitigations rather than treating AI as a black box.
        </p>
        <p className="text-sm md:text-base leading-relaxed opacity-90">
          When your roadmap spans <LinkAI>AI solutions</LinkAI>, immersive titles from our{" "}
          <LinkGame>game development</LinkGame> practice, and customer-facing{" "}
          <LinkWeb>web development</LinkWeb>, one partner reduces integration risk and keeps narratives consistent across
          marketing, product, and analytics.
        </p>
      </section>
    </div>
  );
}

export function GameDevelopmentContent() {
  return (
    <div className="service-longform space-y-10 text-[#2A2E30]">
      <section>
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
          Choosing a <strong>game development company</strong> means matching creative ambition with engineering discipline:
          frame budgets, platform certification, and live service realities. HelixCore Studio, headquartered in Lahore with
          clients worldwide, ships Unity games, HTML5 experiences, playable ads, and ports tuned for acquisition and
          retention—not just vertical slices that stall at submission.
        </p>
        <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
          Our producers and engineers collaborate with marketing on playable creatives, with UA teams on network specs, and
          with backend partners when you need accounts or analytics. If your product strategy also needs intelligent features
          or web portals, we coordinate with <LinkAI>AI solutions</LinkAI> and{" "}
          <LinkWeb>web development</LinkWeb> so roadmaps stay coherent.
        </p>
        <p className="text-sm md:text-base leading-relaxed opacity-90">
          Studios and publishers choose outsourcing partners who understand milestone gates: demo readiness for investors,
          creative approvals for brand licensors, and seasonal content cadences for live titles. Our workflows emphasize
          reproducible builds, recorded decisions, and defect triage so stakeholders see predictable velocity—not heroics in
          the final sprint.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Services overview</h2>
        <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
          Core offerings include full-cycle Unity development, rapid playable ad production for major networks, HTML5 and
          WebGL titles for browser distribution, and porting to mobile or console with performance profiling. We scope work in
          milestones—prototype, vertical slice, soft launch—so funding tracks validated progress.
        </p>
        <p className="text-sm md:text-base leading-relaxed opacity-90">
          Specialized pages detail{" "}
          <Link href="/services/unity-game-development" className="font-semibold text-[#F46530] hover:underline">
            Unity game development
          </Link>
          ,{" "}
          <Link href="/services/playable-ads-development" className="font-semibold text-[#F46530] hover:underline">
            playable ads development
          </Link>
          ,{" "}
          <Link href="/services/html5-web-games" className="font-semibold text-[#F46530] hover:underline">
            HTML5 web games
          </Link>
          , and{" "}
          <Link href="/services/mobile-console-porting" className="font-semibold text-[#F46530] hover:underline">
            mobile and console porting
          </Link>
          —each with distinct QA and packaging requirements.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Our process</h2>
        <ol className="list-decimal pl-5 space-y-4 text-sm md:text-base leading-relaxed opacity-90">
          <li>
            <strong className="text-[#2A2E30]">Creative &amp; technical discovery.</strong> Core loop, audience, monetization
            model, and platform matrix drive architecture—not the other way around.
          </li>
          <li>
            <strong className="text-[#2A2E30]">Production planning.</strong> Backlogs, art dependencies, and milestone
            definitions aligned to publisher or UA milestones.
          </li>
          <li>
            <strong className="text-[#2A2E30]">Implementation &amp; profiling.</strong> Gameplay, UI, audio integration,
            and early performance passes on target hardware classes.
          </li>
          <li>
            <strong className="text-[#2A2E30]">QA &amp; compliance.</strong> Store guidelines, ad network file-size tests,
            memory ceilings, and crash triage.
          </li>
          <li>
            <strong className="text-[#2A2E30]">Submission &amp; live readiness.</strong> Build pipelines, symbolication,
            analytics hooks, and update channels for post-launch patches.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Technologies we use</h2>
        <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
          Unity and C# anchor most shipped titles; ad creatives often combine lightweight WebGL or Unity exports tuned for
          MRAID and network-specific SDK expectations. We integrate analytics and remote configuration where your stack
          demands it, and collaborate with backend teams on authentication or leaderboards when those services extend your{" "}
          <LinkWeb>web development</LinkWeb> footprint.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base opacity-90">
          <li>Unity engine, URP/HDRP choices driven by art targets</li>
          <li>Platform toolchains for Android, iOS, PC, and console partners</li>
          <li>Profiling: CPU/GPU budgets, asset streaming, build size reduction</li>
          <li>CI for repeatable builds and regression detection</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Benefits for businesses</h2>
        <ul className="list-disc pl-5 space-y-3 text-sm md:text-base leading-relaxed opacity-90">
          <li>
            <strong className="text-[#2A2E30]">Faster time-to-market:</strong> vertical slices de-risk design before you sink
            full art budgets.
          </li>
          <li>
            <strong className="text-[#2A2E30]">UA-ready creatives:</strong> playable ads engineered for conversion within
            strict load constraints.
          </li>
          <li>
            <strong className="text-[#2A2E30]">Scalable codebases:</strong> patterns that survive updates, seasons, and new
            SKUs.
          </li>
          <li>
            <strong className="text-[#2A2E30]">Transparent milestones:</strong> you see builds early and often—not a black box
            until launch week.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Why choose HelixCore Studio</h2>
        <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
          We combine indie agility with production hygiene: source control discipline, documented handoffs, and honest
          scoping conversations when trade-offs appear. Reviews from global clients reflect communication cadence and
          ownership—critical when <strong>game development</strong> spans multiple vendors or internal stakeholders.
        </p>
        <p className="text-sm md:text-base leading-relaxed opacity-90">
          Pair <LinkGame>game development</LinkGame> with{" "}
          <LinkAI>AI solutions</LinkAI> for moderation, dynamic difficulty experiments, or player support—and with{" "}
          <LinkWeb>web development</LinkWeb> for account portals, marketing sites, and operations tooling under one delivery
          culture.
        </p>
      </section>
    </div>
  );
}

export function WebDevelopmentContent() {
  return (
    <div className="service-longform space-y-10 text-[#2A2E30]">
      <section>
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
          Modern <strong>web development services</strong> span marketing sites, SaaS platforms, ecommerce, and internal
          tools—all expected to load fast, rank well, and integrate with analytics and payments. HelixCore Studio, operating
          from Lahore for an international client base, builds maintainable products with clear hosting boundaries, CI/CD, and
          SEO-aware rendering choices that protect your growth loops.
        </p>
        <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
          Whether you are replacing a legacy storefront, launching a B2B portal, or embedding dashboards for live game
          telemetry, we coordinate with <LinkGame>game development</LinkGame> and{" "}
          <LinkAI>AI solutions</LinkAI> when your stack crosses           disciplines—single ownership reduces friction between backend
          APIs, admin UX, and customer-facing surfaces.
        </p>
        <p className="text-sm md:text-base leading-relaxed opacity-90">
          Pakistan’s tech talent pool supports competitive delivery timelines while maintaining overlap with European and
          North American business hours for reviews. Whether you need a marketing site that earns authority in search or a
          logged-in product with SLAs, we anchor discussions in measurable outcomes: conversion rate, activation, time-on-task,
          and incident frequency—not vanity framework debates.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Services overview</h2>
        <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
          Engagements cover discovery, information architecture, implementation, and launch hardening. We deliver accessible
          UI components, API layers with versioning, role-based access, and observability basics—logs, metrics, and alerts—so
          on-call is not guesswork. For commerce, we integrate gateways, tax and shipping providers, and CMS patterns that
          marketing can extend without developer bottlenecks.
        </p>
        <p className="text-sm md:text-base leading-relaxed opacity-90">
          Related offerings include{" "}
          <Link href="/services/full-stack-web-development" className="font-semibold text-[#F46530] hover:underline">
            full-stack web development
          </Link>{" "}
          and{" "}
          <Link href="/services/ecommerce-development" className="font-semibold text-[#F46530] hover:underline">
            ecommerce development
          </Link>
          , each with tailored SEO and performance acceptance criteria.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Our process</h2>
        <ol className="list-decimal pl-5 space-y-4 text-sm md:text-base leading-relaxed opacity-90">
          <li>
            <strong className="text-[#2A2E30]">Product &amp; content modeling.</strong> Routes, roles, entities, and analytics
            events defined before pixels lock.
          </li>
          <li>
            <strong className="text-[#2A2E30]">UX &amp; technical architecture.</strong> Rendering strategy (SSR/SSG),
            caching layers, and edge vs origin responsibilities.
          </li>
          <li>
            <strong className="text-[#2A2E30]">Iterative delivery.</strong> Shippable increments behind feature flags with
            staging parity.
          </li>
          <li>
            <strong className="text-[#2A2E30]">Quality gates.</strong> Accessibility checks, performance budgets, and SEO
            regressions on critical templates.
          </li>
          <li>
            <strong className="text-[#2A2E30]">Launch &amp; measurement.</strong> Redirect maps, Search Console validation,
            uptime monitors, and rollback paths.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Technologies we use</h2>
        <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
          React and Next.js appear frequently for hybrid rendering and route-level control; APIs may run on Node or align
          with your preferred cloud functions. Data layers commonly include PostgreSQL or managed equivalents, with caching
          strategies tuned to read/write patterns. When AI features ship alongside web surfaces, we align inference latency
          budgets with UX—not bolt-on model calls that stall pages.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base opacity-90">
          <li>TypeScript-first frontends and predictable API contracts</li>
          <li>Infrastructure-as-code patterns where teams maintain parity across environments</li>
          <li>Analytics instrumentation that respects consent frameworks</li>
          <li>Edge caching and image optimization for Core Web Vitals</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Benefits for businesses</h2>
        <ul className="list-disc pl-5 space-y-3 text-sm md:text-base leading-relaxed opacity-90">
          <li>
            <strong className="text-[#2A2E30]">SEO resilience:</strong> structured routes, metadata discipline, and fast LCP
            support ranking and conversion.
          </li>
          <li>
            <strong className="text-[#2A2E30]">Operational clarity:</strong> admin tools and logs that help teams debug
            without engineering heroics.
          </li>
          <li>
            <strong className="text-[#2A2E30]">Integration readiness:</strong> APIs designed for partners, mobile apps, or
            future AI features.
          </li>
          <li>
            <strong className="text-[#2A2E30]">Cost-aware scaling:</strong> right-size hosting and background workers as
            traffic grows.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Why choose HelixCore Studio</h2>
        <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
          We speak both marketing and engineering: copy and schema matter as much as uptime. Clients choose us for explicit
          communication, documented trade-offs, and shipping discipline across time zones—essential when{" "}
          <strong>web development</strong> underpins revenue touchpoints.
        </p>
        <p className="text-sm md:text-base leading-relaxed opacity-90">
          Combine <LinkWeb>web development</LinkWeb> with <LinkAI>AI solutions</LinkAI> for copilots and automation, and with{" "}
          <LinkGame>game development</LinkGame> when your web stack supports player communities, downloads, or live ops.
        </p>
      </section>
    </div>
  );
}
