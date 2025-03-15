const Features = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">AI-Powered Resume Builder</h3>
            <p className="text-gray-600">Create a professional resume in minutes with our AI-driven tools.</p>
          </div>
          <div className="p-6 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">ATS Optimization</h3>
            <p className="text-gray-600">
              Ensure your resume passes through Applicant Tracking Systems with our optimized templates.
            </p>
          </div>
          <div className="p-6 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">Customizable Templates</h3>
            <p className="text-gray-600">
              Choose from a variety of professionally designed templates to make your resume stand out.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

