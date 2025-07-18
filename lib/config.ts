import { SiteConfig } from './types'

export const defaultConfig: SiteConfig = {
  defaultGame: "grow-a-garden-mutations",
  siteName: "Grow a Garden Mutations",
  logo: "/images/hot_game/grow-a-garden-mutations.png",
  seo: {
    title: "Grow a Garden Mutations - Roblox Farm Mutation Automation, Catch All Rare Mutations",
    description: "Grow a Garden Mutations helps you automatically detect and collect all mutations, easily achieving high profits. Supports rare Grow a Garden Mutations like Gold, Rainbow, Celestial, multi-platform compatible, safe, stable, and continuously updated.",
    ogImage: "/images/hot_game/grow-a-garden-mutations.png",
    keywords: "Grow a Garden Mutations, Roblox mutation, auto mutation, rare mutation, mutation stacking, auto collect, high-profit farm, Grow a Garden script, 2025, latest script, automation, multi-platform, safe, stable"
  },
  advertisement: {
    key: ""
  },
  gameSettings: {
    randomGamesCount: 20
  },
  siteInfo: {
    companyName: "Grow a Garden Mutations",
    siteUrl: "https://www.growagardenscript.online",
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