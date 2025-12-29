import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us - Book Spa Appointment in Kolkata | Spa Rituals",
    description: "Book your spa appointment at Spa Rituals Kolkata. Call +91 83369 15555 or visit us for massage, body therapy & wellness treatments. Open Mon-Sun 10AM-9PM.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
