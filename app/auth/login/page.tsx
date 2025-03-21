"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import AuthLayout from "@/components/auth/auth-layout"
import OAuthProviders from "@/components/auth/oauth-providers"

export default function LoginPage() {
  const router = useRouter()

  const handleOAuthLogin = (provider: string) => {
    console.log(`OAuth login with ${provider}`)
    // In a real app, this would be handled by the OAuth provider's redirect
    router.push("/dashboard")
  }

  return (
    <AuthLayout title="Welcome back" subtitle="Sign in with your preferred account">
      <div className="space-y-6">
        <OAuthProviders onLogin={handleOAuthLogin} />

        <motion.p
          className="text-center text-sm text-muted-foreground mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Don't have an account?{" "}
          <Link
            href="/auth/signup"
            className="text-primary font-medium hover:underline hover:text-primary/80 transition-colors"
          >
            Sign up
          </Link>
        </motion.p>
      </div>
    </AuthLayout>
  )
}

