"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const featuredPosts = [
  {
    id: "1",
    title: "10 Resume Tips That Will Help You Get Hired",
    excerpt:
      "Learn the essential resume writing tips that hiring managers look for. Stand out from the crowd and land your dream job.",
    image: "/placeholder.svg?height=600&width=1200",
    slug: "10-resume-tips",
  },
  {
    id: "2",
    title: "How to Ace Your Next Job Interview",
    excerpt:
      "Master the art of interviewing with our comprehensive guide. From preparation to follow-up, we've got you covered.",
    image: "/placeholder.svg?height=600&width=1200",
    slug: "ace-job-interview",
  },
  {
    id: "3",
    title: "The Future of Work: AI and Your Career",
    excerpt:
      "Discover how artificial intelligence is shaping the job market and what skills you need to stay competitive.",
    image: "/placeholder.svg?height=600&width=1200",
    slug: "future-of-work-ai",
  },
]

export function BlogHero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredPosts.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-background dark:bg-[#0f172a]">
      {featuredPosts.map((post, index) => (
        <div
          key={post.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50 dark:from-[#0f172a]/90 dark:to-[#0f172a]/50" />
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl text-foreground dark:text-white">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">{post.title}</h1>
                <p className="text-lg text-muted-foreground dark:text-gray-300 mb-8">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>
                  <Button size="lg" className="bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {featuredPosts.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentSlide ? "bg-[#3b82f6] w-6" : "bg-muted hover:bg-muted-foreground",
            )}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/20 text-foreground dark:bg-[#0f172a]/20 dark:text-white hover:bg-background/30 dark:hover:bg-[#0f172a]/30 transition-colors"
        onClick={() => setCurrentSlide((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length)}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/20 text-foreground dark:bg-[#0f172a]/20 dark:text-white hover:bg-background/30 dark:hover:bg-[#0f172a]/30 transition-colors"
        onClick={() => setCurrentSlide((prev) => (prev + 1) % featuredPosts.length)}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}

