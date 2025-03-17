"use client"

import type React from "react"

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileUp, FileText, Upload, AlertCircle, Check, Cloud, Laptop, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

// Supported file types
const SUPPORTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
]

export default function ImportResumePage() {
  const router = useRouter()
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("computer")
  const [isDragging, setIsDragging] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isPageLoading, setIsPageLoading] = useState(true)

  // Define all handlers using useCallback to avoid recreating them on each render
  const handleFileSelect = useCallback((file: File) => {
    setError(null)

    // Check if file type is supported
    if (!SUPPORTED_FILE_TYPES.includes(file.type)) {
      setError("File type not supported. Please upload a PDF, DOCX, DOC, or TXT file.")
      setSelectedFile(null)
      return
    }

    // Check file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      setError("File size exceeds 10MB. Please upload a smaller file.")
      setSelectedFile(null)
      return
    }

    setSelectedFile(file)
  }, [])

  const handleFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (files && files.length > 0) {
        handleFileSelect(files[0])
      }
    },
    [handleFileSelect],
  )

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(false)

      const files = e.dataTransfer.files
      if (files && files.length > 0) {
        handleFileSelect(files[0])
      }
    },
    [handleFileSelect, setIsDragging],
  )

  const handleFileSystemAccess = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Check if File System Access API is supported
      if (!("showOpenFilePicker" in window)) {
        throw new Error(
          "Your browser doesn't support the File System Access API. Please use the file upload option instead.",
        )
      }

      // File types we accept
      const fileTypes = [
        {
          description: "Resume Documents",
          accept: {
            "application/pdf": [".pdf"],
            "application/msword": [".doc"],
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
            "text/plain": [".txt"],
          },
        },
      ]

      // Show file picker
      const [fileHandle] = await window.showOpenFilePicker({
        types: fileTypes,
        multiple: false,
      })

      // Get the file
      const file = await fileHandle.getFile()
      handleFileSelect(file)
    } catch (err) {
      // Handle user cancellation
      if (err instanceof Error && err.name !== "AbortError") {
        setError(err.message)
      }
    } finally {
      setIsLoading(false)
    }
  }, [handleFileSelect])

  const handleGoogleDriveImport = useCallback(() => {
    toast({
      title: "Google Drive Integration",
      description: "This feature will be available soon. Please use local file upload for now.",
    })
  }, [toast])

  const handleDropboxImport = useCallback(() => {
    toast({
      title: "Dropbox Integration",
      description: "This feature will be available soon. Please use local file upload for now.",
    })
  }, [toast])

  const handleUpload = useCallback(async () => {
    if (!selectedFile) return

    setIsLoading(true)

    try {
      // In a real app, you would upload the file to your server here
      // For now, we'll simulate a successful upload
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Resume imported successfully",
        description: `${selectedFile.name} has been imported and is ready for editing.`,
      })

      // Add a small delay before redirecting to allow the toast to be seen
      // and to prevent the white flash during navigation
      setTimeout(() => {
        router.push("/dashboard/resumes")
      }, 300)
    } catch (err) {
      setError("Failed to upload resume. Please try again.")
      setIsLoading(false)
    }
  }, [selectedFile, toast, router])

  // Add this useEffect hook to simulate hydration completion
  useEffect(() => {
    // Set a small timeout to simulate hydration completion
    const timer = setTimeout(() => {
      setIsPageLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Import Resume</h1>
        <p className="text-muted-foreground mt-2">Upload your existing resume to enhance it with our AI tools</p>
      </div>

      <Tabs defaultValue="computer" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="computer">
            <Laptop className="mr-2 h-4 w-4" />
            From Computer
          </TabsTrigger>
          <TabsTrigger value="google-drive">
            <Cloud className="mr-2 h-4 w-4" />
            Google Drive
          </TabsTrigger>
          <TabsTrigger value="dropbox">
            <Cloud className="mr-2 h-4 w-4" />
            Dropbox
          </TabsTrigger>
        </TabsList>

        <TabsContent value="computer" className="mt-0">
          <Card>
            <CardContent className="pt-6">
              <div
                className={cn(
                  "border-2 border-dashed rounded-lg p-12 text-center hover:bg-muted/50 transition-colors cursor-pointer",
                  isDragging && "border-primary bg-primary/5",
                  selectedFile && "border-green-500 bg-green-500/5",
                )}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileInputChange}
                />

                {selectedFile ? (
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                      <Check className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">File Selected</h3>
                    <p className="text-muted-foreground mb-2">{selectedFile.name}</p>
                    <p className="text-sm text-muted-foreground">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <FileUp className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Drag & Drop your resume here</h3>
                    <p className="text-muted-foreground mb-4">or click to browse files</p>
                    <p className="text-sm text-muted-foreground">Supports PDF, DOCX, DOC, and TXT files (max 10MB)</p>
                  </div>
                )}
              </div>

              {error && (
                <div className="flex items-center gap-2 mt-4 p-3 bg-destructive/10 text-destructive rounded-md">
                  <AlertCircle className="h-5 w-5" />
                  <p className="text-sm">{error}</p>
                </div>
              )}

              <div className="mt-6">
                <h3 className="font-medium mb-2">Or use File System Access API</h3>
                <Button variant="outline" onClick={handleFileSystemAccess} disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <Upload className="mr-2 h-4 w-4 animate-spin" />
                      Accessing Files...
                    </>
                  ) : (
                    <>
                      <FileText className="mr-2 h-4 w-4" />
                      Select from Files
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="google-drive" className="mt-0">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Cloud className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Import from Google Drive</h3>
                <p className="text-muted-foreground mb-6 text-center max-w-md">
                  Connect your Google Drive account to import your resume documents directly
                </p>
                <Button onClick={handleGoogleDriveImport}>Connect Google Drive</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dropbox" className="mt-0">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Cloud className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Import from Dropbox</h3>
                <p className="text-muted-foreground mb-6 text-center max-w-md">
                  Connect your Dropbox account to import your resume documents directly
                </p>
                <Button onClick={handleDropboxImport}>Connect Dropbox</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between mt-8">
        <Button variant="outline" asChild>
          <Link href="/dashboard/resumes">
            <X className="mr-2 h-4 w-4" />
            Cancel
          </Link>
        </Button>
        <Button onClick={handleUpload} disabled={!selectedFile || isLoading}>
          {isLoading ? (
            <>
              <Upload className="mr-2 h-4 w-4 animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Upload Resume
            </>
          )}
        </Button>
      </div>
    </div>
  )
}

