"use client";

import { useEffect, useState } from "react";
import {
  Award,
  Edit,
  Layers,
  LucideGauge,
  LucideRoute,
  LucideTrendingUpDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

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

  // whenever activeTab changes (click or auto), restart a 5s timer
  useEffect(() => {
    const currentIndex = tabs.findIndex((t) => t.id === activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;

    const timeout = setTimeout(() => {
      setActiveTab(tabs[nextIndex].id);
    }, 7500);

    // cleanup + reset on activeTab change or unmount
    return () => clearTimeout(timeout);
  }, [activeTab]);

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className="flex flex-col items-center  space-y-32 mt-20">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight max-w-5xl mx-auto">
          Shape the Future with Data-Driven Insights
        </h1>
        <h3 className="text-4xl md:text-5xl lg:text-xl text-primary/80 max-w-xl text-center mx-auto">
          Discover trends, evaluate performance, and forecast what’s
          next—powered by real-time and historical data.
        </h3>
      </div>

      <div className="flex flex-col md:flex-row gap-8 bg-white rounded-xl overflow-hidden container h-full md:h-[600px]">
        {/* Left side - Tabs */}

        <div className="w-full md:w-1/3 h-full">
          <div className="flex flex-col h-full space-y-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "w-full text-left  p-4 rounded-2xl transition-all duration-200 flex items-start gap-3 ",
                  activeTab === tab.id
                    ? "bg-white shadow-sm text-black bg-gray-100 h-[50%]"
                    : "text-gray-1000 bg-gray-100 hover:bg-gray-100 h-[25%]"
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
                      {activeContent?.description.substring(0, 100)}...
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-2/3 px-6 rounded-2xl">
          {activeContent && (
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4">
                  {activeContent.title}
                </h2>
                <p className="text-gray-600">{activeContent.description}</p>
              </div>

              <div className="flex-1 bg-gray-100 rounded-xl  flex items-center justify-center">
                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                  {tabs.map((tab) => (
                    <div
                      key={tab.id}
                      className={activeTab === tab.id ? "block" : "hidden"}
                    >
                      {typeof activeContent.image === "object" &&
                      "src" in activeContent.image ? (
                        <Image
                          src={activeContent.image.src}
                          alt={activeContent.image.alt}
                          fill
                          priority
                          className={cn(
                            "object-cover rounded-lg object-top px-4"
                          )}
                          sizes="(min-width: 768px) 66vw, 100vw"
                        />
                      ) : (
                        activeContent.image
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
