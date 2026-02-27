import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextLearn — AI-Powered Learning Platform",
  description:
    "NextLearn is a next-generation AI-powered education platform. Learn faster, smarter, and more effectively with personalized learning paths and real-time feedback.",
  keywords: [
    "online learning",
    "AI education",
    "e-learning",
    "courses",
    "NextLearn",
  ],
  authors: [{ name: "NextLearn Team" }],
  creator: "NextLearn",
  metadataBase: new URL("https://nextlearn.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextlearn.vercel.app",
    title: "NextLearn — AI-Powered Learning Platform",
    description:
      "Learn faster and smarter with AI-personalized courses. 120K+ students trust NextLearn.",
    siteName: "NextLearn",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NextLearn Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextLearn — AI-Powered Learning Platform",
    description: "Learn faster and smarter with AI-personalized courses.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-brand-bg text-brand-text font-body antialiased">
        {children}
      </body>
    </html>
  );
}
