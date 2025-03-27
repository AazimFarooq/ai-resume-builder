import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/global.css"
import "../styles/animations.css"
import "../styles/components/button.css"
import "../styles/components/card.css"
import "../styles/features/resume.css"
import "../styles/features/landing.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Resume Builder - Create Professional Resumes with AI",
  description:
    "Build ATS-friendly resumes that stand out and get you hired. Our AI-powered platform helps you create professional resumes tailored to your industry.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

