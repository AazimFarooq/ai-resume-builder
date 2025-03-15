import { NextResponse } from "next/server"

// Reference to the posts array (in a real app, this would be a database)
const posts = [
  {
    id: "1",
    slug: "effective-resume-writing",
    title: "10 Tips for Effective Resume Writing",
    excerpt: "Learn how to create a resume that stands out and gets you noticed by employers.",
    content: "Your resume should be clear and concise. Aim for 1-2 pages maximum...",
    image: "/placeholder.svg?height=400&width=800",
    date: "2024-03-01",
    author: "Jane Smith",
    tags: ["Resume Tips", "Career Advice"],
    views: 1245,
    likes: 89,
    featured: true,
  },
  {
    id: "2",
    slug: "interview-preparation",
    title: "How to Prepare for Job Interviews",
    excerpt: "Master the art of interviewing with these essential tips and techniques.",
    content: "Always research the company before your interview...",
    image: "/placeholder.svg?height=400&width=800",
    date: "2024-02-15",
    author: "John Doe",
    tags: ["Interview Prep", "Career Advice"],
    views: 982,
    likes: 67,
    featured: false,
  },
]

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")
    const tag = searchParams.get("tag")
    const page = Number(searchParams.get("page") || "1")
    const limit = Number(searchParams.get("limit") || "10")

    if (!query && !tag) {
      return NextResponse.json({ error: "Missing search parameters" }, { status: 400 })
    }

    // Filter posts based on search parameters
    let filteredPosts = [...posts]

    if (query) {
      const lowerQuery = query.toLowerCase()
      filteredPosts = filteredPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(lowerQuery) ||
          post.content.toLowerCase().includes(lowerQuery) ||
          post.excerpt.toLowerCase().includes(lowerQuery),
      )
    }

    if (tag) {
      filteredPosts = filteredPosts.filter((post) => post.tags.includes(tag))
    }

    // Calculate pagination
    const total = filteredPosts.length
    const start = (page - 1) * limit
    const end = start + limit
    const paginatedPosts = filteredPosts.slice(start, end)

    return NextResponse.json({
      posts: paginatedPosts,
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        page,
        limit,
      },
    })
  } catch (error) {
    console.error("Search error:", error)
    return NextResponse.json({ error: "Failed to perform search" }, { status: 500 })
  }
}

