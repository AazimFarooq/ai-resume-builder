import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export function PricingSection() {
  return (
    <div className="py-16 md:py-24 w-full bg-background dark:bg-[#0f172a]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground dark:text-white">
            Simple and Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
            Choose the plan that's right for you. Start building your professional resume today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="border dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-background dark:bg-[#1e293b]">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-white">Basic</h3>
              <div className="text-4xl font-bold mb-4 text-foreground dark:text-white">$0</div>
              <p className="text-muted-foreground dark:text-gray-300 mb-6">
                Free forever. Perfect for getting started.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground dark:text-gray-300">Create 1 Resume</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground dark:text-gray-300">Basic Templates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground dark:text-gray-300">PDF Export</span>
                </li>
              </ul>
              <Button className="w-full bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white">Get Started</Button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="border dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-background dark:bg-[#1e293b]">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-white">Pro</h3>
              <div className="text-4xl font-bold mb-4 text-foreground dark:text-white">$9.99/month</div>
              <p className="text-muted-foreground dark:text-gray-300 mb-6">
                Unlock all features. Ideal for serious job seekers.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground dark:text-gray-300">Unlimited Resumes</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground dark:text-gray-300">Premium Templates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground dark:text-gray-300">AI Writing Assistant</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground dark:text-gray-300">ATS Optimization</span>
                </li>
              </ul>
              <Button className="w-full bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white">Upgrade to Pro</Button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="border dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-background dark:bg-[#1e293b]">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-white">Enterprise</h3>
              <div className="text-4xl font-bold mb-4 text-foreground dark:text-white">Contact Us</div>
              <p className="text-muted-foreground dark:text-gray-300 mb-6">
                Custom solutions for teams and organizations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground dark:text-gray-300">Dedicated Support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground dark:text-gray-300">Team Collaboration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground dark:text-gray-300">Custom Integrations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground dark:text-gray-300">Unlimited Users</span>
                </li>
              </ul>
              <Button className="w-full bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white">Contact Sales</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

