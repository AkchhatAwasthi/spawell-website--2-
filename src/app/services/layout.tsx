import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Our Services - Signature Spa Therapies",
    description: "Explore our signature spa therapies at Spa Rituals Kolkata. Hot Stone Therapy, Couple Massage, Wine Therapy, Sports Massage, Four Hands Massage, and Crystal Cool Therapy. Book your relaxation session today!",
    keywords: [
        "spa services kolkata",
        "massage services",
        "hot stone massage",
        "couple massage kolkata",
        "wine therapy spa",
        "sports massage",
        "four hands massage",
        "crystal therapy",
        "signature therapies",
        "body massage services",
        "spa treatments kolkata",
        "relaxation massage",
        "deep tissue massage",
        "wellness treatments"
    ],
    openGraph: {
        title: "Spa Services - Signature Therapies at Spa Rituals Kolkata",
        description: "Explore our signature spa therapies. Hot Stone, Couple Massage, Wine Therapy, Sports Massage, Four Hands & Crystal Cool Therapy.",
        url: "https://sparituals.co.in/services",
        images: [
            {
                url: "/assets/images/spa-hero-1.jpg",
                width: 1200,
                height: 630,
                alt: "Spa Rituals Kolkata - Signature Therapies",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Spa Services - Signature Therapies at Spa Rituals Kolkata",
        description: "Explore our premium signature spa therapies at Spa Rituals Kolkata.",
        images: ["/assets/images/spa-hero-1.jpg"],
    },
    alternates: {
        canonical: "https://sparituals.co.in/services",
    },
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
