import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hot Stone Therapy - Deep Relaxation & Muscle Relief',
    description: 'Hot Stone Therapy at Spa Rituals Kolkata uses heated stones to melt muscle tension, improve blood flow, relieve stress and promote deep relaxation for mind and body.',
    keywords: [
        "hot stone therapy kolkata",
        "hot stone massage kolkata",
        "deep relaxation massage",
        "muscle tension relief",
        "therapeutic massage kolkata",
        "warm stone therapy",
        "pain relief massage kolkata",
        "stress relief spa kolkata",
        "full body massage kolkata"
    ],
    openGraph: {
        title: 'Hot Stone Therapy - Deep Relaxation | Spa Rituals Kolkata',
        description: 'Experience deep muscle relaxation and stress relief with hot stone therapy.',
        type: 'website',
        url: 'https://sparituals.in/services/hot-stone-therapy',
        images: [
            {
                url: '/assets/images/hot-stone-therapy.jpg',
                width: 1200,
                height: 630,
                alt: 'Hot Stone Therapy at Spa Rituals Kolkata',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Hot Stone Therapy | Spa Rituals Kolkata',
        description: 'Heated stone massage for deep relaxation and muscle relief.',
        images: ['/assets/images/hot-stone-therapy.jpg'],
    },
    alternates: {
        canonical: 'https://sparituals.in/services/hot-stone-therapy',
    },
};

export default function HotStoneTherapyLayout({ children }: { children: React.ReactNode; }) {
    return children;
}
