import React from 'react';
import { cn } from '../../utils/cn';

const Card = ({ children, className, hover = true, ...props }) => {
    return (
        <div
            className={cn(
                'bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 transition-all duration-500',
                hover && 'hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,243,255,0.1)] hover:-translate-y-1',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
