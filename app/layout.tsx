import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paceheritage.com"),
  title: {
    default: "Pace Heritage | Premium Ice Cream Manufacturing Company",
    template: "%s | Pace Heritage",
  },
  description:
    "Pace Heritage is Nigeria's leading premium ice cream manufacturing company supplying retail ice cream, dry mix, cones, and private label manufacturing across Africa.",
  applicationName: "Pace Heritage",
  keywords: [
    "Pace Heritage",
    "ice cream manufacturing Nigeria",
    "private label ice cream",
    "retail ice cream",
    "dry mix",
    "ice cream cones",
  ],
  authors: [{ name: "Pace Heritage" }],
  creator: "Pace Heritage",
  publisher: "Pace Heritage",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://paceheritage.com",
    siteName: "Pace Heritage",
    title: "Pace Heritage | Premium Ice Cream Manufacturing Company",
    description:
      "Premium ice cream products, manufacturing ingredients, cones, and private label solutions across Nigeria and Africa.",
    images: [
      {
        url: "/images/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Pace Heritage products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pace Heritage | Premium Ice Cream Manufacturing Company",
    description:
      "Premium ice cream products, manufacturing ingredients, cones, and private label solutions across Nigeria and Africa.",
    images: ["/images/hero-image.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
