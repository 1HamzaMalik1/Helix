import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import { Clock, Shield, Users } from "lucide-react";
import { companyInfo } from "@/lib/constants";
import {
  SiFirebase,
  SiFiverr,
  SiGithub,
  SiGit,
  SiGoogleplay,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiUnity,
  SiUpwork,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import {
  FaApple,
  FaCode,
  FaEnvelope,
  FaGamepad,
  FaGithub,
  FaBolt,
  FaClipboardList,
  FaGlobe,
  FaGraduationCap,
  FaHandshake,
  FaLinkedin,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaPhone,
  FaRocket,
  FaServer,
  FaTh,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

export interface Metric {
  label: string;
  value: number;
  suffix?: string;
}

export interface TechItem {
  name: string;
  tooltip: string;
  icon: IconType;
  tone: string;
}

export interface ProjectItem {
  title: string;
  image: string;
  tags: string[];
  players?: string;
  ctr?: string;
  summary: string;
  href?: string;
}

export interface PortfolioGame {
  title: string;
  href: string;
  platform: "Android" | "iOS" | "Web";
  image: string;
}

export interface GameCategory {
  id: string;
  title: string;
  icon: IconType;
  games: PortfolioGame[];
}

export interface ServiceOffer {
  title: string;
  tagline: string;
  icon: IconType;
  deliverables: string[];
  metric: string;
  ctaLabel: string;
  ctaHref: string;
  serviceKey: string;
}

export interface ProcessStep {
  title: string;
  detail: string;
  icon: IconType;
}

export interface HireGuarantee {
  title: string;
  detail: string;
  icon: LucideIcon;
}

export interface IdealClient {
  title: string;
  detail: string;
  icon: IconType;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface TrustLink {
  name: string;
  href: string;
  label: string;
  icon: IconType;
}

function playStoreGame(packageId: string, title: string): PortfolioGame {
  const href = `https://play.google.com/store/apps/details?id=${packageId}`;
  return {
    title,
    href,
    platform: "Android",
    image: `https://icon.horse/icon/play.google.com/store/apps/details?id=${packageId}`,
  };
}

function appStoreGame(href: string, title: string): PortfolioGame {
  return {
    title,
    href,
    platform: "iOS",
    image: `https://icon.horse/icon/${href}`,
  };
}

function webGame(href: string, title: string): PortfolioGame {
  return {
    title,
    href,
    platform: "Web",
    image: `https://icon.horse/icon/${href}`,
  };
}

export const calendlyUrl = companyInfo.calendlyUrl;

export const trustLinks: TrustLink[] = [
  {
    name: "Upwork",
    href: "https://www.upwork.com/freelancers/~019ebe9ea7ef1c3d44?mp_source=share",
    label: "Top Rated Unity specialist",
    icon: SiUpwork,
  },
  {
    name: "Fiverr",
    href: "https://www.fiverr.com/s/Q7ZRr2y",
    label: "Playable ads and game delivery",
    icon: SiFiverr,
  },
];

export const buyerOutcomes = [
  { label: "Need multiplayer that scales", result: "Photon Fusion delivery" },
  { label: "Need ads that convert", result: "25% CTR playable lift" },
  { label: "Need store-ready games", result: "105+ live shipped titles" },
  { label: "Need reliable execution", result: "91% Job Success score" },
];

export const serviceOffers: ServiceOffer[] = [
  {
    title: "Unity Game Development",
    tagline: "Ship polished mobile, PC, and multiplayer games to store.",
    icon: FaGamepad,
    deliverables: ["2D/3D gameplay", "Photon Fusion multiplayer", "Store-ready builds"],
    metric: "105+ live games",
    ctaLabel: "Discuss your game",
    ctaHref: "#contact",
    serviceKey: "Unity Game Development",
  },
  {
    title: "Playable Ads",
    tagline: "WebGL creatives engineered for UA performance and fast load.",
    icon: FaRocket,
    deliverables: ["WebGL playable builds", "Fast mobile load", "CTR-focused iteration"],
    metric: "25% CTR lift",
    ctaLabel: "Start playable ads",
    ctaHref: "#contact",
    serviceKey: "Playable Ads",
  },
  {
    title: "Web and Full-Stack",
    tagline: "React and Next.js products for studios, dashboards, and tools.",
    icon: FaCode,
    deliverables: ["React and Next.js apps", "API integrations", "Production deployment"],
    metric: "Production ready",
    ctaLabel: "Build your web app",
    ctaHref: "#contact",
    serviceKey: "Full-Stack Web Development",
  },
];

export const processSteps: ProcessStep[] = [
  { title: "Scope", detail: "Goals and timeline aligned.", icon: FaClipboardList },
  { title: "Build", detail: "Weekly progress updates.", icon: FaCode },
  { title: "Polish", detail: "Performance and QA.", icon: FaBolt },
  { title: "Ship", detail: "Launch and support.", icon: FaHandshake },
];

export const hireGuarantees: HireGuarantee[] = [
  { title: "24-48h response", detail: "Serious inquiries get a clear reply fast.", icon: Clock },
  { title: "NDA on request", detail: "Your game concept and roadmap stay protected.", icon: Shield },
  { title: "Direct senior delivery", detail: "You work with Hamza, not a junior handoff.", icon: Users },
];

export const idealClients: IdealClient[] = [
  {
    title: "Game studios",
    detail: "Need Unity gameplay, multiplayer, or live-ops execution.",
    icon: FaGamepad,
  },
  {
    title: "UA and ad teams",
    detail: "Need playable ads that load fast and improve campaign CTR.",
    icon: FaRocket,
  },
  {
    title: "Founders and startups",
    detail: "Need MVP to store with scalable architecture.",
    icon: FaCode,
  },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/hamza-hakim1", icon: FaLinkedin },
  { label: "GitHub", href: "https://github.com", icon: FaGithub },
  { label: "Email", href: "mailto:hamzahakim12235@gmail.com", icon: FaEnvelope },
];

export const heroHighlights = [
  { label: "Realtime Multiplayer", icon: FaGamepad },
  { label: "Playable Ads", icon: FaRocket },
  { label: "Scalable Backends", icon: FaServer },
];

export const metrics: Metric[] = [
  { label: "Job Success", value: 91, suffix: "%" },
  { label: "Live Games", value: 105, suffix: "+" },
  { label: "Players", value: 50, suffix: "K+" },
  { label: "Years", value: 5, suffix: "+" },
];

export const statsIcons = [FaTrophy, FaGamepad, FaUsers, FaRocket];

export const technologies: TechItem[] = [
  { name: "Unity", tooltip: "Primary game engine", icon: SiUnity, tone: "from-secondary/35 to-orange-400/10" },
  { name: "React", tooltip: "Interactive UI and web apps", icon: SiReact, tone: "from-sky-500/35 to-cyan-400/10" },
  { name: "Next.js", tooltip: "Production web platforms", icon: SiNextdotjs, tone: "from-zinc-500/35 to-zinc-200/10" },
  { name: "Firebase", tooltip: "Auth, analytics, cloud sync", icon: SiFirebase, tone: "from-amber-500/35 to-orange-400/10" },
  { name: "HTML5", tooltip: "Playable ads runtime", icon: SiHtml5, tone: "from-orange-500/35 to-red-400/10" },
  { name: "Google Play", tooltip: "Android release pipeline", icon: SiGoogleplay, tone: "from-emerald-500/35 to-green-400/10" },
  { name: "Apple", tooltip: "iOS shipping and optimization", icon: FaApple, tone: "from-zinc-500/35 to-zinc-200/10" },
  { name: "GitHub", tooltip: "Source control and CI", icon: SiGithub, tone: "from-violet-500/35 to-purple-400/10" },
  { name: "Git", tooltip: "Versioning and workflows", icon: SiGit, tone: "from-red-500/35 to-rose-400/10" },
  { name: "C#", tooltip: "Gameplay and systems code", icon: TbBrandCSharp, tone: "from-purple-500/35 to-fuchsia-400/10" },
  { name: "MySQL", tooltip: "Data persistence layer", icon: SiMysql, tone: "from-blue-500/35 to-indigo-400/10" },
  { name: "JavaScript", tooltip: "Web interactions", icon: SiJavascript, tone: "from-yellow-500/35 to-amber-400/10" },
  { name: "TypeScript", tooltip: "Typed frontend architecture", icon: SiTypescript, tone: "from-blue-500/35 to-sky-400/10" },
];

export const featuredProjects: ProjectItem[] = [
  {
    title: "Multiplayer RTS Game",
    image: "/hamza-hakim-multiplayer-rts-game-project.png",
    tags: ["Photon Fusion", "Multiplayer", "RTS"],
    players: "50K+",
    summary: "Server-authoritative RTS architecture with session scaling, ranked matchmaking, and live balancing tools.",
  },
  {
    title: "FPS Sniper Mobile Game",
    image: "/hamza-hakim-fps-sniper-mobile-game-project.png",
    tags: ["Unity", "FPS", "Mobile"],
    players: "10K+",
    summary: "Precision aiming, frame-time optimization, and progression loops built for mid-range Android devices.",
  },
  {
    title: "Playable Ads Campaign",
    image: "/hamza-hakim-playable-ad-compaign.png",
    tags: ["WebGL", "HTML5", "Playable Ads"],
    ctr: "25% CTR Lift",
    summary: "WebGL ad mini-game optimized for instant load and high retention through branch-based interaction paths.",
  },
  {
    title: "Tower Defense Game",
    image: "/hamza-hakim-tower-defense-game-project.png",
    tags: ["Unity", "Strategy", "Mobile"],
    summary: "Wave simulation with adaptive enemy behaviors, tactical upgrade trees, and live event parameter tuning.",
  },
];

export const gamePortfolioCategories: GameCategory[] = [
  {
    id: "kids-educational",
    title: "Kids Educational Games",
    icon: FaGraduationCap,
    games: [
      playStoreGame("com.abcgames.kids", "KIDS Educational"),
      playStoreGame("com.legendsoflearning.awakening", "Awakening - Legends of Learning"),
      playStoreGame("com.binkyacademy.learning.game", "Binky Academy - Learning Game"),
    ],
  },
  {
    id: "action-adventure",
    title: "Action and Adventure Games",
    icon: FaGamepad,
    games: [
      playStoreGame("com.zapygames.pizza", "Pizza Battle"),
      playStoreGame("com.gns.connectfish.puzzlegames", "Connect Fish Puzzle Games"),
      playStoreGame("com.tbs.constumeboutique.idlegame", "Costume Boutique - Idle Game"),
      playStoreGame("com.dhigames.cowboyhuntshooter", "Cowboy Hunt Shooter"),
      playStoreGame("com.gns.fps.battleground.attack.games", "FPS Battleground Attack Games"),
      playStoreGame("com.papasgamingcrush.bikeracinggame.stunt.rider", "Bike Racing Stunt Rider"),
      appStoreGame(
        "https://apps.apple.com/us/app/downtown-mafia-gang-wars-rpg/id860440635?platform=iphone",
        "Downtown Mafia: Gang Wars RPG",
      ),
      playStoreGame("com.flaregames.royalrevolt", "Royal Revolt"),
      playStoreGame("com.bulberry.wargard", "War Gard: Idle Defense TD"),
      playStoreGame("com.k9.kitty2.vs.granny.prank3d.game", "Kitty vs Granny: Prank 3D Game"),
      playStoreGame("com.famousdoggstudios.rr2", "Rebel Racing 2"),
      playStoreGame("online.limitless.appleknight.dungeons", "Apple Knight: Dungeons"),
    ],
  },
  {
    id: "pokemon-style",
    title: "Pokemon-Style Game",
    icon: FaRocket,
    games: [playStoreGame("com.square_enix.chaosrings3gp", "Chaos Rings III - Square Enix")],
  },
  {
    id: "card-game",
    title: "Card Game",
    icon: FaTh,
    games: [webGame("https://modernamericancanasta.netlify.app/", "Canasta Game Real")],
  },
  {
    id: "2d-games",
    title: "2D Games",
    icon: FaMobileAlt,
    games: [
      playStoreGame("com.spoonbox.kingdomofarcadia.mobile", "Kingdom of Arcadia"),
      playStoreGame("com.Jaems.ProjectTowerAndBows", "Project Tower and Bows"),
      playStoreGame("com.retrobot.sorcero", "Sorcero"),
      playStoreGame("com.mobirix.projectdf1", "Project DF1"),
    ],
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Mason Rivera",
    role: "Product Director",
    company: "Iron Harbor Games",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    quote: "Hamza rebuilt our multiplayer stack into a stable production-ready system and reduced deployment risk immediately.",
    rating: 5,
  },
  {
    name: "Sophia Chen",
    role: "UA Lead",
    company: "Velocity Ads",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
    quote: "The playable ad prototypes shipped fast, loaded instantly, and lifted campaign engagement from week one.",
    rating: 5,
  },
  {
    name: "Noah Martins",
    role: "Studio Founder",
    company: "Gridline Interactive",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&q=80",
    quote: "Clear communication, strong engineering judgment, and polished execution across Unity, backend, and release pipelines.",
    rating: 5,
  },
];

export const contactItems = [
  {
    label: "Email",
    value: "hamzahakim12235@gmail.com",
    href: "mailto:hamzahakim12235@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "Phone",
    value: "+92 316 4935823",
    href: "tel:+923164935823",
    icon: FaPhone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hamza-hakim1",
    href: "https://linkedin.com/in/hamza-hakim1",
    icon: FaLinkedin,
  },
  {
    label: "Location",
    value: "Lahore, Pakistan",
    href: "https://maps.google.com/?q=Lahore,Pakistan",
    icon: FaMapMarkerAlt,
  },
  {
    label: "Website",
    value: "helixcorestudio.com",
    href: "https://helixcorestudio.com",
    icon: FaGlobe,
  },
];
