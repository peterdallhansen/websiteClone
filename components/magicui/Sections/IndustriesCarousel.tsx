"use client";
import BlurFade from "@/components/ui/blur-fade";
import { Industries } from "@/lib/constants";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Item = {
  title: string;
  href: string;
  image: string;
  alt?: string;
};

export default function IndustriesCarousel({
  items = Industries,
}: {
  items?: Item[];
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const inset = 64; // px

  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollAmount, setScrollAmount] = useState(500);

  useEffect(() => {
    const updateScrollAmount = () => {
      if (window.innerWidth >= 768) {
        setScrollAmount(500);
      } else {
        setScrollAmount(250);
      }
    };

    updateScrollAmount();
    window.addEventListener("resize", updateScrollAmount);
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
    <div className="relative w-full max-w-screen mx-auto px-4 py-20">
      <div className="flex justify-between items-end mb-12  px-2 md:px-12">
        <div className="space-y-6">
          <BlurFade delay={0.1} inView>
            <h1 className="text-3xl md:text-4xl font-normal">
              Built for Physical Spaces
            </h1>
          </BlurFade>
        </div>
        <BlurFade delay={0.25} inView>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full hover:animate-wiggleLeft"
              aria-label="Scroll left"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full hover:animate-wiggleRight"
              aria-label="Scroll right"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </BlurFade>
      </div>

      <div
        className="overflow-x-auto overflow-y-visible scrollbar-hide snap-x snap-mandatory"
        ref={scrollRef}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div
          className="flex gap-4  snap-x snap-mandatory scrollbar-hide"
          style={{ paddingLeft: "48px" }}
        >
          {items.map((it, idx) => (
            <div
              key={idx}
              className="space-y-3 snap-end overflow-visible flex flex-col items-center justify-center"
            >
              <div className="rounded-2xl overflow-hidden  w-full  group">
                <BlurFade delay={0.05 * idx + 0.05} inView>
                  <Link href={it.href}>
                    <article
                      key={idx}
                      data-card
                      className="relative flex-shrink-0 w-[280px] sm:w-[340px] md:w-[420px] h-[280px] sm:h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-md snap-start bg-gray-100 group"
                    >
                      <Image
                        src={it.image}
                        alt={it.alt ?? it.title}
                        fill
                        priority={idx === 0}
                        loading={idx === 0 ? "eager" : "lazy"}
                        fetchPriority={idx === 0 ? "high" : "low"}
                        // Make sure to tune sizes to your breakpoints:
                        sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 420px"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        // decode async to avoid main-thread block:
                        decoding="async"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute left-3 top-3 md:left-4 md:top-4 text-white text-lg sm:text-xl md:text-2xl font-medium">
                        {it.title}
                      </div>
                    </article>
                  </Link>
                </BlurFade>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
