import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Crosshair, Gamepad2, Sparkles, Target, Trophy } from "lucide-react";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { companyInfo, siteUrl } from "@/lib/constants";
import { metaDescription } from "@/lib/seo-meta";
import { twitterSummaryLarge } from "@/lib/share-metadata";

const gameName = "Smash Fest – Royal Puzzle";
const pageTitle = "Smash Fest – Royal Puzzle | Official Physics Puzzle Game";
const seoTitle = "Smash Fest – Royal Puzzle | Official Physics Puzzle Game";
const description =
  "Play Smash Fest – Royal Puzzle, the 3D cannon physics puzzle game from HelixCore Studio. Aim, fire, smash towers and master every limited-shot level.";
const googlePlayUrl = "https://play.google.com/store/apps/details?id=com.flow.cannonball.smash.carnival";
const pageUrl = `${siteUrl}/smash-fest`;
const imageUrl = `${siteUrl}/smash-fest-royal-puzzle-2.png`;
const youtubeShortUrl = "https://youtube.com/shorts/SOioTEaK93E";
const youtubeEmbedUrl = "https://www.youtube.com/embed/SOioTEaK93E?rel=0&modestbranding=1";
const youtubeThumbnailUrl = "https://i.ytimg.com/vi/SOioTEaK93E/hqdefault.jpg";

const sections = [
  {
    title: "What Is Smash Fest?",
    body: [
      "Smash Fest – Royal Puzzle is a casual 3D physics puzzle game that combines cannon shooting with destructible tower puzzles.",
      "Each level places a new structure in front of your cannon. Towers can include jars, crates, wooden blocks, ice, metal obstacles, supports, platforms, and other breakable objects.",
      "Your goal is to determine where a cannonball will have the greatest impact. Hit the right support and gravity may do most of the work. Hit the wrong place and you can waste one of your valuable shots.",
    ],
  },
  {
    title: "How to Play Smash Fest",
    body: [
      "Study the tower, look at how the objects connect, aim your cannon toward the best impact point, and fire.",
      "The impact can break objects directly, knock pieces into other objects, remove important supports, or trigger a much larger chain reaction. The goal is to complete each level before your available shots run out.",
      "The most effective shot is not always aimed at the biggest object. Sometimes destroying one small support near the bottom can be far more effective than hitting the top directly.",
    ],
  },
  {
    title: "Every Cannon Shot Can Change the Entire Puzzle",
    body: [
      "One of the most satisfying parts of Smash Fest is watching what happens after a carefully placed cannonball connects with the tower.",
      "A single impact can start a chain reaction: a support breaks, objects fall, jars smash, blocks slide away, and crates tumble from the platform.",
      "Because each tower is built differently, players need to think about the structure instead of simply firing at the same location every time.",
    ],
  },
  {
    title: "Find the Weak Point",
    body: [
      "The key to becoming better at Smash Fest is learning how to identify weak points before firing.",
      "Look at the base of the tower, check which objects support the largest sections, and watch for narrow supports, exposed pieces, stacked objects, and areas where one successful hit could destabilize several other objects.",
      "Some levels reward attacking from the bottom. Others need a direct hit in the center or several planned shots across different sections.",
    ],
  },
  {
    title: "Smash Towers With Real Physics-Based Reactions",
    body: [
      "Smash Fest is designed around physics-driven destruction. Objects can fall, collide, bounce, slide, break, and knock other pieces from the structure after being hit by a cannonball.",
      "That means destruction is part of the puzzle itself. You are creating an impact and letting the resulting physics help you complete the level.",
    ],
  },
  {
    title: "A Different Physics Puzzle in Every Level",
    body: [
      "The fun of a cannon puzzle would disappear quickly if every tower had the same solution.",
      "Smash Fest introduces different tower layouts, object combinations, environments, obstacles, and structural designs as you progress. One level may have a tall tower where removing the base creates a huge collapse, while another may require several accurate shots across different sections.",
      "The objective remains easy to understand: aim, fire, and smash. The challenge is discovering the smartest way to do it.",
    ],
  },
  {
    title: "Built for Quick and Satisfying Gameplay",
    body: [
      "You do not need complicated controls to play Smash Fest. The core loop is built around quickly examining a structure, choosing where to aim, and firing your cannon.",
      "That makes it suitable for short mobile gaming sessions while still offering increasingly challenging physics puzzles. Players who enjoy cannon games, tower destruction games, and casual Android puzzle games can jump in quickly.",
    ],
  },
];

