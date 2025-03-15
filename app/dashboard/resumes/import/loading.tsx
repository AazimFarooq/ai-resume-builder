export default function Loading() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Import Resume</h1>
        <p className="text-muted-foreground mt-2">Upload your existing resume to enhance it with our AI tools</p>
      </div>
      <div className="flex items-center justify-center h-64">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-r-transparent"></div>
      </div>
    </div>
  )
}

