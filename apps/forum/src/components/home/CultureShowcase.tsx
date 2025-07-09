'use client'

/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    Culture Showcase – Portuguese Forum (PFSA)         ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Tabbed section highlighting core cultural themes:
 * music, cuisine, and arts — styled with @pfsa/ui atoms.
 */

import Link from 'next/link'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@pfsa/ui'
import { Book, Music, Palette, Utensils } from 'lucide-react'

export function CultureShowcase() {
  const culturalAspects = {
    music: [
      {
        name: 'Fado',
        description:
          'Traditional Portuguese music expressing longing and melancholy.'
      },
      {
        name: 'Folk Dance',
        description:
          'Regional dances from different Portuguese provinces celebrating heritage.'
      },
      {
        name: 'Modern Portuguese',
        description: 'Contemporary artists keeping traditions alive.'
      }
    ],
    cuisine: [
      {
        name: 'Pastéis de Nata',
        description: 'Iconic Portuguese custard tarts — crisp and creamy.'
      },
      {
        name: 'Bacalhau',
        description: 'Codfish prepared in countless beloved traditional ways.'
      },
      {
        name: 'Francesinha',
        description: 'A hearty sandwich from Porto layered with indulgence.'
      }
    ],
    arts: [
      {
        name: 'Azulejo Tiles',
        description:
          'Glazed ceramic tiles telling stories across architecture and time.'
      },
      {
        name: 'Portuguese Literature',
        description: 'From Camões to Saramago — literary giants of Lusophony.'
      },
      {
        name: 'Contemporary Art',
        description: 'Modern artistic expression blending tradition and vision.'
      }
    ]
  }

  return (
    <section className="bg-muted py-20">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Portuguese Culture
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Explore the rich traditions, cuisine, and creative spirit that define Portuguese heritage.
          </p>
        </div>

        {/* Tabbed Interface */}
        <Tabs defaultValue="music" className="w-full">
          <TabsList className="grid grid-cols-3 w-full mb-8">
            <TabsTrigger value="music" className="flex items-center gap-2">
              <Music className="h-4 w-4" />
              Music & Dance
            </TabsTrigger>
            <TabsTrigger value="cuisine" className="flex items-center gap-2">
              <Utensils className="h-4 w-4" />
              Cuisine
            </TabsTrigger>
            <TabsTrigger value="arts" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              Arts & Literature
            </TabsTrigger>
          </TabsList>

          {/* Music Tab */}
          <TabsContent value="music" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              {culturalAspects.music.map((item) => (
                <Card key={item.name} className="bg-background border-border shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">
                      {item.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Cuisine Tab */}
          <TabsContent value="cuisine" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              {culturalAspects.cuisine.map((item) => (
                <Card key={item.name} className="bg-background border-border shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">
                      {item.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Arts Tab */}
          <TabsContent value="arts" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              {culturalAspects.arts.map((item) => (
                <Card key={item.name} className="bg-background border-border shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">
                      {item.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/culture">
              <Book className="mr-2 h-4 w-4" />
              Explore Portuguese Culture
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
