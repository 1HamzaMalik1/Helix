import { ImageResponse } from "next/og";
import { OgBrandCanvas } from "@/components/og/OgBrandCanvas";
import { companyInfo } from "@/lib/constants";

export const runtime = "edge";

export const alt = `${companyInfo.name} — software development services overview`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function ServicesIndexOgImage() {
  return new ImageResponse(
    (
      <OgBrandCanvas
        headline="Software development services"
        tagline={`${companyInfo.name} · All offerings`}
        badge="AI · Unity & games · Web & ecommerce · Automation"
      />
    ),
    { ...size },
  );
}
