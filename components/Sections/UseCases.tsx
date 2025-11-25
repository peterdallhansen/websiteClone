"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const useCaseData = {
  "Live Visitor Counts": {
    title: "See Every Footstep, Instantly",
    description:
      "Gain real-time visibility into how many visitors are in your space at any given moment. Our AI-powered platform transforms ordinary 2D cameras into powerful traffic sensors.",
    stagingText: "Monitor metrics like...",
    items: ["current occupancy", "entry rates", "exit rates"],
    image: "/images/cloud.png",
    thumbnails: [],
  },
  "Demographic Segmentation": {
    title: "Understand Who Visits — and Why",
    description:
      "Segment visitors by age, gender, and group size to uncover valuable behavioral patterns. All analytics are fully anonymized and GDPR-compliant.",
    stagingText: "Analyze trends by...",
    items: ["age group", "gender", "group size"],
    image: "/images/Detection3.png",
    thumbnails: [],
  },
  "Heatmaps & Dwell-Time": {
    title: "Visualize Movement and Engagement",
    description:
      "See where people spend the most time. Zonify's heatmaps reveal visitor hotspots, dwell times, and spatial flow to help optimize layouts and displays.",
    stagingText: "Track key insights such as...",
    items: ["hotspot areas", "average dwell-time", "zone engagement"],
    thumbnails: [],
  },
  "End-to-End Journey": {
    title: "Track the Complete Visitor Journey",
    description:
      "Follow each visitor's full journey — from entry to exit — to uncover path patterns, peak hours, and repeat behaviors across your locations.",
    stagingText: "Measure journey data like...",
    items: ["visit duration", "return rates", "path patterns"],
    thumbnails: [],
    image: "/images/3dmap.png",
  },
};

export default function UseCases() {
  const [selectedUseCase, setSelectedUseCase] = useState("Live Visitor Counts");

  const useCases = Object.keys(useCaseData);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedUseCase((prev) => {
        const currentIndex = useCases.indexOf(prev);
        const nextIndex = (currentIndex + 1) % useCases.length;
        return useCases[nextIndex];
      });
    }, 7500);

    return () => clearInterval(interval);
  }, [useCases]);

  const currentData =
    useCaseData[selectedUseCase] || useCaseData["Live Visitor Counts"];

  return (
    <div className="w-full">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full mx-auto max-w-7xl px-4 sm:px-6 pt-20  pb-0 md:pb-16 text-center"
      >
        <div className="mt-16 w-full">
          <div className="relative w-full">
            <div className="overflow-x-auto overflow-y-hidden pb-4 scrollbar-thin scrollbar-hide scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <div className="flex md:flex-wrap items-center justify-start md:justify-center gap-1 md:gap-3 min-w-min">
                {useCases.map((useCase, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedUseCase(useCase)}
                    className={`rounded-full px-2  md:px-5 py-1 md:py-2.5 text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                      useCase === selectedUseCase
                        ? "bg-black text-white"
                        : "bg-transparent text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {useCase}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="w-full mx-auto max-w-7xl px-4 sm:px-6 py-20 pt-8 md:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedUseCase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
                mass: 0.8,
                opacity: { duration: 0.3 },
              }}
              className="space-y-6 lg:space-y-8"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font leading-tight text-black break-words">
                {currentData.title}
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                {currentData.description}
              </p>

              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-normal text-black">
                  {currentData.stagingText}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {currentData.items.map((item, index) => (
                    <motion.span
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedUseCase + "-image"}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative w-full"
            >
              <div className="overflow-hidden rounded-2xl relative w-full h-[350px] sm:h-[450px] lg:h-[500px]">
                <Image
                  src={currentData.image || "/images/LinkedIn cover - 5.png"}
                  alt={currentData.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
