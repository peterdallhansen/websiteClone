"use client";

import {
  Activity,
  ArrowLeftRight,
  BarChart3,
  Clock,
  Footprints,
  GitGraph,
  Map,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const features = [
  {
    title: "Full Journey Tracking",
    description:
      "Track the complete customer path from entry to exit, understanding dwell times and cross-visitation patterns.",
    icon: Footprints,
  },
  {
    title: "Demographic Analysis",
    description:
      "Segment visitors by age and gender to tailor marketing campaigns and tenant mix.",
    icon: Users,
  },
  {
    title: "Capture Rate",
    description:
      "Measure the percentage of pass-by traffic that actually enters each store.",
    icon: ArrowLeftRight,
  },
  {
    title: "Cross-Visitation",
    description:
      "Analyze spillover traffic between anchor tenants and smaller stores to validate synergy.",
    icon: GitGraph,
  },
  {
    title: "Zone Heatmaps",
    description:
      "Visualize high-traffic areas and dead zones with granular precision to optimize layout.",
    icon: Map,
  },
  {
    title: "Dwell Time Analysis",
    description:
      "Measure how long visitors stay in specific displays or storefronts to gauge engagement.",
    icon: Clock,
  },
  {
    title: "Tenant Benchmarking",
    description:
      "Compare performance metrics across similar tenants or locations anonymously.",
    icon: BarChart3,
  },
  {
    title: "API Integration",
    description:
      "Seamlessly export raw or processed data to your existing BI tools or data lake.",
    icon: Activity,
  },
];

export function FeatureGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollAmount, setScrollAmount] = useState(400);

  useEffect(() => {
    const updateScrollAmount = () => {
      if (window.innerWidth >= 768) {
        setScrollAmount(400);
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
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-xl font-medium mb-8 text-black">Capabilities</h2>
            <p className="text-4xl md:text-6xl font-normal text-gray-900 leading-tight">
              Precision analytics that capture the entire customer journey.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>
          </div>
        </div>

        <div
          className="overflow-x-auto overflow-y-visible scrollbar-hide snap-x snap-mandatory -mx-6 px-6 pb-12"
          ref={scrollRef}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-6 w-max">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="group flex flex-col items-start p-8 rounded-[2rem] bg-[#F8F9FA] hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 w-[320px] md:w-[400px] h-[420px] justify-between snap-start shrink-0"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium mb-4 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
