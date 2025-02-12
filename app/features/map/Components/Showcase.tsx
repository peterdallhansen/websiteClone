"use client";
import SidebarMenu from "@/components/SidebarMenu";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import BlurFade from "@/components/ui/blur-fade";
import {
  ArrowRightIcon,
  CogIcon,
  GlobeIcon,
  TrendingUpIcon,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function Showcase() {
  const [activeSection, setActiveSection] = useState("");

  const features = [
    {
      id: "live-visualization",
      Icon: GlobeIcon,
      name: "Live Visualization",
      description: "Real-time 3D maps with immersive detail.",
      href: "#live-visualization",
      cta: "Learn more",
      className: "row-span-2 col-span-3 lg:col-span-1",
      background: <></>,
    },
    {
      id: "interactive-maps",
      Icon: Users,
      name: "Interactive Maps",
      description: "Engage with dynamic, real-time environments.",
      href: "#interactive-maps",
      cta: "Learn more",
      className: "row-span-2 col-span-3 lg:col-span-2",
      background: <></>,
    },
    {
      id: "heatmap-analytics",
      Icon: TrendingUpIcon,
      name: "Heatmap Analytics",
      description: "Uncover patterns and insights visually.",
      href: "#heatmap-analytics",
      cta: "Learn more",
      className: "row-span-2 col-span-3 lg:col-span-2",
      background: <></>,
    },
    {
      id: "synergy-visualization",
      Icon: CogIcon,
      name: "Synergy Visualization",
      description: "Highlight connections and key relationships.",
      href: "#synergy-visualization",
      cta: "Learn more",
      className: "row-span-2 col-span-3 lg:col-span-1",
      background: <></>,
    },
  ];

  const sections = useMemo(
    () => [
      {
        id: "live-visualization",
        title: "Live Visualization",
        body: `Experience real-time 3D maps that bring your data to life. From exploring physical spaces to understanding spatial patterns, live visualization transforms raw data into a dynamic and accessible format.`,
        cta: "Learn more",
        href: "#live-visualization",
      },
      {
        id: "interactive-maps",
        title: "Interactive Maps",
        body: `Dive into fully interactive maps that allow you to zoom, pan, and explore environments in real time. Engage with your data like never before to unlock new perspectives and actionable insights.`,
        cta: "Learn more",
        href: "#interactive-maps",
      },
      {
        id: "heatmap-analytics",
        title: "Heatmap Analytics",
        body: `Visualize data density and behavior with heatmaps that highlight key areas of interest. Identify patterns, optimize layouts, and make informed decisions with a glance.`,
        cta: "Learn more",
        href: "#heatmap-analytics",
      },
      {
        id: "synergy-visualization",
        title: "Synergy Visualization",
        body: `Uncover connections and interactions with synergy maps that reveal relationships between data points. Leverage these insights to improve strategies and drive collaboration.`,
        cta: "Learn more",
        href: "#synergy-visualization",
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center flex-1 p-8  pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col gap-4 row-start-2 items-center ">
        <BlurFade delay={0} inView>
          <h2 className="text-xl md:text-1xl xl:text-2xl leading-tight text-white text-center max-w-[750px] text-opacity-80 mb-20">
            Experience the future of data visualization with dynamic 3D maps.
            Explore live, interactive heatmaps that uncover real-time insights,
            visualize patterns, and create synergies for actionable strategies.
          </h2>
        </BlurFade>

        <BlurFade delay={0.25} inView>
          <BentoGrid className="hidden sm:grid">
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </BlurFade>
        <div className="w-full flex flex-row gap-8 pt-40 relative">
          {/* Sidebar */}
          <div
            className="self-start w-[400px] sticky top-40"
            style={{
              position: "sticky",
            }}
          >
            <SidebarMenu
              sections={sections}
              activeSection={activeSection}
              currentPath="/features/map"
            />
          </div>

          <div className="flex align-start justify-start flex-col h-full container text-left ">
            {sections.map((section, index) => (
              <div key={index}>
                <h2
                  id={section.id}
                  className="text-xl md:text-1xl xl:text-4xl leading-tight text-white  max-w-[750px] mb-8 text-left font-bold scroll-mt-40"
                >
                  {section.title}
                </h2>
                <h2 className="text-xl md:text-1xl xl:text-md leading-tight text-white max-w-[750px] text-opacity-60 mb-8 text-left">
                  {section.body}
                </h2>
                <a href={section.href}>
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4  pl-0 py-1 transition ease-out hover:text-neutral-600  hover:dark:text-neutral-400  mb-8 ">
                    <span>{section.cta}</span>
                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </AnimatedShinyText>
                </a>

                <Image
                  src={"/images/localhost_3001_ (1).png"}
                  width={1000}
                  height={400}
                  style={{
                    borderRadius: 15,
                  }}
                  className="mb-20 border"
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

export default Showcase;
