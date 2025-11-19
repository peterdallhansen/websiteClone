"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import ThreeMap, { MapData } from "@/components/Map/ThreeMap";

const sections = [
  {
    id: "section-1",
    title: "Intelligent Vision",
    items: [
      {
        title: "Your Cameras, Reimagined.",
        description:
          "Transform existing security feeds into intelligent sensors. No new hardware. No complex setup. Just plug, play, and unlock real-time analytics from day one.",
      },
    ],
    image: {
      src: "/images/6.png",
      alt: "Intelligent Vision Tracking",
    },
    viewState: {
      latitude: 1748.2853703047995,
      longitude: 2561.3970834247225,
      zoom: 4.415037499279608,
      bearing: -103.43840626371144,
      pitch: 41.92713192993456,
      altitude: 1.5,
      advanced: {
        cameraPosition: [
          1.9024673309766915,
          -0.6495240091540171,
          2.5872274101434285
        ] as [number, number, number],
        targetPosition: [
          2.5613970834247226,
          1.7482853703047996,
          -0.0057146296951979605
        ] as [number, number, number],
      },
    },
  },
  {
    id: "section-2",
    title: "Deep Analytics",
    items: [
      {
        title: "The Science of Movement.",
        description:
          "Visualize visitor journeys, dwell times, and traffic flow. Optimize layouts, staff efficiently, and measure what truly drives engagement in your space.",
      },
    ],
    image: {
      src: "/images/8f5a6602-635e-46bf-8052-990e2dd293ba.png",
      alt: "Deep Analytics Dashboard",
    },
    viewState: {
      latitude: 1748.2853703047995,
      longitude: 2561.3970834247225,
      zoom: 4.415037499279608,
      bearing: -60,
      pitch: 30,
      altitude: 1.5,
      advanced: {
        cameraPosition: [3.0, 0.5, 1.2] as [number, number, number],
        targetPosition: [
          2.5613970834247226,
          1.7482853703047996,
          -0.0057146296951979605
        ] as [number, number, number],
      },
    },
  },
  {
    id: "section-3",
    title: "Privacy First",
    items: [
      {
        title: "Insights, Not Surveillance.",
        description:
          "100% GDPR-compliant by design. We analyze patterns, not people—delivering deep behavioral insights without ever compromising visitor privacy.",
      },
    ],
    image: {
      src: "/images/Reports8.png",
      alt: "Privacy First Reporting",
    },
    viewState: {
      latitude: 1748.2853703047995,
      longitude: 2561.3970834247225,
      zoom: 4.415037499279608,
      bearing: -30,
      pitch: 60,
      altitude: 1.5,
      advanced: {
        cameraPosition: [
          2.430792741134297,
          0.3682561171960492,
          3.301845196344019
        ] as [number, number, number],
        targetPosition: [
          2.5613970834247226,
          1.7482853703047996,
          -0.0057146296951979605
        ] as [number, number, number],
      },
    },
  },
  {
    id: "section-4",
    title: "Unified Control",
    items: [
      {
        title: "One View. Total Clarity.",
        description:
          "From a single store to a global network, manage every location from one intuitive dashboard. Spot trends, compare performance, and scale with confidence.",
      },
    ],
    image: {
      src: "/images/DashboardPreview.png",
      alt: "Unified Control Dashboard",
    },
    viewState: {
      latitude: 1748.2853703047995,
      longitude: 2561.3970834247225,
      zoom: 4.415037499279608,
      bearing: 90,
      pitch: 40,
      altitude: 1.5,
      advanced: {
        cameraPosition: [1.5, 2.0, 1.5] as [number, number, number],
        targetPosition: [
          2.5613970834247226,
          1.7482853703047996,
          -0.0057146296951979605
        ] as [number, number, number],
      },
    },
  },
  {
    id: "section-5",
    title: "Strategic Growth",
    items: [
      {
        title: "Predict. Plan. Prosper.",
        description:
          "Move beyond hindsight. Leverage predictive modeling to forecast trends, validate strategic decisions, and stay ahead of evolving market demands.",
      },
    ],
    image: {
      src: "/images/Predict.png",
      alt: "Strategic Growth Prediction",
    },
    viewState: {
      latitude: 1748.2853703047995,
      longitude: 2561.3970834247225,
      zoom: 4.415037499279608,
      bearing: 180,
      pitch: 20,
      altitude: 1.5,
      advanced: {
        cameraPosition: [2.0, 3.0, 1.0] as [number, number, number],
        targetPosition: [
          2.5613970834247226,
          1.7482853703047996,
          -0.0057146296951979605
        ] as [number, number, number],
      },
    },
  },
];

export default function FixedScrollLayout3D() {
  const [activeSection, setActiveSection] = useState(0);
  const [mapData, setMapData] = useState<MapData | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  // Load map data
  useEffect(() => {
    fetch("/resources/map-16-export-1763578683871.json")
      .then((res) => res.json())
      .then((data) => setMapData(data))
      .catch((err) => console.error("Failed to load map data:", err));
  }, []);

  // Intersection observer for active section
  useEffect(() => {
    const sectionElements = Array.from(
      document.querySelectorAll<HTMLElement>(".scroll-section")
    );

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveSection(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full bg-background pt-32 pb-20 mt-32 mb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-6 mb-40 text-center">
          <h2 className="text-3xl sm:text-6xl font tracking-tight">
            Our models. All business.
          </h2>
        </div>

        <div
          ref={scrollRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 relative"
        >
          {/* LEFT COLUMN */}
          <div className="flex flex-col pb-[500px]  gap-[260px]">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className="scroll-section flex flex-col py-12 transition-all duration-500"
                data-index={index}
              >
                <motion.div
                  animate={{
                    opacity: activeSection === index ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.5 }}
                  className="cursor-pointer"
                  onClick={() => setActiveSection(index)}
                >
                  <h2 className="text-2xl sm:text-3xl mb-4 text-left tracking-tight">
                    {section.title}
                  </h2>

                  <motion.div
                    initial={false}
                    animate={{
                      height: activeSection === index ? "auto" : 0,
                      opacity: activeSection === index ? 1 : 0,
                      marginBottom: activeSection === index ? 24 : 0,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4 pt-2">
                      {section.items.map((item, j) => (
                        <div key={j} className="space-y-2">
                          <h3 className="text-lg font-medium text-primary/90 text-left">
                            {item.title}
                          </h3>
                          <p className="text-md text-muted-foreground text-left">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Mobile image */}
                <div className="lg:hidden mt-6">
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    width={800}
                    height={800}
                    className={cn("w-full h-auto")}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN — Pure CSS Sticky Center */}
          <div
            className="hidden lg:block relative pt-24"
            style={{ width: "calc(50vw - 5em)" }}
          >
            <div className="sticky top-1/2 -translate-y-1/2  ">
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-[700px]  rounded-2xl overflow-hidden"
              >
                {mapData ? (
                  <ThreeMap
                    mapData={mapData}
                    className="w-full h-full"
                   viewState={sections[activeSection].viewState}
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-muted-foreground">
                    Loading Map…
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
