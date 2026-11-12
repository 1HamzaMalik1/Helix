export const companyInfo = {
  name: "HelixCore Studio",
  legalName: "HelixCore Studio (Private) Limited",
  tagline: "Remote-first software partner for AI, games, and web products",
  description: "HelixCore Studio is a remote-first software delivery partner helping founders, studios, and product teams build AI products, Unity games, and scalable web platforms with clear milestones and senior execution.",
  ceo: "Hamza Hakim",
  experience: "5+ years",
  email: "official@helixcorestudio.com",
  phone: "+923201469571",
  location: "Remote-first global studio",
  /** Full postal address for schema and footer (Ichra, Lahore) */
  addressLine: "Sultan Ahmed Rd, Ichhra",
  addressLocality: "Lahore",
  addressRegion: "Punjab",
  postalCode: "54000",
  addressCountry: "PK",
  linkedInCompany: "https://www.linkedin.com/company/helixcore-studio/",
  clutchUrl: "https://clutch.co/profile/helixcore-studio",
  goodFirmsUrl: "https://www.goodfirms.co/company/helixcore-studio",
  youtubeUrl: "https://www.youtube.com/@HelixCoreStudio",
  linkedInCeo: "https://www.linkedin.com/in/hamza-hakim1/",
  googlePlayDeveloper: "https://play.google.com/store/apps/dev?id=6757601249402259430",
  facebookUrl: "https://www.facebook.com/HelixCoreStudio/",
  instagramUrl: "https://www.instagram.com/helixcorestudio/",
  tiktokUrl: "https://www.tiktok.com/@helixcore.studio",
  degree: "Masters in Software Engineering",
  calendlyUrl: "https://calendly.com/helixcorestudio/30min",
  /** Full-time builders in our remote development studio (design, engineering, QA, ops) */
  inHouseTeamCount: 10,
};

export const siteUrl = "https://helixcorestudio.com";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  longDescription: string;
  seoTitle: string;
  seoDescription: string;
  relatedSlugs?: string[];
};

