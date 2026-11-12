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
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload).replace(/</g, "\\u003c") }}
    />
  );
}
