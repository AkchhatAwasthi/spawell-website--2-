import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us - Spa Rituals Kolkata | Best Massage & Wellness Center",
    description: "Learn about Spa Rituals Kolkata - your trusted spa for massage, body therapy & wellness. 10+ years experience, expert therapists, clean facilities. Visit us today!",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