export const services: Service[] = [
  {
    slug: "ai-development",
    title: "AI Development",
    description: "Custom AI agents, automation, and intelligent workflows for modern products.",
    icon: "Brain",
    features: ["Custom AI agents", "LLM integrations", "Workflow automation", "NLP & chatbots"],
    longDescription: "We build AI solutions that automate support, operations, and internal processes. Our team delivers agent architectures, secure third-party integrations, and measurable efficiency gains for startups and enterprises.",
    seoTitle: "Custom AI Development Services | HelixCore",
    seoDescription:
      "Custom AI development: LLM integrations, AI agents, and workflow automation. HelixCore Studio ships secure, measurable AI for startups and enterprises worldwide.",
    relatedSlugs: ["game-development", "web-development", "ai-agent-services", "automation-services"],
  },
  {
    slug: "game-development",
    title: "Game Development",
    description: "Unity, playable ads, HTML5, and cross-platform game production.",
    icon: "Gamepad2",
    features: ["Unity 2D/3D", "Playable ads", "HTML5 / WebGL", "Porting & launch"],
    longDescription: "From Unity titles and high-performing playable ads to browser games and platform ports, we ship engaging experiences optimized for acquisition, retention, and store compliance.",
    seoTitle: "Mobile & PC Game Development Company | HelixCore",
    seoDescription:
      "Plan and build mobile and PC games with HelixCore. Get help with prototypes, gameplay, platform selection, porting, and release preparation.",
    relatedSlugs: ["ai-development", "web-development", "unity-game-development", "playable-ads-development"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    description: "Full-stack apps, ecommerce, and scalable cloud deployments.",
    icon: "Code",
    features: ["React & Next.js", "APIs & backends", "Ecommerce", "Cloud DevOps"],
    longDescription: "We engineer fast, maintainable web platforms—from marketing sites to complex SaaS and ecommerce. Our stack prioritizes performance, SEO-friendly structure, and reliable release pipelines.",
    seoTitle: "Custom Web Development Services | HelixCore",
    seoDescription:
      "Custom software and web development for SaaS platforms, business portals, and ecommerce. HelixCore Studio builds Next.js apps, APIs, and integrations.",
    relatedSlugs: ["full-stack-web-development", "ecommerce-development", "ai-agent-services"],
  },
  {
    slug: "unity-game-development",
    title: "Unity Game Development",
    description: "2D/3D games for Android, iOS, PC, Steam with multiplayer capabilities",
    icon: "Gamepad2",
    features: ["2D/3D Game Dev", "Multiplayer Games", "Cross-Platform", "Steam Integration"],
    longDescription: "We build production-ready Unity games for startups, agencies, and game studios. From rapid prototyping to launch-ready builds, our team handles gameplay programming, optimization, and platform-specific publishing so your product reaches players faster.",
    seoTitle: "Unity Game Development Services | HelixCore Studio",
    seoDescription:
      "Build and launch 2D and 3D Unity games with HelixCore Studio. Experienced developers for mobile games, gameplay systems, optimization and publishing.",
    relatedSlugs: ["game-development", "playable-ads-development", "video-ads-development", "mobile-console-porting"],
  },
  {
    slug: "playable-ads-development",
    title: "Playable Ads Development",
    description: "Interactive ad experiences across all major platforms",
    icon: "Megaphone",
    features: ["Mintegral", "AppLovin", "TikTok", "Meta", "IronSource", "Unity Ads"],
    longDescription: "Our playable ad team creates lightweight, high-performance ad experiences designed to increase click-through and install rates. We tailor every ad to platform requirements while preserving your gameplay hook and brand identity.",
    seoTitle: "Playable Ads Development for Mobile Games | HelixCore",
    seoDescription:
      "Playable ads for Meta, TikTok, AppLovin, and Unity Ads. Lightweight HTML5 creatives engineered for UA performance by HelixCore Studio.",
    relatedSlugs: ["video-ads-development", "game-development", "unity-game-development", "html5-web-games"],
  },
  {
    slug: "video-ads-development",
    title: "Video Ads Development",
    description: "Gameplay videos and short-form mobile ad creative for user acquisition.",
    icon: "Megaphone",
    features: ["Creative briefs and storyboards", "Gameplay capture and editing", "Captions and branded end cards", "Cutdowns and aspect ratio variants"],
    longDescription: "Turn a mobile game's core mechanic into a short video ad. We scope the hook, gameplay footage, edit, and end card around your campaign brief, then prepare variants for the placements you plan to test.",
    seoTitle: "Mobile Game Video Ads Production | HelixCore Studio",
    seoDescription: "Video ad production for mobile games and apps, from gameplay capture and editing to creative variants, captions, and branded end cards.",
    relatedSlugs: ["playable-ads-development", "game-development", "unity-game-development"],
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    description: "Custom online stores and shopping platforms",
    icon: "ShoppingCart",
    features: ["Shopify", "WordPress", "Wix", "Webflow", "Custom Solutions"],
    longDescription: "We design and develop ecommerce experiences that convert visitors into customers. Whether you need a platform-based store or a custom commerce stack, we deliver secure checkouts, optimized product flows, and scalable integrations.",
    seoTitle: "Shopify Website & Ecommerce Development | HelixCore Studio",
    seoDescription:
      "Shopify website development for new stores, redesigns, and migrations. HelixCore Studio builds storefronts, catalog integrations, and ecommerce experiences.",
    relatedSlugs: ["web-development", "full-stack-web-development"],
  },
  {
    slug: "ai-agent-services",
    title: "AI Agent Services",
    description: "Intelligent AI-powered automation and chatbot solutions",
    icon: "Bot",
    features: ["Custom AI Agents", "ChatGPT Integration", "Smart Automation", "NLP Solutions"],
    longDescription: "We build AI agents that automate repetitive work, assist customers, and improve operations. Our implementations combine strong prompt design, reliable integrations, and practical guardrails for real business use cases.",
    seoTitle: "AI Agent Development Services | HelixCore",
    seoDescription:
      "Custom AI agents and ChatGPT-style integrations for support and ops. Secure prompts, APIs, and monitoring from HelixCore Studio.",
    relatedSlugs: ["ai-development", "automation-services", "web-development"],
  },
  {
    slug: "automation-services",
    title: "Automation Services",
    description: "Streamline workflows with intelligent automation solutions",
    icon: "Cog",
    features: ["Process Automation", "API Integration", "Data Pipeline", "Workflow Optimization"],
    longDescription: "Our automation services remove manual bottlenecks across product, marketing, and operations teams. We connect tools, orchestrate APIs, and build resilient workflows that reduce errors and save time.",
    seoTitle: "Business Automation Services | HelixCore Studio",
    seoDescription:
      "Business automation with APIs, webhooks, and data pipelines. Reduce manual work and errors with workflows built by HelixCore Studio.",
    relatedSlugs: ["ai-development", "web-development", "ai-agent-services"],
  },
  {
    slug: "full-stack-web-development",
    title: "Full-Stack Web Development",
    description: "Enterprise-grade web applications with modern frameworks",
    icon: "Code",
    features: ["React/Next.js", "Node.js", "Databases", "Cloud Deployment"],
    longDescription: "We ship robust full-stack products using modern architectures and clean code standards. From frontend UX to backend APIs and deployment pipelines, we focus on performance, maintainability, and business outcomes.",
    seoTitle: "Full-Stack Web Development | HelixCore Studio",
    seoDescription:
      "Full-stack apps with React, Next.js, Node.js, and PostgreSQL. APIs, auth, and cloud deploys engineered by HelixCore Studio.",
    relatedSlugs: ["web-development", "ecommerce-development", "ai-development"],
  },
  {
    slug: "html5-web-games",
    title: "HTML5 & Web Games",
    description: "Browser-based games with WebGL and Canvas optimization",
    icon: "Globe",
    features: ["Browser Games", "WebGL", "Mobile Web", "Progressive Web Apps"],
    longDescription: "We create high-performance browser games that run smoothly across devices and screen sizes. Our team focuses on rendering optimization, responsive controls, and monetization-friendly implementations.",
    seoTitle: "HTML5 & Web Game Development | HelixCore",
    seoDescription:
      "HTML5 and WebGL browser games tuned for load time and mobile web. PWA-friendly builds and ad-ready mechanics from HelixCore Studio.",
    relatedSlugs: ["game-development", "playable-ads-development", "unity-game-development"],
  },
  {
    slug: "mobile-console-porting",
    title: "Mobile & Console Porting",
    description: "Port games across platforms with optimized performance",
    icon: "Smartphone",
    features: ["iOS/Android", "Console Porting", "Performance Opt", "Store Deployment"],
    longDescription: "We port existing games to mobile and console environments while maintaining gameplay quality and performance. Our process includes control adaptation, optimization, and store submission support.",
    seoTitle: "Mobile & Console Game Porting | HelixCore Studio",
    seoDescription:
      "Port games to iOS, Android, and console with control mapping and perf tuning. Store submission support from HelixCore Studio.",
    relatedSlugs: ["game-development", "unity-game-development", "html5-web-games"],
  }
];

export const teamMembers = [
  {
    name: "Hamza Hakim",
    role: "CEO & Lead Game Developer",
    bio: "Seasoned game developer with 5+ years of expertise in Unity and multiplayer game systems. Advanced degree in Software Engineering with a proven track record of delivering high-performance games.",
    expertise: ["Unity Engine", "Multiplayer Systems", "System Architecture", "Project Leadership"],
    image: "/hamza.png",
    linkedin: "https://www.linkedin.com/in/hamza-hakim1/",
    github: "https://github.com/1HamzaMalik1"
  }
];

export const testimonials = [
  {
    name: "nightowlalex",
    country: "United States",
    countryCode: "US",
    rating: 5,
    comment: "Hamza is very professional and he is very good about communicating! delivered what I wanted, even though i didn't give the best instructions and requirements by going above and beyond",
    date: "2 weeks ago"
  },
  {
    name: "adelsaudt",
    country: "Saudi Arabia",
    countryCode: "SA",
    rating: 5,
    comment: "Exceptional as always",
    date: "1 month ago"
  },
  {
    name: "aljazc",
    country: "Slovenia",
    countryCode: "SI",
    rating: 5,
    comment: "Always a pleasure working with Hamza!",
    date: "4 months ago"
  },
  {
    name: "aljazc",
    country: "Slovenia",
    countryCode: "SI",
    rating: 5,
    comment: "Hamza always provides great work, on time. Only positive things to say about his expertise. Always look forward to working with him again!",
    date: "4 months ago"
  },
  {
    name: "aljazc",
    country: "Slovenia",
    countryCode: "SI",
    rating: 5,
    comment: "Hamza always does a great job with projects. Always dependable with quick delivery and work perfectly done within the arranged paramets. Highly recommended!",
    date: "4 months ago"
  },
  {
    name: "aljazc",
    country: "Slovenia",
    countryCode: "SI",
    rating: 5,
    comment: "Exceptional work with attention to detail. Always responds quick and goes above and beyond to deliver and satisfy expectations! Highly recommended. Look forward to working with him Hamza again!",
    date: "5 months ago"
  },
  {
    name: "sourstreamers",
    country: "United States",
    countryCode: "US",
    rating: 5,
    comment: "Attention to detail and proactive communication! :)",
    date: "6 months ago"
  },
  {
    name: "tfranklin87",
    country: "United States",
    countryCode: "US",
    rating: 5,
    comment: "He was helpful",
    date: "7 months ago"
  },
  {
    name: "stavroschronop",
    country: "Greece",
    countryCode: "GR",
    rating: 5,
    comment: "NICE WORK HE DID ALL THAT I ASKED IN A FEW DAYS",
    date: "8 months ago"
  },
  {
    name: "noor19922",
    country: "Jordan",
    countryCode: "JO",
    rating: 5,
    comment: "An absolute professional! He delivered everything I was expecting and even exceeded my expectations. Very helpful and pays attention to details and no matter what you ask him to fix, he does it right away! Besides, he's a great communicator and really polite, he's also a fast replier. Whatever project you have, don't hesitate to work with Hamza! A legend.",
    date: "8 months ago"
  },
  {
    name: "macbookair777",
    country: "Pakistan",
    countryCode: "PK",
    rating: 5,
    comment: "I had an amazing experience with this game development service.",
    date: "10 months ago"
  },
  {
    name: "imra1ny",
    country: "Malta",
    countryCode: "MT",
    rating: 5,
    comment: "Amazing guy, made everything perfect and very fast!",
    date: "10 months ago"
  },
  {
    name: "zakiramin_",
    country: "Turkey",
    countryCode: "TR",
    rating: 5,
    comment: "Hamza is an absolute beast. Loved working with him. He was prompt and delivered results quickly. I am very thankful for the work he did for me. Highly recommend!",
    date: "10 months ago"
  },
  {
    name: "adriannunez598",
    country: "United States",
    countryCode: "US",
    rating: 5,
    comment: "Working with Hamza was a life saver. Talented, fast, great with following instructions. I had a project I needed to get done within 20 hours (one that would take me 15 hours to do) and Hamza finished it in time for me. He was also flexible to add another level at exceptional quality when I paid for level 2. Highly recommend, thank you so much Hamza!!",
    date: "10 months ago"
  },
  {
    name: "rosannarossley",
    country: "Singapore",
    countryCode: "SG",
    rating: 5,
    comment: "Working with Hamza Malik in Game Development has been an absolute pleasure! His ATTENTION TO DETAIL and PROFESSIONALISM not only met but EXCEEDED expectations. The ease of communication and his proactive approach ensured the project went smoothly, and I'm excited to work with him again soon. Highly recommend! 🙌",
    date: "11 months ago"
  }
];

export const technologies = [
  "Unity Engine", "C#", "Unreal Engine", "React/Next.js", "Node.js",
  "Python", "TensorFlow", "WebGL", "Three.js", "MongoDB",
  "PostgreSQL", "AWS", "Docker", "Git", "Agile/Scrum"
];

/** Shown on the homepage stats band, team page, testimonials bar, and anywhere else we quote volume. */
export const projectsDeliveredCountDisplay = "150+" as const;

/** Homepage stats band — values and labels are editable in one place. */
export const homePageStats = [
  { value: "5+", line1: "YEARS", line2: "BUILDING DIGITAL PRODUCTS" },
  { value: projectsDeliveredCountDisplay, line1: "PROJECTS", line2: "DELIVERED WORLDWIDE" },
  { value: "24h", line1: "RESPONSE", line2: "ON SERIOUS INQUIRIES" },
] as const;

export const seoContent = {
  title: "Unity Game Development & Playable Ads | HelixCore",
  description:
    "HelixCore Studio builds Unity games, custom software, Shopify storefronts, and playable and video ad creatives for game studios and product teams.",
  keywords:
    "HelixCore Studio, AI development partner, Unity game development, Next.js development partner, remote software partner, USA software development, Canada software development, AI automation, playable ads, ecommerce development, trusted web agency",
};
