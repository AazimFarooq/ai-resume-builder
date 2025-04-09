"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ZoomIn, ZoomOut, Maximize, Minimize } from "lucide-react"ff

interface ResumePreviewProps {
  data: any
}

export function ResumePreview({ data }: ResumePreviewProps) {
  const [zoom, setZoom] = useState(100)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleZoomIn = () => {
    if (zoom < 150) setZoom(zoom + 10)
  }

  const handleZoomOut = () => {
    if (zoom > 50) setZoom(zoom - 10)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  // Determine which template to render based on the templateId
  const renderTemplate = () => {
    switch (data.templateId) {
      case "professional":
        return <ProfessionalTemplate data={data} />
      case "modern":
        return <ModernTemplate data={data} />
      case "minimal":
        return <MinimalTemplate data={data} />
      default:
        return <ProfessionalTemplate data={data} />
    }
  }

  return (
    <div className={`bg-white ${isFullscreen ? "fixed inset-0 z-50 p-8" : ""}`}>
      <div className="flex justify-end gap-2 p-2 bg-muted/20 border-b">
        <Button variant="ghost" size="sm" onClick={handleZoomOut}>
          <ZoomOut className="h-4 w-4" />
        </Button>
        <span className="flex items-center text-sm">{zoom}%</span>
        <Button variant="ghost" size="sm" onClick={handleZoomIn}>
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" onClick={toggleFullscreen}>
          {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
        </Button>
      </div>

      <div
        className="overflow-auto bg-white"
        style={{
          transform: `scale(${zoom / 100})`,
          transformOrigin: "top center",
          height: isFullscreen ? "calc(100vh - 120px)" : "600px",
        }}
      >
        {renderTemplate()}
      </div>
    </div>
  )
}

// Template components
function ProfessionalTemplate({ data }: { data: any }) {
  return (
    <div className="max-w-[800px] mx-auto p-8">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">{data.fullName}</h1>
        <p className="text-muted-foreground">{data.targetJob}</p>
        <div className="flex justify-center items-center gap-4 mt-2 text-sm">
          <span>{data.email}</span>
          <span>•</span>
          <span>{data.phone}</span>
          <span>•</span>
          <span>{data.location}</span>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold border-b pb-1 mb-2">Professional Summary</h2>
        <p>{data.summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold border-b pb-1 mb-2">Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between">
              <h3 className="font-medium">{exp.position}</h3>
              <span className="text-sm">{exp.date}</span>
            </div>
            <p className="text-muted-foreground">{exp.company}</p>
            <p className="mt-1 text-sm">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold border-b pb-1 mb-2">Education</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between">
              <h3 className="font-medium">{edu.degree}</h3>
              <span className="text-sm">{edu.date}</span>
            </div>
            <p className="text-muted-foreground">{edu.institution}</p>
            <p className="mt-1 text-sm">{edu.description}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-lg font-bold border-b pb-1 mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <span key={index} className="bg-muted px-2 py-1 rounded text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ModernTemplate({ data }: { data: any }) {
  return (
    <div className="max-w-[800px] mx-auto p-8 font-sans">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-1 bg-primary/10 p-6 rounded-lg">
          <div className="mb-8">
            <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4"></div>
            <h1 className="text-xl font-bold text-center">{data.fullName}</h1>
            <p className="text-center text-sm text-muted-foreground">{data.targetJob}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-md font-bold mb-2">Contact</h2>
            <div className="space-y-2 text-sm">
              <p>{data.email}</p>
              <p>{data.phone}</p>
              <p>{data.location}</p>
            </div>
          </div>

          <div>
            <h2 className="text-md font-bold mb-2">Skills</h2>
            <div className="space-y-1">
              {data.skills.map((skill, index) => (
                <p key={index} className="text-sm">
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">Professional Summary</h2>
            <p className="text-sm">{data.summary}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">Experience</h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{exp.position}</h3>
                  <span className="text-xs bg-muted px-2 py-1 rounded">{exp.date}</span>
                </div>
                <p className="text-muted-foreground text-sm">{exp.company}</p>
                <p className="mt-1 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Education</h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{edu.degree}</h3>
                  <span className="text-xs bg-muted px-2 py-1 rounded">{edu.date}</span>
                </div>
                <p className="text-muted-foreground text-sm">{edu.institution}</p>
                <p className="mt-1 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function MinimalTemplate({ data }: { data: any }) {
  return (
    <div className="max-w-[800px] mx-auto p-8 font-sans">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{data.fullName}</h1>
        <p className="text-muted-foreground">{data.targetJob}</p>
        <div className="flex items-center gap-4 mt-2 text-sm">
          <span>{data.email}</span>
          <span>•</span>
          <span>{data.phone}</span>
          <span>•</span>
          <span>{data.location}</span>
        </div>
      </div>

      <div className="mb-6">
        <p>{data.summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-md uppercase tracking-wider font-bold mb-2">Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between">
              <h3 className="font-medium">
                {exp.position} • {exp.company}
              </h3>
              <span className="text-sm">{exp.date}</span>
            </div>
            <p className="mt-1 text-sm">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-md uppercase tracking-wider font-bold mb-2">Education</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between">
              <h3 className="font-medium">
                {edu.degree} • {edu.institution}
              </h3>
              <span className="text-sm">{edu.date}</span>
            </div>
            <p className="mt-1 text-sm">{edu.description}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-md uppercase tracking-wider font-bold mb-2">Skills</h2>
        <p>{data.skills.join(" • ")}</p>
      </div>
    </div>
  )
}

