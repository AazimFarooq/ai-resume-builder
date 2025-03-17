"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileUp, FilePlus, LayoutTemplate, ArrowRight, Plus } from "lucide-react"

export default function ResumesPage() {
  return (
    <div className="space-y-6 bg-background dark:bg-[#0f172a]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground dark:text-white">My Resumes</h1>
          <p className="text-muted-foreground dark:text-gray-300">Manage your resumes and create new ones</p>
        </div>
        <Link href="/resume/new">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Plus className="mr-2 h-4 w-4" />
            New Resume
          </Button>
        </Link>
      </div>

      {/* If no resumes exist yet, show this section */}
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto mt-8">
        {/* Create New Resume */}
        <Card className="flex flex-col h-full border-border dark:border-gray-700 bg-card dark:bg-[#1e293b]">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <FilePlus className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-foreground dark:text-white">Create New Resume</CardTitle>
            <CardDescription className="text-muted-foreground dark:text-gray-300">
              Start from scratch and build your professional resume with our guided process.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span className="text-foreground dark:text-gray-200">Step-by-step resume builder</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span className="text-foreground dark:text-gray-200">AI-powered content suggestions</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span className="text-foreground dark:text-gray-200">Choose from professional templates</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/resume/new" className="w-full">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Create New Resume
              </Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Import Existing Resume */}
        <Card className="flex flex-col h-full border-border dark:border-gray-700 bg-card dark:bg-[#1e293b]">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <FileUp className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-foreground dark:text-white">Import Existing Resume</CardTitle>
            <CardDescription className="text-muted-foreground dark:text-gray-300">
              Upload your current resume and enhance it with our AI tools.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span className="text-foreground dark:text-gray-200">Support for PDF, DOCX, DOC, and TXT formats</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span className="text-foreground dark:text-gray-200">AI analysis and improvement suggestions</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span className="text-foreground dark:text-gray-200">Reformat with professional templates</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full border-border dark:border-gray-700 text-foreground dark:text-white hover:bg-muted dark:hover:bg-[#0f172a]/60"
              onClick={() => (window.location.href = "/resume/import")}
            >
              Import Resume
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-foreground dark:text-white">Need inspiration?</h2>
        <p className="text-muted-foreground dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Browse our collection of professionally designed templates to get started.
        </p>
        <Link href="/dashboard/templates">
          <Button
            variant="outline"
            size="lg"
            className="border-border dark:border-gray-700 text-foreground dark:text-white hover:bg-muted dark:hover:bg-[#0f172a]/60"
          >
            <LayoutTemplate className="mr-2 h-4 w-4" />
            Browse Templates
          </Button>
        </Link>
      </div>
    </div>
  )
}

