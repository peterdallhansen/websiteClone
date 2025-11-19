"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Clock,
  Eye,
  LucideTrendingUpDown,
  LucideShare2,
  Route,
  Users,
  Plus,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import BlurFade from "./ui/blur-fade";

export default function GetToKnow() {
  const keyPoints = [
    {
      icon: Users,
      title: "Demographic Segmentation",
      description: "Traffic by age, gender, and group size.",
    },
    {
      icon: Eye,
      title: "Live Visitor Counts",
      description: "Real-time visitor numbers.",
    },

    {
      icon: Clock,
      title: "Heatmaps & Dwell-Time",
      description: "Visualize hotspots and dwell times.",
    },
    {
      icon: Route,
      title: "End-to-End Journey",
      description: "Track complete visitor journeys.",
    },
    {
      icon: LucideTrendingUpDown,
      title: "Predictive Forecasting",
      description: "Anticipate traffic trends.",
    },
    {
      icon: LucideShare2,
      title: "Reports & Alerts",
      description: "Custom reports and real-time alerts.",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollAmount, setScrollAmount] = useState(500);

  useEffect(() => {
    const updateScrollAmount = () => {
      if (window.innerWidth >= 768) {
        setScrollAmount(500);
      } else {
        setScrollAmount(300);
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
    <div className="relative w-full max-w-screen mx-auto px-4 py-20 min-h-screen ">
      <div className="flex justify-between items-end mb-12 container mx-auto">
        <div className="space-y-6">
          <BlurFade delay={0.1} inView>
            <h1 className="text-4xl md:text-5xl font-normal">
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
          className="flex gap-5 snap-x snap-mandatory scrollbar-hide"
          style={{ paddingLeft: "calc((100% - 1536px)/2)" }}
        >
          {keyPoints.map((offering, index) => (
            <div
              key={index}
              className="min-w-full md:min-w-[450px] space-y-3 snap-end overflow-visible h-[600px] md:h-[780px] flex flex-col items-center justify-center"
            >
              <div className="rounded-2xl overflow-hidden hover:scale-[1.025] w-full  transition-all duration-300">
                <BlurFade delay={0.1 * index + 0.1} inView>
                  <div className="h-[550px] md:h-[740px] relative bg-gray-100 rounded-2xl flex items-center justify-center">
                    <offering.icon className="w-60 h-60" color="black" />
                    <div className="p-4 absolute top-0 left-0">
                      <p className="text-md text-primary mb-1">
                        {offering.description}
                      </p>
                      <h3 className="text-2xl font-semibold mb-2">
                        {offering.title}
                      </h3>
                    </div>
                    <a
                      className="absolute bottom-4 right-4 rounded-full  bg-black/60 p-2 hover:bg-black/70"
                      href="/"
                    >
                      <Plus color="white" />
                    </a>
                  </div>
                </BlurFade>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
