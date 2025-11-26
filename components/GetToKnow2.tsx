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
import BlurFade from "./ui/blur-fade";

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
      image: "/images/Entrance.png",

      description:
        "Measure capture rate. Know exactly how many passersby enter each store vs. just walking by.",
    },
    {
      icon: Users,
      title: "Demographic Insights",
      image: "/images/Frame2_1.png",
      description:
        "Segment visitors by age and gender. Tailor your tenant mix and marketing to who is actually there.",
    },
    {
      icon: BarChart3,
      title: "Leasing Intelligence",
      image: "/images/Frame82.png",
      description:
        "Justify rents with data. Prove the value of every square meter with concrete traffic evidence.",
    },
    {
      icon: Map,
      title: "Zone Heatmaps",
      image: "/images/Frame93.png",
      description:
        "Visualize engagement. See exactly where visitors stop, linger, and interact with displays.",
    },
    {
      icon: Clock,
      title: "Predictive Analytics",
      image: "/images/Frame91.png",
      description:
        "Forecast traffic. Optimize staffing and operations before the rush happens.",
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
      const calculatedPadding = Math.max(
        24,
        (windowWidth - containerWidth) / 2
      );
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
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 lg:py-40">
      <div className="flex justify-center items-center mb-8 sm:mb-10 md:mb-12 w-full">
        <div className="space-y-4 sm:space-y-6 text-center">
          <BlurFade delay={0.1} inView>
            <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
              Everything You Need to <br />{" "}
              <span className="text-primary/60">
                {" "}
                Measure, Understand, and Improve
              </span>
              .
            </h1>
          </BlurFade>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {keyPoints.map((offering, index) => (
          <div key={index} className="space-y-3 flex flex-col">
            <BlurFade
              delay={0.1 * index + 0.1}
              inView
              className="flex flex-col gap-4 sm:gap-5 md:gap-6"
            >
              {/* Icon Container */}
              <div
                style={{
                  backgroundImage: `url(${offering.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom",
                }}
                className="h-[220px] sm:h-[260px] md:h-[300px] w-full rounded-xl sm:rounded-2xl border bg-[#F8F9FA] flex items-center justify-center group hover:bg-gray-50 transition-colors duration-300"
              >
                {!offering.image && (
                  <offering.icon
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                )}
              </div>

              {/* Text Content */}
              <div className="space-y-1.5 sm:space-y-2">
                <h3 className="text-xl sm:text-2xl font-medium text-primary/90">
                  {offering.title}
                </h3>
                <p className="text-primary/60 leading-relaxed text-base sm:text-lg">
                  {offering.description}
                </p>
              </div>
            </BlurFade>
          </div>
        ))}
      </div>
    </div>
  );
}
