import type React from "react"
import Link from "next/link"
import { FileText, LayoutTemplate, Settings, Users, Home, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const sidebarLinks = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/dashboard/resumes", label: "My Resumes", icon: FileText },
  { href: "/dashboard/templates", label: "Templates", icon: LayoutTemplate },
  { href: "/dashboard/blog", label: "Blog", icon: BookOpen },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
]

export function DashboardSidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 border-r bg-muted/40">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <FileText className="h-6 w-6" />
          <span>Resume Builder</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-2 space-y-1">
        {sidebarLinks.map((link) => (
          <SidebarLink key={link.href} href={link.href} label={link.label} icon={link.icon} />
        ))}
      </nav>

      <div className="p-4 border-t">
        <Button variant="outline" className="w-full justify-start">
          <Users className="mr-2 h-4 w-4" />
          <span>Invite Team</span>
        </Button>
      </div>
    </aside>
  )
}

function SidebarLink({
  href,
  label,
  icon: Icon,
  isActive = false,
}: {
  href: string
  label: string
  icon: React.ElementType
  isActive?: boolean
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
        isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted hover:text-foreground",
      )}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Link>
  )
}

