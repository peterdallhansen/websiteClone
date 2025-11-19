"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";

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
    }  },
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
  },
];

export default function FixedScrollLayout() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const sectionElements = Array.from(
      document.querySelectorAll<HTMLElement>(".scroll-section")
    );

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const indexAttr = target.getAttribute("data-index");
            if (indexAttr !== null) {
              setActiveSection(Number(indexAttr));
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px", // Trigger only when element is in the middle 10% of screen
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 relative">
          {/* Left Column: Scrolling Text */}
          <div className="flex flex-col pb-24 gap-[260px]">
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
                  <h2 className="text-2xl sm:text-3xl  mb-4 text-left tracking-tight">
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
                          <p className="text-md text-muted-foreground text-left leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Mobile Image (visible only on small screens) */}
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

          {/* Right Column: Sticky Image */}
          <div className="hidden lg:block relative">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center">
              <div className="relative w-full h-full max-h-[700px] flex items-center justify-center">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: activeSection === index ? 1 : 0,
                      zIndex: activeSection === index ? 10 : 0,
                    }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      width={800}
                      height={800}
                      className={cn(
                        "w-full h-full rounded-2xl object-contain"
                      )}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
