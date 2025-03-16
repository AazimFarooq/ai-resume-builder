"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Trash2, MoveUp, MoveDown, Sparkles } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useResumeGeneration } from "@/hooks/ai/useResumeGeneration"

interface ExperienceSectionProps {
  data: any
  onChange: (data: any) => void
}

export function ExperienceSection({ data, onChange }: ExperienceSectionProps) {
  const { toast } = useToast()
  const [experiences, setExperiences] = useState(data.experience || [])
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)

  const { generateExperience, isLoading } = useResumeGeneration({
    jobTitle: data.targetJob || "",
    targetJob: data.targetJob || "",
    experience: currentIndex !== null ? experiences[currentIndex]?.description : "",
  })

  const handleAddExperience = () => {
    const newExperience = {
      company: "",
      position: "",
      date: "",
      description: "",
    }

    const updatedExperiences = [...experiences, newExperience]
    setExperiences(updatedExperiences)
    onChange({ experience: updatedExperiences })
    setCurrentIndex(updatedExperiences.length - 1)
  }

  const handleRemoveExperience = (index: number) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index)
    setExperiences(updatedExperiences)
    onChange({ experience: updatedExperiences })

    if (currentIndex === index) {
      setCurrentIndex(null)
    } else if (currentIndex !== null && currentIndex > index) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleMoveUp = (index: number) => {
    if (index === 0) return

    const updatedExperiences = [...experiences]
    const temp = updatedExperiences[index]
    updatedExperiences[index] = updatedExperiences[index - 1]
    updatedExperiences[index - 1] = temp

    setExperiences(updatedExperiences)
    onChange({ experience: updatedExperiences })

    if (currentIndex === index) {
      setCurrentIndex(index - 1)
    } else if (currentIndex === index - 1) {
      setCurrentIndex(index)
    }
  }

  const handleMoveDown = (index: number) => {
    if (index === experiences.length - 1) return

    const updatedExperiences = [...experiences]
    const temp = updatedExperiences[index]
    updatedExperiences[index] = updatedExperiences[index + 1]
    updatedExperiences[index + 1] = temp

    setExperiences(updatedExperiences)
    onChange({ experience: updatedExperiences })

    if (currentIndex === index) {
      setCurrentIndex(index + 1)
    } else if (currentIndex === index + 1) {
      setCurrentIndex(index)
    }
  }

  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedExperiences = [...experiences]
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]: value,
    }

    setExperiences(updatedExperiences)
    onChange({ experience: updatedExperiences })
  }

  const handleGenerateDescription = async () => {
    if (currentIndex === null) return

    try {
      const generatedExperience = await generateExperience()

      if (generatedExperience) {
        const updatedExperiences = [...experiences]
        updatedExperiences[currentIndex] = {
          ...updatedExperiences[currentIndex],
          description: generatedExperience,
        }

        setExperiences(updatedExperiences)
        onChange({ experience: updatedExperiences })

        toast({
          title: "Experience enhanced",
          description: "Your experience description has been enhanced with AI.",
        })
      }
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "There was an error enhancing your experience.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-4">Work Experience</h2>
        <p className="text-muted-foreground mb-6">Add your relevant work experience, starting with the most recent.</p>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <Card key={index} className={`border ${currentIndex === index ? "border-primary" : ""}`}>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Experience {index + 1}</h3>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" onClick={() => handleMoveUp(index)} disabled={index === 0}>
                    <MoveUp className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleMoveDown(index)}
                    disabled={index === experiences.length - 1}
                  >
                    <MoveDown className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => setCurrentIndex(index)}>
                    <Sparkles className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleRemoveExperience(index)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor={`company-${index}`}>Company</Label>
                  <Input
                    id={`company-${index}`}
                    value={exp.company}
                    onChange={(e) => handleInputChange(index, "company", e.target.value)}
                    placeholder="e.g., Acme Corporation"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`position-${index}`}>Position</Label>
                  <Input
                    id={`position-${index}`}
                    value={exp.position}
                    onChange={(e) => handleInputChange(index, "position", e.target.value)}
                    placeholder="e.g., Software Engineer"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <Label htmlFor={`date-${index}`}>Date Range</Label>
                <Input
                  id={`date-${index}`}
                  value={exp.date}
                  onChange={(e) => handleInputChange(index, "date", e.target.value)}
                  placeholder="e.g., Jan 2020 - Present"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`description-${index}`}>Description</Label>
                <Textarea
                  id={`description-${index}`}
                  value={exp.description}
                  onChange={(e) => handleInputChange(index, "description", e.target.value)}
                  placeholder="Describe your responsibilities and achievements..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex gap-4">
        <Button variant="outline" className="w-full" onClick={handleAddExperience}>
          <Plus className="mr-2 h-4 w-4" />
          Add Experience
        </Button>

        <Button
          variant="outline"
          className="w-full"
          onClick={handleGenerateDescription}
          disabled={isLoading || currentIndex === null}
        >
          <Sparkles className="mr-2 h-4 w-4" />
          {isLoading ? "Enhancing..." : "Enhance Selected"}
        </Button>
      </div>

      <div className="bg-muted/30 p-4 rounded-md">
        <h3 className="font-medium mb-2">Tips for Work Experience</h3>
        <ul className="text-sm space-y-1 list-disc pl-4">
          <li>Focus on achievements rather than just responsibilities</li>
          <li>Use action verbs (Developed, Led, Implemented)</li>
          <li>Include metrics and results where possible</li>
          <li>Tailor descriptions to match your target job</li>
        </ul>
      </div>
    </div>
  )
}

