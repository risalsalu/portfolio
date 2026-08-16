import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useAnimationFrame } from 'framer-motion';
import Section from '../ui/Section';
import TextReveal from '../ui/TextReveal';
import { cn } from '../../utils/cn';
import { skillCategories } from '../../config/skills';
import { 
    SiDotnet, SiRedis, SiDocker, SiGithubactions, SiPostgresql, 
    SiMongodb, SiApachekafka, SiKubernetes, SiKeycloak, SiJavascript, 
    SiTypescript, SiTailwindcss, SiRedux, SiPython, SiFastapi, 
    SiGit, SiGithub, SiJsonwebtokens, SiClaude, SiGooglegemini, 
    SiOpenai, SiOpenid, SiOllama, SiReactrouter, SiVite 
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { DiMsqlServer } from 'react-icons/di';
import { FaReact, FaAws, FaGoogle, FaCloud, FaMicrosoft, FaServer, FaGem } from 'react-icons/fa';
import { Layers, Globe, ShieldCheck, Database, Radio, Workflow, Cpu, Container, Zap, Box, Server, Lock, Key, Network } from 'lucide-react';

// --- ICON MAP ---
const ICON_MAP = {
    SiDotnet,
    SiRedis,
    SiDocker,
    SiGithubactions,
    SiPostgresql,
    SiMongodb,
    SiApachekafka,
    SiKubernetes,
    SiKeycloak,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiRedux,
    SiPython,
    SiFastapi,
    SiGit,
    SiGithub,
    SiJsonwebtokens,
    SiClaude,
    SiGooglegemini,
    SiOpenai,
    SiOpenid,
    SiOllama,
    SiReactrouter,
    SiVite,
    TbBrandCSharp,
    DiMsqlServer,
    FaReact,
    FaAws,
    FaGoogle,
    FaCloud,
    FaMicrosoft,
    FaServer,
    FaGem,
    Layers,
    Globe,
    ShieldCheck,
    Database,
    Radio,
    Workflow,
    Cpu,
    Container,
    Zap,
    Box,
    Server,
    Lock,
    Key,
    Network
};

// --- CONFIG ---
const HOVER_RADIUS = 200; // Pixels
const BASE_SCALE = 1.0;
const MAX_SCALE = 1.15;
const MAX_SHIFT = 10; // Pixels

const TechCard = ({ name, description, icon: Icon, color, category, activeCategory, setActiveCategory, mouseX, mouseY }) => {
    const ref = useRef(null);
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
                "group relative overflow-hidden rounded-md bg-zinc-900 border border-white/5 flex flex-col items-center justify-center p-2.5 transition-colors duration-300 cursor-none h-[90px] will-change-transform",
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
            <div className="relative z-10 mb-1 flex items-center justify-center">
                <Icon className="text-2xl md:text-3xl transition-colors duration-300" style={{ color: isSystemActive || isOtherActive === false ? (isSystemActive ? color : '#e5e7eb') : '#525252' }} />
            </div>

            {/* Name */}
            <h3 className={cn(
                "relative z-10 text-[9px] uppercase tracking-wider font-semibold transition-colors duration-300 text-center leading-tight mb-0.5",
                isSystemActive ? "text-white" : "text-gray-400 group-hover:text-gray-200"
            )}>
                {name}
            </h3>

            {/* Short Description */}
            <span className={cn(
                "relative z-10 text-[6.5px] font-mono tracking-wider font-medium text-center leading-none transition-colors duration-300",
                isSystemActive ? "text-gray-400" : "text-gray-600 group-hover:text-gray-500"
            )}>
                {description}
            </span>
        </motion.div>
    );
};

