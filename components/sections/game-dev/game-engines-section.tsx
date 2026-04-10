import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

const engines = [
  {
    title: 'UNREAL ENGINE',
    image: '/images/unreal.webp',
    description1:
      'For projects focused on visual depth and atmosphere, Unreal Engine delivers powerful rendering and physics systems.',
    description2:
      'It enables realistic lighting, detailed environments, and immersive experiences such as VR and AR.',
  },
  {
    title: 'UNITY',
    image: '/images/unity.webp',
    description1:
      'Unity is ideal for flexible development and multi-platform deployment.',
    description2:
      'It allows fast prototyping and efficient workflows for both mobile titles and large productions.',
  }
]

export default function GameEnginesSection() {
  return (
    <section className="w-full bg-white text-black py-20 border-x">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            GAME ENGINES WE WORK
            <br className="hidden sm:block" />
            WITH
          </h2>
          <p className="text-gray-600 max-w-xl leading-relaxed">
            Every game begins with a strong technical foundation. Some projects
            require rapid prototyping and cross-platform compatibility, while
            others demand high-end visuals and complex effects. Our team selects
            the right engine to match each project’s needs.
          </p>
        </div>

        {/* Engine Cards - side by side on medium+ screens */}
        <div className="grid md:grid-cols-2 gap-10">
          {engines.map((engine, index) => (
            <div
              key={index}
              className="group [perspective:1000px]"
            >
              <div
                className="relative h-[420px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
              >
                {/* Front side - Image */}
                <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden">
                  <Image
                    src={engine.image}
                    alt={engine.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Back side - Content */}
                <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-gray-100 p-8 flex flex-col justify-center gap-4">
                  <h3 className="text-primary text-xl font-bold">
                    {engine.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {engine.description1}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {engine.description2}
                  </p>
                  <Button className="w-fit mt-4 rounded-none">
                    SEE MORE
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}