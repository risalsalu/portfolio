import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../ui/Section';
import TextReveal from '../ui/TextReveal';
import { cn } from '../../utils/cn';
import { Activity, ArrowRight } from 'lucide-react';

const ExperienceItem = ({ job, index, activeId, setActive }) => {
    const isActive = activeId === index;
    const isDimmed = activeId !== null && !isActive;

    return (
        <div
            className={cn(
                "relative pl-8 md:pl-0 group transition-all duration-300",
                isDimmed ? "opacity-30 blur-[1px]" : "opacity-100"
            )}
            onMouseEnter={() => setActive(index)}
        >
            {isActive && (
                <motion.div
                    layoutId="experience-highlight"
                    className="absolute -inset-x-4 -inset-y-4 bg-neon-green/[0.03] rounded-lg -z-10 hidden md:block"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            )}
            <div className="md:grid md:grid-cols-[180px_auto] gap-8 md:gap-12 relative">

                {/* 1. Timeline Rail (Desktop) */}
                <div className="hidden md:block absolute left-[180px] top-0 bottom-0 w-px bg-white/5 md:translate-x-[24px]">
                    {/* Active Indicator Line (fills height on hover?) - dynamic height is hard, keep simple accent */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neon-green/0 via-neon-green/20 to-neon-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* 2. Left Meta (Time & Status) */}
                <div className="hidden md:flex flex-col items-end pt-1">
                    <span className="font-mono text-xs font-medium text-neon-green/80 group-hover:text-neon-green transition-colors">
                        {job.period}
                    </span>
                    <span className="mt-1 text-[10px] font-mono uppercase tracking-widest text-gray-600 group-hover:text-gray-400 transition-colors">
                        {job.location}
                    </span>
                </div>

                {/* 3. Node Connector */}
                <div className="absolute left-[-5px] md:left-[199px] top-2.5 w-2 h-2 rounded-full bg-dark-bg border border-gray-700 z-20 transition-all duration-300 group-hover:border-neon-green group-hover:bg-neon-green group-hover:shadow-[0_0_8px_rgba(204,255,0,0.4)] md:translate-x-[4px]" />

                {/* 4. Content Content */}
                <div className="relative group-hover:translate-x-1 transition-transform duration-300">
                    {/* Mobile Meta Header */}
                    <div className="md:hidden flex items-center justify-between mb-3 pb-2 border-b border-white/5">
                        <span className="font-mono text-neon-green text-xs">{job.period}</span>
                        <span className="text-[10px] uppercase text-gray-500">{job.location}</span>
                    </div>

                    {/* Role & Company */}
                    <header className="mb-6">
                        <h4 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-neon-green transition-colors duration-300">
                            {job.role}
                        </h4>
                        <div className="flex items-center gap-2 text-sm font-mono text-gray-400">
                            <span>at</span>
                            <span className="text-white font-medium tracking-wide">
                                {job.company}
                            </span>
                        </div>
                    </header>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-2xl font-light">
                        {job.description}
                    </p>

                    {/* Responsibilities */}
                    <ul className="space-y-3 mb-8">
                        {job.responsibilities.map((task, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-400 group/li">
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-600 group-hover/li:bg-neon-green transition-colors" />
                                <span className="group-hover/li:text-gray-300 transition-colors leading-relaxed">
                                    {task}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* Tech Stack - Minimal Tags */}
                    <div className="flex flex-wrap gap-2 text-[10px] font-mono uppercase tracking-wider text-gray-500">
                        {job.stack.map((tech, i) => (
                            <span key={i} className="px-2 py-1 border border-white/5 rounded hover:border-white/10 hover:text-gray-300 transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Experience = () => {
    const [activeId, setActiveId] = useState(null);

    const jobs = [
        {
            role: 'React–.NET Developer Intern',
            company: 'Bridgeon Solutions LLP',
            period: 'MAY 2025 – PRESENT',
            current: true,
            location: 'Onsite',
            description: 'Initializing full-stack development protocols. Executing core feature implementation for scalable web applications using React-Redux and ASP.NET pipelines.',
            responsibilities: [
                'Architected responsive frontend modules using React 19 & Redux Toolkit.',
                'Deployed RESTful API endpoints via ASP.NET Core Clean Architecture.',
                'Engineered role-based security layers (JWT/RBAC) for data protection.',
                'Optimized high-load queries using Dapper & Entity Framework Core.',
                'Integrated Agile/Scrum methodologies for accelerated delivery cycles.'
            ],
            stack: ['ASP.NET Core', 'React', 'Redux', 'EF Core', 'Dapper'],
        },
    ];

    return (
        <Section
            id="work"
            className="bg-dark-bg py-24"
            onMouseLeave={() => setActiveId(null)}
        >
            <div className="container mx-auto px-4 md:px-12 max-w-5xl">
                {/* Header */}
                <div className="mb-24 flex items-end justify-between border-b border-white/5 pb-6">
                    <TextReveal>
                        <h3 className="text-3xl md:text-4xl font-display font-medium text-white selection:bg-neon-green selection:text-black">
                            Work <span className="text-gray-600">Experience</span>
                        </h3>
                    </TextReveal>
                    <div className="hidden md:flex items-center gap-3 text-xs font-mono text-gray-600">
                        <span>Status:</span>
                        <div className="flex items-center gap-1.5 text-neon-green">
                            <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                            <span>ACTIVE</span>
                        </div>
                    </div>
                </div>

                <div className="relative space-y-16">
                    {/* Main Background Line */}
                    <div className="hidden md:block absolute left-[204px] top-0 bottom-0 w-px bg-white/5" />

                    {jobs.map((job, index) => (
                        <ExperienceItem
                            key={index}
                            job={job}
                            index={index}
                            activeId={activeId}
                            setActive={setActiveId}
                        />
                    ))}

                    {/* End Marker */}
                    <div className="grid md:grid-cols-[180px_auto] gap-8 md:gap-12 relative pt-2">
                        <div className="hidden md:block col-start-1 text-right">
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Experience;
