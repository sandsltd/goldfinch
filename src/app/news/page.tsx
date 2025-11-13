import Image from 'next/image';

export default function News() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-goldfinch-white-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-goldfinch-black-900 mb-6">
            Latest <span className="text-goldfinch-red-500">News</span> &
            <br />
            <span className="text-goldfinch-yellow-600">Insights</span>
          </h1>
          <p className="text-xl text-goldfinch-brown-700 max-w-3xl mx-auto">
            Stay updated with the latest developments from our manufacturing partners
          </p>
        </div>
      </section>

      {/* News Articles Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            
            {/* SSO Featured News */}
            <article className="bg-white rounded-xl p-8 border-l-4 shadow-lg" style={{borderLeftColor: '#FFD700'}}>
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 rounded-lg flex items-center justify-center flex-shrink-0 bg-white">
                  <Image
                    src="/images/SSO Content/SSO Logo2.png"
                    alt="SSO Logo"
                    width={60}
                    height={30}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium text-white" style={{backgroundColor: '#dc2626'}}>
                      SSO NEWS
                    </span>
                    <span className="text-gray-500 text-sm">Solid State Optronics</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4" style={{color: '#1a1a1a'}}>
                    Form C SSRs: The Future of ATE and Semiconductor Testing
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    The Solid State Optronics family of Form C SSRs address the chronic problem presented by Electro-Mechanical Relays in high volume ATE and Semiconductor Test applications.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Mechanical relays have inherent characteristics of contact bounce, contact resistance degradation, limited operating life, magnetic interference, and contact thermal EMF generation, that in turn cause production line yield loss and downtime, and PCB and test circuit design complications. Solid State Optronics Form C SSRs provide a robust solution to these issues.
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3" style={{color: '#1a1a1a'}}>Key Benefits</h3>
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
                    </div>
                  </div>
                  
                  <a 
                    href="https://www.ssousa.com/formcssr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
                    style={{backgroundColor: '#dc2626'}}
                  >
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>

            {/* KDK Featured News */}
            <article className="bg-gray-50 rounded-xl p-8 border-l-4 shadow-lg" style={{borderLeftColor: '#FFD700'}}>
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 rounded-lg flex items-center justify-center flex-shrink-0 bg-white">
                  <Image
                    src="/images/KDK/KDK Logo-1.jpg"
                    alt="KDK Logo"
                    width={80}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium text-white" style={{backgroundColor: '#dc2626'}}>
                      KDK NEWS
                    </span>
                    <span className="text-gray-500 text-sm">KDK Corporation</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4" style={{color: '#1a1a1a'}}>
                    High-Driving Ability, Ultra Low Phase Noise Crystal Oscillator
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    KDK has developed a new 5.0V type crystal oscillator that combines High-Driving Ability and Ultra-Low Phase Noise characteristics required for industrial equipment. The new product is available in five package types ranging from 2016 size to 7050 size and can be considered for a wide range of applications.
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4" style={{color: '#1a1a1a'}}>Key Features</h3>
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
                    </div>
                  </div>
                  
                  <a 
                    href="http://www.kdk-group.co.jp/en/kdk-news/highdrivingability_ultralownoisetype_xo.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
                    style={{backgroundColor: '#dc2626'}}
                  >
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>

            {/* PRANAGRAF Section */}
            <article className="bg-white rounded-xl p-8 border-l-4 shadow-lg" style={{borderLeftColor: '#FFD700'}}>
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 rounded-lg flex items-center justify-center flex-shrink-0 bg-white">
                  <Image
                    src="/images/PranaGraf/PranaGraf Logo.png"
                    alt="PRANAGRAF Logo"
                    width={80}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium text-white" style={{backgroundColor: '#dc2626'}}>
                      PRANAGRAF NEWS
                    </span>
                    <span className="text-gray-500 text-sm">PRANAGRAF Materials & Technologies</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4" style={{color: '#1a1a1a'}}>
                    Innovative Graphite Solutions for Next-Generation Applications
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    PRANAGRAF Materials & Technologies continues to push the boundaries of specialty graphite products, offering cutting-edge solutions for battery, thermal management, and industrial applications across Europe.
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3" style={{color: '#1a1a1a'}}>Key Applications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#FFD700'}}></div>
                        <span className="text-gray-700 text-sm">Battery Anode Materials</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#FFD700'}}></div>
                        <span className="text-gray-700 text-sm">Thermal Interface Materials</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#FFD700'}}></div>
                        <span className="text-gray-700 text-sm">Flame Retardant Solutions</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#FFD700'}}></div>
                        <span className="text-gray-700 text-sm">Industrial Lubrication</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-0 sm:space-x-3 sm:flex">
                    <a 
                      href="mailto:info@goldfinchrep.com?subject=PRANAGRAF Product Inquiry" 
                      className="inline-flex items-center text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
                      style={{backgroundColor: '#dc2626'}}
                    >
                      Get Product Information
                      <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                    <a 
                      href="https://www.pranagraf.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 px-6 py-3 rounded-md font-medium border-2 border-gray-300 hover:border-gray-400 transition-colors"
                    >
                      Visit Website
                      <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>
    </div>
  );
}
