'use client';

import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Calendar, Quote } from 'lucide-react';
import Image from 'next/image';
import { testimonials, companyInfo } from '@/lib/constants';

function flagSrc(code: string) {
  return `https://flagcdn.com/w40/${code.toLowerCase()}.png`;
}

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.06, triggerOnce: true });
  const [featured, setFeatured] = useState(0);

  const featuredReview = testimonials[featured];
  const sideIndices = testimonials.map((_, i) => i).filter((i) => i !== featured).slice(0, 4);

  const go = useCallback(
    (dir: -1 | 1) => {
      setFeatured((i) => (i + dir + testimonials.length) % testimonials.length);
    },
    []
  );

  useEffect(() => {
    const t = setInterval(() => setFeatured((i) => (i + 1) % testimonials.length), 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative overflow-x-hidden border-t border-zinc-200 bg-zinc-950 py-20 text-white md:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container relative mx-auto px-4 lg:px-8">
        <header className="mx-auto max-w-2xl text-center" ref={ref}>
          <p
            className={`text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 transition-all duration-700 ${
              inView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Client feedback
          </p>
          <h2
            className={`mt-3 text-3xl font-bold tracking-tight md:text-4xl transition-all delay-75 duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Trusted by product teams worldwide
          </h2>
          <p
            className={`mt-4 text-sm text-zinc-400 md:text-base transition-all delay-100 duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Real outcomes from founders, studios, and operators who needed senior execution.
          </p>
        </header>

        <div
          className={`mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-12 lg:gap-8 transition-all delay-150 duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="relative lg:col-span-7">
            <Quote className="pointer-events-none absolute -left-1 top-6 hidden h-20 w-20 text-white/[0.04] lg:block" aria-hidden />
            <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-sm md:p-10">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex gap-0.5" aria-label={`${featuredReview.rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 md:h-[18px] md:w-[18px] ${
                        i < featuredReview.rating ? 'fill-[#F46530] text-[#F46530]' : 'text-white/15'
                      }`}
                    />
                  ))}
                </div>
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-zinc-400">
                  {featuredReview.date}
                </span>
              </div>

              <blockquote className="flex-1 border-l-2 border-[#F46530]/60 pl-5 text-lg font-medium leading-relaxed text-zinc-100 md:text-xl">
                &ldquo;{featuredReview.comment}&rdquo;
              </blockquote>

              <footer className="mt-8 flex items-center gap-4 border-t border-white/10 pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F46530]/15 text-sm font-bold text-[#F46530]">
                  {featuredReview.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <cite className="not-italic text-sm font-semibold text-white">{featuredReview.name}</cite>
                  <div className="mt-1 flex items-center gap-2">
                    <Image
                      src={flagSrc(featuredReview.countryCode)}
                      alt=""
                      width={20}
                      height={14}
                      className="h-3.5 w-5 rounded-sm object-cover ring-1 ring-white/20"
                      unoptimized
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <span className="text-xs text-zinc-500">{featuredReview.country}</span>
                  </div>
                </div>
              </footer>

              <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-6">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:border-white/30 hover:bg-white/10"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex flex-1 justify-center gap-1.5 px-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setFeatured(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === featured ? 'w-8 bg-[#F46530]' : 'w-1.5 bg-white/20 hover:bg-white/35'
                      }`}
                      aria-label={`Show review ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:border-white/30 hover:bg-white/10"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </article>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">More reviews</p>
            <ul className="flex flex-1 flex-col gap-2.5">
              {sideIndices.map((idx) => {
                const t = testimonials[idx];
                return (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => setFeatured(idx)}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-left transition hover:border-[#F46530]/40 hover:bg-white/[0.07]"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="truncate text-sm font-semibold text-zinc-100">{t.name}</span>
                        <span className="flex shrink-0 gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < t.rating ? 'fill-[#F46530] text-[#F46530]' : 'text-white/15'
                              }`}
                            />
                          ))}
                        </span>
                      </div>
                      <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-zinc-500">{t.comment}</p>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-xl text-center">
          <a
            href={companyInfo.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#F46530] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#F46530]/20 transition hover:bg-[#e85e2d]"
          >
            <Calendar className="h-4 w-4" aria-hidden />
            Book a consultation
          </a>
        </div>
      </div>
    </section>
  );
}
