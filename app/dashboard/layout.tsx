import type React from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-background dark:bg-[#0f172a]">
      <DashboardSidebar />
      <div className="flex-1">
        <DashboardHeader />
        <main className="p-6 bg-background dark:bg-[#0f172a]">{children}</main>
      </div>
    </div>
  )
}

