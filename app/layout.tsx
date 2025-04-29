import Header from "@/components/Header";
import { Footer } from "@/components/Sections/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import React, { Suspense } from "react";
import "./globals.css";
import GoogleAnalytics from "@/components/google-analytics";

export const metadata: Metadata = {
  title: {
    default:
      "Zonify.ai – Cloud-based AI through 2D cameras to understand visitors",
    template: "%s | Zonify.ai",
  },
  description: `Our cloud-based AI solution enables 2D cameras to deliver real-time analytics, helping companies understand visitor behavior, optimize traffic, and enhance everyday operations.`,
  twitter: {
    card: "summary_large_image",
  },
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
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
        >
          <Header />

          <Suspense fallback={null}>
            <GoogleAnalytics GA_MEASUREMENT_ID="G-QED3S3G00L" />
          </Suspense>

          {children}
          <Footer />
          {/* Cookies banner not needed if google analytics is only used to track traffic */}
          {/* <CookieBanner /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
