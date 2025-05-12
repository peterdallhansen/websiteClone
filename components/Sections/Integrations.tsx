"use client";

import { useEffect, useRef, useState } from "react";
import {
  Lock,
  CheckCircle,
  LucideDatabase,
  LucidePlus,
  LucideArrowRight,
} from "lucide-react";
import Image from "next/image";
import LogoIcon from "../LogoIcon";
import { AnimatedBeam } from "../ui/animated-beam";
import { Button } from "../ui/button";

export default function Integrations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);

  const [ready, setReady] = useState(false); // <--- add this

  const dataSources = [
    { id: "powerbi", name: "Power BI", icon: <Icons.powerbi /> },
    { id: "delta-lake", name: "Delta Lake", icon: <Icons.deltalake /> },
    { id: "database", name: "Database", icon: <LucideDatabase /> },
    { id: "openapi", name: "OpenAPI", icon: <Icons.openapi /> },
    { id: "excel", name: "Excel", icon: <Icons.excel /> },
    { id: "more", name: "More", icon: <LucidePlus /> },
  ];

  const analyses = [
    { id: "footfall-analytics", name: "Footfall Analytics" },
    { id: "age-demographics", name: "Age Demographics" },
    { id: "gender-distribution", name: "Gender Distribution" },
    { id: "heatmap-analysis", name: "Heatmap Analysis" },
    { id: "queue-management", name: "Queue Management" },
    { id: "more", name: "More" },
  ];
  const sourceRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const analysisRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Delay rendering of beams until all refs are available
  useEffect(() => {
    const allSourcesReady = dataSources.every((s) => sourceRefs.current[s.id]);
    const allAnalysesReady = analyses.every((a) => analysisRefs.current[a.id]);
    const hubReady = !!hubRef.current;
    const containerReady = !!containerRef.current;

    if (allSourcesReady && allAnalysesReady && hubReady && containerReady) {
      setReady(true);
    }
  }, []); // Run once on mount

  return (
    <div className="w-full my-20 bg-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight max-w-5xl mx-auto">
            Unlock the Power of Seamless Integrations
          </h1>
          <h3 className="text-4xl md:text-5xl lg:text-xl text-primary/80 max-w-xl text-center mx-auto">
            Connect your data sources effortlessly and gain actionable insights
            with ease.
          </h3>
          <Button className="rounded-full">
            Learn More <LucideArrowRight />
          </Button>
        </div>
        <div className="flex justify-between mb-12">
          <h1 className="text-2xl font-medium text-gray-700">
            Your Data Sources
          </h1>
          <h1 className="text-2xl font-medium text-gray-700">Analysis</h1>
        </div>

        <div
          className="flex justify-between items-center relative"
          ref={containerRef}
        >
          {/* Left column */}
          <div className="w-1/3 space-y-6">
            {dataSources.map((source) => (
              <div
                key={source.id}
                ref={(el) => (sourceRefs.current[source.id] = el)}
                className="bg-gray-50 p-4 rounded-lg flex items-center justify-between"
              >
                <span className="text-gray-500">{source.name}</span>
                <div className="w-8 h-8 flex items-center justify-center">
                  {source.icon}
                </div>
              </div>
            ))}
          </div>

          {/* Hub */}
          <div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10  overflow-visible"
            ref={hubRef}
          >
            <div className="bg-none rounded-lg p-6 w-36 flex flex-col items-center  ">
              <LogoIcon className="bg-white rounded-full" />
            </div>
          </div>

          {/* Right column */}
          <div className="w-1/3 space-y-6">
            {analyses.map((analysis) => (
              <div
                key={analysis.id}
                ref={(el) => (analysisRefs.current[analysis.id] = el)}
                className="bg-gray-50 p-4 rounded-lg flex items-center justify-between"
              >
                <span className="text-gray-500">{analysis.name}</span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-gray-400" />
                </div>
              </div>
            ))}
          </div>

          {/* Render beams only when all refs are ready */}
          {ready &&
            dataSources.map((src) => (
              <AnimatedBeam
                key={`beam-src-${src.id}`}
                containerRef={containerRef}
                fromRef={{ current: sourceRefs.current[src.id]! }}
                toRef={hubRef}
                gradientStartColor="#BEDAFF"
                gradientstopColor="#71ADFF"
                fromAnchor="right"
                toAnchor="center"
                reverse
              />
            ))}

          {ready &&
            analyses.map((an) => (
              <AnimatedBeam
                key={`beam-an-${an.id}`}
                containerRef={containerRef}
                fromRef={{ current: analysisRefs.current[an.id]! }}
                toRef={hubRef}
                gradientStartColor="#BEDAFF"
                gradientstopColor="#71ADFF"
                fromAnchor="left"
                toAnchor="center"
              />
            ))}
        </div>
      </div>
    </div>
  );
}
const Icons = {
  powerbi: () => (
    <img src="/images/powerbi.svg" alt="Power BI" className="w-6 h-6" />
  ),
  deltalake: () => (
    <img src="/images/deltalake.svg" alt="Delta Lake" className="w-6 h-6" />
  ),
  openapi: () => (
    <img
      src="/images/openapi.svg"
      alt="Openapi"
      className="w-6 h-6 object-contain"
    />
  ),
  excel: () => <img src="/images/excel.svg" alt="Excel" className="w-6 h-6" />,
};
