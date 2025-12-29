'use client';

import { useEffect } from 'react';

export default function MissionVision() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        const elements = document.querySelectorAll('.fade-in-mission');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="mission-vision-section-home">
            <div className="mission-vision-container-home">
                <div className="mission-vision-header-home fade-in-mission">
                    <span className="section-label-mvh">Our Purpose</span>
                    <h2 className="section-title-mvh">Mission & Vision</h2>
                    <p className="section-subtitle-mvh">
                        Guiding principles that shape our commitment to your wellness journey
                    </p>
                </div>

                <div className="mission-vision-grid-home">
                    {/* Mission Card */}
                    <div className="mv-card-home fade-in-mission mission-card-home">
                        <div className="mv-icon-wrapper-home">
                            <span className="mv-icon-home">🪷</span>
                        </div>
                        <h3 className="mv-title-home">Our Mission</h3>
                        <div className="mv-divider-home"></div>
                        <p className="mv-description-home">
                            To provide a sanctuary where ancient wellness traditions meet modern therapeutic practices,
                            offering personalized treatments that nurture the body, calm the mind, and rejuvenate the spirit.
                            We are committed to creating transformative experiences that promote holistic well-being and
                            lasting inner peace.
                        </p>
                        <div className="mv-highlights-home">
                            <div className="mv-highlight-item-home">
                                <span className="highlight-icon-home">✓</span>
                                <span>Personalized Care</span>
                            </div>
                            <div className="mv-highlight-item-home">
                                <span className="highlight-icon-home">✓</span>
                                <span>Ancient Traditions</span>
                            </div>
                            <div className="mv-highlight-item-home">
                                <span className="highlight-icon-home">✓</span>
                                <span>Holistic Wellness</span>
                            </div>
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div className="mv-card-home fade-in-mission vision-card-home">
                        <div className="mv-icon-wrapper-home">
                            <span className="mv-icon-home">🧭</span>
                        </div>
                        <h3 className="mv-title-home">Our Vision</h3>
                        <div className="mv-divider-home"></div>
                        <p className="mv-description-home">
                            To be recognized as the premier destination for authentic wellness experiences, where every
                            guest discovers their path to balance and tranquility. We envision a world where self-care
                            is celebrated, and our spa becomes a beacon of healing, inspiring individuals to prioritize
                            their well-being and embrace a lifestyle of mindful living.
                        </p>
                        <div className="mv-highlights-home">
                            <div className="mv-highlight-item-home">
                                <span className="highlight-icon-home">✓</span>
                                <span>Excellence in Service</span>
                            </div>
                            <div className="mv-highlight-item-home">
                                <span className="highlight-icon-home">✓</span>
                                <span>Authentic Experiences</span>
                            </div>
                            <div className="mv-highlight-item-home">
                                <span className="highlight-icon-home">✓</span>
                                <span>Mindful Living</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Values */}
                <div className="core-values-section-home fade-in-mission">
                    <h3 className="core-values-title-home">Our Core Values</h3>
                    <div className="core-values-grid-home">
                        <div className="value-item-home">
                            <div className="value-icon-home">⭐</div>
                            <h4>Excellence</h4>
                            <p>Uncompromising quality in every detail</p>
                        </div>
                        <div className="value-item-home">
                            <div className="value-icon-home">🌿</div>
                            <h4>Authenticity</h4>
                            <p>Genuine care and traditional practices</p>
                        </div>
                        <div className="value-item-home">
                            <div className="value-icon-home">☯️</div>
                            <h4>Holistic Care</h4>
                            <p>Treating body, mind, and spirit</p>
                        </div>
                        <div className="value-item-home">
                            <div className="value-icon-home">🌍</div>
                            <h4>Sustainability</h4>
                            <p>Eco-friendly practices for our planet</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
