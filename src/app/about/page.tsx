import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutClientWrapper from '@/components/AboutClientWrapper';

export const metadata: Metadata = {
    title: "About Us - Our Story & Mission",
    description: "Learn about Spa Rituals Kolkata - your trusted spa for relaxation and wellness. Discover our story, mission, values, and commitment to quality massage and wellness treatments.",
    keywords: [
        "about spa rituals",
        "spa kolkata story",
        "wellness center about",
        "spa mission vision",
        "best spa kolkata",
        "spa rituals history",
        "massage center kolkata"
    ],
    openGraph: {
        title: "About Spa Rituals Kolkata - Our Story & Mission",
        description: "Learn about Spa Rituals Kolkata - your trusted spa for relaxation and wellness. Discover our story, mission, and values.",
        url: "https://sparituals.co.in/about",
        images: [
            {
                url: "/assets/images/spa-woman.png",
                width: 1200,
                height: 630,
                alt: "About Spa Rituals Kolkata",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Spa Rituals Kolkata - Our Story & Mission",
        description: "Learn about Spa Rituals Kolkata - your trusted spa for relaxation and wellness.",
        images: ["/assets/images/spa-woman.png"],
    },
    alternates: {
        canonical: "https://sparituals.co.in/about",
    },
};

export default function AboutPage() {
    return (
        <AboutClientWrapper>
            <main>
                <Navbar />
                <div className="about-page">
                    {/* Hero Section */}
                    <section className="about-hero" style={{ backgroundImage: "url('https://calista.com.tr/media/532bmoz2/spa-nedir.jpg?rmode=max&width=500&height=265')" }}>
                        <div className="about-hero-overlay">
                            <h1 className="about-hero-title">About Spa Rituals Kolkata</h1>
                            <p className="about-hero-subtitle">Your Trusted Spa for Relaxation and Wellness</p>
                        </div>
                    </section>

                    {/* Our Story Section */}
                    <section className="about-story fade-in-section">
                        <div className="about-container">
                            <div className="story-content">
                                <div className="story-image">
                                    <img src="/assets/images/spa-woman.png" alt="Spa Interior" />
                                </div>
                                <div className="story-text">
                                    <h2>Our Story</h2>
                                    <div className="decorative-line"></div>
                                    <p>
                                        Spa Rituals started with a simple goal - to give people a clean, peaceful place
                                        where they can relax and feel better. We combine traditional massage techniques
                                        with modern spa treatments.
                                    </p>
                                    <p>
                                        Our team wanted to create a spa where every person feels welcome and cared for.
                                        Today, we continue to offer personalized massage and wellness services that help
                                        you relax your body and mind.
                                    </p>
                                    <p>
                                        At Spa Rituals, we believe taking care of yourself is important.
                                        We are happy to help you on your wellness journey.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Mission & Vision Section */}
                    <section className="mission-vision fade-in-section">
                        <div className="about-container">
                            <div className="mv-grid">
                                <div className="mv-card mission-card">
                                    <div className="mv-icon">🪷</div>
                                    <h3>Our Mission</h3>
                                    <p>
                                        To give you the best massage and wellness treatments that help you feel relaxed,
                                        healthy, and happy. We care about your comfort and well-being.
                                    </p>
                                </div>
                                <div className="mv-card vision-card">
                                    <div className="mv-icon">🧭</div>
                                    <h3>Our Vision</h3>
                                    <p>
                                        To be the best spa in Kolkata where people come to relax, refresh,
                                        and live a healthier, happier life.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Core Values Section */}
                    <section className="core-values fade-in-section">
                        <div className="about-container">
                            <h2 className="section-heading">What We Believe In</h2>
                            <div className="values-grid">
                                <div className="value-card">
                                    <div className="value-icon">⭐</div>
                                    <h3>Quality Service</h3>
                                    <p>We give you the best massage and treatments. Your satisfaction is our priority.</p>
                                </div>
                                <div className="value-card">
                                    <div className="value-icon">🌿</div>
                                    <h3>Genuine Care</h3>
                                    <p>We truly care about you. Our therapists are friendly, skilled, and professional.</p>
                                </div>
                                <div className="value-card">
                                    <div className="value-icon">☯️</div>
                                    <h3>Complete Wellness</h3>
                                    <p>We take care of your whole body and mind to help you feel completely relaxed.</p>
                                </div>
                                <div className="value-card">
                                    <div className="value-icon">🌍</div>
                                    <h3>Clean & Safe</h3>
                                    <p>We use natural products and keep our spa very clean for your health and safety.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="about-cta fade-in-section">
                        <div className="about-container">
                            <h2>Start Your Wellness Journey</h2>
                            <p>Come visit Spa Rituals and experience the best massage and wellness care in Kolkata.</p>
                            <Link href="/#contact" className="cta-button">Book Your Appointment</Link>
                        </div>
                    </section>
                </div>
                <Footer />
            </main>
        </AboutClientWrapper>
    );
}
