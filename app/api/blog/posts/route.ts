import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

// In-memory array for storing posts
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

// GET - Fetch blog posts with filtering, pagination, and search
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")
    const category = searchParams.get("category")
    const tag = searchParams.get("tag")
    const page = Number(searchParams.get("page") || "1")
    const limit = Number(searchParams.get("limit") || "10")
    const featured = searchParams.get("featured") === "true"

    // Filter posts based on query parameters
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

    if (category) {
      filteredPosts = filteredPosts.filter((post) => post.category === category)
    }

    if (tag) {
      filteredPosts = filteredPosts.filter((post) => post.tags.includes(tag))
    }

    if (featured) {
      filteredPosts = filteredPosts.filter((post) => post.featured)
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
    console.error("Error fetching blog posts:", error)
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 })
  }
}

// POST - Create a new blog post
export async function POST(request) {
  try {
    const body = await request.json()

    // Simple validation
    if (!body.title || !body.content || !body.excerpt) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Generate slug from title
    const slug = body.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")

    // Check if slug already exists
    const existingPost = posts.find((post) => post.slug === slug)

    // If slug exists, append a unique identifier
    const finalSlug = existingPost ? `${slug}-${Date.now().toString().slice(-6)}` : slug

    // Create the blog post
    const newPost = {
      id: Date.now().toString(),
      slug: finalSlug,
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
      image: body.image || "/placeholder.svg?height=400&width=800",
      date: new Date().toISOString(),
      author: body.author || "Anonymous",
      tags: body.tags || [],
      views: 0,
      likes: 0,
      featured: body.featured || false,
      category: body.category || "Uncategorized",
    }

    // Add to posts array
    posts.push(newPost)

    // Revalidate the blog pages
    revalidatePath("/blog")
    revalidatePath(`/blog/${finalSlug}`)

    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
    console.error("Error creating blog post:", error)
    return NextResponse.json({ error: "Failed to create blog post" }, { status: 500 })
  }
}

