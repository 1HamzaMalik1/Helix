import type { ServiceFaqItem } from "@/lib/page-jsonld";
import {
  AiDevelopmentContent,
  GameDevelopmentContent,
  WebDevelopmentContent,
  pillarFaqs,
} from "./pillar";
import { SecondaryServiceContent, secondaryFaqs } from "./secondary";

export function ServiceDetailBody({ slug }: { slug: string }) {
  switch (slug) {
    case "ai-development":
      return <AiDevelopmentContent />;
    case "game-development":
      return <GameDevelopmentContent />;
    case "web-development":
      return <WebDevelopmentContent />;
    default:
      return <SecondaryServiceContent slug={slug} />;
  }
}

export function getServiceFaqs(slug: string): ServiceFaqItem[] {
  return pillarFaqs[slug] ?? secondaryFaqs[slug] ?? [];
}
