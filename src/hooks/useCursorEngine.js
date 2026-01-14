import { useEffect } from 'react';
import { useMotionValue, useSpring, useVelocity, useTransform } from 'framer-motion';

// Singleton motion values to share state across components without re-renders
const mouseX = new Set();
const mouseY = new Set();

const globalX = { current: 0 };
const globalY = { current: 0 };

/**
 * useCursorEngine
 * Core physics engine for the cursor interaction system.
 * Returns shared motion values for position and velocity.
 */
export const useCursorEngine = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth physics for the cursor data
    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
    const smoothedX = useSpring(x, smoothOptions);
    const smoothedY = useSpring(y, smoothOptions);

    const velocityX = useVelocity(smoothedX);
    const velocityY = useVelocity(smoothedY);

    useEffect(() => {
        const handleMouseMove = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
            globalX.current = e.clientX;
            globalY.current = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [x, y]);

    return {
        x,
        y,
        smoothedX,
        smoothedY,
        velocityX,
        velocityY
    };
};

/**
 * Utility to get current cursor pos non-reactively
 */
export const getCursorPos = () => ({ x: globalX.current, y: globalY.current });
