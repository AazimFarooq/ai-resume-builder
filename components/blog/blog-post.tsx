"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { format } from "date-fns"
import { motion, useScroll, useSpring } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Eye, ThumbsUp, Bookmark } from "lucide-react"
import { estimateReadingTime } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

interface BlogPostProps {
  post: any // In a real app, this would be properly typed
}

export function BlogPost({ post }: BlogPostProps) {
  const [mounted, setMounted] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [likes, setLikes] = useState(post.likes || 0)
  const [hasLiked, setHasLiked] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  const { toast } = useToast()

  useEffect(() => {
    setMounted(true)
    // Check if user has liked or bookmarked
    const liked = localStorage.getItem(`liked-${post.id}`)
    const bookmarked = localStorage.getItem(`bookmarked-${post.id}`)
    if (liked) setHasLiked(true)
    if (bookmarked) setIsBookmarked(true)
  }, [post.id])

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1)
      setHasLiked(true)
      localStorage.setItem(`liked-${post.id}`, "true")
      toast({
        title: "Post liked!",
        description: "Thank you for your feedback.",
      })
    }
  }

  const handleBookmark = () => {
    setIsBookmarked((prev) => !prev)
    if (!isBookmarked) {
      localStorage.setItem(`bookmarked-${post.id}`, "true")
      toast({
        title: "Post bookmarked!",
        description: "You can find this post in your saved items.",
      })
    } else {
      localStorage.removeItem(`bookmarked-${post.id}`)
      toast({
        title: "Bookmark removed",
        description: "Post removed from your saved items.",
      })
    }
  }

  return (
    <>
      {mounted && (
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50" style={{ scaleX }} />
      )}
      <div className="relative h-[60vh] bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
      </div>
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-32 bg-background rounded-t-xl p-6 sm:p-8 md:p-12 shadow-xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{format(new Date(post.date), "MMMM d, yyyy")}</time>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{estimateReadingTime(post.content)} min read</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{post.views || 0} views</span>
              </div>
              <span>By {post.author}</span>
            </div>
            <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 hidden md:flex">
              <Button variant="outline" size="icon" className="bg-background" onClick={handleLike} disabled={hasLiked}>
                <ThumbsUp className={cn("h-4 w-4", hasLiked && "fill-primary text-primary")} />
                <span className="sr-only">Like post</span>
              </Button>
              <Button variant="outline" size="icon" className="bg-background" onClick={handleBookmark}>
                <Bookmark className={cn("h-4 w-4", isBookmarked && "fill-primary text-primary")} />
                <span className="sr-only">Bookmark post</span>
              </Button>
              {likes > 0 && <div className="text-center text-sm font-medium">{likes}</div>}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

