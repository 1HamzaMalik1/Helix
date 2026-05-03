import { ImageResponse } from "next/og";
import { companyInfo, siteUrl } from "@/lib/constants";

export const runtime = "edge";

export const alt = `${companyInfo.name} — AI, game & web development`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
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
            marginBottom: 32,
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
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 52, fontWeight: 800, letterSpacing: -1 }}>{companyInfo.name}</span>
            <span style={{ fontSize: 26, opacity: 0.85, marginTop: 6 }}>{companyInfo.tagline}</span>
          </div>
        </div>
        <div
          style={{
            fontSize: 30,
            fontWeight: 600,
            color: "#F46530",
            marginBottom: 16,
          }}
        >
          AI development · Game development · Web apps
        </div>
        <div style={{ fontSize: 24, opacity: 0.75 }}>Lahore, Pakistan · {siteUrl.replace("https://", "")}</div>
      </div>
    ),
    { ...size }
  );
}
