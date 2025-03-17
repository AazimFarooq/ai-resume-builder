import { generateResumeSummary, generateResumeExperience } from "@/lib/ai/resumeGenerator"
import { generateText } from "ai"
import { describe, beforeEach, it, expect, jest } from "@jest/globals"

// Mock the AI SDK
jest.mock("ai", () => ({
  generateText: jest.fn(),
}))

describe("Resume Generator", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe("generateResumeSummary", () => {
    it("should generate a resume summary", async () => {
      // Mock the AI response
      ;(generateText as jest.Mock).mockResolvedValue({
        text: "Professional software engineer with 5+ years of experience.",
      })

      const result = await generateResumeSummary({
        jobTitle: "Software Engineer",
        targetJob: "Senior Developer",
        skills: ["JavaScript", "React", "Node.js"],
      })

      expect(generateText).toHaveBeenCalled()
      expect(result).toBe("Professional software engineer with 5+ years of experience.")
    })

    it("should handle errors gracefully", async () => {
      // Mock the AI response to throw an error
      ;(generateText as jest.Mock).mockRejectedValue(new Error("API error"))

      await expect(
        generateResumeSummary({
          jobTitle: "Software Engineer",
        }),
      ).rejects.toThrow("API error")
    })
  })

  describe("generateResumeExperience", () => {
    it("should generate enhanced experience descriptions", async () => {
      // Mock the AI response
      ;(generateText as jest.Mock).mockResolvedValue({
        text: "• Developed scalable web applications using React and Node.js\n• Improved site performance by 40%",
      })

      const result = await generateResumeExperience({
        jobTitle: "Software Engineer",
        experience: "Developed websites and improved performance",
      })

      expect(generateText).toHaveBeenCalled()
      expect(result).toContain("Developed scalable web applications")
      expect(result).toContain("Improved site performance by 40%")
    })
  })
})

