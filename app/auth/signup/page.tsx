"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import AuthLayout from "@/components/auth/auth-layout"
import OAuthProviders from "@/components/auth/oauth-providers"

export default function SignupPage() {
  const router = useRouter()

  const handleOAuthSignup = (provider: string) => {
    console.log(`OAuth signup with ${provider}`)
    // In a real app, this would be handled by the OAuth provider's redirect
    router.push("/dashboard")
  }

  return (
    <AuthLayout title="Create an account" subtitle="Sign up with your preferred account">
      <div className="space-y-6">
        <OAuthProviders onLogin={handleOAuthSignup} />

        <motion.div
          className="text-center text-sm text-muted-foreground mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p>
            By signing up, you agree to our{" "}
            <Link href="/terms" className="text-primary hover:underline hover:text-primary/80 transition-colors">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary hover:underline hover:text-primary/80 transition-colors">
              Privacy Policy
            </Link>
          </p>

          <p className="mt-4">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-primary font-medium hover:underline hover:text-primary/80 transition-colors"
            >
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </AuthLayout>
  )
}

