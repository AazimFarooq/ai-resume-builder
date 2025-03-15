import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { z } from "zod"

// Reference to the comments array (in a real app, this would be a database)
import { comments } from "@/lib/blog-data"

const commentUpdateSchema = z.object({
  content: z.string().min(1, "Comment content is required"),
})

// GET - Fetch a single comment
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    // Find the comment
    const comment = comments.find((c) => c.id === id)

    if (!comment) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 })
    }

    return NextResponse.json(comment)
  } catch (error) {
    console.error("Error fetching comment:", error)
    return NextResponse.json({ error: "Failed to fetch comment" }, { status: 500 })
  }
}

// PATCH - Update a comment (requires authentication)
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const id = params.id

    // Find the comment
    const comment = comments.find((c) => c.id === id)

    if (!comment) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 })
    }

    // Check if user has permission to update this comment
    if (comment.userId !== session.user.id) {
      return NextResponse.json({ error: "Insufficient permissions" }, { status: 403 })
    }

    // Validate request data
    const body = await request.json()
    const validationResult = commentUpdateSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Invalid request data", details: validationResult.error.format() },
        { status: 400 },
      )
    }

    const { content } = validationResult.data

    // Update the comment
    comment.content = content
    comment.edited = true

    return NextResponse.json(comment)
  } catch (error) {
    console.error("Error updating comment:", error)
    return NextResponse.json({ error: "Failed to update comment" }, { status: 500 })
  }
}

// DELETE - Delete a comment (requires authentication)
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const id = params.id

    // Find the comment
    const commentIndex = comments.findIndex((c) => c.id === id)

    if (commentIndex === -1) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 })
    }

    // Check if user has permission to delete this comment
    if (comments[commentIndex].userId !== session.user.id) {
      return NextResponse.json({ error: "Insufficient permissions" }, { status: 403 })
    }

    // Delete the comment
    comments.splice(commentIndex, 1)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting comment:", error)
    return NextResponse.json({ error: "Failed to delete comment" }, { status: 500 })
  }
}

