import { Metadata } from "next";
import ClientLayout from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Audiophile - Premium Audio Equipment",
  description: "Experience natural, life-like audio with our premium speakers, headphones, and earphones",
  keywords: ["speakers", "headphones", "earphones", "premium audio"],
  openGraph: {
    title: "Audiophile - Premium Audio Equipment",
    description: "Experience natural, life-like audio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}