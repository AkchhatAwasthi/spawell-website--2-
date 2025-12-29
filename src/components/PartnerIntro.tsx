'use client';

import { useEffect } from 'react';

export default function PartnerIntro() {
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
        <section className="partner-intro-section">
            <div className="partner-intro-container">
                <div className="fade-in partner-intro-content">
                    <h2 className="partner-intro-title">Anytime Fitness × Spa Rituals</h2>
                    <div className="partner-intro-text">
                        <p>
                            Anytime Fitness is a modern fitness and lifestyle brand dedicated to empowering individuals
                            through movement, strength, and sustainable wellness practices.
                        </p>
                        <p>
                            Together, we share a deep belief in the importance of physical recovery, mental wellness,
                            and long-term health. Fitness and therapy are not separate pursuits—they complement and
                            enhance each other, creating a complete approach to well-being.
                        </p>
                        <p>
                            This partnership brings together two trusted brands committed to helping you feel your best,
                            inside and out.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
