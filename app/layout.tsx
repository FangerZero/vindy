import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/component/header";
import Footer from "@/component/footer";
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
      <body className={` antialiased`}>
        <Header />
        {children}
      </body>
      <Footer />
    </html>
  );
}
