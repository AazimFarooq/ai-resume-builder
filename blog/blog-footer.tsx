import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Twitter, Linkedin, Github, Mail } from "lucide-react"

export function BlogFooter() {
  return (
    <footer className="bg-muted/50 dark:bg-[#0f172a] border-t border-border dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground dark:text-white">AI Resume Builder</h3>
            <p className="text-sm text-muted-foreground dark:text-gray-300">
              Create professional, ATS-optimized resumes in minutes with our AI-powered platform.
            </p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-foreground dark:text-gray-300 dark:hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-foreground dark:text-gray-300 dark:hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-foreground dark:text-gray-300 dark:hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground dark:text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground dark:text-gray-300 dark:hover:text-white"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/templates"
                  className="text-sm text-muted-foreground hover:text-foreground dark:text-gray-300 dark:hover:text-white"
                >
                  Resume Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-sm text-muted-foreground hover:text-foreground dark:text-gray-300 dark:hover:text-white"
                >
                  Career Guides
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground dark:text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground dark:text-gray-300 dark:hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground dark:text-gray-300 dark:hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground dark:text-gray-300 dark:hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground dark:text-gray-300 dark:hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground dark:text-white">Get Started</h3>
            <p className="text-sm text-muted-foreground dark:text-gray-300">
              Create your professional resume today with our AI-powered tools.
            </p>
            <Link href="/dashboard">
              <Button className="bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white">
                <Mail className="mr-2 h-4 w-4" />
                Try for Free
              </Button>
            </Link>
          </div>
        </div>

        <Separator className="my-8 bg-border dark:bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground dark:text-gray-300">
            © {new Date().getFullYear()} AI Resume Builder. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/sitemap"
              className="text-sm text-muted-foreground hover:text-foreground dark:text-gray-300 dark:hover:text-white"
            >
              Sitemap
            </Link>
            <Link
              href="/accessibility"
              className="text-sm text-muted-foreground hover:text-foreground dark:text-gray-300 dark:hover:text-white"
            >
              Accessibility
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-muted-foreground hover:text-foreground dark:text-gray-300 dark:hover:text-white"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

