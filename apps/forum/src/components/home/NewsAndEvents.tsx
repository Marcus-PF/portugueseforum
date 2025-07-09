'use client'

/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       News & Events Section – Portuguese Forum        ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Media-forward cards with category badges, meta, and CTAs.
 */

import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import {
  Button,
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator
} from '@pfsa/ui'
import { Calendar, Clock, ArrowRight, Bookmark } from 'lucide-react'

export function NewsAndEvents() {
  const { locale } = useParams()

  /* Static demo data ― replace with real feed later */
  const featuredNews = [
    {
      id: 1,
      title: 'Portuguese Heritage Month Celebration 2025',
      excerpt:
        'Join us for a nation-wide celebration of Portuguese culture featuring traditional music, dance, and cuisine.',
      category: 'Events',
      date: '2025-03-15',
      readTime: '3 min read',
      image: '/news/heritage-month.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Youth Bursary Programme Applications Open',
      excerpt:
        'Scholarship opportunities for Luso-South African students pursuing tertiary studies are now available.',
      category: 'Education',
      date: '2025-02-10',
      readTime: '2 min read',
      image: '/news/bursary.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'PFSA Partners with Local Food-Bank Initiative',
      excerpt:
        'Supporting communities in need with monthly food-drive collaborations across Gauteng and Western Cape.',
      category: 'Community',
      date: '2025-01-28',
      readTime: '4 min read',
      image: '/news/food-bank.jpg',
      featured: false
    }
  ]

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Heading Row */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Latest News &amp; Events
            </h2>
            <p className="text-muted-foreground max-w-xl mt-2">
              Stay updated with advocacy wins, cultural moments, and community highlights.
            </p>
          </div>

          <div className="text-center md:text-right">
            <Button asChild variant="outline" size="sm">
              <Link href={`/${locale}/news`}>
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Featured Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredNews.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-shadow">
              {/* Image Banner */}
              <div className="relative h-56 w-full overflow-hidden rounded-t-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={item.featured}
                />
                {/* Overlay + Featured badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {item.featured && (
                  <Badge className="absolute top-3 left-3 z-10">Featured</Badge>
                )}
              </div>

              {/* Card Body */}
              <CardHeader>
                {/* Meta row */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                  <Separator orientation="vertical" className="h-4" />
                  <Clock className="h-4 w-4" />
                  <span>{item.readTime}</span>
                </div>

                {/* Title */}
                <CardTitle className="group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>

                {/* Category badge */}
                <Badge variant="secondary" className="mt-1 w-max">
                  {item.category}
                </Badge>
              </CardHeader>

              <CardContent>
                <CardDescription className="mb-4">{item.excerpt}</CardDescription>

                {/* Footer actions */}
                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/${locale}/news/${item.id}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Secondary CTA for small screens */}
        <div className="mt-16 text-center md:hidden">
          <Button asChild size="lg">
            <Link href={`/${locale}/news`}>Browse All News</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
