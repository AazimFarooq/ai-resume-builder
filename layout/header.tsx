import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu } from "lucide-react"
import { ScrollLink } from "@/components/scroll-link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border dark:border-gray-800 bg-background/95 dark:bg-[#0f172a]/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:supports-[backdrop-filter]:bg-[#0f172a]/60">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                <path d="M18 14h-8" />
                <path d="M15 18h-5" />
                <path d="M10 6h8v4h-8V6Z" />
              </svg>
              AI Resume Builder
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              <ScrollLink
                href="#features"
                className="text-sm font-medium text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-[#3b82f6] transition-colors"
              >
                Features
              </ScrollLink>
              <ScrollLink
                href="#templates"
                className="text-sm font-medium text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-[#3b82f6] transition-colors"
              >
                Templates
              </ScrollLink>
              <Link
                href="/blog"
                className="text-sm font-medium text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-[#3b82f6] transition-colors"
              >
                Blog
              </Link>
              <ScrollLink
                href="#pricing"
                className="text-sm font-medium text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-[#3b82f6] transition-colors"
              >
                Pricing
              </ScrollLink>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="hidden md:flex items-center gap-2">
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="text-foreground dark:text-white hover:bg-muted dark:hover:bg-gray-800"
                >
                  Login
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button className="bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white">Get Started</Button>
              </Link>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-foreground dark:text-white">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-background dark:bg-[#0f172a] border-border dark:border-gray-800"
              >
                <nav className="flex flex-col gap-4 mt-8">
                  <ScrollLink
                    href="#features"
                    className="text-lg font-medium text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-[#3b82f6] transition-colors"
                  >
                    Features
                  </ScrollLink>
                  <ScrollLink
                    href="#templates"
                    className="text-lg font-medium text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-[#3b82f6] transition-colors"
                  >
                    Templates
                  </ScrollLink>
                  <Link
                    href="/blog"
                    className="text-lg font-medium text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-[#3b82f6] transition-colors"
                  >
                    Blog
                  </Link>
                  <ScrollLink
                    href="#pricing"
                    className="text-lg font-medium text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-[#3b82f6] transition-colors"
                  >
                    Pricing
                  </ScrollLink>
                  <div className="flex flex-col gap-2 mt-4">
                    <Link href="/login">
                      <Button
                        variant="outline"
                        className="w-full border-border dark:border-gray-700 text-foreground dark:text-white"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link href="/dashboard">
                      <Button className="w-full bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white">Get Started</Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

