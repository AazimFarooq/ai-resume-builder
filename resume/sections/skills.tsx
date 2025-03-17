"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, X, Plus } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useResumeGeneration } from "@/hooks/ai/useResumeGeneration"

interface SkillsSectionProps {
  data: any
  onChange: (data: any) => void
}

export function SkillsSection({ data, onChange }: SkillsSectionProps) {
  const { toast } = useToast()
  const [skills, setSkills] = useState<string[]>(data.skills || [])
  const [newSkill, setNewSkill] = useState("")

  const { generateSkills, isLoading } = useResumeGeneration({
    jobTitle: data.targetJob || "",
    targetJob: data.targetJob || "",
    skills: skills,
  })

  const handleAddSkill = () => {
    if (!newSkill.trim()) return

    if (skills.includes(newSkill.trim())) {
      toast({
        title: "Duplicate skill",
        description: "This skill is already in your list.",
        variant: "destructive",
      })
      return
    }

    const updatedSkills = [...skills, newSkill.trim()]
    setSkills(updatedSkills)
    onChange({ skills: updatedSkills })
    setNewSkill("")
  }

  const handleRemoveSkill = (index: number) => {
    const updatedSkills = skills.filter((_, i) => i !== index)
    setSkills(updatedSkills)
    onChange({ skills: updatedSkills })
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddSkill()
    }
  }

  const handleGenerateSkills = async () => {
    try {
      const generatedSkills = await generateSkills()

      if (generatedSkills) {
        // Parse the generated skills - assuming they come as a comma-separated list
        const skillsArray = generatedSkills
          .split(/,|\n/)
          .map((skill) => skill.trim())
          .filter((skill) => skill.length > 0)

        // Remove duplicates
        const uniqueSkills = [...new Set([...skills, ...skillsArray])]

        setSkills(uniqueSkills)
        onChange({ skills: uniqueSkills })

        toast({
          title: "Skills generated",
          description: "Your skills have been enhanced with AI suggestions.",
        })
      }
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "There was an error generating skills.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-4">Skills</h2>
        <p className="text-muted-foreground mb-6">Add relevant skills for your target position.</p>
      </div>

      <div className="space-y-4">
        <div className="flex gap-2">
          <Input
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a skill (e.g., JavaScript, Project Management)"
          />
          <Button onClick={handleAddSkill}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 min-h-[100px] p-4 border rounded-md">
          {skills.length === 0 ? (
            <p className="text-muted-foreground text-sm">No skills added yet. Add skills or use AI to generate them.</p>
          ) : (
            skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="px-2 py-1 text-sm">
                {skill}
                <button
                  className="ml-2 text-muted-foreground hover:text-foreground"
                  onClick={() => handleRemoveSkill(index)}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))
          )}
        </div>
      </div>

      <Button variant="outline" className="w-full" onClick={handleGenerateSkills} disabled={isLoading}>
        <Sparkles className="mr-2 h-4 w-4" />
        {isLoading ? "Generating..." : "Generate Relevant Skills with AI"}
      </Button>

      <div className="bg-muted/30 p-4 rounded-md">
        <h3 className="font-medium mb-2">Tips for Skills Section</h3>
        <ul className="text-sm space-y-1 list-disc pl-4">
          <li>Include a mix of technical and soft skills</li>
          <li>Prioritize skills mentioned in the job description</li>
          <li>Be specific (e.g., "React.js" instead of just "JavaScript")</li>
          <li>Only include skills you're comfortable discussing in an interview</li>
        </ul>
      </div>
    </div>
  )
}

