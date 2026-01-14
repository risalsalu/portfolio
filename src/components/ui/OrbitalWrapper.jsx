import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useAnimationFrame } from 'framer-motion';
import { cn } from '../../utils/cn';
import { getCursorPos } from '../../hooks/useCursorEngine';

/**
 * MagneticField (formerly OrbitalWrapper)
 * An extreme cursor-interaction engine that creates a "Force Field" around elements.
 * 
 * Features:
 * - Continuous Proximity Detection (no event listeners)
 * - Magnetic Pull (Vector-based)
 * - Dynamic Angular Particle Orbits
 */
const OrbitalWrapper = ({ children, className, ...props }) => {
    const ref = useRef(null);
    const [isActive, setIsActive] = useState(false);

    // Physics Values
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    // const angle = useMotionValue(0); // Unused

    const springConfig = { damping: 20, stiffness: 150, mass: 0.8 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    // Particle Orbits
    const particle1Angle = useMotionValue(0);
    const particle2Angle = useMotionValue(180);

    useAnimationFrame((time) => {
        if (!ref.current) return;

        const cursorPos = getCursorPos();
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = cursorPos.x - centerX;
        const dy = cursorPos.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Dynamic Field Radius
        const baseRadius = 200;
        const triggerRadius = baseRadius;

        if (distance < triggerRadius) {
            if (!isActive) setIsActive(true);

            // Magnetic Pull Strength (Non-linear easing)
            const pullStrength = (1 - distance / triggerRadius) * 0.4;

            x.set(dx * pullStrength);
            y.set(dy * pullStrength);

            // Orbit Acceleration
            const rotationSpeed = 2 + (1 - distance / triggerRadius) * 8;
            particle1Angle.set(particle1Angle.get() + rotationSpeed);
            particle2Angle.set(particle2Angle.get() - rotationSpeed * 0.8);

        } else {
            if (isActive) setIsActive(false);

            x.set(0);
            y.set(0);

            // Idle Orbit
            particle1Angle.set(particle1Angle.get() + 0.5);
            particle2Angle.set(particle2Angle.get() - 0.4);
        }
    });

    // Transform particles to circular motion
    const p1X = useTransform(particle1Angle, a => Math.cos(a * Math.PI / 180) * 55 + "%");
    const p1Y = useTransform(particle1Angle, a => Math.sin(a * Math.PI / 180) * 55 + "%");

    const p2X = useTransform(particle2Angle, a => Math.cos(a * Math.PI / 180) * 70 + "%");
    const p2Y = useTransform(particle2Angle, a => Math.sin(a * Math.PI / 180) * 70 + "%");

    return (
        <motion.div
            ref={ref}
            className={cn("relative inline-block", className)}
            style={{ x: xSpring, y: ySpring }}
            {...props}
        >
            {/* Main Content */}
            <div className="relative z-10">
                {children}
            </div>

            {/* Interaction Field Visuals */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">

                {/* Energy Ring */}
                <motion.div
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1.05 : 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="absolute w-[115%] h-[115%] rounded-full border border-neon-blue/30"
                />

                {/* Particle 1 */}
                <motion.div
                    style={{ left: p1X, top: p1Y, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute w-1.5 h-1.5 bg-neon-blue rounded-full shadow-[0_0_8px_var(--color-neon-blue)]"
                />

                {/* Particle 2 */}
                <motion.div
                    style={{ left: p2X, top: p2Y, opacity: isActive ? 0.6 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute w-1 h-1 bg-neon-purple rounded-full shadow-[0_0_5px_var(--color-neon-purple)]"
                />

            </div>
        </motion.div>
    );
};

export default OrbitalWrapper;
