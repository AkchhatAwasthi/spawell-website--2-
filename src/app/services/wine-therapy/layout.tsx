import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Wine Therapy - Luxury Skin Rejuvenation',
    description: 'Indulge in luxurious wine therapy at Spa Rituals Kolkata. Grape extracts rich in antioxidants, resveratrol, and polyphenols for radiant, youthful skin. Premium anti-aging treatment with visible results.',
    keywords: [
        "wine therapy kolkata",
        "grape extract treatment",
        "resveratrol spa",
        "antioxidant therapy kolkata",
        "anti-aging spa treatment",
        "skin rejuvenation kolkata",
        "polyphenols treatment",
        "luxury spa kolkata",
        "wine facial treatment"
    ],
    openGraph: {
        title: 'Wine Therapy - Luxury Skin Rejuvenation | Spa Rituals Kolkata',
        description: 'Luxurious benefits of wine therapy for radiant, youthful skin with powerful antioxidants.',
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
        title: 'Wine Therapy - Luxury Skin Rejuvenation | Spa Rituals Kolkata',
        description: 'Antioxidant-rich wine therapy for radiant, youthful skin at Spa Rituals.',
        images: ['/assets/images/wine-therapy.jpg'],
    },
    alternates: {
        canonical: 'https://sparituals.co.in/services/wine-therapy',
    },
};

export default function WineTherapyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

