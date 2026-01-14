import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { useCursorEngine } from '../../hooks/useCursorEngine';

const CursorFollower = () => {
    const { smoothedX, smoothedY, velocityX, velocityY } = useCursorEngine();

    // Subtle scale effect based on velocity
    const velocityScale = useTransform(
        [velocityX, velocityY],
        ([vx, vy]) => {
            const speed = Math.sqrt(vx * vx + vy * vy);
            return Math.min(1 + speed / 1000, 1.2); // Cap scale at 1.2
        }
    );

    return (
        <motion.div
            className="fixed top-0 left-0 w-5 h-5 border border-neon-blue rounded-full pointer-events-none z-[9999] hidden md:block"
            style={{
                x: smoothedX,
                y: smoothedY,
                translateX: '-50%',
                translateY: '-50%',
                scale: velocityScale,
                backgroundColor: 'transparent',
                boxShadow: '0 0 10px var(--color-neon-blue)',
            }}
        />
    );
};

export default CursorFollower;
