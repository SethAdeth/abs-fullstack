import type { Metadata } from "next";
import { Playfair_Display, Syne, Inter, JetBrains_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { frFR } from "@clerk/localizations";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CTAFloating from "@/components/layout/CTAFloating";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ABS Corporation™ — Digital Human Branding",
    template: "%s | ABS Corporation™",
  },
  description:
    "Le premier cabinet africain de Digital Human Branding. Transformez votre expertise en actif numérique immortel grâce à l'IA. Avatars IA, Clonage Vocal, Branding 360°.",
  keywords: [
    "digital human branding",
    "avatar IA professionnel",
    "clonage vocal IA",
    "agence IA branding",
    "personal branding Afrique",
    "jumeau numérique professionnel",
    "ABS Corporation",
  ],
  authors: [{ name: "ABS Corporation" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ABS Corporation™",
    title: "ABS Corporation™ — Digital Human Branding",
    description:
      "Le premier cabinet africain de Digital Human Branding. Transformez votre expertise en actif numérique immortel grâce à l'IA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABS Corporation™ — Digital Human Branding",
    description:
      "Le premier cabinet africain de Digital Human Branding. Transformez votre expertise en actif numérique immortel grâce à l'IA.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const isClerkConfigured = clerkPubKey && !clerkPubKey.includes("VOTRE_CLE");

function AuthProvider({ children }: { children: React.ReactNode }) {
  if (isClerkConfigured) {
    return <ClerkProvider localization={frFR}>{children}</ClerkProvider>;
  }
  return <>{children}</>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="fr">
        <body
          className={`${playfair.variable} ${syne.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <CTAFloating />
        </body>
      </html>
    </AuthProvider>
  );
}
