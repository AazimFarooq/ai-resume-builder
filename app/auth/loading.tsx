import { Skeleton } from "@/components/ui/skeleton"

export default function AuthLoading() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-6 px-6">
        <div className="container max-w-screen-xl mx-auto">
          <Skeleton className="h-8 w-32" />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-2xl shadow-xl border overflow-hidden">
            {/* Auth header */}
            <div className="p-6 text-center border-b">
              <Skeleton className="h-8 w-48 mx-auto mb-2" />
              <Skeleton className="h-4 w-64 mx-auto" />
            </div>

            {/* Auth content */}
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-10 w-full" />
                ))}
              </div>

              <Skeleton className="h-4 w-full mx-auto" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

