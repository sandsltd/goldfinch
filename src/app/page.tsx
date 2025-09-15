'use client';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative h-96 lg:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/goldfinch/European Goldfinch.png"
          style={{
            filter: 'brightness(0.7) contrast(1.1)',
            transform: 'scale(1.05)'
          }}
        >
          <source src="/videos/Board.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay using your dark color */}
        <div className="absolute inset-0" style={{backgroundColor: 'rgba(132, 103, 75, 0.5)'}}></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Premium Electronic Components
              <span style={{color: '#E0C31B'}}> Distribution</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed text-gray-200">
              Connecting American innovation with European markets. We specialise in sourcing and distributing high-quality electronic components from leading USA manufacturers to the UK and Europe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 hover:opacity-90"
                style={{
                  backgroundColor: '#E0C31B',
                  color: '#84674B'
                }}
              >
                Request Quote
              </button>
              <button 
                className="px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 border-2 hover:opacity-90"
                style={{
                  borderColor: '#E0C31B',
                  color: '#E0C31B',
                  backgroundColor: 'transparent'
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{color: '#84674B'}}>
              Why Choose Goldfinch Representation
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Professional distribution services connecting American innovation with European markets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                style={{backgroundColor: '#E0C31B'}}
              >
                <svg className="w-8 h-8" style={{color: '#84674B'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center" style={{color: '#84674B'}}>Quality Components</h3>
              <p className="text-center leading-relaxed text-gray-600">
                Premium electronic components sourced directly from leading USA manufacturers with rigorous quality control and certification.
              </p>
            </div>

            {/* Service 2 */}
            <div className="rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300" style={{backgroundColor: '#D5CCC0'}}>
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                style={{backgroundColor: '#E0C31B'}}
              >
                <svg className="w-8 h-8" style={{color: '#84674B'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center" style={{color: '#84674B'}}>Reliable Delivery</h3>
              <p className="text-center leading-relaxed text-gray-600">
                Efficient logistics and established supply chains ensure reliable delivery across UK and European markets with full tracking.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                style={{backgroundColor: '#E0C31B'}}
              >
                <svg className="w-8 h-8" style={{color: '#84674B'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center" style={{color: '#84674B'}}>Market Expertise</h3>
              <p className="text-center leading-relaxed text-gray-600">
                Deep understanding of European regulations, customs procedures, and market requirements for electronic components.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{backgroundColor: '#84674B'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{color: '#D5CCC0'}}>
            Ready to Source Premium Components?
          </h2>
          <p className="text-xl mb-8" style={{color: '#D5CCC0'}}>
            Contact us today to discuss your electronic component requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 hover:opacity-90"
              style={{
                backgroundColor: '#E0C31B',
                color: '#84674B'
              }}
            >
              Request Quote
            </button>
            <button 
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 border-2 hover:opacity-90"
              style={{
                borderColor: '#E0C31B',
                color: '#E0C31B',
                backgroundColor: 'transparent'
              }}
            >
              View Catalogue
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
