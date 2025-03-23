"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  FileText,
  Upload,
  Plus,
  BarChart3,
  Download,
  CheckCircle,
  AlertCircle,
  Eye,
  Edit,
  Trash2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardClientPage() {
  // Add state to control component mounting
  const [isMounted, setIsMounted] = useState(false)

  // Ensure components are only rendered client-side
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  if (!isMounted) {
    return null // Return null on server or during initial render
  }

  return (
    <>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Resume Dashboard
        </h1>
        <p className="text-muted-foreground mt-2">Create, import, and manage your professional resumes</p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <DashboardOptions />
        <div className="space-y-8">
          <ResumeStats />
          <RecentResumes />
        </div>
      </div>
    </>
  )
}

// Mock data - would be replaced with real data in production
const mockResumes = [
  { id: 1, name: "Software Developer Resume", lastEdited: "2 days ago" },
  { id: 2, name: "Product Manager CV", lastEdited: "1 week ago" },
]

function DashboardOptions() {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Resume Options</CardTitle>
        <CardDescription>Create a new resume or import an existing one</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Link href="/resume/create" className="w-full">
          <Button
            className="w-full justify-start gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
            size="lg"
          >
            <Plus className="h-5 w-5" />
            Create New Resume
          </Button>
        </Link>
        <Link href="/resume/import" className="w-full">
          <Button
            variant="outline"
            className="w-full justify-start gap-2 border-primary/20 hover:bg-primary/10 transition-all duration-300"
            size="lg"
          >
            <Upload className="h-5 w-5" />
            Import Existing Resume
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

function RecentResumes() {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Recent Resumes</CardTitle>
        <CardDescription>Quick access to your recent resume projects</CardDescription>
      </CardHeader>
      <CardContent>
        {mockResumes.length > 0 ? (
          <div className="space-y-4">
            {mockResumes.map((resume) => (
              <div
                key={resume.id}
                className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{resume.name}</p>
                    <p className="text-xs text-muted-foreground">Last edited: {resume.lastEdited}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <FileText className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No resumes yet</h3>
            <p className="text-muted-foreground mt-1 mb-4">Create your first resume to get started</p>
            <Button variant="default" className="mt-2">
              Create Resume
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function ResumeStats() {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Resume Statistics</CardTitle>
        <CardDescription>Track your resume performance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1 rounded-lg border p-3">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">ATS Score</span>
            </div>
            <p className="text-2xl font-bold">85%</p>
          </div>
          <div className="flex flex-col gap-1 rounded-lg border p-3">
            <div className="flex items-center gap-2">
              <Download className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Downloads</span>
            </div>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div className="flex flex-col gap-1 rounded-lg border p-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium">Optimized</span>
            </div>
            <p className="text-sm text-muted-foreground">Keywords matched</p>
          </div>
          <div className="flex flex-col gap-1 rounded-lg border p-3">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-amber-500" />
              <span className="text-sm font-medium">Suggestions</span>
            </div>
            <p className="text-sm text-muted-foreground">3 improvements</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
