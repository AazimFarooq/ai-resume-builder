import { POST as generateHandler } from "@/app/api/ai/generate/route"
import { POST as suggestionsHandler } from "@/app/api/ai/suggestions/route"
import { generateText } from "ai"
import { describe, beforeEach, it, expect, jest } from "@jest/globals"

// Mock the AI SDK
jest.mock("ai", () => ({
  generateText: jest.fn(),
}))

// Mock the NextResponse
jest.mock("next/server", () => ({
  NextResponse: {
    json: jest.fn((data) => ({ data })),
  },
}))

describe("AI API Routes", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe("/api/ai/generate", () => {
    it("should generate content based on provided parameters", async () => {
      // Mock the AI response
      ;(generateText as jest.Mock).mockResolvedValue({
        text: "Generated resume content",
      })

      const request = new Request("http://localhost:3000/api/ai/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobTitle: "Software Engineer",
          section: "summary",
        }),
      })

      const response = await generateHandler(request)

      expect(response.data).toHaveProperty("content")
      expect(response.data.content).toBe("Generated resume content")
    })

    it("should return an error for missing required fields", async () => {
      const request = new Request("http://localhost:3000/api/ai/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      })

      const response = await generateHandler(request)

      expect(response.data).toHaveProperty("error")
    })
  })

  describe("/api/ai/suggestions", () => {
    it("should generate suggestions for resume content", async () => {
      // Mock the AI response
      ;(generateText as jest.Mock).mockResolvedValue({
        text: "1. Add more quantifiable achievements\n2. Use stronger action verbs",
      })

      const request = new Request("http://localhost:3000/api/ai/suggestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: "Developed websites",
          targetJob: "Web Developer",
        }),
      })

      const response = await suggestionsHandler(request)

      expect(response.data).toHaveProperty("suggestions")
      expect(response.data.suggestions).toBeInstanceOf(Array)
    })
  })
})

