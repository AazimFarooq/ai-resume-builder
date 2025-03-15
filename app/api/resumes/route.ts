import { NextResponse } from "next/server"

// In-memory array for storing resumes
const resumes = [
  {
    id: "1",
    title: "Software Engineer Resume",
    jobTitle: "Software Engineer",
    skills: ["JavaScript", "React", "Node.js"],
    education: { text: "Bachelor's in Computer Science" },
    experience: { text: "5 years of web development experience" },
    content: "Experienced software engineer with a focus on web technologies...",
    userId: "user1",
    templateId: "template1",
    createdAt: "2024-03-01T12:00:00Z",
    updatedAt: "2024-03-01T12:00:00Z",
  },
]

export async function POST(request) {
  try {
    // In a real app, you would check authentication here
    const userId = "user1" // Mock user ID

    const body = await request.json()

    // Simple validation
    if (!body.jobTitle || !body.skills || !body.education || !body.experience || !body.templateId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const { jobTitle, skills, education, experience, templateId, targetJob } = body

    // Generate resume content (in a real app, this would use AI)
    const content = `
# ${jobTitle} Resume

## Summary
Experienced professional with expertise in ${skills.join(", ")}.

## Education
${education}

## Experience
${experience}

## Skills
${skills.join(", ")}
    `

    // Create resume
    const resume = {
      id: Date.now().toString(),
      title: `${jobTitle} Resume`,
      jobTitle,
      skills,
      education: { text: education },
      experience: { text: experience },
      content,
      userId,
      templateId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    // Add to resumes array
    resumes.push(resume)

    return NextResponse.json(
      {
        resumeId: resume.id,
        message: "Resume created successfully",
        content,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creating resume:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request) {
  try {
    // In a real app, you would check authentication here
    const userId = "user1" // Mock user ID

    // Get query parameters
    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const search = searchParams.get("search") || ""

    // Filter resumes by user ID and search term
    let filteredResumes = resumes.filter((resume) => resume.userId === userId)

    if (search) {
      filteredResumes = filteredResumes.filter(
        (resume) =>
          resume.title.toLowerCase().includes(search.toLowerCase()) ||
          resume.jobTitle.toLowerCase().includes(search.toLowerCase()),
      )
    }

    // Calculate pagination
    const total = filteredResumes.length
    const start = (page - 1) * limit
    const end = start + limit
    const paginatedResumes = filteredResumes.slice(start, end)

    return NextResponse.json({
      resumes: paginatedResumes,
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        page,
        limit,
      },
    })
  } catch (error) {
    console.error("Error fetching resumes:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

