"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function BlogNewsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <section className="mt-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/10 to-[#3b82f6]/5 dark:from-[#3b82f6]/5 dark:to-[#3b82f6]/2 rounded-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative px-8 py-12 sm:px-12 sm:py-16 md:py-20 rounded-3xl text-center"
      >
        <Mail className="w-12 h-12 mx-auto mb-4 text-[#3b82f6]" />
        <h2 className="text-3xl font-bold mb-4 text-foreground dark:text-white">Get the latest career insights</h2>
        <p className="text-muted-foreground dark:text-gray-300 mb-8 max-w-md mx-auto">
          Join our newsletter and receive expert tips, industry trends, and exclusive career resources directly in your
          inbox.
        </p>
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[#3b82f6] dark:text-[#60a5fa] font-medium"
          >
            Thank you for subscribing! 🎉
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 border-border dark:border-gray-700"
            />
            <Button type="submit" className="bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white">
              Subscribe
            </Button>
          </form>
        )}
      </motion.div>
    </section>
  )
}

