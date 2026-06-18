"use client";

import { useEffect, useState } from "react";
import { AlertCircle, CheckCircle, Send } from "lucide-react";

const SERVICE_OPTIONS = [
  "Unity Game Development",
  "Playable Ads",
  "Multiplayer Systems",
  "Full-Stack Web Development",
  "Other",
] as const;

const STORAGE_KEY = "hamza-portfolio-service";

type FormData = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

const emptyForm: FormData = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const preselected = sessionStorage.getItem(STORAGE_KEY);
    if (preselected) {
      setFormData((prev) => ({ ...prev, service: preselected }));
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "hamza-hakim" }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to send");
      setIsSubmitted(true);
      setFormData(emptyForm);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      setError("Could not send — try email at hamzahakim12235@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    "w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-secondary focus:outline-none";

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-zinc-800 py-16 text-center">
        <CheckCircle className="h-10 w-10 text-secondary" />
        <p className="mt-4 font-medium text-white">Message sent</p>
        <p className="mt-1 text-sm text-zinc-500">I will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error ? (
        <div className="flex gap-2 rounded-lg border border-amber-900/50 bg-amber-950/30 p-3 text-sm text-amber-200">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" value={formData.name} onChange={handleChange} required className={fieldClass} placeholder="Name *" />
        <input name="email" type="email" value={formData.email} onChange={handleChange} required className={fieldClass} placeholder="Email *" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input name="company" value={formData.company} onChange={handleChange} className={fieldClass} placeholder="Company" />
        <select name="budget" value={formData.budget} onChange={handleChange} className={fieldClass}>
          <option value="">Budget (optional)</option>
          <option value="Under $5,000">Under $5k</option>
          <option value="$5,000 - $10,000">$5k – $10k</option>
          <option value="$10,000 - $25,000">$10k – $25k</option>
          <option value="$25,000+">$25k+</option>
        </select>
      </div>

      <select name="service" value={formData.service} onChange={handleChange} required className={fieldClass}>
        <option value="">Service needed *</option>
        {SERVICE_OPTIONS.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={4}
        className={`${fieldClass} resize-none`}
        placeholder="What do you need built? Timeline, platform, links…"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-secondary py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:opacity-50"
      >
        {isSubmitting ? "Sending…" : "Send inquiry"}
        {!isSubmitting ? <Send className="h-4 w-4" /> : null}
      </button>
    </form>
  );
}

export function preselectService(serviceKey: string) {
  sessionStorage.setItem(STORAGE_KEY, serviceKey);
}
