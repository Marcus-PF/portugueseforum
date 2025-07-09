'use client'

/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     About Section – Portuguese Forum Introduction     ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Brief introduction with mission, identity, and core info.
 */

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@pfsa/ui'

export function AboutSection() {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4 grid gap-10 md:grid-cols-2 md:items-center">
        {/* Text block */}
        <Card className="bg-muted border-none shadow-none p-0">
          <CardHeader className="px-0">
            <CardTitle className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Who We Are
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0 pt-0 space-y-4">
            <p className="text-base text-muted-foreground">
              Since 2001, the Portuguese Forum of South Africa has been the national voice
              for the Luso-South African community. We are a non-partisan, non-profit platform
              promoting cultural pride, civic engagement, and social upliftment.
            </p>
            <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground">
              <li><strong>🎯 Mission:</strong> Advocate and unify our diverse community</li>
              <li><strong>📅 Established:</strong> 19 November 2001</li>
              <li><strong>📍 Based in:</strong> South Africa — with national reach</li>
            </ul>
          </CardContent>
        </Card>

        {/* Image / illustration placeholder */}
        <div className="h-64 w-full rounded-xl bg-border md:h-[300px]" />
      </div>
    </section>
  )
}
