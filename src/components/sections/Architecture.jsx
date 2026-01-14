import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../ui/Section';
import TextReveal from '../ui/TextReveal';
import { cn } from '../../utils/cn';
import {
    Globe, Smartphone, Shield, Server, Database,
    Cpu, Activity, Layers, Boxes, Lock
} from 'lucide-react';
import {
    SiDocker, SiKubernetes, SiRedis, SiApachekafka,
    SiPostgresql, SiMongodb, SiKeycloak, SiNginx
} from 'react-icons/si';

// --- CONFIGURATION ---

// 1. Nodes (The Components)
const NODES = [
    // Layer 1: Client Edge
    { id: 'web', label: 'Web App', sub: 'Next.js Client', icon: Globe, col: 1, row: 1 },
    { id: 'mobile', label: 'Mobile', sub: 'React Native', icon: Smartphone, col: 1, row: 3 },

    // Layer 2: Gateway & Security
    { id: 'gateway', label: 'API Gateway', sub: 'Traefik / Nginx', icon: SiNginx, col: 2, row: 2, large: true },
    { id: 'auth', label: 'Identity', sub: 'Keycloak SSO', icon: SiKeycloak, col: 2, row: 1, offset: '-top-12' },

    // Layer 3: Service Mesh
    { id: 'userSvc', label: 'User Core', sub: 'Stateless API', icon: Server, col: 3, row: 1, type: 'svc' },
    { id: 'orderSvc', label: 'Order Engine', sub: 'Business Logic', icon: SettingsIcon, col: 3, row: 2, type: 'svc' },
    { id: 'paySvc', label: 'Payments', sub: 'Transaction', icon: Lock, col: 3, row: 3, type: 'svc' },

    // Layer 4: Async / Cache
    { id: 'redis', label: 'Redis Cluster', sub: 'L2 Cache', icon: SiRedis, col: 4, row: 1 },
    { id: 'kafka', label: 'Event Bus', sub: 'Kafka Stream', icon: SiApachekafka, col: 4, row: 3, large: true },

    // Layer 5: Data
    { id: 'userDB', label: 'User DB', sub: 'PostgreSQL', icon: SiPostgresql, col: 5, row: 1 },
    { id: 'orderDB', label: 'Order DB', sub: 'Sharded SQL', icon: SiPostgresql, col: 5, row: 2 },
    { id: 'logsDB', label: 'Logs', sub: 'MongoDB', icon: SiMongodb, col: 5, row: 3 },

    // Layer 6: Orchestration (Wrapper Visual only, represented as single node for connection)
    { id: 'k8s', label: 'Kubernetes', sub: 'Control Plane', icon: SiKubernetes, col: 6, row: 2, type: 'infra' }
];

// Helper icon component since we used a variable above
function SettingsIcon(props) { return <Cpu {...props} />; }

// 2. Dependencies (The Flow Logic)
// activeNode -> lights up these nodes
const TRACES = {
    web: ['gateway'],
    mobile: ['gateway'],
    gateway: ['web', 'mobile', 'auth', 'userSvc', 'orderSvc', 'paySvc'],
    auth: ['gateway'],

    userSvc: ['gateway', 'redis', 'userDB'],
    orderSvc: ['gateway', 'kafka', 'orderDB'],
    paySvc: ['gateway', 'kafka', 'logsDB'],

    redis: ['userSvc'],
    kafka: ['orderSvc', 'paySvc', 'logsDB'],

    userDB: ['userSvc'],
    orderDB: ['orderSvc'],
    logsDB: ['paySvc', 'kafka'],

    k8s: ['userSvc', 'orderSvc', 'paySvc', 'redis', 'kafka', 'gateway']
};

// 3. Connections (The Visual Lines)
// Defined manually for precision curves
const PATHS = [
    // Client -> Gateway
    { id: 'c1', from: 'web', to: 'gateway', d: 'M 150,120 C 200,120 200,250 300,250' },
    { id: 'c2', from: 'mobile', to: 'gateway', d: 'M 150,380 C 200,380 200,250 300,250' },

    // Gateway -> Auth
    { id: 'c3', from: 'gateway', to: 'auth', d: 'M 350,220 L 350,150' },

    // Gateway -> Services
    { id: 'c4', from: 'gateway', to: 'userSvc', d: 'M 400,250 C 450,250 450,120 500,120' },
    { id: 'c5', from: 'gateway', to: 'orderSvc', d: 'M 400,250 L 500,250' },
    { id: 'c6', from: 'gateway', to: 'paySvc', d: 'M 400,250 C 450,250 450,380 500,380' },

    // Services -> Infra/Data
    { id: 'c7', from: 'userSvc', to: 'redis', d: 'M 600,120 L 700,120' },
    { id: 'c8', from: 'userSvc', to: 'userDB', d: 'M 600,120 C 650,120 800,50 900,120' }, // Curve over Redis

    { id: 'c9', from: 'orderSvc', to: 'kafka', d: 'M 600,250 C 650,250 650,380 700,380' },
    { id: 'c10', from: 'orderSvc', to: 'orderDB', d: 'M 600,250 L 900,250' },

    { id: 'c11', from: 'paySvc', to: 'kafka', d: 'M 600,380 L 700,380' },

    // Infra -> Data
    { id: 'c12', from: 'kafka', to: 'logsDB', d: 'M 800,380 L 900,380' }
];


// --- COMPONENT ---

