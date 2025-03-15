"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Bookmark } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface BookmarkButtonProps {
  postId: string
}

export function BookmarkButton({ postId }: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const { toast } = useToast || { toast: () => {} }

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]")
    setIsBookmarked(bookmarks.includes(postId))
  }, [postId])

  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault()
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]")

    if (isBookmarked) {
      const newBookmarks = bookmarks.filter((id: string) => id !== postId)
      localStorage.setItem("bookmarks", JSON.stringify(newBookmarks))
      setIsBookmarked(false)
      if (toast) {
        toast({
          title: "Removed from bookmarks",
          description: "This post has been removed from your bookmarks.",
        })
      }
    } else {
      const newBookmarks = [...bookmarks, postId]
      localStorage.setItem("bookmarks", JSON.stringify(newBookmarks))
      setIsBookmarked(true)
      if (toast) {
        toast({
          title: "Added to bookmarks",
          description: "This post has been saved to your bookmarks.",
        })
      }
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background/90"
      onClick={toggleBookmark}
    >
      <motion.div initial={false} animate={isBookmarked ? { scale: [1, 1.2, 1] } : { scale: 1 }}>
        <Bookmark className={cn("h-4 w-4", isBookmarked ? "fill-primary text-primary" : "fill-none")} />
      </motion.div>
      <span className="sr-only">{isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"}</span>
    </Button>
  )
}

