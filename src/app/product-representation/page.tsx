import Image from 'next/image';

export default function ProductRepresentation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-goldfinch-white-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-goldfinch-black-900 mb-6">
            <span className="text-goldfinch-yellow-600">Product</span>
            <br />
            <span className="text-goldfinch-red-500">Representation</span>
          </h1>
          <p className="text-xl text-goldfinch-brown-700 max-w-3xl mx-auto">
            Discover our comprehensive portfolio of electronic components and solutions from leading manufacturers
          </p>
        </div>
      </section>

      {/* SSO Section */}
      <section id="sso" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SSO Header */}
          <div className="text-center mb-16">
            <div className="flex flex-col items-center mb-8">
              <a href="https://www.ssousa.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/SSO Content/SSO Logo2.png"
                  alt="SSO Logo"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </a>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{color: '#1a1a1a'}}>
              Solid State Optronics (SSO)
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Leading manufacturer of high-performance solid state relays, optocouplers, and specialised electronic components for demanding applications
            </p>
          </div>

          {/* Product Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {/* MOSFET Output SSRs */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>MOSFET Output SSRs</h3>
              <p className="text-gray-600 text-sm mb-4">High-performance solid state relays with MOSFET output for precision switching applications</p>
              <a 
                href="https://www.ssousa.com/catalog/mosfet_output_ssr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
              >
                View Products
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* AC Output SSRs */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>AC Output SSRs</h3>
              <p className="text-gray-600 text-sm mb-4">Robust AC switching solutions for high-power applications and industrial control systems</p>
              <a 
                href="https://www.ssousa.com/catalog/ac_output_ssr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
              >
                View Products
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* MOSFET Drivers */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>MOSFET Drivers</h3>
              <p className="text-gray-600 text-sm mb-4">High-speed gate drivers for efficient MOSFET switching and power management</p>
              <a 
                href="https://www.ssousa.com/catalog/mos_drivers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
              >
                View Products
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Optocouplers */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Optocouplers</h3>
              <p className="text-gray-600 text-sm mb-4">Optical isolation solutions for signal transmission and electrical safety</p>
              <a 
                href="https://www.ssousa.com/catalog/opto_transistor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
              >
                View Products
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* TRIAC Drivers */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>TRIAC Drivers</h3>
              <p className="text-gray-600 text-sm mb-4">Efficient drivers for TRIAC-based AC power control applications</p>
              <a 
                href="https://www.ssousa.com/catalog/triac_drivers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
              >
                View Products
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* IGBT Drivers */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>IGBT Drivers</h3>
              <p className="text-gray-600 text-sm mb-4">Advanced gate drivers for IGBT modules in high-power switching applications</p>
              <a 
                href="https://www.ssousa.com/catalog/igbt_drivers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
              >
                View Products
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Specialty Products */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Specialty Products</h3>
              <p className="text-gray-600 text-sm mb-4">Custom and specialised solutions for unique application requirements</p>
              <a 
                href="https://www.ssousa.com/catalog/specialty_products" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
              >
                View Products
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Hi Temp / Hi Rel Devices */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Hi Temp / Hi Rel Devices</h3>
              <p className="text-gray-600 text-sm mb-4">High-temperature and high-reliability components for demanding environments</p>
              <a 
                href="https://www.ssousa.com/product/hightemp-hirel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
              >
                View Products
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>


          {/* Featured News Section */}
          <div className="bg-gray-50 rounded-xl p-8 border-l-4" style={{borderLeftColor: '#FFD700'}}>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium text-white" style={{backgroundColor: '#dc2626'}}>
                    FEATURED NEWS
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{color: '#1a1a1a'}}>
                  Form C SSRs: The Future of ATE and Semiconductor Testing
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The Solid State Optronics family of Form C SSRs address the chronic problem presented by Electro-Mechanical Relays in high volume ATE and Semiconductor Test applications.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Mechanical relays have inherent characteristics of contact bounce, contact resistance degradation, limited operating life, magnetic interference, and contact thermal EMF generation, that in turn cause production line yield loss and downtime, and PCB and test circuit design complications. Solid State Optronics Form C SSRs provide a robust solution to these issues.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3" style={{color: '#1a1a1a'}}>Key Benefits</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#FFD700'}}></div>
                      <span className="text-gray-700 text-sm">Drop-in replacement for legacy EMRs in ATE Test Boards</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#FFD700'}}></div>
                      <span className="text-gray-700 text-sm">High Reliability — 1 Billion+ Switch Actuations Operating Life</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#FFD700'}}></div>
                      <span className="text-gray-700 text-sm">Eliminate an insidious cause of tester downtime — EMR failures</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#FFD700'}}></div>
                      <span className="text-gray-700 text-sm">True, Integrated Break-Before-Make open-close switching</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#FFD700'}}></div>
                      <span className="text-gray-700 text-sm">Low & Stable On-Resistance over time and actuations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#FFD700'}}></div>
                      <span className="text-gray-700 text-sm">Wide Operational Voltage Range</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#FFD700'}}></div>
                      <span className="text-gray-700 text-sm">No EMI – allows higher density load board design</span>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://www.ssousa.com/formcssr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
                  style={{backgroundColor: '#dc2626'}}
                >
                  Learn More About Form C SSRs
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KDK Section */}
      <section id="kdk" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* KDK Header */}
          <div className="text-center mb-16">
            <div className="flex flex-col items-center mb-8">
              <a href="http://www.kdk-group.co.jp/en/index.html" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/KDK/KDK Logo-1.jpg"
                  alt="KDK Logo"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </a>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{color: '#1a1a1a'}}>
              KDK Corporation
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Leading manufacturer of crystal components, oscillators, and frequency control products for precision timing applications
            </p>
          </div>

          {/* Product Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {/* Crystal Unit */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Crystal Unit</h3>
              <p className="text-gray-600 text-sm mb-4">High-precision quartz crystal units for frequency generation and timing applications</p>
              <a 
                href="http://www.kdk-group.co.jp/en/sub/crystal.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
              >
                View Products
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Crystal Oscillator */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Crystal Oscillator</h3>
              <p className="text-gray-600 text-sm mb-4">Stable frequency oscillators with excellent phase noise and jitter performance</p>
              <a 
                href="http://www.kdk-group.co.jp/en/sub/oscillator.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
              >
                View Products
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* VCXO */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>VCXO</h3>
              <p className="text-gray-600 text-sm mb-4">Voltage Controlled Crystal Oscillators for frequency synchronization applications</p>
              <a 
                href="http://www.kdk-group.co.jp/en/sub/vcxo.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
              >
                View Products
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* TCXO */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>TCXO</h3>
              <p className="text-gray-600 text-sm mb-4">Temperature Compensated Crystal Oscillators for stable frequency over temperature</p>
              <a 
                href="http://www.kdk-group.co.jp/en/sub/tcxo.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
              >
                View Products
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* OCXO */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>OCXO</h3>
              <p className="text-gray-600 text-sm mb-4">Oven Controlled Crystal Oscillators for ultra-stable frequency references</p>
              <a 
                href="http://www.kdk-group.co.jp/en/sub/ocxo.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
              >
                View Products
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Crystal Filter (MCF) */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Crystal Filter (MCF)</h3>
              <p className="text-gray-600 text-sm mb-4">High-performance crystal filters for signal processing and frequency selection</p>
              <a 
                href="http://www.kdk-group.co.jp/en/sub/filter.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
              >
                View Products
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* QCM */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>QCM</h3>
              <p className="text-gray-600 text-sm mb-4">Quartz Crystal Microbalance sensors for precise mass measurement applications</p>
              <a 
                href="http://www.kdk-group.co.jp/en/sub/qcm.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
              >
                View Products
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Crystal Blank */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Crystal Blank</h3>
              <p className="text-gray-600 text-sm mb-4">High-quality quartz crystal blanks for custom oscillator and resonator applications</p>
              <a 
                href="http://www.kdk-group.co.jp/en/sub/blank.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
              >
                View Products
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* RTC Module */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>RTC Module</h3>
              <p className="text-gray-600 text-sm mb-4">Real-Time Clock modules for accurate timekeeping in electronic systems</p>
              <a 
                href="http://www.kdk-group.co.jp/en/sub/rtc.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
              >
                View Products
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Automotive */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Automotive</h3>
              <p className="text-gray-600 text-sm mb-4">Automotive-grade crystal components meeting stringent reliability standards</p>
              <a 
                href="http://www.kdk-group.co.jp/en/sub/auto.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
              >
                View Products
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>


          {/* Featured News Section */}
          <div className="bg-white rounded-xl p-8 border-l-4 shadow-sm" style={{borderLeftColor: '#FFD700'}}>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium text-white" style={{backgroundColor: '#dc2626'}}>
                    FEATURED NEWS
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{color: '#1a1a1a'}}>
                  High-Driving Ability, Ultra Low Phase Noise Crystal Oscillator
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  KDK has developed a new 5.0V type crystal oscillator that combines High-Driving Ability and Ultra-Low Phase Noise characteristics required for industrial equipment. The new product is available in five package types ranging from 2016 size to 7050 size and can be considered for a wide range of applications.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-4" style={{color: '#1a1a1a'}}>Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2" style={{backgroundColor: '#FFD700'}}></div>
                      <div>
                        <span className="text-gray-700 text-sm font-medium block">Package Sizes</span>
                        <span className="text-gray-600 text-sm">2016 / 2520 / 3225 / 5032 / 7050</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2" style={{backgroundColor: '#FFD700'}}></div>
                      <div>
                        <span className="text-gray-700 text-sm font-medium block">Frequency Range</span>
                        <span className="text-gray-600 text-sm">5MHz ~ 60MHz</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2" style={{backgroundColor: '#FFD700'}}></div>
                      <div>
                        <span className="text-gray-700 text-sm font-medium block">Output Type</span>
                        <span className="text-gray-600 text-sm">CMOS</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2" style={{backgroundColor: '#FFD700'}}></div>
                      <div>
                        <span className="text-gray-700 text-sm font-medium block">Driving Ability</span>
                        <span className="text-gray-600 text-sm">50pF</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2" style={{backgroundColor: '#FFD700'}}></div>
                      <div>
                        <span className="text-gray-700 text-sm font-medium block">Supply Voltage</span>
                        <span className="text-gray-600 text-sm">+5.0V</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2" style={{backgroundColor: '#FFD700'}}></div>
                      <div>
                        <span className="text-gray-700 text-sm font-medium block">Operating Temperature</span>
                        <span className="text-gray-600 text-sm">-40°C ~ +85°C</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium" style={{backgroundColor: '#FFD700', color: '#1a1a1a'}}>
                      Ultra Low Phase Noise
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium" style={{backgroundColor: '#FFD700', color: '#1a1a1a'}}>
                      Ultra Low Phase Jitter
                    </span>
                  </div>
                </div>
                
                <a 
                  href="http://www.kdk-group.co.jp/en/kdk-news/highdrivingability_ultralownoisetype_xo.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
                  style={{backgroundColor: '#dc2626'}}
                >
                  Learn More About This Product
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRANAGRAF Section */}
      <section id="pranagraf" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* PRANAGRAF Header */}
          <div className="text-center mb-16">
            <div className="flex flex-col items-center mb-8">
              <a href="https://www.pranagraf.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/PranaGraf/PranaGraf Logo.png"
                  alt="PRANAGRAF Logo"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </a>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{color: '#1a1a1a'}}>
              PRANAGRAF
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Innovative solutions and cutting-edge technology for specialised applications
            </p>
          </div>

          {/* Get in Touch Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 lg:p-12 text-center border-l-4" style={{borderLeftColor: '#FFD700'}}>
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-4" style={{color: '#1a1a1a'}}>
                Discover PRANAGRAF Solutions
              </h3>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We&rsquo;re excited to share information about PRANAGRAF&rsquo;s innovative product portfolio. Contact us to learn more about their specialised solutions and how they can benefit your applications.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 rounded-full mb-3 flex items-center justify-center" style={{backgroundColor: '#FFD700'}}>
                    <svg className="w-6 h-6" style={{color: '#1a1a1a'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                      </div>
                  <h4 className="font-semibold mb-2" style={{color: '#1a1a1a'}}>Product Catalogs</h4>
                  <p className="text-sm text-gray-600 text-center">Detailed specifications and technical documentation</p>
                </div>
                
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 rounded-full mb-3 flex items-center justify-center" style={{backgroundColor: '#FFD700'}}>
                    <svg className="w-6 h-6" style={{color: '#1a1a1a'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                      </div>
                  <h4 className="font-semibold mb-2" style={{color: '#1a1a1a'}}>Technical Support</h4>
                  <p className="text-sm text-gray-600 text-center">Expert guidance for application-specific requirements</p>
                </div>
                
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 rounded-full mb-3 flex items-center justify-center" style={{backgroundColor: '#FFD700'}}>
                    <svg className="w-6 h-6" style={{color: '#1a1a1a'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                      </div>
                  <h4 className="font-semibold mb-2" style={{color: '#1a1a1a'}}>Custom Solutions</h4>
                  <p className="text-sm text-gray-600 text-center">Tailored products for unique application needs</p>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center sm:items-center">
                <a 
                  href="mailto:info@goldfinchrep.com?subject=PRANAGRAF Product Inquiry" 
                  className="inline-flex items-center text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
                  style={{backgroundColor: '#dc2626'}}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                    Get Product Information
                </a>
                
                <a 
                  href="https://www.pranagraf.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-700 px-6 py-3 rounded-md font-medium border-2 border-gray-300 hover:border-gray-400 transition-colors"
                >
                  Visit PRANAGRAF Website
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Battery Systems Section */}
      <section id="esb" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ESB Header */}
          <div className="text-center mb-16">
            <div className="flex flex-col items-center mb-8">
              <a href="https://elitebatterysystems.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/ESB/elite-battery-systems-logo.webp"
                  alt="Elite Battery Systems Logo"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </a>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{color: '#1a1a1a'}}>
              Elite Battery Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Modular Battery Systems Engineered for Excellence. High-performance solutions built for flexibility and reliability in demanding applications.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 text-center">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center mx-auto" style={{backgroundColor: '#FFD700'}}>
                <svg className="w-6 h-6" style={{color: '#1a1a1a'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Compliance Focused</h3>
              <p className="text-gray-600 text-sm">Every EBS product is manufactured with a commitment to compliance, aligning with industry standards for quality, safety, and reliability.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 text-center">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center mx-auto" style={{backgroundColor: '#FFD700'}}>
                <svg className="w-6 h-6" style={{color: '#1a1a1a'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Cost Effective</h3>
              <p className="text-gray-600 text-sm">Customised battery systems designed to meet your specific needs without a premium price. Optimal performance at a cost-effective rate.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 text-center">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center mx-auto" style={{backgroundColor: '#FFD700'}}>
                <svg className="w-6 h-6" style={{color: '#1a1a1a'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Flexible Design</h3>
              <p className="text-gray-600 text-sm">Fast Prototyping and Scalable Manufacturing for Commercial EV, AGVs, Construction Equipment, Material Handling, Energy Storage and Marine.</p>
            </div>
          </div>

          {/* Product Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {/* Standard Battery Packs */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Standard Battery Packs</h3>
              <p className="text-gray-600 text-sm mb-4">High-performance modular battery packs ready for integration into your applications</p>
              <a
                href="https://elitebatterysystems.com/standard-battery-packs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
              >
                View Products
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Customisation */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Customisation</h3>
              <p className="text-gray-600 text-sm mb-4">Tailored battery solutions designed to meet your specific application requirements</p>
              <a
                href="https://elitebatterysystems.com/customisation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
              >
                View Products
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Energy Storage */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Energy Storage</h3>
              <p className="text-gray-600 text-sm mb-4">Comprehensive energy storage solutions for industrial and commercial applications</p>
              <a
                href="https://elitebatterysystems.com/energy-storage"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
              >
                View Products
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Chargers */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Chargers</h3>
              <p className="text-gray-600 text-sm mb-4">Designed to complement EBS advanced lithium battery systems, ensuring optimal performance and extended battery life</p>
              <a
                href="https://elitebatterysystems.com/chargers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
              >
                View Products
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Featured News Section - Solar Battery Systems */}
          <div className="bg-white rounded-xl p-8 border-l-4 shadow-sm" style={{borderLeftColor: '#FFD700'}}>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium text-white" style={{backgroundColor: '#dc2626'}}>
                    FEATURED NEWS
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{color: '#1a1a1a'}}>
                  Reliable Power for Solar Battery Systems
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  As the UK accelerates its transition towards renewable energy, solar power has emerged as a pivotal solution for both industrial and commercial applications. To harness the full potential of solar energy, it&rsquo;s essential to pair solar panels with efficient and reliable battery storage systems. Elite Battery Systems specialise in delivering high-performance modular battery solutions designed to meet the unique demands of solar battery systems.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-4" style={{color: '#1a1a1a'}}>Key Features to Consider</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2" style={{backgroundColor: '#FFD700'}}></div>
                      <div>
                        <span className="text-gray-700 text-sm font-medium block">High Energy Density</span>
                        <span className="text-gray-600 text-sm">Store more power in a compact form, optimising space and ensuring sufficient energy supply</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2" style={{backgroundColor: '#FFD700'}}></div>
                      <div>
                        <span className="text-gray-700 text-sm font-medium block">Long Life Cycle</span>
                        <span className="text-gray-600 text-sm">More charge/discharge cycles translates to better longevity and return on investment</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2" style={{backgroundColor: '#FFD700'}}></div>
                      <div>
                        <span className="text-gray-700 text-sm font-medium block">Efficient Charge & Discharge</span>
                        <span className="text-gray-600 text-sm">Quickly store and release energy, accommodating sudden spikes in usage</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2" style={{backgroundColor: '#FFD700'}}></div>
                      <div>
                        <span className="text-gray-700 text-sm font-medium block">Advanced BMS</span>
                        <span className="text-gray-600 text-sm">Sophisticated Battery Management Systems for enhanced safety and extended battery life</span>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://elitebatterysystems.com/energy-storage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
                  style={{backgroundColor: '#dc2626'}}
                >
                  Learn More About Solar Battery Solutions
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YOK Energy Section */}
      <section id="yok" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* YOK Header */}
          <div className="text-center mb-16">
            <div className="flex flex-col items-center mb-8">
              <a href="https://www.yokenergy.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/YOK/yok-energy-logo.png"
                  alt="YOK Energy Logo"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </a>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{color: '#1a1a1a'}}>
              YOK Energy
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              More than just a supplier; a partner in innovation. With a core team boasting over 30 years of battery industry experience, designing and delivering custom battery cells and packs.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 rounded-lg shadow-md border border-gray-200 p-6 text-center">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center mx-auto" style={{backgroundColor: '#FFD700'}}>
                <svg className="w-6 h-6" style={{color: '#1a1a1a'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Cost Effective</h3>
              <p className="text-gray-600 text-sm">High quality cells and packs with pricing that supports customer success.</p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md border border-gray-200 p-6 text-center">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center mx-auto" style={{backgroundColor: '#FFD700'}}>
                <svg className="w-6 h-6" style={{color: '#1a1a1a'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Customization</h3>
              <p className="text-gray-600 text-sm">Tailored solutions designed to meet your specific needs.</p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md border border-gray-200 p-6 text-center">
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center mx-auto" style={{backgroundColor: '#FFD700'}}>
                <svg className="w-6 h-6" style={{color: '#1a1a1a'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Global Reach</h3>
              <p className="text-gray-600 text-sm">Supplying cells and packs worldwide from UK headquarters.</p>
            </div>
          </div>

          {/* Battery Cells Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{color: '#1a1a1a'}}>Battery Cells</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* ATEX Cells */}
              <div className="bg-gray-50 rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                  <Image
                    src="/images/circuitry.svg"
                    alt="Circuit Icon"
                    width={24}
                    height={24}
                    className="filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>ATEX Cells</h3>
                <p className="text-gray-600 text-sm mb-4">Certified cells for hazardous and explosive atmosphere applications</p>
                <a
                  href="https://www.yokenergy.com/battery-cells/atex-cells"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                  style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
                >
                  View Products
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Prismatic Cells */}
              <div className="bg-gray-50 rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                  <Image
                    src="/images/circuitry.svg"
                    alt="Circuit Icon"
                    width={24}
                    height={24}
                    className="filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Prismatic Cells</h3>
                <p className="text-gray-600 text-sm mb-4">Flat, rectangular cells ideal for space-efficient battery pack designs</p>
                <a
                  href="https://www.yokenergy.com/battery-cells/prismatic-cells"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                  style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
                >
                  View Products
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Primary Battery Cells */}
              <div className="bg-gray-50 rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                  <Image
                    src="/images/circuitry.svg"
                    alt="Circuit Icon"
                    width={24}
                    height={24}
                    className="filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Primary Battery Cells</h3>
                <p className="text-gray-600 text-sm mb-4">Non-rechargeable cells ideal for single-use applications</p>
                <a
                  href="https://www.yokenergy.com/battery-cells/primary-battery-cells"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                  style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
                >
                  View Products
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Lithium-Ion Polymer */}
              <div className="bg-gray-50 rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                  <Image
                    src="/images/circuitry.svg"
                    alt="Circuit Icon"
                    width={24}
                    height={24}
                    className="filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Lithium-Ion Polymer</h3>
                <p className="text-gray-600 text-sm mb-4">Rechargeable cells suitable for compact and flexible designs</p>
                <a
                  href="https://www.yokenergy.com/battery-cells/lithium-ion-polymer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                  style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
                >
                  View Products
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Lithium-Ion Cylindrical */}
              <div className="bg-gray-50 rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                  <Image
                    src="/images/circuitry.svg"
                    alt="Circuit Icon"
                    width={24}
                    height={24}
                    className="filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Lithium-Ion Cylindrical</h3>
                <p className="text-gray-600 text-sm mb-4">Rechargeable cylindrical cells known for durability and performance</p>
                <a
                  href="https://www.yokenergy.com/battery-cells/lithium-ion-cylindrical-cells"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                  style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
                >
                  View Products
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Battery Packs Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{color: '#1a1a1a'}}>Battery Packs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Custom Plastic Case */}
              <div className="bg-gray-50 rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                  <Image
                    src="/images/circuitry.svg"
                    alt="Circuit Icon"
                    width={24}
                    height={24}
                    className="filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Custom Plastic Case Packs</h3>
                <p className="text-gray-600 text-sm mb-4">Bespoke battery packs tailored to specific requirements</p>
                <a
                  href="https://www.yokenergy.com/battery-packs/custom-plastic-case-battery-packs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                  style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
                >
                  View Products
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Primary Battery Packs */}
              <div className="bg-gray-50 rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                  <Image
                    src="/images/circuitry.svg"
                    alt="Circuit Icon"
                    width={24}
                    height={24}
                    className="filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Primary Battery Packs</h3>
                <p className="text-gray-600 text-sm mb-4">Non-rechargeable packs for single-use applications</p>
                <a
                  href="https://www.yokenergy.com/battery-packs/primary-battery-packs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                  style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
                >
                  View Products
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Shrink Wrapped */}
              <div className="bg-gray-50 rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#dc2626'}}>
                  <Image
                    src="/images/circuitry.svg"
                    alt="Circuit Icon"
                    width={24}
                    height={24}
                    className="filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: '#1a1a1a'}}>Shrink Wrapped Packs</h3>
                <p className="text-gray-600 text-sm mb-4">Cost-effective rechargeable solutions for various applications</p>
                <a
                  href="https://www.yokenergy.com/battery-packs/shrink-wrapped-battery-packs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                  style={{backgroundColor: '#1a1a1a', color: '#FFD700'}}
                >
                  View Products
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Featured News Section - Choosing a Battery Supplier */}
          <div className="bg-gray-50 rounded-xl p-8 border-l-4" style={{borderLeftColor: '#FFD700'}}>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#dc2626'}}>
                <Image
                  src="/images/circuitry.svg"
                  alt="Circuit Icon"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium text-white" style={{backgroundColor: '#dc2626'}}>
                    FEATURED NEWS
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{color: '#1a1a1a'}}>
                  Questions to Ask Before Choosing a Lithium-Ion Battery Supplier in the UK
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Selecting the right lithium-ion battery supplier is crucial for the success and sustainability of your operations. YOK Energy understand the importance of this decision and offer comprehensive solutions to meet diverse energy needs.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-4" style={{color: '#1a1a1a'}}>Key Considerations</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2" style={{backgroundColor: '#FFD700'}}></div>
                      <div>
                        <span className="text-gray-700 text-sm font-medium block">UK-Based with Global Reach</span>
                        <span className="text-gray-600 text-sm">Reliable and timely delivery to clients both within the UK and internationally</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2" style={{backgroundColor: '#FFD700'}}></div>
                      <div>
                        <span className="text-gray-700 text-sm font-medium block">Wide Range of Solutions</span>
                        <span className="text-gray-600 text-sm">Diverse selection of battery cells and packs for different industries</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2" style={{backgroundColor: '#FFD700'}}></div>
                      <div>
                        <span className="text-gray-700 text-sm font-medium block">Customisation & Technical Support</span>
                        <span className="text-gray-600 text-sm">Bespoke solutions with comprehensive technical support for optimal performance</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2" style={{backgroundColor: '#FFD700'}}></div>
                      <div>
                        <span className="text-gray-700 text-sm font-medium block">Sustainability Focus</span>
                        <span className="text-gray-600 text-sm">Committed to ethical practices and reducing environmental impact</span>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.yokenergy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
                  style={{backgroundColor: '#dc2626'}}
                >
                  Learn More About YOK Energy
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
