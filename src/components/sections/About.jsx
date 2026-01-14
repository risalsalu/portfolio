import React from 'react';
import { motion, useTransform } from 'framer-motion';
import Section from '../ui/Section';
import TextReveal from '../ui/TextReveal';
import Card from '../ui/Card';
import OrbitalWrapper from '../ui/OrbitalWrapper';
import { useCursorEngine } from '../../hooks/useCursorEngine';
import { User, Server, Database, Code, Shield, Cpu } from 'lucide-react';

const MagneticTag = ({ children, className }) => {
    const { smoothedX, smoothedY } = useCursorEngine();

    // Parallax effect: Shift opposite to cursor or towards? 
    // Let's do a subtle "float" towards cursor
    const x = useTransform(smoothedX, value => (value - window.innerWidth / 2) * 0.01);
    const y = useTransform(smoothedY, value => (value - window.innerHeight / 2) * 0.01);

    return (
        <motion.span style={{ x, y }} className={className}>
            {children}
        </motion.span>
    );
};

const About = () => {
    const stats = [
        { icon: Server, label: 'Architecture', value: 'Microservices' },
        { icon: Code, label: 'Backend', value: '.NET 8 / C#' },
        { icon: Database, label: 'Data', value: 'SQL & NoSQL' },
        { icon: Shield, label: 'Security', value: 'OAuth / JWT' },
    ];

    return (
        <Section id="about" className="bg-dark-bg relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <div className="relative z-10">
                    <TextReveal>
                        <h2 className="text-neon-blue font-mono text-sm tracking-widest mb-2">01. SYSTEM ARCHITECT</h2>
                        <h3 className="text-3xl md:text-4xl font-display font-bold mb-8 leading-tight">
                            Building <span className="text-neon-purple">Scalable Systems</span> <br />
                            Not Just Websites.
                        </h3>
                    </TextReveal>

                    <TextReveal delay={0.2}>
                        <div className="space-y-6 text-gray-400 leading-relaxed font-light text-lg">
                            <p>
                                I am a <strong>Backend-Focused Engineer</strong> transitioning from monolithic applications to <MagneticTag className="text-neon-blue font-medium inline-block relative cursor-none">Distributed Microservices</MagneticTag>. My expertise lies in designing high-performance APIs with <strong>ASP.NET Core</strong> and ensuring system resilience.
                            </p>

                            <p>
                                I prioritize <strong>System Design</strong> over temporary fixes. By strictly adhering to <MagneticTag className="text-neon-purple font-medium inline-block relative cursor-none">Clean Architecture</MagneticTag> and Domain-Driven Design (DDD), I build software that remains maintainable as it scales.
                            </p>

                            <p className="text-sm border-l-2 border-neon-blue/30 pl-4 italic">
                                "The goal isn't just to write code that works, but to architect systems that endure."
                            </p>
                        </div>
                    </TextReveal>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mt-10">
                        {stats.map((stat, index) => (
                            <Card key={index} className="p-4 flex items-center gap-4 hover:border-neon-blue/40 transition-colors group">
                                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-neon-blue/10 transition-colors">
                                    <stat.icon className="text-neon-blue" size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-display font-bold text-white text-lg">{stat.value}</span>
                                    <span className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</span>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Visual Node */}
                <div className="flex justify-center md:justify-end relative">
                    <OrbitalWrapper className="relative w-full max-w-sm aspect-square md:w-[400px] md:h-[400px]">
                        {/* Abstract System Visual */}
                        <div className="absolute inset-0 bg-dark-bg border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center group-hover:border-neon-blue/30 transition-all duration-500">
                            {/* Background Grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                            {/* Floating Nodes */}
                            <div className="grid grid-cols-2 gap-4 relative z-10 w-3/4 h-3/4">
                                <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl flex items-center justify-center backdrop-blur-md">
                                    <span className="font-mono text-neon-blue font-bold">API</span>
                                </div>
                                <div className="bg-gradient-to-bl from-white/5 to-transparent border border-white/10 rounded-xl flex items-center justify-center backdrop-blur-md">
                                    <span className="font-mono text-neon-purple font-bold">DB</span>
                                </div>
                                <div className="bg-gradient-to-tr from-white/5 to-transparent border border-white/10 rounded-xl flex items-center justify-center backdrop-blur-md">
                                    <span className="font-mono text-white/50 font-bold">Auth</span>
                                </div>
                                <div className="bg-gradient-to-tl from-white/5 to-transparent border border-white/10 rounded-xl flex items-center justify-center backdrop-blur-md">
                                    <span className="font-mono text-neon-blue/50 font-bold">Log</span>
                                </div>
                            </div>

                            {/* Center Pulse */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-neon-blue/10 rounded-full blur-xl animate-pulse"></div>
                        </div>
                    </OrbitalWrapper>
                </div>

            </div>
        </Section>
    );
};

export default About;
