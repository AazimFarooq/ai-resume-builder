import { HeroSection } from "@/components/marketing/hero-section"
import { FeatureSection } from "@/components/marketing/feature-section"
import { TemplateShowcase } from "@/components/marketing/template-showcase"
import { AIFeatures } from "@/components/marketing/ai-features"
import { Testimonials } from "@/components/marketing/testimonials"
import { PricingSection } from "@/components/marketing/pricing-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full">
      <section id="hero">
        <HeroSection />
      </section>

      <section id="features">
        <FeatureSection />
      </section>

      <section id="templates">
        <TemplateShowcase />
      </section>

      <section id="ai-features">
        <AIFeatures />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="pricing">
        <PricingSection />
      </section>
    </main>
  )
}

