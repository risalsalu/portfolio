import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/risal" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/risal" },
    { icon: <FaTwitter />, url: "https://twitter.com/risal" },
    { icon: <FaEnvelope />, url: "mailto:risal@example.com" }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
            <p className="mb-4">Have a project in mind or want to collaborate?</p>
            <a 
              href="mailto:risal@example.com" 
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              risal@example.com
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-white transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="text-white font-medium mb-2">Based in</h4>
            <p>San Francisco, CA</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Risal. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Built with React and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}