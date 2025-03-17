"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useTransition } from "react"

const popularTags = [
  "Resume Tips",
  "Interview Prep",
  "Career Change",
  "Job Search",
  "LinkedIn",
  "Personal Brand",
  "Networking",
  "Remote Work",
]

const recentPosts = [
  {
    id: "1",
    title: "How to Write a Cover Letter That Gets You Noticed",
    image: "/placeholder.svg?height=80&width=80",
    slug: "write-cover-letter",
  },
  {
    id: "2",
    title: "Top 5 Skills Employers Look for in 2024",
    image: "/placeholder.svg?height=80&width=80",
    slug: "top-skills-2024",
  },
  {
    id: "3",
    title: "Networking Tips for Introverts",
    image: "/placeholder.svg?height=80&width=80",
    slug: "networking-tips-introverts",
  },
]

export function BlogSidebar() {
  const [email, setEmail] = useState("")
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribe:", email)
    setEmail("")
  }

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set("q", term)
    } else {
      params.delete("q")
    }

    startTransition(() => {
      router.push(`/blog?${params.toString()}`)
    })
  }

  return (
    <div className="space-y-8">
      <Card className="border-border dark:border-gray-800">
        <CardHeader>
          <CardTitle className="text-foreground dark:text-white">Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground dark:text-gray-400" />
            <Input
              placeholder="Search articles..."
              defaultValue={searchParams.get("q") ?? ""}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-9 border-border dark:border-gray-700"
              aria-label="Search blog posts"
            />
            {isPending && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#3b82f6] border-r-transparent" />
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="border-border dark:border-gray-800">
        <CardHeader>
          <CardTitle className="text-foreground dark:text-white">Popular Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                <Badge
                  variant="secondary"
                  className="px-3 py-1 hover:bg-secondary/80 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-border dark:border-gray-800">
        <CardHeader>
          <CardTitle className="text-foreground dark:text-white">Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="flex items-center gap-3 group">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <h3 className="flex-1 text-sm font-medium text-foreground dark:text-white group-hover:text-[#3b82f6] transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-border dark:border-gray-800">
        <CardHeader>
          <CardTitle className="text-foreground dark:text-white">Newsletter</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubscribe} className="space-y-4">
            <p className="text-sm text-muted-foreground dark:text-gray-300">
              Get the latest career tips and insights delivered to your inbox.
            </p>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-border dark:border-gray-700"
            />
            <Button type="submit" className="w-full bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white">
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

