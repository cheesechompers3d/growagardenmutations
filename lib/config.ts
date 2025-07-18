import { SiteConfig } from './types'

export const defaultConfig: SiteConfig = {
  defaultGame: "grow-a-garden-mutations",
  siteName: "Grow a Garden Mutations",
  logo: "/images/hot_game/grow-a-garden-mutations.png",
  seo: {
    title: "Grow a Garden Mutations - Roblox Farm Mutation Automation",
    description: "Grow a Garden Mutations helps you detect and collect all mutations, including rare ones. Safe, stable, multi-platform, and continuously updated.",
    keywords: "Grow a Garden Mutations, Roblox mutation, auto mutation, rare mutation, script, automation, safe",
    ogImage: "/images/hot_game/grow-a-garden-mutations.png"
  },
  advertisement: {
    key: ""
  },
  gameSettings: {
    randomGamesCount: 20
  },
  siteInfo: {
    companyName: "Grow a Garden Mutations",
    siteUrl: "https://www.growagardenmutations.net",
    email: "HarryC199101@gmail.com"
  },
  footer: {
    columns: [],
    copyright: "© 2025 All rights reserved.",
    disclaimer: "This is an independent website."
  }
}

export function getRandomGamesCount(): number {
  return defaultConfig.gameSettings?.randomGamesCount || 20
}

export function getSiteConfig(): SiteConfig {
  return defaultConfig
}

export default defaultConfig 