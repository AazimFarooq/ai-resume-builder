"use client"

import { useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  // Use useEffect to handle mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  // Return children directly without any forced theme
  // This allows system preference to be respected during initial load
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

