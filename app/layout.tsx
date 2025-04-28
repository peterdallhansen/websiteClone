import Analytics from "@/components/analytics.client";
import Header from "@/components/Header";
import { Footer } from "@/components/Sections/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import { Inter } from "@next/font/google";
import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zonify.ai – Cloud-based AI through 2D cameras to understand visitors",
  description: `Our cloud-based AI solution enables 2D cameras to deliver real-time analytics, helping companies understand visitor behavior, optimize traffic, and enhance everyday operations.`,
};

const inter = Inter({
  subsets: ["latin"], // Adjust subsets based on your needs
  variable: "--font-inter", // Optional: CSS variable for font customization
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, "scroll-smooth")}>
      <body className={`  antialiased   p-0  `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="light"
        >
          <Header />

          <Analytics />

          {children}
          <Footer />
          {/* Cookies banner not needed if google analytics is only used to track traffic */}
          {/* <CookieBanner /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
