"use client"

import { useState } from "react"
import { Mic } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

const AIInterviewSimulator = () => {
  const [isRecording, setIsRecording] = useState(false)

  return (
    <Card className="overflow-hidden border shadow-sm bg-card dark:bg-gray-800">
      <CardHeader className="p-4 flex flex-row items-center justify-between bg-card dark:bg-gray-800 border-b">
        <div className="flex items-center gap-2">
          <Mic className="h-5 w-5 text-blue-500 dark:text-blue-400" />
          <h3 className="text-base font-medium">AI Interview Simulator</h3>
        </div>
        <Badge variant="outline" className="text-xs font-normal bg-white dark:bg-gray-700">
          Premium
        </Badge>
      </CardHeader>

      <CardContent className="p-4 space-y-4">
        <h4 className="text-base font-medium">Practice Interview Questions</h4>

        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md border">
          <p className="text-sm">Tell me about yourself and your background.</p>
        </div>

        <div className="flex justify-center">
          <Button
            variant={isRecording ? "destructive" : "default"}
            size="icon"
            className="rounded-full w-12 h-12"
            onClick={() => setIsRecording(!isRecording)}
          >
            <Mic className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-center mb-1">
              <div className="text-sm">Confidence</div>
              <div className="text-sm font-medium">85%</div>
            </div>
            <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: "85%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <div className="text-sm">Relevance</div>
              <div className="text-sm font-medium">92%</div>
            </div>
            <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: "92%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <div className="text-sm">Articulation</div>
              <div className="text-sm font-medium">78%</div>
            </div>
            <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-500 rounded-full" style={{ width: "78%" }}></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default AIInterviewSimulator

