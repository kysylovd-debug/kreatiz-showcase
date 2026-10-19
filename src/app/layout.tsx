import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  JetBrains_Mono,
  Playfair_Display,
  Space_Grotesk,
  Cormorant_Garamond,
  Syne,
  Instrument_Sans,
} from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KREATIZ — Création de sites web sur-mesure, SEO local & Publicité pour commerces",
  description:
    "Studio digital artisanal pour commerçants et artisans. Création de sites web sur-mesure au design singulier, référencement Google local #1 et publicité locale ciblée qui attire de vrais clients dans votre établissement.",
  keywords: [
    "création site web commerce",
    "site internet artisan",
    "SEO local Google",
    "studio web artisanal",
    "KREATIZ",
    "site vitrine boucherie",
    "site salon de coiffure",
    "site restaurant bistrot",
    "publicité commerce local",
  ],
  authors: [{ name: "KREATIZ Studio" }],
  openGraph: {
    title: "KREATIZ — Création de sites web sur-mesure, SEO local & Publicité pour commerces",
    description:
      "Nous prenons soin de l'image de votre commerce avec la même exigence que si c'était le nôtre. Zéro modèle tout fait, zéro jargon, accompagnement complet clé en main.",
    type: "website",
    locale: "fr_FR",
    siteName: "KREATIZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "KREATIZ — Studio Web Artisanal pour Commerçants",
    description: "Sites d'artisanat digital, référencement local et publicité ciblée sans jargon.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} ${spaceGrotesk.variable} ${cormorantGaramond.variable} ${syne.variable} ${instrumentSans.variable} h-full antialiased`}
    >
      <body className="h-full w-full bg-[#FFFFFF] text-[#0A0B0E] font-sans overflow-hidden select-none">
        {children}
      </body>
    </html>
  );
}
