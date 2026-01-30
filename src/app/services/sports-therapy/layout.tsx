import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sports Therapy - Athletic Recovery & Performance',
    description: 'Sports Therapy at Spa Rituals Kolkata focuses on muscle recovery, performance optimization, injury prevention and deep tissue release for athletes, fitness enthusiasts and active individuals.',
    keywords: [
        "sports therapy kolkata",
        "sports massage kolkata",
        "athletic recovery kolkata",
        "muscle recovery massage",
        "injury prevention massage kolkata",
        "deep tissue massage kolkata",
        "performance enhancement therapy",
        "trigger point therapy kolkata",
        "myofascial release kolkata"
    ],
    openGraph: {
        title: 'Sports Therapy - Athletic Recovery | Spa Rituals Kolkata',
        description: 'Specialized sports massage for performance enhancement, recovery and mobility.',
        type: 'website',
        url: 'https://sparituals.in/services/sports-therapy',
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
        title: 'Sports Therapy | Spa Rituals Kolkata',
        description: 'Therapy for athletes and fitness enthusiasts to improve mobility and recovery.',
        images: ['/assets/images/sports-therapy.jpg'],
    },
    alternates: {
        canonical: 'https://sparituals.in/services/sports-therapy',
    },
};

export default function SportsTherapyLayout({ children }: { children: React.ReactNode; }) {
    return children;
}
