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
    if (!body.email || !body.password || !body.name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const { email, password, name } = body

    // Check if user already exists
    const existingUser = users.find((user) => user.email === email)

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    // In a real app, we would hash the password with bcrypt
    // const salt = await bcrypt.genSalt(10)
    // const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const newUser = {
      id: `user${users.length + 1}`,
      email,
      password, // In a real app, this would be hashedPassword
      name,
      image: null,
    }

    users.push(newUser)

    // Create JWT (in a real app)
    const token = "demo-jwt-token"

    return NextResponse.json(
      {
        token,
        user: {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

