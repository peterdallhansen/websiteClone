"use client";

import { useEffect, useState, useRef } from "react";
import { LucideGauge, LucideRoute, LucideTrendingUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import BlurFade from "../ui/blur-fade";

const tabs = [
  {
    id: "impact",
    label: "Impact Assessment",
    icon: <LucideGauge className="w-6 h-6" />,
    content: {
      title: "Data-Driven Impact Assessment",
      description:
        "Apply statistical analysis to evaluate layout performance, quantify campaign effectiveness, and benchmark timeframes—empowering you to make confident, evidence-based strategic decisions.",
      image: {
        src: "/images/GaugeDashboard.png",
        alt: "Preview of mobile analytics hub",
      },
    },
  },
  {
    id: "behavior",
    label: "Behavior Patterns",
    icon: <LucideRoute className="w-6 h-6" />,
    content: {
      title: "Uncover Evolving Behavior Patterns",
      description:
        "Explore historical data to identify shifts in visitor behavior, track growth trends, and reveal new operational opportunities over time.",
      image: {
        src: "/images/MapDashboard.png",
        alt: "Preview of mobile analytics hub",
      },
    },
  },
  {
    id: "forecast",
    label: "Forecasting & Growth",
    icon: <LucideTrendingUpDown className="w-6 h-6" />,
    content: {
      title: "Forecast Future Needs and Optimize Growth",
      description:
        "Leverage predictive analytics to anticipate visitor flows, market trends, and operational demands—supporting smarter long-term planning.",
      image: {
        src: "/images/EntranceDashboard.png",
        alt: "Preview of mobile analytics hub",
      },
    },
  },
];

export default function ExpertiseTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-advance every 7.5s
  useEffect(() => {
    // Only auto-advance on desktop (md and up)
    if (window.innerWidth < 768) return;

    const idx = tabs.findIndex((t) => t.id === activeTab);
    const next = (idx + 1) % tabs.length;
    const timer = setTimeout(() => setActiveTab(tabs[next].id), 7500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Update activeTab on swipe/scroll
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollLeft = el.scrollLeft;
          const width = el.offsetWidth;
          // Determine the nearest index
          const index = Math.round(scrollLeft / width);
          const tab = tabs[index];
          if (tab && tab.id !== activeTab) {
            setActiveTab(tab.id);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
    };
  }, [activeTab]);

  const activeContent = tabs.find((t) => t.id === activeTab)!.content;

  return (
    <>
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="w-screen py-20 px-0 md:px-2 flex flex-col items-center space-y-32">
        {/* Header */}
        <div className="text-center space-y-8 px-4 md:px-0 max-w-5xl">
          <BlurFade inView delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Shape the Future with Data-Driven Insights
            </h1>
          </BlurFade>
          <BlurFade inView delay={0.3}>
            <h3 className="text-2xl md:text-4xl text-primary/80">
              Discover trends, evaluate performance, and forecast what’s
              next—powered by real-time and historical data.
            </h3>
          </BlurFade>
        </div>

        {/* Mobile Carousel with fixed dots */}
        <div className="md:hidden w-full relative">
          <div
            ref={carouselRef}
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory flex pb-12 ml-4"
          >
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() =>
                  carouselRef.current?.scrollTo({
                    left:
                      tabs.findIndex((t) => t.id === tab.id) *
                      (carouselRef.current?.offsetWidth || 0),
                    behavior: "smooth",
                  })
                }
                className={cn(
                  "flex-shrink-0 w-full snap-start bg-gray-100 rounded-2xl p-6 transition-opacity duration-200"
                )}
              >
                <div className="flex items-center gap-2 mb-4">
                  {tab.icon}
                  <h3 className="text-xl font-semibold">{tab.label}</h3>
                </div>
                <h2 className="text-2xl font-bold mb-2">{tab.content.title}</h2>
                <p className="text-gray-600 mb-4">{tab.content.description}</p>
                <div className="relative w-full h-60 rounded-lg overflow-hidden">
                  <Image
                    src={tab.content.image.src}
                    alt={tab.content.image.alt}
                    fill
                    sizes="100vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Fixed Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {tabs.map((tab, idx) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() =>
                    carouselRef.current?.scrollTo({
                      left: idx * (carouselRef.current?.offsetWidth || 0),
                      behavior: "smooth",
                    })
                  }
                  className={cn(
                    "w-3 h-3 rounded-full transition-all",
                    isActive ? "bg-black scale-110" : "bg-gray-300"
                  )}
                />
              );
            })}
          </div>
        </div>

        {/* === Desktop Tabs === */}
        <BlurFade inView delay={0.2} className="hidden md:block container">
          <div className="flex gap-8 rounded-xl overflow-hidden h-[600px]">
            {/* Left: Tab Buttons */}
            <div className="w-1/3 flex flex-col space-y-4 p-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-start gap-3",
                    activeTab === tab.id
                      ? "bg-gray-100 text-black shadow-sm hover:bg-gray-200 h-[50%]"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 h-[25%]"
                  )}
                >
                  <div>
                    <div
                      className={cn(
                        "p-2",
                        activeTab === tab.id ? "block text-black" : "hidden"
                      )}
                    >
                      {tab.icon}
                    </div>
                    <h3
                      className={cn(
                        "font-semibold text-2xl",
                        activeTab === tab.id ? "text-black" : "text-gray-600"
                      )}
                    >
                      {tab.label}
                    </h3>
                    {activeTab === tab.id && (
                      <p className="text-gray-600 mt-2 text-sm">
                        {activeContent.description.substring(0, 100)}…
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Right: Active Content */}
            <div className="w-2/3 px-6 rounded-2xl bg-white">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-4">
                    {activeContent.title}
                  </h2>
                  <p className="text-gray-600">{activeContent.description}</p>
                </div>
                <div className="flex-1 bg-gray-100 rounded-xl flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {tabs.map((tab) => (
                      <div
                        key={tab.id}
                        className={tab.id === activeTab ? "block" : "hidden"}
                      >
                        <Image
                          src={tab.content.image.src}
                          alt={tab.content.image.alt}
                          fill
                          priority
                          className="object-cover rounded-lg object-top"
                          sizes="(min-width: 768px) 66vw, 100vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </>
  );
}
