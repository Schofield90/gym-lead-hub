import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
      <head>
        {/* Microsoft Clarity Tracking */}
        <Script id="clarity-tracking" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tocj2dkujp");
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
