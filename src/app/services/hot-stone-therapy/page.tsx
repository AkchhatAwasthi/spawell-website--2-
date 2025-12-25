'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HotStoneTherapyPage() {
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

    return (
        <main className="therapy-detail-page">
            <Navbar />

            {/* Hero Section */}
            <section className="therapy-hero" style={{ backgroundImage: 'url(/assets/images/hot-stone-therapy.jpg)' }}>
                <div className="therapy-hero-overlay"></div>
                <div className="therapy-hero-content">
                    <h1 className="therapy-hero-title">Hot Stone Therapy</h1>
                    <p className="therapy-hero-subtitle">Ancient Healing with Heated Volcanic Stones</p>
                </div>
            </section>

            {/* Overview Section */}
            <section className="therapy-overview fade-in-section">
                <div className="sp-container">
                    <div className="therapy-overview-grid">
                        <div className="therapy-overview-text">
                            <h2>Experience Deep Muscle Relaxation</h2>
                            <div className="sp-divider"></div>
                            <p className="therapy-lead">
                                Immerse yourself in the ancient healing power of smooth, heated volcanic stones. 
                                This therapeutic massage technique has been used for centuries to promote deep 
                                relaxation, improve circulation, and restore balance to both body and mind.
                            </p>
                            <p>
                                The warmth from the stones penetrates deep into your muscles, releasing chronic 
                                tension and stress. As the heat relaxes your muscles, your therapist uses specialized 
                                techniques to work out knots and improve blood flow, creating a profoundly therapeutic 
                                experience that goes beyond traditional massage.
                            </p>
                        </div>
                        <div className="therapy-overview-meta">
                            <div className="therapy-meta-card">
                                <h3>Duration</h3>
                                <p>60-90 minutes</p>
                            </div>
                            <div className="therapy-meta-card">
                                <h3>Ideal For</h3>
                                <p>Muscle Tension<br/>Stress Relief<br/>Poor Circulation<br/>Chronic Pain</p>
                            </div>
                            <div className="therapy-meta-card">
                                <h3>Temperature</h3>
                                <p>130-145°F<br/>(Carefully Controlled)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="therapy-benefits fade-in-section sp-light">
                <div className="sp-container">
                    <h2 className="sp-heading">Key Benefits</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon">🔥</div>
                            <h3>Deep Muscle Relaxation</h3>
                            <p>Heat penetrates deep into muscle tissue, releasing tension and promoting flexibility</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">💆‍♀️</div>
                            <h3>Stress Reduction</h3>
                            <p>The warmth triggers relaxation response, lowering cortisol and promoting calm</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">❤️</div>
                            <h3>Improved Circulation</h3>
                            <p>Heat dilates blood vessels, enhancing oxygen and nutrient delivery throughout the body</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🌙</div>
                            <h3>Better Sleep Quality</h3>
                            <p>Deep relaxation promotes restful sleep and helps regulate sleep patterns</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🎯</div>
                            <h3>Pain Relief</h3>
                            <p>Effective for chronic pain conditions, arthritis, and muscle spasms</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">✨</div>
                            <h3>Mental Clarity</h3>
                            <p>Reduces mental fatigue and promotes a sense of peace and well-being</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="therapy-process fade-in-section">
                <div className="sp-container">
                    <h2 className="sp-heading">Your Hot Stone Therapy Journey</h2>
                    <div className="process-timeline">
                        <div className="process-step">
                            <div className="process-number">1</div>
                            <h3>Preparation & Consultation</h3>
                            <p>We discuss your needs and prepare the stones to the perfect temperature for your comfort</p>
                        </div>
                        <div className="process-connector"></div>
                        <div className="process-step">
                            <div className="process-number">2</div>
                            <h3>Stone Placement</h3>
                            <p>Warm stones are placed on key energy points along your spine, palms, and feet</p>
                        </div>
                        <div className="process-connector"></div>
                        <div className="process-step">
                            <div className="process-number">3</div>
                            <h3>Therapeutic Massage</h3>
                            <p>Your therapist uses heated stones as massage tools, gliding them across your muscles</p>
                        </div>
                        <div className="process-connector"></div>
                        <div className="process-step">
                            <div className="process-number">4</div>
                            <h3>Deep Relaxation</h3>
                            <p>Experience profound relaxation as heat and massage work together to release tension</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Should Try Section */}
            <section className="therapy-audience fade-in-section sp-light">
                <div className="sp-container">
                    <h2 className="sp-heading">Perfect For</h2>
                    <div className="audience-grid">
                        <div className="audience-card">
                            <h3>🏢 Office Professionals</h3>
                            <p>Release tension from long hours at a desk and poor posture</p>
                        </div>
                        <div className="audience-card">
                            <h3>🏃‍♀️ Active Individuals</h3>
                            <p>Soothe sore muscles after intense workouts or physical activity</p>
                        </div>
                        <div className="audience-card">
                            <h3>😰 Stress Sufferers</h3>
                            <p>Find relief from chronic stress and anxiety through deep relaxation</p>
                        </div>
                        <div className="audience-card">
                            <h3>🌡️ Cold-Sensitive People</h3>
                            <p>Enjoy therapeutic warmth that improves circulation and eases stiffness</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="therapy-faq fade-in-section">
                <div className="sp-container">
                    <h2 className="sp-heading">Frequently Asked Questions</h2>
                    <div className="faq-list">
                        <div className="faq-item">
                            <h3>Is hot stone therapy safe?</h3>
                            <p>Yes, when performed by trained professionals. We carefully control stone temperature and always check with you before placement to ensure your comfort.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Will the stones be too hot?</h3>
                            <p>No. Stones are heated to a therapeutic temperature (130-145°F) that feels warm and soothing, never burning. We always test temperature before use.</p>
                        </div>
                        <div className="faq-item">
                            <h3>What should I wear?</h3>
                            <p>You'll undress to your comfort level and be draped with sheets. Only the area being worked on is exposed at any time.</p>
                        </div>
                        <div className="faq-item">
                            <h3>How often should I get hot stone therapy?</h3>
                            <p>For chronic conditions, weekly sessions are beneficial. For general wellness, monthly treatments help maintain relaxation and muscle health.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="therapy-cta fade-in-section">
                <div className="sp-cta-content">
                    <h2>Ready to Experience Deep Relaxation?</h2>
                    <p>Book your Hot Stone Therapy session and let the healing warmth melt away your stress</p>
                    <Link href="/#contact" className="sp-cta-btn">Book Your Session</Link>
                    <Link href="/services" className="therapy-back-link">← View All Therapies</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
