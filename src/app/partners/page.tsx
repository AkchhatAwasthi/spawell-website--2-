import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PartnersHero from '@/components/PartnersHero';
import PartnerIntro from '@/components/PartnerIntro';
import PartnershipBenefits from '@/components/PartnershipBenefits';
import MemberBenefits from '@/components/MemberBenefits';
import BrandTrust from '@/components/BrandTrust';
import PartnersCTA from '@/components/PartnersCTA';

export const metadata = {
    title: 'Our Partners - Premium Wellness Partnerships',
    description: 'Spa Rituals partners with trusted wellness brands to bring you the best spa and massage services in Kolkata. Quality products, expert care, affordable prices.',
    keywords: [
        "spa rituals partners",
        "wellness partnerships kolkata",
        "spa brands kolkata",
        "premium spa products",
        "corporate wellness partners",
        "spa collaboration",
        "wellness brands"
    ],
    openGraph: {
        title: 'Our Partners - Spa Rituals Kolkata',
        description: 'We partner with trusted wellness brands to bring you the best spa and massage services.',
        url: 'https://sparituals.in/partners',
        images: [
            {
                url: '/assets/images/spa-hero-1.jpg',
                width: 1200,
                height: 630,
                alt: 'Spa Rituals Kolkata Partners',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Our Partners - Spa Rituals Kolkata',
        description: 'Trusted wellness partnerships for premium spa services.',
        images: ['/assets/images/spa-hero-1.jpg'],
    },
    alternates: {
        canonical: 'https://sparituals.in/partners',
    },
};

export default function PartnersPage() {
    return (
        <main>
            <Navbar />
            <PartnersHero />
            <PartnerIntro />
            <PartnershipBenefits />
            <MemberBenefits />
            <BrandTrust />
            <PartnersCTA />
            <Footer />

            <div className="floating-buttons">
                <a href="https://wa.me/918336915555" className="whatsapp-float" target="_blank" aria-label="Chat on WhatsApp">
                    <img src="/assets/images/whatsapp-icon.svg" alt="WhatsApp" />
                </a>
                <a href="tel:+918336915555" className="call-float" aria-label="Call Us">
                    <img src="/assets/images/phone-icon.svg" alt="Call Us" />
                </a>
            </div>
        </main>
    );
}
