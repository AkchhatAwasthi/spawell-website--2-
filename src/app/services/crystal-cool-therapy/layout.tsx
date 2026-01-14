import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Crystal Cool Therapy - Cooling Facial Rejuvenation',
    description: 'Crystal Cool Therapy at Spa Rituals Kolkata offers a soothing cooling massage that reduces puffiness, tones skin, improves circulation, and promotes facial rejuvenation with crystal-infused tools.',
    keywords: [
        "crystal cool therapy",
        "cooling facial massage kolkata",
        "face massage spa kolkata",
        "facial rejuvenation kolkata",
        "cryotherapy facial",
        "spiritual facial massage",
        "puffiness reduction facial",
        "skin tightening massage kolkata",
        "crystal facial therapy"
    ],
    openGraph: {
        title: 'Crystal Cool Therapy - Cooling Facial Massage | Spa Rituals Kolkata',
        description: 'Experience cooling facial rejuvenation with crystal therapy for toned, refreshed and glowing skin.',
        type: 'website',
        url: 'https://sparituals.co.in/services/crystal-cool-therapy',
        images: [
            {
                url: '/assets/images/crystal-cool-therapy.jpg',
                width: 1200,
                height: 630,
                alt: 'Crystal Cool Therapy at Spa Rituals Kolkata',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Crystal Cool Therapy | Spa Rituals Kolkata',
        description: 'Cooling crystal facial massage for rejuvenation, toning and glow.',
        images: ['/assets/images/crystal-cool-therapy.jpg'],
    },
    alternates: {
        canonical: 'https://sparituals.co.in/services/crystal-cool-therapy',
    },
};

export default function CrystalCoolTherapyLayout({ children }: { children: React.ReactNode; }) {
    return children;
}
