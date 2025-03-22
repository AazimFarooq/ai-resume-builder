"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { ResumeActions } from "@/components/dashboard/resume-actions"

export default function DashboardClient() {
  const [isLoaded, setIsLoaded] = useState(true)

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground mb-8">Welcome back! Here's an overview of your resume progress.</p>
      </motion.div>

      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Removed the duplicate "Resume Actions" heading */}
          <ResumeActions />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Resume Stats</h2>
          <DashboardStats />
        </motion.div>
      </div>
    </div>
  )
}

