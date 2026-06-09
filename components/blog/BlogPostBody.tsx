import HowAiTransformsBusinessesArticle from "@/components/blog/articles/HowAiTransformsBusinessesArticle";
import CostOfGameDevelopment2026Article from "@/components/blog/articles/CostOfGameDevelopment2026Article";
import WhyModernWebAppsArticle from "@/components/blog/articles/WhyModernWebAppsArticle";
import MvpDevelopmentCostArticle from "@/components/blog/articles/MvpDevelopmentCostArticle";
import OutsourceSoftwarePakistanArticle from "@/components/blog/articles/OutsourceSoftwarePakistanArticle";
import HireUnityDevelopersArticle from "@/components/blog/articles/HireUnityDevelopersArticle";
import AiChatbotBusinessArticle from "@/components/blog/articles/AiChatbotBusinessArticle";
import AgenticAiWorkflowAutomation2026Article from "@/components/blog/articles/AgenticAiWorkflowAutomation2026Article";
import GoogleTrendingSearch2026Article from "@/components/blog/articles/GoogleTrendingSearch2026Article";
import LlmEnterpriseSearchAutomation2026Article from "@/components/blog/articles/LlmEnterpriseSearchAutomation2026Article";
import IndieGameMonetizationLiveOps2026Article from "@/components/blog/articles/IndieGameMonetizationLiveOps2026Article";
import ComposableCommerceHeadless2026Article from "@/components/blog/articles/ComposableCommerceHeadless2026Article";

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
    ) : slug === "mvp-development-cost-and-timeline-2026" ? (
      <MvpDevelopmentCostArticle />
    ) : slug === "outsource-software-development-pakistan-lahore" ? (
      <OutsourceSoftwarePakistanArticle />
    ) : slug === "hire-unity-developers-what-to-know-2026" ? (
      <HireUnityDevelopersArticle />
    ) : slug === "ai-chatbot-for-business-website-guide" ? (
      <AiChatbotBusinessArticle />
    ) : slug === "agentic-ai-workflow-automation-2026" ? (
      <AgenticAiWorkflowAutomation2026Article />
    ) : slug === "google-trending-search-2026-business-strategy" ? (
      <GoogleTrendingSearch2026Article />
    ) : slug === "llms-in-enterprise-search-and-automation-2026" ? (
      <LlmEnterpriseSearchAutomation2026Article />
    ) : slug === "indie-game-monetization-live-ops-2026" ? (
      <IndieGameMonetizationLiveOps2026Article />
    ) : slug === "composable-commerce-headless-2026" ? (
      <ComposableCommerceHeadless2026Article />
    ) : null;

  if (!inner) return null;

  return <div className="blog-longform max-w-none">{inner}</div>;
}
