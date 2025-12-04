import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "King Legend, Inc | Hospitality Management Excellence",
  description: "The operational engine of the PVT ecosystem — delivering disciplined hospitality management, data-driven performance, and brand-aligned guest experience across every asset under our care.",
  keywords: ["King Legend", "hospitality management", "PVT Hostel", "KLX-Ops", "asset management", "RevPAR optimization", "hotel operations"],
  authors: [{ name: "King Legend, Inc" }],
  openGraph: {
    title: "King Legend, Inc | Hospitality Management Excellence",
    description: "PVT Hostel builds the frontier. King Legend operationalizes it at scale.",
    type: "website",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
