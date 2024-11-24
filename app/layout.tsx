import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Inter } from "@next/font/google";

export const metadata: Metadata = {
  title: "Zonify.ai",
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
    <html lang="en" className={inter.variable}>
      <body className={` antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
