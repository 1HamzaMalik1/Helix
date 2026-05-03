'use client';

import { useInView } from 'react-intersection-observer';
import {
  Gamepad2,
  Globe,
  Brain,
  Megaphone,
  Code,
  Smartphone,
  ShoppingCart,
  Bot,
  Cog,
  ArrowUpRight,
} from 'lucide-react';
import Link from 'next/link';
import { services, companyInfo } from '@/lib/constants';

const iconMap = {
  Gamepad2,
  Globe,
  Brain,
  Megaphone,
  Code,
  Smartphone,
  ShoppingCart,
  Bot,
  Cog,
};

export default function Services() {
  const { ref, inView } = useInView({
    threshold: 0.06,
    triggerOnce: true,
  });

  return (
    <section
      id="services"
      className="overflow-x-hidden border-t border-zinc-200 bg-gradient-to-b from-zinc-50/90 to-white py-20 md:py-28"
    >
      <div className="container mx-auto max-w-full px-4 lg:px-8">
        <div className="mb-14 md:mb-20 md:flex md:items-end md:justify-between md:gap-12" ref={ref}>
          <div className="max-w-2xl">
            <p
              className={`text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 transition-all duration-700 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              Capabilities
            </p>
            <h2
              className={`mt-3 text-3xl font-bold tracking-tight text-zinc-950 transition-all duration-700 md:text-4xl lg:text-[2.5rem] ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              Services built for
              <span className="mt-1 block text-zinc-600">shipping, not slide decks.</span>
            </h2>
            <p
              className={`mt-5 text-sm leading-relaxed text-zinc-600 transition-all delay-100 duration-700 md:text-base ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              Deep-dive pages for every offering — scope, stack choices, and how we collaborate with your team.
            </p>
          </div>
          <Link
            href="/services"
            className={`mt-8 inline-flex items-center gap-2 border-b-2 border-zinc-900 pb-1 text-sm font-semibold text-zinc-900 transition hover:border-[#F46530] hover:text-[#F46530] md:mt-0 ${
              inView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Full services index
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-zinc-900 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)] md:p-7 ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
                style={{ transitionDelay: `${Math.min(index, 8) * 40}ms` }}
              >
                <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-zinc-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative mb-6 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-white transition group-hover:bg-zinc-900">
                    {Icon ? <Icon className="h-5 w-5" strokeWidth={1.6} /> : null}
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-zinc-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-900" aria-hidden />
                </div>

                <h3 className="relative text-lg font-bold leading-snug text-zinc-950">{service.title}</h3>
                <p className="relative mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-600">
                  {service.description}
                </p>

                <ul className="relative mt-6 space-y-2.5 border-t border-zinc-100 pt-6">
                  {service.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-sm text-zinc-700">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-900" aria-hidden />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative mt-6 flex items-center justify-between border-t border-zinc-100 pt-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">View detail</span>
                  <span className="text-xs font-medium text-zinc-400">{companyInfo.name}</span>
                </div>
              </Link>
            );
          })}
        </div>

        <div
          className={`mt-16 overflow-hidden rounded-2xl bg-zinc-950 px-6 py-10 text-white transition-all delay-150 duration-700 md:mt-20 md:flex md:items-center md:justify-between md:gap-10 md:px-12 md:py-12 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="max-w-xl">
            <p className="text-lg font-semibold tracking-tight">Tell us what you are building.</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              We reply with a concise plan: milestones, risks, and how we would staff the work.
            </p>
          </div>
          <a
            href={companyInfo.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#F46530] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#e85e2d] md:mt-0"
          >
            Book a meeting
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
