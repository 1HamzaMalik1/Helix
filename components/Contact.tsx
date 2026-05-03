'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Shield, Users, AlertCircle, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '@/lib/constants';

const whyChooseUs = [
  { icon: Clock, title: '24–48h response', description: 'We reply to serious inquiries quickly.' },
  { icon: Shield, title: 'NDA on request', description: 'We treat your roadmap and IP as confidential.' },
  { icon: Users, title: 'Direct access', description: 'You talk to engineers, not layers of account staff.' },
] as const;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      if (data.mailtoLink) {
        window.location.href = data.mailtoLink;
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setTimeout(() => {
            setFormData({
              name: '',
              email: '',
              company: '',
              service: '',
              budget: '',
              message: '',
            });
            setIsSubmitted(false);
          }, 5000);
        }, 1000);
      } else {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            company: '',
            service: '',
            budget: '',
            message: '',
          });
          setIsSubmitted(false);
        }, 5000);
      }
    } catch {
      setIsSubmitting(false);
      const adminEmail = 'hamzahakim12235@gmail.com';
      const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `
Client Information:
Name: ${formData.name}
Email: ${formData.email}
${formData.company ? `Company: ${formData.company}\n` : ''}
Service Required: ${formData.service}
${formData.budget ? `Budget: ${formData.budget}\n` : ''}

Project Details:
${formData.message}
      `.trim()
      );

      const mailtoLink = `mailto:${adminEmail}?subject=${subject}&body=${body}`;
      setError('Unable to send automatically. Opening your email client...');

      setTimeout(() => {
        window.location.href = mailtoLink;
        setError('');
        setIsSubmitted(true);
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            company: '',
            service: '',
            budget: '',
            message: '',
          });
          setIsSubmitted(false);
        }, 3000);
      }, 2000);
    }
  };

  const inputClass =
    'w-full rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 transition focus:border-[#F46530] focus:outline-none focus:ring-2 focus:ring-[#F46530]/20';

  return (
    <section id="contact" className="overflow-x-hidden border-t border-zinc-200 bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-full px-4 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Contact</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">Start a project</h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
              Share context and constraints — we respond with a clear read on fit, approach, and next steps. Prefer
              live conversation? Book a call anytime.
            </p>
          </header>

          <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
            {/* Sidebar */}
            <aside className="flex flex-col gap-4 lg:col-span-4">
              <a
                href={`mailto:${companyInfo.email}`}
                className="group flex gap-4 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-5 transition hover:border-zinc-900"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-white transition group-hover:bg-[#F46530]">
                  <Mail className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Email</p>
                  <p className="mt-1 truncate text-sm font-semibold text-zinc-950">{companyInfo.email}</p>
                  <p className="mt-1 text-xs text-zinc-500">Best for briefs &amp; attachments</p>
                </div>
                <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-zinc-300 transition group-hover:text-zinc-900" aria-hidden />
              </a>

              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                className="group flex gap-4 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-5 transition hover:border-zinc-900"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-white transition group-hover:bg-[#F46530]">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Phone</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-950">{companyInfo.phone}</p>
                  <p className="mt-1 text-xs text-zinc-500">Lahore (PKT)</p>
                </div>
              </a>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-950 text-white">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">Studio</p>
                <p className="mt-1 text-sm font-medium leading-relaxed text-zinc-800">{companyInfo.location}</p>
                <p className="mt-2 text-xs text-zinc-500">
                  {companyInfo.addressLine}, {companyInfo.addressLocality}
                </p>
              </div>

              <a
                href={companyInfo.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-zinc-950 bg-zinc-950 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-zinc-950"
              >
                Open calendar
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </aside>

            {/* Form */}
            <div className="lg:col-span-8">
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                <div className="border-b border-zinc-100 bg-zinc-50/50 px-6 py-5 md:px-8">
                  <h3 className="text-lg font-bold text-zinc-950">Project inquiry</h3>
                  <p className="mt-1 text-sm text-zinc-600">We typically reply within one to two business days.</p>
                </div>

                <div className="p-6 md:p-8">
                  {isSubmitted ? (
                    <div className="py-10 text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                        <CheckCircle className="h-8 w-8" aria-hidden />
                      </div>
                      <h3 className="mt-6 text-lg font-bold text-zinc-950">Thank you</h3>
                      <p className="mx-auto mt-2 max-w-md text-sm text-zinc-600">
                        If your email client opened, send the draft to complete your message. We will follow up
                        shortly.
                      </p>
                      <button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="mt-8 text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-[#F46530]"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {error ? (
                        <div className="flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden />
                          <p>{error}</p>
                        </div>
                      ) : null}

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="contact-name" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-zinc-600">
                            Full name <span className="text-[#F46530]">*</span>
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={inputClass}
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-email" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-zinc-600">
                            Work email <span className="text-[#F46530]">*</span>
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={inputClass}
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="contact-company" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-zinc-600">
                            Company
                          </label>
                          <input
                            id="contact-company"
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="Optional"
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-budget" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-zinc-600">
                            Budget range
                          </label>
                          <select
                            id="contact-budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className={inputClass}
                          >
                            <option value="">Select range</option>
                            <option value="<5k">Under $5,000</option>
                            <option value="5k-10k">$5,000 – $10,000</option>
                            <option value="10k-25k">$10,000 – $25,000</option>
                            <option value="25k-50k">$25,000 – $50,000</option>
                            <option value="50k+">$50,000+</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="contact-service" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-zinc-600">
                          Service <span className="text-[#F46530]">*</span>
                        </label>
                        <select
                          id="contact-service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className={inputClass}
                        >
                          <option value="">Select a service</option>
                          <option value="Unity Game Development">Unity game development</option>
                          <option value="HTML5/WebGL Games">HTML5 / WebGL games</option>
                          <option value="AI in Games">AI in games</option>
                          <option value="Playable Ads">Playable ads</option>
                          <option value="Mobile App Development">Mobile app development</option>
                          <option value="Full-Stack Web Development">Full-stack web development</option>
                          <option value="Game Porting Services">Game porting</option>
                          <option value="Technical Consulting">Technical consulting</option>
                          <option value="Other Services">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="contact-message" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-zinc-600">
                          Project details <span className="text-[#F46530]">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className={`${inputClass} resize-none`}
                          placeholder="Goals, timeline, links, constraints…"
                        />
                      </div>

                      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                        <div className="flex gap-3">
                          <Shield className="mt-0.5 h-5 w-5 shrink-0 text-zinc-600" aria-hidden />
                          <p className="text-xs leading-relaxed text-zinc-600">
                            We do not sell your information. NDA available on request before sharing sensitive material.
                          </p>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F46530] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#e85e2d] disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            Sending…
                          </>
                        ) : (
                          <>
                            Send inquiry
                            <Send className="h-4 w-4" aria-hidden />
                          </>
                        )}
                      </button>

                      <p className="text-center text-[11px] text-zinc-500">
                        By submitting, you agree we may contact you about this inquiry. Unsubscribe anytime.
                      </p>
                    </form>
                  )}
                </div>
              </div>

              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {whyChooseUs.map(({ icon: Icon, title, description }) => (
                  <li
                    key={title}
                    className="flex gap-3 rounded-xl border border-zinc-100 bg-zinc-50/50 px-4 py-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-zinc-800 ring-1 ring-zinc-200">
                      <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-zinc-950">{title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-zinc-600">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
