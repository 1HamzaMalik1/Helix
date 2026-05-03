/** Google-style guidance: keep meta / og:description concise (we cap at 150). */
export const MAX_META_DESCRIPTION_LENGTH = 150;

/**
 * Trims whitespace and shortens copy for `<meta name="description">`, Open Graph, and Twitter cards.
 */
export function metaDescription(text: string, max: number = MAX_META_DESCRIPTION_LENGTH): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= max) return normalized;
  const ellipsis = "…";
  const budget = max - ellipsis.length;
  const cut = normalized.slice(0, budget);
  const lastSpace = cut.lastIndexOf(" ");
  const base = lastSpace > 40 ? cut.slice(0, lastSpace) : cut;
  return `${base.replace(/[-.,;:\s\u2014]+$/, "").trimEnd()}${ellipsis}`;
}
