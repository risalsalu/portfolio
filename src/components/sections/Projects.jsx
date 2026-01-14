import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../ui/Section';
import TextReveal from '../ui/TextReveal';
import { cn } from '../../utils/cn';
import { ArrowUpRight, Briefcase, Calendar, Layers, ShoppingCart, Activity } from 'lucide-react';
import { SiDotnet, SiReact, SiPostgresql, SiKubernetes, SiRedis, SiApachekafka, SiTailwindcss, SiRedux } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

// --- DATA ---
const PROJECTS = [
    {
        id: 'erp',
        title: 'EXTEM ERP',
        category: 'Enterprise Architecture',
        year: '2025',
        link: 'https://github.com/risalsalu',
        color: 'text-blue-400'
    },
    {
        id: 'servexa',
        title: 'SERVEXA',
        category: 'SaaS Booking Platform',
        year: '2024',
        link: 'https://github.com/risalsalu',
        color: 'text-emerald-400'
    },
    {
        id: 'portfolio',
        title: 'PORTFOLIO_V2',
        category: 'Interactive System',
        year: '2026',
        link: 'https://github.com/risalsalu',
        color: 'text-amber-400'
    },
    {
        id: 'electrokart',
        title: 'ELECTROKART',
        category: 'E-commerce Engine',
        year: '2023',
        link: 'https://github.com/risalsalu',
        color: 'text-pink-400'
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
            {isActive && (
                <motion.div
                    layoutId="project-highlight"
                    className="absolute inset-0 bg-neon-green/[0.03] w-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            )}
            <div className="relative flex items-center justify-between py-10 px-4 md:px-8 max-w-7xl mx-auto z-10">
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
                        {/* Subtitle - Only visible/colored on hover? No, keep visible but subtle */}
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

    return (
        <Section
            id="projects"
            className="bg-dark-bg py-24 min-h-[50vh] flex flex-col justify-center"
            onMouseLeave={() => setActiveId(null)}
        >
            <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-12">
                {/* Header */}
                <div className="mb-16 border-b border-white/5 pb-4 flex items-end justify-between">
                    <div>
                        <h2 className="text-gray-700 font-mono text-xs tracking-[0.2em] mb-2 selection:bg-neon-green selection:text-black">04. INDEX</h2>
                        <h3 className="text-2xl md:text-3xl font-display font-medium text-gray-400 selection:bg-neon-green selection:text-black">
                            Selected Works
                        </h3>
                    </div>
                    <span className="hidden md:block text-[10px] font-mono text-gray-800 text-right">
                        // HOVER_TO_FOCUS
                    </span>
                </div>

                {/* Projects List */}
                <div className="flex flex-col">
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
