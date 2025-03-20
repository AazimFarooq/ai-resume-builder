import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { fetchJobs } from "@/lib/job-api"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json({ status: "error", message: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const query = searchParams.get("query") || ""
    const location = searchParams.get("location") || ""
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")

    // Get user's resume data for job matching
    const userResumes = await db.resume.findMany({
      where: { userId: session.user.id },
      orderBy: { updatedAt: "desc" },
      take: 1,
    })

    const userSkills = userResumes.length > 0 ? extractSkills(userResumes[0].content) : []

    // Fetch jobs from external API
    const jobsData = await fetchJobs({
      query,
      location,
      page,
      limit,
    })

    // Calculate match score for each job
    const jobsWithMatchScore = jobsData.jobs.map((job) => {
      const matchScore = calculateMatchScore(job, userSkills)
      return {
        ...job,
        matchScore,
      }
    })

    // Sort by match score if no specific query
    const sortedJobs = query ? jobsWithMatchScore : jobsWithMatchScore.sort((a, b) => b.matchScore - a.matchScore)

    return NextResponse.json({
      status: "success",
      data: sortedJobs,
      meta: {
        total: jobsData.total,
        page,
        limit,
        pages: Math.ceil(jobsData.total / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching jobs:", error)
    return NextResponse.json({ status: "error", message: "Failed to fetch jobs" }, { status: 500 })
  }
}

// Helper function to extract skills from resume content
function extractSkills(content: any) {
  // Implementation would depend on the resume content structure
  // This is a simplified example
  if (content.skills && Array.isArray(content.skills)) {
    return content.skills
  }
  return []
}

// Helper function to calculate match score between job and user skills
function calculateMatchScore(job: any, userSkills: string[]) {
  if (!userSkills.length) return 50 // Default score if no skills

  // This is a simplified scoring algorithm
  // A real implementation would be more sophisticated
  let matchCount = 0
  const jobSkills = extractJobSkills(job.description)

  userSkills.forEach((skill) => {
    if (
      jobSkills.some(
        (jobSkill) =>
          jobSkill.toLowerCase().includes(skill.toLowerCase()) || skill.toLowerCase().includes(jobSkill.toLowerCase()),
      )
    ) {
      matchCount++
    }
  })

  // Calculate percentage match
  const matchPercentage = userSkills.length > 0 ? Math.min(100, Math.round((matchCount / userSkills.length) * 100)) : 50

  return matchPercentage
}

// Helper function to extract skills from job description
function extractJobSkills(description: string) {
  // This is a simplified implementation
  // A real implementation would use NLP or a predefined skills database
  const commonTechSkills = [
    "javascript",
    "react",
    "node",
    "python",
    "java",
    "c#",
    "typescript",
    "html",
    "css",
    "sql",
    "nosql",
    "mongodb",
    "aws",
    "azure",
    "docker",
    "kubernetes",
    "ci/cd",
    "agile",
    "scrum",
    "git",
  ]

  return commonTechSkills.filter((skill) => description.toLowerCase().includes(skill.toLowerCase()))
}

