import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../../utils/cn';

gsap.registerPlugin(ScrollTrigger);

const TextReveal = ({ children, className, delay = 0 }) => {
    const el = useRef(null);

    useEffect(() => {
        if (!el.current) return;

        gsap.fromTo(
            el.current,
            {
                y: 100,
                opacity: 0,
                skewY: 7,
            },
            {
                y: 0,
                opacity: 1,
                skewY: 0,
                duration: 1,
                delay: delay,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: el.current,
                    start: 'top 85%', // Trigger when top of element hits 85% of viewport
                },
            }
        );
    }, [delay]);

    return (
        <div className="overflow-hidden">
            <div ref={el} className={cn('transform-gpu', className)}>
                {children}
            </div>
        </div>
    );
};

export default TextReveal;
