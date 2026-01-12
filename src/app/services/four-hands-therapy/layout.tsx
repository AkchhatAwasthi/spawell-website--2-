import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Four Hands Massage - Synchronized Luxury Therapy',
    description: 'Experience extraordinary sensation of two therapists at Spa Rituals Kolkata. Four hands massage creates deep immersive relaxation that transcends ordinary massage. Book your unique spa experience.',
    keywords: [
        "four hands massage kolkata",
        "synchronized massage",
        "dual therapist massage",
        "unique spa experience",
        "deep relaxation kolkata",
        "meditative massage",
        "luxury massage kolkata",
        "premium spa treatment",
        "two therapist massage"
    ],
    openGraph: {
        title: 'Four Hands Massage - Synchronized Therapy | Spa Rituals Kolkata',
        description: 'Synchronized harmony by two expert therapists for an extraordinary relaxation experience.',
        type: 'website',
        url: 'https://sparituals.co.in/services/four-hands-therapy',
        images: [
            {
                url: '/assets/images/four-hands-therapy.jpg',
                width: 1200,
                height: 630,
                alt: 'Four Hands Massage at Spa Rituals Kolkata',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Four Hands Massage - Synchronized Therapy | Spa Rituals Kolkata',
        description: 'Experience two therapists working in perfect harmony at Spa Rituals.',
        images: ['/assets/images/four-hands-therapy.jpg'],
    },
    alternates: {
        canonical: 'https://sparituals.co.in/services/four-hands-therapy',
    },
};

export default function FourHandsTherapyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

