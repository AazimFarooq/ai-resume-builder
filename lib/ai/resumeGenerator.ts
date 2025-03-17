import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { summaryPrompt, experiencePrompt, skillsPrompt, educationPrompt } from "./prompts"

export interface ResumeGenerationParams {
  jobTitle: string
  targetJob?: string
  skills?: string[]
  education?: string
  experience?: string
}

export async function generateResumeSummary(params: ResumeGenerationParams): Promise<string> {
  const { jobTitle, targetJob, skills, experience } = params

  const prompt = summaryPrompt
    .replace("{{jobTitle}}", jobTitle)
    .replace("{{targetJob}}", targetJob || "")
    .replace("{{experience}}", experience || "")
    .replace("{{skills}}", skills?.join(", ") || "")

  const { text } = await generateText({
    model: openai("gpt-4o"),
    prompt,
  })

  return text
}

export async function generateResumeExperience(params: ResumeGenerationParams): Promise<string> {
  const { jobTitle, targetJob, experience } = params

  const prompt = experiencePrompt
    .replace("{{jobTitle}}", jobTitle)
    .replace("{{targetJob}}", targetJob || "")
    .replace("{{experience}}", experience || "")

  const { text } = await generateText({
    model: openai("gpt-4o"),
    prompt,
  })

  return text
}

export async function generateResumeSkills(params: ResumeGenerationParams): Promise<string> {
  const { jobTitle, targetJob, skills } = params

  const prompt = skillsPrompt
    .replace("{{jobTitle}}", jobTitle)
    .replace("{{targetJob}}", targetJob || "")
    .replace("{{skills}}", skills?.join(", ") || "")

  const { text } = await generateText({
    model: openai("gpt-4o"),
    prompt,
  })

  return text
}

export async function generateResumeEducation(params: ResumeGenerationParams): Promise<string> {
  const { jobTitle, education } = params

  const prompt = educationPrompt.replace("{{jobTitle}}", jobTitle).replace("{{education}}", education || "")

  const { text } = await generateText({
    model: openai("gpt-4o"),
    prompt,
  })

  return text
}

