'use client'

/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    Testimonials Section – Portuguese Forum (PFSA)     ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Community feedback block with ratings, avatars, and quotes.
 * Styled with @pfsa/ui components and consistent visual tone.
 */

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent
} from '@pfsa/ui'
import { Quote, Star } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Carlos Mendes',
      role: 'Community Member',
      location: 'Cape Town',
      content:
        'The Portuguese Forum has been instrumental in helping me connect with my heritage and find my place in South Africa.',
      rating: 5,
      avatar: '/testimonials/carlos.jpg'
    },
    {
      name: 'Isabella Rodriguez',
      role: 'Event Organizer',
      location: 'Johannesburg',
      content:
        "Through the Forum, I've been able to organize cultural events that bring our community together and celebrate our traditions.",
      rating: 5,
      avatar: '/testimonials/isabella.jpg'
    },
    {
      name: 'Miguel da Silva',
      role: 'Business Owner',
      location: 'Durban',
      content:
        "The networking opportunities and business connections I've made through the Forum have been invaluable for my success.",
      rating: 5,
      avatar: '/testimonials/miguel.jpg'
    }
  ]

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Community Voices
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Hear from our community members about their experiences with the Portuguese Forum.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="relative border border-border bg-muted/50 backdrop-blur-sm hover:shadow-md transition-shadow"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 h-8 w-8 text-muted-foreground/30" />

              <CardContent className="p-6">
                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground italic mb-6">
                  “{testimonial.content}”
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
