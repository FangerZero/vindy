import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import bgImage from "../public/images/bg_page_media.jpg";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
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
  title: "Vindy - By Woldra",
  description:
    "Get information about Vindictus characters and the marketplace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased flex flex-col h-screen`}>
        <Header />
        <main className="mb-auto mx-16 my-8">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
