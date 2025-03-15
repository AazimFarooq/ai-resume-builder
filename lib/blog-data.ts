// Sample data for blog functionality
// In a real application, this would be stored in a database

// Blog posts
export const posts = [
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
  {
    id: "3",
    slug: "networking-strategies",
    title: "Networking Strategies for Career Growth",
    excerpt: "Learn how to build and leverage your professional network for career advancement.",
    content: "Regularly attend industry events and conferences...",
    image: "/placeholder.svg?height=400&width=800",
    date: "2024-01-20",
    author: "Sarah Johnson",
    tags: ["Networking", "Career Advice"],
    views: 756,
    likes: 42,
    featured: true,
  },
]

// Comments
export const comments = [
  {
    id: "1",
    postId: "1",
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
        postId: "1",
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
]

