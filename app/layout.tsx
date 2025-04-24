import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  manifest: "/site.webmanifest",
  title: "portfolio",
  description: "Yosef Abate software developer portfolio",

  openGraph: {
    title: "portfolio",
    description: "Yosef Abate software developer portfolio",
    url: "https://yosefabate.mtechs.io",
    siteName: "portfolio",
    images: [
      {
        url: "https://yosefabate.mtechs.io/yosef.png",
        width: 400,
        height: 400,
      },
    ],
    locale: "en-US",
    type: "website",
  }
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
        <Head>
        <title>Yosef Abate - Software Developer</title>
        <meta name="description" content="Yosef Abate's professional full-stack developer portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {children}
      </body>
    </html>
  );
}
