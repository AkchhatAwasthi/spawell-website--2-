'use client';

import { useEffect } from 'react';

export default function PartnershipBenefits() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const benefits = [
        {
            icon: '⚖️',
            title: 'Fitness + Recovery Balance',
            description: 'Active lifestyles require intentional rest. We help you recover smarter and perform better.'
        },
        {
            icon: '🌿',
            title: 'Holistic Wellness Approach',
            description: 'True health integrates body, mind, and spirit. Our partnership supports every dimension of your well-being.'
        },
        {
            icon: '✨',
            title: 'Exclusive Benefits for Members',
            description: 'Members of both brands enjoy priority access, special offers, and tailored wellness experiences.'
        },
        {
            icon: '🤝',
            title: 'Trusted Brands, Shared Values',
            description: 'Both brands are built on professionalism, care, and a genuine commitment to your wellness journey.'
        }
    ];

    return (
        <section className="partnership-benefits-section">
            <div className="partnership-benefits-container">
                <div className="fade-in partnership-benefits-header">
                    <h2 className="partnership-benefits-title">Why This Partnership Works</h2>
                </div>
                <div className="partnership-benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="fade-in partnership-benefit-card"
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className="benefit-icon">{benefit.icon}</div>
                            <h3 className="benefit-title">{benefit.title}</h3>
                            <p className="benefit-description">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
