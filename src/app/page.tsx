'use client';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
          <div className="max-w-4xl mx-auto">
                <div className="mb-4">
                  <p className="text-lg font-medium tracking-wide" style={{color: '#E0C31B'}}>
                    Independent Representation, Built on Freedom, Honesty and Creativity.
                  </p>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                  Connecting US Component Manufacturers
                  <span style={{color: '#E0C31B'}}> with UK & European Electronics Companies</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed text-gray-200">
                  Goldfinch Representation Ltd provides trusted sales representation for leading American manufacturers of PCB-level components, helping UK and European customers access world-class electronic parts.
                </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                className="px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 hover:opacity-90"
                style={{
                  backgroundColor: '#E0C31B',
                  color: '#84674B'
                }}
              >
                Find Out More
              </button>
            </div>
          </div>
        </div>
      </section>

          {/* About Goldfinch Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{color: '#84674B'}}>
                  About Goldfinch
                </h2>
              </div>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-xl leading-relaxed text-gray-600">
                  Based in the UK and ERA registered, Goldfinch Representation Ltd acts as a bridge between innovative US component suppliers and electronics manufacturers across the UK and Europe. With strong industry expertise and a growing partner network, Goldfinch ensures customers get reliable access to high-quality parts, technical knowledge, and responsive support.
                </p>
              </div>
            </div>
          </section>

          {/* What They Represent Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{color: '#84674B'}}>
                  What We Represent
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Semiconductors */}
                <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300 text-center">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#E0C31B'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#84674B'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{color: '#84674B'}}>Semiconductors</h3>
                  <p className="leading-relaxed text-gray-600">
                    Integrated circuits, microcontrollers, and advanced chips.
                  </p>
                </div>

                {/* Electromagnetic Components */}
                <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300 text-center">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#E0C31B'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#84674B'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{color: '#84674B'}}>Electromagnetic Components</h3>
                  <p className="leading-relaxed text-gray-600">
                    Inductors, transformers, ferrite cores.
                  </p>
                </div>

                {/* Passives */}
                <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300 text-center">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#E0C31B'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#84674B'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{color: '#84674B'}}>Passives</h3>
                  <p className="leading-relaxed text-gray-600">
                    Resistors, capacitors, connectors.
                  </p>
                </div>

                {/* Electromechanical Parts */}
                <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300 text-center">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#E0C31B'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#84674B'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{color: '#84674B'}}>Electromechanical Parts</h3>
                  <p className="leading-relaxed text-gray-600">
                    Switches, relays, and more.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Values Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{color: '#84674B'}}>
                  Our Values
                </h2>
                <p className="text-xl max-w-3xl mx-auto text-gray-600">
                  At Goldfinch Representation Ltd, business is built on more than supply chains. We represent our partners with:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Freedom */}
                <div className="text-center p-6">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#E0C31B'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#84674B'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{color: '#84674B'}}>Freedom</h3>
                  <p className="leading-relaxed text-gray-600">
                    Independent thinking and global reach.
                  </p>
                </div>

                {/* Honesty */}
                <div className="text-center p-6">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#E0C31B'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#84674B'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{color: '#84674B'}}>Honesty</h3>
                  <p className="leading-relaxed text-gray-600">
                    Transparent, trusted communication.
                  </p>
                </div>

                {/* Creativity */}
                <div className="text-center p-6">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#E0C31B'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#84674B'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{color: '#84674B'}}>Creativity</h3>
                  <p className="leading-relaxed text-gray-600">
                    Fresh approaches to building customer relationships.
                  </p>
                </div>

                {/* Positivity */}
                <div className="text-center p-6">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#E0C31B'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#84674B'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{color: '#84674B'}}>Positivity</h3>
                  <p className="leading-relaxed text-gray-600">
                    Turning opportunities into success stories.
                  </p>
                </div>

                {/* Virtue */}
                <div className="text-center p-6 md:col-span-2 lg:col-span-1 lg:col-start-2">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#E0C31B'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#84674B'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{color: '#84674B'}}>Virtue</h3>
                  <p className="leading-relaxed text-gray-600">
                    Acting with integrity in every partnership.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Work With Goldfinch Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{color: '#84674B'}}>
                  Why Work With Goldfinch
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* ERA Registered */}
                <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300 text-center">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#E0C31B'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#84674B'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-4" style={{color: '#84674B'}}>ERA Registered</h3>
                  <p className="leading-relaxed text-gray-600">
                    For credibility and trust
                  </p>
                </div>

                {/* Strong Ties */}
                <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300 text-center">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#E0C31B'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#84674B'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-4" style={{color: '#84674B'}}>Strong Ties</h3>
                  <p className="leading-relaxed text-gray-600">
                    To established US manufacturers
                  </p>
                </div>

                {/* Local Support */}
                <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300 text-center">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#E0C31B'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#84674B'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-4" style={{color: '#84674B'}}>Local Support</h3>
                  <p className="leading-relaxed text-gray-600">
                    In the UK and Europe
                  </p>
                </div>

                {/* Streamline Supply Chain */}
                <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300 text-center">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#E0C31B'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#84674B'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-4" style={{color: '#84674B'}}>Streamline Supply Chain</h3>
                  <p className="leading-relaxed text-gray-600">
                    Helping customers optimise procurement
                  </p>
                </div>
              </div>
            </div>
          </section>

      {/* Call to Action */}
      <section className="py-20" style={{backgroundColor: '#84674B'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{color: '#D5CCC0'}}>
            Ready to Connect with US Component Manufacturers?
          </h2>
          <p className="text-xl mb-8" style={{color: '#D5CCC0'}}>
            Contact Goldfinch Representation Ltd today to discover how we can streamline your supply chain
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 hover:opacity-90"
              style={{
                backgroundColor: '#E0C31B',
                color: '#84674B'
              }}
            >
              Find Out More
            </button>
            <button 
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 border-2 hover:opacity-90"
              style={{
                borderColor: '#E0C31B',
                color: '#E0C31B',
                backgroundColor: 'transparent'
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
