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
                href="https://www.ssousa.com/catalog/hightemp_hirel" 
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
    </div>
  );
}
