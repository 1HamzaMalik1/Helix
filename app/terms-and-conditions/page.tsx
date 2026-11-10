import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUp, CalendarDays, Mail } from "lucide-react";
import { companyInfo, siteUrl } from "@/lib/constants";
import { termsIntroduction, termsSections } from "@/lib/terms-content";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { termsAndConditionsJsonLdGraph } from "@/lib/page-jsonld";
import { openGraphShareImages, twitterSummaryLarge } from "@/lib/share-metadata";
import styles from "./terms.module.css";

const title = "Terms of Service";
const description = "Terms of Service for HelixCore Studio (Private) Limited games, applications, and websites, including purchases, advertising, privacy, and consumer rights.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/terms-and-conditions" },
  openGraph: {
    title, description, url: `${siteUrl}/terms-and-conditions`,
    type: "website", siteName: companyInfo.name,
    ...openGraphShareImages("/opengraph-image", title).openGraph,
  },
  twitter: { ...twitterSummaryLarge, title, description },
};

function inline(text: string): ReactNode {
  if (text === "**[INSERT VERIFIED PRIVACY POLICY URL]**") return <Link href="/privacy-policy">Privacy Policy</Link>;
  return text.split(/(\*\*.*?\*\*|https:\/\/\S+|official@helixcorestudio\.com)/g).map((part, index) => {
    if (part.startsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("https://")) return <a key={index} href={part}>{part}</a>;
    if (part === "official@helixcorestudio.com") return <a key={index} href={`mailto:${part}`}>{part}</a>;
    return part;
  });
}

export default function TermsAndConditionsPage() {
  return (
    <div className={styles.page} id="terms-top">
      <PageJsonLd id="jsonld-terms" graph={termsAndConditionsJsonLdGraph()} />
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.back}><ArrowLeft size={16} aria-hidden="true" /> Back to home</Link>
          <p className={styles.eyebrow}>HelixCore Studio (Private) Limited</p>
          <h1>Terms of Service</h1>
          <p className={styles.date}><CalendarDays size={17} aria-hidden="true" /> Last updated <time dateTime="2026-11-10">November 10, 2026</time></p>
        </div>
      </header>
      <div className={`${styles.container} ${styles.layout}`}>
        <aside className={styles.sidebar}>
          <details className={styles.contents} open>
            <summary>On this page</summary>
            <nav aria-label="Terms of Service contents">
              <ol>{termsSections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title.replace(/^\d+\.\s*/, "")}</a></li>)}</ol>
            </nav>
          </details>
          <a className={styles.support} href="mailto:official@helixcorestudio.com"><Mail size={17} aria-hidden="true" /> Contact support</a>
        </aside>
        <article className={styles.article} aria-label="Terms of Service">
          <div className={styles.introduction}>{termsIntroduction.map((paragraph, index) => <p key={index}>{inline(paragraph)}</p>)}</div>
          {termsSections.map((section) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
              <h2 id={`${section.id}-heading`}>{section.title}</h2>
              {section.blocks.map((block, index) => block.startsWith("- ") ? (
                <ul key={index}>{block.split("\n").map((item, itemIndex) => <li key={itemIndex}>{inline(item.replace(/^- /, ""))}</li>)}</ul>
              ) : <p key={index}>{inline(block)}</p>)}
            </section>
          ))}
          <div className={styles.end}>
            <p>&copy; 2026 HelixCore Studio (Private) Limited. All rights reserved.</p>
            <a href="#terms-top">Back to top <ArrowUp size={16} aria-hidden="true" /></a>
          </div>
        </article>
      </div>
    </div>
  );
}
