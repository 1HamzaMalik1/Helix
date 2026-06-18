"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { gamePortfolioCategories } from "./data";

export default function GamePortfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleGames = useMemo(() => {
    if (activeCategory === "all") {
      return gamePortfolioCategories.flatMap((c) => c.games);
    }
    return gamePortfolioCategories.find((c) => c.id === activeCategory)?.games ?? [];
  }, [activeCategory]);

  return (
    <section id="game-portfolio" className="mx-auto max-w-5xl border-t border-zinc-800/80 px-4 py-20 sm:px-6">
      <SectionHeading title="Live games" subtitle="105+ titles on Google Play, App Store, and web — click any to verify." />

      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("all")}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
            activeCategory === "all" ? "bg-secondary text-white" : "text-zinc-400 hover:text-white"
          }`}
        >
          All
        </button>
        {gamePortfolioCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              activeCategory === category.id ? "bg-secondary text-white" : "text-zinc-400 hover:text-white"
            }`}
          >
            {category.title.replace(" Games", "").replace("Game", "")}
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visibleGames.map((game) => (
          <a
            key={`${game.title}-${game.href}`}
            href={game.href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/30 p-3 transition hover:border-zinc-700 hover:bg-zinc-900/60"
          >
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-zinc-800">
              <Image src={game.image} alt="" fill className="object-cover" unoptimized />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-white">{game.title}</p>
              <p className="text-xs text-zinc-500">{game.platform}</p>
            </div>
            <ExternalLink className="h-4 w-4 shrink-0 text-zinc-600 transition group-hover:text-secondary" />
          </a>
        ))}
      </div>
    </section>
  );
}
