import { NextResponse } from "next/server"

// In-memory array for storing comments
const comments = [
  {
    id: "1",
    postId: "1",
    content: "Great article! This helped me improve my resume.",
    userId: "user1",
    user: {
      id: "user1",
      name: "Alice Johnson",
      image: "/placeholder.svg?height=40&width=40",
    },
    parentId: null,
    createdAt: "2024-03-05T12:00:00Z",
    edited: false,
    replies: [
      {
        id: "2",
        postId: "1",
        content: "I agree! The tips about quantifying achievements were especially helpful.",
        userId: "user2",
        user: {
          id: "user2",
          name: "Bob Smith",
          image: "/placeholder.svg?height=40&width=40",
        },
        parentId: "1",
        createdAt: "2024-03-05T14:30:00Z",
        edited: false,
      },
    ],
  },
]

// GET - Fetch comments for a post
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const postId = searchParams.get("postId")

    if (!postId) {
      return NextResponse.json({ error: "Post ID is required" }, { status: 400 })
    }

    // Fetch top-level comments for the post
    const postComments = comments.filter((comment) => comment.postId === postId && comment.parentId === null)

    return NextResponse.json(postComments)
  } catch (error) {
    console.error("Error fetching comments:", error)
    return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 })
  }
}

// POST - Create a new comment
export async function POST(request) {
  try {
    const body = await request.json()

    // Simple validation
    if (!body.postId || !body.content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const { postId, content, parentId } = body

    // If it's a reply, check if the parent comment exists
    if (parentId) {
      const parentComment = comments.find((c) => c.id === parentId)
      if (!parentComment) {
        return NextResponse.json({ error: "Parent comment not found" }, { status: 404 })
      }
    }

    // Create the comment
    const newComment = {
      id: Date.now().toString(),
      postId,
      content,
      userId: "anonymous", // In a real app, this would come from the authenticated user
      user: {
        id: "anonymous",
        name: "Anonymous User",
        image: "/placeholder.svg?height=40&width=40",
      },
      parentId,
      createdAt: new Date().toISOString(),
      edited: false,
      replies: [],
    }

    // Add to comments array
    if (parentId) {
      // Find the parent comment and add this as a reply
      const parentComment = comments.find((c) => c.id === parentId)
      if (parentComment) {
        if (!parentComment.replies) {
          parentComment.replies = []
        }
        parentComment.replies.push(newComment)
      }
    } else {
      comments.push(newComment)
    }

    return NextResponse.json(newComment, { status: 201 })
  } catch (error) {
    console.error("Error creating comment:", error)
    return NextResponse.json({ error: "Failed to create comment" }, { status: 500 })
  }
}

