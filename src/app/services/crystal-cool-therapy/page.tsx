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
                    <p className="therapy-hero-subtitle">Healing Energy with Cooling Crystal Elements</p>
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
                                Harness the natural healing properties of crystals combined with innovative cooling
                                therapy techniques. This unique treatment balances your energy centers (chakras),
                                reduces inflammation, and promotes holistic wellness through the synergy of crystal
                                energy and therapeutic cooling.
                            </p>
                            <p>
                                Each crystal is carefully selected for its specific healing properties and energy
                                vibrations. Combined with cooling elements, this therapy creates a refreshing,
                                rejuvenating experience that soothes both body and mind. The cooling sensation
                                reduces inflammation and muscle tension while the crystals work on an energetic
                                level to restore balance and harmony.
                            </p>
                        </div>
                        <div className="therapy-overview-meta">
                            <div className="therapy-meta-card">
                                <h3>Duration</h3>
                                <p>75-90 minutes</p>
                            </div>
                            <div className="therapy-meta-card">
                                <h3>Ideal For</h3>
                                <p>Energy Balance<br />Inflammation<br />Holistic Healing<br />Spiritual Wellness</p>
                            </div>
                            <div className="therapy-meta-card">
                                <h3>Elements</h3>
                                <p>Healing Crystals<br />Cooling Therapy<br />Chakra Balancing</p>
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
                            <div className="benefit-icon">⚡</div>
                            <h3>Energy Balancing</h3>
                            <p>Align and harmonize your chakras for improved energy flow and vitality</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">❄️</div>
                            <h3>Inflammation Reduction</h3>
                            <p>Cooling elements soothe inflamed tissues and reduce swelling naturally</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🧘‍♀️</div>
                            <h3>Spiritual Connection</h3>
                            <p>Deepen your connection to inner wisdom and spiritual awareness</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">💎</div>
                            <h3>Crystal Healing</h3>
                            <p>Benefit from the unique vibrational properties of carefully selected crystals</p>
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

            {/* Crystals Used Section */}
            <section className="therapy-crystals fade-in-section">
                <div className="sp-container">
                    <h2 className="sp-heading">Healing Crystals We Use</h2>
                    <div className="crystals-grid">
                        <div className="crystal-card">
                            <div className="crystal-icon">💜</div>
                            <h3>Amethyst</h3>
                            <p><strong>Crown Chakra</strong><br />Promotes spiritual awareness, intuition, and peaceful sleep</p>
                        </div>
                        <div className="crystal-card">
                            <div className="crystal-icon">💚</div>
                            <h3>Rose Quartz</h3>
                            <p><strong>Heart Chakra</strong><br />Opens the heart to love, compassion, and emotional healing</p>
                        </div>
                        <div className="crystal-card">
                            <div className="crystal-icon">🔵</div>
                            <h3>Lapis Lazuli</h3>
                            <p><strong>Third Eye Chakra</strong><br />Enhances wisdom, truth, and inner vision</p>
                        </div>
                        <div className="crystal-card">
                            <div className="crystal-icon">💛</div>
                            <h3>Citrine</h3>
                            <p><strong>Solar Plexus</strong><br />Boosts confidence, abundance, and personal power</p>
                        </div>
                        <div className="crystal-card">
                            <div className="crystal-icon">⚪</div>
                            <h3>Clear Quartz</h3>
                            <p><strong>All Chakras</strong><br />Amplifies energy and promotes overall balance</p>
                        </div>
                        <div className="crystal-card">
                            <div className="crystal-icon">🖤</div>
                            <h3>Black Tourmaline</h3>
                            <p><strong>Root Chakra</strong><br />Grounds energy and provides protective shield</p>
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
                            <h3>Energy Assessment</h3>
                            <p>We discuss your intentions and assess which chakras need balancing</p>
                        </div>
                        <div className="process-connector"></div>
                        <div className="process-step">
                            <div className="process-number">2</div>
                            <h3>Crystal Selection</h3>
                            <p>Specific crystals are chosen based on your unique energy needs</p>
                        </div>
                        <div className="process-connector"></div>
                        <div className="process-step">
                            <div className="process-number">3</div>
                            <h3>Cooling Crystal Placement</h3>
                            <p>Cooled crystals are placed on chakra points while you relax deeply</p>
                        </div>
                        <div className="process-connector"></div>
                        <div className="process-step">
                            <div className="process-number">4</div>
                            <h3>Crystal Massage</h3>
                            <p>Smooth crystal wands are used to massage and balance your energy field</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chakra Section */}
            <section className="therapy-chakras fade-in-section">
                <div className="sp-container">
                    <h2 className="sp-heading">Chakra Balancing</h2>
                    <p className="chakra-intro">Crystal Cool Therapy works with your seven main energy centers</p>
                    <div className="chakras-list">
                        <div className="chakra-item">
                            <div className="chakra-color" style={{ backgroundColor: '#9b59b6' }}></div>
                            <div className="chakra-info">
                                <h3>Crown Chakra</h3>
                                <p>Spiritual connection, enlightenment, consciousness</p>
                            </div>
                        </div>
                        <div className="chakra-item">
                            <div className="chakra-color" style={{ backgroundColor: '#4a148c' }}></div>
                            <div className="chakra-info">
                                <h3>Third Eye Chakra</h3>
                                <p>Intuition, wisdom, imagination, clarity</p>
                            </div>
                        </div>
                        <div className="chakra-item">
                            <div className="chakra-color" style={{ backgroundColor: '#2196f3' }}></div>
                            <div className="chakra-info">
                                <h3>Throat Chakra</h3>
                                <p>Communication, self-expression, truth</p>
                            </div>
                        </div>
                        <div className="chakra-item">
                            <div className="chakra-color" style={{ backgroundColor: '#4caf50' }}></div>
                            <div className="chakra-info">
                                <h3>Heart Chakra</h3>
                                <p>Love, compassion, emotional balance</p>
                            </div>
                        </div>
                        <div className="chakra-item">
                            <div className="chakra-color" style={{ backgroundColor: '#ffeb3b' }}></div>
                            <div className="chakra-info">
                                <h3>Solar Plexus Chakra</h3>
                                <p>Personal power, confidence, self-esteem</p>
                            </div>
                        </div>
                        <div className="chakra-item">
                            <div className="chakra-color" style={{ backgroundColor: '#ff9800' }}></div>
                            <div className="chakra-info">
                                <h3>Sacral Chakra</h3>
                                <p>Creativity, sexuality, emotions, pleasure</p>
                            </div>
                        </div>
                        <div className="chakra-item">
                            <div className="chakra-color" style={{ backgroundColor: '#f44336' }}></div>
                            <div className="chakra-info">
                                <h3>Root Chakra</h3>
                                <p>Grounding, security, stability, survival</p>
                            </div>
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
                            <h3>🧘‍♀️ Spiritual Seekers</h3>
                            <p>Those interested in energy work, chakra balancing, and holistic healing</p>
                        </div>
                        <div className="audience-card">
                            <h3>🔥 Inflammation Issues</h3>
                            <p>People dealing with chronic inflammation or heat-related discomfort</p>
                        </div>
                        <div className="audience-card">
                            <h3>⚡ Energy Imbalance</h3>
                            <p>Anyone feeling energetically depleted, blocked, or out of alignment</p>
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
                            <h3>Do I need to believe in crystal healing for it to work?</h3>
                            <p>While an open mind helps, many clients experience benefits regardless of their beliefs. The cooling therapy alone provides physical benefits, while crystals work on an energetic level.</p>
                        </div>
                        <div className="faq-item">
                            <h3>How cold are the crystals?</h3>
                            <p>Crystals are cooled to a comfortable, refreshing temperature—never uncomfortably cold. The cooling sensation is soothing and therapeutic.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Can I choose which crystals to use?</h3>
                            <p>Absolutely! We'll discuss your intentions and you can participate in crystal selection. Our therapist will also recommend crystals based on your energy assessment.</p>
                        </div>
                        <div className="faq-item">
                            <h3>How often should I receive this therapy?</h3>
                            <p>For energy balancing, monthly sessions are beneficial. For specific issues like inflammation, more frequent sessions may be recommended initially.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="therapy-cta fade-in-section">
                <div className="sp-cta-content">
                    <h2>Balance Your Energy & Soothe Your Body</h2>
                    <p>Book your Crystal Cool Therapy and experience the power of healing crystals</p>
                    <Link href="/#contact" className="sp-cta-btn">Book Your Session</Link>
                    <Link href="/services" className="therapy-back-link">← View All Therapies</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
