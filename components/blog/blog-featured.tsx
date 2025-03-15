"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredPosts = [
  {
    id: "1",
    title: "The Ultimate Guide to Modern Resume Writing",
    excerpt: "Learn how to create a resume that stands out in 2024 with AI-powered tools and expert tips.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Resume Tips",
    color: "bg-blue-500",
    slug: "ultimate-resume-guide",
  },
  {
    id: "2",
    title: "Master the Art of Remote Job Interviews",
    excerpt: "Essential tips and strategies for acing your virtual interviews and landing remote positions.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Interview Prep",
    color: "bg-green-500",
    slug: "remote-interview-guide",
  },
]

export function BlogFeatured() {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {featuredPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}>
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <Badge className={cn("absolute top-4 left-4 border-none text-white", post.color)}>
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                </CardContent>
              </motion.div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

