"use client"

import { BarChart } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"

const AIResumeAnalyzer = () => {
  const categories = [
    { name: "Content Quality", score: 85 },
    { name: "ATS Compatibility", score: 92 },
    { name: "Keyword Optimization", score: 78 },
    { name: "Format & Structure", score: 88 },
    { name: "Grammar & Spelling", score: 96 },
  ]

  return (
    <Card className="overflow-hidden border shadow-sm bg-card dark:bg-gray-800">
      <CardHeader className="p-4 flex flex-row items-center justify-between bg-card dark:bg-gray-800 border-b">
        <div className="flex items-center gap-2">
          <BarChart className="h-5 w-5 text-blue-500 dark:text-blue-400" />
          <h3 className="text-base font-medium">AI Resume Analyzer</h3>
        </div>
        <Badge variant="outline" className="text-xs font-normal bg-white dark:bg-gray-700">
          Premium
        </Badge>
      </CardHeader>

      <CardContent className="p-4 space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-base font-medium">Overall Score</h4>
            <div className="text-lg font-bold text-blue-500">
              87<span className="text-xs text-muted-foreground">/100</span>
            </div>
          </div>
          <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: "87%" }}></div>
          </div>
        </div>

        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.name}>
              <div className="flex justify-between items-center mb-1">
                <div className="text-sm">{category.name}</div>
                <div className="text-sm font-medium">{category.score}%</div>
              </div>
              <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${category.score}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 bg-gray-50 dark:bg-gray-900 border-t">
        <div className="text-sm">
          <span className="font-medium">AI Suggestion:</span> Add more quantifiable achievements to strengthen your
          experience section.
        </div>
      </CardFooter>
    </Card>
  )
}

export default AIResumeAnalyzer

