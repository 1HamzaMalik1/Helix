'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ChevronRight, BookOpen, Building2, FileText, Users, Workflow } from 'lucide-react';
import { companyInfo, siteUrl } from '@/lib/constants';
import { getNavServiceGroups } from '@/lib/site-nav';

const calendlyUrl = companyInfo.calendlyUrl;

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>('services');
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navGroups = getNavServiceGroups();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setCompanyOpen(false);
    setResourcesOpen(false);
  }, [pathname]);

  const clearClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleCloseMega = () => {
    clearClose();
    closeTimer.current = setTimeout(() => setServicesOpen(false), 160);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  const hashHref = (id: string) => (pathname === '/' ? `#${id}` : `/#${id}`);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-black/5 bg-white/95 py-2 shadow-sm backdrop-blur-md' : 'border-b border-transparent bg-white py-3 md:py-4'
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between gap-4 px-4 lg:px-8" aria-label="Main">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="/logo.svg"
              alt={`${companyInfo.name} logo`}
              width={168}
              height={48}
              className="h-11 w-auto md:h-12"
              priority
              fetchPriority="high"
              sizes="168px"
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <div
              className="relative"
              onMouseEnter={() => {
                clearClose();
                setServicesOpen(true);
                setCompanyOpen(false);
                setResourcesOpen(false);
              }}
              onMouseLeave={scheduleCloseMega}
            >
              <button
                type="button"
                className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  servicesOpen ? 'text-[#F46530]' : 'text-[#2A2E30] hover:bg-black/[0.04]'
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div
                  className="absolute left-1/2 top-full z-50 w-[min(100vw-2rem,56rem)] -translate-x-1/2 pt-2"
                  onMouseEnter={clearClose}
                  onMouseLeave={scheduleCloseMega}
                >
                  <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-xl">
                    <div className="grid gap-6 sm:grid-cols-3">
                      {navGroups.map((group) => (
                        <div key={group.title}>
                          <p className="text-xs font-bold uppercase tracking-wider text-[#2A2E30]/45">
                            {group.title}
                          </p>
                          <p className="mt-1 text-xs text-[#2A2E30]/55 leading-relaxed">{group.description}</p>
                          <ul className="mt-4 space-y-1">
                            {group.items.map((item) => (
                              <li key={item.slug}>
                                <Link
                                  href={`/services/${item.slug}`}
                                  className="block rounded-md py-1.5 text-sm font-medium text-[#2A2E30] transition hover:bg-[#F46530]/8 hover:text-[#F46530]"
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-black/6 pt-5">
                      <Link
                        href="/services"
                        className="inline-flex items-center gap-1 text-sm font-bold text-[#F46530] hover:underline"
                      >
                        View all services
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => scrollTo('services')}
                        className="text-sm font-semibold text-[#2A2E30]/60 hover:text-[#2A2E30]"
                      >
                        On-page overview ↓
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                pathname.startsWith('/blog') ? 'text-[#F46530]' : 'text-[#2A2E30] hover:bg-black/[0.04]'
              }`}
            >
              Insights
            </Link>

            <div
              className="relative"
              onMouseEnter={() => {
                setCompanyOpen(true);
                setServicesOpen(false);
                setResourcesOpen(false);
                clearClose();
              }}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  companyOpen ? 'text-[#F46530]' : 'text-[#2A2E30] hover:bg-black/[0.04]'
                }`}
                aria-expanded={companyOpen}
              >
                Company
                <ChevronDown className={`h-4 w-4 transition-transform ${companyOpen ? 'rotate-180' : ''}`} />
              </button>
              {companyOpen && (
                <div className="absolute left-0 top-full z-50 min-w-[14rem] pt-2">
                  <div className="rounded-xl border border-black/8 bg-white py-2 shadow-xl">
                    <Link
                      href="/team"
                      className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#2A2E30] hover:bg-black/[0.04]"
                    >
                      <Users className="h-4 w-4 text-[#F46530]" />
                      Team & story
                    </Link>
                    <Link
                      href={hashHref('process')}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#2A2E30] hover:bg-black/[0.04]"
                    >
                      <Workflow className="h-4 w-4 text-[#F46530]" />
                      How we work
                    </Link>
                    <Link
                      href="/privacy-policy"
                      className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#2A2E30] hover:bg-black/[0.04]"
                    >
                      <Building2 className="h-4 w-4 text-[#F46530]" />
                      Privacy policy
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => {
                setResourcesOpen(true);
                setServicesOpen(false);
                setCompanyOpen(false);
                clearClose();
              }}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  resourcesOpen ? 'text-[#F46530]' : 'text-[#2A2E30] hover:bg-black/[0.04]'
                }`}
                aria-expanded={resourcesOpen}
              >
                Resources
                <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {resourcesOpen && (
                <div className="absolute right-0 top-full z-50 min-w-[12rem] pt-2">
                  <div className="rounded-xl border border-black/8 bg-white py-2 shadow-xl">
                    <Link
                      href="/blog"
                      className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#2A2E30] hover:bg-black/[0.04]"
                    >
                      <BookOpen className="h-4 w-4 text-[#F46530]" />
                      Blog
                    </Link>
                    <a
                      href={`${siteUrl}/llms.txt`}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#2A2E30] hover:bg-black/[0.04]"
                    >
                      <FileText className="h-4 w-4 text-[#F46530]" />
                      LLMs.txt
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1.5 rounded-xl bg-[#F46530] px-4 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-[#e35a28]"
            >
              Get in touch
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-black/10 text-[#2A2E30] lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition ${
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          className="absolute inset-0 bg-[#0f1419]/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-black/6 px-4 py-4">
            <span className="text-sm font-bold text-[#2A2E30]">Menu</span>
            <button
              type="button"
              className="rounded-lg p-2 text-[#2A2E30] hover:bg-black/[0.05]"
              onClick={() => setMobileOpen(false)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <button
              type="button"
              className="flex w-full items-center justify-between border-b border-black/6 py-4 text-left font-semibold text-[#2A2E30]"
              onClick={() => setMobileAccordion((v) => (v === 'services' ? null : 'services'))}
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileAccordion === 'services' ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileAccordion === 'services' && (
              <div className="border-b border-black/6 pb-4 pt-2">
                {navGroups.map((group) => (
                  <div key={group.title} className="mb-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#2A2E30]/45">{group.title}</p>
                    <ul className="mt-2 space-y-1">
                      {group.items.map((item) => (
                        <li key={item.slug}>
                          <Link
                            href={`/services/${item.slug}`}
                            className="block py-1.5 text-sm text-[#2A2E30]"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link
                  href="/services"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-[#F46530]"
                  onClick={() => setMobileOpen(false)}
                >
                  View all services <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            )}

            <Link
              href="/blog"
              className="flex items-center justify-between border-b border-black/6 py-4 font-semibold text-[#2A2E30]"
              onClick={() => setMobileOpen(false)}
            >
              Insights
              <ChevronRight className="h-4 w-4 text-[#2A2E30]/40" />
            </Link>

            <button
              type="button"
              className="flex w-full items-center justify-between border-b border-black/6 py-4 text-left font-semibold text-[#2A2E30]"
              onClick={() => setMobileAccordion((v) => (v === 'company' ? null : 'company'))}
            >
              Company
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileAccordion === 'company' ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileAccordion === 'company' && (
              <ul className="border-b border-black/6 pb-4">
                <li>
                  <Link href="/team" className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>
                    Team & story
                  </Link>
                </li>
                <li>
                  <Link href={hashHref('process')} className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>
                    How we work
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>
                    Privacy policy
                  </Link>
                </li>
              </ul>
            )}

            <a
              href={`${siteUrl}/llms.txt`}
              className="flex items-center justify-between border-b border-black/6 py-4 text-sm font-semibold text-[#2A2E30]"
              onClick={() => setMobileOpen(false)}
            >
              LLMs.txt
              <ChevronRight className="h-4 w-4 text-[#2A2E30]/40" />
            </a>

            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="mt-4 w-full rounded-xl bg-[#F46530] py-3.5 text-center text-sm font-bold text-white"
            >
              Get in touch
            </button>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block w-full rounded-xl border border-black/10 py-3.5 text-center text-sm font-bold text-[#2A2E30]"
            >
              Book a call
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
