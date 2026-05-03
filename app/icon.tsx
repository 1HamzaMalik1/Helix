import { ImageResponse } from "next/og";

export const runtime = "edge";

/** Google recommends favicon dimensions as multiples of 48px; 192px supports rich-result logo minimums. */
export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 132,
            height: 132,
            borderRadius: 28,
            background: "#F46530",
            color: "#ffffff",
            fontSize: 76,
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
