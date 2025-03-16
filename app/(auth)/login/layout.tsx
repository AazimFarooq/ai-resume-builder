import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Authentication - AI Resume Builder",
  description: "Authentication pages for the AI Resume Builder",
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4">
        <div className="container flex justify-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <FileText className="h-6 w-6" />
            <span>AI Resume Builder</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center">{children}</main>
    </div>
  )
}
