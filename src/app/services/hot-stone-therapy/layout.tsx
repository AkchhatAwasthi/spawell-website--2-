import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hot Stone Therapy - Deep Muscle Relaxation',
    description: 'Experience ancient healing with heated volcanic stones at Spa Rituals Kolkata. Our hot stone therapy melts away tension, improves circulation, and promotes deep relaxation. Book your 90-minute session today!',
    keywords: [
        "hot stone therapy kolkata",
        "hot stone massage",
        "volcanic stone massage",
        "deep muscle relaxation",
        "heat therapy spa",
        "stress relief massage kolkata",
        "chronic pain massage",
        "muscle tension therapy",
        "circulation improvement massage"
    ],
    openGraph: {
        title: 'Hot Stone Therapy - Deep Muscle Relaxation | Spa Rituals Kolkata',
        description: 'Ancient healing power of smooth, heated volcanic stones for deep muscle relaxation and stress relief.',
        type: 'website',
        url: 'https://sparituals.co.in/services/hot-stone-therapy',
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
        title: 'Hot Stone Therapy - Deep Muscle Relaxation | Spa Rituals Kolkata',
        description: 'Experience the ancient healing power of heated volcanic stones at Spa Rituals.',
        images: ['/assets/images/hot-stone-therapy.jpg'],
    },
    alternates: {
        canonical: 'https://sparituals.co.in/services/hot-stone-therapy',
    },
};

export default function HotStoneTherapyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

