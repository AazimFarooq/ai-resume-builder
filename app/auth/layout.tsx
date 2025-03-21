import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Authentication - ResumeAI",
  description: "Sign in or create an account to access ResumeAI",
}

export default function AuthLayout({ children }: { children: ReactNode }) {
  return children
}

