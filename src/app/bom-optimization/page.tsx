import Image from 'next/image';

export default function BOMOptimization() {
  return (
    <div className="min-h-screen">

      {/* Capability Statement Section */}
      <section className="py-16 bg-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="bg-gradient-to-r from-goldfinch-red-50 to-goldfinch-yellow-50 rounded-lg shadow-lg p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-center mb-12" style={{color: '#ef4444'}}>
              BOM Optimisation Capability Statement
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
              <div className="space-y-6 text-lg text-goldfinch-brown-700 leading-relaxed">
                <p>
                  Our company empowers electronics manufacturers to reduce costs and secure supply through expert Bill of Material (BOM) optimisation. We address shortages and allocation challenges swiftly, ensuring continuity and reliability in your operations.
                </p>
              </div>
              <div className="flex justify-center">
                <Image 
                  src="/goldfinch/1.png" 
                  alt="Cost Analysis and BOM Optimisation" 
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md max-w-full h-auto"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
              <div className="order-2 lg:order-1 flex justify-center">
                <Image 
                  src="/goldfinch/2.png" 
                  alt="Supply Chain Reliability" 
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md max-w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6 text-lg text-goldfinch-brown-700 leading-relaxed">
                <p>
                  Through value engineering, we identify direct equivalent products and alternative sources, future-proofing your supply chain and maintaining availability throughout the entire product lifecycle.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
              <div className="space-y-6 text-lg text-goldfinch-brown-700 leading-relaxed">
                <p>
                  Our proactive management of critical BOM components gives you confidence that your business is protected against market volatility, allowing you to focus on innovation with complete peace of mind.
                </p>
              </div>
              <div className="flex justify-center">
                <Image 
                  src="/goldfinch/3.png" 
                  alt="Market Volatility Protection" 
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md max-w-full h-auto"
                />
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-goldfinch-brown-700 leading-relaxed">
                Our bespoke solutions are tailored to meet the unique requirements of each client, ensuring flexibility and responsiveness in an ever-changing marketplace. By leveraging industry expertise and advanced technology, we deliver actionable insights that drive efficiency and foster strong supplier relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}