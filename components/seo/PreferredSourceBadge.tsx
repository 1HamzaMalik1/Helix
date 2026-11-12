import { Star } from "lucide-react";
import { siteUrl } from "@/lib/constants";

const preferredSourceUrl = `https://www.google.com/preferences/source?q=${encodeURIComponent(new URL(siteUrl).hostname)}`;

export default function PreferredSourceBadge() {
  return (
    <a
      href={preferredSourceUrl}
      className="inline-flex min-h-11 items-center gap-2 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm font-semibold leading-snug text-zinc-900 transition hover:border-zinc-500 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F46530]"
    >
      <Star className="h-4 w-4 shrink-0 text-blue-700" aria-hidden />
      Add as a Preferred Source on Google
    </a>
  );
}
