import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { cacheLife } from "next/dist/server/use-cache/cache-life";
import "@/styles/style.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flaw",
  description: "An AI Lab",
  icons: {
    icon: "/file.svg",
  },
};

async function getCurrentYear() {
  'use cache';
  cacheLife('max');
  return new Date().getFullYear();
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const currentYear = await getCurrentYear();
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children} <Footer currentYear={currentYear} /></body>
    </html>
  );
}