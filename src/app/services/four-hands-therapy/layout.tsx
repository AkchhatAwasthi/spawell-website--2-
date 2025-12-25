import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Four Hands Massage | Spawell Wellness - Synchronized Therapy',
    description: 'Experience the extraordinary sensation of two therapists working in perfect harmony. Four hands massage creates deep immersive relaxation that transcends ordinary massage.',
    keywords: 'four hands massage, synchronized massage, dual therapist, unique spa experience, deep relaxation, meditative massage',
    openGraph: {
        title: 'Four Hands Massage Therapy - Spawell Wellness',
        description: 'Synchronized harmony by two expert therapists for an extraordinary relaxation experience.',
        type: 'website',
    },
};

export default function FourHandsTherapyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
