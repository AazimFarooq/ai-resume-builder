import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Zap, FileSearch, MessageSquare, CheckCircle, Bot } from "lucide-react"

export function AIFeatures() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">AI-Powered</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Smart Resume Building</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our AI tools help you create better resumes faster, with intelligent suggestions and optimizations.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardHeader className="pb-2">
              <Sparkles className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Content Suggestions</CardTitle>
              <CardDescription>
                Get AI-powered suggestions to improve your resume content and make a stronger impression.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border p-3 bg-muted/50">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-sm">
                      <span className="line-through text-muted-foreground">Responsible for managing team projects</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Sparkles className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-sm font-medium">
                      Led cross-functional team of 8 to deliver 5 high-impact projects, increasing department efficiency
                      by 32%
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Zap className="h-6 w-6 text-primary mb-2" />
              <CardTitle>ATS Optimization</CardTitle>
              <CardDescription>
                Ensure your resume passes through Applicant Tracking Systems with our AI-powered optimization.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border p-3 bg-muted/50">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium">ATS Score</span>
                  <span className="text-sm font-bold text-green-600">92%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[92%] rounded-full bg-green-600"></div>
                </div>
                <div className="mt-3 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-xs">Keywords match: Excellent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-xs">Format compatibility: Good</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <FileSearch className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Job Description Matching</CardTitle>
              <CardDescription>
                Match your resume to specific job descriptions to increase your chances of getting hired.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border p-3 bg-muted/50">
                <div className="mb-2 text-sm">
                  <span className="font-medium">Skills Match:</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span>Project Management</span>
                    <span className="font-medium text-green-600">Strong match</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-muted">
                    <div className="h-1.5 w-[85%] rounded-full bg-green-600"></div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>Data Analysis</span>
                    <span className="font-medium text-amber-600">Partial match</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-muted">
                    <div className="h-1.5 w-[60%] rounded-full bg-amber-600"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <MessageSquare className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Grammar & Style Check</CardTitle>
              <CardDescription>
                Ensure your resume is error-free with advanced grammar and style checking.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border p-3 bg-muted/50">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-4 w-4 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-amber-600">!</span>
                    </div>
                    <div>
                      <p className="text-sm">
                        <span className="underline decoration-wavy decoration-amber-500">Recieved</span> award for
                        excellence
                      </p>
                      <p className="text-xs text-amber-600">Spelling: Change to "Received"</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Bot className="h-6 w-6 text-primary mb-2" />
              <CardTitle>AI Content Generation</CardTitle>
              <CardDescription>
                Generate professional content for your resume sections based on your experience.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border p-3 bg-muted/50">
                <div className="space-y-2">
                  <p className="text-xs font-medium">Generated Professional Summary:</p>
                  <p className="text-sm">
                    Results-driven marketing professional with 5+ years of experience developing successful campaigns
                    and growing brand presence across digital platforms. Proven track record of increasing engagement by
                    45% and driving 3x ROI on marketing initiatives.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary mb-2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m14.5 9-5 5" />
                <path d="m9.5 9 5 5" />
              </svg>
              <CardTitle>Template Recommendation</CardTitle>
              <CardDescription>
                Get AI-powered template recommendations based on your industry and experience level.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border p-3 bg-muted/50">
                <div className="space-y-2">
                  <p className="text-xs font-medium">Based on your profile:</p>
                  <div className="flex items-center gap-2">
                    <div className="h-12 w-12 rounded-md bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30"></div>
                    <div>
                      <p className="text-sm font-medium">Executive Clean</p>
                      <p className="text-xs text-muted-foreground">Perfect for senior management positions</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

