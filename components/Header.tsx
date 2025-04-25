"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react"; // Use an icon library for the hamburger icon
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { NavigationMenuDemo } from "./ui/NavigationMenuDemo";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { industries, solutions } from "@/lib/constants";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

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

  const links: {
    label: string;
    href?: string;
    sublinks?: {
      label: string;
      href: string;
    }[];
  }[] = [
    {
      label: "Solutions",
      sublinks: solutions.map((solution) => ({
        label: solution.title,
        href: solution.href,
      })),
    },
    {
      label: "Industries",
      sublinks: industries.map((industry) => ({
        label: industry.title,
        href: industry.href,
      })),
    },
    {
      label: "About Us",
      href: "/about-us",
    },
    {
      label: "Company",
      sublinks: [
        {
          label: "Blog",
          href: "/company/blog",
        },
        {
          label: "Press",
          href: "/company/press",
        },
      ],
    },
    {
      label: "Legal",
      sublinks: [
        {
          label: "Privacy Policy",
          href: "/legal/privacy",
        },
        {
          label: "Terms of Service",
          href: "/legal/terms",
        },
        {
          label: "Compliance",
          href: "/legal/compliance",
        },
      ],
    },
  ];

  const toggleMenu = (label: string) => {
    setExpandedMenu((prev) => (prev === label ? null : label));
  };

  return (
    <header className="fixed top-0 z-50 py-2 backdrop-blur-[4px] w-screen">
      <div className="flex justify-between items-center  mx-auto md:px-[64px] px-4 sm:px-4 md:px-4 xl-px-[64px] ">
        <Logo />

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild onClick={() => setExpandedMenu("")}>
              <button className="p-2" aria-label="Open menu">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="p-6 flex flex-col h-full bg-white  overflow-y-auto border-none"
            >
              {/* Logo Section */}
              <Logo width={150} height={48} className="ml-[-20px] w-fit" />

              {/* Navigation Links */}
              <nav className="flex flex-col items-start space-y-6 text-lg font-medium w-full mt-8">
                {links.map((link) => (
                  <div key={link.label} className="w-full">
                    <button
                      onClick={() => link.sublinks && toggleMenu(link.label)}
                      className={`flex justify-between items-center w-full hover:text-primary text-left ${
                        expandedMenu === link.label
                          ? "text-primary"
                          : "text-primary/60"
                      } focus:outline-none`}
                      aria-expanded={expandedMenu === link.label}
                      aria-controls={`${link.label}-sublinks`}
                    >
                      <a href={link.href}>
                        <span>{link.label}</span>
                      </a>
                    </button>
                    <AnimatePresence>
                      {expandedMenu === link.label && (
                        <motion.div
                          id={`${link.label}-sublinks`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="mt-2 pl-4 overflow-hidden"
                        >
                          {link.sublinks &&
                            link.sublinks.map((sublink) => (
                              <Link
                                key={sublink.label}
                                href={sublink.href}
                                className="block py-2 hover:text-gray-700"
                                onClick={() => {
                                  setExpandedMenu(null);
                                }}
                              >
                                {sublink.label}
                              </Link>
                            ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Login and CTA Buttons */}
              <div className="w-full flex flex-col items-center space-y-4 mt-auto">
                <Link
                  href="mailto:contact@zonify.ai?subject=Contact%20Us&body=Hello%20there!"
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full text-center rounded-3xl py-6"
                  >
                    Contact
                  </Button>
                </Link>

                <Link
                  href="http://accounts.zonify.ai/sign-in"
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full text-center bg-black text-white rounded-3xl py-6"
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
            <div className="flex items-center space-x-4 ">
              <a
                className="text-sm hover:text-primary/60 active:text-primary/40 "
                href="mailto:contact@zonify.ai?subject=Contact%20Us&body=Hello%20there!"
              >
                Contact
              </a>
              <Link href="http://accounts.zonify.ai/sign-in">
                <Button className="text-sm px-7 py-5 hover:bg-white/60 active:bg-white/40  rounded-3xl">
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
