"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface TemplateSectionProps {
  data: any
  onChange: (data: any) => void
}

// Template data
const templates = [
  {
    id: "professional",
    name: "Professional",
    description: "A clean and professional template suitable for most industries",
    image: "/templates/thumbnails/professional.png",
  },
  {
    id: "modern",
    name: "Modern",
    description: "A contemporary design with a creative touch",
    image: "/templates/thumbnails/modern.png",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "A simple and elegant design focusing on content",
    image: "/templates/thumbnails/minimal.png",
  },
]

export function TemplateSection({ data, onChange }: TemplateSectionProps) {
  const [selectedTemplate, setSelectedTemplate] = useState(data.templateId || "professional")

  const handleTemplateChange = (value: string) => {
    setSelectedTemplate(value)
    onChange({ templateId: value })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-4">Resume Template</h2>
        <p className="text-muted-foreground mb-6">Choose a template that best represents your professional style.</p>
      </div>

      <RadioGroup value={selectedTemplate} onValueChange={handleTemplateChange}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {templates.map((template) => (
            <div key={template.id} className="space-y-2">
              <Card
                className={`overflow-hidden cursor-pointer transition-all ${selectedTemplate === template.id ? "ring-2 ring-primary" : "hover:shadow-md"}`}
              >
                <CardContent className="p-0">
                  <div className="aspect-[3/4] relative">
                    <img
                      src={template.image || "/placeholder.svg?height=200&width=150"}
                      alt={template.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex items-start gap-2">
                    <RadioGroupItem value={template.id} id={template.id} className="mt-1" />
                    <div>
                      <Label htmlFor={template.id} className="font-medium cursor-pointer">
                        {template.name}
                      </Label>
                      <p className="text-sm text-muted-foreground">{template.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </RadioGroup>

      <div className="bg-muted/30 p-4 rounded-md">
        <h3 className="font-medium mb-2">Template Tips</h3>
        <ul className="text-sm space-y-1 list-disc pl-4">
          <li>Choose a template that matches your industry standards</li>
          <li>Conservative industries (finance, law) prefer traditional templates</li>
          <li>Creative industries allow for more modern designs</li>
          <li>All templates are ATS-friendly to ensure your resume gets past automated screening</li>
        </ul>
      </div>
    </div>
  )
}

