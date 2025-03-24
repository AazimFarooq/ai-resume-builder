import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Create Resume | Resume Builder",
  description: "Create a professional resume from scratch",
}

export default function CreateResumePage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Create New Resume</h1>
      <p>Resume creation interface will be implemented here.</p>
    </div>
  )
}

