'use client'

/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       Hero Section – Portuguese Forum (Enhanced)      ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * 🇵🇹 Image banner, mission text, CTAs, and live stats
 * - Text block is right-aligned (desktop), centered (mobile)
 * - Full dark overlay for readability
 * - Stats card floats at bottom center with blur + icons
 */

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Button, Card, CardContent } from '@pfsa/ui'
import { ChevronRight, Users, Calendar, Globe, Award } from 'lucide-react'

export function HeroSection() {
  const { locale } = useParams()

  const stats = [
    { icon: Users, value: '15,000+', label: 'Community Members' },
    { icon: Calendar, value: '24', label: 'Years of Service' },
    { icon: Globe, value: '3', label: 'Countries' },
    { icon: Award, value: '100+', label: 'Events Hosted' }
  ]

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

      {/* 🌘 Gradient overlay */}
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

      {/* 📊 Community Stats Overlay */}
      <div className="absolute bottom-8 left-1/2 z-10 w-full max-w-4xl px-4 -translate-x-1/2">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label}>
                  <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-sm text-white/80">{label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
