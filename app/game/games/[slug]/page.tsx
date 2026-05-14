// app/games/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Star, Gamepad2, Calendar, Users, Rocket } from 'lucide-react';
import { getGameBySlug, getAllGameSlugs } from '@/lib/games';

// Generate static paths for all games
export async function generateStaticParams() {
  const slugs = getAllGameSlugs();
  return slugs.map((slug) => ({ slug }));
}

interface GamePageProps {
  params: Promise<{ slug: string }>;
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  return (
    <main className="relative w-full overflow-hidden bg-black text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={game.heroImage || game.image}
            alt={game.title}
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4 uppercase text-primary">
            {game.category}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{game.title}</h1>
          <div className="flex flex-wrap justify-center gap-4 text-white/80 text-sm mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{game.year}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{game.rating} / 5</span>
            </div>
            <div className="flex items-center gap-1">
              <Gamepad2 className="w-4 h-4" />
              <span>{game.platforms?.join(', ')}</span>
            </div>
          </div>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            {game.shortDescription}
          </p>
        </div>
      </section>

      {/* Description & Features */}
      <section className="relative z-10 py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left column: description */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold border-l-4 border-primary pl-4">Overview</h2>
            <p className="text-white/70 leading-relaxed whitespace-pre-line">
              {game.description}
            </p>

            <h2 className="text-2xl font-semibold border-l-4 border-primary pl-4 mt-8">Key Features</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {game.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-white/70">
                  <Rocket className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column: info panel */}
          <div className="space-y-6">
            <div className="bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4">Technical Details</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-white/50">Engine:</span>
                  <p className="text-white/80">{game.technologies[0] || 'N/A'}</p>
                </div>
                <div>
                  <span className="text-white/50">Platforms:</span>
                  <p className="text-white/80">{game.platforms?.join(', ') || 'TBA'}</p>
                </div>
                <div>
                  <span className="text-white/50">Technologies:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {game.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-white/10 rounded-md text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {game.liveUrl && game.liveUrl !== '#' && (
              <Link href={game.liveUrl} target="_blank">
                <button className="w-full py-3 rounded-full bg-primary text-black font-medium hover:bg-primary/80 transition-colors">
                  Play Now
                </button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Back to Games button */}
      <div className="text-center pb-16">
        <Link
          href="/games"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all games
        </Link>
      </div>
    </main>
  );
}