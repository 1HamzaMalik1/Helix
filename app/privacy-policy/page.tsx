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
  title: "Privacy Policy | HelixCore Studio",
  description: metaDescription(
    "Privacy Policy for HelixCore Studio’s mobile games and applications on Google Play, covering data collection, advertising, analytics, user choices, and contact details.",
  ),
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | HelixCore Studio",
    description: metaDescription(
      "Privacy Policy for HelixCore Studio’s apps, including advertising, analytics, third-party services, and user rights.",
    ),
    url: `${siteUrl}/privacy-policy`,
    type: "website",
    siteName: companyInfo.name,
    ...privacyShare.openGraph,
  },
  twitter: {
    ...twitterSummaryLarge,
    title: "Privacy Policy | HelixCore Studio",
    description: metaDescription(
      "How HelixCore Studio handles privacy, ads, analytics, and user rights in its Google Play apps.",
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
          Privacy Policy
        </h1>
        <p className="text-sm md:text-base opacity-80 mb-10" style={{ color: "#2A2E30" }}>
          <strong>Effective Date:</strong> 2026-05-02
        </p>

        <div className="space-y-8 text-sm md:text-base leading-relaxed" style={{ color: "#2A2E30" }}>
          <p className="opacity-90">
            Welcome to HelixCore Studio.
          </p>
          <p className="opacity-90">
            This Privacy Policy applies to our mobile games and applications published on the Google Play Store. We respect your privacy and are committed to protecting user data while providing a safe and enjoyable gameplay experience.
          </p>
          <p className="opacity-90">
            By using our apps, you agree to the practices described in this Privacy Policy. If you do not agree, please stop using our apps.
          </p>
          <p className="opacity-90">
            Our apps are intended for users aged 13 and above.
          </p>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Information We Collect
            </h2>
            <p className="opacity-90 mb-4">
              Our apps may automatically collect limited information, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 opacity-90">
              <li>Device type and operating system</li>
              <li>Device identifiers and advertising identifiers</li>
              <li>App usage data, such as gameplay activity, session length, quest progress, and interactions</li>
              <li>Crash, diagnostic, and performance data</li>
              <li>Approximate location inferred from device or network information, where provided by third-party services</li>
            </ul>
            <p className="opacity-90 mt-4 font-semibold">We do not knowingly collect:</p>
            <ul className="list-disc pl-5 space-y-2 opacity-90 mt-2">
              <li>Names</li>
              <li>Email addresses</li>
              <li>Phone numbers</li>
              <li>Precise location data</li>
              <li>Payment information</li>
              <li>Personal photos, contacts, or messages</li>
            </ul>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              User-Provided Information
            </h2>
            <p className="opacity-90 mb-4">
              Our apps do not require users to create an account.
            </p>
            <p className="opacity-90">
              If you contact us for support, feedback, or privacy requests, we may collect the information you provide, such as your email address and message content, only to respond to your request.
            </p>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Advertising
            </h2>
            <p className="opacity-90 mb-4">
              Our apps may display advertisements to support free access.
            </p>
            <p className="opacity-90 mb-4">
              Advertisements may be provided by Google AdMob and mediated advertising partners such as Meta Audience Network, ironSource, AppLovin, Unity Ads, or other approved ad networks.
            </p>
            <p className="opacity-90 mb-4">
              These advertising partners may collect or process limited information such as advertising identifiers, device information, app interactions, approximate location, and ad performance data to:
            </p>
            <ul className="list-disc pl-5 space-y-2 opacity-90">
              <li>Show ads</li>
              <li>Measure ad performance</li>
              <li>Prevent fraud and abuse</li>
              <li>Improve ad delivery</li>
              <li>Comply with legal requirements</li>
            </ul>
            <p className="opacity-90 mt-4">
              Where required, we use consent tools, privacy settings, and age-appropriate controls to help ensure ads are suitable for our intended audience.
            </p>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Analytics
            </h2>
            <p className="opacity-90 mb-4">
              Our apps may use analytics services such as Google Analytics for Firebase to understand how users interact with our games.
            </p>
            <p className="opacity-90 mb-4">
              Analytics data may include session length, first app open, gameplay progress, quest activity, device information, app performance, and crash-related information.
            </p>
            <p className="opacity-90">We use analytics to:</p>
            <ul className="list-disc pl-5 space-y-2 opacity-90 mt-2">
              <li>Improve gameplay</li>
              <li>Fix bugs and crashes</li>
              <li>Improve app performance</li>
              <li>Understand user engagement</li>
              <li>Improve future updates</li>
            </ul>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Third-Party Services
            </h2>
            <p className="opacity-90 mb-4">
              Our apps may use third-party services, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 opacity-90">
              <li>Google Play Services</li>
              <li>Google AdMob</li>
              <li>Google Analytics for Firebase</li>
              <li>Meta Audience Network</li>
              <li>ironSource</li>
              <li>AppLovin</li>
              <li>Unity Ads</li>
              <li>Other mediation or advertising partners integrated through ad mediation platforms</li>
            </ul>
            <p className="opacity-90 mt-4">
              These third-party services may collect and process data according to their own privacy policies.
            </p>
            <p className="opacity-90 mt-4 font-semibold">Useful privacy policy links:</p>
            <ul className="list-disc pl-5 space-y-2 opacity-90 mt-2">
              <li>Google Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-[#F46530]/40" style={{ color: "#F46530" }}>https://policies.google.com/privacy</a></li>
              <li>Firebase Privacy and Security: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-[#F46530]/40" style={{ color: "#F46530" }}>https://firebase.google.com/support/privacy</a></li>
              <li>Meta Privacy Policy: <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-[#F46530]/40" style={{ color: "#F46530" }}>https://www.facebook.com/privacy/policy/</a></li>
              <li>ironSource Privacy Policy: <a href="https://www.is.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-[#F46530]/40" style={{ color: "#F46530" }}>https://www.is.com/privacy-policy/</a></li>
              <li>AppLovin Privacy Policy: <a href="https://www.applovin.com/privacy/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-[#F46530]/40" style={{ color: "#F46530" }}>https://www.applovin.com/privacy/</a></li>
              <li>Unity Privacy Policy: <a href="https://unity.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-[#F46530]/40" style={{ color: "#F46530" }}>https://unity.com/legal/privacy-policy</a></li>
            </ul>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              How We Use Information
            </h2>
            <p className="opacity-90 mb-4">
              We may use collected information to:
            </p>
            <ul className="list-disc pl-5 space-y-2 opacity-90">
              <li>Operate and maintain our apps</li>
              <li>Provide gameplay features</li>
              <li>Improve performance and stability</li>
              <li>Analyze app usage</li>
              <li>Show and measure advertisements</li>
              <li>Prevent fraud and misuse</li>
              <li>Respond to support requests</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Data Sharing
            </h2>
            <p className="opacity-90 mb-4">
              We do not sell personal information.
            </p>
            <p className="opacity-90 mb-4">
              Limited data may be shared with trusted third-party service providers for:
            </p>
            <ul className="list-disc pl-5 space-y-2 opacity-90">
              <li>Analytics</li>
              <li>Advertising</li>
              <li>Ad measurement</li>
              <li>Fraud prevention</li>
              <li>Crash reporting</li>
              <li>App functionality</li>
              <li>Legal compliance</li>
            </ul>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Data Retention
            </h2>
            <p className="opacity-90">
              We retain data only for as long as necessary for app functionality, analytics, advertising, security, legal compliance, and service improvement.
            </p>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              User Choices
            </h2>
            <p className="opacity-90 mb-4">
              Users may limit ad personalization from their Android device settings.
            </p>
            <p className="opacity-90 mb-4">
              This may be available under:
            </p>
            <p className="opacity-90 mb-4">Settings &gt; Google &gt; Ads</p>
            <p className="opacity-90">
              Users may also reset or delete their advertising ID where supported by their device.
            </p>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Children&apos;s Privacy
            </h2>
            <p className="opacity-90 mb-4">
              Our apps are not directed to children under 13.
            </p>
            <p className="opacity-90">
              We do not knowingly collect personal information from children under 13. If a parent or guardian believes that a child has provided personal information to us, please contact us and we will take reasonable steps to delete such information.
            </p>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Data Security
            </h2>
            <p className="opacity-90">
              We use reasonable technical and organizational measures to protect data from unauthorized access, loss, misuse, or disclosure. However, no method of transmission or storage is completely secure.
            </p>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Your Rights
            </h2>
            <p className="opacity-90 mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-2 opacity-90">
              <li>Request access to your data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of data</li>
              <li>Object to certain processing</li>
              <li>Limit ad personalization through device settings</li>
            </ul>
            <p className="opacity-90 mt-4">
              To make a request, contact us at the email below.
            </p>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Changes to This Privacy Policy
            </h2>
            <p className="opacity-90">
              We may update this Privacy Policy from time to time. Any changes will be posted with an updated effective date.
            </p>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Contact Us
            </h2>
            <p className="opacity-90 mb-4">
              If you have questions or requests about this Privacy Policy, contact us at:
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
