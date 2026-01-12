import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sports Therapy - Athletic Recovery & Performance',
    description: 'Specialized sports massage at Spa Rituals Kolkata for athletes and fitness enthusiasts. Enhance performance, accelerate recovery, prevent injuries with deep tissue, trigger point, and myofascial release techniques.',
    keywords: [
        "sports massage kolkata",
        "athletic recovery kolkata",
        "sports therapy",
        "deep tissue massage kolkata",
        "injury prevention massage",
        "muscle recovery spa",
        "performance enhancement",
        "trigger point therapy",
        "myofascial release kolkata"
    ],
    openGraph: {
        title: 'Sports Therapy - Athletic Recovery | Spa Rituals Kolkata',
        description: 'Athletic recovery and performance enhancement through specialized massage techniques.',
        type: 'website',
        url: 'https://sparituals.co.in/services/sports-therapy',
        images: [
            {
                url: '/assets/images/sports-therapy.jpg',
                width: 1200,
                height: 630,
                alt: 'Sports Therapy at Spa Rituals Kolkata',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sports Therapy - Athletic Recovery | Spa Rituals Kolkata',
        description: 'Specialized sports massage for athletes at Spa Rituals Kolkata.',
        images: ['/assets/images/sports-therapy.jpg'],
    },
    alternates: {
        canonical: 'https://sparituals.co.in/services/sports-therapy',
    },
};

export default function SportsTherapyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

