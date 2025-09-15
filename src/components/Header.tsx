'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm" style={{borderBottom: '2px solid #E0C31B'}}>
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
            <button className="text-goldfinch-dark hover:text-goldfinch-gold focus:outline-none focus:text-goldfinch-gold">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4 border-t-2 border-goldfinch-gold pt-4 mt-4">
          <div className="flex flex-col space-y-3">
            <Link 
              href="/" 
              className="text-goldfinch-dark hover:text-goldfinch-gold font-medium py-2 transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-goldfinch-dark hover:text-goldfinch-gold font-medium py-2 transition-colors duration-200"
            >
              About
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div>
              <button 
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="text-goldfinch-dark hover:text-goldfinch-gold font-medium py-2 transition-colors duration-200 flex items-center justify-between w-full"
              >
                <span>Services</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isMobileServicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link 
                    href="/manufacture-representation"
                    className="block text-goldfinch-brown-600 hover:text-goldfinch-gold py-2 transition-colors duration-200"
                  >
                    Manufacture Representation
                  </Link>
                  <Link 
                    href="/product-representation"
                    className="block text-goldfinch-brown-600 hover:text-goldfinch-gold py-2 transition-colors duration-200"
                  >
                    Product Representation
                  </Link>
                </div>
              )}
            </div>
            <Link 
              href="/news" 
              className="text-goldfinch-dark hover:text-goldfinch-gold font-medium py-2 transition-colors duration-200"
            >
              News
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
