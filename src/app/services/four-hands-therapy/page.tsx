'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FourHandsTherapyPage() {
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
            <section className="therapy-hero" style={{ backgroundImage: 'url(/assets/images/four-hands-therapy.jpg)' }}>
                <div className="therapy-hero-overlay"></div>
                <div className="therapy-hero-content">
                    <h1 className="therapy-hero-title">Four Hands Massage Therapy</h1>
                    <p className="therapy-hero-subtitle">Synchronized Harmony by Two Expert Therapists</p>
                </div>
            </section>

            {/* Overview Section */}
            <section className="therapy-overview fade-in-section">
                <div className="sp-container">
                    <div className="therapy-overview-grid">
                        <div className="therapy-overview-text">
                            <h2>Double the Therapists, Double the Bliss</h2>
                            <div className="sp-divider"></div>
                            <p className="therapy-lead">
                                Experience the extraordinary sensation of two highly skilled therapists working in
                                perfect synchronization. This choreographed massage creates a deeply immersive and
                                unique experience that transcends ordinary massage therapy.
                            </p>
                            <p>
                                The four hands technique creates a symphony of movement across your body. As two
                                therapists mirror each other's strokes or work on different areas simultaneously,
                                your mind enters a meditative state, unable to track the multiple sensations. This
                                sensory overload paradoxically leads to profound relaxation, making it one of our
                                most transformative treatments.
                            </p>
                        </div>
                        <div className="therapy-overview-meta">
                            <div className="therapy-meta-card">
                                <h3>Duration</h3>
                                <p>60-75 minutes</p>
                            </div>
                            <div className="therapy-meta-card">
                                <h3>Ideal For</h3>
                                <p>Deep Relaxation<br />Unique Experience<br />Stress Relief<br />Mind-Body Balance</p>
                            </div>
                            <div className="therapy-meta-card">
                                <h3>Therapists</h3>
                                <p>Two Certified<br />Professionals<br />Working in Sync</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="therapy-benefits fade-in-section sp-light">
                <div className="sp-container">
                    <h2 className="sp-heading">Unique Benefits</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon">🧠</div>
                            <h3>Mental Reset</h3>
                            <p>Multiple simultaneous sensations quiet the mind, creating a meditative state</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">⚡</div>
                            <h3>Faster Results</h3>
                            <p>Two therapists cover more area in less time, providing comprehensive treatment</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🌊</div>
                            <h3>Flowing Rhythm</h3>
                            <p>Synchronized movements create a wave-like sensation that deeply relaxes</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">💆‍♀️</div>
                            <h3>Enhanced Relaxation</h3>
                            <p>The unique experience triggers deeper relaxation than traditional massage</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🎭</div>
                            <h3>Sensory Journey</h3>
                            <p>An immersive experience that engages mind and body in new ways</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">✨</div>
                            <h3>Memorable Experience</h3>
                            <p>A truly unique treatment that stands out from conventional massage</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="therapy-technique fade-in-section">
                <div className="sp-container">
                    <h2 className="sp-heading">The Four Hands Technique</h2>
                    <div className="technique-grid">
                        <div className="technique-card">
                            <h3>🤝 Mirror Movements</h3>
                            <p>Therapists perform identical strokes on opposite sides of your body, creating perfect symmetry and balance</p>
                        </div>
                        <div className="technique-card">
                            <h3>🔄 Contrasting Rhythms</h3>
                            <p>One therapist uses long flowing strokes while the other applies focused pressure, creating dynamic contrast</p>
                        </div>
                        <div className="technique-card">
                            <h3>🌀 Circular Patterns</h3>
                            <p>Synchronized circular movements flow across your body like waves, inducing deep relaxation</p>
                        </div>
                        <div className="technique-card">
                            <h3>🎯 Targeted & Broad</h3>
                            <p>One therapist addresses specific tension points while the other maintains overall flow and connection</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="therapy-process fade-in-section sp-light">
                <div className="sp-container">
                    <h2 className="sp-heading">Your Four Hands Journey</h2>
                    <div className="process-timeline">
                        <div className="process-step">
                            <div className="process-number">1</div>
                            <h3>Team Consultation</h3>
                            <p>Both therapists meet with you to understand your needs and coordinate their approach</p>
                        </div>
                        <div className="process-connector"></div>
                        <div className="process-step">
                            <div className="process-number">2</div>
                            <h3>Synchronized Beginning</h3>
                            <p>Therapists begin together, establishing rhythm and helping you relax into the experience</p>
                        </div>
                        <div className="process-connector"></div>
                        <div className="process-step">
                            <div className="process-number">3</div>
                            <h3>Choreographed Flow</h3>
                            <p>Experience the unique sensation of four hands working in perfect harmony across your body</p>
                        </div>
                        <div className="process-connector"></div>
                        <div className="process-step">
                            <div className="process-number">4</div>
                            <h3>Gentle Conclusion</h3>
                            <p>Therapists gradually slow their movements, bringing you back to awareness gently</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Should Try Section */}
            <section className="therapy-audience fade-in-section">
                <div className="sp-container">
                    <h2 className="sp-heading">Perfect For</h2>
                    <div className="audience-grid">
                        <div className="audience-card">
                            <h3>🎁 First-Timers</h3>
                            <p>Those seeking a unique, memorable spa experience unlike any other</p>
                        </div>
                        <div className="audience-card">
                            <h3>🧘‍♂️ Meditation Enthusiasts</h3>
                            <p>People who appreciate mindfulness and deep meditative states</p>
                        </div>
                        <div className="audience-card">
                            <h3>😰 Chronic Stress</h3>
                            <p>Individuals needing profound relaxation to combat severe stress</p>
                        </div>
                        <div className="audience-card">
                            <h3>💼 Busy Professionals</h3>
                            <p>Those wanting maximum relaxation benefits in minimal time</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="therapy-comparison fade-in-section sp-light">
                <div className="sp-container">
                    <h2 className="sp-heading">Why Choose Four Hands Over Traditional Massage?</h2>
                    <div className="comparison-grid">
                        <div className="comparison-item">
                            <div className="comparison-icon">⏱️</div>
                            <h3>Time Efficiency</h3>
                            <p>Achieve in 60 minutes what might take 90+ minutes with a single therapist</p>
                        </div>
                        <div className="comparison-item">
                            <div className="comparison-icon">🧠</div>
                            <h3>Mental Benefits</h3>
                            <p>The unique sensory experience creates deeper mental relaxation and stress relief</p>
                        </div>
                        <div className="comparison-item">
                            <div className="comparison-icon">🎪</div>
                            <h3>Novelty Factor</h3>
                            <p>A truly unique experience that regular massage clients find refreshing and exciting</p>
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
                            <h3>Is four hands massage more intense?</h3>
                            <p>Not necessarily. While you receive more attention, the pressure level is customized to your preference, just like a traditional massage.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Will it feel overwhelming?</h3>
                            <p>Initially, you might notice the multiple sensations, but most clients quickly find it deeply relaxing as the mind lets go of tracking individual movements.</p>
                        </div>
                        <div className="faq-item">
                            <h3>How do the therapists coordinate?</h3>
                            <p>Our therapists train extensively together to develop synchronized techniques and non-verbal communication for seamless coordination.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Is it worth the extra cost?</h3>
                            <p>Many clients find it transformative and worth every penny for the unique experience and profound relaxation it provides.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="therapy-cta fade-in-section">
                <div className="sp-cta-content">
                    <h2>Experience the Magic of Four Hands</h2>
                    <p>Book your Four Hands Massage and discover a new dimension of relaxation</p>
                    <Link href="/#contact" className="sp-cta-btn">Book Your Session</Link>
                    <Link href="/services" className="therapy-back-link">← View All Therapies</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
