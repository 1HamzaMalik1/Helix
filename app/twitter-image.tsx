import { ImageResponse } from "next/og";
import { OgBrandCanvas } from "@/components/og/OgBrandCanvas";
import { companyInfo } from "@/lib/constants";

export const runtime = "edge";

export const alt = `${companyInfo.name} — software development services · AI, games & web`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <OgBrandCanvas
        headline="Software development services for global teams"
        tagline={companyInfo.tagline}
        badge="AI · Game development · Web apps · Automation"
      />
    ),
    { ...size },
  );
}
