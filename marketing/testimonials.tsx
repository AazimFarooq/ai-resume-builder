import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote:
      "This AI resume builder helped me land interviews at three top tech companies. The AI suggestions made my experience sound so much more impressive!",
    author: "Sarah J.",
    role: "Software Engineer",
    company: "Recently hired at a Fortune 500 company",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    quote:
      "I was struggling to make my resume stand out until I found this tool. The AI helped me highlight achievements I hadn't even thought to include.",
    author: "Michael T.",
    role: "Marketing Manager",
    company: "Digital Marketing Agency",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    quote:
      "As a recent graduate with limited experience, I was worried about my resume. This platform helped me create a professional resume that got me my first job!",
    author: "Emily R.",
    role: "Business Analyst",
    company: "Finance Sector",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    quote:
      "The ATS optimization feature is a game-changer. I went from zero callbacks to five interview requests after using this resume builder.",
    author: "David L.",
    role: "Product Manager",
    company: "Tech Startup",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    quote:
      "I've recommended this to all my colleagues. The templates are beautiful and the AI writing assistance saved me hours of work.",
    author: "Jennifer K.",
    role: "HR Professional",
    company: "Healthcare Industry",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 6,
    quote:
      "After 15 years at the same company, I had no idea how to update my resume. This tool made the process simple and my new resume looks fantastic.",
    author: "Robert M.",
    role: "Operations Director",
    company: "Manufacturing Industry",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export function Testimonials() {
  return (
    <div className="bg-muted/50 dark:bg-[#0f172a] py-16 md:py-24 w-full">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground dark:text-white">
            What Our Users Say
          </h2>
          <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
            Thousands of job seekers have used our AI resume builder to create standout resumes and land their dream
            jobs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-background dark:bg-[#1e293b] border dark:border-gray-700">
              <CardContent className="p-6">
                <div className="mb-4 text-[#3b82f6]">
                  <Quote className="h-6 w-6" />
                </div>
                <blockquote className="mb-4 text-base text-foreground dark:text-white">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="mr-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-foreground dark:text-white">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground dark:text-gray-300">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-4 items-center">
            <div className="py-2 px-4 bg-background dark:bg-[#1e293b] border border-border dark:border-gray-700 rounded-full text-sm font-medium text-foreground dark:text-white">
              Trusted by 10,000+ users
            </div>
            <div className="py-2 px-4 bg-background dark:bg-[#1e293b] border border-border dark:border-gray-700 rounded-full text-sm font-medium text-foreground dark:text-white">
              4.8/5 average rating
            </div>
            <div className="py-2 px-4 bg-background dark:bg-[#1e293b] border border-border dark:border-gray-700 rounded-full text-sm font-medium text-foreground dark:text-white">
              Featured in Forbes
            </div>
            <div className="py-2 px-4 bg-background dark:bg-[#1e293b] border border-border dark:border-gray-700 rounded-full text-sm font-medium text-foreground dark:text-white">
              Used in 50+ countries
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

