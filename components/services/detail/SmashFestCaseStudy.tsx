import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const storeUrl = "https://play.google.com/store/apps/details?id=com.flow.cannonball.smash.carnival";
const screenshotUrl = "https://play-lh.googleusercontent.com/1PepScJAqt-WqAVVEUgDPKNm5luSS68ni2kweLwiT_3dWS_11royk2rMWjVRu2V0IT7gBd7irQfc4tAQg7AKhw=w1052-h592";

export default function SmashFestCaseStudy() {
  return (
    <section aria-labelledby="smash-fest-case-study" className="border-b border-zinc-200 bg-zinc-50 py-12 md:py-16">
      <div className="container mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm font-semibold text-orange-800">Published Unity project</p>
          <h2 id="smash-fest-case-study" className="text-2xl font-bold text-zinc-950 md:text-3xl">Smash Fest: A mobile physics puzzle</h2>
          <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
            HelixCore developed and published Smash Fest for Android. Players aim a cannon at destructible towers and complete levels with a limited number of shots. The Google Play release includes level progression, ads, and in-app purchases.
          </p>
          <dl className="space-y-3 text-sm leading-relaxed text-zinc-700">
            <div><dt className="font-semibold text-zinc-950">Gameplay decision</dt><dd>Use the shot limit and the way supports collapse to reward choosing a weak point, rather than repeatedly firing at the tower.</dd></div>
            <div><dt className="font-semibold text-zinc-950">Release and iteration</dt><dd>The public release notes document updates to screen-size framing, UI alignment, gameplay performance, and stability.</dd></div>
          </dl>
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-orange-800">
            <a href={storeUrl} className="inline-flex items-center gap-2 underline underline-offset-4">Google Play listing and player reviews <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden /></a>
            <Link href="/smash-fest#smash-fest-video" className="underline underline-offset-4">Watch gameplay</Link>
            <Link href="/blog/unity-game-prototype-cost-2027" className="underline underline-offset-4">Estimate a Unity prototype</Link>
          </div>
        </div>
        <figure>
          <Image unoptimized src={screenshotUrl} width={1052} height={592} alt="Smash Fest screenshot from the Google Play listing" className="h-auto w-full rounded-lg border border-zinc-200" />
          <figcaption className="mt-2 text-sm text-zinc-600">Smash Fest screenshot from Google Play.</figcaption>
        </figure>
      </div>
    </section>
  );
}
