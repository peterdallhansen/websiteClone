"use client";

import { Menu } from "lucide-react"; // Use an icon library for the hamburger icon
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { NavigationMenuDemo } from "./ui/NavigationMenuDemo";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile screen size
  useEffect(() => {
    // Function to update `isMobile` based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check and add event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed top-0 z-50 py-3 backdrop-blur w-screen">
      <div className="flex justify-between items-center  mx-auto md:px-[64px] px-4 sm:px-4 md:px-4 xl-px-[64px] ">
        <Logo />

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="bottom"
              className="p-6 flex flex-col items-left space-y-4"
            >
              {/* Logo Section */}
              <Logo width={200} height={48} />

              {/* Navigation Links */}
              <nav className="flex flex-col items-left space-y-4 text-lg font-medium">
                <Link href="/" className="hover:text-gray-700">
                  Case Studies
                </Link>
                <Link href="/#features" className="hover:text-gray-700">
                  Features
                </Link>
                <Link
                  href="https://docs.zonify.ai"
                  className="hover:text-gray-700"
                >
                  Documentation
                </Link>
              </nav>

              {/* Login and CTA Buttons */}
              <div className="w-full flex flex-col items-center space-y-4 ">
                <Link
                  href="mailto:contact@zonify.ai?subject=Contact%20Us&body=Hello%20there!"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full text-center">
                    Contact
                  </Button>
                </Link>

                <Link
                  href="http://accounts.zonify.ai/sign-in"
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full text-center bg-accent"
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <>
            <NavigationMenuDemo />
            <div className="flex items-center space-x-4">
              <a
                className="text-sm"
                href="mailto:contact@zonify.ai?subject=Contact%20Us&body=Hello%20there!"
              >
                Contact
              </a>
              <Link href="http://accounts.zonify.ai/sign-in">
                <Button
                  variant="outline"
                  className="text-sm px-6 py-5 hover:bg-secondary/80"
                >
                  Login
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
