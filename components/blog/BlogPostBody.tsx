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
import UnityGameDevelopmentCompanyUsaArticle from "@/components/blog/articles/UnityGameDevelopmentCompanyUsaArticle";
import HireUnityDevelopersInCanadaArticle from "@/components/blog/articles/HireUnityDevelopersInCanadaArticle";
import PlayableAdsDevelopmentServicesArticle from "@/components/blog/articles/PlayableAdsDevelopmentServicesArticle";
import AiAgentDevelopmentForStartupsArticle from "@/components/blog/articles/AiAgentDevelopmentForStartupsArticle";
import MobileGameDevelopmentCostUaeArticle from "@/components/blog/articles/MobileGameDevelopmentCostUaeArticle";
import UnityMultiplayerDevelopmentServicesArticle from "@/components/blog/articles/UnityMultiplayerDevelopmentServicesArticle";
import WebglGameDevelopmentCompanyArticle from "@/components/blog/articles/WebglGameDevelopmentCompanyArticle";
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
    ) : slug === "unity-game-development-company-usa" ? (
      <UnityGameDevelopmentCompanyUsaArticle />
    ) : slug === "hire-unity-developers-in-canada" ? (
      <HireUnityDevelopersInCanadaArticle />
    ) : slug === "playable-ads-development-services" ? (
      <PlayableAdsDevelopmentServicesArticle />
    ) : slug === "ai-agent-development-for-startups" ? (
      <AiAgentDevelopmentForStartupsArticle />
    ) : slug === "mobile-game-development-cost-in-uae" ? (
      <MobileGameDevelopmentCostUaeArticle />
    ) : slug === "unity-multiplayer-development-services" ? (
      <UnityMultiplayerDevelopmentServicesArticle />
    ) : slug === "webgl-game-development-company" ? (
      <WebglGameDevelopmentCompanyArticle />
    ) : slug === "indie-game-monetization-live-ops-2026" ? (
      <IndieGameMonetizationLiveOps2026Article />
    ) : slug === "composable-commerce-headless-2026" ? (
      <ComposableCommerceHeadless2026Article />
    ) : null;

  if (!inner) return null;

  return <div className="blog-longform max-w-none">{inner}</div>;
}
