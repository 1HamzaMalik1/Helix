import Script from "next/script";

type PageJsonLdProps = {
  id: string;
  graph: Record<string, unknown>[];
};

export function PageJsonLd({ id, graph }: PageJsonLdProps) {
  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  };
  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
