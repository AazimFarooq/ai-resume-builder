import { CheckCircle } from "lucide-react"

export function Features() {
  const features = [
    {
      title: "AI-Powered Resume Builder",
      description:
        "Create professional resumes in minutes with our AI-powered tools that suggest content and optimize formatting.",
    },
    {
      title: "ATS-Optimized Templates",
      description:
        "Our templates are designed to pass through Applicant Tracking Systems and get your resume in front of hiring managers.",
    },
    {
      title: "Expert Content Suggestions",
      description: "Get tailored content suggestions based on your industry, experience level, and target job.",
    },
    {
      title: "Easy Customization",
      description: "Customize your resume with different layouts, colors, and fonts to match your personal style.",
    },
    {
      title: "Multiple Export Options",
      description: "Download your resume as PDF, DOCX, or share a direct link with potential employers.",
    },
    {
      title: "Real-Time Feedback",
      description:
        "Receive instant feedback on your resume content and formatting to improve your chances of getting hired.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="features">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Powerful Features to Help You Land Your Dream Job
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform offers everything you need to create a professional resume that stands out.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col space-y-2 rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h3 className="font-bold">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

