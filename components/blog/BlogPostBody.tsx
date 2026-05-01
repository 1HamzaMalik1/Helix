import UnityGameDevelopmentArticle from "@/components/blog/articles/UnityGameDevelopmentArticle";
import PlayableAdsDevelopmentArticle from "@/components/blog/articles/PlayableAdsDevelopmentArticle";
import MobileGameDevelopmentArticle from "@/components/blog/articles/MobileGameDevelopmentArticle";

type BlogPostBodyProps = {
  slug: string;
};

export default function BlogPostBody({ slug }: BlogPostBodyProps) {
  switch (slug) {
    case "unity-game-development-guide":
      return <UnityGameDevelopmentArticle />;
    case "playable-ads-development-guide":
      return <PlayableAdsDevelopmentArticle />;
    case "mobile-game-development-strategy":
      return <MobileGameDevelopmentArticle />;
    default:
      return null;
  }
}
