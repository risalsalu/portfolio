import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { Menu, X, FileText } from 'lucide-react';
import { cn } from '../utils/cn';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'System Design', href: '#architecture' },
    { name: 'Experience', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300 border-b border-transparent",
      scrolled || isMenuOpen ? "bg-dark-bg/90 backdrop-blur-md border-white/10 shadow-lg" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Brand Identity */}
          <div className="flex-shrink-0">
            <a href="#" onClick={() => setActiveLink('home')} className="block group">
              <h1 className="text-xl md:text-2xl font-display font-bold text-white tracking-wide group-hover:text-neon-blue transition-colors">
                Muhammed Rizal N P
              </h1>
              <span className="text-xs font-mono text-gray-500 group-hover:text-white transition-colors">
                Backend-Focused Full Stack
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setActiveLink(link.name)}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-neon-blue font-mono",
                      activeLink === link.name ? "text-neon-blue" : "text-gray-400"
                    )}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Resume CTA */}
            <div className="pl-6 border-l border-white/10">
              <a
                href="/Muhammed_Rizal_NP.pdf"
                download="Muhammed_Rizal_NP.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-white hover:text-neon-blue transition-colors"
              >
                <FileText size={16} />
                Resume
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-neon-blue transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-dark-bg border-t border-white/10">
          <ul className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "block text-base font-medium transition-colors hover:text-neon-blue",
                    activeLink === link.name ? "text-neon-blue" : "text-gray-400"
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-white/10">
              <a
                href="/Muhammed_Rizal_NP.pdf"
                download="Muhammed_Rizal_NP.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-neon-blue"
              >
                <FileText size={16} />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

