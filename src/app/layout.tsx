/// <reference types="next" />
import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito_Sans} from "next/font/google";
import { AudioProvider } from "../app/components/AudioProvider";

// @ts-ignore
import "./globals.css";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

 // World Cup theme ends after July 20, 2026
const today = new Date();
const worldCupEnd = new Date("2026-07-20T23:59:59");

const isWorldCupTheme = today <= worldCupEnd;

export const metadata: Metadata = {
  title:  ` ${isWorldCupTheme ? "Wordigon (World Cup Edition)" : "Wordigon"}`,
  description: "Soccer themed word puzzle game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AudioProvider>
        {children}
        </AudioProvider>
      </body>
    </html>
  );
}
