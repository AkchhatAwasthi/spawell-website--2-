'use client';

import { useEffect } from 'react';

export default function PartnersHero() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el, i) => {
            // @ts-ignore
            el.style.transitionDelay = `${i * 0.15}s`;
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="partners-hero-section">
            <div className="partners-hero-container">
                <div className="fade-in partners-hero-content">
                    <h1 className="partners-hero-title">Our Partners</h1>
                    <p className="partners-hero-subtitle">
                        Collaborating with like-minded wellness brands to create holistic experiences.
                    </p>
                </div>
            </div>
            <div className="partners-hero-decoration"></div>
        </section>
    );
}
