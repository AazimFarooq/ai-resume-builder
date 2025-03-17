"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { SummarySection } from "@/components/resume/sections/summary"
import { ExperienceSection } from "@/components/resume/sections/experience"
import { EducationSection } from "@/components/resume/sections/education"
import { SkillsSection } from "@/components/resume/sections/skills"
import { PersonalInfoSection } from "@/components/resume/sections/personal-info"
import { TemplateSection } from "@/components/resume/sections/template"
import { ResumePreview } from "@/components/resume/preview"

interface ResumeEditorProps {
  initialData: any
  onSave: (data: any) => void
}

export function ResumeEditor({ initialData, onSave }: ResumeEditorProps) {
  const [resumeData, setResumeData] = useState(initialData)
  const [activeTab, setActiveTab] = useState("personal")

  const updateResumeData = (section: string, data: any) => {
    setResumeData((prev) => ({
      ...prev,
      ...data,
    }))
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="template">Template</TabsTrigger>
          </TabsList>

          <Card className="p-6">
            <TabsContent value="personal" className="mt-0">
              <PersonalInfoSection data={resumeData} onChange={(data) => updateResumeData("personal", data)} />
            </TabsContent>

            <TabsContent value="summary" className="mt-0">
              <SummarySection data={resumeData} onChange={(data) => updateResumeData("summary", data)} />
            </TabsContent>

            <TabsContent value="experience" className="mt-0">
              <ExperienceSection data={resumeData} onChange={(data) => updateResumeData("experience", data)} />
            </TabsContent>

            <TabsContent value="education" className="mt-0">
              <EducationSection data={resumeData} onChange={(data) => updateResumeData("education", data)} />
            </TabsContent>

            <TabsContent value="skills" className="mt-0">
              <SkillsSection data={resumeData} onChange={(data) => updateResumeData("skills", data)} />
            </TabsContent>

            <TabsContent value="template" className="mt-0">
              <TemplateSection data={resumeData} onChange={(data) => updateResumeData("template", data)} />
            </TabsContent>
          </Card>
        </Tabs>
      </div>

      <div className="sticky top-24">
        <h3 className="text-lg font-medium mb-4">Live Preview</h3>
        <div className="border rounded-lg overflow-hidden">
          <ResumePreview data={resumeData} />
        </div>
      </div>
    </div>
  )
}

