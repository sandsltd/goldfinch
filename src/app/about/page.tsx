export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-goldfinch-white-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-goldfinch-black-900 mb-6">
            About <span className="text-goldfinch-red-500">Goldfinch</span>
            <br />
            <span className="text-goldfinch-yellow-600">Representation Ltd</span>
          </h1>
          <p className="text-xl text-goldfinch-brown-700 max-w-3xl mx-auto mb-8">
            Based in the UK and ERA registered, Goldfinch Representation Ltd acts as a bridge between innovative component suppliers and electronics manufacturers across the UK and Europe. With strong industry expertise and a growing partner network, Goldfinch ensures customers get reliable access to high-quality parts, technical knowledge, and responsive support.
          </p>
          <blockquote className="text-lg italic leading-relaxed text-goldfinch-brown-600 max-w-4xl mx-auto pl-4 border-l-4" style={{borderLeftColor: '#FFD700'}}>
            &ldquo;A connector is simply someone who is relationship-focused on their approach to life, to people, and to business. They have a certain way of thinking and behaving. They act and get results with ease because they have a level of credibility and trust in and from their network. When they ask for something or make an introduction, it carries weight and people respond.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20" style={{backgroundColor: '#1a1a1a'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{color: '#D5CCC0'}}>
              Our Values
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{color: '#D5CCC0'}}>
              At Goldfinch Representation Ltd, business is built on more than supply chains. We represent our partners with:
            </p>
          </div>
          
          {/* Values as horizontal flowing design */}
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5" style={{backgroundColor: '#ef4444'}}></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
              {/* Freedom */}
              <div className="text-center relative">
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border-4 relative z-10"
                  style={{backgroundColor: '#FFD700', borderColor: '#D5CCC0'}}
                >
                  <svg className="w-10 h-10" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{color: '#FFD700'}}>Freedom</h3>
                <p className="leading-relaxed" style={{color: '#D5CCC0'}}>
                  Independent thinking and global reach.
                </p>
              </div>

              {/* Honesty */}
              <div className="text-center relative">
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border-4 relative z-10"
                  style={{backgroundColor: '#FFD700', borderColor: '#D5CCC0'}}
                >
                  <svg className="w-10 h-10" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{color: '#FFD700'}}>Honesty</h3>
                <p className="leading-relaxed" style={{color: '#D5CCC0'}}>
                  Transparent, trusted communication.
                </p>
              </div>

              {/* Creativity */}
              <div className="text-center relative">
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border-4 relative z-10"
                  style={{backgroundColor: '#FFD700', borderColor: '#D5CCC0'}}
                >
                  <svg className="w-10 h-10" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{color: '#FFD700'}}>Creativity</h3>
                <p className="leading-relaxed" style={{color: '#D5CCC0'}}>
                  Fresh approaches to building customer relationships.
                </p>
              </div>

              {/* Positivity */}
              <div className="text-center relative">
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border-4 relative z-10"
                  style={{backgroundColor: '#FFD700', borderColor: '#D5CCC0'}}
                >
                  <svg className="w-10 h-10" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{color: '#FFD700'}}>Positivity</h3>
                <p className="leading-relaxed" style={{color: '#D5CCC0'}}>
                  Turning opportunities into success stories.
                </p>
              </div>

              {/* Virtue */}
              <div className="text-center relative">
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border-4 relative z-10"
                  style={{backgroundColor: '#FFD700', borderColor: '#D5CCC0'}}
                >
                  <svg className="w-10 h-10" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{color: '#FFD700'}}>Virtue</h3>
                <p className="leading-relaxed" style={{color: '#D5CCC0'}}>
                  Acting with integrity in every partnership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}