const CategoryGroup = ({ title, category, skills, color, activeCategory, setActiveCategory, mouseX, mouseY }) => {
    const coreSkills = skills.filter(s => s.level === 'core');
    const secondarySkills = skills.filter(s => s.level === 'secondary');

    return (
        <div className="flex flex-col h-full">
            <h4 className={cn(
                "text-[10px] font-mono uppercase tracking-widest mb-3 flex items-center gap-2",
                activeCategory === category ? "text-white" : "text-gray-600"
            )}>
                <span className={cn("w-1.5 h-1.5 rounded-full transition-colors", activeCategory === category ? "animate-pulse" : "bg-gray-800")} style={{ backgroundColor: activeCategory === category ? color : undefined }}></span>
                {title}
            </h4>

            {/* Core Tech Cards Grid */}
            {coreSkills.length > 0 && (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {coreSkills.map((skill, idx) => {
                        const IconComponent = ICON_MAP[skill.icon] || Cpu;
                        return (
                            <TechCard
                                key={idx}
                                name={skill.name}
                                description={skill.description}
                                icon={IconComponent}
                                color={color}
                                category={category}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                                mouseX={mouseX}
                                mouseY={mouseY}
                            />
                        );
                    })}
                </div>
            )}

            {/* Secondary Skills Compact Badges */}
            {secondarySkills.length > 0 && (
                <div className={cn(
                    "flex flex-wrap gap-1.5 mt-3 pt-2 border-t border-white/5",
                    activeCategory === category ? "border-white/10" : "border-white/5"
                )}>
                    {secondarySkills.map((skill, idx) => (
                        <span
                            key={idx}
                            className={cn(
                                "px-2 py-0.5 text-[9px] font-mono text-gray-500 hover:text-white bg-zinc-900/60 border border-white/5 rounded transition-all duration-300 select-none cursor-default",
                                activeCategory === category ? "text-gray-400 border-white/10" : "text-gray-500"
                            )}
                        >
                            {skill.name}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const containerRef = useRef(null);
    const rectRef = useRef(null);

    // Global Cursor State
    const mouseX = useMotionValue(-1000);
    const mouseY = useMotionValue(-1000);

    // Background Radial Gradient Springs
    const bgX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const bgY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    // Cache the bounding rectangle measurements to avoid layout thrashing on spring updates
    const updateRect = () => {
        if (containerRef.current) {
            rectRef.current = containerRef.current.getBoundingClientRect();
        }
    };

    const handleMouseMove = (e) => {
        if (!rectRef.current) {
            updateRect();
        }
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    const handleMouseEnter = () => {
        updateRect();
    };

    const handleMouseLeave = () => {
        mouseX.set(-1000);
        mouseY.set(-1000);
        rectRef.current = null;
    };

    // Calculate background radial gradient coordinates from cached rect
    const bgGradient = useTransform([bgX, bgY], ([x, y]) => {
        const rect = rectRef.current;
        if (!rect || x === -1000) return 'none';
        const localX = x - rect.left;
        const localY = y - rect.top;
        return `radial-gradient(600px circle at ${localX}px ${localY}px, rgba(20, 255, 100, 0.04), transparent 40%)`;
    });

    // Partition categories for the two independent columns on desktop
    const col1Ids = ["backend", "database", "messaging", "ai-providers", "architecture"];
    const leftCategories = skillCategories.filter(c => col1Ids.includes(c.id));
    const rightCategories = skillCategories.filter(c => !col1Ids.includes(c.id));

    return (
        <Section
            id="skills"
            className="bg-dark-bg min-h-screen flex items-center relative overflow-hidden"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
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
                    </div>
                </TextReveal>

                {/* Desktop Independent 2-Column Layout (>= md) */}
                <div className="hidden md:grid grid-cols-2 gap-x-12 items-start">
                    <div className="flex flex-col gap-y-12">
                        {leftCategories.map((category) => (
                            <CategoryGroup
                                key={category.id}
                                title={category.title}
                                category={category.id}
                                skills={category.skills}
                                color="#CCFF00"
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                                mouseX={mouseX}
                                mouseY={mouseY}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col gap-y-12">
                        {rightCategories.map((category) => (
                            <CategoryGroup
                                key={category.id}
                                title={category.title}
                                category={category.id}
                                skills={category.skills}
                                color="#CCFF00"
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                                mouseX={mouseX}
                                mouseY={mouseY}
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile Single Column Flow (< md) */}
                <div className="flex flex-col gap-y-12 md:hidden">
                    {skillCategories.map((category) => (
                        <CategoryGroup
                            key={category.id}
                            title={category.title}
                            category={category.id}
                            skills={category.skills}
                            color="#CCFF00"
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                            mouseX={mouseX}
                            mouseY={mouseY}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Skills;
