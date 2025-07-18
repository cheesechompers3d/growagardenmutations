import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ShareBar from "@/components/ShareBar"
import RandomGames from "@/components/RandomGames"
import { GameData, findGameBySlug, getGameSlug } from "@/data/games"
import { getRandomGamesCount } from "@/lib/config"
import { FaExpand, FaCompress } from "react-icons/fa"
import Image from "next/image"
import { defaultConfig } from '@/lib/config'
import { getGameBySlug } from '@/lib/games'

// 动态 SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const game = await getGameBySlug(params.slug)
  const fallbackSeo = defaultConfig.seo
  if (!game || !game.seo) {
    return {
      title: fallbackSeo.title,
      description: fallbackSeo.description,
      keywords: fallbackSeo.keywords,
      openGraph: {
        images: fallbackSeo.ogImage ? [fallbackSeo.ogImage] : [],
      },
    }
  }
  return {
    title: game.seo.title || game.title,
    description: game.seo.description || game.description,
    keywords: game.seo.keywords || fallbackSeo.keywords,
    openGraph: {
      images: game.seo.ogImage ? [game.seo.ogImage] : (fallbackSeo.ogImage ? [fallbackSeo.ogImage] : []),
    },
  }
}

export default async function GamePage({ params }: { params: { slug: string } }) {
  const slug = params?.slug as string
  const game = await getGameBySlug(slug)
  // 下面保留原有渲染逻辑，game 作为数据传递
  // 你可以根据需要将 hooks 相关逻辑迁移到子组件
  // ...（此处可根据需要进一步细化）
  // 这里只做数据传递
  // 你可以将 game 传递给 Home 或其它 client 组件
  // 这里暂时只返回 null 或 game.name 作为占位
  if (!game) {
    const config = defaultConfig
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{config.siteName}</h1>
        </div>
      </div>
    )
  }
  // 你可以根据原有内容决定如何渲染 game
  return <div>{game.title}</div>
} 