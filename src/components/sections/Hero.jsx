import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import Section from '../ui/Section';
import Button from '../ui/Button';
import TextReveal from '../ui/TextReveal';
import { Github, Linkedin, ArrowRight, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import OrbitalWrapper from '../ui/OrbitalWrapper';

const ParticleField = (props) => {
    const ref = useRef();
    const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }), []);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#CCFF00"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
};

const Hero = () => {
    const handleNav = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Section id="home" className="min-h-screen flex items-center justify-center overflow-hidden relative" fullWidth>
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 bg-dark-bg">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <ParticleField />
                </Canvas>
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-24 md:pt-0">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">

                    {/* Text Content */}
                    <div className="max-w-2xl text-center md:text-left">
                        <TextReveal delay={0.2}>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4 text-white">
                                Muhammed <br /> Rizal N P
                            </h1>
                        </TextReveal>

                        <TextReveal delay={0.4}>
                            <h2 className="text-xl md:text-2xl font-display text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-white mb-6 animate-pulse">
                                Backend-Focused Full Stack Developer
                            </h2>
                        </TextReveal>

                        <TextReveal delay={0.5}>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3 items-center text-sm md:text-base font-mono text-neon-green mb-8">
                                <span>ASP.NET Core</span>
                                <span className="text-gray-600">•</span>
                                <span>Clean Architecture</span>
                                <span className="text-gray-600">•</span>
                                <span>React</span>
                                <span className="text-gray-600">•</span>
                                <span>Scalable Systems</span>
                            </div>
                        </TextReveal>

                        <TextReveal delay={0.6}>
                            <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
                                Building <span className="text-white font-medium">robust, secure, and high-performance</span> applications with a focus on maintainable code and real-world system scalability.
                            </p>
                        </TextReveal>

                        <TextReveal delay={0.8}>
                            <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
                                <Button
                                    onClick={() => handleNav('projects')}
                                    size="lg"
                                    className="group w-full md:w-auto"
                                >
                                    View Projects
                                    <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                                </Button>

                                <Button
                                    onClick={() => handleNav('contact')}
                                    variant="secondary"
                                    size="lg"
                                    className="group w-full md:w-auto"
                                >
                                    Contact Me
                                </Button>

                                <div className="flex items-center gap-6 mt-4 md:mt-0">
                                    <a href="https://wa.me/917736361739" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:text-neon-green transition-colors">
                                        <FaWhatsapp size={24} />
                                    </a>
                                    <a href="https://github.com/risalsalu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:text-neon-green transition-colors">
                                        <Github size={24} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/muhammed-rizal/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:text-neon-green transition-colors">
                                        <Linkedin size={24} />
                                    </a>
                                    <a href="mailto:mdrizalnp@gmail.com" className="text-gray-400 hover:text-white hover:text-neon-green transition-colors">
                                        <Mail size={24} />
                                    </a>
                                </div>
                            </div>
                        </TextReveal>

                        {/* Trust Signals Strip */}
                        <TextReveal delay={1.0}>
                            <div className="border-t border-white/10 pt-6">
                                <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-3 text-xs md:text-sm font-mono text-gray-500 uppercase tracking-wider">
                                    <span className="flex items-center gap-2 hover:text-neon-green transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-neon-green/50"></span>Clean Architecture</span>
                                    <span className="flex items-center gap-2 hover:text-neon-green transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-neon-green/50"></span>JWT Auth</span>
                                    <span className="flex items-center gap-2 hover:text-neon-green transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-neon-green/50"></span>Docker</span>
                                    <span className="flex items-center gap-2 hover:text-neon-green transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-neon-green/50"></span>.NET 8</span>
                                    <span className="flex items-center gap-2 hover:text-neon-green transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-neon-green/50"></span>SQL Performance</span>
                                </div>
                            </div>
                        </TextReveal>
                    </div>

                    {/* Profile Image (Right Desktop / Top Mobile) */}
                    <div className="md:w-auto flex justify-center fade-in-up pl-0 md:pl-10">
                        <OrbitalWrapper
                            className="relative group w-[220px] h-[220px] md:w-[320px] md:h-[320px] cursor-default focus:outline-none"
                            tabIndex={0}
                            aria-label="Profile Image Interaction"
                        >
                            {/* Animated Glow Background - Layer 1 (Depth) */}
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 via-neon-green/10 to-neon-green/20 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-70 group-hover:blur-3xl group-focus:opacity-70 group-focus:blur-3xl transition-all duration-700 ease-out"></div>

                            {/* Animated Glow Background - Layer 2 (Intensity) */}
                            <div className="absolute -inset-0.5 bg-gradient-to-tr from-neon-green to-transparent rounded-[2rem] blur-lg opacity-0 group-hover:opacity-40 group-focus:opacity-40 transition-all duration-500"></div>

                            {/* Main Image Container */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-neon-green/50 group-focus:border-neon-green/50 transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:-translate-y-2 group-focus:scale-[1.03] group-focus:-translate-y-2 shadow-2xl group-hover:shadow-[0_20px_40px_-15px_rgba(74,222,128,0.3)] bg-dark-bg z-10">
                                <img
                                    src="/profile.png"
                                    alt="Muhammed Rizal N P - Software Developer"
                                    loading="lazy"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-focus:grayscale-0 transition-all duration-700 ease-out"
                                />
                                {/* Glass Sheen */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Decorative Tech Badge */}
                            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 group-focus:scale-110 group-focus:rotate-12">
                                <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-dark-bg border border-neon-green/30 rounded-xl shadow-lg shadow-neon-green/10 group-hover:border-neon-green group-hover:shadow-neon-green/30 transition-all duration-300">
                                    <span className="text-neon-green text-xs md:text-sm font-mono font-bold">&lt;/&gt;</span>
                                </div>
                            </div>
                        </OrbitalWrapper>
                    </div>
                </div>

            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce">
                <span className="text-xs font-mono text-gray-500">SCROLL</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-neon-green to-transparent"></div>
            </div>
        </Section >
    );
};

export default Hero;

