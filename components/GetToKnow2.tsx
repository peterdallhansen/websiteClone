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
      icon: BarChart3,
      title: "Close Deals Faster",
      subtitle: "For Leasing Teams",
      image: "/images/Frame91.png",
      description:
        "Walk into negotiations with irrefutable traffic data. Prove the value of every square meter and justify premium rents.",
    },
    {
      icon: Users,
      title: "Prove Every Dollar",
      subtitle: "For Marketing Teams",
      image: "/images/Frame2_1.png",
      description:
        "Measure exactly who visits, when they come, and how long they stay. Validate campaign ROI with hard numbers.",
    },
    {
      icon: Clock,
      title: "Staff Smarter",
      subtitle: "For Operations",
      image: "/images/Frame82.png",
      description:
        "Align security and cleaning resources with real-time traffic patterns. Prevent bottlenecks before they happen.",
    },
    {
      icon: GitGraph,
      title: "Grow Asset Value",
      subtitle: "For Asset Managers",
      image: "/images/Entrance.png",
      description:
        "Demonstrate consistent traffic growth and tenant synergy. Give stakeholders the evidence they need.",
    },
    {
      icon: Map,
      title: "Perfect Your Mix",
      subtitle: "For Strategy",
      image: "/images/6.png",
      description:
        "Identify high-performing store combinations. Structure your layout to maximize cross-shopping and dwell time.",
    },
    {
      icon: LucideShare2,
      title: "Strengthen Partnerships",
      subtitle: "For Tenant Relations",
      image: "/images/reports9.png",
      description:
        "Share actionable insights with tenants. Help them improve conversion and align with center-wide traffic.",
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
      <div className="text-center mb-12 md:mb-16">
        <BlurFade delay={0.1} inView>
          <p className="text-sm uppercase tracking-widest text-primary/50 mb-4">
            Built For Every Team
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-balance">
            Data That Drives Every Decision
          </h2>
        </BlurFade>
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
                <p className="text-sm uppercase tracking-wide text-primary/50">
                  {offering.subtitle}
                </p>
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
