'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm" style={{borderBottom: '2px solid #E0C31B'}}>
      {/* Top Contact Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center py-2">
            <div className="flex items-center space-x-6 text-sm">
              {/* Phone - always visible */}
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" style={{color: '#84674B'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href="tel:+441234567890" 
                  className="font-medium hover:opacity-80 transition-opacity duration-200"
                  style={{color: '#84674B'}}
                >
                  +44 1234 567890
                </a>
              </div>
              
              {/* Email - desktop only */}
              <div className="hidden md:flex items-center space-x-2">
                <svg className="w-4 h-4" style={{color: '#84674B'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:info@goldfinchrepresentation.com" 
                  className="font-medium hover:opacity-80 transition-opacity duration-200"
                  style={{color: '#84674B'}}
                >
                  info@goldfinchrepresentation.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-4">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2" style={{borderColor: '#E0C31B'}}>
              <Image
                src="/goldfinch/European Goldfinch.png"
                alt="European Goldfinch"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold" style={{color: '#84674B'}}>
                Goldfinch Representation
              </h1>
              <p className="text-sm font-medium" style={{color: '#84674B'}}>Ltd</p>
            </div>
          </div>

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
                  </div>
                </div>
              )}
            </div>
            <Link 
              href="/news" 
              className="text-gray-700 hover:text-goldfinch-gold font-medium transition-colors duration-200 py-2 px-3 hover:bg-gray-50 rounded-md"
            >
              News
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

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t-2 border-goldfinch-gold pt-4 mt-4">
          <div className="flex flex-col space-y-3">
            {/* Mobile Email Contact */}
            <div className="bg-gray-50 rounded-lg p-3 mb-3">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" style={{color: '#84674B'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:info@goldfinchrepresentation.com" 
                  className="text-sm font-medium hover:opacity-80 transition-opacity duration-200"
                  style={{color: '#84674B'}}
                >
                  info@goldfinchrepresentation.com
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
              href="/news" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-goldfinch-dark hover:text-goldfinch-gold font-medium py-2 transition-colors duration-200"
            >
              News
            </Link>
          </div>
          </div>
        )}
      </div>
    </header>
  );
}
