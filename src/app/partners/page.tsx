import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PartnersHero from '@/components/PartnersHero';
import PartnerIntro from '@/components/PartnerIntro';
import PartnershipBenefits from '@/components/PartnershipBenefits';
import MemberBenefits from '@/components/MemberBenefits';
import BrandTrust from '@/components/BrandTrust';
import PartnersCTA from '@/components/PartnersCTA';

export const metadata = {
    title: 'Our Partners - Spa Rituals Kolkata | Wellness Partnerships',
    description: 'Spa Rituals partners with trusted wellness brands to bring you the best spa and massage services in Kolkata. Quality products, expert care, affordable prices.',
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
