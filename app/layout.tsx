import Header from "@/components/Header";
import { Footer } from "@/components/Sections/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import { Inter, Poppins } from "@next/font/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zonify.ai – Footfall Analytics Made Profitable",
  description: "Footfall Analytics Reinvented",
};

const poppins = Poppins({
  subsets: ["latin"], // Adjust subsets based on your needs
  variable: "--font-inter", // Optional: CSS variable for font customization
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
      <body className={`  antialiased`}>
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
