import type { Metadata } from "next";
import Link from "next/link";
import { companyInfo, siteUrl } from "@/lib/constants";

const contactEmail = "helixcorestudio12235@gmail.com";

export const metadata: Metadata = {
  title: "Privacy Policy | HelixCore Studio",
  description:
    "HelixCore Studio’s privacy policy for all Android apps and games on Google Play. Data practices, third parties, retention, and contact—one URL for our full catalog.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | HelixCore Studio",
    description:
      "One policy for every HelixCore Studio app and game on Google Play—data use, third parties, and your rights.",
    url: `${siteUrl}/privacy-policy`,
    type: "website",
    siteName: companyInfo.name,
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <Link
          href="/"
          className="text-sm font-semibold mb-8 inline-block hover:underline"
          style={{ color: "#F46530" }}
        >
          ← Back to home
        </Link>

        <h1 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "#2A2E30" }}>
          Privacy Policy
        </h1>
        <p className="text-sm md:text-base opacity-80 mb-10" style={{ color: "#2A2E30" }}>
          <strong>Effective Date:</strong> 2026-05-02
        </p>

        <div className="space-y-8 text-sm md:text-base leading-relaxed" style={{ color: "#2A2E30" }}>
          <p className="opacity-90">
            This Privacy Policy applies to <strong>every</strong> mobile application and game (together, &quot;Applications&quot;)
            developed and published by HelixCore Studio (&quot;Service Provider&quot;, &quot;we&quot;, &quot;our&quot;, or
            &quot;us&quot;) on the Google Play Store—<strong>not to a single title</strong>. It covers our current and future
            listings under this developer account, so you can use the same policy URL in Google Play Console for any of our
            apps or games. Pricing and business models (free, paid, or with in-app purchases) are shown on each app&apos;s
            store listing; all Applications are provided &quot;AS IS&quot; as described there.
          </p>
          <p className="opacity-90">
            <strong>What may differ by app:</strong> Not every Application uses every SDK or data practice described below.
            Features such as ads, analytics, or social sign-in depend on the specific app you install. Where something applies
            only to certain Applications, we note that in the app or on its Play listing where relevant.
          </p>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Information Collection and Use
            </h2>
            <p className="opacity-90 mb-4">
              Our Applications may collect information when you download and use them. This information may include:
            </p>
            <ul className="list-disc pl-5 space-y-2 opacity-90">
              <li>Your device&apos;s Internet Protocol address (e.g., IP address)</li>
              <li>Device type, operating system version, and device identifiers</li>
              <li>App usage data such as time spent in the app, features used, and interactions</li>
              <li>Diagnostic data for performance and crash reporting</li>
            </ul>
            <p className="opacity-90 mt-4">
              Our Applications do not collect precise location data.
            </p>
            <p className="opacity-90 mt-4">
              We do not require users to provide personally identifiable information unless explicitly stated within a specific
              Application. Any such information will be retained and used as described in this Privacy Policy.
            </p>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Third-Party Services
            </h2>
            <p className="opacity-90 mb-4">
              Our Applications may use third-party services that collect information used to identify you or your device.
              <strong> A given app may use only some of these;</strong> the list below is not exhaustive and reflects services we
              may integrate across our catalog:
            </p>
            <ul className="list-disc pl-5 space-y-2 opacity-90">
              <li>Google Play Services</li>
              <li>AdMob (for advertisements)</li>
              <li>Google Analytics for Firebase</li>
              <li>Facebook SDK</li>
              <li>Unity Services</li>
            </ul>
            <p className="opacity-90 mt-4">
              These third-party services operate under their own privacy policies, and we encourage you to review them.
            </p>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              How We Use Information
            </h2>
            <p className="opacity-90 mb-4">We may use the collected information to:</p>
            <ul className="list-disc pl-5 space-y-2 opacity-90">
              <li>Provide, operate, and improve our Applications</li>
              <li>Monitor usage and analyze trends</li>
              <li>Display and optimize advertisements</li>
              <li>Detect, prevent, and address technical issues</li>
            </ul>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Data Sharing and Disclosure
            </h2>
            <p className="opacity-90 mb-4">
              We do not sell personal data. However, we may share information in the following cases:
            </p>
            <ul className="list-disc pl-5 space-y-2 opacity-90">
              <li>With third-party service providers who assist us in operating our Applications</li>
              <li>When required by law or legal processes</li>
              <li>To protect our rights, user safety, or investigate fraud</li>
            </ul>
            <p className="opacity-90 mt-4">
              All third-party partners are expected to handle data in compliance with applicable privacy laws.
            </p>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Opt-Out Rights
            </h2>
            <p className="opacity-90">
              You can stop collection associated with a given app by uninstalling that Application using the standard uninstall
              process on your device or via Google Play. This applies to any of our apps or games you have installed.
            </p>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Data Retention Policy
            </h2>
            <p className="opacity-90">
              We retain collected data for as long as necessary to provide our Applications and for a reasonable period
              thereafter, per app. If you would like to request deletion of data associated with your use of our apps or
              games, you may contact us at{" "}
              <a href={`mailto:${contactEmail}`} className="font-semibold underline decoration-[#F46530]/40" style={{ color: "#F46530" }}>
                {contactEmail}
              </a>
              .
            </p>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Children&apos;s Privacy
            </h2>
            <p className="opacity-90 mb-4">
              Our Applications are not directed to children under the age of 13 unless explicitly stated. We do not knowingly
              collect personal information from children under 13.
            </p>
            <p className="opacity-90">
              If we become aware that such data has been collected, we will take steps to delete it promptly. Parents or
              guardians may contact us for assistance.
            </p>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Security
            </h2>
            <p className="opacity-90">
              We implement reasonable administrative, technical, and physical safeguards to protect your information.
              However, no method of electronic transmission or storage is completely secure.
            </p>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Changes to This Privacy Policy
            </h2>
            <p className="opacity-90">
              We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated
              effective date. Continued use of our Applications constitutes acceptance of those changes.
            </p>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Your Consent
            </h2>
            <p className="opacity-90">
              By using our Applications, you consent to the collection and use of information as described in this Privacy
              Policy.
            </p>
          </section>

          <hr className="border-0 h-px my-8" style={{ backgroundColor: "rgba(42, 46, 48, 0.12)" }} />

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2A2E30" }}>
              Contact Us
            </h2>
            <p className="opacity-90 mb-4">
              If you have any questions or concerns about this Privacy Policy, please contact us at:
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
  );
}
