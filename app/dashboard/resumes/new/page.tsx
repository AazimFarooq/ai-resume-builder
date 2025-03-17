"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

// Sample template data
const templates = [
  {
    id: "professional",
    name: "Professional",
    description: "A clean and professional template suitable for most industries",
    image: "/placeholder.svg?height=200&width=150",
  },
  {
    id: "modern",
    name: "Modern",
    description: "A contemporary design with a creative touch",
    image: "/placeholder.svg?height=200&width=150",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "A simple and elegant design focusing on content",
    image: "/placeholder.svg?height=200&width=150",
  },
  {
    id: "creative",
    name: "Creative",
    description: "A bold design for creative professionals",
    image: "/placeholder.svg?height=200&width=150",
  },
  {
    id: "executive",
    name: "Executive",
    description: "A sophisticated design for senior positions",
    image: "/placeholder.svg?height=200&width=150",
  },
  {
    id: "technical",
    name: "Technical",
    description: "Optimized for technical roles and skills",
    image: "/placeholder.svg?height=200&width=150",
  },
]

export default function NewResumePage() {
  const router = useRouter()
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [selectedTemplate, setSelectedTemplate] = useState("")
  const [formData, setFormData] = useState({
    title: "",
    fullName: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
    targetJob: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showSelection, setShowSelection] = useState(false)
  // Modify the component state to include a new selection mode
  const [selectionMode, setSelectionMode] = useState<"initial" | "templates">("initial")

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle template selection
  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId)
    setShowSelection(true)

    // Hide the selection animation after a short delay
    setTimeout(() => {
      setShowSelection(false)
    }, 1500)
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // In a real app, you would send the data to your server here
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Resume created successfully",
        description: `${formData.title} has been created and is ready for editing.`,
      })

      // Redirect to the resume editor
      router.push("/dashboard/resumes")
    } catch (err) {
      toast({
        title: "Error creating resume",
        description: "There was an error creating your resume. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Get the selected template details
  const selectedTemplateDetails = templates.find((t) => t.id === selectedTemplate)

  // Modify the renderTemplateSelection function to make the Continue button more accessible
  // Update the renderTemplateSelection function to first show two main options when in initial mode
  const renderTemplateSelection = () => {
    if (selectionMode === "initial") {
      return (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-foreground dark:text-white">Choose How to Start</h2>
            <p className="text-muted-foreground dark:text-gray-300">Select how you'd like to create your resume</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Blank Template Option */}
            <Card
              className={cn(
                "cursor-pointer transition-all overflow-hidden hover:shadow-lg border-2 bg-card dark:bg-[#1e293b] border-border dark:border-gray-700",
                selectedTemplate === "blank" ? "border-primary" : "border-transparent hover:border-primary/50",
              )}
              onClick={() => {
                setSelectedTemplate("blank")
                setShowSelection(true)
                setTimeout(() => {
                  setShowSelection(false)
                  setStep(2) // Directly go to step 2 when blank template is selected
                }, 1000)
              }}
            >
              <CardContent className="p-0 relative">
                <div className="aspect-[16/9] relative overflow-hidden bg-gradient-to-b from-background to-muted dark:from-[#0f172a] dark:to-[#1e293b] flex items-center justify-center p-4">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-background dark:bg-[#0f172a] flex items-center justify-center shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground dark:text-white">Blank Template</h3>
                    <p className="text-muted-foreground dark:text-gray-300 text-sm max-w-xs mx-auto">
                      Start from scratch and fully customize your resume
                    </p>
                  </div>
                </div>
                <div className="p-4 border-t border-border dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-sm text-foreground dark:text-white mb-1">Blank Template</h3>
                      <p className="text-xs text-muted-foreground dark:text-gray-400">
                        Complete freedom to design your resume
                      </p>
                    </div>
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
                      Select
                    </Button>
                  </div>
                  {selectedTemplate === "blank" && (
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground rounded-full p-1 shadow-lg">
                      <Check className="h-4 w-4" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Existing Templates Option */}
            <Card
              className="cursor-pointer transition-all overflow-hidden hover:shadow-lg border-2 border-transparent hover:border-primary/50 bg-card dark:bg-[#1e293b] border-border dark:border-gray-700"
              onClick={() => setSelectionMode("templates")}
            >
              <CardContent className="p-0 relative">
                <div className="aspect-[16/9] relative overflow-hidden bg-gradient-to-b from-background to-muted dark:from-[#0f172a] dark:to-[#1e293b] flex items-center justify-center p-4">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-3 flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-2 w-full h-full">
                        <div className="w-full h-full rounded-md shadow-sm bg-blue-50 dark:bg-blue-900/20"></div>
                        <div className="w-full h-full rounded-md shadow-sm bg-green-50 dark:bg-green-900/20"></div>
                        <div className="w-full h-full rounded-md shadow-sm bg-amber-50 dark:bg-amber-900/20"></div>
                        <div className="w-full h-full rounded-md shadow-sm bg-purple-50 dark:bg-purple-900/20"></div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground dark:text-white">Choose from Templates</h3>
                    <p className="text-muted-foreground dark:text-gray-300 text-sm max-w-xs mx-auto">
                      Select from our professionally designed templates
                    </p>
                  </div>
                </div>
                <div className="p-4 border-t border-border dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-sm text-foreground dark:text-white mb-1">
                        Professional Templates
                      </h3>
                      <p className="text-xs text-muted-foreground dark:text-gray-400">ATS-friendly resume designs</p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-primary hover:text-primary hover:bg-primary/10"
                      onClick={(e) => {
                        e.stopPropagation() // Prevent the card click event
                        setSelectionMode("templates")
                      }}
                    >
                      Browse
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/40 dark:bg-[#0f172a]/40 rounded-lg p-4 mt-4">
            <h3 className="font-medium text-sm mb-2 text-foreground dark:text-white">
              Not sure which option to choose?
            </h3>
            <p className="text-xs text-muted-foreground dark:text-gray-400">
              <strong>Blank templates</strong> are perfect if you want complete control over your resume's layout.
              <strong className="ml-2">Professional templates</strong> are ideal if you want a polished, ready-to-use
              design.
            </p>
          </div>
        </div>
      )
    }

    // If not in initial mode, show the template grid with improved UI
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-foreground dark:text-white">Choose a Template</h2>
            <p className="text-muted-foreground dark:text-gray-300">Select a template for your resume</p>
          </div>
          <Button
            variant="outline"
            onClick={() => setSelectionMode("initial")}
            className="flex items-center gap-2 transition-all duration-200 hover:bg-muted/50 dark:hover:bg-[#1e293b]/50 border-border dark:border-gray-700 text-foreground dark:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Options
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((template) => (
            <Card
              key={template.id}
              className={cn(
                "cursor-pointer transition-all overflow-hidden group hover:shadow-md border-2 bg-card dark:bg-[#1e293b] border-border dark:border-gray-700",
                selectedTemplate === template.id ? "border-primary" : "border-transparent hover:border-primary/50",
              )}
              onClick={() => handleTemplateSelect(template.id)}
            >
              <CardContent className="p-0 relative">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={template.image || "/placeholder.svg"}
                    alt={template.name}
                    className={cn(
                      "w-full h-full object-cover transition-transform duration-300",
                      selectedTemplate === template.id ? "scale-[1.02]" : "group-hover:scale-[1.02]",
                    )}
                  />
                  {selectedTemplate === template.id && (
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground rounded-full p-1 shadow-lg">
                      <Check className="h-4 w-4" />
                    </div>
                  )}
                </div>
                <div className="p-3 border-t border-border dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-sm text-foreground dark:text-white">{template.name}</h3>
                      <p className="text-xs text-muted-foreground dark:text-gray-400">{template.description}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-primary hover:text-primary hover:bg-primary/10"
                      onClick={(e) => {
                        e.stopPropagation() // Prevent the card click event
                        handleTemplateSelect(template.id)
                        setTimeout(() => setStep(2), 1000) // Go to step 2 after selection
                      }}
                    >
                      Select
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/40 dark:bg-[#0f172a]/40 rounded-lg p-4 mt-4">
          <h3 className="font-medium text-sm mb-2 text-foreground dark:text-white">Template Selection Tips</h3>
          <ul className="text-xs text-muted-foreground dark:text-gray-400 space-y-1">
            <li className="flex items-start gap-2">
              <div className="rounded-full bg-primary/20 p-0.5 mt-0.5">
                <Check className="h-3 w-3 text-primary" />
              </div>
              <span>Choose a template that matches your industry and career level</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="rounded-full bg-primary/20 p-0.5 mt-0.5">
                <Check className="h-3 w-3 text-primary" />
              </div>
              <span>All templates are ATS-friendly to ensure your resume gets past automated screening</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  // Replace the renderBasicInformation function with this updated version
  const renderBasicInformation = () => (
    <div className="space-y-6 pb-20">
      <div>
        <h2 className="text-2xl font-bold text-foreground dark:text-white">Basic Information</h2>
        <p className="text-muted-foreground dark:text-gray-300">Enter your basic details to get started</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-foreground dark:text-white">
                Resume Title
              </Label>
              <Input
                id="title"
                name="title"
                placeholder="e.g., Software Engineer Resume"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="bg-background dark:bg-[#0f172a] border-input dark:border-gray-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-foreground dark:text-white">
                Full Name
              </Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="bg-background dark:bg-[#0f172a] border-input dark:border-gray-700"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="targetJob" className="text-foreground dark:text-white">
                Target Job Title
              </Label>
              <Input
                id="targetJob"
                name="targetJob"
                placeholder="e.g., Senior Software Engineer"
                value={formData.targetJob}
                onChange={handleInputChange}
                className="bg-background dark:bg-[#0f172a] border-input dark:border-gray-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground dark:text-white">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-background dark:bg-[#0f172a] border-input dark:border-gray-700"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground dark:text-white">
                Phone
              </Label>
              <Input
                id="phone"
                name="phone"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-background dark:bg-[#0f172a] border-input dark:border-gray-700"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-foreground dark:text-white">
              Location
            </Label>
            <Input
              id="location"
              name="location"
              placeholder="City, State, Country"
              value={formData.location}
              onChange={handleInputChange}
              className="bg-background dark:bg-[#0f172a] border-input dark:border-gray-700"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="summary" className="text-foreground dark:text-white">
              Professional Summary
            </Label>
            <Textarea
              id="summary"
              name="summary"
              placeholder="Write a brief summary of your professional background and key qualifications..."
              value={formData.summary}
              onChange={handleInputChange}
              rows={4}
              className="bg-background dark:bg-[#0f172a] border-input dark:border-gray-700"
            />
          </div>
        </div>
      </form>
    </div>
  )

  // Replace the return statement with this updated version
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8 bg-background dark:bg-[#0f172a]">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground dark:text-white">Create New Resume</h1>
        <p className="text-muted-foreground dark:text-gray-300 mt-2">
          Follow the steps below to create your professional resume
        </p>
      </div>

      <div className="mb-8">
        <div className="relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300",
                  step >= 1
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground dark:bg-[#1e293b] dark:text-gray-400",
                )}
              >
                1
              </div>
              <div className="ml-4">
                <p className="font-medium text-foreground dark:text-white">Choose Template</p>
              </div>
            </div>
            <div className="hidden sm:block w-24 h-0.5 bg-muted dark:bg-[#1e293b]"></div>
            <div className="flex items-center">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300",
                  step >= 2
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground dark:bg-[#1e293b] dark:text-gray-400",
                )}
              >
                2
              </div>
              <div className="ml-4">
                <p className="font-medium text-foreground dark:text-white">Basic Information</p>
              </div>
            </div>
          </div>
          <div className="absolute top-5 left-5 right-5 h-0.5 bg-muted dark:bg-[#1e293b] -z-10"></div>
        </div>
      </div>

      <div className="pb-8">
        {step === 1 && renderTemplateSelection()}
        {step === 2 && renderBasicInformation()}
      </div>

      {/* Navigation bar at the bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-10 bg-background/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-t border-border dark:border-gray-800 shadow-lg transition-all duration-300">
        <div className="container max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {step === 1 ? (
              <Link href="/dashboard/resumes">
                <Button
                  variant="outline"
                  className="transition-all hover:bg-muted dark:hover:bg-[#1e293b] border-border dark:border-gray-700 text-foreground dark:text-white"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Resumes
                </Button>
              </Link>
            ) : (
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
                className="transition-all hover:bg-muted dark:hover:bg-[#1e293b] border-border dark:border-gray-700 text-foreground dark:text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Templates
              </Button>
            )}

            {step === 2 && (
              <Button
                onClick={handleSubmit}
                disabled={isLoading}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isLoading ? (
                  <>
                    <Save className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Create Resume
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

