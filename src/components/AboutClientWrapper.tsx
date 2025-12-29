'use client';

import { useEffect } from 'react';

export default function AboutClientWrapper({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const animatedElements = document.querySelectorAll('.fade-in-section');
        animatedElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return <>{children}</>;
}
