import React from 'react';
import { Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    const socialLinks = [
        { icon: <FaWhatsapp className="w-5 h-5" />, url: "https://wa.me/917736361739", label: "WhatsApp" },
        { icon: <Github className="w-5 h-5" />, url: "https://github.com/risalsalu", label: "GitHub" },
        { icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/muhammed-rizal/", label: "LinkedIn" },
        { icon: <Mail className="w-5 h-5" />, url: "mailto:mdrizalnp@gmail.com", label: "Email" }
    ];

    return (
        <footer className="relative overflow-hidden bg-black border-t border-white/5">
            {/* Background Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-50%] right-[-10%] w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 py-16 px-6 container mx-auto">
                {/* Main Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-start mb-16">

                    {/* 1. CTA */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center bg-white/5 text-neon-green">
                                <Sparkles size={20} />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-white">Let's Connect</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Backend-focused developer ready to architect scalable solutions. Open for collaborations and distributed system projects.
                        </p>
                        <a
                            href="mailto:mdrizalnp@gmail.com"
                            className="inline-flex items-center gap-3 px-6 py-3 bg-neon-green/10 border border-neon-green/50 text-neon-green text-sm font-bold rounded hover:bg-neon-green hover:text-black transition-all duration-300"
                        >
                            <Mail size={16} />
                            <span>Start Conversation</span>
                        </a>
                    </div>

                    {/* 2. Socials */}
                    <div className="flex flex-col md:items-center">
                        <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">Social_Nodes</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-12 h-12 rounded border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-neon-green hover:border-neon-green/50 hover:shadow-[0_0_15px_rgba(74,222,128,0.2)] transition-all duration-300"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 3. Location */}
                    <div className="md:text-right space-y-4">
                        <div className="inline-flex items-center gap-2 text-neon-green/80 bg-neon-green/5 px-3 py-1 rounded-full border border-neon-green/10 text-xs font-mono">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
                            </span>
                            Available for Remote
                        </div>
                        <h4 className="text-xl font-bold text-white">Based in Calicut, India</h4>
                        <p className="text-gray-500 text-sm">Open to global opportunities.</p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-600">
                    <h1>&copy; {new Date().getFullYear()} Rizal.dev</h1>
                    <div className="flex gap-6">
                    </div>
                </div>
            </div>
        </footer>
    );
}
