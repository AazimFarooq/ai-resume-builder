"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
  query?: string
  category?: string
}

export function Pagination({ currentPage, totalPages, baseUrl, query, category }: PaginationProps) {
  const router = useRouter()

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams()
    if (query) params.set("q", query)
    if (category) params.set("category", category)
    params.set("page", page.toString())
    return `${baseUrl}?${params.toString()}`
  }

  const handlePageChange = (page: number) => {
    router.push(createPageUrl(page))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (totalPages <= 1) return null

  return (
    <nav className="flex justify-center items-center space-x-2 mt-12" aria-label="Pagination">
      <Button
        variant="outline"
        size="icon"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous page</span>
      </Button>
      <div className="flex items-center space-x-2">
        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1
          const isCurrentPage = page === currentPage
          const isNearCurrent = Math.abs(page - currentPage) <= 1
          const isEndPage = page === 1 || page === totalPages

          if (isNearCurrent || isEndPage) {
            return (
              <Button
                key={page}
                variant={isCurrentPage ? "default" : "outline"}
                size="icon"
                onClick={() => handlePageChange(page)}
                className={cn("w-8 h-8", isCurrentPage && "pointer-events-none")}
              >
                {page}
              </Button>
            )
          } else if ((page === 2 && currentPage > 4) || (page === totalPages - 1 && currentPage < totalPages - 3)) {
            return <span key={page}>...</span>
          }
          return null
        })}
      </div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next page</span>
      </Button>
    </nav>
  )
}

