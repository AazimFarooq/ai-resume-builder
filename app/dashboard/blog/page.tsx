import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BlogPostList } from "@/components/blog/blog-post-list"
import { PlusIcon } from "lucide-react"

export default function BlogDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Blog Posts</h1>
          <p className="text-muted-foreground">Manage your blog posts</p>
        </div>
        <Link href="/dashboard/blog/new">
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            New Post
          </Button>
        </Link>
      </div>

      <BlogPostList
        posts={[
          {
            id: "1",
            title: "10 Tips for Effective Resume Writing",
            date: "2024-03-01",
            author: "Jane Smith",
            tags: ["Resume Tips", "Career Advice"],
          },
          {
            id: "2",
            title: "How to Prepare for Job Interviews",
            date: "2024-02-15",
            author: "John Doe",
            tags: ["Interview Prep", "Career Advice"],
          },
          {
            id: "3",
            title: "Networking Strategies for Career Growth",
            date: "2024-01-20",
            author: "Sarah Johnson",
            tags: ["Networking", "Career Advice"],
          },
        ]}
      />
    </div>
  )
}

