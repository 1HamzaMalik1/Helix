import type { Metadata } from "next";
import Link from "next/link";
import { companyInfo, siteUrl } from "@/lib/constants";
import { metaDescription } from "@/lib/seo-meta";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { privacyPolicyJsonLdGraph } from "@/lib/page-jsonld";
import { openGraphShareImages, twitterSummaryLarge } from "@/lib/share-metadata";

const contactEmail = "helixcorestudio@gmail.com";

const privacyShare = openGraphShareImages("/opengraph-image", "Privacy Policy (children's apps) | HelixCore Studio");

export const metadata: Metadata = {
  title: "Privacy Policy (Children’s Apps) | HelixCore Studio",
  description: metaDescription(
    "Privacy Policy for HelixCore Studio’s child-directed apps on Google Play (under 13): COPPA-aligned practices, limited data, non-personalized ads, and parental contact.",
  ),
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy (Children’s Apps) | HelixCore Studio",
    description: metaDescription(
      "How we protect kids’ privacy in our Play Store apps—COPPA, Families Policy, ads, analytics, and parental rights.",
    ),
    url: `${siteUrl}/privacy-policy`,
    type: "website",
    siteName: companyInfo.name,
    ...privacyShare.openGraph,
  },
  twitter: {
    ...twitterSummaryLarge,
    title: "Privacy Policy (Children’s Apps) | HelixCore Studio",
    description: metaDescription(
      "How we protect kids’ privacy in our Play Store apps—COPPA, Families Policy, ads, analytics, and parental rights.",
    ),
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageJsonLd id="jsonld-privacy-policy" graph={privacyPolicyJsonLdGraph()} />
      <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <Link
          href="/"
          className="text-sm font-semibold mb-8 inline-block hover:underline"
          style={{ color: "#F46530" }}
        >
          ← Back to home
        </Link>

        <h1 className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: "#2A2E30" }}>
          Privacy Policy (Children&apos;s Apps)
        </h1>
        <p className="text-sm md:text-base opacity-80 mb-10" style={{ color: "#2A2E30" }}>
          <strong>Effective Date:</strong> 2026-05-02
        </p>

        <div className="space-y-8 text-sm md:text-base leading-relaxed" style={{ color: "#2A2E30" }}>
          <p className="opacity-90">
            This Privacy Policy applies to all mobile applications (&quot;Applications&quot;) developed by HelixCore Studio
            (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) and published on the Google Play Store. These Applications are
            intended for <strong>children under the age of 13</strong> and are provided as <strong>free services</strong>.
          </p>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Children&apos;s Privacy
            </h2>
            <p className="opacity-90 mb-4">
              We are committed to protecting children&apos;s privacy. Our Applications comply with applicable children&apos;s
              privacy laws, including the Children&apos;s Online Privacy Protection Act (COPPA).
            </p>
            <p className="opacity-90">
              We do <strong>not knowingly collect personally identifiable information</strong> from children.
            </p>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Information Collection and Use
            </h2>
            <p className="opacity-90 mb-4">
              Our Applications may collect <strong>limited, non-personal information</strong>, such as:
            </p>
            <ul className="list-disc pl-5 space-y-2 opacity-90">
              <li>Device type and operating system</li>
              <li>General usage data (e.g., gameplay interactions, session length)</li>
              <li>Crash and performance data</li>
            </ul>
            <p className="opacity-90 mt-4 font-semibold">We do not collect:</p>
            <ul className="list-disc pl-5 space-y-2 opacity-90 mt-2">
              <li>Names</li>
              <li>Email addresses</li>
              <li>Phone numbers</li>
              <li>Precise location data</li>
            </ul>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Advertising
            </h2>
            <p className="opacity-90 mb-4">
              Our Applications may display advertisements to support free access.
            </p>
            <p className="opacity-90 mb-4">For child-directed users:</p>
            <ul className="list-disc pl-5 space-y-2 opacity-90">
              <li>We only use <strong>non-personalized ads</strong></li>
              <li>Ads are served in compliance with <strong>Google Play Families Policy</strong></li>
            </ul>
            <p className="opacity-90 mt-4">
              Advertising providers may collect limited data (such as device identifiers) strictly for serving contextual ads and
              preventing fraud.
            </p>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Third-Party Services
            </h2>
            <p className="opacity-90 mb-4">
              Our Applications may use child-compliant versions of third-party services, such as:
            </p>
            <ul className="list-disc pl-5 space-y-2 opacity-90">
              <li>Google Play Services</li>
              <li>AdMob (child-directed / non-personalized ads)</li>
              <li>Google Analytics for Firebase (limited analytics)</li>
            </ul>
            <p className="opacity-90 mt-4">
              These services are configured to comply with children&apos;s privacy requirements.
            </p>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Data Sharing
            </h2>
            <p className="opacity-90 mb-4">
              We do not sell or share personal information.
            </p>
            <p className="opacity-90 mb-4">
              Limited non-personal data may be processed by trusted third-party services strictly for:
            </p>
            <ul className="list-disc pl-5 space-y-2 opacity-90">
              <li>App functionality</li>
              <li>Analytics</li>
              <li>Ad delivery (non-personalized only)</li>
            </ul>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Parental Rights
            </h2>
            <p className="opacity-90 mb-4">Parents and guardians can:</p>
            <ul className="list-disc pl-5 space-y-2 opacity-90 mb-4">
              <li>Request information about data collected</li>
              <li>Request deletion of any data</li>
            </ul>
            <p className="opacity-90">
              To make a request, contact us at{" "}
              <a href={`mailto:${contactEmail}`} className="font-semibold underline decoration-[#F46530]/40" style={{ color: "#F46530" }}>
                {contactEmail}
              </a>
              .
            </p>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Data Retention
            </h2>
            <p className="opacity-90">
              We retain non-personal data only as long as necessary to improve the Application and ensure proper functionality.
            </p>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Security
            </h2>
            <p className="opacity-90">
              We take reasonable steps to protect information from unauthorized access or disclosure.
            </p>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Changes to This Privacy Policy
            </h2>
            <p className="opacity-90">
              We may update this policy from time to time. Any changes will be posted on this page with an updated effective date.
            </p>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Contact Us
            </h2>
            <p className="opacity-90 mb-4">
              If you have any questions about this Privacy Policy, please contact:
            </p>
            <p className="opacity-90">
              <a href={`mailto:${contactEmail}`} className="font-semibold underline decoration-[#F46530]/40" style={{ color: "#F46530" }}>
                {contactEmail}
              </a>
            </p>
          </section>
        </div>
      </div>
    </section>
    </>
  );
}
