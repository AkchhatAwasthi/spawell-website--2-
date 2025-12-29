'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function PartnersCTA() {
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
        <section className="partners-cta-section">
            <div className="partners-cta-container">
                <div className="fade-in partners-cta-content">
                    <h2 className="partners-cta-title">Experience Wellness Together</h2>
                    <p className="partners-cta-text">
                        Discover how our partnership can support your wellness journey
                    </p>
                    <div className="partners-cta-buttons">
                        <Link href="/services" className="partners-cta-primary">
                            <span>Explore Our Therapies</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <Link href="#contact" className="partners-cta-secondary">
                            <span>Get in Touch</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
