'use client';

import { useEffect } from 'react';

export default function BrandTrust() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="brand-trust-section">
            <div className="brand-trust-container">
                <div className="fade-in brand-trust-content">
                    <h2 className="brand-trust-title">Built on Trust and Excellence</h2>
                    <div className="brand-trust-text">
                        <p>
                            Both Spa Rituals and Anytime Fitness uphold the highest professional standards.
                            Our therapies are delivered by certified practitioners using premium facilities
                            and evidence-based wellness practices.
                        </p>
                        <p>
                            We believe wellness should be accessible, effective, and rooted in care.
                            This partnership reflects our shared commitment to your health and happiness.
                        </p>
                    </div>
                    <div className="brand-trust-values">
                        <div className="trust-value-item">
                            <span className="trust-value-icon">🏆</span>
                            <span className="trust-value-label">Professional Standards</span>
                        </div>
                        <div className="trust-value-divider"></div>
                        <div className="trust-value-item">
                            <span className="trust-value-icon">✓</span>
                            <span className="trust-value-label">Certified Therapies</span>
                        </div>
                        <div className="trust-value-divider"></div>
                        <div className="trust-value-item">
                            <span className="trust-value-icon">💚</span>
                            <span className="trust-value-label">Wellness-First Philosophy</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
