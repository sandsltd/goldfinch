import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Goldfinch Representation Ltd - Premium Electronics Components",
  description: "Specialising in sourcing and distributing premium electronic components from leading USA manufacturers to the UK and European markets. Trusted expertise with the precision of nature's finest songbird.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
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
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
