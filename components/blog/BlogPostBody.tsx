import HowAiTransformsBusinessesArticle from "@/components/blog/articles/HowAiTransformsBusinessesArticle";
import CostOfGameDevelopment2026Article from "@/components/blog/articles/CostOfGameDevelopment2026Article";
import WhyModernWebAppsArticle from "@/components/blog/articles/WhyModernWebAppsArticle";

type BlogPostBodyProps = {
  slug: string;
};

export default function BlogPostBody({ slug }: BlogPostBodyProps) {
  switch (slug) {
    case "how-ai-transforms-businesses":
      return <HowAiTransformsBusinessesArticle />;
    case "cost-of-game-development-2026":
      return <CostOfGameDevelopment2026Article />;
    case "why-businesses-need-modern-web-apps":
      return <WhyModernWebAppsArticle />;
    default:
      return null;
  }
}
