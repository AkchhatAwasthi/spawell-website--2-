import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Couple Massage | Spawell Wellness - Shared Relaxation Experience',
    description: 'Reconnect with your partner through our intimate couple massage. Two skilled therapists provide synchronized massages in a romantic private suite. Perfect for anniversaries and special occasions.',
    keywords: 'couple massage, romantic spa, anniversary gift, synchronized massage, couples therapy, spa for two',
    openGraph: {
        title: 'Couple Massage - Spawell Wellness',
        description: 'Share a peaceful wellness journey with someone special in our intimate couple\'s suite.',
        type: 'website',
    },
};

export default function CoupleMassageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
