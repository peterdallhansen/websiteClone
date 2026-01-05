"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import ThreeMap, { MapData } from "@/components/Map/ThreeMap";

const sections: Array<{
  id: string;
  title: string;
  items: Array<{
    title: string;
    description: string;
  }>;
  image: {
    src: string;
    alt: string;
  };
  viewState: {
    latitude: number;
    longitude: number;
    zoom: number;
    bearing: number;
    pitch: number;
    altitude: number;
    advanced: {
      cameraPosition: [number, number, number];
      targetPosition: [number, number, number];
    };
    showArcs?: boolean;
    showFlowPath?: boolean;
    showHeatmap?: boolean;
  };
}> = [
  {
    id: "section-1",
    title: "See Every Square Foot in Real-Time",
    items: [
      {
        title: "No Blind Spots.",
        description:
          "Your existing cameras become a unified view of your entire space. Instantly spot underutilized areas, dead zones, and missed opportunities.",
      },
    ],
    image: {
      src: "/images/6.png",
      alt: "Digital Twin Overview",
    },
    viewState: {
      latitude: 1748.2853703047995,
      longitude: 2561.3970834247225,
      zoom: 3.8,
      bearing: 0,
      pitch: 45,
      altitude: 1.5,
      advanced: {
        cameraPosition: [2.0, -2.0, 2.0] as [number, number, number],
        targetPosition: [
          2.5613970834247226, 1.7482853703047996, -0.0057146296951979605,
        ] as [number, number, number],
      },
    },
  },
  {
    id: "section-2",
    title: "Follow Every Customer Journey",
    items: [
      {
        title: "Entry to Exit.",
        description:
          "Track individual visitors through your space with pinpoint accuracy. See where they go, how long they stay, and what catches their attention.",
      },
    ],
    image: {
      src: "/images/8f5a6602-635e-46bf-8052-990e2dd293ba.png",
      alt: "Individual Path Tracking",
    },
    viewState: {
      latitude: 1748.2853703047995,
      longitude: 2561.3970834247225,
      zoom: 6.5,
      bearing: -45,
      pitch: 30,
      altitude: 1.5,
      advanced: {
        cameraPosition: [1.9024673309766915, -0.6495240091540171, 1.5] as [
          number,
          number,
          number
        ],
        targetPosition: [
          2.5613970834247226, 1.7482853703047996, -0.0057146296951979605,
        ] as [number, number, number],
      },
      showArcs: true,
    },
  },
  {
    id: "section-3",
    title: "Discover Cross-Shopping Patterns",
    items: [
      {
        title: "Zone-to-Zone Intelligence.",
        description:
          "See which areas drive traffic to others. Validate anchor performance, optimize tenant placement, and prove the value of premium locations.",
      },
    ],
    image: {
      src: "/images/Frame2_1.png",
      alt: "Cross Shopping Analysis",
    },
    viewState: {
      latitude: 1748.2853703047995,
      longitude: 2561.3970834247225,
      zoom: 4.8,
      bearing: 45,
      pitch: 50,
      altitude: 1.5,
      advanced: {
        cameraPosition: [2.0, -2.0, 2.0] as [number, number, number],
        targetPosition: [
          2.5613970834247226, 1.7482853703047996, -0.0057146296951979605,
        ] as [number, number, number],
      },
      showFlowPath: true,
    },
  },
  {
    id: "section-4",
    title: "Turn Foot Traffic Into Revenue",
    items: [
      {
        title: "Data-Driven Decisions.",
        description:
          "Aggregate visitor data into clear heatmaps. Justify rent levels, optimize layouts, and make every square foot work harder.",
      },
    ],
    image: {
      src: "/images/DashboardPreview.png",
      alt: "Aggregate Data View",
    },
    viewState: {
      latitude: 1748.2853703047995,
      longitude: 2561.3970834247225,
      zoom: 4.0,
      bearing: 180,
      pitch: 20,
      altitude: 1.5,
      advanced: {
        cameraPosition: [2.0, -2.0, 2.0] as [number, number, number],
        targetPosition: [
          2.5613970834247226, 1.7482853703047996, -0.0057146296951979605,
        ] as [number, number, number],
      },
      showHeatmap: true,
    },
  },
];

export default function FixedScrollLayout3D({
  disable3D,
}: {
  disable3D?: boolean;
}) {
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
    <div className="w-full bg-background mb-[-200px]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-6 mb-40 text-center"></div>

        <div
          ref={scrollRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 relative pt-[150px]"
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
                          <p className="text-md text-primary/60 text-left">
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
            className="hidden lg:block relative pt-[150px]"
            style={{ width: "calc(50vw - 5em)" }}
          >
            <div className="sticky top-1/2 -translate-y-1/2  ">
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-[700px]  rounded-2xl overflow-hidden flex items-center justify-center"
              >
                {!disable3D ? (
                  <>
                    {mapData ? (
                      <ThreeMap
                        mapData={mapData}
                        className="w-full h-full"
                        viewState={sections[activeSection].viewState}
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-muted-foreground"></div>
                    )}
                  </>
                ) : (
                  <Image
                    src={sections[activeSection].image.src}
                    alt={sections[activeSection].image.alt}
                    width={800}
                    height={800}
                    className={cn("w-[800px] h-auto rounded-2xl")}
                  />
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
