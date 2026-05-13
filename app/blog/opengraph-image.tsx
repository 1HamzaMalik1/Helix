import { ImageResponse } from "next/og";
import { OgBrandCanvas } from "@/components/og/OgBrandCanvas";
import { companyInfo } from "@/lib/constants";

export const runtime = "edge";

export const alt = `${companyInfo.name} blog — guides on AI, games, web & delivery`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function BlogIndexOgImage() {
  return new ImageResponse(
    (
      <OgBrandCanvas
        headline="Insights & guides for builders"
        tagline={`${companyInfo.name} · Blog`}
        badge="AI · Games · Web apps · MVP & outsourcing"
      />
    ),
    { ...size },
  );
}
