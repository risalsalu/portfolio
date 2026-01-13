import React from 'react';
import Section from '../ui/Section';
import TextReveal from '../ui/TextReveal';
import Card from '../ui/Card';
import { User, Server, Database, Code } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: Code, label: 'Backend', value: '.NET Core' },
        { icon: Server, label: 'Architecture', value: 'Clean' },
        { icon: Database, label: 'Database', value: 'SQL/EF' },
        { icon: User, label: 'Methodology', value: 'Agile' },
    ];

    return (
        <Section id="about" className="bg-dark-bg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <TextReveal>
                        <h2 className="text-neon-blue font-mono text-sm tracking-widest mb-2">01. ABOUT ME</h2>
                        <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
                            Backend-Focused <span className="text-neon-purple">Software Developer</span>
                        </h3>
                    </TextReveal>

                    <TextReveal delay={0.2}>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            I am a Software Developer engaged in building scalable, secure, and maintainable web applications.
                            My expertise lies heavily in the backend, designing robust APIs using <strong>ASP.NET Core</strong>, implementing
                            clean architecture, and managing data with <strong>Entity Framework Core</strong> and <strong>Dapper</strong>.
                        </p>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            On the frontend, I create responsive, interactive interfaces using <strong>React</strong> and <strong>Redux Toolkit</strong>.
                            I thrive in Agile environments, putting value on writing clean, testable code and following SOLID principles.
                        </p>
                    </TextReveal>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                        {stats.map((stat, index) => (
                            <Card key={index} className="p-4 flex flex-col items-center justify-center text-center hover:border-neon-blue/30 group">
                                <stat.icon className="text-neon-blue mb-2 group-hover:text-neon-purple transition-colors" size={24} />
                                <span className="font-display font-bold text-xl text-white">{stat.value}</span>
                                <span className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</span>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="relative group flex justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-20 blur-3xl rounded-full group-hover:opacity-30 transition-opacity duration-700"></div>

                    {/* Abstract Tech Representation */}
                    <div className="relative w-full max-w-sm aspect-square border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm bg-black/40 p-1 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-2 w-full h-full p-4">
                            <div className="bg-white/5 rounded-lg flex items-center justify-center border border-white/5">
                                <span className="font-mono text-neon-blue text-lg font-bold">.NET</span>
                            </div>
                            <div className="bg-white/5 rounded-lg flex items-center justify-center border border-white/5">
                                <span className="font-mono text-neon-purple text-lg font-bold">C#</span>
                            </div>
                            <div className="bg-white/5 rounded-lg flex items-center justify-center border border-white/5">
                                <span className="font-mono text-gray-300 text-lg font-bold">SQL</span>
                            </div>
                            <div className="bg-white/5 rounded-lg flex items-center justify-center border border-white/5">
                                <span className="font-mono text-cyan-400 text-lg font-bold">React</span>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -top-5 -right-5 w-16 h-16 bg-neon-blue/20 rounded-full blur-xl animate-float"></div>
                    <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-neon-purple/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
                </div>
            </div>
        </Section>
    );
};

export default About;
