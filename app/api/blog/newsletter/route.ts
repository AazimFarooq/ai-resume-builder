import { NextResponse } from "next/server"

// In-memory array for storing newsletter subscribers
const subscribers = [
  {
    id: "1",
    email: "user1@example.com",
    name: "User One",
    active: true,
    createdAt: "2024-03-01T12:00:00Z",
  },
]

// POST - Subscribe to newsletter
export async function POST(request) {
  try {
    const body = await request.json()

    // Simple validation
    if (!body.email || !body.email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    const { email, name } = body

    // Check if already subscribed
    const existingSubscription = subscribers.find((sub) => sub.email === email)

    if (existingSubscription) {
      if (existingSubscription.active) {
        return NextResponse.json({ message: "Email already subscribed", alreadySubscribed: true }, { status: 200 })
      } else {
        // Reactivate subscription
        existingSubscription.active = true
        return NextResponse.json({ message: "Subscription reactivated", reactivated: true }, { status: 200 })
      }
    }

    // Create subscription
    const newSubscriber = {
      id: Date.now().toString(),
      email,
      name: name || "",
      active: true,
      createdAt: new Date().toISOString(),
    }

    subscribers.push(newSubscriber)

    return NextResponse.json({ message: "Successfully subscribed to newsletter" }, { status: 201 })
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    return NextResponse.json({ error: "Failed to subscribe to newsletter" }, { status: 500 })
  }
}

// DELETE - Unsubscribe from newsletter
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get("email")

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Find the subscription
    const subscriber = subscribers.find((sub) => sub.email === email)

    if (!subscriber) {
      return NextResponse.json({ error: "Subscription not found" }, { status: 404 })
    }

    // Update the subscription status
    subscriber.active = false

    return NextResponse.json({ message: "Successfully unsubscribed" })
  } catch (error) {
    console.error("Error unsubscribing from newsletter:", error)
    return NextResponse.json({ error: "Failed to unsubscribe" }, { status: 500 })
  }
}

