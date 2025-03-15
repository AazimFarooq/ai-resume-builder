"use client"

import { useEffect, useState } from "react"
import axios from "axios"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  slug: string
  date: string
  author: string
  tags: string[]
  views: number
  likes: number
  image?: string
}

interface BlogResponse {
  posts: BlogPost[]
  pagination: {
    total: number
    pages: number
    page: number
    limit: number
  }
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
        const response = await axios.get<BlogResponse>(`${apiUrl}/api/blog/posts`)
        setPosts(response.data.posts || [])
        setError(null)
      } catch (err) {
        console.error("Error fetching blog posts:", err)
        setError("Failed to load blog posts. Please try again later.")
        setPosts([])
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="border rounded-lg p-6">
            {post.image && (
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span>{post.author}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

