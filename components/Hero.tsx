'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { ChevronRight, Sparkles, Code2, Zap, ArrowUpRight } from 'lucide-react';
import { companyInfo, technologies, homePageStats } from '@/lib/constants';

const unityCode = [
  'using UnityEngine;',
  '',
  'public class GameController : MonoBehaviour',
  '{',
  '    void Start()',
  '    {',
  '        Debug.Log("Game Initialized");',
  '    }',
  '',
  '    void Update()',
  '    {',
  '        transform.Rotate(Vector3.up * Time.deltaTime * 30f);',
  '    }',
  '}',
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });
  const [codeDone, setCodeDone] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    setVisibleLines(0);
    setCodeDone(false);
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= unityCode.length) {
          clearInterval(interval);
          setCodeDone(true);
          return prev;
        }
        return prev + 1;
      });
    }, 240);
    return () => clearInterval(interval);
  }, [mounted]);

  const onPointerMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPointer({
      x: (e.clientX - r.left) / r.width,
      y: (e.clientY - r.top) / r.height,
    });
  }, []);

  const onPointerLeave = useCallback(() => {
    setPointer({ x: 0.5, y: 0.5 });
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const techPills = technologies.slice(0, 7);
  const driftX = (pointer.x - 0.5) * 28;
  const driftY = (pointer.y - 0.5) * 22;

  return (
    <section
      ref={sectionRef}
      onMouseMove={onPointerMove}
      onMouseLeave={onPointerLeave}
      className="relative flex min-h-[min(100dvh,920px)] items-center overflow-hidden bg-[#030305] pt-24 pb-20 md:pt-28 md:pb-28"
    >
      {/* Ambient layers */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            background: `
              radial-gradient(ellipse 85% 50% at 50% -15%, rgba(255,255,255,0.06), transparent 50%),
              radial-gradient(ellipse 60% 45% at 100% 35%, rgba(244, 101, 48, 0.06), transparent 45%),
              radial-gradient(ellipse 55% 40% at 0% 75%, rgba(24, 24, 27, 0.5), transparent 50%)
            `,
            transform: `translate(${driftX * 0.4}px, ${driftY * 0.35}px)`,
            transition: 'transform 0.35s ease-out',
          }}
        />
        <div
          className="absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-white/[0.04] blur-[100px] animate-float"
          style={{
            transform: `translate(${driftX}px, ${driftY}px)`,
            transition: 'transform 0.45s ease-out',
          }}
        />
        <div
          className="absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-zinc-800/30 blur-[90px] animate-float-delayed"
          style={{
            transform: `translate(${-driftX * 0.8}px, ${-driftY * 0.6}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 45%, black 20%, transparent 75%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030305]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-full px-4 lg:px-8">
        <div
          className={`grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-20 transition-all duration-1000 ease-out ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="relative">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 backdrop-blur-md"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              <Sparkles className="h-3.5 w-3.5 text-zinc-400" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75">
                Remote-first · Global clients
              </span>
            </div>

            <h1 className="max-w-[16ch] text-4xl font-bold leading-snug tracking-tight text-white sm:max-w-none sm:text-5xl lg:text-[3.35rem] xl:text-6xl">
              <span className="inline-block w-full max-w-full bg-gradient-to-br from-white via-white to-zinc-400 bg-clip-text pb-[0.18em] text-transparent [-webkit-text-fill-color:transparent] [-webkit-background-clip:text]">
                Engineering
              </span>
              <span className="mt-1.5 block text-white/95">
                the future,{' '}
                <span className="text-[#F46530]">together.</span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              <span className="text-white/90">{companyInfo.name}</span> ships{' '}
              <span className="font-medium text-white/90">games, web platforms, and AI</span> with the same rigor
              whether you are a startup or an established product team.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={scrollToContact}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#F46530] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/25 transition hover:bg-[#e85e2d]"
              >
                Let&apos;s talk
                <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
              </button>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-transparent px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/[0.06]"
              >
                Explore services
                <ArrowUpRight className="h-4 w-4 opacity-80" aria-hidden />
              </Link>
              <a
                href={companyInfo.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-zinc-300 underline decoration-white/25 underline-offset-4 transition hover:text-white hover:decoration-[#F46530]"
              >
                Book a call
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-8">
              {homePageStats.map((s) => (
                <div
                  key={s.line1}
                  className="min-w-[100px] flex-1 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 backdrop-blur-sm sm:min-w-0 sm:flex-none"
                >
                  <p className="text-2xl font-bold tabular-nums text-white">{s.value}</p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/40">
                    {s.line1} <span className="text-white/25">·</span> {s.line2}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">Stack &amp; tools</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {techPills.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-white/25 hover:text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all delay-200 duration-1000 ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div
              className={`absolute -inset-3 rounded-3xl bg-gradient-to-br from-white/[0.06] via-transparent to-zinc-800/20 blur-2xl transition-opacity duration-1000 ${
                codeDone ? 'opacity-90' : 'opacity-50'
              }`}
              aria-hidden
            />
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c12] shadow-2xl shadow-black/60 ring-1 ring-white/[0.06]">
                <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] bg-black/30 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    </span>
                    <span className="rounded bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-400">
                      Unity C#
                    </span>
                    <span className="text-xs text-zinc-500">GameController.cs</span>
                  </div>
                  <span className="hidden text-[10px] font-mono text-zinc-600 sm:inline">Live preview</span>
                </div>
                <div className="relative min-h-[300px] overflow-hidden p-5 font-mono text-[13px] leading-relaxed text-zinc-200 sm:min-h-[320px] sm:p-6 sm:text-sm">
                  <div
                    className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-transparent via-white/[0.08] to-transparent opacity-35 animate-scan"
                    aria-hidden
                  />
                  {unityCode.slice(0, visibleLines).map((line, index) => (
                    <div
                      key={index}
                      className={`relative z-10 flex gap-3 ${index === visibleLines - 1 ? '-mx-1 rounded bg-white/[0.06] px-1' : ''}`}
                    >
                      <span className="w-7 shrink-0 select-none text-right text-zinc-600 tabular-nums">{index + 1}</span>
                      <span className="min-w-0 break-all">
                        {highlightCSharp(line)}
                        {index === visibleLines - 1 && visibleLines < unityCode.length && (
                          <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-[#F46530]" />
                        )}
                      </span>
                    </div>
                  ))}
                  <div
                    className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-b from-transparent via-transparent to-[#0a0c12]"
                    aria-hidden
                  />
                </div>
              </div>
              <div className="absolute -right-2 -top-2 flex h-14 w-14 items-center justify-center rounded-xl border border-white/15 bg-zinc-950 text-white shadow-xl ring-2 ring-[#030305]">
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[#F46530]" aria-hidden />
                <Zap className="relative h-6 w-6 text-zinc-100" aria-hidden />
              </div>
              <div className="absolute -bottom-2 -left-2 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-zinc-900 text-white shadow-xl ring-2 ring-[#030305]">
                <Code2 className="h-5 w-5" aria-hidden />
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-zinc-500">
              Representative snippet — your architecture, your conventions.
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </section>
  );
}

function highlightCSharp(line: string) {
  const parts = line
    .replace(/using/g, '§using§')
    .replace(/public|class|void/g, '§$&§')
    .replace(/MonoBehaviour/g, '¤MonoBehaviour¤')
    .replace(/Debug\.Log/g, '¤Debug.Log¤')
    .replace(/Start|Update/g, '¤$&¤')
    .replace(/"(.*?)"/g, '¢"$1"¢')
    .split(/(§.*?§|¤.*?¤|¢.*?¢)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('§')) return <span key={i} className="text-sky-400">{part.slice(1, -1)}</span>;
        if (part.startsWith('¤')) return <span key={i} className="text-emerald-400">{part.slice(1, -1)}</span>;
        if (part.startsWith('¢')) return <span key={i} className="text-amber-300">{part.slice(1, -1)}</span>;
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
