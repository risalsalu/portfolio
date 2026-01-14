import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useAnimationFrame } from 'framer-motion';
import Section from '../ui/Section';
import TextReveal from '../ui/TextReveal';
import { cn } from '../../utils/cn';
import { SiDotnet, SiRedis, SiDocker, SiGithubactions, SiPostgresql, SiMongodb, SiApachekafka, SiKubernetes, SiKeycloak, SiJavascript, SiTypescript, SiTailwindcss, SiRedux } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { DiMsqlServer } from 'react-icons/di';
import { FaReact, FaAws, FaGoogle, FaCloud, FaMicrosoft, FaServer, FaGem } from 'react-icons/fa';
import { Layers, Globe, ShieldCheck, Database, Radio, Workflow, Cpu, Container, Zap, Box, Server } from 'lucide-react';

// --- CONFIG ---
const HOVER_RADIUS = 200; // Pixels
const BASE_SCALE = 1.0;
const MAX_SCALE = 1.15;
const MAX_SHIFT = 10; // Pixels

const TechCard = ({ name, icon: Icon, color, category, activeCategory, setActiveCategory, mouseX, mouseY }) => {
    const ref = useRef(null);
    // Use state to store rect, but check it's performant
    const [rect, setRect] = useState(null);

    // Motion Springs for smooth physics
    const scale = useSpring(BASE_SCALE, { stiffness: 150, damping: 20 });
    const x = useSpring(0, { stiffness: 150, damping: 20 });
    const y = useSpring(0, { stiffness: 150, damping: 20 });

    const isSystemActive = activeCategory === category;
    const isOtherActive = activeCategory && !isSystemActive;

    // Cache position
    useEffect(() => {
        const updateRect = () => {
            if (ref.current) {
                const r = ref.current.getBoundingClientRect();
                setRect({
                    centerX: r.left + r.width / 2,
                    centerY: r.top + r.height / 2
                });
            }
        };
        updateRect();
        window.addEventListener('resize', updateRect);
        window.addEventListener('scroll', updateRect);
        return () => {
            window.removeEventListener('resize', updateRect);
            window.removeEventListener('scroll', updateRect);
        };
    }, []);

    // Physics Loop
    useAnimationFrame(() => {
        if (!rect) return;

        // Get current mouse position (Client Coords)
        const mx = mouseX.get();
        const my = mouseY.get();

        // If mouse is off-screen (reset value), ease back
        if (mx === -1000) {
            scale.set(BASE_SCALE);
            x.set(0);
            y.set(0);
            return;
        }

        const dx = mx - rect.centerX;
        const dy = my - rect.centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < HOVER_RADIUS) {
            // Calculate intensity (0 to 1)
            const intensity = 1 - Math.pow(distance / HOVER_RADIUS, 2);

            scale.set(BASE_SCALE + (MAX_SCALE - BASE_SCALE) * intensity);

            // Magnetic pull
            x.set((dx / distance) * MAX_SHIFT * intensity);
            y.set((dy / distance) * MAX_SHIFT * intensity);
        } else {
            scale.set(BASE_SCALE);
            x.set(0);
            y.set(0);
        }
    });

    return (
        <motion.div
            ref={ref}
            style={{ scale, x, y, zIndex: isSystemActive ? 50 : 1 }}
            onMouseEnter={() => setActiveCategory(category)}
            onMouseLeave={() => setActiveCategory(null)}
            className={cn(
                "group relative overflow-hidden rounded-md bg-zinc-900 border border-white/5 flex flex-col items-center justify-center p-3 transition-colors duration-300 cursor-none h-[90px] will-change-transform",
                isSystemActive ? "border-white/20 shadow-lg" : "hover:border-white/10 hover:bg-white/[0.02]",
                isOtherActive ? "opacity-30 grayscale blur-[0.5px]" : "opacity-100"
            )}
        >
            {/* Active Indicator */}
            <div
                className={cn("absolute bottom-0 left-0 h-[2px] transition-all duration-300", isSystemActive ? "w-full opacity-100" : "w-0 opacity-0")}
                style={{ backgroundColor: color }}
            />

            {/* Icon */}
            <div className="relative z-10 mb-2">
                <Icon className="text-3xl md:text-4xl transition-colors duration-300" style={{ color: isSystemActive || isOtherActive === false ? (isSystemActive ? color : '#e5e7eb') : '#525252' }} />
            </div>

            {/* Name */}
            <h3 className={cn(
                "relative z-10 text-[10px] uppercase tracking-wider font-semibold transition-colors duration-300 text-center leading-none",
                isSystemActive ? "text-white" : "text-gray-500 group-hover:text-gray-300"
            )}>
                {name}
            </h3>
        </motion.div>
    );
};

