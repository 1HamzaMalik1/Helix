'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { companyInfo, siteUrl } from '@/lib/constants';
import { getNavServiceGroups } from '@/lib/site-nav';

type FooterLink = { label: string; href: string; external?: boolean };

const footerLinkRow: FooterLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Privacy', href: '/privacy-policy' },
  { label: 'LLMs.txt', href: `${siteUrl}/llms.txt`, external: true },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const groups = getNavServiceGroups();

  return (
    <footer className="relative overflow-x-hidden bg-[#0b0e12] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F46530]/40 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-footer.svg"
                alt={`${companyInfo.name} logo`}
                width={180}
                height={56}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {companyInfo.description}
            </p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/35">Find us elsewhere</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={companyInfo.linkedInCompany}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/70 transition hover:border-[#F46530]/50 hover:text-[#F46530]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/1HamzaMalik1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/70 transition hover:border-[#F46530]/50 hover:text-[#F46530]"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {groups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#F46530]">{group.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="text-sm text-white/70 transition hover:text-white inline-flex items-center gap-1 group"
                      >
                        {s.title}
                        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#F46530]">Studio</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-white/70">
                <li>
                  <Link href="/" className="transition hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="transition hover:text-white">
                    All services
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="transition hover:text-white">
                    Insights &amp; guides
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="transition hover:text-white">
                    Team & story
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="transition hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>

              <h3 className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-[#F46530]">Contact</h3>
              <ul className="mt-4 space-y-4 text-sm text-white/70">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#F46530]" />
                  <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition break-all">
                    {companyInfo.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#F46530]" />
                  <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="hover:text-white transition">
                    {companyInfo.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#F46530]" />
                  <span>
                    {companyInfo.addressLine}, {companyInfo.addressLocality}, {companyInfo.addressRegion}{' '}
                    {companyInfo.postalCode}, {companyInfo.addressCountry}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/45">
            © {year} {companyInfo.name}. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {footerLinkRow.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-white/55 hover:text-white transition"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-white/55 hover:text-white transition"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      </div>
    </footer>
  );
}
