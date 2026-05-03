import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #2A2E30 0%, #1a1d1f 100%)",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 124,
            height: 124,
            borderRadius: 24,
            background: "#F46530",
            color: "#ffffff",
            fontSize: 68,
            fontWeight: 800,
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          H
        </div>
      </div>
    ),
    { ...size }
  );
}