const CategoryGroup = ({ title, category, skills, color, activeCategory, setActiveCategory, mouseX, mouseY }) => (
    <div className="flex flex-col h-full">
        <h4 className={cn(
            "text-[10px] font-mono uppercase tracking-widest mb-3 flex items-center gap-2",
            activeCategory === category ? "text-white" : "text-gray-600"
        )}>
            <span className={cn("w-1.5 h-1.5 rounded-full transition-colors", activeCategory === category ? "animate-pulse" : "bg-gray-800")} style={{ backgroundColor: activeCategory === category ? color : undefined }}></span>
            {title}
        </h4>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {skills.map((skill, idx) => (
                <TechCard
                    key={idx}
                    {...skill}
                    color={color}
                    category={category}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    mouseX={mouseX}
                    mouseY={mouseY}
                />
            ))}
        </div>
    </div>
);

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const containerRef = useRef(null);

    // Global Cursor State
    const mouseX = useMotionValue(-1000);
    const mouseY = useMotionValue(-1000);

    // Background Radial Gradient Springs
    const bgX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const bgY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    // Dynamic Gradient Background
    const bgGradient = useTransform([bgX, bgY], ([x, y]) => {
        if (!containerRef.current) return 'none';
        const rect = containerRef.current.getBoundingClientRect();
        // Transform client coords to local for background
        const localX = x - rect.left;
        const localY = y - rect.top;
        return `radial-gradient(600px circle at ${localX}px ${localY}px, rgba(20, 255, 100, 0.04), transparent 40%)`;
    });

    const handleMouseMove = (e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => {
        mouseX.set(-1000);
        mouseY.set(-1000);
    };

    // Data Config
    const backendCore = [
        { name: "ASP.NET Core", icon: SiDotnet },
        { name: "C# / .NET 8", icon: TbBrandCSharp },
        { name: "Clean Arch", icon: Layers },
        { name: "REST APIs", icon: Globe },
    ];

    const microservices = [
        { name: "Microservices", icon: Workflow },
        { name: "DDD", icon: Box },
        { name: "Dist. Systems", icon: Server },
    ];

    const data = [
        { name: "SQL Server", icon: DiMsqlServer },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Redis", icon: SiRedis },
        { name: "Kafka", icon: SiApachekafka },
        { name: "SignalR", icon: Radio },
        { name: "NoSQL", icon: SiMongodb },
        { name: "EF Core", icon: Database },
        { name: "Dapper", icon: Cpu },
    ];

    const security = [
        { name: "OAuth 2.0", icon: ShieldCheck },
        { name: "Keycloak", icon: SiKeycloak },
        { name: "JWT Auth", icon: ShieldCheck },
    ];

    const devops = [
        { name: "Azure", icon: FaMicrosoft },
        { name: "AWS", icon: FaAws },
        { name: "GCP", icon: FaGoogle },
        { name: "Docker", icon: SiDocker },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "CI/CD", icon: SiGithubactions },
        { name: "Vercel", icon: FaServer },
        { name: "Netlify", icon: FaGem },
        { name: "Render", icon: FaCloud },
    ];

    const frontend = [
        { name: "React", icon: FaReact },
        { name: "Redux", icon: SiRedux },
        { name: "Zustand", icon: Zap },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
    ];

    return (
        <Section
            id="skills"
            className="bg-dark-bg min-h-screen flex items-center relative overflow-hidden"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Base Background Grid */}
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            {/* Reactive "Energy Field" Background Layer */}
            <motion.div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{ background: bgGradient }}
            />

            <div className="max-w-6xl mx-auto px-4 py-12 relative z-10 w-full">
                <TextReveal>
                    <div className="mb-12 border-b border-white/5 pb-6 flex items-end justify-between">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-display font-bold text-white leading-none">
                                Technical <span className="text-gray-500">Stack</span>
                            </h3>
                        </div>
                        <span className="hidden md:block text-xs font-mono text-gray-600 mb-1">// ENGINEERING_DASHBOARD_MODE</span>
                    </div>
                </TextReveal>

                <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">

                    <CategoryGroup
                        title="Backend Core"
                        category="backend"
                        color="#CCFF00"
                        skills={backendCore}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                        mouseX={mouseX} mouseY={mouseY}
                    />

                    <CategoryGroup
                        title="Architecture"
                        category="microservices"
                        color="#CCFF00"
                        skills={microservices}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                        mouseX={mouseX} mouseY={mouseY}
                    />

                    <CategoryGroup
                        title="Data & Streams"
                        category="data"
                        color="#CCFF00"
                        skills={data}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                        mouseX={mouseX} mouseY={mouseY}
                    />

                    <CategoryGroup
                        title="Security & Identity"
                        category="security"
                        color="#CCFF00"
                        skills={security}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                        mouseX={mouseX} mouseY={mouseY}
                    />

                    <CategoryGroup
                        title="Cloud & DevOps"
                        category="devops"
                        color="#CCFF00"
                        skills={devops}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                        mouseX={mouseX} mouseY={mouseY}
                    />

                    <CategoryGroup
                        title="Interface Ecosystem"
                        category="frontend"
                        color="#CCFF00"
                        skills={frontend}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                        mouseX={mouseX} mouseY={mouseY}
                    />

                </div>
            </div>
        </Section>
    );
};

export default Skills;
