"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GallaryCard } from "./GallaryCard";

const Gallarys = [
  {
    title: "Zonify x DSC",
    label: "Collaboration",
    backgroundImage: "/images/banners/ZonifyxDSC.png",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:YOUR_DSC_LINK",
  },
  {
    title: "Zonify x ECE",
    label: "Collaboration",
    backgroundImage: "/images/banners/ZonifyxECE.png",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:YOUR_ECE_LINK",
  },
  {
    title: "Zonify x H&M",
    label: "Collaboration",
    backgroundImage: "/images/banners/ZonifyxHM.png",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:YOUR_HM_LINK",
  },
  {
    title: "Zonify x Klépierre",
    label: "Collaboration",
    backgroundImage: "/images/banners/ZonifyxKlepierre.png",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:YOUR_KLEPIERRE_LINK",
  },
  {
    title: "Zonify x Magasin",
    label: "Collaboration",
    backgroundImage: "/images/banners/ZonifyxMagasin.png",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:YOUR_MAGASIN_LINK",
  },
  {
    title: "Zonify x Milestone",
    label: "Collaboration",
    backgroundImage: "/images/banners/ZonifyxMilestone.png",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:YOUR_MILESTONE_LINK",
  },
  {
    title: "Zonify x SEED",
    label: "Collaboration",
    backgroundImage: "/images/banners/ZonifyxSEED.png",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:YOUR_SEED_LINK",
  },
  {
    title: "Zonify x SSCP",
    label: "Collaboration",
    backgroundImage: "/images/banners/ZonifyxSSCP.png",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:YOUR_SSCP_LINK",
  },
  {
    title: "Zonify x Microsoft For Startups",
    label: "Collaboration",
    backgroundImage: "/images/banners/ZonifyxMicrosoft.png",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:YOUR_MICROSOFT_LINK",
  },
];

export function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [scrollAmount, setScrollAmount] = useState(520); // Default to 520

  useEffect(() => {
    // Function to update scrollAmount based on window width
    const updateScrollAmount = () => {
      if (window.innerWidth >= 768) {
        // Tailwind's md breakpoint
        setScrollAmount(520);
      } else {
        setScrollAmount(320);
      }
    };

    // Initial check
    updateScrollAmount();

    // Add event listener for window resize
    window.addEventListener("resize", updateScrollAmount);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", updateScrollAmount);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full max-w-screen mx-auto px-4 mb-20">
      <div className="flex justify-between items-center mb-6 max-w-[1500px] mx-auto">
        <h2 className="text-2xl font-bold">Gallery</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full  hover:animate-wiggleLeft"
            aria-label="Scroll left"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full  hover:animate-wiggleRight"
            aria-label="Scroll right"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-2 "
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {Gallarys.map((product, index) => (
          <div key={index} className="snap-start overflow-visible ">
            <GallaryCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
}