const boosters = [
  {
    title: "Rockets",
    copy: "A powerful way to attack a troublesome section of a level.",
  },
  {
    title: "Sticky Bombs",
    copy: "Explosive opportunities for destroying carefully selected parts of a structure.",
  },
  {
    title: "Giant Ball",
    copy: "A heavier option when you need serious smashing power.",
  },
  {
    title: "Infinite Balls",
    copy: "A mode that gives you more freedom with your shots.",
  },
];

const tips = [
  "Study the complete structure before firing your first cannonball.",
  "Look for supports near the bottom rather than immediately aiming at the highest target.",
  "Wait for the physics reaction to finish before choosing your next shot.",
  "Try to make each shot affect multiple objects whenever possible.",
  "Remember that a smart shot can be stronger than an obvious one.",
];

const finalHighlights = [
  { icon: Crosshair, label: "Aim with precision" },
  { icon: Sparkles, label: "Trigger chain reactions" },
  { icon: Trophy, label: "Master limited-shot levels" },
];

const faqs = [
  {
    question: "What is Smash Fest?",
    answer:
      "Smash Fest – Royal Puzzle is a 3D cannon physics puzzle game from HelixCore Studio. Players fire cannonballs at destructible structures and use physics, accuracy, and strategy to complete levels with a limited number of shots.",
  },
  {
    question: "How do you play Smash Fest?",
    answer:
      "Aim your cannon at the structure, choose the best impact point, and fire. Break important objects and supports to trigger collapses and complete the level before your available cannonballs run out.",
  },
  {
    question: "Is Smash Fest a physics puzzle game?",
    answer:
      "Yes. Physics plays an important role in the gameplay. Objects react to impacts, gravity, collisions, and falling pieces, allowing carefully placed shots to trigger larger chain reactions.",
  },
  {
    question: "Does Smash Fest have boosters?",
    answer:
      "Yes. Smash Fest includes special gameplay options such as Rockets, Sticky Bombs, Giant Ball, and Infinite Balls that can help players approach challenging levels in different ways.",
  },
  {
    question: "Where can I download Smash Fest?",
    answer: "Smash Fest – Royal Puzzle is available on Google Play for Android devices.",
  },
];

export const metadata: Metadata = {
  title: seoTitle,
  description: metaDescription(description),
  keywords: [
    "Smash Fest",
    "Smash Fest Royal Puzzle",
    "Smash Fest game",
    "physics puzzle game",
    "cannon puzzle",
    "cannon game",
    "3D physics puzzle",
    "smash game",
    "tower destruction game",
    "Android puzzle game",
  ],
  alternates: {
    canonical: "/smash-fest",
  },
  openGraph: {
    title: pageTitle,
    description: metaDescription(description),
    url: pageUrl,
    type: "website",
    siteName: companyInfo.name,
    images: [
      {
        url: "/smash-fest-royal-puzzle-2.png",
        width: 1122,
        height: 1402,
        alt: "Smash Fest – Royal Puzzle 3D cannon physics puzzle game artwork",
      },
    ],
  },
  twitter: {
    ...twitterSummaryLarge,
    title: pageTitle,
    description: metaDescription(description),
  },
};

