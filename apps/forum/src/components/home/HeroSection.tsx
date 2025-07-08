'use client'

/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃           Hero Section – Portuguese Forum (PFSA)      ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * • Background image shifted down so the flag is visible
 * • Text block centered on mobile, right-aligned on desktop
 * • Responsive dark gradient overlay for text readability
 * • Bold headline + CTAs using @pfsa/ui atoms
 */

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Button } from '@pfsa/ui'
import { ChevronRight } from 'lucide-react'

export function HeroSection() {
  const { locale } = useParams()

  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      {/* 🌄 Background image — lowered by 20% */}
      <Image
        src="/images/home-hero-image.jpg"
        alt="Portuguese flag overlooking a riverside cityscape"
        fill
        priority
        className="object-cover"
        style={{ objectPosition: 'center 20%' }}
      />

      {/* 🌘 Responsive gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/10 mix-blend-multiply md:bg-gradient-to-l" />

      {/* ✍️ Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="flex flex-col gap-6 px-4 text-center items-center md:text-right md:items-end md:pr-36 md:pl-6 md:ml-auto md:w-[55%]">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
            Celebrating <span className="text-primary">culture</span>,<br />
            empowering <span className="text-primary">community</span>.
          </h1>

          <p className="max-w-lg text-base font-medium text-white/90">
            The national voice of Portuguese-South Africans — connecting people,
            heritage, and opportunity since&nbsp;2001.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:justify-end">
            <Button asChild size="lg">
              <Link href={`/${locale}/news`}>
                Explore News <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-white/15 hover:bg-white/25 text-white font-semibold"
            >
              <Link
                href="https://web.facebook.com/groups/portugueseforumsa"
                target="_blank"
                rel="noreferrer"
              >
                Join Community
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
