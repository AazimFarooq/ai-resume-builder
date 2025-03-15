import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

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

// GET - Fetch a single blog post by slug
export async function GET(request, { params }) {
  try {
    const slug = params.slug

    // Find the post
    const post = posts.find((p) => p.slug === slug)

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }

    // Increment view count (in a real app, this would be a database update)
    post.views += 1

    return NextResponse.json(post)
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return NextResponse.json({ error: "Failed to fetch blog post" }, { status: 500 })
  }
}

// PATCH - Update a blog post
export async function PATCH(request, { params }) {
  try {
    const slug = params.slug

    // Find the post
    const postIndex = posts.findIndex((p) => p.slug === slug)

    if (postIndex === -1) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }

    // Get update data
    const body = await request.json()

    // Update the post
    const updatedPost = {
      ...posts[postIndex],
      ...body,
    }

    posts[postIndex] = updatedPost

    // Revalidate the blog pages
    revalidatePath("/blog")
    revalidatePath(`/blog/${slug}`)

    return NextResponse.json(updatedPost)
  } catch (error) {
    console.error("Error updating blog post:", error)
    return NextResponse.json({ error: "Failed to update blog post" }, { status: 500 })
  }
}

// DELETE - Delete a blog post
export async function DELETE(request, { params }) {
  try {
    const slug = params.slug

    // Find the post
    const postIndex = posts.findIndex((p) => p.slug === slug)

    if (postIndex === -1) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }

    // Delete the post
    posts.splice(postIndex, 1)

    // Revalidate the blog pages
    revalidatePath("/blog")

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting blog post:", error)
    return NextResponse.json({ error: "Failed to delete blog post" }, { status: 500 })
  }
}