function SmashFestJsonLd() {
  const graph = [
    {
      "@type": "VideoGame",
      "@id": `${pageUrl}#game`,
      name: gameName,
      alternateName: ["Smash Fest", "Smash Fest Royal Puzzle"],
      description,
      url: pageUrl,
      image: imageUrl,
      applicationCategory: "GameApplication",
      gamePlatform: "Android",
      genre: ["Physics puzzle", "Cannon puzzle", "Tower destruction game"],
      operatingSystem: "Android",
      publisher: {
        "@type": "Organization",
        name: companyInfo.name,
        url: siteUrl,
      },
      offers: {
        "@type": "Offer",
        url: googlePlayUrl,
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@type": "VideoObject",
      "@id": `${pageUrl}#video`,
      name: `${gameName} gameplay video`,
      description: "Watch Smash Fest gameplay with cannon shots, tower destruction, and 3D physics puzzle action.",
      embedUrl: youtubeEmbedUrl,
      url: youtubeShortUrl,
      thumbnailUrl: [youtubeThumbnailUrl],
      publisher: {
        "@type": "Organization",
        name: companyInfo.name,
        url: siteUrl,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Smash Fest",
          item: pageUrl,
        },
      ],
    },
  ];

  return <PageJsonLd id="jsonld-smash-fest" graph={graph} />;
}

