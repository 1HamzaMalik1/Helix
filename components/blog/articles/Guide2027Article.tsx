import { Fragment } from "react";
import type { guides2027 } from "@/lib/blog-guides-2027";
import { InternalLink } from "@/components/blog/InternalLink";

export default function Guide2027Article({ guide }: { guide: (typeof guides2027)[number] }) {
  return (
    <>
      <p>{guide.intro}</p>
      {guide.sections.map(({ heading, paragraphs, steps }) => (
        <Fragment key={heading}>
          <h2>{heading}</h2>
          {paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {steps && (
            <ol className="list-decimal space-y-3 pl-5 text-base leading-relaxed text-zinc-700">
              {steps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          )}
        </Fragment>
      ))}
      <h2>Sources and related reading</h2>
      <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-zinc-700">
        {guide.links.map(({ label, href }) => (
          <li key={href}>
            {href.startsWith("/") ? <InternalLink href={href}>{label}</InternalLink> : (
              <a href={href} className="font-semibold text-orange-800 underline underline-offset-2">{label}</a>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
