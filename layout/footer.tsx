import Link from "next/link"
import { Twitter, Linkedin, Github, Mail, FileText } from "lucide-react"
import { ScrollLink } from "@/components/scroll-link"

export function Footer() {
  return (
    <footer className="bg-background dark:bg-[#0f172a] border-t border-border dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-5 w-5 text-foreground dark:text-white" />
              <span className="font-semibold text-base text-foreground dark:text-white">AI Resume Builder</span>
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-300 leading-relaxed">
              Create professional, ATS-optimized resumes in minutes with our AI-powered platform.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold text-base mb-3 text-foreground dark:text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-[#3b82f6] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <ScrollLink
                  href="#templates"
                  className="text-sm text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-[#3b82f6] transition-colors"
                >
                  Templates
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-[#3b82f6] transition-colors"
                >
                  Features
                </ScrollLink>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-sm text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-[#3b82f6] transition-colors"
                >
                  Guides
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold text-base mb-3 text-foreground dark:text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-[#3b82f6] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-[#3b82f6] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-[#3b82f6] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-[#3b82f6] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold text-base mb-3 text-foreground dark:text-white">Connect</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-[#3b82f6] transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-[#3b82f6] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-[#3b82f6] transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-[#3b82f6] transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border dark:border-gray-800 text-sm text-muted-foreground dark:text-gray-300 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} AI Resume Builder. All rights reserved.</p>
          <Link href="/dashboard" className="font-medium text-[#3b82f6] hover:underline">
            Get started with your resume
          </Link>
        </div>
      </div>
    </footer>
  )
}

