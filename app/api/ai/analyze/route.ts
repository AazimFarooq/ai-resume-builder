import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { z } from "zod"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

// Schema for resume analysis request
const analyzeResumeSchema = z.object({
  resumeId: z.string().optional(),
  content: z.object({}).passthrough().optional(),
  jobDescription: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json({ status: "error", message: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()

    // Validate request body
    const validatedData = analyzeResumeSchema.safeParse(body)

    if (!validatedData.success) {
      return NextResponse.json(
        {
          status: "error",
          message: "Invalid request data",
          errors: validatedData.error.flatten().fieldErrors,
        },
        { status: 400 },
      )
    }

    let resumeContent = validatedData.data.content

    // If resumeId is provided, fetch the resume content
    if (validatedData.data.resumeId && !resumeContent) {
      const resume = await db.resume.findUnique({
        where: {
          id: validatedData.data.resumeId,
          userId: session.user.id,
        },
      })

      if (!resume) {
        return NextResponse.json({ status: "error", message: "Resume not found" }, { status: 404 })
      }

      resumeContent = resume.content
    }

    if (!resumeContent) {
      return NextResponse.json({ status: "error", message: "Resume content is required" }, { status: 400 })
    }

    // Prepare the prompt for AI analysis
    const prompt = `
      Analyze the following resume content:
      ${JSON.stringify(resumeContent)}
      
      ${validatedData.data.jobDescription ? `Compare it with this job description: ${validatedData.data.jobDescription}` : ""}
      
      Provide a detailed analysis including:
      1. Overall score (0-100)
      2. Content quality assessment
      3. ATS compatibility score
      4. Keyword optimization analysis
      5. Format and structure evaluation
      6. Grammar and spelling check
      7. Specific improvement suggestions
      
      Format the response as a JSON object with these fields.
    `

    // Call OpenAI for analysis
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
      temperature: 0.3,
      maxTokens: 1500,
    })

    // Parse the AI response
    let analysisResult
    try {
      analysisResult = JSON.parse(text)
    } catch (e) {
      console.error("Error parsing AI response:", e)
      analysisResult = { rawResponse: text }
    }

    // Save the analysis result
    const analysis = await db.resumeAnalysis.create({
      data: {
        userId: session.user.id,
        resumeId: validatedData.data.resumeId,
        result: analysisResult,
        jobDescription: validatedData.data.jobDescription,
      },
    })

    return NextResponse.json({
      status: "success",
      data: {
        analysisId: analysis.id,
        result: analysisResult,
      },
    })
  } catch (error) {
    console.error("Error analyzing resume:", error)
    return NextResponse.json({ status: "error", message: "Failed to analyze resume" }, { status: 500 })
  }
}

