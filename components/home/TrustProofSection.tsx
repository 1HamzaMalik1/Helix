import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Smartphone } from "lucide-react";

const recentGames = [
  {
    name: "Car Mechanic Simulator: Fix",
    shortDescription: "Unity mobile simulation with repair workflows, garage progression, and live Google Play release.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.car.mechanic.fix.my.car",
    imageUrl: "/car-mechanic.png",
    platform: "Android",
    stack: "Unity",
    category: "Simulation",
  },
  {
    name: "Smash Fest! - Royal Puzzle",
    shortDescription: "Unity physics puzzle with cannon mechanics, level progression, and monetization-ready production build.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.flow.cannonball.smash.carnival",
    imageUrl: "/smash-fest-royal-puzzle-2.png",
    platform: "Android",
    stack: "Unity",
    category: "Puzzle",
  },
] as const;

export default function TrustProofSection() {
  return (
    <section className="relative overflow-hidden border-t border-zinc-200 bg-gradient-to-b from-white via-zinc-50/80 to-white py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(244,101,48,0.06),transparent_60%)]" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Portfolio</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">
            Shipped mobile products
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
            Live titles engineered, published, and maintained by our studio on Google Play.
          </p>
          <Link
            href="/services"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:border-zinc-300 hover:shadow-md"
          >
            Explore services
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {recentGames.map((game) => (
            <article
              key={game.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.18)]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200/80">
                <Image
                  src={game.imageUrl}
                  alt={`${game.name} — HelixCore Studio`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-contain object-center p-1 transition duration-500 group-hover:scale-[1.02]"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-zinc-950/75 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
                  Live on Play Store
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="flex flex-wrap gap-2">
                  {[game.platform, game.stack, game.category].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-zinc-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mt-4 text-lg font-bold leading-snug text-zinc-950 md:text-xl">{game.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">{game.shortDescription}</p>

                <a
                  href={game.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#F46530] sm:w-auto"
                >
                  <Smartphone className="h-4 w-4" aria-hidden />
                  View on Google Play
                  <ExternalLink className="h-3.5 w-3.5 opacity-80" aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
