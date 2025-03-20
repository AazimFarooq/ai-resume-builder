import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    status: "success",
    data: {
      name: "ResumeAI API",
      version: "1.0.0",
      documentation: "/api/docs",
    },
  })
}

