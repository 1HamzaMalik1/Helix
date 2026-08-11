import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PlayCircle, ExternalLink } from "lucide-react";

const recentGames = [
  {
    name: "Game Name 1",
    shortDescription: "A polished mobile game built for performance, retention, and store readiness.",
    playStoreUrl: "#",
    imageUrl: "https://placehold.co/900x1600/png?text=Game+1",
    tags: ["Mobile", "Unity", "Live Ops"],
  },
  {
    name: "Game Name 2",
    shortDescription: "A lightweight, highly playable experience with strong first-session engagement.",
    playStoreUrl: "#",
    imageUrl: "https://placehold.co/900x1600/png?text=Game+2",
    tags: ["Casual", "Hypercasual", "Ads"],
  },
  {
    name: "Game Name 3",
    shortDescription: "A web-first interactive build designed for fast launch and strong monetization potential.",
    playStoreUrl: "#",
    imageUrl: "https://placehold.co/900x1600/png?text=Game+3",
    tags: ["Web", "HTML5", "Playable"],
  },
] as const;

export default function TrustProofSection() {
  return (
    <section className="border-t border-zinc-200 bg-white py-20 md:py-24">
      <div className="container mx-auto max-w-full px-4 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">Recent work</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">
              Games and products clients can actually review
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 md:text-base">
              Here are recent examples of game work that can be shared publicly. Replace the placeholders with your real game names, screenshots, and Play Store links to build instant trust.
            </p>
          </div>
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition hover:text-[#F46530]">
            View services
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {recentGames.map((game) => (
            <article key={game.name} className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 shadow-sm">
              <div className="relative aspect-[9/14] w-full bg-zinc-200">
                <Image
                  src={game.imageUrl}
                  alt={`${game.name} showcase`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  {game.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-600">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 text-lg font-bold text-zinc-950">{game.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{game.shortDescription}</p>
                <a
                  href={game.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#F46530] transition hover:text-[#e85e2d]"
                >
                  <PlayCircle className="h-4 w-4" aria-hidden />
                  Open on Play Store
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
