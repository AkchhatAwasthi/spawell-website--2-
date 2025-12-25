import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sports Therapy | Spawell Wellness - Athletic Recovery & Performance',
    description: 'Specialized sports massage for athletes and active individuals. Enhance performance, accelerate recovery, prevent injuries. Deep tissue, trigger point, and myofascial release techniques.',
    keywords: 'sports massage, athletic recovery, sports therapy, deep tissue massage, injury prevention, muscle recovery, performance enhancement',
    openGraph: {
        title: 'Sports Therapy - Spawell Wellness',
        description: 'Athletic recovery and performance enhancement through specialized massage techniques.',
        type: 'website',
    },
};

export default function SportsTherapyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
