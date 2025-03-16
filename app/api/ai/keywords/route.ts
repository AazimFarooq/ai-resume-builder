import { NextResponse } from "next/server"
import { analyzeKeywords } from "@/lib/ai/suggestionEngine"

export async function POST(request: Request) {
  try {
    // In a real app, we would check authentication here
    const body = await request.json()

    // Simple validation
    if (!body.content || !body.targetJob) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const { content, targetJob } = body

    // Analyze keywords
    const analysis = await analyzeKeywords({
      content,
      targetJob,
    })

    return NextResponse.json(analysis)
  } catch (error) {
    console.error("AI keyword analysis error:", error)
    return NextResponse.json({ error: "Failed to analyze keywords" }, { status: 500 })
  }
}

