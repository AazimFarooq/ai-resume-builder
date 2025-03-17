"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

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
      image: "/templates/thumbnails/executive.png",
    },
    {
      id: "corporate",
      name: "Corporate",
      description: "A traditional layout for corporate environments",
      image: "/templates/thumbnails/corporate.png",
    },
    {
      id: "business",
      name: "Business",
      description: "A clean design for business professionals",
      image: "/templates/thumbnails/business.png",
    },
  ],
  creative: [
    {
      id: "designer",
      name: "Designer",
      description: "A creative layout for design professionals",
      image: "/templates/thumbnails/designer.png",
    },
    {
      id: "artistic",
      name: "Artistic",
      description: "A bold design for creative industries",
      image: "/templates/thumbnails/artistic.png",
    },
    {
      id: "innovative",
      name: "Innovative",
      description: "A unique layout for standing out",
      image: "/templates/thumbnails/innovative.png",
    },
  ],
  simple: [
    {
      id: "minimal",
      name: "Minimal",
      description: "A clean, minimalist design",
      image: "/templates/thumbnails/minimal.png",
    },
    {
      id: "classic",
      name: "Classic",
      description: "A timeless, traditional layout",
      image: "/templates/thumbnails/classic.png",
    },
    {
      id: "basic",
      name: "Basic",
      description: "A straightforward, no-frills design",
      image: "/templates/thumbnails/basic.png",
    },
  ],
  modern: [
    {
      id: "contemporary",
      name: "Contemporary",
      description: "A modern design with a fresh look",
      image: "/templates/thumbnails/contemporary.png",
    },
    {
      id: "tech",
      name: "Tech",
      description: "A sleek design for tech professionals",
      image: "/templates/thumbnails/tech.png",
    },
    {
      id: "startup",
      name: "Startup",
      description: "A dynamic layout for innovative companies",
      image: "/templates/thumbnails/startup.png",
    },
  ],
}

export default function TemplatesPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [selectedTemplate, setSelectedTemplate] = useState("")

  const handleSelectTemplate = (templateId: string) => {
    setSelectedTemplate(templateId)

    // In a real app, this would create a new resume with the selected template
    // or apply the template to an existing resume
    toast({
      title: "Template Selected",
      description: `You've selected the ${templateId} template. Create a new resume with this template?`,
    })
  }

  const handleCreateWithTemplate = () => {
    if (!selectedTemplate) return

    router.push(`/resume/new?template=${selectedTemplate}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Resume Templates</h1>
          <p className="text-muted-foreground">Choose a template for your resume</p>
        </div>
        <div className="flex gap-2">
          <Link href="/dashboard/resumes">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resumes
            </Button>
          </Link>
          <Button onClick={handleCreateWithTemplate} disabled={!selectedTemplate}>
            Use Selected Template
          </Button>
        </div>
      </div>

      <Tabs defaultValue="professional" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
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
                  className={`overflow-hidden border bg-background hover:shadow-lg transition-shadow cursor-pointer ${
                    selectedTemplate === template.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => handleSelectTemplate(template.id)}
                >
                  <div className="aspect-[3/4] relative overflow-hidden bg-muted">
                    <img
                      src={template.image || "/placeholder.svg?height=400&width=300"}
                      alt={template.name}
                      className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-lg">{template.name}</h3>
                    <p className="text-sm text-muted-foreground">{template.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

