import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Create Your Professional Resume with AI</h1>
        <p className="text-lg text-gray-700 mb-8">Stand out and get hired faster with our AI-powered resume builder.</p>
        <Button className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600">Get Started</Button>
      </div>
    </section>
  )
}

export default Hero

