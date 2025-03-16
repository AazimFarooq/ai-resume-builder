"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface PersonalInfoSectionProps {
  data: any
  onChange: (data: any) => void
}

export function PersonalInfoSection({ data, onChange }: PersonalInfoSectionProps) {
  const { toast } = useToast()
  const [isGenerating, setIsGenerating] = useState(false)
  const [formData, setFormData] = useState({
    title: data.title || "",
    fullName: data.fullName || "",
    email: data.email || "",
    phone: data.phone || "",
    location: data.location || "",
    targetJob: data.targetJob || "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    onChange({
      [name]: value,
    })
  }

  const handleAIOptimize = async () => {
    setIsGenerating(true)

    try {
      // In a real app, this would call an AI service to optimize the content
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simulate AI optimization
      if (formData.location) {
        const optimizedLocation = formData.location.includes(", ")
          ? formData.location
          : `${formData.location}, United States`

        setFormData((prev) => ({
          ...prev,
          location: optimizedLocation,
        }))

        onChange({
          location: optimizedLocation,
        })
      }

      toast({
        title: "Personal information optimized",
        description: "Your personal information has been professionally formatted.",
      })
    } catch (error) {
      toast({
        title: "Optimization failed",
        description: "There was an error optimizing your personal information.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-4">Personal Information</h2>
        <p className="text-muted-foreground mb-6">Enter your basic personal and contact information.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Resume Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="e.g., Software Engineer Resume"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="e.g., John Doe"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="e.g., john.doe@example.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="e.g., +1 (555) 123-4567"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="e.g., San Francisco, CA"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="targetJob">Target Job Title</Label>
          <Input
            id="targetJob"
            name="targetJob"
            value={formData.targetJob}
            onChange={handleInputChange}
            placeholder="e.g., Senior Software Engineer"
          />
        </div>
      </div>

      <Button variant="outline" className="w-full" onClick={handleAIOptimize} disabled={isGenerating}>
        <Sparkles className="mr-2 h-4 w-4" />
        {isGenerating ? "Optimizing..." : "AI Format Optimization"}
      </Button>
    </div>
  )
}

