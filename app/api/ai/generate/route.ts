import { NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(request: Request) {
  try {
    // In a real app, we would check authentication here

    const body = await request.json()

    // Simple validation
    if (!body.jobTitle || !body.section) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const { jobTitle, skills, education, experience, targetJob, section } = body

    // Build prompt based on section
    let prompt = ""

    switch (section) {
      case "summary":
        prompt = `Write a professional summary for a ${jobTitle} resume.
        ${targetJob ? `The target job is: ${targetJob}.` : ""}
        ${experience ? `Experience: ${experience}` : ""}
        ${skills ? `Skills: ${skills.join(", ")}` : ""}
        Keep it concise, professional, and highlight key strengths.`
        break

      case "experience":
        prompt = `Rewrite the following experience for a ${jobTitle} resume in a professional, achievement-focused way:
        ${experience}
        ${targetJob ? `The target job is: ${targetJob}.` : ""}
        Use bullet points and focus on accomplishments with metrics where possible.`
        break

      case "skills":
        prompt = `Organize and format the following skills for a ${jobTitle} resume:
        ${skills ? skills.join(", ") : ""}
        ${targetJob ? `The target job is: ${targetJob}.` : ""}
        Group them by category if appropriate and format them professionally.`
        break

      case "education":
        prompt = `Format the following education information for a ${jobTitle} resume:
        ${education}
        Make it clear, professional, and properly formatted.`
        break

      case "full":
        prompt = `Create a professional resume for a ${jobTitle} with the following information:
        ${experience ? `Experience: ${experience}` : ""}
        ${skills ? `Skills: ${skills.join(", ")}` : ""}
        ${education ? `Education: ${education}` : ""}
        ${targetJob ? `Target job: ${targetJob}` : ""}
        Format the resume in a professional way with clear sections for summary, experience, skills, and education.`
        break
    }

    // Generate content with AI
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
    })

    return NextResponse.json({ content: text })
  } catch (error) {
    console.error("AI generation error:", error)
    return NextResponse.json({ error: "Failed to generate content" }, { status: 500 })
  }
}
