export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Skate Tree Wiki",
  shortName: "Skate Tree",
  logoText: "S",
  tagline: "Guides, Codes, Tricks & Skate Tips",
  description: "Skate Tree Wiki provides complete guides, skating tips, gameplay information, codes, and useful resources to help players explore the world of Skate Tree.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://skate-tree.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://skate-tree.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/75885533927852/Skate-Tree",
  heroVideoId: "uPMhRU3BMKE", // Skate Tree Roblox gameplay showcase (Someone Ported Skate 3 to Roblox)
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
