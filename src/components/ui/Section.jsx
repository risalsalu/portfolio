import React from 'react';
import { cn } from '../../utils/cn';

const Section = ({ children, id, className, fullWidth = false, ...props }) => {
    return (
        <section
            id={id}
            className={cn('py-20 md:py-32 relative', className)}
            {...props}
        >
            {fullWidth ? (
                children
            ) : (
                <div className="container mx-auto px-6">
                    {children}
                </div>
            )}
        </section>
    );
};

export default Section;
