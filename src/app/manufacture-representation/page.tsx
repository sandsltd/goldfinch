import Image from 'next/image';

export default function ManufactureRepresentation() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-goldfinch-white-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-goldfinch-black-900 mb-6">
            <span className="text-goldfinch-red-500">Manufacture</span>
            <br />
            <span className="text-goldfinch-yellow-600">Representation</span>
          </h1>
          <p className="text-xl text-goldfinch-brown-700 max-w-3xl mx-auto">
            Connecting innovative global manufacturers with European markets through specialized technical representation.
          </p>
        </div>
      </section>

      {/* Manufacturers Grid Section */}
      <section className="py-20" style={{backgroundColor: '#f5f5f5'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* KDK */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6 text-center flex flex-col h-full">
                {/* Logo - Fixed Height */}
                <div className="h-24 flex items-center justify-center mb-4">
                  <a href="http://www.kdk-group.co.jp/en/index.html" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <Image
                      src="/images/KDK/Unknown.jpeg"
                      alt="KDK Logo"
                      width={160}
                      height={90}
                      className="object-contain"
                    />
                  </a>
                </div>
                
                {/* Company Name - Fixed Height */}
                <div className="h-16 flex items-center justify-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">KDK</h2>
                </div>
                
                {/* Description - Fixed Height */}
                <div className="h-32 mb-4">
                  <p className="text-gray-600 leading-relaxed text-sm h-full overflow-hidden">
                    KDK is located in Nagasaki, Japan and has more than 40 years&rsquo; experience in the Quartz Industry, providing various types of devices all over the world. All products are originally developed in Japan, with factory operations in China supporting competitive production that satisfies Japanese Quality standards.
                  </p>
                </div>
                
                {/* Product Categories - Fixed at Bottom */}
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  <a href="http://www.kdk-group.co.jp/en/sub/crystal.html" target="_blank" rel="noopener noreferrer" 
                     className="text-xs py-2 px-3 rounded text-center font-medium hover:scale-105 transition-transform"
                     style={{backgroundColor: '#FFD700', color: '#1a1a1a'}}>
                    Crystal Units
                  </a>
                  <a href="http://www.kdk-group.co.jp/en/sub/oscillator.html" target="_blank" rel="noopener noreferrer"
                     className="text-xs py-2 px-3 rounded text-center font-medium hover:scale-105 transition-transform"
                     style={{backgroundColor: '#FFD700', color: '#1a1a1a'}}>
                    Oscillators
                  </a>
                  <a href="http://www.kdk-group.co.jp/en/sub/vcxo.html" target="_blank" rel="noopener noreferrer"
                     className="text-xs py-2 px-3 rounded text-center font-medium hover:scale-105 transition-transform"
                     style={{backgroundColor: '#FFD700', color: '#1a1a1a'}}>
                    VCXO
                  </a>
                  <a href="http://www.kdk-group.co.jp/en/sub/tcxo.html" target="_blank" rel="noopener noreferrer"
                     className="text-xs py-2 px-3 rounded text-center font-medium hover:scale-105 transition-transform"
                     style={{backgroundColor: '#FFD700', color: '#1a1a1a'}}>
                    TCXO
                  </a>
                </div>
              </div>
            </div>

            {/* PranaGraf */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6 text-center flex flex-col h-full">
                {/* Logo - Fixed Height */}
                <div className="h-24 flex items-center justify-center mb-4">
                  <a href="https://www.pranagraf.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <Image
                      src="/images/PranaGraf/PranaGraf Logo.png"
                      alt="PranaGraf Logo"
                      width={160}
                      height={90}
                      className="object-contain"
                    />
                  </a>
                </div>
                
                {/* Company Name - Fixed Height */}
                <div className="h-16 flex items-center justify-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">PRANAGRAF</h2>
                </div>
                
                {/* Description - Fixed Height */}
                <div className="h-32 mb-4">
                  <p className="text-gray-600 leading-relaxed text-sm h-full overflow-hidden">
                    PranaGraf Materials & Technologies is based in India and has multiple technologies for manufacturing specialty downstream natural graphite products like High Purity Graphite, Expandable Graphite, Micronized Graphite, Spherical Graphite, Graphene and Composites.
                  </p>
                </div>
                
                {/* Applications - Fixed at Bottom */}
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  <div className="text-xs py-2 px-3 rounded text-center font-medium" style={{backgroundColor: '#FFD700', color: '#1a1a1a'}}>
                    Anode Materials
                  </div>
                  <div className="text-xs py-2 px-3 rounded text-center font-medium" style={{backgroundColor: '#FFD700', color: '#1a1a1a'}}>
                    Flame Retardants
                  </div>
                  <div className="text-xs py-2 px-3 rounded text-center font-medium" style={{backgroundColor: '#FFD700', color: '#1a1a1a'}}>
                    Lubrication
                  </div>
                  <div className="text-xs py-2 px-3 rounded text-center font-medium" style={{backgroundColor: '#FFD700', color: '#1a1a1a'}}>
                    Refractories
                  </div>
                </div>
              </div>
            </div>

            {/* SSO */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6 text-center flex flex-col h-full">
                {/* Logo - Fixed Height */}
                <div className="h-24 flex items-center justify-center mb-4">
                  <a href="https://www.ssousa.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <Image
                      src="/images/SSO Content/SSO Logo2.png"
                      alt="SSO Logo"
                      width={160}
                      height={90}
                      className="object-contain"
                    />
                  </a>
                </div>
                
                {/* Company Name - Fixed Height */}
                <div className="h-16 flex items-center justify-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">SOLID STATE OPTRONICS</h2>
                </div>
                
                {/* Description - Fixed Height */}
                <div className="h-32 mb-4">
                  <p className="text-gray-600 leading-relaxed text-sm h-full overflow-hidden">
                    Solid State Optronics (SSO) was founded in 1982 in San Jose, California, the Capital of Silicon Valley. Building on advances in solid state technology and semiconductor fabrication, SSO developed proprietary, patented technologies in Solid State Relay (SSR) designs.
                  </p>
                </div>
                
                {/* Product Categories - Fixed at Bottom */}
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  <a href="https://www.ssousa.com/catalog/mosfet_output_ssr" target="_blank" rel="noopener noreferrer"
                     className="text-xs py-2 px-3 rounded text-center font-medium hover:scale-105 transition-transform"
                     style={{backgroundColor: '#FFD700', color: '#1a1a1a'}}>
                    MOSFET SSRs
                  </a>
                  <a href="https://www.ssousa.com/catalog/ac_output_ssr" target="_blank" rel="noopener noreferrer"
                     className="text-xs py-2 px-3 rounded text-center font-medium hover:scale-105 transition-transform"
                     style={{backgroundColor: '#FFD700', color: '#1a1a1a'}}>
                    AC SSRs
                  </a>
                  <a href="https://www.ssousa.com/catalog/mos_drivers" target="_blank" rel="noopener noreferrer"
                     className="text-xs py-2 px-3 rounded text-center font-medium hover:scale-105 transition-transform"
                     style={{backgroundColor: '#FFD700', color: '#1a1a1a'}}>
                    MOSFET Drivers
                  </a>
                  <a href="https://www.ssousa.com/catalog/opto_transistor" target="_blank" rel="noopener noreferrer"
                     className="text-xs py-2 px-3 rounded text-center font-medium hover:scale-105 transition-transform"
                     style={{backgroundColor: '#FFD700', color: '#1a1a1a'}}>
                    Optocouplers
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
