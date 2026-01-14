import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import Section from '../ui/Section';
import TextReveal from '../ui/TextReveal';
import { cn } from '../../utils/cn';
import { ArrowUpRight } from 'lucide-react';

// --- DATA ---
const PROJECTS = [
    {
        id: 'erp',
        title: 'EXTEM ERP',
        category: 'Enterprise Architecture',
        year: '2025',
        link: 'https://github.com/risalsalu',
        color: 'text-neon-green'
    },
    {
        id: 'servexa',
        title: 'SERVEXA',
        category: 'SaaS Booking Platform',
        year: '2024',
        link: 'https://github.com/risalsalu',
        color: 'text-neon-green'
    },
    {
        id: 'portfolio',
        title: 'PORTFOLIO_V2',
        category: 'Interactive System',
        year: '2025',
        link: 'https://github.com/risalsalu',
        color: 'text-neon-green'
    },
    {
        id: 'electrokart',
        title: 'ELECTROKART',
        category: 'E-commerce Engine',
        year: '2023',
        link: 'https://github.com/risalsalu',
        color: 'text-neon-green'
    }
];

const ProjectStrip = ({ project, index, activeId, setActive }) => {
    // If ANY project is active, but THIS one is not, we dim it.
    const isDimmed = activeId && activeId !== project.id;
    const isActive = activeId === project.id;

    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setActive(project.id)}
            className={cn(
                "group relative block border-t border-white/10 last:border-b transition-all duration-300 ease-out outline-none",
                isDimmed ? "opacity-30 blur-[1px]" : "opacity-100"
            )}
        >
            <div className="relative flex items-center justify-between py-10 px-4 md:px-8 max-w-7xl mx-auto z-10 w-full">
                {/* Left: Branding */}
                <div className="flex items-baseline gap-6 md:gap-12 transition-transform duration-300 group-hover:translate-x-2">
                    <span className={cn(
                        "font-mono text-xs transition-colors duration-300",
                        isActive ? "text-neon-green" : "text-gray-700"
                    )}>
                        0{index + 1}
                    </span>

                    <div>
                        <h3 className={cn(
                            "text-3xl md:text-5xl font-display font-bold uppercase tracking-tight transition-colors duration-200",
                            isActive ? "text-neon-green" : "text-gray-500"
                        )}>
                            {project.title}
                        </h3>
                        {/* Subtitle */}
                        <div className={cn(
                            "flex items-center gap-3 mt-2 text-xs font-mono transition-colors duration-300",
                            isActive ? "text-white" : "text-gray-600"
                        )}>
                            <span>{project.category}</span>
                            <span className="opacity-30 self-center">/</span>
                            <span>{project.year}</span>
                        </div>
                    </div>
                </div>

                {/* Right: Indicator */}
                <div className={cn(
                    "transition-all duration-300 transform",
                    isActive ? "opacity-100 translate-x-0" : "opacity-20 -translate-x-4"
                )}>
                    <ArrowUpRight className={cn(
                        "w-8 h-8 transition-colors duration-300",
                        isActive ? "text-neon-green" : "text-gray-700 hover:text-gray-500"
                    )} />
                </div>
            </div>

            {/* Minimal Left Accent Border on Active */}
            <div className={cn(
                "absolute left-0 top-0 bottom-0 w-1 bg-neon-green transition-all duration-300 ease-out",
                isActive ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
            )} />
        </a>
    );
};

const Projects = () => {
    const [activeId, setActiveId] = useState(null);
    const containerRef = useRef(null);

    // --- MOUSE TRACKING ---
    const mouseY = useMotionValue(0);
    const opacity = useMotionValue(0);

    // Smooth physics for the scanner band
    const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });
    const springOpacity = useSpring(opacity, { stiffness: 200, damping: 25 });

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const relativeY = e.clientY - rect.top;

        // Center the band (height ~140px)
        mouseY.set(relativeY - 70);
        opacity.set(1);
    };

    const handleMouseLeave = () => {
        opacity.set(0);
        setActiveId(null);
    };

    return (
        <Section
            id="projects"
            className="bg-dark-bg py-24 min-h-[50vh] flex flex-col justify-center"
        >
            <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-12">
                {/* Header */}
                <div className="mb-16 border-b border-white/5 pb-4 flex items-end justify-between">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-display font-medium text-gray-400 selection:bg-neon-green selection:text-black">
                            Selected Works
                        </h3>
                    </div>
                </div>

                {/* Projects List Container */}
                <div
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="relative flex flex-col group/list"
                >
                    {/* --- VERTICAL CURSOR-TRACKING HIGHLIGHT --- */}
                    {/* Single floating band that follows the cursor Y position */}
                    <motion.div
                        className="absolute left-0 right-0 h-[140px] bg-neon-green/[0.03] pointer-events-none z-0 rounded-sm"
                        style={{
                            y: springY,
                            opacity: springOpacity,
                        }}
                    />

                    {PROJECTS.map((project, index) => (
                        <ProjectStrip
                            key={project.id}
                            project={project}
                            index={index}
                            activeId={activeId}
                            setActive={setActiveId}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Projects;
