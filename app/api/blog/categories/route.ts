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
    category: "Resume Tips",
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
    category: "Interview Prep",
    views: 982,
    likes: 67,
    featured: false,
  },
]

// GET - Fetch all categories with post counts
export async function GET(request: Request) {
  try {
    // Count occurrences of each category
    const categoryCounts = {}

    posts.forEach((post) => {
      if (post.category) {
        categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1
      }
    })

    // Format the response
    const formattedCategories = Object.entries(categoryCounts).map(([name, count]) => ({
      name,
      count,
    }))

    // Sort by count (descending)
    formattedCategories.sort((a, b) => b.count - a.count)

    return NextResponse.json(formattedCategories)
  } catch (error) {
    console.error("Error fetching categories:", error)
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 })
  }
}

