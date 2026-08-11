import type { Metadata } from "next";
import Link from "next/link";
import { companyInfo, siteUrl } from "@/lib/constants";
import { metaDescription } from "@/lib/seo-meta";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { termsAndConditionsJsonLdGraph } from "@/lib/page-jsonld";
import { openGraphShareImages, twitterSummaryLarge } from "@/lib/share-metadata";

const termsShare = openGraphShareImages("/opengraph-image", "Terms and Conditions | HelixCore Studio");

export const metadata: Metadata = {
  title: "Terms and Conditions | HelixCore Studio",
  description: metaDescription("Terms and conditions for HelixCore Studio engagements, including project scope, communication expectations, and intellectual property handling."),
  alternates: { canonical: "/terms-and-conditions" },
  openGraph: {
    title: "Terms and Conditions | HelixCore Studio",
    description: metaDescription("Standard terms for HelixCore Studio engagements, communication standards, and project delivery expectations."),
    url: `${siteUrl}/terms-and-conditions`,
    type: "website",
    siteName: companyInfo.name,
    ...termsShare.openGraph,
  },
  twitter: {
    ...twitterSummaryLarge,
    title: "Terms and Conditions | HelixCore Studio",
    description: metaDescription("Standard terms for HelixCore Studio engagements, communication standards, and project delivery expectations."),
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageJsonLd id="jsonld-terms" graph={termsAndConditionsJsonLdGraph()} />
      <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-white to-gray-50 min-h-screen">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Link href="/" className="text-sm font-semibold mb-8 inline-block hover:underline" style={{ color: "#F46530" }}>
            ← Back to home
          </Link>

          <h1 className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: "#2A2E30" }}>
            Terms and Conditions
          </h1>
          <p className="text-sm md:text-base opacity-80 mb-10" style={{ color: "#2A2E30" }}>
            <strong>Effective Date:</strong> 2026-05-02
          </p>

          <div className="space-y-8 text-sm md:text-base leading-relaxed" style={{ color: "#2A2E30" }}>
            <p>
              These Terms and Conditions govern the use of services provided by HelixCore Studio ("we", "our", or "us") to clients engaging us for software development, game development, AI implementation, web development, or related consulting services.
            </p>
            <section>
              <h2 className="text-xl font-bold mb-4">Scope of Services</h2>
              <p>
                Our services are provided according to the agreed scope, timeline, and deliverables documented in the project proposal, statement of work, or written communication between the parties.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">Client Responsibilities</h2>
              <p>
                Clients are responsible for providing timely feedback, approvals, assets, access credentials, and any relevant business context required for project delivery.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">Intellectual Property</h2>
              <p>
                Unless otherwise agreed in writing, any work product created specifically for the client during the engagement will be transferred to the client upon final payment, subject to any third-party licenses or pre-existing materials.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">Payments and Invoicing</h2>
              <p>
                Fees, payment schedules, and milestones will be outlined in the project agreement. Delays in payment may affect delivery timelines until resolved.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">Confidentiality</h2>
              <p>
                We will treat client materials, business information, and project details as confidential where appropriate and will use reasonable measures to protect such information.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">Communication and Availability</h2>
              <p>
                We aim to provide professional and timely communication through agreed channels such as email, calls, project boards, or messaging platforms.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">Limitation of Liability</h2>
              <p>
                HelixCore Studio shall not be liable for indirect, incidental, or consequential damages arising from the use or inability to use our services, except as required by law.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">Changes to Terms</h2>
              <p>
                We may update these terms from time to time. Any material changes will be posted on this page with an updated effective date.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">Contact</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at{' '}
                <a href={`mailto:${companyInfo.email}`} className="font-semibold underline decoration-[#F46530]/40" style={{ color: "#F46530" }}>
                  {companyInfo.email}
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
