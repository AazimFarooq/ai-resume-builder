// This file serves as a central export point for all UI components
// It allows importing multiple components from a single location

// Layout components
export { Header } from "@/components/layout/header"
export { Footer } from "@/components/layout/footer"
export { DashboardHeader } from "@/components/dashboard/header"
export { DashboardSidebar } from "@/components/dashboard/sidebar"

// Marketing components
export { FeatureSection } from "@/components/marketing/feature-section"
export { TemplateShowcase } from "@/components/marketing/template-showcase"
export { AIFeatures } from "@/components/marketing/ai-features"
export { Testimonials } from "@/components/marketing/testimonials"
export { PricingSection } from "@/components/marketing/pricing-section"
export { HeroSection } from "@/components/marketing/hero-section"

// UI components from shadcn/ui
export { Button } from "@/components/ui/button"
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
export { Input } from "@/components/ui/input"
export { Label } from "@/components/ui/label"
export { Textarea } from "@/components/ui/textarea"
export { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
export { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
export { Separator } from "@/components/ui/separator"
export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Utility components
export { ThemeToggle } from "@/components/theme-toggle"
export { ScrollLink } from "@/components/scroll-link"
export { ThemeProvider } from "@/components/theme-provider"

