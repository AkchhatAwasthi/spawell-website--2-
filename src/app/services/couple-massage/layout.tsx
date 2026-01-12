import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Couple Massage - Romantic Spa Experience for Two',
    description: 'Reconnect with your partner at Spa Rituals Kolkata. Our intimate couple massage features two skilled therapists in a romantic private suite. Perfect for anniversaries, Valentine\'s Day, and special occasions.',
    keywords: [
        "couple massage kolkata",
        "romantic spa kolkata",
        "anniversary spa gift",
        "synchronized massage",
        "couples therapy kolkata",
        "spa for two kolkata",
        "valentines day spa",
        "romantic massage",
        "private suite massage"
    ],
    openGraph: {
        title: 'Couple Massage - Romantic Spa Experience | Spa Rituals Kolkata',
        description: 'Share a peaceful wellness journey with someone special in our intimate couple\'s suite.',
        type: 'website',
        url: 'https://sparituals.co.in/services/couple-massage',
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
        title: 'Couple Massage - Romantic Spa Experience | Spa Rituals Kolkata',
        description: 'Romantic couple massage in our private suite. Perfect for special occasions.',
        images: ['/assets/images/couple-massage.jpg'],
    },
    alternates: {
        canonical: 'https://sparituals.co.in/services/couple-massage',
    },
};

export default function CoupleMassageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

