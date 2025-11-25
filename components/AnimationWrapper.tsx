"use client";

import { useState, useEffect } from "react";

interface AnimationWrapperProps {
    children: React.ReactNode;
    className?: string;
    animationDelay?: string;
}

export default function AnimationWrapper({ children, className = "", animationDelay = "0s" }: AnimationWrapperProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div 
            className={`${isLoaded ? 'animate-fade-in-up' : 'opacity-0'} ${className}`}
            style={{ animationDelay }}
        >
            {children}
        </div>
    );
}
