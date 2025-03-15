import { NextResponse } from "next/server"

// In-memory user store for demo purposes
const users = [
  {
    id: "user1",
    name: "Demo User",
    email: "user@example.com",
    password: "$2b$10$8OxDEuDS1WFsGiGXSBYIXufdBkO9VeE/uYqvK8QCluM9tUVA3hUTy", // "password123"
    image: null,
  },
]

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Simple validation
    if (!body.email || !body.password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const { email, password } = body

    // Find user
    const user = users.find((user) => user.email === email)

    if (!user || !user.password) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // In a real app, we would verify the password with bcrypt
    // const isPasswordValid = await bcrypt.compare(password, user.password)
    const isPasswordValid = password === "password123" // For demo purposes

    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Create JWT (in a real app)
    const token = "demo-jwt-token"

    return NextResponse.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

