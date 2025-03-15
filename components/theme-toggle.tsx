"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative h-9 w-9 rounded-full">
          <span className="sr-only">Toggle theme</span>
          <Sun
            className={cn("h-5 w-5 transition-all", theme === "light" ? "scale-100 rotate-0" : "scale-0 -rotate-90")}
          />
          <Moon
            className={cn(
              "absolute h-5 w-5 transition-all",
              theme === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-90",
            )}
          />
          <Monitor
            className={cn(
              "absolute h-5 w-5 transition-all",
              theme === "system" ? "scale-100 rotate-0" : "scale-0 rotate-90",
            )}
          />
          <span
            className={cn(
              "absolute inset-0 rounded-full border-2 border-primary transition-all",
              theme === "light" ? "opacity-100" : "opacity-0",
            )}
          ></span>
          <span
            className={cn(
              "absolute inset-0 rounded-full border-2 border-primary transition-all",
              theme === "dark" ? "opacity-100" : "opacity-0",
            )}
          ></span>
          <span
            className={cn(
              "absolute inset-0 rounded-full border-2 border-primary transition-all",
              theme === "system" ? "opacity-100" : "opacity-0",
            )}
          ></span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")} className={theme === "light" ? "bg-accent" : ""}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className={theme === "dark" ? "bg-accent" : ""}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className={theme === "system" ? "bg-accent" : ""}>
          <Monitor className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

