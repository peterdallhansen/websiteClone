"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GallaryCard } from "./GallaryCard";

const Gallarys = [
  {
    title: "NVIDIA Inception",
    label: "News",
    backgroundImage: "/images/Frame-1.jpg",
  },

  {
    title: "Microsoft For Startups",
    label: "News",
    backgroundImage: "/images/Frame45.png",
    dark: true,
  },
  {
    title: "Retail Debut",
    label: "Story",
    backgroundImage: "/images/1733477217351.jpeg",
  },
  {
    title: "Example",
    label: "News",
    backgroundImage: "/images/1725378290468.jpeg",
    dark: true,
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
    <div className="relative w-full max-w-screen mx-auto px-4 mb-20">
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
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {Gallarys.map((product, index) => (
          <div key={index} className="snap-start">
            <GallaryCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}
