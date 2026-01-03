'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SportsTherapyPage() {
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
            <section className="therapy-hero" style={{ backgroundImage: 'url(/assets/images/sports-therapy.jpg)' }}>
                <div className="therapy-hero-overlay"></div>
                <div className="therapy-hero-content">
                    <h1 className="therapy-hero-title">Sports Therapy</h1>
                    <p className="therapy-hero-subtitle">Athletic Recovery & Performance Enhancement</p>
                </div>
            </section>

            {/* Overview Section */}
            <section className="therapy-overview fade-in-section">
                <div className="sp-container">
                    <div className="therapy-overview-grid">
                        <div className="therapy-overview-text">
                            <h2>Optimize Your Athletic Performance</h2>
                            <div className="sp-divider"></div>
                            <p className="therapy-lead">
                                Designed specifically for active individuals and athletes, our sports therapy combines
                                specialized massage techniques with deep tissue work to target muscle recovery, enhance
                                flexibility, prevent injuries, and accelerate healing for peak performance.
                            </p>
                            <p>
                                Whether you're a professional athlete, weekend warrior, or fitness enthusiast, sports
                                therapy addresses the unique demands placed on your body. Our therapists understand
                                biomechanics and athletic movement patterns, allowing them to identify and treat areas
                                of tension, imbalance, and potential injury before they become serious problems.
                            </p>
                        </div>
                        <div className="therapy-overview-meta">
                            <div className="therapy-meta-card">
                                <h3>Duration</h3>
                                <p>90 minutes</p>
                            </div>
                            <div className="therapy-meta-card">
                                <h3>Ideal For</h3>
                                <p>Athletes<br />Muscle Recovery<br />Injury Prevention<br />Performance</p>
                            </div>
                            <div className="therapy-meta-card">
                                <h3>Techniques</h3>
                                <p>Deep Tissue<br />Trigger Point<br />Stretching<br />Myofascial Release</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="therapy-benefits fade-in-section sp-light">
                <div className="sp-container">
                    <h2 className="sp-heading">Performance Benefits</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon">💪</div>
                            <h3>Faster Recovery</h3>
                            <p>Reduce muscle soreness and recovery time between training sessions and competitions</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🎯</div>
                            <h3>Injury Prevention</h3>
                            <p>Identify and address muscle imbalances and tension before they lead to injury</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🤸‍♂️</div>
                            <h3>Enhanced Flexibility</h3>
                            <p>Improve range of motion and muscle elasticity for better athletic performance</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">⚡</div>
                            <h3>Increased Performance</h3>
                            <p>Optimize muscle function and biomechanics for peak athletic output</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🩹</div>
                            <h3>Rehabilitation Support</h3>
                            <p>Aid recovery from sports injuries with targeted therapeutic techniques</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🧠</div>
                            <h3>Mental Edge</h3>
                            <p>Reduce stress and improve focus for better mental performance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Techniques Section */}
            <section className="therapy-technique fade-in-section">
                <div className="sp-container">
                    <h2 className="sp-heading">Specialized Techniques</h2>
                    <div className="technique-grid">
                        <div className="technique-card">
                            <h3>🔨 Deep Tissue Work</h3>
                            <p>Targets deeper muscle layers to release chronic tension and break down adhesions</p>
                        </div>
                        <div className="technique-card">
                            <h3>🎯 Trigger Point Therapy</h3>
                            <p>Addresses specific points of muscle tension that refer pain to other areas</p>
                        </div>
                        <div className="technique-card">
                            <h3>🧘‍♂️ Active Stretching</h3>
                            <p>Combines massage with assisted stretching to improve flexibility and range of motion</p>
                        </div>
                        <div className="technique-card">
                            <h3>🌊 Myofascial Release</h3>
                            <p>Releases tension in the fascia (connective tissue) for improved movement patterns</p>
                        </div>
                        <div className="technique-card">
                            <h3>🔄 Cross-Fiber Friction</h3>
                            <p>Breaks down scar tissue and promotes proper muscle fiber alignment</p>
                        </div>
                        <div className="technique-card">
                            <h3>💧 Lymphatic Drainage</h3>
                            <p>Reduces inflammation and speeds removal of metabolic waste from muscles</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* When to Get Section */}
            <section className="therapy-timing fade-in-section sp-light">
                <div className="sp-container">
                    <h2 className="sp-heading">When to Schedule Sports Therapy</h2>
                    <div className="timing-grid">
                        <div className="timing-card">
                            <h3>🏃‍♂️ Pre-Event</h3>
                            <p><strong>24-48 hours before:</strong> Light sports massage to warm muscles, improve circulation, and enhance flexibility without causing soreness</p>
                        </div>
                        <div className="timing-card">
                            <h3>🎖️ Post-Event</h3>
                            <p><strong>Within 24-72 hours:</strong> Reduce muscle soreness, flush out lactic acid, and accelerate recovery after intense competition or training</p>
                        </div>
                        <div className="timing-card">
                            <h3>📅 Maintenance</h3>
                            <p><strong>Weekly or bi-weekly:</strong> Regular sessions during training to prevent injury, maintain flexibility, and optimize performance</p>
                        </div>
                        <div className="timing-card">
                            <h3>🩹 Rehabilitation</h3>
                            <p><strong>As prescribed:</strong> Support recovery from injury with targeted therapy as part of your rehabilitation program</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Benefits Section */}
            <section className="therapy-audience fade-in-section">
                <div className="sp-container">
                    <h2 className="sp-heading">Who Benefits from Sports Therapy</h2>
                    <div className="audience-grid">
                        <div className="audience-card">
                            <h3>🏆 Professional Athletes</h3>
                            <p>Maintain peak performance and prevent career-threatening injuries</p>
                        </div>
                        <div className="audience-card">
                            <h3>🏃‍♀️ Runners & Cyclists</h3>
                            <p>Address repetitive strain and improve endurance performance</p>
                        </div>
                        <div className="audience-card">
                            <h3>🏋️‍♂️ Gym Enthusiasts</h3>
                            <p>Recover faster between workouts and prevent overuse injuries</p>
                        </div>
                        <div className="audience-card">
                            <h3>⚽ Weekend Warriors</h3>
                            <p>Stay active and injury-free while enjoying recreational sports</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sports Covered Section */}
            <section className="therapy-sports fade-in-section sp-light">
                <div className="sp-container">
                    <h2 className="sp-heading">Sports We Specialize In</h2>
                    <div className="sports-grid">
                        <div className="sport-tag">🏃‍♂️ Running</div>
                        <div className="sport-tag">🚴‍♀️ Cycling</div>
                        <div className="sport-tag">🏊‍♂️ Swimming</div>
                        <div className="sport-tag">⚽ Football</div>
                        <div className="sport-tag">🏀 Basketball</div>
                        <div className="sport-tag">🎾 Tennis</div>
                        <div className="sport-tag">🏋️‍♀️ Weightlifting</div>
                        <div className="sport-tag">🧗‍♂️ Climbing</div>
                        <div className="sport-tag">🥊 Boxing/MMA</div>
                        <div className="sport-tag">🏏 Cricket</div>
                        <div className="sport-tag">🧘‍♀️ Yoga</div>
                        <div className="sport-tag">⛳ Golf</div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="therapy-faq fade-in-section">
                <div className="sp-container">
                    <h2 className="sp-heading">Frequently Asked Questions</h2>
                    <div className="faq-list">
                        <div className="faq-item">
                            <h3>Is sports massage painful?</h3>
                            <p>It can be more intense than relaxation massage, but should never be unbearable. We work within your tolerance level and communicate throughout the session.</p>
                        </div>
                        <div className="faq-item">
                            <h3>How is it different from regular massage?</h3>
                            <p>Sports therapy uses specific techniques targeting athletic performance, focuses on problem areas, and incorporates stretching and movement assessment.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Do I need to be an athlete?</h3>
                            <p>No! Anyone with an active lifestyle, physical job, or muscle tension can benefit from sports therapy techniques.</p>
                        </div>
                        <div className="faq-item">
                            <h3>How often should I come?</h3>
                            <p>Serious athletes benefit from weekly sessions. Recreational athletes typically schedule bi-weekly or monthly maintenance sessions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="therapy-cta fade-in-section">
                <div className="sp-cta-content">
                    <h2>Elevate Your Athletic Performance</h2>
                    <p>Book your Sports Therapy session and experience the competitive edge of professional recovery</p>
                    <Link href="/#contact" className="sp-cta-btn">Book Your Session</Link>
                    <Link href="/services" className="therapy-back-link">← View All Therapies</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
