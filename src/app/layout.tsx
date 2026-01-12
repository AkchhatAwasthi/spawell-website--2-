import type { Metadata } from "next";
import { Playfair_Display, Poppins, Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import "./new-components.css";
import "./stat-highlight.css";
import "./mission-vision.css";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"], variable: '--font-playfair' });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: '--font-poppins' });
const montserrat = Montserrat({ subsets: ["latin"], variable: '--font-montserrat' });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "600"], variable: '--font-cormorant' });

export const metadata: Metadata = {
  metadataBase: new URL('https://sparituals.co.in'),
  title: {
    default: "Spa Rituals Kolkata - Best Spa & Massage Center | Body Therapy & Wellness",
    template: "%s | Spa Rituals Kolkata"
  },
  description: "Visit Spa Rituals in Kolkata for relaxing massage, body therapy, and wellness treatments. Expert therapists, clean rooms, affordable prices. Book your spa appointment today!",
  keywords: [
    "spa kolkata",
    "massage kolkata",
    "body massage kolkata",
    "spa near me",
    "best spa in kolkata",
    "wellness center kolkata",
    "relaxation spa",
    "hot stone therapy kolkata",
    "couple massage kolkata",
    "sports massage kolkata",
    "wine therapy spa",
    "four hands massage",
    "crystal therapy kolkata",
    "salt lake spa",
    "body therapy",
    "stress relief massage",
    "deep tissue massage kolkata"
  ],
  authors: [{ name: "Spa Rituals Kolkata" }],
  creator: "Spa Rituals Kolkata",
  publisher: "Spa Rituals Kolkata",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sparituals.co.in",
    siteName: "Spa Rituals Kolkata",
    title: "Spa Rituals Kolkata - Best Spa & Massage Center",
    description: "Visit Spa Rituals in Kolkata for relaxing massage, body therapy, and wellness treatments. Expert therapists, clean rooms, affordable prices.",
    images: [
      {
        url: "/assets/images/spa-hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Spa Rituals Kolkata - Premium Spa & Wellness Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Rituals Kolkata - Best Spa & Massage Center",
    description: "Visit Spa Rituals in Kolkata for relaxing massage, body therapy, and wellness treatments. Expert therapists, clean rooms, affordable prices.",
    images: ["/assets/images/spa-hero-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "jPC2UP2ORtOI3BZPEdOGk4kisFkO755PHtbqpx-12JY",
  },
  alternates: {
    canonical: "https://sparituals.co.in",
  },
  category: "Health & Wellness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} ${montserrat.variable} ${cormorant.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/css/lightbox.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
