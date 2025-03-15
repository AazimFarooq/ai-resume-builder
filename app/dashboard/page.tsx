import { redirect } from "next/navigation"

export default function DashboardPage() {
  // Redirect to the resumes page instead of the app dashboard
  redirect("/dashboard/resumes")
}

