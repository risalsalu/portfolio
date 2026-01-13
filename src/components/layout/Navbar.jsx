import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useScroll } from '../../hooks/useScroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
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
        { name: 'Work', href: '#work' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
                scrolled ? 'bg-black/50 backdrop-blur-md border-white/10 py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="text-2xl font-display font-bold text-white tracking-widest hover:text-neon-blue transition-colors">
                    DEV<span className="text-neon-blue">.</span>PORTFOLIO
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white hover:text-shadow-neon transition-all relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all group-hover:w-full" />
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        className="px-5 py-2 text-sm font-bold text-black bg-neon-blue rounded hover:bg-white hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] transition-all transform hover:-translate-y-0.5"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-neon-blue transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    'fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden',
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-display font-bold text-gray-300 hover:text-white hover:text-shadow-neon transition-all"
                    >
                        {link.name}
                    </a>
                ))}
                <a
                    href="/resume.pdf"
                    onClick={() => setIsOpen(false)}
                    className="px-8 py-3 text-lg font-bold text-black bg-neon-blue rounded hover:bg-white transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)]"
                >
                    Download Resume
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
