import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Wine Therapy | Spawell Wellness - Antioxidant Skin Rejuvenation',
    description: 'Indulge in luxurious wine therapy with grape extracts and resveratrol. Rich in antioxidants for radiant, youthful skin. Anti-aging treatment with visible results.',
    keywords: 'wine therapy, grape extract treatment, resveratrol, antioxidant therapy, anti-aging spa, skin rejuvenation, polyphenols',
    openGraph: {
        title: 'Wine Therapy - Spawell Wellness',
        description: 'Luxurious benefits of wine therapy for radiant, youthful skin with powerful antioxidants.',
        type: 'website',
    },
};

export default function WineTherapyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
