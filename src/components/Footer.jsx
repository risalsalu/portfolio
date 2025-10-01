import React from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, Sparkles } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, url: "https://github.com/risal", label: "GitHub" },
    { icon: <Linkedin className="w-6 h-6" />, url: "https://linkedin.com/in/risal", label: "LinkedIn" },
    { icon: <Twitter className="w-6 h-6" />, url: "https://twitter.com/risal", label: "Twitter" },
    { icon: <Mail className="w-6 h-6" />, url: "mailto:risal@example.com", label: "Email" }
  ];

  return (
    <footer id="contact" className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-lime-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-yellow-400/15 rounded-full blur-xl animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-green-400/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 right-10 w-16 h-16 bg-lime-300/25 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s', animationDelay: '0.5s'}}></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

      <div className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-16">
            {/* Left section - CTA */}
            <div className="text-center lg:text-left transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Sparkles className="w-8 h-8 text-lime-400 mr-3 animate-pulse" />
                <h3 className="text-4xl font-bold bg-gradient-to-r from-lime-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
                  Let's Connect
                </h3>
              </div>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Have a project in mind or want to collaborate? Let's create something amazing together.
              </p>
              <a 
                href="mailto:risal@example.com" 
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-400 hover:to-green-500 text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-lime-500/25"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Get In Touch
              </a>
            </div>
            
            {/* Center section - Social links */}
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-6">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative p-6 bg-gray-900/50 backdrop-blur-sm border border-lime-400/20 rounded-2xl hover:bg-gray-800/70 hover:border-lime-400/40 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                    title={link.label}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 to-green-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative text-gray-300 group-hover:text-lime-400 transition-colors duration-300">
                      {link.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-lime-400 to-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Right section - Location */}
            <div className="text-center lg:text-right transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center lg:justify-end mb-4">
                <MapPin className="w-6 h-6 text-yellow-400 mr-2 animate-pulse" />
                <h4 className="text-2xl font-semibold text-white">Based in</h4>
              </div>
              <p className="text-gray-300 text-lg">San Francisco, CA</p>
              <div className="mt-4 p-4 bg-gray-900/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl hover:border-yellow-400/40 transition-all duration-300">
                <p className="text-sm text-gray-400">
                  Available for remote work worldwide
                </p>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gradient-to-r from-transparent via-lime-400/20 to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-gradient-to-r from-black to-gray-900 px-6">
                <div className="w-12 h-px bg-gradient-to-r from-lime-400 to-green-400"></div>
              </div>
            </div>
          </div>
          
          {/* Bottom section */}
          <div className="text-center space-y-4">
            <p className="text-gray-400 text-lg">
              &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Risal</span>. All rights reserved.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <span>Built with</span>
              <span className="text-lime-400 animate-pulse">♥</span>
              <span>using React and Tailwind CSS</span>
            </div>
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-600">
              <a href="#" className="hover:text-lime-400 transition-colors duration-300">Privacy Policy</a>
              <span className="text-gray-700">•</span>
              <a href="#" className="hover:text-lime-400 transition-colors duration-300">Terms of Service</a>
              <span className="text-gray-700">•</span>
              <a href="#" className="hover:text-lime-400 transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent"></div>
    </footer>
  );
}