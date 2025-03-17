import { NextResponse } from "next/server"
import { generateSuggestions } from "@/lib/ai/suggestionEngine"

export async function POST(request: Request) {
  try {
    // In a real app, we would check authentication here
    const body = await request.json()

    // Simple validation
    if (!body.content) {
      return NextResponse.json({ error: "Missing required content" }, { status: 400 })
    }

    const { content, targetJob, section } = body

    // Generate suggestions
    const suggestions = await generateSuggestions({
      content,
      targetJob,
      section,
    })

    return NextResponse.json({ suggestions })
  } catch (error) {
    console.error("AI suggestion error:", error)
    return NextResponse.json({ error: "Failed to generate suggestions" }, { status: 500 })
  }
}

