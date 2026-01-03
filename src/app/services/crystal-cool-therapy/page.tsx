'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CrystalCoolTherapyPage() {
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
            <section className="therapy-hero" style={{ backgroundImage: 'url(/assets/images/crystal-therapy.jpg)' }}>
                <div className="therapy-hero-overlay"></div>
                <div className="therapy-hero-content">
                    <h1 className="therapy-hero-title">Crystal Cool Therapy</h1>
                    <p className="therapy-hero-subtitle">Rejuvenating Therapy with Rich Cream and Ice Cubes</p>
                </div>
            </section>

            {/* Overview Section */}
            <section className="therapy-overview fade-in-section">
                <div className="sp-container">
                    <div className="therapy-overview-grid">
                        <div className="therapy-overview-text">
                            <h2>Ancient Wisdom Meets Modern Wellness</h2>
                            <div className="sp-divider"></div>
                            <p className="therapy-lead">
                                Experience the revitalizing power of our signature cooling therapy. This unique treatment
                                combines rich, nourishing cream with the refreshing sensation of ice cubes to reduce
                                inflammation, tighten pores, and promote calmness.
                            </p>
                            <p>
                                The therapy starts with a deep tissue massage using a special cream that hydrates
                                and softens the skin. Followed by a rhythmic massage with ice cubes, it stimulates
                                blood circulation, reduces puffiness, and leaves your skin feeling firm and glowing.
                                This refreshing combination soothes muscle tension and provides an instant burst of energy.
                            </p>
                        </div>
                        <div className="therapy-overview-meta">
                            <div className="therapy-meta-card">
                                <h3>Duration</h3>
                                <p>60 minutes</p>
                            </div>
                            <div className="therapy-meta-card">
                                <h3>Ideal For</h3>
                                <p>Energy Balance<br />Inflammation<br />Holistic Healing<br />Spiritual Wellness</p>
                            </div>
                            <div className="therapy-meta-card">
                                <h3>Elements</h3>
                                <p>Rich Cream<br />Ice Cubes<br />Cooling Therapy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="therapy-benefits fade-in-section sp-light">
                <div className="sp-container">
                    <h2 className="sp-heading">Holistic Benefits</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon">💧</div>
                            <h3>Deep Hydration</h3>
                            <p>Rich cream penetrates deeply to moisturize and soften the skin</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">❄️</div>
                            <h3>Inflammation Reduction</h3>
                            <p>Cooling elements soothe inflamed tissues and reduce swelling naturally</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🧖‍♀️</div>
                            <h3>Skin Rejuvenation</h3>
                            <p>Tightens pores and leaves skin looking fresh, radiant, and youthful</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🧊</div>
                            <h3>Ice Therapy</h3>
                            <p>Stimulates circulation and reduces puffiness with invigorating ice massage</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🌊</div>
                            <h3>Cooling Comfort</h3>
                            <p>Experience refreshing relief from heat, tension, and physical discomfort</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">✨</div>
                            <h3>Mental Clarity</h3>
                            <p>Clear mental fog and enhance focus through energetic alignment</p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Process Section */}
            <section className="therapy-process fade-in-section sp-light">
                <div className="sp-container">
                    <h2 className="sp-heading">Your Crystal Cool Journey</h2>
                    <div className="process-timeline">
                        <div className="process-step">
                            <div className="process-number">1</div>
                            <h3>Consultation</h3>
                            <p>We assess your skin type and specific needs for the therapy</p>
                        </div>
                        <div className="process-connector"></div>
                        <div className="process-step">
                            <div className="process-number">2</div>
                            <h3>Cream Massage</h3>
                            <p>Deep massage with rich cream to hydrate and prepare the skin</p>
                        </div>
                        <div className="process-connector"></div>
                        <div className="process-step">
                            <div className="process-number">3</div>
                            <h3>Ice Integration</h3>
                            <p>Rhythmic application of ice cubes to stimulate and tighten</p>
                        </div>
                        <div className="process-connector"></div>
                        <div className="process-step">
                            <div className="process-number">4</div>
                            <h3>Cooling Relief</h3>
                            <p>Final cooling phase to lock in moisture and refresh the body</p>
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
                            <h3>🌞 Skin Rejuvenation</h3>
                            <p>Those looking to improve skin tone, texture, and tightness</p>
                        </div>
                        <div className="audience-card">
                            <h3>🔥 Inflammation Issues</h3>
                            <p>People dealing with chronic inflammation or heat-related discomfort</p>
                        </div>
                        <div className="audience-card">
                            <h3>😫 Muscle Fatigue</h3>
                            <p>Anyone feeling muscle soreness or physical fatigue</p>
                        </div>
                        <div className="audience-card">
                            <h3>🌟 Wellness Enthusiasts</h3>
                            <p>Those seeking unique, alternative healing modalities</p>
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
                            <h3>Is the ice therapy painful?</h3>
                            <p>No, the ice is applied rhythmically and is combined with cream, ensuring a refreshing and invigorating sensation rather than discomfort.</p>
                        </div>
                        <div className="faq-item">
                            <h3>What are the benefits of ice and cream therapy?</h3>
                            <p>The combination helps in reducing inflammation, tightening pores, moisturizing the skin, and relieving muscle tension.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Is this suitable for sensitive skin?</h3>
                            <p>Yes, we use hypoallergenic creams. The cooling effect of ice can actually help soothe sensitive or irritated skin.</p>
                        </div>
                        <div className="faq-item">
                            <h3>How often should I receive this therapy?</h3>
                            <p>For best results, we recommend monthly sessions or whenever you feel the need for a deep refresh.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="therapy-cta fade-in-section">
                <div className="sp-cta-content">
                    <h2>Balance Your Energy & Soothe Your Body</h2>
                    <p>Book your Crystal Cool Therapy and experience the refreshing power of ice and cream</p>
                    <Link href="/#contact" className="sp-cta-btn">Book Your Session</Link>
                    <Link href="/services" className="therapy-back-link">← View All Therapies</Link>
                </div>
            </section>

            <Footer />
        </main >
    );
}
