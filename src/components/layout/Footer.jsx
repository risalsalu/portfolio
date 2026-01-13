import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50 blur-sm" />

            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                    <p className="text-2xl font-display font-bold text-white tracking-widest mb-2">
                        DEV<span className="text-neon-blue">.</span>PORTFOLIO
                    </p>
                    <p className="text-gray-400 text-sm">
                        Building the future, one line at a time.
                    </p>
                </div>

                <div className="flex space-x-6">
                    {[Github, Linkedin, Twitter, Mail].map((Icon, index) => (
                        <a
                            key={index}
                            href="#"
                            className="text-gray-400 hover:text-neon-blue transition-colors transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,243,255,0.5)]"
                        >
                            <Icon size={24} />
                        </a>
                    ))}
                </div>
            </div>

            <div className="text-center mt-8 text-gray-600 text-xs">
                &copy; {new Date().getFullYear()} Full Stack Developer. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
