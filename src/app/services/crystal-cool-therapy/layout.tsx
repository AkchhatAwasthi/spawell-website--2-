import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Crystal Cool Therapy - Refreshing Ice & Cream Treatment',
    description: 'Rejuvenating Crystal Cool Therapy at Spa Rituals Kolkata. Rich cream massage combined with refreshing ice treatment for inflammation relief, skin tightening, and energy balance. Book now!',
    keywords: [
        "crystal cool therapy kolkata",
        "ice therapy spa",
        "cooling massage",
        "inflammation relief kolkata",
        "skin tightening treatment",
        "refreshing spa treatment",
        "cream massage kolkata",
        "energy balance therapy",
        "holistic spa kolkata"
    ],
    openGraph: {
        title: 'Crystal Cool Therapy - Refreshing Treatment | Spa Rituals Kolkata',
        description: 'Healing energy with cooling cream and ice elements for balance and holistic wellness.',
        type: 'website',
        url: 'https://sparituals.co.in/services/crystal-cool-therapy',
        images: [
            {
                url: '/assets/images/crystal-therapy.png',
                width: 1200,
                height: 630,
                alt: 'Crystal Cool Therapy at Spa Rituals Kolkata',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Crystal Cool Therapy - Refreshing Treatment | Spa Rituals Kolkata',
        description: 'Revitalizing ice and cream therapy for refreshed skin and energy at Spa Rituals.',
        images: ['/assets/images/crystal-therapy.png'],
    },
    alternates: {
        canonical: 'https://sparituals.co.in/services/crystal-cool-therapy',
    },
};

export default function CrystalCoolTherapyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

