"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { Calendar } from "lucide-react";
import { calendlyUrl, metrics, trustLinks } from "./data";

export default function Hero() {
  return (
    <section id="hero" className="relative z-10 mx-auto max-w-5xl px-4 pb-20 pt-28 sm:px-6">
      <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
        {trustLinks.map((link, idx) => (
          <span key={link.name} className="inline-flex items-center gap-2">
            {idx > 0 ? <span className="text-zinc-700">|</span> : null}
            <a href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-medium text-zinc-300 transition hover:text-secondary">
              <link.icon className="h-4 w-4" />
              {link.name}
            </a>
          </span>
        ))}
      </div>

      <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-medium text-secondary">Unity · Playable Ads · Web</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Hamza Hakim</h1>
            <p className="max-w-lg text-lg text-zinc-300">
              Senior developer for studios that need games shipped to store — multiplayer, playable ads, and web.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="text-xs text-zinc-500">{metric.label}</dt>
                <dd className="mt-1 text-2xl font-semibold text-white">
                  <CountUp end={metric.value} duration={2} enableScrollSpy scrollSpyOnce suffix={metric.suffix ?? ""} />
                </dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
              Get a quote
            </a>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-secondary hover:text-secondary"
            >
              <Calendar className="h-4 w-4" />
              Book a call
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-zinc-800">
          <Image
            src="/hamza-hakim-Unity-game-developer-and-full-stack-ai-developer.png"
            alt="Hamza Hakim"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
