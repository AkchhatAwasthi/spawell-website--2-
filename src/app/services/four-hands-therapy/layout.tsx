import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Four Hands Therapy - Deep Synergistic Relaxation',
    description: 'Four Hands Therapy at Spa Rituals Kolkata features two therapists working in synchronized rhythm to relieve stress, ease muscle tension, harmonize energy and promote profound relaxation.',
    keywords: [
        "four hands therapy kolkata",
        "four hand massage kolkata",
        "synchronized massage",
        "luxury massage kolkata",
        "deep relaxation massage kolkata",
        "stress relief spa kolkata",
        "dual therapist massage",
        "holistic wellness spa kolkata",
        "spa rituals four hands therapy"
    ],
    openGraph: {
        title: 'Four Hands Therapy - Synchronized Relaxation | Spa Rituals Kolkata',
        description: 'Experience synchronized massage by two therapists for deeper physical and mental relaxation.',
        type: 'website',
        url: 'https://sparituals.in/services/four-hands-therapy',
        images: [
            {
                url: '/assets/images/four-hands-therapy.jpg',
                width: 1200,
                height: 630,
                alt: 'Four Hands Therapy at Spa Rituals Kolkata',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Four Hands Therapy | Spa Rituals Kolkata',
        description: 'Synchronized dual therapist massage for deep stress relief.',
        images: ['/assets/images/four-hands-therapy.jpg'],
    },
    alternates: {
        canonical: 'https://sparituals.in/services/four-hands-therapy',
    },
};

export default function FourHandsTherapyLayout({ children }: { children: React.ReactNode; }) {
    return children;
}
