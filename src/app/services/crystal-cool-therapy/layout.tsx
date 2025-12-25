import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Crystal Cool Therapy | Spawell Wellness - Energy Healing & Balance',
    description: 'Harness healing properties of crystals with cooling therapy. Balance chakras, reduce inflammation, promote holistic wellness. Unique blend of energy work and therapeutic cooling.',
    keywords: 'crystal therapy, crystal healing, chakra balancing, energy healing, holistic wellness, cooling therapy, inflammation relief',
    openGraph: {
        title: 'Crystal Cool Therapy - Spawell Wellness',
        description: 'Healing energy with cooling crystal elements for balance and holistic wellness.',
        type: 'website',
    },
};

export default function CrystalCoolTherapyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
