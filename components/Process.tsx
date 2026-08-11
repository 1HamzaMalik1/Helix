'use client';

import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  Search,
  Palette,
  Code,
  TestTube2,
  Rocket,
  Settings,
  Calendar,
  Clock,
  ArrowRight,
  Check,
} from 'lucide-react';
import { companyInfo } from '@/lib/constants';

const processSteps = [
  {
    id: 1,
    icon: Search,
    title: 'Discovery',
    summary: 'Scope, constraints, and technical approach aligned to your goals.',
    duration: '1–2 weeks',
    deliverables: ['Scope & milestones', 'Architecture notes', 'Risk register'],
  },
  {
    id: 2,
    icon: Palette,
    title: 'Design',
    summary: 'UX flows and UI systems aligned to your brand and users.',
    duration: '2–3 weeks',
    deliverables: ['Wireframes', 'UI kit', 'Prototype'],
  },
  {
    id: 3,
    icon: Code,
    title: 'Development',
    summary: 'Iterative builds with code reviews, CI, and transparent progress.',
    duration: '4–12 weeks',
    deliverables: ['Working increments', 'Repo access', 'Release notes'],
  },
  {
    id: 4,
    icon: TestTube2,
    title: 'Quality',
    summary: 'Functional, performance, and security validation before release.',
    duration: '1–2 weeks',
    deliverables: ['Test plan', 'Defect triage', 'Sign-off'],
  },
  {
    id: 5,
    icon: Rocket,
    title: 'Launch',
    summary: 'Production deploy, monitoring setup, and handover documentation.',
    duration: '~1 week',
    deliverables: ['Go-live checklist', 'Runbooks', 'Training'],
  },
  {
    id: 6,
    icon: Settings,
    title: 'Evolve',
    summary: 'Support, tuning, and roadmap planning for the next iteration.',
    duration: 'Ongoing',
    deliverables: ['SLAs', 'Backlog grooming', 'Metrics review'],
  },
] as const;

const principles = [
  { title: 'Clear ownership', body: 'One lead engineer accountable from kickoff to delivery.' },
  { title: 'Documented decisions', body: 'Trade-offs captured so your team can maintain the system.' },
  { title: 'Predictable rhythm', body: 'Weekly demos and written updates — no black box.' },
  { title: 'Production mindset', body: 'Observability, rollback paths, and operational readiness.' },
] as const;

export default function Process() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const [active, setActive] = useState(0);
  const step = processSteps[active];
  const StepIcon = step.icon;

  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-zinc-200 bg-gradient-to-b from-zinc-50 to-white py-20 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(244,101,48,0.05),transparent_55%)]" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <header className="mx-auto max-w-2xl text-center" ref={ref}>
          <p
            className={`text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 transition-all duration-700 ${
              inView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Delivery
          </p>
          <h2
            className={`mt-3 text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl transition-all delay-75 duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            How we deliver
          </h2>
          <p
            className={`mt-4 text-sm text-zinc-600 md:text-base transition-all delay-100 duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            A proven six-phase model for AI, game, and web engagements.
          </p>
        </header>

        <div
          className={`mx-auto mt-12 max-w-5xl transition-all delay-100 duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="overflow-x-auto pb-2">
            <div className="flex min-w-max justify-center gap-2 px-2 md:min-w-0 md:flex-wrap md:px-0">
              {processSteps.map((s, i) => {
                const Icon = s.icon;
                const isActive = i === active;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                      isActive
                        ? 'bg-zinc-950 text-white shadow-lg shadow-zinc-950/15'
                        : 'border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-900'
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                    {s.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_12px_40px_-20px_rgba(0,0,0,0.15)]">
            <div className="border-b border-zinc-100 bg-zinc-50/80 px-6 py-4 md:px-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F46530]/10 text-[#F46530]">
                  <StepIcon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Phase {active + 1} of {processSteps.length}
                  </p>
                  <h3 className="text-lg font-bold text-zinc-950 md:text-xl">{step.title}</h3>
                </div>
              </div>
            </div>

            <div className="grid gap-8 p-6 md:grid-cols-[1fr_auto] md:p-8">
              <div>
                <p className="flex items-center gap-2 text-sm text-zinc-500">
                  <Clock className="h-4 w-4" aria-hidden />
                  Typical duration: {step.duration}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">{step.summary}</p>
              </div>
              <div className="md:w-56 md:border-l md:border-zinc-100 md:pl-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Deliverables</p>
                <ul className="mt-4 space-y-3">
                  {step.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-zinc-700">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                        <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <ul className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <li
              key={p.title}
              className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-zinc-300 hover:shadow-md"
            >
              <p className="text-sm font-bold text-zinc-950">{p.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-600">{p.body}</p>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-12 max-w-lg text-center">
          <a
            href={companyInfo.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#F46530] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#F46530]/20 transition hover:bg-[#e85e2d]"
          >
            <Calendar className="h-4 w-4" aria-hidden />
            Schedule consultation
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
