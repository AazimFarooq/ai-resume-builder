"use client"

import { useState, useCallback } from "react"

type ToastProps = {
  title: string
  description: string
  variant?: "default" | "destructive"
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = useCallback((props: ToastProps) => {
    // In a real implementation, this would show a toast notification
    // For now, we'll just log to the console
    console.log(`Toast: ${props.title} - ${props.description} (${props.variant || "default"})`)
  }, [])

  return { toast }
}

