import React from 'react';
import { motion, useTransform } from 'framer-motion';
import Section from '../ui/Section';
import TextReveal from '../ui/TextReveal';
import Card from '../ui/Card';
import SystemGraph from '../ui/SystemGraph';
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
                        <h3 className="text-3xl md:text-4xl font-display font-bold mb-8 leading-tight">
                            Building <span className="text-neon-green">Scalable Systems</span> <br />
                            Not Just Websites.
                        </h3>
                    </TextReveal>

                    <TextReveal delay={0.2}>
                        <div className="space-y-6 text-gray-400 leading-relaxed font-light text-lg">
                            <p>
                                I am a <strong>Backend-Focused Engineer</strong> transitioning from monolithic applications to <MagneticTag className="text-neon-green font-medium inline-block relative cursor-none">Distributed Microservices</MagneticTag>. My expertise lies in designing high-performance APIs with <strong>ASP.NET Core</strong> and ensuring system resilience.
                            </p>

                            <p>
                                I prioritize <strong>System Design</strong> over temporary fixes. By strictly adhering to <MagneticTag className="text-neon-green font-medium inline-block relative cursor-none">Clean Architecture</MagneticTag> and Domain-Driven Design (DDD), I build software that remains maintainable as it scales.
                            </p>

                            <p className="text-sm border-l-2 border-neon-green/30 pl-4 italic">
                                "The goal isn't just to write code that works, but to architect systems that endure."
                            </p>
                        </div>
                    </TextReveal>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mt-10">
                        {stats.map((stat, index) => (
                            <Card key={index} className="p-4 flex items-center gap-4 hover:border-neon-green/40 transition-colors group">
                                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-neon-green/10 transition-colors">
                                    <stat.icon className="text-neon-green" size={20} />
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
                    <SystemGraph className="w-full max-w-sm aspect-square md:w-[400px] md:h-[400px]" />
                </div>

            </div>
        </Section>
    );
};

export default About;
