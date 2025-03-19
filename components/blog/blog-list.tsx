import Link from "next/link"
import { format } from "date-fns"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar } from "lucide-react"
import { Pagination } from "@/components/blog/pagination"
import { BookmarkButton } from "@/components/blog/bookmark-button"
import { estimateReadingTime } from "@/lib/utils"

interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  author: string
  tags: string[]
}

interface BlogListProps {
  query?: string
  category?: string
  page?: number
}

export async function BlogList({ query, category, page = 1 }: BlogListProps) {
  // Sample data - in a real app, you would fetch this from an API or database
  const posts = [
    {
      id: "1",
      slug: "effective-resume-writing",
      title: "10 Tips for Effective Resume Writing",
      excerpt: "Learn how to create a resume that stands out and gets you noticed by employers.",
      content: `
        <h2>1. Keep it Concise</h2>
        <p>Your resume should be clear and concise. Aim for 1-2 pages maximum.</p>
        
        <h2>2. Highlight Achievements</h2>
        <p>Focus on your achievements rather than just listing job duties.</p>
        
        <h2>3. Use Keywords</h2>
        <p>Include relevant keywords from the job description to pass ATS systems.</p>
      `,
      image: "/placeholder.svg?height=400&width=800",
      date: "2024-03-01",
      author: "Jane Smith",
      tags: ["Resume Tips", "Career Advice"],
    },
    {
      id: "2",
      slug: "interview-preparation",
      title: "How to Prepare for Job Interviews",
      excerpt: "Master the art of interviewing with these essential tips and techniques.",
      content: `
        <h2>Research the Company</h2>
        <p>Always research the company before your interview.</p>
        
        <h2>Practice Common Questions</h2>
        <p>Prepare answers for common interview questions.</p>
        
        <h2>Prepare Questions</h2>
        <p>Have thoughtful questions ready to ask the interviewer.</p>
      `,
      image: "/placeholder.svg?height=400&width=800",
      date: "2024-02-15",
      author: "John Doe",
      tags: ["Interview Prep", "Career Advice"],
    },
    {
      id: "3",
      slug: "networking-strategies",
      title: "Networking Strategies for Career Growth",
      excerpt: "Learn how to build and leverage your professional network for career advancement.",
      content: `
        <h2>Attend Industry Events</h2>
        <p>Regularly attend industry events and conferences.</p>
        
        <h2>Maintain Relationships</h2>
        <p>Keep in touch with your contacts regularly.</p>
        
        <h2>Provide Value</h2>
        <p>Always look for ways to help others in your network.</p>
      `,
      image: "/placeholder.svg?height=400&width=800",
      date: "2024-01-20",
      author: "Sarah Johnson",
      tags: ["Networking", "Career Advice"],
    },
  ]

  // Filter posts based on query and category
  let filteredPosts = [...posts]

  if (query) {
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase()),
    )
  }

  if (category) {
    filteredPosts = filteredPosts.filter((post) => post.tags.includes(category))
  }

  const total = filteredPosts.length
  const postsPerPage = 9
  const totalPages = Math.max(1, Math.ceil(total / postsPerPage))

  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold">No posts found</h2>
        <p className="text-muted-foreground">Try adjusting your search or filter to find what you're looking for.</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <article key={post.slug} className="group relative">
            <Link href={`/blog/${post.slug}`}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <BookmarkButton postId={post.id} />
                  </div>
                </div>
                <CardHeader className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="px-2 py-0.5 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h2 className="font-bold text-xl group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.date}>{format(new Date(post.date || Date.now()), "MMM d, yyyy")}</time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{estimateReadingTime(post.content || "")} min read</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          </article>
        ))}
      </div>

      <Pagination currentPage={page} totalPages={totalPages} baseUrl="/blog" query={query} category={category} />
    </>
  )
}

