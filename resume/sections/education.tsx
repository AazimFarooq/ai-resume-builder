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

interface EducationSectionProps {
  data: any
  onChange: (data: any) => void
}

export function EducationSection({ data, onChange }: EducationSectionProps) {
  const { toast } = useToast()
  const [educations, setEducations] = useState(data.education || [])
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)

  const { generateEducation, isLoading } = useResumeGeneration({
    jobTitle: data.targetJob || "",
    education:
      currentIndex !== null
        ? `${educations[currentIndex]?.institution}, ${educations[currentIndex]?.degree}, ${educations[currentIndex]?.date}`
        : "",
  })

  const handleAddEducation = () => {
    const newEducation = {
      institution: "",
      degree: "",
      date: "",
      description: "",
    }

    const updatedEducations = [...educations, newEducation]
    setEducations(updatedEducations)
    onChange({ education: updatedEducations })
    setCurrentIndex(updatedEducations.length - 1)
  }

  const handleRemoveEducation = (index: number) => {
    const updatedEducations = educations.filter((_, i) => i !== index)
    setEducations(updatedEducations)
    onChange({ education: updatedEducations })

    if (currentIndex === index) {
      setCurrentIndex(null)
    } else if (currentIndex !== null && currentIndex > index) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleMoveUp = (index: number) => {
    if (index === 0) return

    const updatedEducations = [...educations]
    const temp = updatedEducations[index]
    updatedEducations[index] = updatedEducations[index - 1]
    updatedEducations[index - 1] = temp

    setEducations(updatedEducations)
    onChange({ education: updatedEducations })

    if (currentIndex === index) {
      setCurrentIndex(index - 1)
    } else if (currentIndex === index - 1) {
      setCurrentIndex(index)
    }
  }

  const handleMoveDown = (index: number) => {
    if (index === educations.length - 1) return

    const updatedEducations = [...educations]
    const temp = updatedEducations[index]
    updatedEducations[index] = updatedEducations[index + 1]
    updatedEducations[index + 1] = temp

    setEducations(updatedEducations)
    onChange({ education: updatedEducations })

    if (currentIndex === index) {
      setCurrentIndex(index + 1)
    } else if (currentIndex === index + 1) {
      setCurrentIndex(index)
    }
  }

  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedEducations = [...educations]
    updatedEducations[index] = {
      ...updatedEducations[index],
      [field]: value,
    }

    setEducations(updatedEducations)
    onChange({ education: updatedEducations })
  }

  const handleGenerateDescription = async () => {
    if (currentIndex === null) return

    try {
      const generatedEducation = await generateEducation()

      if (generatedEducation) {
        const updatedEducations = [...educations]
        updatedEducations[currentIndex] = {
          ...updatedEducations[currentIndex],
          description: generatedEducation,
        }

        setEducations(updatedEducations)
        onChange({ education: updatedEducations })

        toast({
          title: "Education enhanced",
          description: "Your education description has been enhanced with AI.",
        })
      }
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "There was an error enhancing your education.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-4">Education</h2>
        <p className="text-muted-foreground mb-6">Add your educational background, starting with the most recent.</p>
      </div>

      <div className="space-y-4">
        {educations.map((edu, index) => (
          <Card key={index} className={`border ${currentIndex === index ? "border-primary" : ""}`}>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Education {index + 1}</h3>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" onClick={() => handleMoveUp(index)} disabled={index === 0}>
                    <MoveUp className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleMoveDown(index)}
                    disabled={index === educations.length - 1}
                  >
                    <MoveDown className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => setCurrentIndex(index)}>
                    <Sparkles className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleRemoveEducation(index)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor={`institution-${index}`}>Institution</Label>
                  <Input
                    id={`institution-${index}`}
                    value={edu.institution}
                    onChange={(e) => handleInputChange(index, "institution", e.target.value)}
                    placeholder="e.g., University of California"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`degree-${index}`}>Degree</Label>
                  <Input
                    id={`degree-${index}`}
                    value={edu.degree}
                    onChange={(e) => handleInputChange(index, "degree", e.target.value)}
                    placeholder="e.g., Bachelor of Science in Computer Science"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <Label htmlFor={`date-${index}`}>Date Range</Label>
                <Input
                  id={`date-${index}`}
                  value={edu.date}
                  onChange={(e) => handleInputChange(index, "date", e.target.value)}
                  placeholder="e.g., 2016 - 2020"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`description-${index}`}>Description</Label>
                <Textarea
                  id={`description-${index}`}
                  value={edu.description}
                  onChange={(e) => handleInputChange(index, "description", e.target.value)}
                  placeholder="Describe your achievements, relevant coursework, etc..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex gap-4">
        <Button variant="outline" className="w-full" onClick={handleAddEducation}>
          <Plus className="mr-2 h-4 w-4" />
          Add Education
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
        <h3 className="font-medium mb-2">Tips for Education Section</h3>
        <ul className="text-sm space-y-1 list-disc pl-4">
          <li>List your highest degree first</li>
          <li>Include relevant coursework if you're a recent graduate</li>
          <li>Mention academic achievements, honors, and relevant extracurricular activities</li>
          <li>Only include high school if you don't have higher education</li>
        </ul>
      </div>
    </div>
  )
}

