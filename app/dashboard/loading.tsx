import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardLoading() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-5 w-[350px]" />
      </div>

      {/* Resume Actions skeleton */}
      <div className="space-y-6">
        <Skeleton className="h-8 w-[180px]" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-[160px] rounded-xl" />
            ))}
        </div>
      </div>

      {/* Stats skeleton */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {Array(2)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-[120px] rounded-xl" />
          ))}
      </div>

      {/* Two-column layout skeleton */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <Skeleton className="h-8 w-[150px]" />
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-[80px] rounded-lg" />
            ))}
        </div>
        <div className="space-y-4">
          <Skeleton className="h-8 w-[120px]" />
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-[80px] rounded-lg" />
            ))}
        </div>
      </div>
    </div>
  )
}
