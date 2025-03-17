import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, FileText, Zap, LayoutTemplate, Download, Bot } from "lucide-react"

export function FeatureSection() {
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full bg-background dark:bg-[#0f172a]">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground dark:text-white">
          Powerful Features to Build Your Perfect Resume
        </h2>
        <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
          Our AI-powered resume builder helps you create professional, ATS-optimized resumes that stand out to
          employers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* AI Writing Assistant */}
        <Card className="border border-border dark:border-gray-700 bg-background dark:bg-[#1e293b] hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-full bg-[#3b82f6]/10 flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-[#3b82f6]" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-foreground dark:text-white">AI Writing Assistant</h3>
            <p className="text-muted-foreground dark:text-gray-300 mb-4">
              Get help writing professional summaries, job descriptions, and skills sections.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="mr-2 text-[#3b82f6]">•</span>
                <span className="text-muted-foreground dark:text-gray-300">
                  Generate professional summaries tailored to your target job
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#3b82f6]">•</span>
                <span className="text-muted-foreground dark:text-gray-300">
                  Transform basic job descriptions into achievement-focused bullets
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#3b82f6]">•</span>
                <span className="text-muted-foreground dark:text-gray-300">
                  Optimize your content for Applicant Tracking Systems (ATS)
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* ATS-Optimized Templates */}
        <Card className="border border-border dark:border-gray-700 bg-background dark:bg-[#1e293b] hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-full bg-[#3b82f6]/10 flex items-center justify-center mb-4">
              <LayoutTemplate className="h-6 w-6 text-[#3b82f6]" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-foreground dark:text-white">ATS-Optimized Templates</h3>
            <p className="text-muted-foreground dark:text-gray-300 mb-4">
              Choose from professionally designed templates that pass ATS scans.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="mr-2 text-[#3b82f6]">•</span>
                <span className="text-muted-foreground dark:text-gray-300">
                  Multiple professional templates for different industries
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#3b82f6]">•</span>
                <span className="text-muted-foreground dark:text-gray-300">
                  Clean, modern designs that highlight your experience
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#3b82f6]">•</span>
                <span className="text-muted-foreground dark:text-gray-300">
                  Formats that ensure your resume passes ATS screening
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Real-Time Editing */}
        <Card className="border border-border dark:border-gray-700 bg-background dark:bg-[#1e293b] hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-full bg-[#3b82f6]/10 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-[#3b82f6]" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-foreground dark:text-white">Real-Time Editing</h3>
            <p className="text-muted-foreground dark:text-gray-300 mb-4">
              See changes instantly as you build and customize your resume.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="mr-2 text-[#3b82f6]">•</span>
                <span className="text-muted-foreground dark:text-gray-300">
                  Intuitive drag-and-drop interface for easy customization
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#3b82f6]">•</span>
                <span className="text-muted-foreground dark:text-gray-300">
                  Real-time preview of your resume as you make changes
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#3b82f6]">•</span>
                <span className="text-muted-foreground dark:text-gray-300">
                  Easily rearrange sections to highlight your strengths
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* One-Click PDF Export */}
        <Card className="border border-border dark:border-gray-700 bg-background dark:bg-[#1e293b] hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-full bg-[#3b82f6]/10 flex items-center justify-center mb-4">
              <Download className="h-6 w-6 text-[#3b82f6]" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-foreground dark:text-white">One-Click PDF Export</h3>
            <p className="text-muted-foreground dark:text-gray-300 mb-4">
              Download your resume as a professional PDF with a single click.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="mr-2 text-[#3b82f6]">•</span>
                <span className="text-muted-foreground dark:text-gray-300">
                  High-quality PDF exports ready for submission
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#3b82f6]">•</span>
                <span className="text-muted-foreground dark:text-gray-300">
                  Multiple file formats available (PDF, DOCX, TXT)
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#3b82f6]">•</span>
                <span className="text-muted-foreground dark:text-gray-300">
                  Print-ready with proper margins and formatting
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Resume Analyzer */}
        <Card className="border border-border dark:border-gray-700 bg-background dark:bg-[#1e293b] hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-full bg-[#3b82f6]/10 flex items-center justify-center mb-4">
              <Bot className="h-6 w-6 text-[#3b82f6]" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-foreground dark:text-white">Resume Analyzer</h3>
            <p className="text-muted-foreground dark:text-gray-300 mb-4">
              Get AI-powered feedback to improve your resume's effectiveness.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="mr-2 text-[#3b82f6]">•</span>
                <span className="text-muted-foreground dark:text-gray-300">
                  Detailed analysis of your resume's strengths and weaknesses
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#3b82f6]">•</span>
                <span className="text-muted-foreground dark:text-gray-300">
                  Keyword optimization suggestions for your target job
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#3b82f6]">•</span>
                <span className="text-muted-foreground dark:text-gray-300">
                  Actionable tips to improve your resume's impact
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Multiple Resume Versions */}
        <Card className="border border-border dark:border-gray-700 bg-background dark:bg-[#1e293b] hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-full bg-[#3b82f6]/10 flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-[#3b82f6]" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-foreground dark:text-white">Multiple Resume Versions</h3>
            <p className="text-muted-foreground dark:text-gray-300 mb-4">
              Create and manage multiple versions of your resume for different jobs.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="mr-2 text-[#3b82f6]">•</span>
                <span className="text-muted-foreground dark:text-gray-300">Save unlimited versions of your resume</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#3b82f6]">•</span>
                <span className="text-muted-foreground dark:text-gray-300">
                  Easily tailor each version for specific job applications
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#3b82f6]">•</span>
                <span className="text-muted-foreground dark:text-gray-300">
                  Track which version you've sent to each employer
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

