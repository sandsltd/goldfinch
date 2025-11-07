export default function BOMOptimization() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-goldfinch-white-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-goldfinch-black-900 mb-6">
            <span className="text-goldfinch-red-500">BOM</span>
            <br />
            <span className="text-goldfinch-yellow-600">Optimization</span>
          </h1>
          <p className="text-xl text-goldfinch-brown-700 max-w-3xl mx-auto">
            Streamline your Bill of Materials with expert analysis, cost reduction strategies, and supply chain optimization.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20" style={{backgroundColor: '#f8f9fa'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{color: '#ef4444'}}>
                What is BOM Optimization?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Bill of Materials (BOM) optimization is the process of analyzing and refining your component lists to achieve cost savings, improve availability, reduce risk, and enhance overall product performance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our expert team reviews your existing BOMs to identify opportunities for component consolidation, alternative sourcing, and strategic partnerships that deliver measurable value to your business.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4" style={{color: '#ef4444'}}>
                Key Benefits
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{backgroundColor: '#FFD700'}}></div>
                  <span className="text-gray-700">Reduce component costs through strategic sourcing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{backgroundColor: '#FFD700'}}></div>
                  <span className="text-gray-700">Improve supply chain resilience and availability</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{backgroundColor: '#FFD700'}}></div>
                  <span className="text-gray-700">Minimize obsolescence risk</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{backgroundColor: '#FFD700'}}></div>
                  <span className="text-gray-700">Standardize components across product lines</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{backgroundColor: '#FFD700'}}></div>
                  <span className="text-gray-700">Enhance performance through better component selection</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12" style={{color: '#ef4444'}}>
              Our BOM Optimization Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#ef4444'}}>
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Analysis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive review of your existing BOM, including cost analysis, availability assessment, and risk evaluation.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#FFD700'}}>
                  <span className="text-black text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Optimization</h3>
                <p className="text-gray-600 leading-relaxed">
                  Identify alternative components, consolidation opportunities, and strategic sourcing options to improve your BOM.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#1a1a1a'}}>
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Implementation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Support you through the transition with detailed recommendations, supplier introductions, and ongoing monitoring.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-6" style={{color: '#ef4444'}}>
              Ready to Optimize Your BOM?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Let our experts analyze your Bill of Materials and identify opportunities for cost savings, improved availability, and reduced risk.
            </p>
            <button 
              className="px-8 py-4 rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#ef4444'}}
            >
              Get Started with BOM Analysis
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}