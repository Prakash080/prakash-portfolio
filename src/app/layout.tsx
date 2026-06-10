import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prakash H — Frontend Engineer | Fintech, Web3 & Scalable Products",
  description:
    "Frontend Engineer with 6+ years building high-performance web & mobile products across fintech, Web3 marketplaces, and ride-hailing — React, Next.js, TypeScript, React Native, Flutter.",
  keywords: [
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    "Flutter",
    "Web3",
    "Fintech",
    "Web3 Marketplace",
    "TailwindCSS",
    "UI Engineer",
    "Prakash H",
  ],
  authors: [{ name: "Prakash H", url: "https://github.com/Prakash080" }],
  creator: "Prakash H",
  metadataBase: new URL("https://hprakash.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Prakash H — Frontend Engineer | Fintech, Web3 & Scalable Products",
    description:
      "Building high-performance web & mobile products across fintech, Web3 marketplaces & ride-hailing. React · Next.js · TypeScript · React Native.",
    siteName: "Prakash H Portfolio",
    images: [{ url: "/ph.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prakash H — Frontend Engineer | Fintech, Web3 & Scalable Products",
    description:
      "Building high-performance web & mobile products across fintech, Web3 marketplaces & ride-hailing. React · Next.js · TypeScript · React Native.",
    images: ["/ph.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080a0f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="antialiased noise">{children}</body>
    </html>
  );
}
