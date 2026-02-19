import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import BespokeModal from "@/components/BespokeModal";
import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luxzy Bespoke – Handcrafted Perfection",
  description:
    "Experience the epitome of bespoke craftsmanship with Luxzy Bespoke. Handcrafted in Lagos, our limited pre-order collection offers unparalleled quality and timeless elegance. Discover your perfect fit today.",
  keywords: [
    "Bespoke Shoes",
    "Luxury Footwear",
    "Handcrafted",
    "Lagos",
    "Pre-Order",
  ],
  authors: [{ name: "Luxzy Bespoke", url: "https://luxzybespoke.com" }],
  creator: "Luxzy Bespoke",
  icons: {
    icon: "/logo.ico",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Luxzy Bespoke – Handcrafted Perfection",
    description:
      "Experience the epitome of bespoke craftsmanship with Luxzy Bespoke. Handcrafted in Lagos, our limited pre-order collection offers unparalleled quality and timeless elegance. Discover your perfect fit today.",
    url: "https://luxzybespoke.com",
    siteName: "Luxzy Bespoke",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Luxzy Bespoke",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxzy Bespoke – Handcrafted Perfection",
    description:
      "Experience the epitome of bespoke craftsmanship with Luxzy Bespoke. Handcrafted in Lagos, our limited pre-order collection offers unparalleled quality and timeless elegance. Discover your perfect fit today.",
    images: ["/logo.jpg"],
    creator: "@LuxzyBespoke",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollProgress />
        <Navbar />
        <CartDrawer />
        <BespokeModal />
        {children}
        <Footer />
      </body>
    </html>
  );
}
