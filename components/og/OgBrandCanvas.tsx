import { companyInfo, siteUrl } from "@/lib/constants";

type OgBrandCanvasProps = {
  /** Primary line — page or article title */
  headline: string;
  /** Secondary line under logo row */
  tagline?: string;
  /** Accent row (e.g. topic chips) */
  badge?: string;
  /** Footer line (domain / location) */
  footer?: string;
};

/**
 * JSX tree for `next/og` ImageResponse — shared by opengraph-image and twitter-image routes.
 */
export function OgBrandCanvas({ headline, tagline, badge, footer }: OgBrandCanvasProps) {
  const domain = siteUrl.replace(/^https:\/\//, "");
  const footerLine = footer ?? `${companyInfo.addressLocality}, Pakistan · ${domain}`;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 72,
        background: "linear-gradient(135deg, #ffffff 0%, #f4f4f5 45%, #fff5f0 100%)",
        color: "#2A2E30",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          marginBottom: 28,
        }}
      >
        <div
          style={{
            width: 88,
            height: 88,
            borderRadius: 20,
            background: "#F46530",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 48,
            fontWeight: 800,
          }}
        >
          H
        </div>
        <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
          <span style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5 }}>{companyInfo.name}</span>
          {tagline ? (
            <span style={{ fontSize: 22, opacity: 0.82, marginTop: 6, lineHeight: 1.35 }}>{tagline}</span>
          ) : (
            <span style={{ fontSize: 22, opacity: 0.82, marginTop: 6 }}>{companyInfo.tagline}</span>
          )}
        </div>
      </div>
      <div
        style={{
          fontSize: 40,
          fontWeight: 700,
          letterSpacing: -0.5,
          lineHeight: 1.2,
          marginBottom: 20,
          maxHeight: 280,
          overflow: "hidden",
        }}
      >
        {headline}
      </div>
      {badge ? (
        <div
          style={{
            fontSize: 26,
            fontWeight: 600,
            color: "#F46530",
            marginBottom: 14,
          }}
        >
          {badge}
        </div>
      ) : null}
      <div style={{ fontSize: 22, opacity: 0.72 }}>{footerLine}</div>
    </div>
  );
}
