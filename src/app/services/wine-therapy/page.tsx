'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function WineTherapyPage() {
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
            <section className="therapy-hero" style={{ backgroundImage: 'url(/assets/images/wine-therapy.jpg)' }}>
                <div className="therapy-hero-overlay"></div>
                <div className="therapy-hero-content">
                    <h1 className="therapy-hero-title">Wine Therapy</h1>
                    <p className="therapy-hero-subtitle">Antioxidant-Rich Luxury for Radiant Skin</p>
                </div>
            </section>

            {/* Overview Section */}
            <section className="therapy-overview fade-in-section">
                <div className="sp-container">
                    <div className="therapy-overview-grid">
                        <div className="therapy-overview-text">
                            <h2>The Power of Grape Extracts</h2>
                            <div className="sp-divider"></div>
                            <p className="therapy-lead">
                                Indulge in the luxurious benefits of wine therapy, where ancient beauty secrets meet
                                modern wellness. Rich in powerful antioxidants, polyphenols, and resveratrol, grape
                                extracts and wine essences work together to nourish, rejuvenate, and protect your skin.
                            </p>
                            <p>
                                This unique therapy combines the therapeutic properties of wine with expert massage
                                techniques and skin treatments. The result is a multi-sensory experience that not only
                                relaxes your body and mind but also leaves your skin with a healthy, radiant glow.
                                Perfect for those seeking both indulgence and visible skin benefits.
                            </p>
                        </div>
                        <div className="therapy-overview-meta">
                            <div className="therapy-meta-card">
                                <h3>Duration</h3>
                                <p>75 minutes</p>
                            </div>
                            <div className="therapy-meta-card">
                                <h3>Ideal For</h3>
                                <p>Skin Rejuvenation<br />Anti-Aging<br />Detoxification<br />Luxury Experience</p>
                            </div>
                            <div className="therapy-meta-card">
                                <h3>Key Ingredients</h3>
                                <p>Grape Extracts<br />Resveratrol<br />Polyphenols<br />Natural Oils</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="therapy-benefits fade-in-section sp-light">
                <div className="sp-container">
                    <h2 className="sp-heading">Skin & Wellness Benefits</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon">✨</div>
                            <h3>Powerful Antioxidants</h3>
                            <p>Combat free radicals and environmental damage with grape polyphenols and resveratrol</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🌟</div>
                            <h3>Anti-Aging Properties</h3>
                            <p>Reduce fine lines and wrinkles while promoting collagen production for firmer skin</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">💧</div>
                            <h3>Deep Hydration</h3>
                            <p>Nourish and moisturize skin, leaving it soft, supple, and glowing</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🍇</div>
                            <h3>Skin Detoxification</h3>
                            <p>Draw out impurities and toxins while improving skin texture and tone</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🌸</div>
                            <h3>Improved Circulation</h3>
                            <p>Enhance blood flow for a natural, healthy glow and better nutrient delivery</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🧘‍♀️</div>
                            <h3>Stress Relief</h3>
                            <p>Enjoy deep relaxation while your skin receives luxurious nourishment</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="therapy-process fade-in-section">
                <div className="sp-container">
                    <h2 className="sp-heading">Your Wine Therapy Journey</h2>
                    <div className="process-timeline">
                        <div className="process-step">
                            <div className="process-number">1</div>
                            <h3>Grape Seed Exfoliation</h3>
                            <p>Gentle full-body scrub with crushed grape seeds removes dead skin cells and prepares skin</p>
                        </div>
                        <div className="process-connector"></div>
                        <div className="process-step">
                            <div className="process-number">2</div>
                            <h3>Wine Extract Application</h3>
                            <p>Rich wine-infused oils and serums are massaged into your skin using therapeutic techniques</p>
                        </div>
                        <div className="process-connector"></div>
                        <div className="process-step">
                            <div className="process-number">3</div>
                            <h3>Antioxidant Body Wrap</h3>
                            <p>Warm wrap with grape extracts allows deep penetration of beneficial compounds</p>
                        </div>
                        <div className="process-connector"></div>
                        <div className="process-step">
                            <div className="process-number">4</div>
                            <h3>Hydrating Massage</h3>
                            <p>Concluding massage with nourishing lotions seals in moisture and promotes relaxation</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Science Section */}
            <section className="therapy-science fade-in-section sp-light">
                <div className="sp-container">
                    <h2 className="sp-heading">The Science Behind Wine Therapy</h2>
                    <div className="science-content">
                        <div className="science-card">
                            <h3>🍷 Resveratrol</h3>
                            <p>A powerful antioxidant found in grape skins that protects against aging, reduces inflammation, and promotes skin cell renewal.</p>
                        </div>
                        <div className="science-card">
                            <h3>🌿 Polyphenols</h3>
                            <p>Natural compounds that neutralize free radicals, improve skin elasticity, and provide anti-inflammatory benefits.</p>
                        </div>
                        <div className="science-card">
                            <h3>💎 Grape Seed Extract</h3>
                            <p>Rich in proanthocyanidins that strengthen capillaries, improve circulation, and enhance collagen production.</p>
                        </div>
                        <div className="science-card">
                            <h3>🌺 Natural AHAs</h3>
                            <p>Tartaric acid from grapes gently exfoliates, brightens skin tone, and improves texture naturally.</p>
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
                            <h3>⏰ Anti-Aging Seekers</h3>
                            <p>Those looking to reduce fine lines and maintain youthful, radiant skin</p>
                        </div>
                        <div className="audience-card">
                            <h3>🌟 Dull Skin</h3>
                            <p>Anyone wanting to restore natural glow and improve skin texture</p>
                        </div>
                        <div className="audience-card">
                            <h3>💆‍♀️ Luxury Lovers</h3>
                            <p>Those who appreciate indulgent, unique spa experiences</p>
                        </div>
                        <div className="audience-card">
                            <h3>🎁 Special Occasions</h3>
                            <p>Perfect pre-event treatment for glowing skin at weddings or celebrations</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="therapy-faq fade-in-section sp-light">
                <div className="sp-container">
                    <h2 className="sp-heading">Frequently Asked Questions</h2>
                    <div className="faq-list">
                        <div className="faq-item">
                            <h3>Will I smell like wine after the treatment?</h3>
                            <p>No! While we use wine extracts, the treatment has a pleasant, subtle grape aroma that fades quickly. You'll leave feeling fresh and rejuvenated.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Is wine therapy suitable for sensitive skin?</h3>
                            <p>Yes! Wine therapy is generally gentle and suitable for most skin types. We use natural grape extracts without harsh chemicals. Please inform us of any specific sensitivities.</p>
                        </div>
                        <div className="faq-item">
                            <h3>How soon will I see results?</h3>
                            <p>You'll notice softer, more radiant skin immediately after your first session. For anti-aging benefits, regular treatments (monthly) provide cumulative results.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Can men enjoy wine therapy too?</h3>
                            <p>Absolutely! Wine therapy benefits all skin types and genders. Many men love this treatment for its skin-improving and relaxing properties.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="therapy-cta fade-in-section">
                <div className="sp-cta-content">
                    <h2>Indulge in Luxurious Skin Rejuvenation</h2>
                    <p>Book your Wine Therapy session and discover the secret to radiant, youthful skin</p>
                    <Link href="/#contact" className="sp-cta-btn">Book Your Session</Link>
                    <Link href="/services" className="therapy-back-link">← View All Therapies</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
