import Link from "next/link";
import { ArrowUpRight, Gamepad2, Github, Linkedin } from "lucide-react";
import { SiGoogleplay } from "react-icons/si";
import { companyInfo } from "@/lib/constants";

const badgeClass = "inline-flex min-h-11 items-center gap-2 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm font-semibold leading-snug text-zinc-800 transition hover:border-zinc-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700";

export default function StudioProofBadges() {
  return (
    <ul className="flex flex-wrap gap-3" aria-label="Studio profiles and published work">
      <li><a href={companyInfo.googlePlayDeveloper} className={badgeClass}><SiGoogleplay className="h-4 w-4 shrink-0 text-emerald-700" aria-hidden /> Google Play portfolio <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden /></a></li>
      <li><Link href="/smash-fest" className={badgeClass}><Gamepad2 className="h-4 w-4 shrink-0 text-orange-700" aria-hidden /> Published game: Smash Fest</Link></li>
      <li><a href={companyInfo.linkedInCompany} className={badgeClass}><Linkedin className="h-4 w-4 shrink-0 text-blue-700" aria-hidden /> Studio on LinkedIn <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden /></a></li>
      <li><a href="https://github.com/1HamzaMalik1" className={badgeClass}><Github className="h-4 w-4 shrink-0" aria-hidden /> Founder on GitHub <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden /></a></li>
    </ul>
  );
}
