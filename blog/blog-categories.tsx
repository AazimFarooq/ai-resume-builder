"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const categories = [
  {
    id: "all",
    name: "All",
    color: "bg-[#3b82f6]",
  },
  {
    id: "resume-tips",
    name: "Resume Tips",
    color: "bg-[#3b82f6]",
  },
  {
    id: "interview-prep",
    name: "Interview Prep",
    color: "bg-[#3b82f6]",
  },
  {
    id: "career-advice",
    name: "Career Advice",
    color: "bg-[#3b82f6]",
  },
  {
    id: "job-search",
    name: "Job Search",
    color: "bg-[#3b82f6]",
  },
  {
    id: "industry-insights",
    name: "Industry Insights",
    color: "bg-[#3b82f6]",
  },
]

export function BlogCategories() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || "all"

  return (
    <div className="relative">
      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              const params = new URLSearchParams(searchParams)
              if (category.id === "all") {
                params.delete("category")
              } else {
                params.set("category", category.id)
              }
              router.push(`/blog?${params.toString()}`)
            }}
            className={cn(
              "relative px-4 py-2 rounded-full text-sm font-medium transition-colors",
              currentCategory === category.id
                ? "text-white"
                : "text-muted-foreground hover:text-foreground dark:text-gray-300 dark:hover:text-white",
            )}
          >
            {currentCategory === category.id && (
              <motion.div
                layoutId="category-pill"
                className={cn("absolute inset-0 rounded-full -z-10", category.color)}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}

