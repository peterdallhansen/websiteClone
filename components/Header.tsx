"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { NavigationMenuDemo } from "./ui/NavigationMenuDemo";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { industries, solutions } from "@/lib/constants";
import CookieBanner from "./CookieBanner";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isMobile, setIsMobile] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // controls header slide in/out
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  // NEW: are we scrolled to the very top?
  const [atTop, setAtTop] = useState(true);
  const atTopTimeout = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      // slide header
      if (y > lastScrollY.current && y > 50) {
        setShowHeader(false);
      } else if (y < lastScrollY.current) {
        setShowHeader(true);
      }
      lastScrollY.current = y;

      // track “atTop”
      setAtTop(y < 10);

      const newAtTop = y < 10;
      if (newAtTop !== atTop) {
        // clear any pending toggle
        if (atTopTimeout.current) window.clearTimeout(atTopTimeout.current);
        // schedule the state update after 150ms
        atTopTimeout.current = window.setTimeout(() => {
          setAtTop(newAtTop);
        }, 150);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (atTopTimeout.current) window.clearTimeout(atTopTimeout.current);
    };
  }, [atTop]);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // pick text color class
  const textColorClass =
    isHome && atTop
      ? "text-white hover:text-white/80"
      : "text-black hover:text-primary/60";

  const backgroundClass = isHome && atTop ? "" : "backdrop-blur-[4px]";

  const links = [
    {
      label: "Solutions",
      sublinks: solutions.map((s) => ({ label: s.title, href: s.href })),
    },
    {
      label: "Industries",
      sublinks: industries.map((i) => ({ label: i.title, href: i.href })),
    },
    {
      label: "Company",
      sublinks: [
        { label: "Team", href: "/team" },
        { label: "Careers", href: "/careers" },
        { label: "Partners", href: "/partners" },
      ],
    },
    {
      label: "Legal",
      sublinks: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Compliance", href: "/compliance" },
      ],
    },
  ];

  const toggleMenu = (label: string) =>
    setExpandedMenu((prev) => (prev === label ? null : label));

  return (
    <>
      <AnimatePresence>
        {showHeader && (
          <motion.header
            key="site-header"
            className={`fixed top-0 z-50 w-screen py-2 ${backgroundClass}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex justify-between items-center mx-auto px-4 md:px-[64px] xl:px-[64px]">
              {/* Logo */}
              <Logo variant={isHome && atTop ? "dark" : undefined} />

              {isMobile ? (
                <Sheet
                  open={mobileMenuOpen}
                  onOpenChange={(value) => setMobileMenuOpen(value)}
                >
                  <SheetTrigger asChild onClick={() => setExpandedMenu("")}>
                    <button
                      className={`p-2 ${textColorClass}`}
                      aria-label="Open menu"
                    >
                      <Menu size={24} />
                    </button>
                  </SheetTrigger>
                  <SheetContent
                    side="top"
                    className="p-6 flex flex-col h-full bg-white overflow-y-auto border-none"
                  >
                    {/* inside sheet we assume white background, so reset to black */}
                    <Logo
                      width={150}
                      height={48}
                      className="ml-[-20px] w-fit"
                    />
                    <nav className="flex flex-col items-start space-y-6 text-lg font-medium w-full mt-8">
                      {links.map((link) => (
                        <div key={link.label} className="w-full">
                          <button
                            onClick={() =>
                              link.sublinks && toggleMenu(link.label)
                            }
                            className={`flex justify-between items-center w-full text-left focus:outline-none ${
                              expandedMenu === link.label
                                ? "text-primary"
                                : "text-primary/60"
                            }`}
                            aria-expanded={expandedMenu === link.label}
                            aria-controls={`${link.label}-sublinks`}
                          >
                            {link.href ? (
                              <a
                                href={link.href}
                                onClick={() => {
                                  setExpandedMenu("");
                                  setMobileMenuOpen(false);
                                }}
                              >
                                <span>{link.label}</span>
                              </a>
                            ) : (
                              <span>{link.label}</span>
                            )}
                          </button>
                          <AnimatePresence>
                            {expandedMenu === link.label && (
                              <motion.div
                                id={`${link.label}-sublinks`}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeInOut",
                                }}
                                className="mt-2 pl-4 overflow-hidden"
                              >
                                {link.sublinks?.map((sublink) => (
                                  <Link
                                    key={sublink.label}
                                    href={sublink.href}
                                    className="block py-2 hover:text-gray-700"
                                    onClick={() => {
                                      setExpandedMenu("");
                                      setMobileMenuOpen(false);
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
                    <div className="mt-auto flex flex-col items-center space-y-4 w-full">
                      <Link
                        href="mailto:contact@zonify.ai?subject=Contact%20Us&body=Hello"
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
                  <NavigationMenuDemo linkClassName={textColorClass} />
                  <div className="flex items-center space-x-4">
                    <a
                      href="mailto:contact@zonify.ai?subject=Contact%20Us&body=Hello"
                      className={textColorClass + " text-sm"}
                    >
                      Contact
                    </a>
                    <Link href="http://accounts.zonify.ai/sign-in">
                      <Button
                        className={`text-sm px-7 py-5 rounded-3xl ${
                          isHome && atTop
                            ? "bg-white text-black hover:bg-white/80"
                            : "hover:bg-white/60 active:bg-white/40"
                        }`}
                      >
                        Login
                      </Button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </motion.header>
        )}
      </AnimatePresence>
      <CookieBanner
        textColorClass={isHome && atTop ? "text-white" : "text-primary"}
      />
    </>
  );
}
