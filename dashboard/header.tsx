import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Bell, User, Search, Menu } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

export function DashboardHeader() {
  return (
    <header className="border-b border-border dark:border-gray-800 bg-background/95 dark:bg-[#0f172a]/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:supports-[backdrop-filter]:bg-[#0f172a]/60">
      <div className="flex h-16 items-center px-6">
        <button className="md:hidden mr-2">
          <Menu className="h-5 w-5 text-foreground dark:text-white" />
          <span className="sr-only">Toggle menu</span>
        </button>

        <div className="w-full flex items-center gap-4 md:gap-8">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full pl-8 md:w-[300px] lg:w-[400px] bg-background dark:bg-[#0f172a] border-input dark:border-gray-700"
            />
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <ThemeToggle />

            <Button
              variant="ghost"
              size="icon"
              className="relative text-foreground dark:text-white hover:bg-muted dark:hover:bg-[#1e293b]"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
              <span className="sr-only">Notifications</span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground dark:text-white hover:bg-muted dark:hover:bg-[#1e293b]"
                >
                  <User className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card dark:bg-[#1e293b] border-border dark:border-gray-700">
                <DropdownMenuLabel className="text-foreground dark:text-white">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-border dark:bg-gray-700" />
                <DropdownMenuItem className="text-foreground dark:text-gray-200 hover:bg-muted dark:hover:bg-[#0f172a]/60">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-foreground dark:text-gray-200 hover:bg-muted dark:hover:bg-[#0f172a]/60">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-border dark:bg-gray-700" />
                <DropdownMenuItem className="text-foreground dark:text-gray-200 hover:bg-muted dark:hover:bg-[#0f172a]/60">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}

