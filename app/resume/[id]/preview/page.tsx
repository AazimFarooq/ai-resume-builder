"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ResumePreview } from "@/components/resume/preview"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, Download, Edit, Share } from "lucide-react"
import Link from "next/link"

export default function PreviewResumePage() {
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

  const handleDownloadPDF = () => {
    toast({
      title: "Downloading PDF",
      description: "Your resume is being downloaded as a PDF",
    })
    // In a real app, this would trigger a PDF download
  }

  const handleShare = () => {
    toast({
      title: "Share Link Copied",
      description: "A shareable link has been copied to your clipboard",
    })
    // In a real app, this would generate and copy a shareable link
  }

  return (
    <div className="container max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Resume Preview</h1>
          <p className="text-muted-foreground">Preview how your resume will look to employers</p>
        </div>
        <div className="flex gap-2">
          <Link href="/dashboard/resumes">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
          <Link href={`/resume/${resumeId}/edit`}>
            <Button variant="outline">
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
          </Link>
          <Button variant="outline" onClick={handleShare}>
            <Share className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button onClick={handleDownloadPDF}>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : (
        <ResumePreview data={resumeData} />
      )}
    </div>
  )
}

