import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { z } from "zod"

// Sample data - in a real app, this would be a database
const interactions = [
  {
    id: "1",
    postId: "1",
    userId: "user1",
    type: "like",
    createdAt: "2024-03-05T12:00:00Z",
  },
  {
    id: "2",
    postId: "1",
    userId: "user2",
    type: "bookmark",
    createdAt: "2024-03-05T14:30:00Z",
  },
]

// Reference to the posts array (in a real app, this would be a database)
import { posts } from "@/lib/blog-data"

const interactionSchema = z.object({
  postId: z.string().min(1, "Post ID is required"),
  type: z.enum(["like", "bookmark"]),
})

// GET - Fetch user interactions with posts
export async function GET(request: Request) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const postId = searchParams.get("postId")
    const type = searchParams.get("type") as "like" | "bookmark" | null

    // Filter interactions based on query parameters
    let userInteractions = interactions.filter((interaction) => interaction.userId === session.user.id)

    if (postId) {
      userInteractions = userInteractions.filter((interaction) => interaction.postId === postId)
    }

    if (type) {
      userInteractions = userInteractions.filter((interaction) => interaction.type === type)
    }

    return NextResponse.json(userInteractions)
  } catch (error) {
    console.error("Error fetching interactions:", error)
    return NextResponse.json({ error: "Failed to fetch interactions" }, { status: 500 })
  }
}

// POST - Create or toggle an interaction (requires authentication)
export async function POST(request: Request) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Validate request data
    const body = await request.json()
    const validationResult = interactionSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Invalid request data", details: validationResult.error.format() },
        { status: 400 },
      )
    }

    const { postId, type } = validationResult.data

    // Check if the post exists
    const post = posts.find((p) => p.id === postId)

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }

    // Check if the interaction already exists
    const existingInteractionIndex = interactions.findIndex(
      (interaction) =>
        interaction.postId === postId && interaction.userId === session.user.id && interaction.type === type,
    )

    let result

    if (existingInteractionIndex !== -1) {
      // Delete the interaction (toggle off)
      interactions.splice(existingInteractionIndex, 1)

      // Update post counts
      if (type === "like") {
        post.likes = Math.max(0, post.likes - 1)
      }

      result = { action: "removed", type }
    } else {
      // Create the interaction
      const newInteraction = {
        id: Date.now().toString(),
        postId,
        userId: session.user.id,
        type,
        createdAt: new Date().toISOString(),
      }

      interactions.push(newInteraction)

      // Update post counts
      if (type === "like") {
        post.likes += 1
      }

      result = { action: "added", type }
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error processing interaction:", error)
    return NextResponse.json({ error: "Failed to process interaction" }, { status: 500 })
  }
}

