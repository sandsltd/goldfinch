import Image from 'next/image';

export default function ProductRepresentation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{color: '#1a1a1a'}}>
              <span style={{color: '#FFD700'}}>Product</span>
              <br />
              Representation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of electronic components and solutions from leading manufacturers
            </p>
          </div>
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
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
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
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
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
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
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
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
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
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
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
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V6a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
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
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
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
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
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

          {/* SSO Product Images Gallery */}
          <div className="mt-16 mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center" style={{color: '#1a1a1a'}}>
              SSO Product Images
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-300">
                <Image
                  src="/images/SSO Content/News Form C SSR.jpg"
                  alt="SSO Form C SSR Products"
                  width={300}
                  height={200}
                  className="w-full h-48 object-contain rounded-lg bg-gray-50"
                />
                <p className="text-sm text-gray-600 text-center mt-2">Form C SSR Products</p>
              </div>
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-300">
                <Image
                  src="/images/SSO Content/Unknown.jpeg"
                  alt="SSO Product Components"
                  width={300}
                  height={200}
                  className="w-full h-48 object-contain rounded-lg bg-gray-50"
                />
                <p className="text-sm text-gray-600 text-center mt-2">SSO Components</p>
              </div>
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-300">
                <Image
                  src="/images/SSO Content/Unknown-1.jpeg"
                  alt="SSO Advanced Products"
                  width={300}
                  height={200}
                  className="w-full h-48 object-contain rounded-lg bg-gray-50"
                />
                <p className="text-sm text-gray-600 text-center mt-2">Advanced Driver Solutions</p>
              </div>
            </div>
          </div>

          {/* Featured News Section */}
          <div className="bg-gray-50 rounded-xl p-8 border-l-4" style={{borderLeftColor: '#FFD700'}}>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#dc2626'}}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
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
                  src="/images/KDK/Unknown.jpeg"
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
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
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
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
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
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
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
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
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
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V6a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
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
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4-4m-4 4l4-4m-4 4l4 4" />
                </svg>
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
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
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
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
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
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
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
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
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

          {/* KDK Product Images Gallery */}
          <div className="mt-16 mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center" style={{color: '#1a1a1a'}}>
              KDK Product Images
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-300">
                <Image
                  src="/images/KDK/Crystal Unit.gif"
                  alt="KDK Crystal Unit Products"
                  width={300}
                  height={200}
                  className="w-full h-48 object-contain rounded-lg bg-gray-50"
                />
                <p className="text-sm text-gray-600 text-center mt-2">Crystal Unit Products</p>
              </div>
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-300">
                <Image
                  src="/images/KDK/Crystal Filter.jpg"
                  alt="KDK Crystal Filter Products"
                  width={300}
                  height={200}
                  className="w-full h-48 object-contain rounded-lg bg-gray-50"
                />
                <p className="text-sm text-gray-600 text-center mt-2">Crystal Filter Products</p>
              </div>
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-300">
                <Image
                  src="/images/KDK/Automotive.png"
                  alt="KDK Automotive Products"
                  width={300}
                  height={200}
                  className="w-full h-48 object-contain rounded-lg bg-gray-50"
                />
                <p className="text-sm text-gray-600 text-center mt-2">Automotive Crystal Components</p>
              </div>
            </div>
          </div>

          {/* Featured News Section */}
          <div className="bg-white rounded-xl p-8 border-l-4 shadow-sm" style={{borderLeftColor: '#FFD700'}}>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#dc2626'}}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 110 19.5 9.75 9.75 0 010-19.5zM15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2" style={{color: '#1a1a1a'}}>Technical Support</h4>
                  <p className="text-sm text-gray-600 text-center">Expert guidance for application-specific requirements</p>
                </div>
                
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 rounded-full mb-3 flex items-center justify-center" style={{backgroundColor: '#FFD700'}}>
                    <svg className="w-6 h-6" style={{color: '#1a1a1a'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
