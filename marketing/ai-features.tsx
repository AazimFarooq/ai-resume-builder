import { Button } from "@/components/ui/button"
import { Sparkles, FileText, Zap, CheckCircle, ArrowRight, Shield, MessageSquare } from "lucide-react"
import Link from "next/link"

export function AIFeatures() {
  return (
    <div className="py-16 md:py-24 border-y border-border dark:border-gray-800 w-full bg-background dark:bg-[#0f172a]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground dark:text-white">
            Smart Resume Building
          </h2>
          <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
            Our AI tools help you create better resumes faster, with intelligent suggestions and optimizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Content Suggestions */}
          <div className="bg-card dark:bg-[#1e293b] border border-border dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-[#3b82f6]" />
              <h3 className="text-xl font-semibold text-foreground dark:text-white">Content Suggestions</h3>
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-300 mb-4">
              Get AI-powered suggestions to improve your resume content and make a stronger impression.
            </p>
            <div className="bg-muted dark:bg-[#0f172a] rounded-md p-3 space-y-2 text-sm">
              <div className="flex items-start gap-2 opacity-60">
                <span className="inline-block mt-1 text-muted-foreground dark:text-gray-400">✓</span>
                <p className="line-through text-muted-foreground dark:text-gray-400">
                  Responsible for managing team projects
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="inline-block mt-1 text-[#3b82f6]">★</span>
                <p className="text-foreground dark:text-white">
                  Led cross-functional team of 8 to deliver 5 high-impact projects, increasing department efficiency by
                  32%
                </p>
              </div>
            </div>
          </div>

          {/* ATS Optimization */}
          <div className="bg-card dark:bg-[#1e293b] border border-border dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-[#3b82f6]" />
              <h3 className="text-xl font-semibold text-foreground dark:text-white">ATS Optimization</h3>
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-300 mb-4">
              Ensure your resume passes through Applicant Tracking Systems with our AI-powered optimization.
            </p>
            <div className="bg-muted dark:bg-[#0f172a] rounded-md p-3 space-y-3 text-sm">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-foreground dark:text-white">ATS Score</span>
                  <span className="text-green-500 dark:text-green-400">92%</span>
                </div>
                <div className="w-full bg-muted-foreground/20 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 dark:bg-green-400 h-2 rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400" />
                <span className="text-foreground dark:text-white">Keywords match: Excellent</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400" />
                <span className="text-foreground dark:text-white">Format compatibility: Good</span>
              </div>
            </div>
          </div>

          {/* Job Description Matching */}
          <div className="bg-card dark:bg-[#1e293b] border border-border dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-5 w-5 text-[#3b82f6]" />
              <h3 className="text-xl font-semibold text-foreground dark:text-white">Job Description Matching</h3>
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-300 mb-4">
              Match your resume to specific job descriptions to increase your chances of getting hired.
            </p>
            <div className="bg-muted dark:bg-[#0f172a] rounded-md p-3 space-y-3 text-sm">
              <div>
                <div className="mb-1 text-foreground dark:text-white">Skills Match:</div>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-foreground dark:text-white">Project Management</span>
                      <span className="text-green-500 dark:text-green-400">Strong match</span>
                    </div>
                    <div className="w-full bg-muted-foreground/20 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 dark:bg-green-400 h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-foreground dark:text-white">Data Analysis</span>
                      <span className="text-amber-500 dark:text-amber-400">Partial match</span>
                    </div>
                    <div className="w-full bg-muted-foreground/20 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-amber-500 dark:bg-amber-400 h-2 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grammar & Style Check */}
          <div className="bg-card dark:bg-[#1e293b] border border-border dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="h-5 w-5 text-[#3b82f6]" />
              <h3 className="text-xl font-semibold text-foreground dark:text-white">Grammar & Style Check</h3>
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-300 mb-4">
              Ensure your resume is error-free with advanced grammar and style checking.
            </p>
            <div className="bg-muted dark:bg-[#0f172a] rounded-md p-3 text-sm">
              <div className="flex items-start gap-2">
                <div className="mt-1 text-amber-500 dark:text-amber-400">⚠️</div>
                <div>
                  <p className="text-foreground dark:text-white">Recieved award for excellence</p>
                  <p className="text-amber-500 dark:text-amber-400 text-xs mt-1">Spelling: Change to "Received"</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Content Generation */}
          <div className="bg-card dark:bg-[#1e293b] border border-border dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-[#3b82f6]" />
              <h3 className="text-xl font-semibold text-foreground dark:text-white">AI Content Generation</h3>
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-300 mb-4">
              Generate professional content for your resume sections based on your experience.
            </p>
            <div className="bg-muted dark:bg-[#0f172a] rounded-md p-3 space-y-2 text-sm">
              <div className="text-xs font-medium text-muted-foreground dark:text-gray-300">
                Generated Professional Summary:
              </div>
              <p className="text-xs text-foreground dark:text-white">
                Results-driven marketing professional with 5+ years of experience developing successful campaigns and
                growing brand presence across digital platforms. Proven track record of increasing engagement by 45% and
                driving 3x...
              </p>
            </div>
          </div>

          {/* Template Recommendation */}
          <div className="bg-card dark:bg-[#1e293b] border border-border dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-[#3b82f6]" />
              <h3 className="text-xl font-semibold text-foreground dark:text-white">Template Recommendation</h3>
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-300 mb-4">
              Get AI-powered template recommendations based on your industry and experience level.
            </p>
            <div className="bg-muted dark:bg-[#0f172a] rounded-md p-3 space-y-2 text-sm">
              <div className="text-xs font-medium text-muted-foreground dark:text-gray-300">Based on your profile:</div>
              <div className="font-medium text-foreground dark:text-white">Executive Clean</div>
              <p className="text-xs text-muted-foreground dark:text-gray-400">
                Perfect for senior management positions
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/dashboard">
            <Button className="group bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white">
              Try AI Resume Builder
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

