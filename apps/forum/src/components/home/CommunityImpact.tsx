'use client'

/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     Community Impact Section – Portuguese Forum       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Highlights PFSA’s broader civic mission and outreach.
 * Uses cards and icons to illustrate areas of impact.
 */

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@pfsa/ui'
import { HeartHandshake, Landmark, Globe, Users } from 'lucide-react'

export function CommunityImpact() {
  const features = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'Empowering Community',
      description:
        'Supporting civic leadership, education, and entrepreneurship within the Portuguese-speaking population across South Africa.',
    },
    {
      icon: <Landmark className="h-6 w-6 text-primary" />,
      title: 'Cultural Preservation',
      description:
        'Promoting Portuguese heritage, language, festivals, and identity through coordinated events and educational outreach.',
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: 'Global Connectivity',
      description:
        'Fostering diplomatic, trade, and cultural ties with Portugal and other Lusophone communities worldwide.',
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-primary" />,
      title: 'Social Advocacy',
      description:
        'Working with government, civil society, and media to ensure representation and support for Luso‑South Africans.',
    },
  ]

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">
            Our Community Impact
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The Forum serves as a national platform to uplift and unify the Portuguese-South African diaspora through action, representation, and pride.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon, title, description }) => (
            <Card key={title} className="bg-muted/40 border-border">
              <CardHeader className="flex flex-col items-start gap-2">
                {icon}
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
