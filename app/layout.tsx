import Header from "@/components/Header";
import { Footer } from "@/components/Sections/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import { Inter } from "@next/font/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zonify.ai – Pioneering Real-Time Analytics",
  description: "Footfall Analytics Reinvented",
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
      <body className={`  antialiased p-0 `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
