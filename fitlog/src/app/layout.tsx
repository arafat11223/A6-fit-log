import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";

import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FitLogProvider } from "../context/FitLogContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable}`}>
        <FitLogProvider>
          <div className="flex min-h-screen flex-col bg-[#050505] text-white">
            <Navbar />

            <main className="flex-1">{children}</main>

            <Footer />
          </div>
        </FitLogProvider>
      </body>
    </html>
  );
}