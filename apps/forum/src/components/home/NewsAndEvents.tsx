'use client'

/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       News & Events Section – Portuguese Forum        ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Highlights key updates, press coverage, and community
 * happenings. Uses @pfsa/ui Card atoms.
 */

import Link from 'next/link'
import { useParams } from 'next/navigation'
import {
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@pfsa/ui'

export function NewsAndEvents() {
  const { locale } = useParams()

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">
            Latest News &amp; Events
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Discover what’s happening in the community — from advocacy wins to cultural celebrations.
          </p>
        </div>

        {/* News cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>Sample News Headline {i}</CardTitle>
                <CardDescription>
                  A short summary or teaser of this news item goes here to entice readers.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link
                  href={`/${locale}/news`}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Read more →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href={`/${locale}/news`}>View All News</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
