'use client';

import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Calendar } from 'lucide-react';
import Image from 'next/image';
import { testimonials, companyInfo, projectsDeliveredCountDisplay } from '@/lib/constants';

function flagSrc(code: string) {
  return `https://flagcdn.com/w40/${code.toLowerCase()}.png`;
}

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.06, triggerOnce: true });
  const [featured, setFeatured] = useState(0);

  const featuredReview = testimonials[featured];
  const sideIndices = testimonials.map((_, i) => i).filter((i) => i !== featured).slice(0, 5);

  const go = useCallback(
    (dir: -1 | 1) => {
      setFeatured((i) => (i + dir + testimonials.length) % testimonials.length);
    },
    []
  );

  useEffect(() => {
    const t = setInterval(() => setFeatured((i) => (i + 1) % testimonials.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="testimonials"
      className="overflow-x-hidden border-t border-zinc-200 bg-white py-20 md:py-28"
    >
      <div className="container mx-auto max-w-full px-4 lg:px-8">
        <header className="mx-auto max-w-2xl text-center" ref={ref}>
          <p
            className={`text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 transition-all duration-700 ${
              inView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Reviews
          </p>
          <h2
            className={`mt-3 text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl transition-all delay-75 duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            What clients say
          </h2>
          <p
            className={`mt-4 text-sm leading-relaxed text-zinc-600 md:text-base transition-all delay-100 duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Real feedback from marketplaces and long-term engagements — unedited usernames and locations.
          </p>
        </header>

        <div
          className={`mx-auto mt-14 grid max-w-6xl gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-10 transition-all delay-150 duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          {/* Featured */}
          <div className="relative lg:col-span-7">
            <div className="absolute -left-1 top-8 hidden text-zinc-100 lg:block" aria-hidden>
              <Quote className="h-24 w-24" strokeWidth={1} />
            </div>
            <article className="relative flex h-full flex-col rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 shadow-sm md:p-10">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex gap-0.5" aria-label={`${featuredReview.rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 md:h-5 md:w-5 ${i < featuredReview.rating ? 'fill-zinc-900 text-zinc-900' : 'text-zinc-200'}`}
                    />
                  ))}
                </div>
                <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-500">
                  {featuredReview.date}
                </span>
              </div>
              <blockquote className="flex-1 text-lg font-medium leading-relaxed text-zinc-900 md:text-xl">
                “{featuredReview.comment}”
              </blockquote>
              <footer className="mt-8 flex items-center gap-4 border-t border-zinc-200 pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-sm font-bold text-white">
                  {featuredReview.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <cite className="not-italic text-sm font-semibold text-zinc-950">{featuredReview.name}</cite>
                  <div className="mt-1 flex items-center gap-2">
                    <Image
                      src={flagSrc(featuredReview.countryCode)}
                      alt=""
                      width={20}
                      height={14}
                      className="h-3.5 w-5 rounded-sm object-cover ring-1 ring-zinc-200"
                      unoptimized
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <span className="text-xs text-zinc-500">{featuredReview.country}</span>
                  </div>
                </div>
              </footer>

              <div className="mt-6 flex items-center justify-between gap-3 border-t border-zinc-200/80 pt-6">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-800 transition hover:border-zinc-900 hover:bg-zinc-950 hover:text-white"
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
                        i === featured ? 'w-8 bg-[#F46530]' : 'w-1.5 bg-zinc-300 hover:bg-zinc-400'
                      }`}
                      aria-label={`Show review ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-800 transition hover:border-zinc-900 hover:bg-zinc-950 hover:text-white"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </article>
          </div>

          {/* Side list */}
          <div className="flex flex-col gap-3 lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">More reviews</p>
            <ul className="flex flex-col gap-2">
              {sideIndices.map((idx) => {
                const t = testimonials[idx];
                return (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => setFeatured(idx)}
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-left text-zinc-700 transition hover:border-zinc-900 hover:bg-zinc-50"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="truncate text-sm font-semibold text-zinc-950">{t.name}</span>
                        <span className="flex shrink-0 gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < t.rating ? 'fill-zinc-900 text-zinc-900' : 'text-zinc-200'
                              }`}
                            />
                          ))}
                        </span>
                      </div>
                      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-zinc-500">{t.comment}</p>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-4">
          {[
            { v: '70+', l: 'Client relationships' },
            { v: '5.0', l: 'Typical rating' },
            { v: '10+', l: 'Countries' },
            { v: projectsDeliveredCountDisplay, l: 'Projects delivered' },
          ].map((s) => (
            <div key={s.l} className="bg-white px-4 py-6 text-center md:py-8">
              <p className="text-2xl font-bold tabular-nums text-zinc-950 md:text-3xl">{s.v}</p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-zinc-500">{s.l}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-xl text-center">
          <a
            href={companyInfo.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#F46530] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#e85e2d]"
          >
            <Calendar className="h-4 w-4" aria-hidden />
            Discuss your project
          </a>
        </div>
      </div>
    </section>
  );
}
