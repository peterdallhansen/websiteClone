"use client";

import {
  BarChart3,
  ChevronLeftIcon,
  ChevronRightIcon,
  Clock,
  Footprints,
  GitGraph,
  LucideShare2,
  Map,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import BlurFade from "../ui/blur-fade";

export default function GetToKnow3() {
  const keyPoints = [
    {
      icon: Footprints,
      title: "Complete Visitor Journey",
      image: "/images/reports9.png",
      description:
        "Track the complete path from entry to exit. Understand cross-shopping patterns and flow between zones.",
    },
    {
      icon: GitGraph,
      title: "True Conversion",
      image: "/images/DashboardPreview.png",

      description:
        "Measure capture rate. Know exactly how many passersby enter each store vs. just walking by.",
    },
    {
      icon: Users,
      title: "Demographic Insights",
      image: "/images/5.png",
      description:
        "Segment visitors by age and gender. Tailor your tenant mix and marketing to who is actually there.",
    },
    {
      icon: BarChart3,
      title: "Leasing Intelligence",
      image: "/images/TenantMap.png",
      description:
        "Justify rents with data. Prove the value of every square meter with concrete traffic evidence.",
    },
    {
      icon: Map,
      title: "Zone Heatmaps",
      image: "/images/TenantMap4.png",
      description:
        "Visualize engagement. See exactly where visitors stop, linger, and interact with displays.",
    },
    {
      icon: Clock,
      title: "Predictive Analytics",
      image: "/images/imag2.png",
      description:
        "Forecast traffic. Optimize staffing and operations before the rush happens.",
    },
    {
      icon: LucideShare2,
      title: "API & Integration",
      description:
        "Connect to your ecosystem. Push raw data or insights directly to your BI tools.",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollAmount, setScrollAmount] = useState(500);
  const [paddingLeft, setPaddingLeft] = useState(24);

  useEffect(() => {
    const updateLayout = () => {
      // Scroll amount
      if (window.innerWidth >= 768) {
        setScrollAmount(500);
      } else {
        setScrollAmount(300);
      }

      // Padding calculation for centering
      // Target container width: 1200px (approx laptop/desktop content width)
      // We want the first card to align with where a 1200px container would start.
      const containerWidth = 1200;
      const windowWidth = window.innerWidth;
      const calculatedPadding = Math.max(24, (windowWidth - containerWidth) / 2);
      setPaddingLeft(calculatedPadding);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
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
    <div className="relative w-full max-w-screen mx-auto px-4 py-40 overflow-x-hidden">
      <div className="flex justify-between items-end mb-12 w-full pl-10">
        <div className="space-y-6">
          <BlurFade delay={0.1} inView>
            <h1 className="text-4xl md:text-5xl">
              Everything You Need to <br /> Measure, Understand, and Improve.
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
                className="flex gap-6 snap-x snap-mandatory scrollbar-hide pl-10"
        >
          {keyPoints.map((offering, index) => (
            <div
              key={index}
      className=" space-y-3 snap-end overflow-visible  pt-2  flex flex-col items-center justify-center"
            >
              <BlurFade delay={0.1 * index + 0.1} inView className="flex flex-col gap-6">
                {/* Icon Container */}
                <div style={{
                  backgroundImage: `url(${offering.image})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom",
                }} className="h-[500px] min-w-[700px]   w-full rounded-2xl border  bg-[#F8F9FA] flex items-center justify-center group hover:bg-gray-50 transition-colors duration-300">
                  {!offering.image && <offering.icon 
                    className="w-16 h-16 transition-transform duration-500 group-hover:scale-110" 
                    strokeWidth={1.5} 
                  />}
                </div>
                
                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-medium text-gray-900">
                    {offering.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {offering.description}
                  </p>
                </div>
              </BlurFade>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
