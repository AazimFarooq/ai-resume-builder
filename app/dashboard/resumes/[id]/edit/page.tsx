"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ResumeEditor } from "@/components/resume/editor"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"

export default function DashboardEditResumePage() {
  const params = useParams()
  const resumeId = params.id as string
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(true)
  const [resumeData, setResumeData] = useState(null)

  useEffect(() => {
    // In a real app, fetch the resume data from the API
    // For now, we'll simulate loading data
    const fetchResumeData = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock data
        setResumeData({
          id: resumeId,
          title: "Software Engineer Resume",
          fullName: "John Doe",
          email: "john.doe@example.com",
          phone: "+1 (555) 123-4567",
          location: "San Francisco, CA",
          summary: "Experienced software engineer with a passion for building scalable applications.",
          targetJob: "Senior Software Engineer",
          skills: ["JavaScript", "React", "Node.js", "TypeScript"],
          education: [
            {
              institution: "University of California",
              degree: "Bachelor of Science in Computer Science",
              date: "2015-2019",
              description: "Graduated with honors",
            },
          ],
          experience: [
            {
              company: "Tech Company",
              position: "Software Engineer",
              date: "2019-Present",
              description: "Developed and maintained web applications using React and Node.js.",
            },
          ],
          templateId: "professional",
        })

        setIsLoading(false)
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load resume data",
          variant: "destructive",
        })
        router.push("/dashboard/resumes")
      }
    }

    fetchResumeData()
  }, [resumeId, router, toast])

  const handleSave = async (data) => {
    try {
      setIsLoading(true)

      // Simulate API call to save data
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Success",
        description: "Resume updated successfully",
      })

      router.push(`/dashboard/resumes`)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save resume",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Edit Resume</h1>
          <p className="text-muted-foreground">Update your resume information</p>
        </div>
        <div className="flex gap-2">
          <Link href="/dashboard/resumes">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
          <Button onClick={() => handleSave(resumeData)} disabled={isLoading}>
            <Save className="mr-2 h-4 w-4" />
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : (
        <ResumeEditor initialData={resumeData} onSave={handleSave} />
      )}
    </div>
  )
}

