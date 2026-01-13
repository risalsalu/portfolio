import React from 'react';
import { cn } from '../../utils/cn';

const Badge = ({ children, variant = 'default', className }) => {
    const variants = {
        default: 'bg-gray-800 text-gray-300 border border-gray-700',
        neon: 'bg-neon-blue/10 text-neon-blue border border-neon-blue/30 shadow-[0_0_10px_rgba(0,243,255,0.2)]',
        purple: 'bg-neon-purple/10 text-neon-purple border border-neon-purple/30 shadow-[0_0_10px_rgba(188,19,254,0.2)]',
    };

    return (
        <span
            className={cn(
                'inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide',
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
};

export default Badge;
