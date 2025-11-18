import React, { useState } from 'react';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <nav className="bg-black/90 backdrop-blur-md fixed w-full z-50 border-b border-lime-400/20 shadow-lg shadow-lime-400/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center opacity-100 translate-x-0 transition duration-500">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-lime-400 to-green-300 bg-clip-text text-transparent">
              Web<span className="text-white">Dev</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex space-x-8 items-center">
              {links.map((item) => (
                <li key={item} className="relative">
                  <a
                    href={`#${item}`}
                    onClick={() => setActiveLink(item)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      activeLink === item
                        ? 'text-lime-400'
                        : 'text-gray-300 hover:text-lime-400'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                  {activeLink === item && (
                    <div className="absolute left-0 bottom-0 w-full h-0.5 bg-lime-400" />
                  )}
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="ml-4 px-4 py-2 text-sm font-medium rounded-md text-black bg-lime-400 hover:bg-lime-300 transition-all duration-300 shadow-lg shadow-lime-400/30 inline-block transform hover:scale-105 active:scale-95"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-lime-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-lime-400/10 overflow-hidden">
          <ul className="px-4 py-4 space-y-2">
            {links.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => {
                    setActiveLink(item);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activeLink === item
                      ? 'bg-lime-400/10 text-lime-400'
                      : 'text-gray-300 hover:bg-lime-400/5 hover:text-lime-400'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="block w-full text-center px-4 py-2 rounded-md text-base font-medium text-black bg-lime-400 hover:bg-lime-300"
              >
                Hire 
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
