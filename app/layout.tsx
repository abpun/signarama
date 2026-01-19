import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Header from "@/components/sections/Header";
import Analytics from '@/components/Analytics';
import "./globals.css";


const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.webp",
  },
  title: "Signarama | Quality Signs | Banners | Car Wraps",
  description: "Your local Signarama store can help you find, and design, the ideal signage solution for your business.",
  openGraph: {
    type: "website",
    siteName: "Signarama",
    url: "https://www.signaramawetherillpark.com.au",
    title: "Signarama | Quality Signs | Banners | Car Wraps",
    images: "https://www.signaramawetherillpark.com.au/franchise.webp",
    description: "Your local Signarama store can help you find, and design, the ideal signage solution for your business."
  },
  alternates: {
    canonical: "https://www.signaramawetherillpark.com.au",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en">
      <body className={`${openSans.variable} antialiased`}>
        <div className="flex h-screen flex-col">
          <Header />
          {children}
        </div>
        
        <Analytics />
      </body>
    </html>
  );
}
