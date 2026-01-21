import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import Header from "@/components/sections/Header"
import Analytics from "@/components/Analytics"
import "./globals.css"
import Script from "next/script"

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.webp",
  },
  title:
    "Signarama Wetherill Park, Australia | Custom Signs, Banners & Car Wraps",
  description:
    "Professional signage solutions in Wetherill Park, Australia. Custom signs, banners, car wraps & more. Expert design, fast turnaround & competitive pricing.",
  openGraph: {
    type: "website",
    siteName: "Signarama",
    url: "https://www.signaramawetherillpark.com.au",
    title:
      "Signarama Wetherill Park, Australia | Custom Signs, Banners & Car Wraps",
    images: "https://www.signaramawetherillpark.com.au/franchise.webp",
    description:
      "Professional signage solutions in Wetherill Park, Australia. Custom signs, banners, car wraps & more. Expert design, fast turnaround & competitive pricing.",
  },
  alternates: {
    canonical: "https://www.signaramawetherillpark.com.au",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MPH5MMGT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <div className="flex h-screen flex-col">
          <Header />
          {children}
        </div>

        <Analytics />
      </body>
    </html>
  )
}
