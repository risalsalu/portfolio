import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import Section from '../ui/Section';
import Button from '../ui/Button';
import TextReveal from '../ui/TextReveal';
import { Github, Linkedin, FileText, ArrowRight } from 'lucide-react';
import { useScroll } from '../../hooks/useScroll';

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
                    color="#00f3ff"
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
    return (
        <Section id="home" className="h-screen flex items-center justify-center overflow-hidden" fullWidth>
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 bg-dark-bg">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <ParticleField />
                </Canvas>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
                <div className="max-w-4xl">
                    <TextReveal delay={0.2}>
                        <h2 className="text-neon-blue font-mono text-sm md:text-lg mb-4 tracking-widest">
                            &lt;MUHAMMED_RIZAL_N_P /&gt;
                        </h2>
                    </TextReveal>

                    <TextReveal delay={0.4}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6">
                            Software <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple animate-pulse">
                                Developer
                            </span>
                        </h1>
                    </TextReveal>

                    <TextReveal delay={0.6}>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                            Specializing in <span className="text-white font-bold">ASP.NET Core</span> & <span className="text-white font-bold">React</span>.
                            Building scalable, secure, and maintainable web applications with a focus on Clean Architecture and backend performance.
                        </p>
                    </TextReveal>

                    <TextReveal delay={0.8}>
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <Button href="#projects" size="lg" className="group">
                                View Projects
                                <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>

                            <div className="flex items-center gap-6">
                                <a href="https://github.com/risalsalu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:text-neon-blue transition-colors">
                                    <Github size={24} />
                                </a>
                                <a href="https://linkedin.com/in/muhammed-rizal/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:text-neon-blue transition-colors">
                                    <Linkedin size={24} />
                                </a>
                                <a href="mailto:mdrizalnp@gmail.com" className="text-gray-400 hover:text-white hover:text-neon-blue transition-colors">
                                    <span className="sr-only">Email</span>
                                    {/* Re-using FileText icon temporarily or importing Mail if needed, assuming user wants Resume download link typically, but let's stick to links provided */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                </a>
                            </div>
                        </div>
                    </TextReveal>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce">
                <span className="text-xs font-mono text-gray-500">SCROLL</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-neon-blue to-transparent"></div>
            </div>
        </Section>
    );
};

export default Hero;
