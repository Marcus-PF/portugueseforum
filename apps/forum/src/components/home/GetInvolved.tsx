'use client'

/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃      Get Involved Section – Volunteer & Participate   ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Highlights ways users can contribute to the PFSA’s mission:
 * join, volunteer, donate, participate in events, etc.
 */

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Button } from '@pfsa/ui'
import { HandHeart, Megaphone, Gift } from 'lucide-react'

export function GetInvolved() {
  const { locale } = useParams()

  const actions = [
    {
      icon: <HandHeart className="h-6 w-6 text-primary" />,
      title: 'Volunteer Your Time',
      description:
        'Help us organize events, support local initiatives, and reach more members of the community.',
    },
    {
      icon: <Gift className="h-6 w-6 text-primary" />,
      title: 'Make a Donation',
      description:
        'Support our non-profit efforts in advocacy, education, and cultural preservation.',
    },
    {
      icon: <Megaphone className="h-6 w-6 text-primary" />,
      title: 'Spread the Word',
      description:
        'Help raise awareness by sharing our work and inviting others to join the Forum.',
    },
  ]

  return (
    <section className="bg-muted py-20">
      <div className="container px-4 mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">
            Get Involved
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We’re stronger together. Whether through time, talent, or voice —
            your participation empowers the Portuguese Forum’s mission.
          </p>
        </div>

        {/* Action grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {actions.map(({ icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl bg-background border border-border p-6 shadow-sm"
            >
              <div className="mb-3">{icon}</div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href={`/${locale}/contact`}>Join the Movement</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
