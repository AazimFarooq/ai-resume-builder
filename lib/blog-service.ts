// In-memory data store for blog functionality
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
    category: "Resume Tips",
    views: 1245,
    likes: 89,
    featured: true,
    comments: [
      {
        id: "1",
        content: "Great article! This helped me improve my resume.",
        userId: "user1",
        user: {
          id: "user1",
          name: "Alice Johnson",
          image: "/placeholder.svg?height=40&width=40",
        },
        parentId: null,
        createdAt: "2024-03-05T12:00:00Z",
        edited: false,
        replies: [
          {
            id: "2",
            content: "I agree! The tips about quantifying achievements were especially helpful.",
            userId: "user2",
            user: {
              id: "user2",
              name: "Bob Smith",
              image: "/placeholder.svg?height=40&width=40",
            },
            parentId: "1",
            createdAt: "2024-03-05T14:30:00Z",
            edited: false,
          },
        ],
      },
    ],
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
    category: "Interview Prep",
    views: 982,
    likes: 67,
    featured: false,
    comments: [],
  },
]

export type BlogPostWithRelations = any

export async function getBlogPosts({
  query = "",
  category = "",
  tag = "",
  featured = false,
  page = 1,
  limit = 10,
}: {
  query?: string
  category?: string
  tag?: string
  featured?: boolean
  page?: number
  limit?: number
} = {}) {
  try {
    // Filter posts based on query parameters
    let filteredPosts = [...posts]

    if (query) {
      const lowerQuery = query.toLowerCase()
      filteredPosts = filteredPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(lowerQuery) ||
          post.content.toLowerCase().includes(lowerQuery) ||
          post.excerpt.toLowerCase().includes(lowerQuery),
      )
    }

    if (category) {
      filteredPosts = filteredPosts.filter((post) => post.category === category)
    }

    if (tag) {
      filteredPosts = filteredPosts.filter((post) => post.tags.includes(tag))
    }

    if (featured) {
      filteredPosts = filteredPosts.filter((post) => post.featured)
    }

    // Calculate pagination
    const total = filteredPosts.length
    const skip = (page - 1) * limit
    const paginatedPosts = filteredPosts.slice(skip, skip + limit)

    return {
      posts: paginatedPosts.map((post) => ({
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        image: post.image,
        date: post.date,
        author: post.author,
        category: post.category,
        tags: post.tags,
        views: post.views,
        likes: post.likes,
      })),
      total,
      page,
      totalPages: Math.ceil(total / limit),
    }
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    throw new Error("Failed to fetch blog posts")
  }
}

export async function getBlogPost(slug: string) {
  try {
    const post = posts.find((post) => post.slug === slug)

    if (!post) {
      return null
    }

    // Increment view count
    post.views += 1

    return post
  } catch (error) {
    console.error("Error fetching blog post:", error)
    throw new Error("Failed to fetch blog post")
  }
}

export async function getRelatedPosts(postId: string, tags: string[], limit = 3) {
  try {
    // Find posts with similar tags, excluding the current post
    const relatedPosts = posts
      .filter((post) => post.id !== postId && post.tags.some((tag) => tags.includes(tag)))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit)
      .map((post) => ({
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        image: post.image,
        date: post.date,
        tags: post.tags,
      }))

    return relatedPosts
  } catch (error) {
    console.error("Error fetching related posts:", error)
    throw new Error("Failed to fetch related posts")
  }
}

export async function getFeaturedPosts(limit = 3) {
  try {
    const featuredPosts = posts
      .filter((post) => post.featured)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit)
      .map((post) => ({
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        image: post.image,
        date: post.date,
        tags: post.tags,
      }))

    return featuredPosts
  } catch (error) {
    console.error("Error fetching featured posts:", error)
    throw new Error("Failed to fetch featured posts")
  }
}

export async function getPopularTags(limit = 10) {
  try {
    // Count occurrences of each tag
    const tagCounts = {}

    posts.forEach((post) => {
      post.tags.forEach((tag) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1
      })
    })

    // Convert to array of objects
    const tags = Object.entries(tagCounts).map(([name, count]) => ({
      name,
      count,
    }))

    // Sort by count (descending) and limit
    return tags.sort((a, b) => b.count - a.count).slice(0, limit)
  } catch (error) {
    console.error("Error fetching popular tags:", error)
    throw new Error("Failed to fetch popular tags")
  }
}

export async function getCategories() {
  try {
    // Count occurrences of each category
    const categoryCounts = {}

    posts.forEach((post) => {
      if (post.category) {
        categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1
      }
    })

    // Format the response
    return Object.entries(categoryCounts).map(([name, count]) => ({
      name,
      count,
    }))
  } catch (error) {
    console.error("Error fetching categories:", error)
    throw new Error("Failed to fetch categories")
  }
}

export async function getUserInteractions(userId: string, postId?: string) {
  try {
    // Mock user interactions
    const interactions = [
      { id: "1", type: "like", postId: "1", userId: "user1" },
      { id: "2", type: "bookmark", postId: "2", userId: "user1" },
    ]

    // Filter by userId and optionally postId
    const filteredInteractions = interactions.filter(
      (interaction) => interaction.userId === userId && (postId ? interaction.postId === postId : true),
    )

    // Transform to a more usable format
    const result = {
      likes: [],
      bookmarks: [],
    }

    filteredInteractions.forEach((interaction) => {
      if (interaction.type === "like") {
        result.likes.push(interaction.postId)
      } else if (interaction.type === "bookmark") {
        result.bookmarks.push(interaction.postId)
      }
    })

    return result
  } catch (error) {
    console.error("Error fetching user interactions:", error)
    throw new Error("Failed to fetch user interactions")
  }
}

