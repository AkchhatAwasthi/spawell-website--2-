import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Couple Massage - Relax & Reconnect Together',
    description: 'Couple Massage at Spa Rituals Kolkata offers a shared wellness experience that relieves stress, harmonizes energy, and strengthens bonding for partners.',
    keywords: [
        "couple massage kolkata",
        "couples spa kolkata",
        "spa for couples kolkata",
        "romantic spa experience kolkata",
        "partner spa therapy kolkata",
        "duo massage kolkata",
        "relaxation for couples",
        "couple pampering session",
        "spa rituals couple massage"
    ],
    openGraph: {
        title: 'Couple Massage - Shared Relaxation | Spa Rituals Kolkata',
        description: 'Relax and rejuvenate together with our premium couple spa experience.',
        type: 'website',
        url: 'https://sparituals.in/services/couple-massage',
        images: [
            {
                url: '/assets/images/couple-massage.jpg',
                width: 1200,
                height: 630,
                alt: 'Couple Massage at Spa Rituals Kolkata',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Couple Massage | Spa Rituals Kolkata',
        description: 'Shared relaxation and wellness for couples.',
        images: ['/assets/images/couple-massage.jpg'],
    },
    alternates: {
        canonical: 'https://sparituals.in/services/couple-massage',
    },
};

export default function CoupleMassageLayout({ children }: { children: React.ReactNode; }) {
    return children;
}
