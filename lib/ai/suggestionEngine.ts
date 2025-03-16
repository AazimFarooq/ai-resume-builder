import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

interface SuggestionParams {
  content: string
  targetJob?: string
  section?: string
}

export async function generateSuggestions({
  content,
  targetJob,
  section = "general",
}: SuggestionParams): Promise<string[]> {
  let prompt = ""

  switch (section) {
    case "summary":
      prompt = `Analyze the following professional summary for a resume${targetJob ? ` targeting a ${targetJob} position` : ""}:
      
      "${content}"
      
      Provide 3-5 specific suggestions to improve this summary. Focus on making it more impactful, achievement-oriented, and tailored to the job. Format each suggestion as a separate point.`
      break

    case "experience":
      prompt = `Analyze the following work experience description for a resume${targetJob ? ` targeting a ${targetJob} position` : ""}:
      
      "${content}"
      
      Provide 3-5 specific suggestions to improve this experience description. Focus on quantifiable achievements, action verbs, and relevance to the target job. Format each suggestion as a separate point.`
      break

    case "skills":
      prompt = `Analyze the following skills for a resume${targetJob ? ` targeting a ${targetJob} position` : ""}:
      
      "${content}"
      
      Provide 3-5 specific suggestions for additional skills that would strengthen this resume. Consider both technical and soft skills relevant to the position. Format each suggestion as a separate point.`
      break

    default:
      prompt = `Analyze the following resume content${targetJob ? ` for a ${targetJob} position` : ""}:
      
      "${content}"
      
      Provide 3-5 specific suggestions to improve this content. Focus on making it more impactful, achievement-oriented, and tailored to the job. Format each suggestion as a separate point.`
  }

  const { text } = await generateText({
    model: openai("gpt-4o"),
    prompt,
  })

  // Parse the suggestions into an array
  const suggestions = text
    .split(/\d+\.|\n-|\n•/)
    .map((suggestion) => suggestion.trim())
    .filter((suggestion) => suggestion.length > 0)

  return suggestions
}

export async function analyzeKeywords({ content, targetJob }: SuggestionParams): Promise<{
  missing: string[]
  present: string[]
  score: number
}> {
  if (!targetJob) {
    throw new Error("Target job is required for keyword analysis")
  }

  const prompt = `You are an ATS (Applicant Tracking System) expert. Analyze the following resume content for a ${targetJob} position:
  
  "${content}"
  
  First, identify the top 10-15 keywords that are most important for a ${targetJob} position.
  Then, determine which of these keywords are present in the resume content and which are missing.
  Finally, provide an ATS match score as a percentage (0-100).
  
  Format your response as a JSON object with three properties:
  1. "missing": An array of important keywords missing from the resume
  2. "present": An array of important keywords found in the resume
  3. "score": The ATS match score as a number (0-100)
  
  Return only the JSON object, nothing else.`

  const { text } = await generateText({
    model: openai("gpt-4o"),
    prompt,
  })

  try {
    // Parse the JSON response
    const result = JSON.parse(text)
    return {
      missing: result.missing || [],
      present: result.present || [],
      score: result.score || 0,
    }
  } catch (error) {
    console.error("Error parsing keyword analysis result:", error)
    throw new Error("Failed to parse keyword analysis result")
  }
}

