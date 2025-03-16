import { Suspense } from "react"
import type { Metadata } from "next"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogList } from "@/components/blog/blog-list"
import { BlogSidebar } from "@/components/blog/blog-sidebar"
import { BlogCategories } from "@/components/blog/blog-categories"
import { BlogFeatured } from "@/components/blog/blog-featured"
import { BlogNewsletter } from "@/components/blog/blog-newsletter"
import { BlogSkeleton } from "@/components/blog/blog-skeleton"
import { BlogFooter } from "@/components/blog/blog-footer"

export const metadata: Metadata = {
  title: "Blog - Career Advice & Resume Tips | AI Resume Builder",
  description:
    "Expert advice on resume writing, job hunting, and career development. Get the latest insights and tips to advance your career.",
  openGraph: {
    type: "website",
    title: "Career Blog - Expert Resume & Career Advice",
    description: "Discover professional tips and insights for resume writing, job hunting, and career development.",
    images: [
      {
        url: "/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "AI Resume Builder Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Blog - Expert Resume & Career Advice",
    description: "Discover professional tips and insights for resume writing, job hunting, and career development.",
    images: ["/og-blog.jpg"],
  },
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { q?: string; category?: string; page?: string }
}) {
  const query = searchParams?.q || ""
  const category = searchParams?.category || ""
  const page = Number(searchParams?.page) || 1

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "AI Resume Builder Blog",
            description: "Expert advice on resume writing, job hunting, and career development.",
            url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000/blog",
            publisher: {
              "@type": "Organization",
              name: "AI Resume Builder",
              logo: {
                "@type": "ImageObject",
                url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/logo.png`,
              },
            },
          }),
        }}
      />
      <main className="min-h-screen bg-background">
        <BlogHero />
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <BlogCategories />
          <BlogFeatured />
          <div className="flex flex-col lg:flex-row gap-8 mt-12">
            <div className="flex-1">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
                <h2 className="text-3xl font-bold">Latest Articles</h2>
              </div>
              <Suspense fallback={<BlogSkeleton />}>
                <BlogList query={query} category={category} page={page} />
              </Suspense>
            </div>
            <div className="w-full lg:w-80 shrink-0">
              <BlogSidebar />
            </div>
          </div>
          <BlogNewsletter />
        </div>
        <BlogFooter />
      </main>
    </>
  )
}
