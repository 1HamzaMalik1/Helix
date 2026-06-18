"use client";

export default function StickyCta() {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
      <a
        href="#contact"
        className="rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-600"
      >
        Get a quote
      </a>
    </div>
  );
}
