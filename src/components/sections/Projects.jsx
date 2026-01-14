import React, { useRef, useState } from 'react';
import Section from '../ui/Section';
import TextReveal from '../ui/TextReveal';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { Github, ExternalLink, Calendar, ShoppingCart, Server, Database, Globe } from 'lucide-react';
import { cn } from '../../utils/cn';
import OrbitalWrapper from '../ui/OrbitalWrapper';

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5; // Reduced rotation for professional feel
        const rotateY = ((x - centerX) / centerX) * 5;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative group perspective-1000 mb-16 last:mb-0"
        >
            <div
                className="grid md:grid-cols-2 gap-8 items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-transform duration-200 ease-out"
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    transformStyle: 'preserve-3d',
                }}
            >
                {/* Content Side */}
                <div className={cn("order-2 md:order-1", index % 2 === 1 && "md:order-2")}>
                    <h4 className="text-neon-blue font-mono text-sm mb-2 uppercase">{project.subtitle}</h4>
                    <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>

                    <div className="bg-dark-bg/50 p-6 rounded-xl mb-6 border border-white/5 shadow-inner">
                        <p className="text-gray-300 leading-relaxed mb-4">
                            {project.description}
                        </p>
                        {/* Architecture Flow */}
                        <div className="flex items-center gap-2 text-xs font-mono text-gray-500 pt-2 border-t border-white/5">
                            <Globe size={14} /> Frontend <span className="text-neon-blue">→</span>
                            <Server size={14} /> API <span className="text-neon-blue">→</span>
                            <Database size={14} /> DB
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t, i) => (
                            <Badge key={i} variant="default" className="bg-gray-800/50">{t}</Badge>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded hover:bg-neon-blue hover:text-black transition-colors font-medium">
                            <Github size={18} /> Code
                        </a>
                        {/* Demo link optional if user provides one, currently using # */}
                    </div>
                </div>

                {/* Visual Side */}
                <div className={cn("order-1 md:order-2 relative group-hover:scale-[1.02] transition-transform duration-500", index % 2 === 1 && "md:order-1")}>
                    {/* Decorative Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <OrbitalWrapper className="w-full h-full">
                        <div className="relative rounded-xl overflow-hidden border border-white/10 bg-dark-bg aspect-video flex items-center justify-center group-hover:border-neon-blue/30 transition-colors">
                            {project.imageIcon ? (
                                <div className="flex flex-col items-center gap-4">
                                    <project.imageIcon className="text-gray-700 group-hover:text-neon-blue transition-colors duration-500" size={64} />
                                    <span className="font-display font-medium text-gray-500 group-hover:text-white transition-colors">{project.title}</span>
                                </div>
                            ) : null}
                        </div>
                    </OrbitalWrapper>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: 'Servexa',
            subtitle: 'Salon & Spa Booking Platform',
            description: 'A full-stack booking platform for salons and spas. Features comprehensive user management for Admins, Shop Owners, and Customers. Used Dapper for high-performance data access and implemented complex booking workflows with role-based JWT authentication.',
            tech: ['ASP.NET Core', 'React', 'Dapper', 'PostgreSQL', 'JWT', 'Clean Architecture'],
            links: { github: 'https://github.com/risalsalu', demo: '#' },
            imageIcon: Calendar,
        },
        {
            title: 'ElectroKart',
            subtitle: 'Full-Stack E-commerce Platform',
            description: 'A scalable e-commerce application featuring product management, secure cart operations, and order processing. Built using Entity Framework Core for robust data handling and React/Redux for dynamic frontend state management.',
            tech: ['ASP.NET Core', 'React', 'EF Core', 'Redux', 'SQL Server'],
            links: { github: 'https://github.com/risalsalu', demo: '#' },
            imageIcon: ShoppingCart,
        },
    ];

    return (
        <Section id="projects" className="bg-dark-bg/50">
            <div className="mb-20 text-center">
                <TextReveal>
                    <h2 className="text-neon-blue font-mono text-sm tracking-widest mb-2">04. PORTFOLIO</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold">
                        Featured <span className="text-neon-purple">Projects</span>
                    </h3>
                </TextReveal>
            </div>

            <div className="container mx-auto px-6">
                {projects.map((p, i) => (
                    <ProjectCard key={i} project={p} index={i} />
                ))}
            </div>
        </Section>
    );
};

export default Projects;
