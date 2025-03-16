"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

interface UseResumeGenerationProps {
  jobTitle: string
  targetJob?: string
  skills?: string[]
  education?: string
  experience?: string
}

interface UseResumeGenerationReturn {
  generateSummary: () => Promise<string | null>
  generateExperience: () => Promise<string | null>
  generateSkills: () => Promise<string | null>
  generateEducation: () => Promise<string | null>
  isLoading: boolean
  error: string | null
}

export function useResumeGeneration({
  jobTitle,
  targetJob,
  skills,
  education,
  experience,
}: UseResumeGenerationProps): UseResumeGenerationReturn {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  const generateContent = async (section: string): Promise<string | null> => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/ai/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobTitle,
          targetJob,
          skills,
          education,
          experience,
          section,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate content")
      }

      const data = await response.json()
      return data.content
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred"
      setError(errorMessage)
      toast({
        title: "Generation failed",
        description: errorMessage,
        variant: "destructive",
      })
      return null
    } finally {
      setIsLoading(false)
    }
  }

  const generateSummary = async (): Promise<string | null> => {
    return generateContent("summary")
  }

  const generateExperience = async (): Promise<string | null> => {
    return generateContent("experience")
  }

  const generateSkills = async (): Promise<string | null> => {
    return generateContent("skills")
  }

  const generateEducation = async (): Promise<string | null> => {
    return generateContent("education")
  }

  return {
    generateSummary,
    generateExperience,
    generateSkills,
    generateEducation,
    isLoading,
    error,
  }
}

