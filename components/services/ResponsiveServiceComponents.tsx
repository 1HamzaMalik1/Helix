import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  Calendar,
  MessageSquare,
  Phone,
} from "lucide-react";
import { companyInfo } from "@/lib/constants";

/**
 * Mobile-optimized sticky call-to-action
 * Appears at bottom on mobile, top on desktop
 * Dismissible with local storage preference
 */
export function MobileStickyCTA({
  serviceName,
  isDismissed = false,
}: {
  serviceName: string;
  isDismissed?: boolean;
}) {
  if (isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-zinc-200 shadow-lg z-40 md:hidden">
      <div className="container mx-auto px-4 py-3 flex gap-2">
        <a
          href={companyInfo.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#F46530] px-4 py-3 text-sm font-bold text-white hover:bg-[#e85e2d] transition-colors"
        >
          <Calendar className="h-4 w-4" />
          Book Call
        </a>
        <Link
          href="/#contact"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-[#F46530] bg-white px-4 py-3 text-sm font-bold text-[#F46530] hover:bg-[#F46530]/5 transition-colors"
        >
          <MessageSquare className="h-4 w-4" />
          Message
        </Link>
      </div>
    </div>
  );
}

/**
 * Expandable comparison table - mobile optimized
 * Switches from table layout to card layout on mobile
 */
export function ResponsiveComparisonTable({
  rows,
}: {
  rows: {
    feature: string;
    you: string;
    agencyA: string;
    agencyB?: string;
  }[];
}) {
  return (
    <div className="space-y-3 md:space-y-0">
      {/* Mobile: Card Layout */}
      <div className="md:hidden space-y-3">
        {rows.map((row, idx) => (
          <details
            key={idx}
            className="group rounded-lg border border-zinc-200 bg-white p-4"
          >
            <summary className="flex cursor-pointer items-center justify-between font-semibold text-zinc-950">
              <span className="text-sm">{row.feature}</span>
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            </summary>
            <div className="mt-4 space-y-3 pt-4 border-t border-zinc-200">
              <div>
                <p className="text-xs font-bold text-[#F46530] uppercase tracking-wide mb-1">
                  HelixCore
                </p>
                <p className="text-sm text-zinc-600">{row.you}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-wide mb-1">
                  Typical Agency
                </p>
                <p className="text-sm text-zinc-600">{row.agencyA}</p>
              </div>
              {row.agencyB && (
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-wide mb-1">
                    Other Option
                  </p>
                  <p className="text-sm text-zinc-600">{row.agencyB}</p>
                </div>
              )}
            </div>
          </details>
        ))}
      </div>

      {/* Desktop: Table Layout */}
      <div className="hidden md:block overflow-x-auto rounded-lg border border-zinc-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50">
              <th className="px-6 py-4 text-left font-bold text-zinc-950">
                Feature
              </th>
              <th className="px-6 py-4 text-left font-bold text-[#F46530]">
                HelixCore
              </th>
              <th className="px-6 py-4 text-left font-bold text-zinc-700">
                Typical Agency
              </th>
              {rows.some((r) => r.agencyB) && (
                <th className="px-6 py-4 text-left font-bold text-zinc-700">
                  Alternative
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className="border-b border-zinc-200 hover:bg-zinc-50 transition-colors"
              >
                <td className="px-6 py-4 font-medium text-zinc-950">
                  {row.feature}
                </td>
                <td className="px-6 py-4 text-zinc-600">{row.you}</td>
                <td className="px-6 py-4 text-zinc-500">{row.agencyA}</td>
                {row.agencyB && (
                  <td className="px-6 py-4 text-zinc-500">{row.agencyB}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/**
 * Process timeline - adaptive for mobile/desktop
 * Horizontal on desktop, vertical on mobile
 */
export function AdaptiveProcessTimeline({
  steps,
}: {
  steps: { title: string; description: string }[];
}) {
  return (
    <>
      {/* Desktop horizontal timeline */}
      <div className="hidden md:block">
        <div className="grid gap-4 relative" style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}>
          {/* Connection line */}
          <div className="absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-[#F46530]/40 via-[#F46530]/20 to-zinc-300 -z-10" />

          {steps.map((step, idx) => (
            <div key={step.title} className="text-center">
              <div className="relative mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border-4 border-[#F46530] text-[#F46530] font-bold text-lg mx-auto shadow-sm">
                  {idx + 1}
                </div>
              </div>
              <h3 className="font-bold text-zinc-950 text-base">{step.title}</h3>
              <p className="text-xs text-zinc-600 mt-2 leading-snug">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile vertical timeline */}
      <div className="md:hidden space-y-6">
        {steps.map((step, idx) => (
          <div key={step.title} className="relative pl-12">
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#F46530] text-white font-bold text-sm">
              {idx + 1}
            </div>
            {idx < steps.length - 1 && (
              <div className="absolute left-5 top-10 w-0.5 h-12 bg-gradient-to-b from-[#F46530]/40 to-transparent" />
            )}
            <h3 className="font-bold text-zinc-950">{step.title}</h3>
            <p className="text-sm text-zinc-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

/**
 * Collapsible sections with better mobile support
 */
export function ExpandableSection({
  title,
  children,
  icon: Icon,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  icon?: any;
  defaultOpen?: boolean;
}) {
  return (
    <details
      open={defaultOpen}
      className="group rounded-lg border border-zinc-200 bg-white p-6 hover:shadow-md transition-all"
    >
      <summary className="flex cursor-pointer items-center justify-between font-semibold text-zinc-950">
        <div className="flex items-center gap-3">
          {Icon && <Icon className="h-5 w-5 text-[#F46530] shrink-0" />}
          <span className="text-base md:text-lg">{title}</span>
        </div>
        <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
      </summary>
      <div className="mt-4 text-sm text-zinc-600 leading-relaxed">
        {children}
      </div>
    </details>
  );
}

/**
 * Multi-row stat grid - responsive columns
 */
export function ResponsiveStatGrid({
  stats,
}: {
  stats: { label: string; value: string; description?: string }[];
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="group rounded-lg border border-zinc-200 bg-white p-4 md:p-6 text-center hover:shadow-md hover:border-[#F46530]/40 transition-all"
        >
          <p className="text-2xl md:text-4xl font-bold text-[#F46530]">
            {stat.value}
          </p>
          <p className="text-xs md:text-sm text-zinc-600 mt-2 font-semibold uppercase tracking-wide">
            {stat.label}
          </p>
          {stat.description && (
            <p className="text-xs text-zinc-500 mt-2 hidden md:block">
              {stat.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

/**
 * Case study cards with better mobile layout
 */
export function CaseStudyCard({
  study,
}: {
  study: {
    title: string;
    client: string;
    challenge: string;
    solution: string;
    result: string;
    metric: string;
  };
}) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 hover:shadow-lg transition-all">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-6">
        <div>
          <h3 className="font-bold text-lg text-zinc-950">{study.title}</h3>
          <p className="text-sm text-[#F46530] font-semibold mt-1">
            {study.client}
          </p>
        </div>
      </div>

      <div className="space-y-4 mb-6 border-t border-zinc-200 pt-6">
        <div>
          <p className="text-xs font-bold uppercase text-zinc-500 tracking-wide">
            Challenge
          </p>
          <p className="text-sm text-zinc-700 mt-2">{study.challenge}</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase text-zinc-500 tracking-wide">
            Our Solution
          </p>
          <p className="text-sm text-zinc-700 mt-2">{study.solution}</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase text-zinc-500 tracking-wide">
            Result
          </p>
          <p className="text-sm text-zinc-700 mt-2">{study.result}</p>
        </div>
      </div>

      <div className="pt-6 border-t border-zinc-200">
        <p className="text-2xl md:text-3xl font-bold text-[#F46530]">
          {study.metric}
        </p>
      </div>
    </div>
  );
}

/**
 * CTA button group - responsive stack
 */
export function CTAButtonGroup({
  primaryText = "Book a Call",
  primaryLink,
  secondaryText = "Send Email",
  secondaryLink = "/#contact",
  size = "base",
}: {
  primaryText?: string;
  primaryLink: string;
  secondaryText?: string;
  secondaryLink?: string;
  size?: "sm" | "base" | "lg";
}) {
  const sizeClasses = {
    sm: "px-6 py-2 text-sm",
    base: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
      <a
        href={primaryLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-lg bg-[#F46530] text-white font-bold shadow-lg shadow-[#F46530]/25 hover:bg-[#e85e2d] hover:shadow-[#F46530]/40 transition-all duration-200 ${sizeClasses[size]}`}
      >
        <Calendar className="h-5 w-5" />
        {primaryText}
      </a>
      <Link
        href={secondaryLink || "/#contact"}
        className={`inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white text-zinc-950 font-bold hover:bg-zinc-50 hover:border-zinc-400 transition-all duration-200 ${sizeClasses[size]}`}
      >
        {secondaryText}
        <ArrowRight className="h-5 w-5" />
      </Link>
    </div>
  );
}

/**
 * Value proposition list with icons
 */
export function ValuePropositionList({
  items,
  columns = 3,
}: {
  items: string[];
  columns?: 1 | 2 | 3;
}) {
  const colClass = {
    1: "grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
  };

  return (
    <div className={`grid ${colClass[columns]} gap-4 md:gap-6`}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex gap-3 rounded-lg border border-zinc-200 bg-white p-4 md:p-6"
        >
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#F46530]/20 text-[#F46530] mt-0.5 font-bold text-sm">
            ✓
          </div>
          <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}
