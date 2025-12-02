"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LucideArrowUpRight, LucideExternalLink, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import CookieBanner from "./CookieBanner";
import { industries, solutions, navigation } from "@/lib/constants";

// NOTE: Original 'solutions' and 'industries' imports are removed as they are replaced by the new navLinks structure.
// You can adapt your original data into this new structure if needed.

export default function Header() {
  const pathname = usePathname();
  const isHome = ["/", "/news"].includes(pathname);

  const [isMobile, setIsMobile] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  const [atTop, setAtTop] = useState(true);
  const atTopTimeout = useRef<number | null>(null);

  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  let hoverTimeout = useRef<number | null>(null);

  // --- MODIFIED: Using your original links within the new grouped structure ---

  // Use the unified navigation configuration
  const navLinks = navigation;

  const currentHoveredLinkData = navLinks.find(
    (link) => link.label === hoveredLink
  );

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      if (y > lastScrollY.current && y > 50) {
        setShowHeader(false);
      } else if (y < lastScrollY.current) {
        setShowHeader(true);
      }
      lastScrollY.current = y;

      setAtTop(y < 10);

      const newAtTop = y < 10;
      if (newAtTop !== atTop) {
        if (atTopTimeout.current) window.clearTimeout(atTopTimeout.current);
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

  const textColorClass =
    isHome && atTop
      ? "text-white hover:text-white/80"
      : "text-black hover:text-primary/60";

  const hoverTextColorClass = isHovering ? "text-white" : textColorClass;

  const onHover = (link: string) => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }
    setHoveredLink(link);
    setIsHovering(true);
  };

  const onHoverEnd = () => {
    hoverTimeout.current = window.setTimeout(() => {
      setIsHovering(false);
      setHoveredLink(null);
    }, 100); // Small delay to prevent flickering
  };

  const getHeaderHeight = () => {
    if (!isHovering || !currentHoveredLinkData?.sublinkGroups) return 60;

    const groups = currentHoveredLinkData.sublinkGroups;
    const maxLinksInGroup = Math.max(...groups.map((g) => g.links.length));

    // Each group is in a 2-column grid, so number of rows = ceil(groups.length / 2)
    const rows = Math.ceil(groups.length / 3);

    // Base height (header) + vertical paddings + per-row height
    // Adjust row height for link + title spacing
    const base = 60; // top nav
    const padding = 40; // padding from pt-8 pb-12
    const rowHeight = 36 * (maxLinksInGroup + 1); // link height + title space
    const totalHeight = base + padding + rows * rowHeight;

    return totalHeight; // cap at 600px
  };

  return (
    <>
      <AnimatePresence>
        {showHeader && (
          <motion.header
            key="site-header"
            className={`fixed top-0 z-50 w-screen overflow-hidden ${
              isHome && atTop ? "" : "backdrop-blur-[4px]"
            }`}
            initial={{
              y: -100,
              opacity: 0,
              height: 60,
              backgroundColor: "rgba(0,0,0,0)",
            }}
            animate={{
              y: 0,
              opacity: 1,
              height: getHeaderHeight(),
              backgroundColor:
                isHovering && currentHoveredLinkData?.sublinkGroups
                  ? "rgba(10,10,10,0.9)"
                  : "rgba(0,0,0,0)",
            }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onHoverEnd={onHoverEnd}
          >
            {/* --- REFACTORED: Use a 3-column grid for proper centering --- */}
            <div className="grid grid-cols-2 md:grid-cols-3 items-center mx-auto px-2 h-[60px]">
              {/* Left: Logo */}
              <div className="justify-self-start">
                <Logo
                  variant={(isHome && atTop) || isHovering ? "dark" : "light"}
                />
              </div>

              {/* Center: Desktop Navigation */}
              {!isMobile && (
                <nav className="justify-self-center flex items-center gap-8 h-[60px]">
                  {navLinks.map((link) => (
                    <div
                      key={link.label}
                      className="relative h-full flex items-center"
                      onMouseEnter={() => onHover(link.label)}
                    >
                      <Link
                        href={link.href || "#"}
                        className={`text-sm font-medium transition-colors ${
                          isHovering
                            ? hoveredLink === link.label
                              ? "text-white"
                              : "text-white/60 hover:text-white"
                            : isHome && atTop
                            ? "text-white hover:text-white/80"
                            : "text-black hover:text-black/60"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </div>
                  ))}
                </nav>
              )}

              {/* Right: Buttons or Mobile Menu */}
              <div className="justify-self-end">
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
                      <Logo
                        width={150}
                        height={48}
                        className="fixed top-0 left-0 w-fit"
                      />

                      <nav className="flex flex-col items-start space-y-6 text-lg font-medium w-full mt-16">
                        {navLinks.map((link) => (
                          <div key={link.label} className="w-full">
                            <button
                              onClick={() =>
                                link.sublinkGroups &&
                                setExpandedMenu(
                                  expandedMenu === link.label
                                    ? null
                                    : link.label
                                )
                              }
                              className={`flex justify-between items-center w-full text-left focus:outline-none ${
                                expandedMenu === link.label || !expandedMenu
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
                                    setExpandedMenu(null);
                                    setMobileMenuOpen(false);
                                  }}
                                >
                                  <span className="text-xl font-semibold">
                                    {link.label}
                                  </span>
                                </a>
                              ) : (
                                <span className="text-xl font-semibold">
                                  {link.label}
                                </span>
                              )}
                            </button>

                            <AnimatePresence>
                              {expandedMenu === link.label &&
                                link.sublinkGroups && (
                                  <motion.div
                                    id={`${link.label}-sublinks`}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      ease: "easeInOut",
                                    }}
                                    className="mt-2 pl-4 overflow-hidden flex flex-col space-y-2"
                                  >
                                    {link.sublinkGroups.map((group) => (
                                      <div key={group.title} className="w-full">
                                        {group.title && (
                                          <h4 className="text-sm font-medium text-gray-400 mb-2">
                                            {group.title}
                                          </h4>
                                        )}
                                        <div className="flex flex-col space-y-2">
                                          {group.links.map((sublink) => (
                                            <Link
                                              key={sublink.label}
                                              href={sublink.href}
                                              target={
                                                sublink.external
                                                  ? "_blank"
                                                  : undefined
                                              }
                                              rel={
                                                sublink.external
                                                  ? "noopener noreferrer"
                                                  : undefined
                                              }
                                              className="block py-1 text-base font-normal text-black hover:text-gray-700"
                                              onClick={() => {
                                                setExpandedMenu(null);
                                                setMobileMenuOpen(false);
                                              }}
                                            >
                                              {sublink.label}
                                            </Link>
                                          ))}
                                        </div>
                                        <hr className="my-2 border-gray-200" />
                                      </div>
                                    ))}
                                  </motion.div>
                                )}
                            </AnimatePresence>
                            <hr className="my-2 border-gray-300 w-full" />
                          </div>
                        ))}
                      </nav>

                      <div className="mt-auto flex flex-col items-center space-y-4 w-full">
                        <Link href="/contact" className="w-full">
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
                  <div className="flex items-center h-[60px]">
                    <Link href="/contact">
                      <Button variant="link" className={hoverTextColorClass}>
                        Contact
                      </Button>
                    </Link>
                    <Link href={"http://accounts.zonify.ai/sign-in"}>
                      <Button variant="link" className={hoverTextColorClass}>
                        Analytics Hub{" "}
                        <LucideArrowUpRight className="ml-1" size={16} />
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* --- REFACTORED: Expanded dropdown content --- */}
            <AnimatePresence>
              {isHovering && currentHoveredLinkData?.sublinkGroups && (
                <motion.div
                  className="absolute left-0 right-0 top-[60px] w-full pt-8 pb-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="max-w-fit mx-auto px-4 md:px-[64px]">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-24 gap-y-6 text-white">
                      {currentHoveredLinkData.sublinkGroups.map((group) => (
                        <div key={group.title}>
                          <h3 className="text-xs font-semibold text-white/60 mb-2">
                            {group.title}
                          </h3>
                          <ul className="space-y-3">
                            {group.links.map((sublink) => {
                              const isExternal = sublink.external;

                              return (
                                <li key={sublink.label}>
                                  <Link
                                    href={sublink.href}
                                    target={isExternal ? "_blank" : undefined}
                                    rel={
                                      isExternal
                                        ? "noopener noreferrer"
                                        : undefined
                                    }
                                    className="group inline-flex items-center gap-1 text-sm text-white hover:text-white/70 transition-colors hover:underline"
                                    onClick={onHoverEnd}
                                  >
                                    <span>{sublink.label}</span>
                                    {isExternal && (
                                      <LucideArrowUpRight
                                        size={14}
                                        className="opacity-70 group-hover:opacity-100 transition-opacity"
                                      />
                                    )}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.header>
        )}
      </AnimatePresence>
      <CookieBanner
        textColorClass={isHome && atTop ? "text-white" : "text-primary"}
      />
    </>
  );
}
