const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">1. Choose a Template</h3>
            <p className="text-gray-600">Select from our library of professionally designed resume templates.</p>
          </div>
          <div className="p-6 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">2. Enter Your Information</h3>
            <p className="text-gray-600">Fill in your details, including work experience, education, and skills.</p>
          </div>
          <div className="p-6 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">3. Download Your Resume</h3>
            <p className="text-gray-600">Download your ATS-optimized resume and start applying for jobs.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

