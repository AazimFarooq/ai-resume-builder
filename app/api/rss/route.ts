import { NextResponse } from "next/server"

// Reference to the posts array (in a real app, this would be a database)
const posts = [
  {
    id: "1",
    slug: "effective-resume-writing",
    title: "10 Tips for Effective Resume Writing",
    excerpt: "Learn how to create a resume that stands out and gets you noticed by employers.",
    content: "Your resume should be clear and concise. Aim for 1-2 pages maximum...",
    image: "/placeholder.svg?height=400&width=800",
    date: "2024-03-01",
    author: "Jane Smith",
    tags: ["Resume Tips", "Career Advice"],
    views: 1245,
    likes: 89,
    featured: true,
  },
  {
    id: "2",
    slug: "interview-preparation",
    title: "How to Prepare for Job Interviews",
    excerpt: "Master the art of interviewing with these essential tips and techniques.",
    content: "Always research the company before your interview...",
    image: "/placeholder.svg?height=400&width=800",
    date: "2024-02-15",
    author: "John Doe",
    tags: ["Interview Prep", "Career Advice"],
    views: 982,
    likes: 67,
    featured: false,
  },
]

export async function GET() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"

    // Generate RSS XML
    const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>AI Resume Builder Blog</title>
<link>${baseUrl}/blog</link>
<description>Expert advice on resume writing, job hunting, and career development</description>
<language>en</language>
<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
<atom:link href="${baseUrl}/api/rss" rel="self" type="application/rss+xml" />
${posts
  .map(
    (post) => `
<item>
<title>${post.title}</title>
<link>${baseUrl}/blog/${post.slug}</link>
<description>${post.excerpt}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
<guid isPermaLink="false">${post.id}</guid>
<author>${post.author}</author>
${post.tags ? post.tags.map((tag) => `<category>${tag}</category>`).join("") : ""}
</item>
`,
  )
  .join("")}
</channel>
</rss>`

    // Return as XML
    return new Response(rssXml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "s-maxage=3600, stale-while-revalidate",
      },
    })
  } catch (error) {
    console.error("Error generating RSS feed:", error)
    return NextResponse.json({ error: "Failed to generate RSS feed" }, { status: 500 })
  }
}

