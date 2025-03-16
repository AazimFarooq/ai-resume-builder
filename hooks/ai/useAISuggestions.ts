"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

interface UseAISuggestionsProps {
  content: string
  targetJob?: string
}

interface UseAISuggestionsReturn {
  getSuggestions: () => Promise<string[] | null>
  getKeywordAnalysis: () => Promise<{
    missing: string[]
    present: string[]
    score: number
  } | null>
  isLoading: boolean
  error: string | null
}

export function useAISuggestions({ content, targetJob }: UseAISuggestionsProps): UseAISuggestionsReturn {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  const getSuggestions = async (): Promise<string[] | null> => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/ai/suggestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          targetJob,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get suggestions")
      }

      const data = await response.json()
      return data.suggestions
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred"
      setError(errorMessage)
      toast({
        title: "Suggestion generation failed",
        description: errorMessage,
        variant: "destructive",
      })
      return null
    } finally {
      setIsLoading(false)
    }
  }

  const getKeywordAnalysis = async (): Promise<{
    missing: string[]
    present: string[]
    score: number
  } | null> => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/ai/keywords", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          targetJob,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to analyze keywords")
      }

      const data = await response.json()
      return data
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred"
      setError(errorMessage)
      toast({
        title: "Keyword analysis failed",
        description: errorMessage,
        variant: "destructive",
      })
      return null
    } finally {
      setIsLoading(false)
    }
  }

  return {
    getSuggestions,
    getKeywordAnalysis,
    isLoading,
    error,
  }
}

