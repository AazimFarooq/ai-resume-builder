import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { BlogPost } from "@/components/blog/blog-post"
import { BlogSidebar } from "@/components/blog/blog-sidebar"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// This would normally be a server function to get the post data
async function getBlogPost(slug: string) {
  // Sample data - in a real app, you would fetch this from a database or API
  const posts = [
    {
      id: "1",
      slug: "effective-resume-writing",
      title: "10 Tips for Effective Resume Writing",
      excerpt: "Learn how to create a resume that stands out and gets you noticed by employers.",
      content: `
        <h2 id="keep-it-concise">1. Keep it Concise</h2>
        <p>Your resume should be clear and concise. Aim for 1-2 pages maximum. Recruiters and hiring managers often spend just a few seconds scanning each resume, so make every word count.</p>
        
        <h2 id="highlight-achievements">2. Highlight Achievements</h2>
        <p>Focus on your achievements rather than just listing job duties. Use quantifiable metrics and specific examples to demonstrate your impact. For example, "Increased sales by 30%" is more powerful than "Responsible for sales."</p>
        
        <h2 id="use-keywords">3. Use Keywords</h2>
        <p>Include relevant keywords from the job description to pass Applicant Tracking Systems (ATS). Many companies use these systems to scan resumes for specific skills and qualifications before a human ever sees them.</p>
        
        <h2 id="customize">4. Customize for Each Job</h2>
        <p>Tailor your resume for each position you apply for. Highlight the skills and experiences most relevant to the specific job you're seeking.</p>
        
        <h2 id="professional-formatting">5. Use Professional Formatting</h2>
        <p>Keep your formatting clean, consistent, and professional. Use a readable font, clear section headings, and adequate white space. Avoid excessive colors or graphics unless applying for a creative position.</p>
        
        <h2 id="proofread">6. Proofread Carefully</h2>
        <p>Spelling and grammar errors can immediately disqualify you. Proofread your resume multiple times and ask someone else to review it as well.</p>
        
        <h2 id="action-verbs">7. Use Strong Action Verbs</h2>
        <p>Begin bullet points with powerful action verbs like "achieved," "implemented," "created," or "managed." This makes your accomplishments more impactful and engaging.</p>
        
        <h2 id="recent-experience">8. Prioritize Recent Experience</h2>
        <p>Focus on your most recent and relevant experience. You can include less detail for older positions.</p>
        
        <h2 id="education">9. Include Relevant Education and Training</h2>
        <p>List your education, certifications, and relevant professional development. For experienced professionals, this typically comes after your work experience.</p>
        
        <h2 id="contact-info">10. Provide Clear Contact Information</h2>
        <p>Make it easy for employers to contact you by including your phone number, email address, and LinkedIn profile at the top of your resume.</p>
      `,
      image: "/placeholder.svg?height=600&width=1200",
      date: "2024-03-01",
      author: "Jane Smith",
      tags: ["Resume Tips", "Career Advice"],
      views: 1245,
      likes: 89,
    },
  ]

  return posts.find((post) => post.slug === slug)
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The blog post you're looking for doesn't exist.",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image || "/og-image.jpg"],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogPost post={post} />
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
          <div className="w-full lg:w-80 shrink-0">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
