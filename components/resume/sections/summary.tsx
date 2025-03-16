"use client"

import type React from "react"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useResumeGeneration } from "@/hooks/ai/useResumeGeneration"

interface SummarySectionProps {
  data: any
  onChange: (data: any) => void
}

export function SummarySection({ data, onChange }: SummarySectionProps) {
  const { toast } = useToast()
  const [summary, setSummary] = useState(data.summary || "")

  const { generateSummary, isLoading } = useResumeGeneration({
    jobTitle: data.targetJob || "",
    skills: data.skills || [],
    experience: data.experience?.map((exp) => `${exp.position} at ${exp.company}: ${exp.description}`).join(". ") || "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSummary(e.target.value)
    onChange({ summary: e.target.value })
  }

  const handleGenerateSummary = async () => {
    try {
      const generatedSummary = await generateSummary()

      if (generatedSummary) {
        setSummary(generatedSummary)
        onChange({ summary: generatedSummary })

        toast({
          title: "Summary generated",
          description: "Your professional summary has been generated successfully.",
        })
      }
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "There was an error generating your summary.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-4">Professional Summary</h2>
        <p className="text-muted-foreground mb-6">
          A compelling summary that highlights your key qualifications and career goals.
        </p>
      </div>

      <div className="space-y-2">
        <Textarea
          value={summary}
          onChange={handleInputChange}
          placeholder="Write a brief summary of your professional background and key qualifications..."
          rows={6}
        />
        <p className="text-xs text-muted-foreground">
          Aim for 3-5 sentences that highlight your experience, skills, and career goals.
        </p>
      </div>

      <Button variant="outline" className="w-full" onClick={handleGenerateSummary} disabled={isLoading}>
        <Sparkles className="mr-2 h-4 w-4" />
        {isLoading ? "Generating..." : "Generate AI Summary"}
      </Button>

      <div className="bg-muted/30 p-4 rounded-md">
        <h3 className="font-medium mb-2">Tips for a Great Summary</h3>
        <ul className="text-sm space-y-1 list-disc pl-4">
          <li>Keep it concise (3-5 sentences)</li>
          <li>Highlight your years of experience and key skills</li>
          <li>Mention your biggest achievements</li>
          <li>Tailor it to your target job</li>
          <li>Avoid first-person pronouns (I, me, my)</li>
        </ul>
      </div>
    </div>
  )
}

