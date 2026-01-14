import React from 'react';
import { cn } from '../../utils/cn';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all duration-300 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-transparent text-neon-green border border-neon-green hover:bg-neon-green hover:text-black shadow-[0_0_10px_rgba(204,255,0,0.2)] hover:shadow-[0_0_20px_rgba(204,255,0,0.6)]',
        secondary: 'bg-transparent text-white border border-white/20 hover:border-neon-green hover:text-neon-green shadow-none hover:shadow-[0_0_10px_rgba(204,255,0,0.2)]',
        ghost: 'text-gray-300 hover:text-neon-green hover:bg-neon-green/5',
    };

    const sizes = {
        sm: 'px-4 py-2 text-xs',
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-4 text-base',
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
