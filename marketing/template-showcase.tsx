import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { LayoutTemplate } from "lucide-react"

// Template categories and data
const categories = [
  { id: "professional", label: "Professional" },
  { id: "creative", label: "Creative" },
  { id: "simple", label: "Simple" },
  { id: "modern", label: "Modern" },
]

const templates = {
  professional: [
    {
      id: "executive",
      name: "Executive",
      description: "A sophisticated design for senior positions",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "corporate",
      name: "Corporate",
      description: "A traditional layout for corporate environments",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "business",
      name: "Business",
      description: "A clean design for business professionals",
      image: "/placeholder.svg?height=400&width=300",
    },
  ],
  creative: [
    {
      id: "designer",
      name: "Designer",
      description: "A creative layout for design professionals",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "artistic",
      name: "Artistic",
      description: "A bold design for creative industries",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "innovative",
      name: "Innovative",
      description: "A unique layout for standing out",
      image: "/placeholder.svg?height=400&width=300",
    },
  ],
  simple: [
    {
      id: "minimal",
      name: "Minimal",
      description: "A clean, minimalist design",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "classic",
      name: "Classic",
      description: "A timeless, traditional layout",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "basic",
      name: "Basic",
      description: "A straightforward, no-frills design",
      image: "/placeholder.svg?height=400&width=300",
    },
  ],
  modern: [
    {
      id: "contemporary",
      name: "Contemporary",
      description: "A modern design with a fresh look",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "tech",
      name: "Tech",
      description: "A sleek design for tech professionals",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "startup",
      name: "Startup",
      description: "A dynamic layout for innovative companies",
      image: "/placeholder.svg?height=400&width=300",
    },
  ],
}

export function TemplateShowcase() {
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full bg-background dark:bg-[#0f172a]">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground dark:text-white">
          Professional Resume Templates
        </h2>
        <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
          Choose from our collection of ATS-friendly templates designed to help you stand out.
        </p>
      </div>

      <Tabs defaultValue="professional" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-muted dark:bg-[#1e293b] border border-border dark:border-gray-700">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="text-foreground data-[state=active]:bg-[#3b82f6] data-[state=active]:text-white dark:text-gray-300"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {Object.entries(templates).map(([category, categoryTemplates]) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryTemplates.map((template) => (
                <Card
                  key={template.id}
                  className="overflow-hidden border dark:border-gray-700 bg-background dark:bg-[#1e293b] hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[3/4] relative overflow-hidden bg-muted dark:bg-[#0f172a]">
                    <img
                      src={template.image || "/placeholder.svg"}
                      alt={template.name}
                      className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                      <Link href="/dashboard">
                        <Button className="bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white">Use This Template</Button>
                      </Link>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-lg text-foreground dark:text-white">{template.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-300">{template.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-12 text-center">
        <Link href="/dashboard/templates">
          <Button
            variant="outline"
            size="lg"
            className="border-border dark:border-gray-700 text-foreground dark:text-white hover:bg-muted dark:hover:bg-gray-800"
          >
            <LayoutTemplate className="mr-2 h-4 w-4" />
            View All Templates
          </Button>
        </Link>
      </div>
    </div>
  )
}

