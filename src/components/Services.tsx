'use client';

import { useState } from 'react';
import Link from 'next/link';

const therapies = [
    {
        title: "Thai Dry Therapy",
        desc: "Traditional healing massage using rhythmic stretches and pressure points",
        category: "Traditional",
        icon: "🪷",
        slug: null // No dedicated page yet
    },
    {
        title: "Swedish Therapy",
        desc: "Classic European massage with long strokes and gentle kneading",
        category: "Classic",
        icon: "🌸",
        slug: null // No dedicated page yet
    },
    {
        title: "Royal Herbal Compress",
        desc: "Thai herbal pouch massage that soothes muscle tension",
        category: "Traditional",
        icon: "🌺",
        slug: null // No dedicated page yet
    },
    {
        title: "Balinese Therapy",
        desc: "Holistic massage combining acupressure and skin rolling",
        category: "Holistic",
        icon: "🧘‍♀️",
        slug: null // No dedicated page yet
    },
    {
        title: "Aroma Therapy",
        desc: "Calming massage using essential oils tailored to your mood",
        category: "Aromatherapy",
        icon: "🕯️",
        slug: null // No dedicated page yet
    },
    {
        title: "Elements Therapy",
        desc: "Signature blend of techniques to harmonize body and mind",
        category: "Signature",
        icon: "✨",
        slug: null // No dedicated page yet
    },
    {
        title: "Deep Tissue Therapy",
        desc: "Targets deeper muscle layers to relieve chronic aches",
        category: "Therapeutic",
        icon: "💆‍♀️",
        slug: null // No dedicated page yet
    },
    {
        title: "Lomi Lomi Therapy",
        desc: "Traditional Hawaiian healing with flowing wave-like strokes",
        category: "Traditional",
        icon: "🌊",
        slug: null // No dedicated page yet
    },
    {
        title: "Jet Lag Elimination",
        desc: "Body polishing with salts, steam and rejuvenating massage",
        category: "Specialty",
        icon: "✈️",
        slug: null // No dedicated page yet
    },
    {
        title: "Body Wrap Therapy",
        desc: "Full-body exfoliation and wrap for glowing refreshed skin",
        category: "Skincare",
        icon: "🌿",
        slug: null // No dedicated page yet
    },
    {
        title: "Body Scrubs",
        desc: "Gentle exfoliation for smooth, soft, and radiant skin",
        category: "Skincare",
        icon: "🧴",
        slug: null // No dedicated page yet
    },
    {
        title: "Couple Spa",
        desc: "Romantic shared journey with synchronized massages",
        category: "Specialty",
        icon: "💑",
        slug: "couple-massage" // Has dedicated page
    },
];

const categories = ["All", "Traditional", "Classic", "Holistic", "Aromatherapy", "Signature", "Therapeutic", "Specialty", "Skincare"];

export default function Services() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredTherapies = activeCategory === "All"
        ? therapies
        : therapies.filter(t => t.category === activeCategory);

    return (
        <section id="services" className="services-section-new">
            <div className="services-container-new">
                {/* Header */}
                <div className="services-header-new">
                    <span className="services-label-new">OUR OFFERINGS</span>
                    <h2 className="services-title-new">Signature Therapies</h2>
                    <p className="services-subtitle-new">
                        Discover our curated collection of healing treatments designed to restore balance
                    </p>
                </div>

                {/* Category Filter */}
                <div className="category-filter-new">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`category-btn-new ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Therapy Cards Grid */}
                <div className="therapies-grid-new">
                    {filteredTherapies.map((therapy, idx) => (
                        <div key={idx} className="therapy-card-new">
                            <div className="therapy-icon-new">{therapy.icon}</div>
                            <h3 className="therapy-title-new">{therapy.title}</h3>
                            <span className="therapy-category-new">{therapy.category}</span>
                            <p className="therapy-desc-new">{therapy.desc}</p>
                            {therapy.slug ? (
                                <Link href={`/services/${therapy.slug}`} className="therapy-btn-new">
                                    <span>Learn More</span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            ) : (
                                <button className="therapy-btn-new" style={{ opacity: 0.6, cursor: 'not-allowed' }}>
                                    <span>Coming Soon</span>
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}