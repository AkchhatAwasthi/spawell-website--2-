'use client';

import { useEffect } from 'react';

export default function MemberBenefits() {
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
        <section className="member-benefits-section">
            <div className="member-benefits-container">
                <div className="fade-in member-benefits-header">
                    <h2 className="member-benefits-title">Member Benefits</h2>
                    <p className="member-benefits-intro">
                        What members gain from this partnership
                    </p>
                </div>
                <div className="member-benefits-content">
                    <div className="fade-in member-benefit-item">
                        <div className="member-benefit-marker"></div>
                        <div className="member-benefit-text">
                            <h3>Exclusive Spa Privileges</h3>
                            <p>Anytime Fitness members receive special access to select spa treatments and wellness services.</p>
                        </div>
                    </div>
                    <div className="fade-in member-benefit-item">
                        <div className="member-benefit-marker"></div>
                        <div className="member-benefit-text">
                            <h3>Recovery Therapies for Active Lifestyles</h3>
                            <p>Specialized treatments designed to support muscle recovery, reduce tension, and enhance performance.</p>
                        </div>
                    </div>
                    <div className="fade-in member-benefit-item">
                        <div className="member-benefit-marker"></div>
                        <div className="member-benefit-text">
                            <h3>Priority Bookings</h3>
                            <p>Members enjoy priority scheduling and access to collaborative wellness events and workshops.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
