"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Software Engineer",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "The AI suggestions were incredibly helpful. I landed interviews at 3 tech companies within a week of updating my resume!",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      role: "Marketing Director",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "I was struggling to highlight my achievements effectively. This platform made it so easy to create a professional resume that truly represents my experience.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Recent Graduate",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "As someone just starting my career, I wasn't sure how to create a resume that would stand out. The templates and AI guidance were exactly what I needed.",
      rating: 4,
    },
    {
      name: "Emily Rodriguez",
      role: "Healthcare Professional",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "The industry-specific suggestions helped me tailor my resume perfectly for healthcare positions. I received multiple interview requests within days.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Career Changer",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Transitioning to a new industry was daunting, but this platform helped me highlight my transferable skills effectively. Worth every penny!",
      rating: 5,
    },
    {
      name: "Lisa Patel",
      role: "Executive Assistant",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "The templates are elegant and professional. I received compliments on my resume design during interviews, which was a nice bonus!",
      rating: 4,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Thousands of job seekers have used our platform to create professional resumes and land their dream jobs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"}`}
                          />
                        ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

