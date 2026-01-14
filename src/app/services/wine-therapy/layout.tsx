import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Wine Therapy - Skin Rejuvenation & Antioxidant Body Treatment',
    description: 'Wine Therapy at Spa Rituals Kolkata uses antioxidant-rich grape extracts to nourish the skin, improve elasticity, slow aging and enhance complexion with luxurious body treatment techniques.',
    keywords: [
        "wine therapy kolkata",
        "wine spa treatment kolkata",
        "anti aging body treatment",
        "skin rejuvenation spa kolkata",
        "antioxidant body therapy",
        "luxury spa kolkata",
        "skin polishing treatment kolkata",
        "grape extract spa therapy",
        "spa rituals wine therapy"
    ],
    openGraph: {
        title: 'Wine Therapy - Antioxidant Body Treatment | Spa Rituals Kolkata',
        description: 'Indulge in antioxidant-rich wine therapy to enhance skin tone, elasticity and glow.',
        type: 'website',
        url: 'https://sparituals.co.in/services/wine-therapy',
        images: [
            {
                url: '/assets/images/wine-therapy.jpg',
                width: 1200,
                height: 630,
                alt: 'Wine Therapy at Spa Rituals Kolkata',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Wine Therapy | Spa Rituals Kolkata',
        description: 'Antioxidant body treatment for skin rejuvenation and anti-aging.',
        images: ['/assets/images/wine-therapy.jpg'],
    },
    alternates: {
        canonical: 'https://sparituals.co.in/services/wine-therapy',
    },
};

export default function WineTherapyLayout({ children }: { children: React.ReactNode; }) {
    return children;
}
