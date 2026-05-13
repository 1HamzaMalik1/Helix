/** Width and height for generated Open Graph PNGs (see opengraph-image routes under app/). */
export const SHARE_IMAGE_WIDTH = 1200;
export const SHARE_IMAGE_HEIGHT = 630;

/** Default alt when using the site root `/opengraph-image` */
export const SITE_OG_ALT = "HelixCore Studio — software development services · AI, games & web";

export type ShareImagePath = `/${string}`;

export function ogImageObjects(imagePath: ShareImagePath, alt: string) {
  return [
    {
      url: imagePath,
      width: SHARE_IMAGE_WIDTH,
      height: SHARE_IMAGE_HEIGHT,
      alt,
    },
  ];
}

/**
 * Open Graph `images` only. Twitter/X and LinkedIn read `og:image` when the card is large;
 * avoids Next metadata merge breaking `twitter.images` (must stay an array for `MultiMeta`).
 */
export function openGraphShareImages(imagePath: ShareImagePath, imageAlt: string) {
  return {
    openGraph: {
      images: ogImageObjects(imagePath, imageAlt),
    },
  };
}

export const twitterSummaryLarge = {
  card: "summary_large_image" as const,
};
