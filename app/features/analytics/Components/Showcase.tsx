"use client";
import SidebarMenu from "@/components/SidebarMenu";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import BlurFade from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function MeasureShowcase() {
  const [activeSection, setActiveSection] = useState("");

  const sections = useMemo(
    () => [
      {
        id: "visitor-behavior",
        title: "Visitor Behavior",
        body: `Track movement paths, dwell times, and zone engagement to understand how people interact with your spaces. Spot traffic hotspots, identify patterns, and uncover friction points across the customer journey.`,
        cta: "Explore behavior analytics",
        href: "#visitor-behavior",
      },
      {
        id: "space-utilization",
        title: "Space Utilization",
        body: `Measure occupancy levels and usage trends to optimize layout design, reduce congestion, and enhance space efficiency. Gain insights into how every square meter contributes to your goals.`,
        cta: "Explore utilization metrics",
      },
      {
        id: "performance-trends",
        title: "Performance Trends",
        body: `Analyze historical data to spot long-term trends, seasonal shifts, and behavioral changes. Compare periods, monitor KPIs, and drive continuous improvement with evidence-based insights.`,
        cta: "Explore trend analysis",
      },
      {
        id: "forecasting-insights",
        title: "Nowcasting & Forecasting",
        body: `Use real-time data and predictive models to anticipate traffic surges, optimize staffing, and plan with confidence. Our system helps you respond quickly and plan ahead for what's next.`,
        cta: "Explore forecasting",
      },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) =>
        document.getElementById(section.id)
      );
      sectionElements.forEach((el) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(el.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center flex-1 p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-4 row-start-2 items-center">
        <BlurFade delay={0} inView>
          <h2 className="text-xl md:text-1xl xl:text-2xl leading-tight text-primary text-center max-w-[750px] mb-20">
            Understand how people engage with your spaces using rich
            analytics—from real-time movement to long-term trends and predictive
            planning.
          </h2>
        </BlurFade>

        <div className="w-full flex flex-row gap-8 pt-40 relative">
          <div
            className="self-start w-[400px] hidden md:block sticky top-40"
            style={{ position: "sticky" }}
          >
            <SidebarMenu
              sections={sections}
              activeSection={activeSection}
              currentPath="/features/analytics"
            />
          </div>

          <div className="flex align-start justify-start flex-col h-full container text-left">
            {sections.map((section, index) => (
              <div key={index}>
                <h2
                  id={section.id}
                  className="text-xl md:text-1xl xl:text-4xl leading-tight text-primary max-w-[750px] mb-8 text-left font-bold scroll-mt-40"
                >
                  {section.title}
                </h2>
                <h2 className="text-xl md:text-1xl xl:text-md leading-tight text-primary max-w-[750px] text-opacity-60 mb-8 text-left">
                  {section.body}
                </h2>
                <a href={section.href}>
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 pl-0 py-1 transition ease-out hover:text-neutral-600 hover:dark:text-neutral-400 mb-8">
                    <span>{section.cta}</span>
                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </AnimatedShinyText>
                </a>

                <Image
                  src={section.image || "/images/DashboardPreview.png"}
                  width={1000}
                  height={400}
                  quality={100}
                  className={cn("mb-20")}
                  alt={section.title}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MeasureShowcase;