export default function SmashFestPage() {
  return (
    <>
      <SmashFestJsonLd />

      <section className="relative overflow-hidden bg-zinc-950 pt-28 text-white md:pt-32" aria-labelledby="smash-fest-heading">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "46px 46px",
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F46530]/50 to-transparent" />

        <div className="container relative mx-auto grid max-w-6xl gap-10 px-4 pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8 lg:pb-20">
          <div>
            <nav className="text-sm text-zinc-500" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="transition hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden className="text-zinc-600">
                  /
                </li>
                <li className="font-medium text-zinc-300">Smash Fest</li>
              </ol>
            </nav>

            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-[#F46530]">Official game page</p>
            <h1 id="smash-fest-heading" className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Smash Fest – Royal Puzzle
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
              Play Smash Fest, the 3D cannon physics puzzle game from {companyInfo.name}. Aim, fire, smash towers, and master
              limited-shot levels with smart physics-based strategy.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F46530] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#F46530]/20 transition hover:bg-[#e85e2d]"
              >
                Play on Google Play
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <Link
                href="/services/game-development"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/25"
              >
                Game development by HelixCore
              </Link>
            </div>

            <dl className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                ["Genre", "3D physics puzzle"],
                ["Core action", "Aim, fire, smash"],
                ["Platform", "Android"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">{label}</dt>
                  <dd className="mt-2 text-sm font-bold text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-[30rem] lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#F46530]/12 blur-3xl" />
            <Image
              src="/smash-fest-royal-puzzle-2.png"
              alt="Smash Fest – Royal Puzzle 3D cannon physics puzzle game artwork"
              width={1122}
              height={1402}
              priority
              sizes="(min-width: 1024px) 44vw, 92vw"
              className="relative h-auto w-full rounded-3xl border border-white/10 bg-zinc-900 object-cover shadow-2xl shadow-black/40"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200/80 bg-zinc-50 py-14 md:py-20" aria-labelledby="smash-fest-video">
        <div className="container mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F46530]">Gameplay preview</p>
            <h2 id="smash-fest-video" className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">
              Watch Smash Fest in action
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-600 md:text-base">
              See the cannon puzzle gameplay, tower destruction, and physics reactions before jumping into Smash Fest on
              Android.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={youtubeShortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-bold text-zinc-950 transition hover:border-zinc-950/30"
              >
                Open on YouTube
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F46530] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#e85e2d]"
              >
                Download the game
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[24rem]">
            <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-950 p-2 shadow-2xl shadow-zinc-950/15">
              <div className="aspect-[9/16] overflow-hidden rounded-[1.5rem] bg-black">
                <iframe
                  src={youtubeEmbedUrl}
                  title="Smash Fest – Royal Puzzle gameplay video"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200/80 bg-white py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F46530]">Game guide</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">
              Smash Fest – Royal Puzzle: aim, fire, and smash smarter
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-600 md:text-lg">
              Smash Fest is a 3D cannon physics puzzle game from <strong className="font-semibold text-zinc-950">{companyInfo.name}</strong>.
              Each level gives you a destructible tower, limited cannonballs, and one clear challenge: find the weak point
              before your shots run out.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Think first", "Study supports, stacked objects, and the base before firing."],
              ["Use physics", "Let gravity, falling pieces, and collisions create bigger chain reactions."],
              ["Save shots", "Every cannonball matters, so target the point that affects the most objects."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <h3 className="text-base font-bold text-zinc-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{copy}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {sections.map((section, index) => (
              <article key={section.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F46530]/10 text-sm font-bold text-[#F46530]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-zinc-950">{section.title}</h3>
                    <div className="mt-4 space-y-3">
                      {section.body.map((paragraph) => (
                        <p key={paragraph} className="text-sm leading-7 text-zinc-600 md:text-base">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-8 rounded-3xl border border-zinc-200 bg-zinc-950 p-6 text-white shadow-xl shadow-zinc-950/10 md:p-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F46530]">Boosters</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">More than standard cannonballs</h2>
              <p className="mt-4 text-sm leading-7 text-zinc-300 md:text-base">
                Special gameplay boosters give you extra ways to solve difficult structures when regular cannon shots are
                not enough to create the collapse you want.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {boosters.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F46530]">Why play</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-950">A physics puzzle for satisfying chain reactions</h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600 md:text-base">
                Smash Fest combines cannon precision, structural strategy, physics unpredictability, and the satisfying moment
                when a perfect shot brings the whole tower down. A tiny change in your target can completely change the result.
              </p>
              <a
                href={googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#F46530] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#e85e2d]"
              >
                Download Smash Fest
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </section>

            <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F46530]">Player tips</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-950">How to get better</h2>
              <ul className="mt-5 space-y-3">
                {tips.map((tip) => (
                  <li key={tip} className="flex gap-3 text-sm leading-6 text-zinc-700 md:text-base">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#F46530]" aria-hidden />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8" id="faq">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F46530]">FAQ</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-950 md:text-3xl">
              Frequently asked questions about Smash Fest
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {faqs.map((item) => (
                <div key={item.question} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                  <h3 className="text-base font-bold leading-snug text-zinc-950">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {item.question === "Where can I download Smash Fest?" ? (
                      <>
                        Smash Fest – Royal Puzzle is available on{" "}
                        <a
                          href={googlePlayUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-[#F46530] underline decoration-[#F46530]/30 underline-offset-2 hover:decoration-[#F46530]"
                        >
                          Google Play
                        </a>{" "}
                        for Android devices.
                      </>
                    ) : (
                      item.answer
                    )}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="bg-zinc-950 py-14 text-white md:py-20" aria-labelledby="smash-fest-cta">
        <div className="container mx-auto max-w-4xl px-4 text-center lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F46530]/15 text-[#F46530]">
            <Target className="h-7 w-7" aria-hidden />
          </div>
          <h2 id="smash-fest-cta" className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">
            Ready to Smash?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
            The cannon is loaded and the next tower is waiting. Study the structure, find its weakest point, and see whether
            you can bring everything crashing down before your shots run out.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#F46530] px-8 py-3.5 text-sm font-bold text-white transition hover:bg-[#e85e2d] sm:w-auto"
            >
              Play Smash Fest on Google Play
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <Link
              href="/services/unity-game-development"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/30 sm:w-auto"
            >
              <Gamepad2 className="h-4 w-4" aria-hidden />
              Unity game development
            </Link>
          </div>
          <div className="mt-10 grid gap-3 text-left sm:grid-cols-3">
            {finalHighlights.map(({ icon: FeatureIcon, label }) => {
              return (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <FeatureIcon className="h-5 w-5 text-[#F46530]" aria-hidden />
                  <p className="mt-3 text-sm font-semibold text-white">{label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

