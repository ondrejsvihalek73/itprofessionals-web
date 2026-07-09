import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.itprofessionals.cz"),
  title: "IT Professionals — Software development & digital consulting",
  description:
    "Adaptation and innovation are the only ways to carry weight in the digital economy. IT Professionals turns the challenges and new rules of the game into your advantage.",
  openGraph: {
    title: "IT Professionals",
    description:
      "Software development and digital consulting for the new economy — AI, IoT, Industry 4.0, product and UX.",
    url: "https://www.itprofessionals.cz",
    siteName: "IT Professionals",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "IT Professionals",
    description:
      "Software development and digital consulting for the new economy.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-ink font-sans antialiased">{children}</body>
    </html>
  );
}
