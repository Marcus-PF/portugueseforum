'use client'

/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     Leadership Section – Portuguese Forum (PFSA)      ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Displays key leadership team members with roles, bios,
 * avatars, and direct contact links.
 */

import Link from 'next/link'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@pfsa/ui'
import { Linkedin, Mail, Users } from 'lucide-react'

export function LeadershipSection() {
  const leaders = [
    {
      name: 'Maria Santos',
      title: 'Chairperson',
      bio: 'Leading the Portuguese Forum with 15+ years of community service experience.',
      avatar: '/team/maria-santos.jpg',
      linkedin: 'https://linkedin.com/in/maria-santos',
      email: 'maria@portugueseforum.org.za'
    },
    {
      name: 'João Pereira',
      title: 'Vice-Chairperson',
      bio: 'Passionate about cultural preservation and community development.',
      avatar: '/team/joao-pereira.jpg',
      linkedin: 'https://linkedin.com/in/joao-pereira',
      email: 'joao@portugueseforum.org.za'
    },
    {
      name: 'Ana Costa',
      title: 'Secretary',
      bio: 'Coordinating community events and maintaining organizational excellence.',
      avatar: '/team/ana-costa.jpg',
      linkedin: 'https://linkedin.com/in/ana-costa',
      email: 'ana@portugueseforum.org.za'
    }
  ]

  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Our Leadership
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated volunteers who guide our community toward growth, unity, and cultural preservation.
          </p>
        </div>

        {/* Leader Cards */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {leaders.map((leader) => (
            <Card
              key={leader.name}
              className="text-center group hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src={leader.avatar} alt={leader.name} />
                  <AvatarFallback className="text-lg font-medium">
                    {leader.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl text-foreground">{leader.name}</CardTitle>
                <Badge variant="secondary" className="mt-1">
                  {leader.title}
                </Badge>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{leader.bio}</p>
                <div className="flex justify-center gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${leader.name} on LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={`mailto:${leader.email}`}
                      aria-label={`Email ${leader.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button asChild>
            <Link href="/about/leadership">
              <Users className="mr-2 h-4 w-4" />
              Meet Full Team
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
