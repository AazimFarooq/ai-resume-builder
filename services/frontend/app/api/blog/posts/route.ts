import { NextResponse } from "next/server"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  slug: string
  date: string
  author: string
  tags: string[]
  views: number
  likes: number
  image?: string
}

// Fallback data for static rendering
const fallbackPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Create a Standout Resume",
    excerpt: "Learn the key elements that make your resume stand out to recruiters and hiring managers.",
    slug: "how-to-create-standout-resume",
    date: new Date().toISOString(),
    author: "Resume Expert",
    tags: ["Resume Tips", "Job Search"],
    views: 1250,
    likes: 87,
    image: "/placeholder.svg?height=200&width=400",
  },
]

export async function GET() {
  try {
    // In a real implementation, this would fetch from the blog service via the API Gateway
    // For now, we'll use the fallback data
    return NextResponse.json({
      posts: fallbackPosts,
      pagination: {
        total: fallbackPosts.length,
        pages: 1,
        page: 1,
        limit: 10,
      },
    })
  } catch (error) {
    console.error("Error in blog posts API route:", error)
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 })
  }
}

