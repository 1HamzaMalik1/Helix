import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

const recentGames = [
  {
    name: "Car Mechanic Simulator: Fix",
    shortDescription: "Unity mobile simulation — repair workflows, garage progression, Google Play release.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.car.mechanic.fix.my.car",
    imageUrl: "/car-mechanic.png",
    platform: "Android",
    stack: "Unity",
    category: "Simulation",
  },
  {
    name: "Smash Fest! - Royal Puzzle",
    shortDescription: "Unity physics puzzle — cannon mechanics, level progression, monetization-ready build.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.flow.cannonball.smash.carnival",
    imageUrl: "/smash-fest-royal-puzzle-2.png",
    platform: "Android",
    stack: "Unity",
    category: "Puzzle",
  },
] as const;

export default function TrustProofSection() {
  return (
    <section className="border-t border-zinc-200 bg-zinc-50 py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Portfolio</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">
            Published mobile products
          </h2>
          <p className="mt-3 text-sm text-zinc-600 md:text-base">
            Live titles we designed, built, and shipped to Google Play.
          </p>
          <Link
            href="/services"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition hover:text-[#F46530]"
          >
            View all services
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-6">
          {recentGames.map((game) => (
            <article
              key={game.name}
              className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm"
            >
              <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                <div className="relative aspect-[16/10] w-full bg-zinc-100 md:aspect-auto md:min-h-[220px]">
                  <Image
                    src={game.imageUrl}
                    alt={`${game.name} — HelixCore Studio`}
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-col justify-center border-t border-zinc-100 p-6 md:border-l md:border-t-0 md:p-8">
                  <dl className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                    <div className="flex gap-1.5">
                      <dt className="text-zinc-400">Platform</dt>
                      <dd className="text-zinc-700">{game.platform}</dd>
                    </div>
                    <div className="flex gap-1.5">
                      <dt className="text-zinc-400">Stack</dt>
                      <dd className="text-zinc-700">{game.stack}</dd>
                    </div>
                    <div className="flex gap-1.5">
                      <dt className="text-zinc-400">Category</dt>
                      <dd className="text-zinc-700">{game.category}</dd>
                    </div>
                  </dl>
                  <h3 className="mt-4 text-lg font-bold text-zinc-950">{game.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{game.shortDescription}</p>
                  <a
                    href={game.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit items-center gap-2 border-b border-zinc-300 pb-0.5 text-sm font-semibold text-zinc-900 transition hover:border-[#F46530] hover:text-[#F46530]"
                  >
                    View on Google Play
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
