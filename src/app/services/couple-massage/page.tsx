'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CoupleMassagePage() {
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
            <section className="therapy-hero" style={{ backgroundImage: 'url(/assets/images/couple-massage.jpg)' }}>
                <div className="therapy-hero-overlay"></div>
                <div className="therapy-hero-content">
                    <h1 className="therapy-hero-title">Couple Massage</h1>
                    <p className="therapy-hero-subtitle">Shared Relaxation in a Private Sanctuary</p>
                </div>
            </section>

            {/* Overview Section */}
            <section className="therapy-overview fade-in-section">
                <div className="sp-container">
                    <div className="therapy-overview-grid">
                        <div className="therapy-overview-text">
                            <h2>Reconnect Through Wellness</h2>
                            <div className="sp-divider"></div>
                            <p className="therapy-lead">
                                Share a peaceful wellness journey with someone special in our intimate couple's suite.
                                Two skilled therapists provide synchronized massages tailored to each partner's unique
                                needs, creating a harmonious experience of relaxation and connection.
                            </p>
                            <p>
                                Whether you're celebrating a special occasion, strengthening your bond, or simply
                                enjoying quality time together, our couple massage creates a memorable experience.
                                The romantic setting, soothing ambiance, and expert care make this the perfect way
                                to unwind together and deepen your connection.
                            </p>
                        </div>
                        <div className="therapy-overview-meta">
                            <div className="therapy-meta-card">
                                <h3>Duration</h3>
                                <p>60-90 minutes</p>
                            </div>
                            <div className="therapy-meta-card">
                                <h3>Ideal For</h3>
                                <p>Couples<br />Anniversaries<br />Special Occasions<br />Quality Time</p>
                            </div>
                            <div className="therapy-meta-card">
                                <h3>Setting</h3>
                                <p>Private Suite<br />Two Therapists<br />Romantic Ambiance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="therapy-benefits fade-in-section sp-light">
                <div className="sp-container">
                    <h2 className="sp-heading">Why Choose Couple Massage</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon">💑</div>
                            <h3>Strengthen Your Bond</h3>
                            <p>Share a peaceful experience that deepens emotional connection and intimacy</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🎁</div>
                            <h3>Perfect Gift</h3>
                            <p>Ideal for anniversaries, birthdays, Valentine's Day, or any special celebration</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🧘‍♂️</div>
                            <h3>Synchronized Relaxation</h3>
                            <p>Experience the unique harmony of relaxing together in the same peaceful space</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">✨</div>
                            <h3>Personalized for Each</h3>
                            <p>Each partner receives a customized massage based on their individual needs</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🕊️</div>
                            <h3>Stress Relief Together</h3>
                            <p>Release tension and stress as a couple, promoting mutual well-being</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">💝</div>
                            <h3>Create Memories</h3>
                            <p>Build lasting memories in a romantic, tranquil environment designed for two</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="therapy-process fade-in-section">
                <div className="sp-container">
                    <h2 className="sp-heading">Your Couple Massage Experience</h2>
                    <div className="process-timeline">
                        <div className="process-step">
                            <div className="process-number">1</div>
                            <h3>Welcome & Consultation</h3>
                            <p>Both partners meet with therapists to discuss preferences, pressure levels, and any focus areas</p>
                        </div>
                        <div className="process-connector"></div>
                        <div className="process-step">
                            <div className="process-number">2</div>
                            <h3>Private Suite Preparation</h3>
                            <p>Settle into our romantic couple's suite with side-by-side massage tables and calming ambiance</p>
                        </div>
                        <div className="process-connector"></div>
                        <div className="process-step">
                            <div className="process-number">3</div>
                            <h3>Synchronized Massage</h3>
                            <p>Two expert therapists work in harmony, each providing personalized treatment</p>
                        </div>
                        <div className="process-connector"></div>
                        <div className="process-step">
                            <div className="process-number">4</div>
                            <h3>Shared Relaxation</h3>
                            <p>Enjoy peaceful moments together in our relaxation lounge with herbal tea</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Occasions Section */}
            <section className="therapy-audience fade-in-section sp-light">
                <div className="sp-container">
                    <h2 className="sp-heading">Perfect Occasions</h2>
                    <div className="audience-grid">
                        <div className="audience-card">
                            <h3>💍 Anniversaries</h3>
                            <p>Celebrate your love with a romantic wellness experience you'll both cherish</p>
                        </div>
                        <div className="audience-card">
                            <h3>💐 Valentine's Day</h3>
                            <p>Show your love with a gift of relaxation and quality time together</p>
                        </div>
                        <div className="audience-card">
                            <h3>🎂 Birthdays</h3>
                            <p>Make birthdays extra special with a shared spa experience</p>
                        </div>
                        <div className="audience-card">
                            <h3>🌟 Just Because</h3>
                            <p>You don't need a reason to enjoy quality time and relaxation together</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customization Options */}
            <section className="therapy-customization fade-in-section">
                <div className="sp-container">
                    <h2 className="sp-heading">Customize Your Experience</h2>
                    <div className="customization-grid">
                        <div className="custom-card">
                            <h3>🌸 Massage Style</h3>
                            <p>Choose from Swedish, Deep Tissue, Aromatherapy, or a combination</p>
                        </div>
                        <div className="custom-card">
                            <h3>🕯️ Aromatherapy</h3>
                            <p>Select essential oil blends to enhance your relaxation experience</p>
                        </div>
                        <div className="custom-card">
                            <h3>🎵 Ambiance</h3>
                            <p>Customize music, lighting, and temperature to your preferences</p>
                        </div>
                        <div className="custom-card">
                            <h3>⏰ Duration</h3>
                            <p>Choose 60 or 90-minute sessions based on your schedule</p>
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
                            <h3>Do we need to get the same type of massage?</h3>
                            <p>No! Each partner can choose their preferred massage style and pressure level. Our therapists will customize each treatment individually.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Is this only for romantic couples?</h3>
                            <p>While popular with romantic partners, couple massages are also perfect for friends, family members, or anyone who wants to share a relaxing experience.</p>
                        </div>
                        <div className="faq-item">
                            <h3>What should we bring?</h3>
                            <p>Just yourselves! We provide robes, slippers, and all necessary amenities. You'll undress to your comfort level.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Can we talk during the massage?</h3>
                            <p>It's your experience! Some couples prefer quiet relaxation, while others enjoy gentle conversation. Do whatever feels right for you.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="therapy-cta fade-in-section">
                <div className="sp-cta-content">
                    <h2>Create Beautiful Memories Together</h2>
                    <p>Book your Couple Massage and share a journey of relaxation and connection</p>
                    <Link href="/#contact" className="sp-cta-btn">Book Your Session</Link>
                    <Link href="/services" className="therapy-back-link">← View All Therapies</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
