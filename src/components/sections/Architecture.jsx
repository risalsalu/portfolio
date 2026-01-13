import React, { useEffect, useRef } from 'react';
import Section from '../ui/Section';
import TextReveal from '../ui/TextReveal';
import { Database, Server, Smartphone, Globe, Shield, Activity } from 'lucide-react';
import gsap from 'gsap';

const ArchitectureNode = ({ icon: Icon, label, details, className }) => (
    <div className={`p-6 bg-dark-bg border border-white/10 rounded-xl relative z-10 flex flex-col items-center text-center w-48 ${className}`}>
        <div className="bg-white/5 p-4 rounded-full mb-3">
            <Icon className="text-neon-blue" size={32} />
        </div>
        <h4 className="font-bold text-white mb-2">{label}</h4>
        <p className="text-xs text-gray-500 font-mono">{details}</p>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-neon-blue/5 blur-xl -z-10 rounded-xl"></div>
    </div>
);

const DataStream = () => {
    // Animated SVG lines connecting nodes
    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <defs>
                <linearGradient id="streamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0a0a0a" stopOpacity="0" />
                    <stop offset="50%" stopColor="#00f3ff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0" />
                </linearGradient>
            </defs>

            {/* Frontend to Gateway */}
            <path
                d="M 200,300 C 350,300 350,300 500,300"
                stroke="white"
                strokeOpacity="0.1"
                strokeWidth="2"
                fill="none"
            />
            <circle r="4" fill="#00f3ff">
                <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    path="M 200,300 C 350,300 350,300 500,300"
                />
            </circle>

            {/* Gateway to Services */}
            <path
                d="M 700,300 C 800,300 800,150 950,150"
                stroke="white"
                strokeOpacity="0.1"
                strokeWidth="2"
                fill="none"
            />
            <circle r="4" fill="#bc13fe">
                <animateMotion
                    dur="3s"
                    begin="1s"
                    repeatCount="indefinite"
                    path="M 700,300 C 800,300 800,150 950,150"
                />
            </circle>

            <path
                d="M 700,300 C 800,300 800,450 950,450"
                stroke="white"
                strokeOpacity="0.1"
                strokeWidth="2"
                fill="none"
            />
            <circle r="4" fill="#0ff">
                <animateMotion
                    dur="3s"
                    begin="1.5s"
                    repeatCount="indefinite"
                    path="M 700,300 C 800,300 800,450 950,450"
                />
            </circle>
        </svg>
    );
}

const Architecture = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Additional GSAP animations if needed for entry
    }, []);

    return (
        <Section id="architecture" className="bg-dark-bg overflow-hidden">
            <div className="mb-20 text-center">
                <TextReveal>
                    <h2 className="text-neon-blue font-mono text-sm tracking-widest mb-2">05. SYSTEM DESIGN</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold">
                        Scalable <span className="text-neon-purple">Architecture</span>
                    </h3>
                </TextReveal>
            </div>

            <div ref={containerRef} className="relative w-full max-w-6xl mx-auto h-[600px] flex items-center justify-between px-4 md:px-20 scale-75 md:scale-100 origin-center">
                <DataStream />

                {/* Frontend Layer */}
                <div className="flex flex-col gap-8">
                    <ArchitectureNode
                        icon={Globe}
                        label="Client Apps"
                        details="React / Next.js / Mobile"
                        className="hover:-translate-y-2 transition-transform duration-300 left-10 md:left-0"
                    />
                </div>

                {/* API Gateway Layer */}
                <div className="flex flex-col items-center justify-center">
                    <ArchitectureNode
                        icon={Shield}
                        label="API Gateway"
                        details="Authentication / Rate Limiting"
                        className="hover:scale-110 transition-transform duration-300 border-neon-blue/50 shadow-[0_0_20px_rgba(0,243,255,0.2)]"
                    />
                </div>

                {/* Microservices Layer */}
                <div className="flex flex-col gap-24">
                    <ArchitectureNode
                        icon={Server}
                        label="Core Service"
                        details=".NET 8 Web API"
                        className="hover:translate-x-2 transition-transform duration-300"
                    />
                    <ArchitectureNode
                        icon={Activity}
                        label="Analytics"
                        details="Python / Node.js Stream"
                        className="hover:translate-x-2 transition-transform duration-300"
                    />
                </div>

            </div>

            <div className="text-center mt-[-50px] relative z-20">
                <p className="text-gray-400 text-sm font-mono bg-dark-bg inline-block px-4 py-2 border border-white/10 rounded-full">
                    Interactive Microservices Data Flow Visualization
                </p>
            </div>
        </Section>
    );
};

export default Architecture;
