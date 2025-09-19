'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    countryCode: '',
    country: '',
    businessName: '',
    message: ''
  });

  // Country list with US, UK at top, then EU countries, then others
  const countries = [
    { code: 'US', name: 'United States', phone: '+1' },
    { code: 'GB', name: 'United Kingdom', phone: '+44' },
    // EU Countries
    { code: 'AT', name: 'Austria', phone: '+43' },
    { code: 'BE', name: 'Belgium', phone: '+32' },
    { code: 'BG', name: 'Bulgaria', phone: '+359' },
    { code: 'HR', name: 'Croatia', phone: '+385' },
    { code: 'CY', name: 'Cyprus', phone: '+357' },
    { code: 'CZ', name: 'Czech Republic', phone: '+420' },
    { code: 'DK', name: 'Denmark', phone: '+45' },
    { code: 'EE', name: 'Estonia', phone: '+372' },
    { code: 'FI', name: 'Finland', phone: '+358' },
    { code: 'FR', name: 'France', phone: '+33' },
    { code: 'DE', name: 'Germany', phone: '+49' },
    { code: 'GR', name: 'Greece', phone: '+30' },
    { code: 'HU', name: 'Hungary', phone: '+36' },
    { code: 'IE', name: 'Ireland', phone: '+353' },
    { code: 'IT', name: 'Italy', phone: '+39' },
    { code: 'LV', name: 'Latvia', phone: '+371' },
    { code: 'LT', name: 'Lithuania', phone: '+370' },
    { code: 'LU', name: 'Luxembourg', phone: '+352' },
    { code: 'MT', name: 'Malta', phone: '+356' },
    { code: 'NL', name: 'Netherlands', phone: '+31' },
    { code: 'PL', name: 'Poland', phone: '+48' },
    { code: 'PT', name: 'Portugal', phone: '+351' },
    { code: 'RO', name: 'Romania', phone: '+40' },
    { code: 'SK', name: 'Slovakia', phone: '+421' },
    { code: 'SI', name: 'Slovenia', phone: '+386' },
    { code: 'ES', name: 'Spain', phone: '+34' },
    { code: 'SE', name: 'Sweden', phone: '+46' },
    // Other countries
    { code: 'AU', name: 'Australia', phone: '+61' },
    { code: 'CA', name: 'Canada', phone: '+1' },
    { code: 'JP', name: 'Japan', phone: '+81' },
    { code: 'KR', name: 'South Korea', phone: '+82' },
    { code: 'SG', name: 'Singapore', phone: '+65' },
    { code: 'CH', name: 'Switzerland', phone: '+41' },
    { code: 'NO', name: 'Norway', phone: '+47' },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const openContactModal = () => {
    setIsModalOpen(true);
    setModalStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      jobTitle: '',
      countryCode: '',
      country: '',
      businessName: '',
      message: ''
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalStep(1);
  };

  const nextStep = () => {
    if (modalStep < 3) {
      setModalStep(modalStep + 1);
    }
  };

  const prevStep = () => {
    if (modalStep > 1) {
      setModalStep(modalStep - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = countries.find(c => c.name === e.target.value);
    setFormData({
      ...formData,
      country: e.target.value,
      countryCode: selectedCountry ? selectedCountry.phone : ''
    });
  };

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setModalStep(3); // Go to success step
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: 'brightness(0.7) contrast(1.1)',
            transform: 'scale(1.0)'
          }}
        >
          <source src="/videos/Board.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay using your dark color */}
        <div className="absolute inset-0" style={{backgroundColor: 'rgba(132, 103, 75, 0.5)'}}></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
                <div className="mb-4">
                  <p className="text-lg font-medium tracking-wide" style={{color: '#FFD700'}}>
                    Independent Representation, Built on Freedom, Honesty and Creativity.
                  </p>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                  Connecting US Component Manufacturers
                  <span style={{color: '#FFD700'}}> with UK & European Electronics Companies</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed text-gray-200">
                  Goldfinch Representation Ltd provides trusted sales representation for leading American manufacturers of PCB-level components, helping UK and European customers access world-class electronic parts.
                </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                onClick={openContactModal}
                className="px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 hover:opacity-90"
                style={{
                  backgroundColor: '#FFD700',
                  color: '#1a1a1a'
                }}
              >
                Find Out More
              </button>
            </div>
          </div>
        </div>
      </section>

          {/* About Goldfinch Section */}
          <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{color: '#1a1a1a'}}>
                    About <span style={{color: '#ef4444'}}>Goldfinch</span> Representation Ltd
                  </h2>
                  <p className="text-xl leading-relaxed text-gray-700 mb-8">
                    Based in the UK and ERA registered, Goldfinch Representation Ltd acts as a bridge between innovative US component suppliers and electronics manufacturers across the UK and Europe. With strong industry expertise and a growing partner network, Goldfinch ensures customers get reliable access to high-quality parts, technical knowledge, and responsive support.
                  </p>
                  
                  {/* ERA Registration Badge */}
                  <div className="flex items-center space-x-4 p-5 bg-white rounded-xl border border-gray-200 border-l-4 shadow-sm mb-8" style={{borderLeftColor: '#FFD700'}}>
                    <div className="relative w-16 h-12">
                      <Image
                        src="/logos/era_logo_chrome_135.png"
                        alt="ERA - Electronic Representatives Association"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{color: '#1a1a1a'}}>
                        ERA Registered Member
                      </p>
                      <p className="text-xs text-gray-600">
                        Electronic Representatives Association
                      </p>
                    </div>
                  </div>

                  {/* Our Values - Cards */}
                  <div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {/* Values Title Card */}
                      <div className="rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200" style={{backgroundColor: '#ef4444'}}>
                        <h3 className="text-lg font-bold mb-2 text-white">
                          Our Values
                        </h3>
                        <p className="text-xs text-white italic opacity-90">
                          Business built on more than supply chains
                        </p>
                      </div>

                      {/* Freedom */}
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 border-l-4 hover:shadow-md transition-all duration-200" style={{borderLeftColor: '#FFD700'}}>
                        <div className="flex items-center space-x-3 mb-2">
                          <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{backgroundColor: '#ef4444'}}
                          >
                            <svg className="w-4 h-4" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="font-semibold text-sm" style={{color: '#1a1a1a'}}>Freedom</div>
                        </div>
                        <p className="text-xs text-gray-600">Independent thinking and global reach</p>
                      </div>

                      {/* Honesty */}
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 border-l-4 hover:shadow-md transition-all duration-200" style={{borderLeftColor: '#FFD700'}}>
                        <div className="flex items-center space-x-3 mb-2">
                          <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{backgroundColor: '#ef4444'}}
                          >
                            <svg className="w-4 h-4" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div className="font-semibold text-sm" style={{color: '#1a1a1a'}}>Honesty</div>
                        </div>
                        <p className="text-xs text-gray-600">Transparent, trusted communication</p>
                      </div>

                      {/* Creativity */}
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 border-l-4 hover:shadow-md transition-all duration-200" style={{borderLeftColor: '#FFD700'}}>
                        <div className="flex items-center space-x-3 mb-2">
                          <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{backgroundColor: '#ef4444'}}
                          >
                            <svg className="w-4 h-4" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <div className="font-semibold text-sm" style={{color: '#1a1a1a'}}>Creativity</div>
                        </div>
                        <p className="text-xs text-gray-600">Fresh approaches to building relationships</p>
                      </div>

                      {/* Positivity */}
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 border-l-4 hover:shadow-md transition-all duration-200" style={{borderLeftColor: '#FFD700'}}>
                        <div className="flex items-center space-x-3 mb-2">
                          <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{backgroundColor: '#ef4444'}}
                          >
                            <svg className="w-4 h-4" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="font-semibold text-sm" style={{color: '#1a1a1a'}}>Positivity</div>
                        </div>
                        <p className="text-xs text-gray-600">Turning opportunities into success stories</p>
                      </div>

                      {/* Virtue */}
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 border-l-4 hover:shadow-md transition-all duration-200" style={{borderLeftColor: '#FFD700'}}>
                        <div className="flex items-center space-x-3 mb-2">
                          <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{backgroundColor: '#ef4444'}}
                          >
                            <svg className="w-4 h-4" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </div>
                          <div className="font-semibold text-sm" style={{color: '#1a1a1a'}}>Virtue</div>
                        </div>
                        <p className="text-xs text-gray-600">Acting with integrity in every partnership</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2 flex flex-col items-center">
                  <div className="relative mb-6" style={{width: '400px', height: '400px'}}>
                    <Image
                      src="/goldfinch/European Goldfinch.png"
                      alt="European Goldfinch"
                      fill
                      className="object-cover"
                      style={{
                        transform: 'scale(1.2)',
                        objectPosition: 'center center'
                      }}
                    />
                  </div>
                  
                  {/* Quote */}
                  <div className="max-w-md text-center">
                    <blockquote className="text-lg italic text-gray-700 leading-relaxed">
                      &ldquo;The goldfinch is known as a symbol of connection and community – a bright, social bird that brings energy wherever it goes. It reflects my own personality in sales: connecting people, creating relationships, and sparking opportunities.&rdquo;
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Our Services Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{color: '#1a1a1a'}}>
                  Our Core Services
                </h2>
                <p className="text-xl max-w-3xl mx-auto text-gray-600">
                  Comprehensive representation services that bridge US manufacturers with UK & European markets
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {/* Local Trusted Face */}
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 hover:shadow-lg transition-shadow duration-300" style={{borderLeftColor: '#FFD700'}}>
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-6 h-6" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-center" style={{color: '#1a1a1a'}}>Local Trusted Partner</h3>
                  <p className="text-sm leading-relaxed text-gray-600 text-center">
                    Your local face for US manufacturers, bridging time zones, regulations, and customer expectations across UK & Europe.
                  </p>
                </div>

                {/* Sales & Marketing Intelligence */}
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 hover:shadow-lg transition-shadow duration-300" style={{borderLeftColor: '#FFD700'}}>
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-6 h-6" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-center" style={{color: '#1a1a1a'}}>Market Intelligence</h3>
                  <p className="text-sm leading-relaxed text-gray-600 text-center">
                    Providing sales & marketing feedback, spotting trends, helping adapt products and messaging for UK/EU markets.
                  </p>
                </div>

                {/* Multi-line Selling */}
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 hover:shadow-lg transition-shadow duration-300" style={{borderLeftColor: '#FFD700'}}>
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-6 h-6" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 00-2 2v2m0 0V9a2 2 0 012-2h14a2 2 0 012 2v2M7 7V3a2 2 0 012-2h6a2 2 0 012 2v4M7 7H3a2 2 0 00-2 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-center" style={{color: '#1a1a1a'}}>Multi-Line Portfolio</h3>
                  <p className="text-sm leading-relaxed text-gray-600 text-center">
                    Complementary, non-competing component ranges allowing customers to source more from one trusted place.
                  </p>
                </div>

                {/* Technical Support */}
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 hover:shadow-lg transition-shadow duration-300" style={{borderLeftColor: '#FFD700'}}>
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-6 h-6" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-center" style={{color: '#1a1a1a'}}>Technical Expertise</h3>
                  <p className="text-sm leading-relaxed text-gray-600 text-center">
                    Product specification support, helping engineers select components, balancing spec, cost, availability and performance.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Training & Demonstrations */}
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 hover:shadow-lg transition-shadow duration-300" style={{borderLeftColor: '#FFD700'}}>
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-6 h-6" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-center" style={{color: '#1a1a1a'}}>Training & Education</h3>
                  <p className="text-sm leading-relaxed text-gray-600 text-center">
                    Customer training and demonstrations ensuring proper component usage and understanding of performance factors.
                  </p>
                </div>

                {/* After-sales Support */}
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 hover:shadow-lg transition-shadow duration-300" style={{borderLeftColor: '#FFD700'}}>
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-6 h-6" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-center" style={{color: '#1a1a1a'}}>After-Sales Support</h3>
                  <p className="text-sm leading-relaxed text-gray-600 text-center">
                    Comprehensive support with troubleshooting, supply continuity, returns and quality issue resolution.
                  </p>
                </div>

                {/* Market Entry */}
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 hover:shadow-lg transition-shadow duration-300" style={{borderLeftColor: '#FFD700'}}>
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-6 h-6" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-center" style={{color: '#1a1a1a'}}>Faster Market Entry</h3>
                  <p className="text-sm leading-relaxed text-gray-600 text-center">
                    Leveraging existing relationships and local market knowledge for rapid scaling without building in-house teams.
                  </p>
                </div>

                {/* Cost Saving */}
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 hover:shadow-lg transition-shadow duration-300" style={{borderLeftColor: '#FFD700'}}>
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-6 h-6" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-center" style={{color: '#1a1a1a'}}>Cost-Effective Solution</h3>
                  <p className="text-sm leading-relaxed text-gray-600 text-center">
                    Commission-based model with existing infrastructure, more cost-effective than direct office setup.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Role Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{color: '#1a1a1a'}}>
                  Our Role: What We Do
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  As manufacturers&apos; representatives, we provide comprehensive sales support, market entry assistance, and customer liaison services
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Sales Support */}
                <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 text-center">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{color: '#1a1a1a'}}>Local Presence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Acting as your trusted local face for US manufacturers, bridging time zones, understanding regulations, and managing customer expectations across UK & Europe.
                  </p>
                </div>

                {/* Market Entry */}
                <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 text-center">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{color: '#1a1a1a'}}>Market Entry</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Leveraging existing relationships and local market knowledge to enable faster market penetration without the need for direct office setup.
                  </p>
                </div>

                {/* Technical Assistance */}
                <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 text-center">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{color: '#1a1a1a'}}>Technical Assistance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Providing product specification support, helping engineers select components, and matching specifications with cost, availability, and performance.
                  </p>
                </div>

                {/* Customer Liaison */}
                <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 text-center">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{color: '#1a1a1a'}}>Customer Liaison</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Building strong relationships with customers, providing training and demonstrations, and ensuring ongoing support throughout the product lifecycle.
                  </p>
                </div>

                {/* Market Intelligence */}
                <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 text-center">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{color: '#1a1a1a'}}>Market Intelligence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Providing valuable sales and marketing feedback, spotting trends, and helping manufacturers adapt their offerings for UK and European markets.
                  </p>
                </div>

                {/* Supply Chain Support */}
                <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 text-center">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{color: '#1a1a1a'}}>Supply Chain Support</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ensuring supply continuity, handling after-sales support, troubleshooting issues, and managing returns for complete customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What We Represent Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{color: '#1a1a1a'}}>
                  Component Categories We Represent
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From semiconductors to electromechanical parts, we provide comprehensive representation across all major PCB-level component categories
                </p>
              </div>
              
              {/* Two-column layout with larger feature blocks */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Semiconductors */}
                  <div className="bg-white rounded-lg p-8 border-l-4" style={{borderColor: '#FFD700'}}>
                    <div className="flex items-start space-x-4">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{backgroundColor: '#ef4444'}}
                      >
                        <svg className="w-6 h-6" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2" style={{color: '#1a1a1a'}}>Semiconductors</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Integrated circuits, microcontrollers, and advanced chips for modern electronic applications across automotive, industrial, and consumer markets.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Electromagnetic Components */}
                  <div className="bg-white rounded-lg p-8 border-l-4" style={{borderColor: '#FFD700'}}>
                    <div className="flex items-start space-x-4">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{backgroundColor: '#ef4444'}}
                      >
                        <svg className="w-6 h-6" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2" style={{color: '#1a1a1a'}}>Electromagnetic Components</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Inductors, transformers, and ferrite cores designed for power management, signal processing, and EMI suppression applications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Passives */}
                  <div className="bg-white rounded-lg p-8 border-l-4" style={{borderColor: '#FFD700'}}>
                    <div className="flex items-start space-x-4">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{backgroundColor: '#ef4444'}}
                      >
                        <svg className="w-6 h-6" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2" style={{color: '#1a1a1a'}}>Passive Components</h3>
                        <p className="text-gray-600 leading-relaxed">
                          High-quality resistors, capacitors, and connectors that form the foundation of reliable electronic circuits and systems.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Electromechanical Parts */}
                  <div className="bg-white rounded-lg p-8 border-l-4" style={{borderColor: '#FFD700'}}>
                    <div className="flex items-start space-x-4">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{backgroundColor: '#ef4444'}}
                      >
                        <svg className="w-6 h-6" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2" style={{color: '#1a1a1a'}}>Electromechanical Parts</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Precision switches, relays, and mechanical components for control systems, user interfaces, and automation applications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Industries We Serve Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{color: '#1a1a1a'}}>
                  Industries We Serve
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From aerospace to medical devices, we provide specialized component representation across diverse technology sectors
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Aerospace & Defence */}
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 text-center">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{color: '#1a1a1a'}}>Aerospace & Defence</h3>
                  <p className="text-gray-600 text-sm">
                    High-reliability components for mission-critical applications and defense systems
                  </p>
                </div>

                {/* Automotive & EV */}
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 text-center">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{color: '#1a1a1a'}}>Automotive & EV</h3>
                  <p className="text-gray-600 text-sm">
                    Power management and control systems for next-generation vehicles and charging infrastructure
                  </p>
                </div>

                {/* Consumer Electronics */}
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 text-center">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{color: '#1a1a1a'}}>Consumer Electronics</h3>
                  <p className="text-gray-600 text-sm">
                    Miniaturized components for smartphones, wearables, and smart home devices
                  </p>
                </div>

                {/* Industrial & IoT */}
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 text-center">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{color: '#1a1a1a'}}>Industrial & IoT</h3>
                  <p className="text-gray-600 text-sm">
                    Ruggedized sensors and connectivity solutions for Industry 4.0 applications
                  </p>
                </div>

                {/* Medical Devices */}
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 text-center md:col-span-2 lg:col-span-1 lg:col-start-2">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{color: '#1a1a1a'}}>Medical Devices</h3>
                  <p className="text-gray-600 text-sm">
                    Biocompatible and precision components for diagnostic and therapeutic equipment
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Work With Goldfinch Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{color: '#1a1a1a'}}>
                  Why Work With Goldfinch
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* ERA Registered */}
                <div className="bg-white rounded-lg shadow-md p-8 border-l-4 hover:shadow-lg transition-shadow duration-300 text-center" style={{borderLeftColor: '#FFD700'}}>
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-4" style={{color: '#1a1a1a'}}>ERA Registered</h3>
                  <p className="leading-relaxed text-gray-600">
                    For credibility and trust
                  </p>
                </div>

                {/* Strong Ties */}
                <div className="bg-white rounded-lg shadow-md p-8 border-l-4 hover:shadow-lg transition-shadow duration-300 text-center" style={{borderLeftColor: '#FFD700'}}>
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-4" style={{color: '#1a1a1a'}}>Strong Ties</h3>
                  <p className="leading-relaxed text-gray-600">
                    To established US manufacturers
                  </p>
                </div>

                {/* Local Support */}
                <div className="bg-white rounded-lg shadow-md p-8 border-l-4 hover:shadow-lg transition-shadow duration-300 text-center" style={{borderLeftColor: '#FFD700'}}>
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-4" style={{color: '#1a1a1a'}}>Local Support</h3>
                  <p className="leading-relaxed text-gray-600">
                    In the UK and Europe
                  </p>
                </div>

                {/* Streamline Supply Chain */}
                <div className="bg-white rounded-lg shadow-md p-8 border-l-4 hover:shadow-lg transition-shadow duration-300 text-center" style={{borderLeftColor: '#FFD700'}}>
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-4" style={{color: '#1a1a1a'}}>Streamline Supply Chain</h3>
                  <p className="leading-relaxed text-gray-600">
                    Helping customers optimise procurement
                  </p>
                </div>
              </div>
            </div>
          </section>

      {/* FAQ Section */}
      <section className="py-20" style={{backgroundColor: '#f8f9fa'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{color: '#1a1a1a'}}>
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our representation services
            </p>
          </div>
          
          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="border border-gray-200 rounded-lg bg-white shadow-sm border-l-4" style={{borderLeftColor: '#FFD700'}}>
              <button
                onClick={() => toggleFaq(0)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-yellow-50 transition-colors duration-200"
                style={{backgroundColor: openFaq === 0 ? '#fffbeb' : 'white'}}
              >
                <h3 className="text-lg font-bold" style={{color: '#1a1a1a'}}>
                  Why choose representation over direct sales?
                </h3>
                <svg 
                  className={`w-5 h-5 transition-transform duration-200 ${openFaq === 0 ? 'rotate-180' : ''}`}
                  style={{color: '#ef4444'}}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 0 && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    Our commission-based model with existing infrastructure is more cost-effective than setting up direct offices. We absorb travel and overhead costs while leveraging established relationships and local market knowledge for faster market penetration.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="border border-gray-200 rounded-lg bg-white shadow-sm border-l-4" style={{borderLeftColor: '#FFD700'}}>
              <button
                onClick={() => toggleFaq(1)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-yellow-50 transition-colors duration-200"
                style={{backgroundColor: openFaq === 1 ? '#fffbeb' : 'white'}}
              >
                <h3 className="text-lg font-bold" style={{color: '#1a1a1a'}}>
                  What makes Goldfinch different from other representatives?
                </h3>
                <svg 
                  className={`w-5 h-5 transition-transform duration-200 ${openFaq === 1 ? 'rotate-180' : ''}`}
                  style={{color: '#ef4444'}}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 1 && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    We offer multi-line selling with complementary, non-competing product ranges, allowing customers to source more from one trusted place. Our comprehensive approach includes technical support, training, and after-sales assistance beyond just sales.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="border border-gray-200 rounded-lg bg-white shadow-sm border-l-4" style={{borderLeftColor: '#FFD700'}}>
              <button
                onClick={() => toggleFaq(2)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-yellow-50 transition-colors duration-200"
                style={{backgroundColor: openFaq === 2 ? '#fffbeb' : 'white'}}
              >
                <h3 className="text-lg font-bold" style={{color: '#1a1a1a'}}>
                  How do you help US manufacturers adapt to European markets?
                </h3>
                <svg 
                  className={`w-5 h-5 transition-transform duration-200 ${openFaq === 2 ? 'rotate-180' : ''}`}
                  style={{color: '#ef4444'}}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 2 && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    We provide valuable sales and marketing intelligence, giving feedback about what works in local markets, spotting trends, and helping manufacturers adapt their product offerings and messaging specifically for UK and European customers.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="border border-gray-200 rounded-lg bg-white shadow-sm border-l-4" style={{borderLeftColor: '#FFD700'}}>
              <button
                onClick={() => toggleFaq(3)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-yellow-50 transition-colors duration-200"
                style={{backgroundColor: openFaq === 3 ? '#fffbeb' : 'white'}}
              >
                <h3 className="text-lg font-bold" style={{color: '#1a1a1a'}}>
                  What level of technical support do you provide?
                </h3>
                <svg 
                  className={`w-5 h-5 transition-transform duration-200 ${openFaq === 3 ? 'rotate-180' : ''}`}
                  style={{color: '#ef4444'}}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 3 && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    Our team helps customers and engineers select the right components, providing advice on electromagnetic components, passives, and semiconductors. We match specifications with cost, availability, and performance requirements, plus offer customer training and demonstrations.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="border border-gray-200 rounded-lg bg-white shadow-sm border-l-4" style={{borderLeftColor: '#FFD700'}}>
              <button
                onClick={() => toggleFaq(4)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-yellow-50 transition-colors duration-200"
                style={{backgroundColor: openFaq === 4 ? '#fffbeb' : 'white'}}
              >
                <h3 className="text-lg font-bold" style={{color: '#1a1a1a'}}>
                  What happens after the sale?
                </h3>
                <svg 
                  className={`w-5 h-5 transition-transform duration-200 ${openFaq === 4 ? 'rotate-180' : ''}`}
                  style={{color: '#ef4444'}}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 4 && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    We provide comprehensive after-sales support including troubleshooting, ensuring supply continuity, and handling returns or quality issues. Our goal is to maintain long-term relationships and ensure customer success throughout the product lifecycle.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{color: '#1a1a1a'}}>
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Proudly representing innovative US manufacturers across the electronics industry
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {/* Partner Logo Placeholders */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="flex items-center justify-center p-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors duration-200">
                <div className="text-center">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2"
                    style={{backgroundColor: '#FFD700', opacity: 0.7}}
                  >
                    <svg className="w-6 h-6" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500 font-medium">Partner Logo</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600">
              <span className="font-medium" style={{color: '#1a1a1a'}}>Interested in partnership?</span> 
              <span className="ml-2">We&apos;re always looking to work with innovative component manufacturers.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Memberships & Credentials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4" style={{color: '#1a1a1a'}}>
              Memberships & Credentials
            </h2>
            <p className="text-lg text-gray-600">
              Professional affiliations that demonstrate our commitment to industry standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* ERA Logo */}
            <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm border border-gray-200 border-l-4" style={{borderLeftColor: '#FFD700'}}>
              <div className="relative w-16 h-12 flex-shrink-0">
                <Image
                  src="/logos/era_logo_chrome_135.png"
                  alt="ERA - Electronic Representatives Association"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-sm font-semibold" style={{color: '#1a1a1a'}}>
                  ERA Registered Member
                </p>
                <p className="text-xs text-gray-600">
                  Electronic Representatives Association
                </p>
              </div>
            </div>
            
            {/* Future credentials placeholder */}
            <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm border-2 border-dashed border-gray-300 border-l-4" style={{borderLeftColor: '#FFD700'}}>
              <div 
                className="w-16 h-12 rounded flex items-center justify-center flex-shrink-0"
                style={{backgroundColor: '#FFD700', opacity: 0.3}}
              >
                <svg className="w-6 h-6" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Additional Credentials
                </p>
                <p className="text-xs text-gray-400">
                  Future certifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights from the Industry Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{color: '#1a1a1a'}}>
              Insights from the Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest trends, technologies, and market insights from the electronics components industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article Placeholder 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 hover:shadow-lg transition-shadow duration-300" style={{borderLeftColor: '#FFD700'}}>
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500">Featured Article</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2" style={{color: '#1a1a1a'}}>Market Trends in Component Manufacturing</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Exploring the latest developments in US component manufacturing and their impact on European markets...
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>Coming Soon</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                </div>
              </div>
            </div>

            {/* Article Placeholder 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 hover:shadow-lg transition-shadow duration-300" style={{borderLeftColor: '#FFD700'}}>
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500">Industry Insight</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2" style={{color: '#1a1a1a'}}>The Future of EV Component Supply</h3>
                <p className="text-gray-600 text-sm mb-4">
                  How electric vehicle growth is reshaping component demand and supply chain strategies across the Atlantic...
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>Coming Soon</span>
                  <span className="mx-2">•</span>
                  <span>7 min read</span>
                </div>
              </div>
            </div>

            {/* Article Placeholder 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 hover:shadow-lg transition-shadow duration-300" style={{borderLeftColor: '#FFD700'}}>
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{backgroundColor: '#ef4444'}}
                  >
                    <svg className="w-8 h-8" style={{color: '#ffffff'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500">Technical Guide</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2" style={{color: '#1a1a1a'}}>Navigating Component Compliance</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Understanding regulatory requirements when bringing US components to European markets...
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>Coming Soon</span>
                  <span className="mx-2">•</span>
                  <span>6 min read</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Stay updated with industry insights and expert analysis from our news and insights team
            </p>
            <a 
              href="/news"
              className="inline-block px-6 py-3 rounded-lg font-semibold transition-colors duration-200 hover:opacity-90"
              style={{
                backgroundColor: '#FFD700',
                color: '#1a1a1a'
              }}
            >
              View All Articles
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{backgroundColor: '#1a1a1a'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{color: '#D5CCC0'}}>
            Ready to Connect with US Component Manufacturers?
          </h2>
          <p className="text-xl mb-8" style={{color: '#D5CCC0'}}>
            Contact Goldfinch Representation Ltd today to discover how we can streamline your supply chain
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openContactModal}
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 hover:opacity-90"
              style={{
                backgroundColor: '#FFD700',
                color: '#1a1a1a'
              }}
            >
              Find Out More
            </button>
            <button 
              onClick={openContactModal}
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 border-2 hover:opacity-90"
              style={{
                borderColor: '#FFD700',
                color: '#FFD700',
                backgroundColor: 'transparent'
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold" style={{color: '#1a1a1a'}}>
                {modalStep === 1 && 'Contact Information'}
                {modalStep === 2 && 'Tell Us More'}
                {modalStep === 3 && 'Thank You!'}
              </h2>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Step Indicator */}
            {modalStep !== 3 && (
              <div className="px-6 pt-4">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${modalStep >= 1 ? 'text-white' : 'text-gray-400'}`} style={{backgroundColor: modalStep >= 1 ? '#1a1a1a' : '#e5e7eb'}}>
                    1
                  </div>
                  <div className={`flex-1 h-1 mx-2 ${modalStep >= 2 ? 'bg-goldfinch-dark' : 'bg-gray-200'}`} style={{backgroundColor: modalStep >= 2 ? '#1a1a1a' : '#e5e7eb'}}></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${modalStep >= 2 ? 'text-white' : 'text-gray-400'}`} style={{backgroundColor: modalStep >= 2 ? '#1a1a1a' : '#e5e7eb'}}>
                    2
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>Contact Details</span>
                  <span>Your Message</span>
                </div>
              </div>
            )}

            {/* Modal Content */}
            <div className="p-6">
              {modalStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-goldfinch-dark focus:border-transparent"
                      style={{"--tw-ring-color": "#1a1a1a"} as React.CSSProperties}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-goldfinch-dark focus:border-transparent"
                      style={{"--tw-ring-color": "#1a1a1a"} as React.CSSProperties}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Number
                    </label>
                    <div className="flex gap-2">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        className="w-20 px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-goldfinch-dark focus:border-transparent text-sm"
                        style={{"--tw-ring-color": "#1a1a1a"} as React.CSSProperties}
                      >
                        <option value="">-</option>
                        {countries.map((country) => (
                          <option key={country.code} value={country.phone}>
                            {country.phone}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-goldfinch-dark focus:border-transparent"
                        style={{"--tw-ring-color": "#1a1a1a"} as React.CSSProperties}
                        placeholder="Phone number"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Format: Country code + Phone number</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-goldfinch-dark focus:border-transparent"
                      style={{"--tw-ring-color": "#1a1a1a"} as React.CSSProperties}
                      placeholder="e.g. Design Engineer, Procurement Manager, CTO"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleCountryChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-goldfinch-dark focus:border-transparent"
                      style={{"--tw-ring-color": "#1a1a1a"} as React.CSSProperties}
                      required
                    >
                      <option value="">Please select your country</option>
                      <optgroup label="Primary Markets">
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                      </optgroup>
                      <optgroup label="European Union">
                        {countries.slice(2, 28).map((country) => (
                          <option key={country.code} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Other Countries">
                        {countries.slice(28).map((country) => (
                          <option key={country.code} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business/Company Name
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-goldfinch-dark focus:border-transparent"
                      style={{"--tw-ring-color": "#1a1a1a"} as React.CSSProperties}
                      placeholder="Enter your company or business name"
                    />
                  </div>
                </div>
              )}

              {modalStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Why are you contacting us today? *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-goldfinch-dark focus:border-transparent resize-none"
                      style={{"--tw-ring-color": "#1a1a1a"} as React.CSSProperties}
                      placeholder="Please tell us about your inquiry, the components you're interested in, or how we can help you..."
                      required
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    Please provide as much detail as possible to help us understand your requirements.
                  </p>
                </div>
              )}

              {modalStep === 3 && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#ef4444'}}>
                    <svg className="w-8 h-8" style={{color: '#1a1a1a'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{color: '#1a1a1a'}}>
                    Message Submitted Successfully!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for your inquiry. One of our team members will be in touch within 48 hours.
                  </p>
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 rounded-lg font-semibold transition-colors duration-200 hover:opacity-90"
                    style={{
                      backgroundColor: '#FFD700',
                      color: '#1a1a1a'
                    }}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            {modalStep !== 3 && (
              <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
                <button
                  onClick={modalStep === 1 ? closeModal : prevStep}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  {modalStep === 1 ? 'Cancel' : 'Back'}
                </button>
                <button
                  onClick={modalStep === 1 ? nextStep : handleSubmit}
                  disabled={modalStep === 1 ? !formData.name || !formData.email || !formData.country : !formData.message}
                  className="px-6 py-2 rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: '#FFD700',
                    color: '#1a1a1a'
                  }}
                >
                  {modalStep === 1 ? 'Next' : 'Submit'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
