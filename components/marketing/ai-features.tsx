import { Button } from "@/components/ui/button"
import { Sparkles, FileText, Zap, CheckCircle, ArrowRight, Shield, MessageSquare } from "lucide-react"
import Link from "next/link"

export function AIFeatures() {
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 overflow-hidden">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 text-xs font-medium rounded-full bg-primary/10 text-primary">
          <Sparkles className="mr-1 h-3.5 w-3.5" />
          AI-Powered Features
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Smart Resume Building</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Our AI tools help you create better resumes faster, with intelligent suggestions and optimizations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Content Suggestions */}
        <div className="bg-background/5 backdrop-blur-sm border border-border/50 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Content Suggestions</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Get AI-powered suggestions to improve your resume content and make a stronger impression.
          </p>
          <div className="bg-background/10 rounded-md p-3 space-y-2 text-sm">
            <div className="flex items-start gap-2 opacity-60">
              <span className="inline-block mt-1">✓</span>
              <p className="line-through">Responsible for managing team projects</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="inline-block mt-1">★</span>
              <p>
                Led cross-functional team of 8 to deliver 5 high-impact projects, increasing department efficiency by
                32%
              </p>
            </div>
          </div>
        </div>

        {/* ATS Optimization */}
        <div className="bg-background/5 backdrop-blur-sm border border-border/50 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Zap className="h-4 w-4 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">ATS Optimization</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Ensure your resume passes through Applicant Tracking Systems with our AI-powered optimization.
          </p>
          <div className="bg-background/10 rounded-md p-3 space-y-3 text-sm">
            <div>
              <div className="flex justify-between mb-1">
                <span>ATS Score</span>
                <span className="text-green-500">92%</span>
              </div>
              <div className="w-full bg-muted/30 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "92%" }}></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Keywords match: Excellent</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Format compatibility: Good</span>
            </div>
          </div>
        </div>

        {/* Job Description Matching */}
        <div className="bg-background/5 backdrop-blur-sm border border-border/50 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <FileText className="h-4 w-4 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Job Description Matching</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Match your resume to specific job descriptions to increase your chances of getting hired.
          </p>
          <div className="bg-background/10 rounded-md p-3 space-y-3 text-sm">
            <div>
              <div className="mb-1">Skills Match:</div>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Project Management</span>
                    <span className="text-green-500">Strong match</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Data Analysis</span>
                    <span className="text-amber-500">Partial match</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grammar & Style Check */}
        <div className="bg-background/5 backdrop-blur-sm border border-border/50 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <MessageSquare className="h-4 w-4 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Grammar & Style Check</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Ensure your resume is error-free with advanced grammar and style checking.
          </p>
          <div className="bg-background/10 rounded-md p-3 text-sm">
            <div className="flex items-start gap-2">
              <div className="mt-1 text-amber-500">⚠️</div>
              <div>
                <p>Recieved award for excellence</p>
                <p className="text-amber-500 text-xs mt-1">Spelling: Change to "Received"</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Content Generation */}
        <div className="bg-background/5 backdrop-blur-sm border border-border/50 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">AI Content Generation</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Generate professional content for your resume sections based on your experience.
          </p>
          <div className="bg-background/10 rounded-md p-3 space-y-2 text-sm">
            <div className="text-xs font-medium">Generated Professional Summary:</div>
            <p className="text-xs">
              Results-driven marketing professional with 5+ years of experience developing successful campaigns and
              growing brand presence across digital platforms. Proven track record of increasing engagement by 45% and
              driving 3x...
            </p>
          </div>
        </div>

        {/* Template Recommendation */}
        <div className="bg-background/5 backdrop-blur-sm border border-border/50 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-4 w-4 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Template Recommendation</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Get AI-powered template recommendations based on your industry and experience level.
          </p>
          <div className="bg-background/10 rounded-md p-3 space-y-2 text-sm">
            <div className="text-xs font-medium">Based on your profile:</div>
            <div className="font-medium">Executive Clean</div>
            <p className="text-xs text-muted-foreground">Perfect for senior management positions</p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href="/dashboard">
          <Button className="group">
            Try AI Resume Builder
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

