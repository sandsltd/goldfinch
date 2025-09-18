import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-goldfinch-dark text-goldfinch-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-goldfinch-gold">
                <Image
                  src="/goldfinch/European Goldfinch-2.png"
                  alt="European Goldfinch"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-goldfinch-gold">
                  Goldfinch Representation Ltd
                </h3>
              </div>
            </div>
            <p className="text-goldfinch-white-400 mb-4 max-w-md">
              Specialising in sourcing and distributing premium electronic components from USA manufacturers to UK and European markets.
            </p>
            <div className="flex space-x-4">
                <a href="#" className="text-goldfinch-white-400 hover:text-goldfinch-gold transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-goldfinch-gold font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/manufacture-representation" className="text-goldfinch-white-400 hover:text-goldfinch-gold transition-colors duration-200">
                  Manufacture Representation
                </a>
              </li>
              <li>
                <a href="/product-representation" className="text-goldfinch-white-400 hover:text-goldfinch-gold transition-colors duration-200">
                  Product Representation
                </a>
              </li>
              <li>
                <a href="/about" className="text-goldfinch-white-400 hover:text-goldfinch-gold transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="/news" className="text-goldfinch-white-400 hover:text-goldfinch-gold transition-colors duration-200">
                  News & Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-goldfinch-gold font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-goldfinch-white-400">
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-goldfinch-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@goldfinchrepresentation.com
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-goldfinch-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +44 (0) 20 7123 4567
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5 text-goldfinch-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  123 Finch Lane<br />
                  Chard, TA13 5FH<br />
                  United Kingdom
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-goldfinch-gold border-opacity-30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <p className="text-goldfinch-white-400 text-sm">
                © 2024 Goldfinch Representation Ltd. All rights reserved.
              </p>
              {/* Development Credit */}
              <div className="flex items-center space-x-2 text-xs text-goldfinch-white-400">
                <span>Website by</span>
                <a 
                  href="https://www.saunders-simmons.co.uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
                >
                  <div className="relative w-16 h-6">
                    <Image
                      src="/logos/saunders-simmons-logo.png"
                      alt="Saunders Simmons"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <svg className="w-3 h-3 text-goldfinch-white-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-goldfinch-white-400 hover:text-goldfinch-gold text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-goldfinch-white-400 hover:text-goldfinch-gold text-sm transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
