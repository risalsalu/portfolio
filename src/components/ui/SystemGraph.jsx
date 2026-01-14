import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { useCursorEngine } from '../../hooks/useCursorEngine';
import { Server, Database, Shield, Globe, Cpu, Layers } from 'lucide-react';
import { cn } from '../../utils/cn';

/**
 * SystemGraph
 * A cursor-reactive visualization of a distributed backend architecture.
 * Nodes represent services, lines represent data flow.
 * The entire system tilts and shifts based on cursor position.
 */
const SystemGraph = ({ className }) => {
    const { smoothedX, smoothedY } = useCursorEngine();

    // 3D Tilt calculation based on cursor position relative to center screen
    const rotateX = useTransform(smoothedY, [0, window.innerHeight], [5, -5]);
    const rotateY = useTransform(smoothedX, [0, window.innerWidth], [-5, 5]);

    // Parallax movement
    const moveX = useTransform(smoothedX, [0, window.innerWidth], [10, -10]);
    const moveY = useTransform(smoothedY, [0, window.innerHeight], [10, -10]);

    // Nodes Definition
    const nodes = [
        { id: 'gateway', label: 'API Gateway', icon: Globe, x: '50%', y: '20%', color: 'text-neon-green' },
        { id: 'auth', label: 'Auth Service', icon: Shield, x: '20%', y: '40%', color: 'text-neon-green' },
        { id: 'core', label: 'Core API', icon: Cpu, x: '50%', y: '50%', color: 'text-white' },
        { id: 'cache', label: 'Redis Cache', icon: Layers, x: '80%', y: '40%', color: 'text-gray-400' },
        { id: 'db', label: 'Database', icon: Database, x: '50%', y: '80%', color: 'text-neon-green' },
    ];

    // Connections (From -> To)
    const connections = [
        { from: 'gateway', to: 'auth' },
        { from: 'gateway', to: 'core' },
        { from: 'auth', to: 'db' }, // Token check
        { from: 'core', to: 'db' },
        { from: 'core', to: 'cache' },
    ];

    // Helper to get coordinates for SVG lines based on percentage strings
    const getCoords = (nodeId) => {
        const node = nodes.find(n => n.id === nodeId);
        // Convert '50%' to just 50, assuming 100x100 coordinate space for SVG
        return {
            x: parseFloat(node.x),
            y: parseFloat(node.y)
        };
    };

    return (
        <div className={cn("relative w-full aspect-square flex items-center justify-center perspective-1000", className)}>
            <motion.div
                style={{ rotateX, rotateY, x: moveX, y: moveY }}
                className="relative w-full h-full max-w-[400px] max-h-[400px] bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl overflow-hidden"
            >
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

                {/* SVG Layer for Connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    {connections.map((conn, i) => {
                        const from = getCoords(conn.from);
                        const to = getCoords(conn.to);
                        return (
                            <motion.line
                                key={i}
                                x1={`${from.x}%`} y1={`${from.y}%`}
                                x2={`${to.x}%`} y2={`${to.y}%`}
                                stroke="rgba(255,255,255,0.1)"
                                strokeWidth="2"
                                strokeDasharray="4 4"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
                            />
                        );
                    })}
                </svg>

                {/* Nodes Layer */}
                {nodes.map((node, i) => (
                    <motion.div
                        key={node.id}
                        className="absolute flex flex-col items-center justify-center z-10"
                        style={{ left: node.x, top: node.y, x: '-50%', y: '-50%' }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <div className={cn("w-12 h-12 rounded-xl border border-white/10 bg-dark-bg/80 flex items-center justify-center shadow-lg backdrop-blur-md transition-colors duration-300 hover:border-neon-green/50", node.color)}>
                            <node.icon size={20} />
                        </div>
                        <span className="mt-2 text-[10px] font-mono text-gray-500 bg-black/50 px-1.5 py-0.5 rounded border border-white/5 uppercase tracking-wider backdrop-blur-md">
                            {node.label}
                        </span>
                    </motion.div>
                ))}

                {/* Active Data Packet Animation (Simulated Traffic) */}
                <motion.div
                    className="absolute w-1.5 h-1.5 bg-neon-green rounded-full shadow-[0_0_5px_var(--color-neon-green)] z-20"
                    animate={{
                        left: ['50%', '50%', '50%', '80%'], // Gateway -> Core -> Cache
                        top: ['20%', '50%', '50%', '40%'],
                        opacity: [0, 1, 1, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                />
                <motion.div
                    className="absolute w-1.5 h-1.5 bg-neon-green rounded-full shadow-[0_0_5px_var(--color-neon-green)] z-20"
                    animate={{
                        left: ['50%', '20%', '50%'], // Gateway -> Auth -> DB
                        top: ['20%', '40%', '80%'],
                        opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2.5 }}
                />

                {/* Cursor Proximity Glow (Inner) */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 via-transparent to-neon-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </motion.div>
        </div>
    );
};

export default SystemGraph;
