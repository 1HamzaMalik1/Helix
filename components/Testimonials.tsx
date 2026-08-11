'use client';

import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import Image from 'next/image';
import { testimonials, companyInfo } from '@/lib/constants';

function flagSrc(code: string) {
  return `https://flagcdn.com/w40/${code.toLowerCase()}.png`;
}

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.06, triggerOnce: true });
  const [featured, setFeatured] = useState(0);

  const featuredReview = testimonials[featured];

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
      className="overflow-x-hidden border-t border-zinc-200 bg-white py-16 md:py-20"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <header className="mx-auto max-w-2xl text-center" ref={ref}>
          <p
            className={`text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 transition-all duration-700 ${
              inView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Client feedback
          </p>
          <h2
            className={`mt-2 text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl transition-all delay-75 duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Trusted by product teams worldwide
          </h2>
        </header>

        <div
          className={`mx-auto mt-10 max-w-3xl transition-all delay-150 duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <article className="rounded-lg border border-zinc-200 bg-white p-8 md:p-10">
            <div className="flex items-center justify-between gap-4 border-b border-zinc-100 pb-6">
              <div className="flex gap-0.5" aria-label={`${featuredReview.rating} out of 5 stars`}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < featuredReview.rating ? 'fill-zinc-800 text-zinc-800' : 'text-zinc-200'}`}
                  />
                ))}
              </div>
              <span className="text-xs font-medium text-zinc-500">{featuredReview.date}</span>
            </div>

            <blockquote className="mt-6 text-base leading-relaxed text-zinc-700 md:text-lg">
              &ldquo;{featuredReview.comment}&rdquo;
            </blockquote>

            <footer className="mt-8 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-zinc-100 text-sm font-semibold text-zinc-800">
                {featuredReview.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <cite className="not-italic text-sm font-semibold text-zinc-950">{featuredReview.name}</cite>
                <div className="mt-0.5 flex items-center gap-2">
                  <Image
                    src={flagSrc(featuredReview.countryCode)}
                    alt=""
                    width={20}
                    height={14}
                    className="h-3 w-4 rounded-sm object-cover ring-1 ring-zinc-200"
                    unoptimized
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <span className="text-xs text-zinc-500">{featuredReview.country}</span>
                </div>
              </div>
            </footer>

            <div className="mt-8 flex items-center justify-between border-t border-zinc-100 pt-6">
              <button
                type="button"
                onClick={() => go(-1)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-50"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setFeatured(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === featured ? 'w-6 bg-zinc-800' : 'w-1.5 bg-zinc-300 hover:bg-zinc-400'
                    }`}
                    aria-label={`Show review ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => go(1)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-50"
                aria-label="Next review"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </article>

          <div className="mt-8 text-center">
            <a
              href={companyInfo.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              <Calendar className="h-4 w-4" aria-hidden />
              Book a consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
