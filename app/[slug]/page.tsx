import Home from '@/components/Home'
import { getGameBySlug } from '@/lib/games'
import { Game } from '@/lib/types'
import { defaultConfig } from '@/lib/config'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const game = await getGameBySlug(params.slug)
  if (!game || !game.seo) {
    return {
      title: 'Game Not Found',
      description: 'The game you visited does not exist.'
    }
  }
  return {
    title: game.seo.title || game.title,
    description: game.seo.description || game.description,
    keywords: game.seo.keywords || '',
    openGraph: {
      images: game.seo.ogImage ? [game.seo.ogImage] : [],
    },
  }
}

export default async function GamePage({ params }: { params: { slug: string } }) {
  const game: Game | null = await getGameBySlug(params.slug)
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
  return <Home defaultGame={game} />
} 