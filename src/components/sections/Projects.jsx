import React from 'react';
import Section from '../ui/Section';
import TextReveal from '../ui/TextReveal';
import { cn } from '../../utils/cn';
import { ArrowUpRight, Cpu, Calendar, Globe, ShieldCheck } from 'lucide-react';

// --- DATA ---
const PROJECTS = [
    {
        id: 'nikki',
        title: 'NIKKI AI OS',
        subtitle: 'Personal AI Desktop Operating System',
        category: 'AI SYSTEM / DESKTOP APPLICATION',
        featured: true,
        description: 'A modular AI desktop operating system designed around context, memory, intelligent task execution, multi-provider AI orchestration, and desktop automation.',
        capabilities: [
            'Context management & persistent memory',
            'Intent detection & task planning',
            'Extensible tool registry & execution engine',
            'Conversation management & learning capabilities',
            'Desktop automation & voice interaction',
            'WebSocket communication & text-to-speech',
            'Knowledge retrieval & project management'
        ],
        technologies: ['Electron', 'React', 'TypeScript', 'FastAPI', 'Python', 'SQLite', 'WebSockets', 'OpenAI', 'Gemini', 'Anthropic', 'Ollama', 'OpenRouter'],
        concepts: ['Modular architecture', 'AI-agent workflows', 'Provider abstraction', 'Automatic fallback', 'Health checks', 'Automated testing', 'Tool-based execution'],
        link: 'https://github.com/risalsalu',
        icon: Cpu
    },
    {
        id: 'servexa',
        title: 'SERVEXA',
        subtitle: 'Salon & Spa Booking Platform',
        category: 'FULL-STACK WEB APPLICATION',
        featured: false,
        description: 'A full-stack salon and spa booking platform combining React frontend development with ASP.NET Core backend services.',
        capabilities: [
            'Booking management',
            'User management & service management',
            'JWT authentication for Admin, Owner, and Customer',
            'Role-based authorization & access control',
            'Responsive UI optimized for desktop and mobile'
        ],
        technologies: ['React.js', 'Tailwind CSS', 'ASP.NET Core Web API', 'JWT', 'Dapper'],
        concepts: ['Clean Architecture', 'RESTful APIs', 'Role-Based Access Control', 'Secure authentication', 'Responsive UI', 'Full-stack application development'],
        link: 'https://github.com/risalsalu',
        icon: Calendar
    },
    {
        id: 'casmex',
        title: 'CASMEX',
        subtitle: 'Remittance, Forex & Incoming Exchange Software',
        category: 'ENTERPRISE FINANCIAL SOFTWARE',
        featured: false,
        description: 'Enterprise software supporting remittance, foreign exchange management, incoming exchange operations, and financial transaction processing.',
        capabilities: [
            'Worked on remittance & foreign exchange modules',
            'Developed and maintained enterprise applications',
            'Implemented database operations with Oracle',
            'Enhanced application performance & debugging',
            'Production issue resolution & maintenance'
        ],
        technologies: ['ASP.NET WebForms', '.NET Framework 4', 'Oracle Database', 'ADO.NET'],
        concepts: ['Enterprise application development', 'Financial transaction processing', 'Legacy application maintenance', 'Database-driven applications', 'Production debugging', 'Issue resolution'],
        icon: Globe
    },
    {
        id: 'ishield',
        title: 'ISHIELD',
        subtitle: 'Anti Money Laundering Application',
        category: 'FINANCIAL COMPLIANCE / AML',
        featured: false,
        description: 'An anti-money laundering application integrated with money transfer and remittance systems to support compliance workflows and transaction monitoring.',
        capabilities: [
            'Worked on AML and compliance workflows',
            'Developed transaction monitoring functionalities',
            'Contributed to secure transaction validation',
            'Suspicious activity monitoring modules',
            'Maintained and enhanced financial compliance apps'
        ],
        technologies: ['ASP.NET', 'Enterprise Applications', 'Financial Compliance'],
        concepts: ['Compliance workflows', 'Transaction monitoring', 'Secure transaction validation', 'Enterprise application maintenance', 'Financial software engineering'],
        icon: ShieldCheck
    }
];

const ProjectCard = ({ project }) => {
    const Icon = project.icon;
    const isFeatured = project.featured;

    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-xl bg-zinc-900/50 border border-white/5 p-6 md:p-8 transition-all duration-300",
                "hover:border-neon-green/20 hover:bg-zinc-900/70 hover:shadow-[0_0_20px_rgba(204,255,0,0.02)]",
                isFeatured ? "col-span-1 md:col-span-2 border-neon-green/10 bg-zinc-900/60 shadow-[0_0_15px_rgba(204,255,0,0.01)]" : ""
            )}
        >
            {/* Top Row: Category & Icon / Link */}
            <div className="flex items-center justify-between mb-6">
                <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase flex items-center gap-1.5">
                    {isFeatured && (
                        <span className="px-1.5 py-0.5 rounded bg-neon-green/10 text-neon-green text-[8px] font-mono mr-1">
                            FLAGSHIP SYSTEM
                        </span>
                    )}
                    {project.category}
                </span>
                <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-gray-600 group-hover:text-neon-green transition-colors duration-300" />
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-white transition-colors duration-300"
                        >
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>

            {/* Title Block */}
            <div className="mb-6">
                <h4 className="text-2xl md:text-3xl font-display font-bold text-white mb-1 group-hover:text-neon-green transition-colors duration-300">
                    {project.title}
                </h4>
                <p className="text-xs font-mono text-neon-green/80">
                    {project.subtitle}
                </p>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light max-w-3xl">
                {project.description}
            </p>

            {/* Flagship layout split or standard stack layout */}
            <div className={cn("grid gap-6", isFeatured ? "lg:grid-cols-2" : "grid-cols-1")}>
                {/* Left side: Capabilities */}
                <div>
                    <h5 className="text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-3">
                        Key Capabilities & Areas
                    </h5>
                    <ul className="space-y-2 mb-2">
                        {project.capabilities.map((cap, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs text-gray-400 group/li">
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-700 group-hover/li:bg-neon-green transition-colors" />
                                <span className="group-hover/li:text-gray-300 transition-colors leading-relaxed">
                                    {cap}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right side: Tech tags and engineering concepts */}
                <div className="flex flex-col justify-between gap-6">
                    <div>
                        <h5 className="text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-3">
                            Technology Stack
                        </h5>
                        <div className="flex flex-wrap gap-1.5 mb-2">
                            {project.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-0.5 text-[9px] font-mono text-gray-400 hover:text-white bg-zinc-950/40 border border-white/5 rounded transition-all duration-300 select-none cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h5 className="text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-3">
                            Engineering Concepts
                        </h5>
                        <div className="flex flex-wrap gap-1.5">
                            {project.concepts.map((concept, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-0.5 text-[9px] font-mono text-neon-green/60 hover:text-neon-green bg-neon-green/[0.02] border border-neon-green/10 rounded transition-all duration-300 select-none cursor-default"
                                >
                                    {concept}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <Section
            id="projects"
            className="bg-dark-bg py-24 min-h-[50vh] flex flex-col justify-center"
        >
            <div className="w-full max-w-6xl mx-auto px-4 md:px-12">
                {/* Header */}
                <div className="mb-16 border-b border-white/5 pb-6">
                    <TextReveal>
                        <h3 className="text-3xl md:text-4xl font-display font-medium text-white selection:bg-neon-green selection:text-black">
                            Selected <span className="text-gray-600">Projects</span>
                        </h3>
                    </TextReveal>
                </div>

                {/* Projects Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Projects;
