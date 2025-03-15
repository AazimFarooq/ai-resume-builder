import { NextResponse } from "next/server"

// Reference to the posts array (in a real app, this would be a database)
import { posts } from "@/lib/blog-data"

// GET - Fetch all unique tags with counts
export async function GET() {
  try {
    // Count occurrences of each tag
    const tagCounts: Record<string, number> = {}

    posts.forEach((post) => {
      post.tags.forEach((tag) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1
      })
    })

    // Convert to array of objects
    const tags = Object.entries(tagCounts).map(([name, count]) => ({
      name,
      count,
    }))

    // Sort by count (descending)
    tags.sort((a, b) => b.count - a.count)

    return NextResponse.json(tags)
  } catch (error) {
    console.error("Error fetching tags:", error)
    return NextResponse.json({ error: "Failed to fetch tags" }, { status: 500 })
  }
}

