import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import EnhancedNavbar from "./components/EnhancedNavbar";
import ContactFab from "./components/ContactFab";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "EZU Construction - Custom Homes & Renovations in Toronto",
    template: "%s | EZU Construction"
  },
  description: "Award-winning custom home builders and renovation specialists in Toronto. Specializing in custom homes, kitchen renovations, bathroom remodels, and home additions. Licensed, insured, and 5-star rated.",
  keywords: [
    "custom homes toronto",
    "home renovations toronto",
    "kitchen renovation toronto",
    "bathroom renovation toronto",
    "home additions toronto",
    "custom home builders toronto",
    "renovation contractors toronto",
    "luxury home builders",
    "home remodeling toronto",
    "construction company toronto",
    "EZU Construction"
  ],
  authors: [{ name: "EZU Construction" }],
  creator: "EZU Construction",
  publisher: "EZU Construction",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ezuconstruction.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EZU Construction - Custom Homes & Renovations in Toronto",
    description: "Award-winning custom home builders and renovation specialists in Toronto. Transform your dream home into reality with our expert craftsmanship.",
    url: "https://ezuconstruction.com",
    siteName: "EZU Construction",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EZU Construction - Custom Homes and Renovations",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EZU Construction - Custom Homes & Renovations in Toronto",
    description: "Award-winning custom home builders and renovation specialists in Toronto. Transform your dream home into reality.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <head>
        <link rel="canonical" href="https://ezuconstruction.com" />
        <link rel="alternate" hrefLang="en" href="https://ezuconstruction.com" />
        <link rel="alternate" hrefLang="en-ca" href="https://ezuconstruction.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <EnhancedNavbar />
        {children}
        <ContactFab />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