const ArchNode = ({ node, activeTrace, hovered, setHovered }) => {
    const isActive = activeTrace.includes(node.id) || hovered === node.id;
    const isDimmed = hovered && !isActive;
    const isService = node.type === 'svc';

    return (
        <div
            className={cn(
                "relative group z-20 flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-500 bg-black/80 backdrop-blur-md cursor-crosshair",
                node.large ? "w-32 h-32 md:w-40 md:h-40" : "w-28 h-28 md:w-32 md:h-32",
                isActive
                    ? "border-neon-green shadow-[0_0_30px_rgba(204,255,0,0.15)] scale-105"
                    : "border-white/10 opacity-100 hover:border-white/30",
                isDimmed && "opacity-20 blur-[1px] scale-95"
            )}
            onMouseEnter={() => setHovered(node.id)}
            onMouseLeave={() => setHovered(null)}
        >
            {/* Status Indicator */}
            <div className={cn(
                "absolute top-3 right-3 w-1.5 h-1.5 rounded-full transition-colors duration-300",
                isActive ? "bg-neon-green shadow-[0_0_8px_#ccff00]" : "bg-white/10"
            )} />

            {/* Icon */}
            <div className={cn(
                "mb-3 transition-colors duration-300",
                isActive ? "text-neon-green" : "text-gray-500"
            )}>
                <node.icon size={node.large ? 32 : 24} />
            </div>

            {/* Labels */}
            <h4 className={cn(
                "text-xs md:text-sm font-bold mb-1 transition-colors duration-300 text-center",
                isActive ? "text-white" : "text-gray-400"
            )}>
                {node.label}
            </h4>
            <span className="text-[9px] font-mono text-gray-600 uppercase tracking-wider text-center max-w-[90%]">
                {node.sub}
            </span>

            {/* Docker Badge for Services */}
            {isService && (
                <div className={cn(
                    "absolute -bottom-3 px-2 py-0.5 rounded text-[8px] font-mono border bg-black transition-opacity duration-300",
                    isActive ? "border-neon-green text-neon-green opacity-100" : "border-white/10 text-gray-600 opacity-0 group-hover:opacity-100"
                )}>
                    DOCKER_CONTAINER
                </div>
            )}
        </div>
    );
};

const ConnectionLines = ({ hovered, activeTrace }) => {
    // Only show lines relevant to active trace? 
    // Or show all lines dim, active lines bright?
    // Let's go with All Dim, Active Bright.

    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1100 500" preserveAspectRatio="none">
            {PATHS.map((path) => {
                const isActive = hovered &&
                    (activeTrace.includes(path.from) && activeTrace.includes(path.to));

                return (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        fill="none"
                        strokeWidth="2"
                        initial={{ pathLength: 1, strokeOpacity: 0.1 }}
                        animate={{
                            stroke: isActive ? '#CCFF00' : '#ffffff',
                            strokeOpacity: isActive ? 1 : (hovered ? 0.05 : 0.1),
                            strokeDasharray: isActive ? "none" : "4 4"
                        }}
                        transition={{ duration: 0.4 }}
                    />
                );
            })}
        </svg>
    );
};

const Architecture = () => {
    const [hovered, setHovered] = useState(null);

    // Calculate Active Trace
    const activeTrace = hovered ? [hovered, ...(TRACES[hovered] || [])] : [];

    return (
        <Section id="architecture" className="bg-dark-bg py-24 min-h-screen flex flex-col justify-center overflow-hidden">

            {/* Header */}
            <div className="container mx-auto px-4 mb-16 border-l-2 border-neon-green pl-6">
                <TextReveal>
                    <h3 className="text-3xl md:text-5xl font-display font-medium text-white mb-2 selection:bg-neon-green selection:text-black">
                        Cloud-Native <span className="text-gray-600">System Design</span>
                    </h3>
                    <p className="text-gray-500 max-w-xl text-sm font-mono leading-relaxed">
                        High-availability microservices ecosystem.
                        Event-driven, containerized, and orchestrated for scale.
                    </p>
                </TextReveal>
            </div>

            {/* --- VISUALIZATION CONTAINER --- */}
            <div className="w-full max-w-[1400px] mx-auto px-4 overflow-x-auto">
                <div className="relative min-w-[1000px] md:min-w-0 h-[600px] md:h-[500px] bg-dark-bg border border-white/5 rounded-2xl shadow-2xl p-8 flex items-center justify-center">

                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none rounded-2xl" />

                    {/* SVG Layer */}
                    <ConnectionLines hovered={hovered} activeTrace={activeTrace} />

                    {/* Nodes Grid */}
                    {/* We manually position using CSS Grid for stability */}
                    <div className="relative z-20 grid grid-cols-6 grid-rows-4 w-full h-full gap-4 place-items-center">

                        {/* Map Nodes to Grid Position */}
                        {NODES.map(node => (
                            <div
                                key={node.id}
                                className="relative"
                                style={{
                                    gridColumn: node.col,
                                    gridRow: node.row,
                                    marginTop: node.offset ? '-40px' : '0' // Manual detail tweak
                                }}
                            >
                                <ArchNode
                                    node={node}
                                    activeTrace={activeTrace}
                                    hovered={hovered}
                                    setHovered={setHovered}
                                />
                            </div>
                        ))}

                        {/* K8s Label Wrapper (Visual Only) */}
                        <div className="absolute right-0 top-0 bottom-0 w-[45%] border-l-2 border-dashed border-white/5 pointer-events-none flex items-end justify-end p-4">
                            <span className="text-[10px] font-mono text-gray-700 uppercase tracking-widest bg-dark-bg px-2">
                                Kubernetes_Cluster_V1.28
                            </span>
                        </div>

                    </div>
                </div>
            </div>


        </Section>
    );
};

export default Architecture;
