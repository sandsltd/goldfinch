'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm relative" style={{borderBottom: '2px solid #FFD700'}}>
      {/* Top Contact Bar - Full Width on All Devices */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center py-2">
            <div className="flex items-center space-x-6 text-sm">
              {/* Phone - always visible */}
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" style={{color: '#ef4444'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href="tel:+447770833755" 
                  className="font-medium hover:opacity-80 transition-opacity duration-200"
                  style={{color: '#1a1a1a'}}
                >
                  +44 (0)7770 833755
                </a>
              </div>
              
              {/* Email - desktop only */}
              <div className="hidden md:flex items-center space-x-2">
                <svg className="w-4 h-4" style={{color: '#ef4444'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:info@goldfinchrep.com" 
                  className="font-medium hover:opacity-80 transition-opacity duration-200"
                  style={{color: '#1a1a1a'}}
                >
                  info@goldfinchrep.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-200">
            <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mr-4">
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
            <div className="flex flex-col justify-center">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold" style={{color: '#1a1a1a'}}>
                Goldfinch Representation Ltd
              </h1>
            </div>
          </Link>
          
          {/* Navigation and Mobile Menu */}
          <div className="flex items-center">
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-goldfinch-gold font-medium transition-colors duration-200 py-2 px-3 hover:bg-gray-50 rounded-md"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-goldfinch-gold font-medium transition-colors duration-200 py-2 px-3 hover:bg-gray-50 rounded-md"
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-gray-700 hover:text-goldfinch-gold font-medium transition-colors duration-200 py-2 px-3 hover:bg-gray-50 rounded-md flex items-center space-x-1">
                <span>Services</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    <Link 
                      href="/manufacture-representation"
                      className="block px-4 py-3 text-gray-700 hover:text-goldfinch-gold hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="font-medium">Manufacture Representation</div>
                      <div className="text-sm text-gray-500 mt-1">USA manufacturers to Europe</div>
                    </Link>
                    <Link 
                      href="/product-representation"
                      className="block px-4 py-3 text-gray-700 hover:text-goldfinch-gold hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="font-medium">Product Representation</div>
                      <div className="text-sm text-gray-500 mt-1">Component distribution services</div>
                    </Link>
                    <Link 
                      href="/bom-optimization"
                      className="block px-4 py-3 text-gray-700 hover:text-goldfinch-gold hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="font-medium">BOM Optimisation</div>
                      <div className="text-sm text-gray-500 mt-1">Bill of Materials analysis & optimisation</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
                <Link 
                  href="/news" 
                  className="text-gray-700 hover:text-goldfinch-gold font-medium transition-colors duration-200 py-2 px-3 hover:bg-gray-50 rounded-md"
                >
                  News/Insights
                </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-goldfinch-dark hover:text-goldfinch-gold focus:outline-none focus:text-goldfinch-gold"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t-2 border-goldfinch-gold pt-4 mt-4">
          <div className="flex flex-col space-y-3">
            {/* Mobile Email Contact */}
            <div className="bg-gray-50 rounded-lg p-3 mb-3">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" style={{color: '#ef4444'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:info@goldfinchrep.com" 
                  className="text-sm font-medium hover:opacity-80 transition-opacity duration-200"
                  style={{color: '#1a1a1a'}}
                >
                  info@goldfinchrep.com
                </a>
              </div>
            </div>
            
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-goldfinch-dark hover:text-goldfinch-gold font-medium py-2 transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-goldfinch-dark hover:text-goldfinch-gold font-medium py-2 transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/manufacture-representation"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-goldfinch-dark hover:text-goldfinch-gold font-medium py-2 transition-colors duration-200"
            >
              Manufacture Representation
            </Link>
            <Link 
              href="/product-representation"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-goldfinch-dark hover:text-goldfinch-gold font-medium py-2 transition-colors duration-200"
            >
              Product Representation
            </Link>
            <Link 
              href="/bom-optimization"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-goldfinch-dark hover:text-goldfinch-gold font-medium py-2 transition-colors duration-200"
            >
              BOM Optimisation
            </Link>
                <Link 
                  href="/news" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-goldfinch-dark hover:text-goldfinch-gold font-medium py-2 transition-colors duration-200"
                >
                  News/Insights
                </Link>
          </div>
          </div>
        )}
      </div>
    </header>
  );
}
