import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us - Book Spa Appointment",
    description: "Contact Spa Rituals Kolkata to book your spa appointment. Call us at +91 83369 15555 or visit us at Salt Lake City Centre, Kolkata. Easy WhatsApp booking available. Open Mon-Sun 10AM-9PM.",
    keywords: [
        "contact spa rituals",
        "book spa appointment kolkata",
        "spa phone number kolkata",
        "spa address kolkata",
        "salt lake spa contact",
        "spa booking kolkata",
        "spa whatsapp booking",
        "massage appointment kolkata",
        "spa near city centre kolkata"
    ],
    openGraph: {
        title: "Contact Spa Rituals Kolkata - Book Your Appointment",
        description: "Contact Spa Rituals Kolkata to book your spa appointment. Call us or book easily through WhatsApp. Open Mon-Sun 10AM-9PM.",
        url: "https://sparituals.in/contact",
        images: [
            {
                url: "/assets/images/spa-hero-1.jpg",
                width: 1200,
                height: 630,
                alt: "Contact Spa Rituals Kolkata",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Spa Rituals Kolkata - Book Your Appointment",
        description: "Contact Spa Rituals Kolkata to book your spa appointment. Easy booking through WhatsApp.",
        images: ["/assets/images/spa-hero-1.jpg"],
    },
    alternates: {
        canonical: "https://sparituals.in/contact",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
