import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Gym Lead Hub - Scale Your Boutique Gym to 6-Figures",
  description: "Transform your fitness studio into a thriving 6-figure business with our proven lead generation, sales optimization, and scaling strategies for boutique gym owners.",
  keywords: "gym marketing, fitness studio growth, boutique gym scaling, gym lead generation, fitness business consultant",
  openGraph: {
    title: "Gym Lead Hub - Scale Your Boutique Gym to 6-Figures",
    description: "Transform your fitness studio into a thriving 6-figure business with our proven strategies.",
    type: "website",
    url: "https://gym-lead-hub.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gym Lead Hub - Scale Your Boutique Gym to 6-Figures",
    description: "Transform your fitness studio into a thriving 6-figure business with our proven strategies.",
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
        {children}
      </body>
    </html>
  );
}
