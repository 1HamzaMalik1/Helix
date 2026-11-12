import Image from "next/image";
import { companyInfo } from "@/lib/constants";

const profiles = [
  { label: "Clutch", href: companyInfo.clutchUrl, logo: "/clutch.svg", width: 406, height: 115, fit: "h-12 max-w-[120px] object-contain" },
  { label: "GoodFirms", href: companyInfo.goodFirmsUrl, logo: "/goodfirms.png", width: 320, height: 320, fit: "h-12 object-cover" },
  { label: "Google Play", href: companyInfo.googlePlayDeveloper, logo: "/googleplay.png", width: 738, height: 414, fit: "h-9 object-cover sm:h-12" },
];

export default function StudioProfiles() {
  return (
    <section aria-label="HelixCore Studio profiles" className="border-y border-zinc-200 bg-white">
      <ul className="mx-auto grid max-w-3xl grid-cols-3 items-center gap-3 px-4 py-6 sm:gap-8 sm:px-8 sm:py-8">
        {profiles.map(({ label, href, logo, width, height, fit }) => (
          <li key={label} className="min-w-0">
            <a
              href={href}
              aria-label={`HelixCore Studio on ${label}`}
              className="mx-auto flex h-14 w-full max-w-[168px] items-center justify-center rounded-md px-1 transition hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700"
            >
              <Image src={logo} alt="" width={width} height={height} sizes="(max-width: 560px) 30vw, 168px" className={`w-full ${fit}`} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
