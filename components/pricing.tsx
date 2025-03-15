const Pricing = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <p className="text-gray-600 mb-4">Free</p>
            <ul className="text-gray-600">
              <li>Limited templates</li>
              <li>Basic features</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-gray-600 mb-4">$9.99/month</p>
            <ul className="text-gray-600">
              <li>Unlimited templates</li>
              <li>Advanced features</li>
              <li>Priority support</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">Premium</h3>
            <p className="text-gray-600 mb-4">$19.99/month</p>
            <ul className="text-gray-600">
              <li>All features</li>
              <li>Dedicated support</li>
              <li>Custom templates</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing

