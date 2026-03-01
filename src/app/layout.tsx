import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "NextLearn — AI-Powered Learning Platform",
  description:
    "NextLearn is a next-generation AI-powered education platform. Learn faster, smarter, and more effectively with personalized learning paths.",
  metadataBase: new URL("https://nextlearn.vercel.app"),
  openGraph: {
    type: "website",
    title: "NextLearn — AI-Powered Learning Platform",
    description: "Learn faster and smarter with AI-personalized courses.",
    siteName: "NextLearn",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextLearn — AI-Powered Learning Platform",
    description: "Learn faster and smarter with AI-personalized courses.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="bg-[#0A0A0F] text-[#E8E8F0] font-sans">{children}</body>
    </html>
  );
}
