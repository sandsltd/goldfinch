import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Goldfinch Representation Ltd - Premium Electronics Components",
  description: "Specialising in sourcing and distributing premium electronic components from leading USA manufacturers to the UK and European markets. Trusted expertise with the precision of nature's finest songbird.",
  openGraph: {
    title: "Goldfinch Representation Ltd - Premium Electronics Components",
    description: "Specialising in sourcing and distributing premium electronic components from leading USA manufacturers to the UK and European markets.",
    url: "https://goldfinchrepresentation.com",
    siteName: "Goldfinch Representation Ltd",
    images: [
      {
        url: "/goldfinch/European Goldfinch.png",
        width: 1200,
        height: 630,
        alt: "Goldfinch Representation Ltd - European Goldfinch Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goldfinch Representation Ltd - Premium Electronics Components",
    description: "Specialising in sourcing and distributing premium electronic components from leading USA manufacturers to the UK and European markets.",
    images: ["/goldfinch/European Goldfinch.png"],
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
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
