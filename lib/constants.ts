export const companyInfo = {
  name: "HelixCore Studio",
  tagline: "Crafting Digital Excellence Through Code & Creativity",
  description: "HelixCore Studio is a premier software development house specializing in game development, full-stack web solutions, and AI-powered applications. With 5+ years of industry expertise.",
  ceo: "Hamza Hakim",
  experience: "5+ years",
  email: "helixcorestudio@gmail.com",
  adminEmail: "hamzahakim12235@gmail.com",
  phone: "+923201469571",
  location: "Lahore, Pakistan",
  /** Full postal address for schema and footer (Ichra, Lahore) */
  addressLine: "16 E, Sultan Ahmed Road, Ichra",
  addressLocality: "Lahore",
  addressRegion: "Punjab",
  postalCode: "54000",
  addressCountry: "PK",
  linkedInCompany: "https://www.linkedin.com/company/helixcore-studio/",
  degree: "Masters in Software Engineering",
  calendlyUrl: "https://calendly.com/hamzahakim12235",
  /** Full-time builders in our Lahore studio (design, engineering, QA, ops) */
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
    seoTitle: "AI Development Services | HelixCore Studio",
    seoDescription:
      "Custom AI development in Lahore: LLM integrations, AI agents, and workflow automation. HelixCore Studio ships secure, measurable AI for global clients.",
    relatedSlugs: ["game-development", "web-development", "ai-agent-services", "automation-services"],
  },
  {
    slug: "game-development",
    title: "Game Development",
    description: "Unity, playable ads, HTML5, and cross-platform game production.",
    icon: "Gamepad2",
    features: ["Unity 2D/3D", "Playable ads", "HTML5 / WebGL", "Porting & launch"],
    longDescription: "From Unity titles and high-performing playable ads to browser games and platform ports, we ship engaging experiences optimized for acquisition, retention, and store compliance.",
    seoTitle: "Game Development Company | HelixCore Studio",
    seoDescription:
      "Game development company based in Lahore: Unity, playable ads, HTML5, and porting. HelixCore Studio builds and ships games for studios worldwide.",
    relatedSlugs: ["ai-development", "web-development", "unity-game-development", "playable-ads-development"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    description: "Full-stack apps, ecommerce, and scalable cloud deployments.",
    icon: "Code",
    features: ["React & Next.js", "APIs & backends", "Ecommerce", "Cloud DevOps"],
    longDescription: "We engineer fast, maintainable web platforms—from marketing sites to complex SaaS and ecommerce. Our stack prioritizes performance, SEO-friendly structure, and reliable release pipelines.",
    seoTitle: "Web Development Services | HelixCore Studio",
    seoDescription:
      "Web development services with Next.js and cloud DevOps. HelixCore Studio in Lahore builds fast SaaS, ecommerce, and enterprise web apps for international clients.",
    relatedSlugs: ["ai-development", "game-development", "full-stack-web-development", "ecommerce-development"],
  },
  {
    slug: "unity-game-development",
    title: "Unity Game Development",
    description: "2D/3D games for Android, iOS, PC, Steam with multiplayer capabilities",
    icon: "Gamepad2",
    features: ["2D/3D Game Dev", "Multiplayer Games", "Cross-Platform", "Steam Integration"],
    longDescription: "We build production-ready Unity games for startups, agencies, and game studios. From rapid prototyping to launch-ready builds, our team handles gameplay programming, optimization, and platform-specific publishing so your product reaches players faster.",
    seoTitle: "Unity Game Development Services | HelixCore",
    seoDescription:
      "Unity game development for mobile, PC, and Steam from Lahore. 2D/3D, multiplayer, and store-ready builds with HelixCore Studio.",
    relatedSlugs: ["game-development", "playable-ads-development", "mobile-console-porting"],
  },
  {
    slug: "playable-ads-development",
    title: "Playable Ads Development",
    description: "Interactive ad experiences across all major platforms",
    icon: "Megaphone",
    features: ["Mintegral", "AppLovin", "TikTok", "Meta", "IronSource", "Unity Ads"],
    longDescription: "Our playable ad team creates lightweight, high-performance ad experiences designed to increase click-through and install rates. We tailor every ad to platform requirements while preserving your gameplay hook and brand identity.",
    seoTitle: "Playable Ads Development | HelixCore Studio",
    seoDescription:
      "Playable ads for Meta, TikTok, AppLovin, and Unity Ads. Lightweight HTML5 creatives engineered for UA performance by HelixCore Studio.",
    relatedSlugs: ["game-development", "unity-game-development", "html5-web-games"],
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    description: "Custom online stores and shopping platforms",
    icon: "ShoppingCart",
    features: ["Shopify", "WordPress", "Wix", "Webflow", "Custom Solutions"],
    longDescription: "We design and develop ecommerce experiences that convert visitors into customers. Whether you need a platform-based store or a custom commerce stack, we deliver secure checkouts, optimized product flows, and scalable integrations.",
    seoTitle: "E-commerce Development Services | HelixCore",
    seoDescription:
      "Custom ecommerce on Shopify, WooCommerce, Webflow, and headless stacks. Secure checkout, SEO-friendly storefronts from HelixCore Studio.",
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
    relatedSlugs: ["ai-development", "automation-services", "full-stack-web-development"],
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
      "Full-stack apps with React, Next.js, Node.js, and PostgreSQL. APIs, auth, and cloud deploys—engineered in Lahore by HelixCore Studio.",
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
      "Port games to iOS, Android, and console with control mapping and perf tuning. Store submission support from HelixCore Studio, Lahore.",
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
  },
  {
    name: "Samran Shoukat",
    role: "CTO & Senior Software Engineer",
    bio: "Senior engineer specializing in scalable application architecture, clean implementation, and reliable delivery across modern software stacks.",
    expertise: ["React/Next.js", "TypeScript", "Node.js", "API Development"],
    image: "/samran-shoukat-cto.png",
    linkedin: "https://www.linkedin.com/in/samran-shoukat-36b930213/",
    github: ""
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
  { value: "5+", line1: "YEARS", line2: "ON THE MARKET" },
  { value: projectsDeliveredCountDisplay, line1: "PROJECTS", line2: "DELIVERED GLOBALLY" },
  { value: "2", line1: "SENIOR", line2: "LEADS ON DELIVERY" },
] as const;

export const seoContent = {
  title: "HelixCore Studio | Software Development Services — AI, Games & Web",
  description:
    "Software development services in Lahore (Ichra): AI, game & web apps for startups and enterprises worldwide. HelixCore Studio—book a strategy call.",
  keywords:
    "HelixCore Studio, software development services Lahore, AI development company Lahore, game development studio Pakistan, Unity developers, playable ads agency, Next.js web development, software house Lahore, AI agents, mobile game porting",
};