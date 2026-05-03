import HowAiTransformsBusinessesArticle from "@/components/blog/articles/HowAiTransformsBusinessesArticle";
import CostOfGameDevelopment2026Article from "@/components/blog/articles/CostOfGameDevelopment2026Article";
import WhyModernWebAppsArticle from "@/components/blog/articles/WhyModernWebAppsArticle";

type BlogPostBodyProps = {
  slug: string;
};

export default function BlogPostBody({ slug }: BlogPostBodyProps) {
  const inner =
    slug === "how-ai-transforms-businesses" ? (
      <HowAiTransformsBusinessesArticle />
    ) : slug === "cost-of-game-development-2026" ? (
      <CostOfGameDevelopment2026Article />
    ) : slug === "why-businesses-need-modern-web-apps" ? (
      <WhyModernWebAppsArticle />
    ) : null;

  if (!inner) return null;

  return <div className="blog-longform max-w-none">{inner}</div>;
}
