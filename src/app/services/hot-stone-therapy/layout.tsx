import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hot Stone Therapy | Spawell Wellness - Deep Muscle Relaxation',
    description: 'Experience ancient healing with heated volcanic stones. Our hot stone therapy melts away tension, improves circulation, and promotes deep relaxation. Book your session today.',
    keywords: 'hot stone massage, volcanic stone therapy, deep muscle relaxation, stress relief, circulation improvement, spa therapy',
    openGraph: {
        title: 'Hot Stone Therapy - Spawell Wellness',
        description: 'Ancient healing power of smooth, heated volcanic stones for deep muscle relaxation and stress relief.',
        type: 'website',
    },
};

export default function HotStoneTherapyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
