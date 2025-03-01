"use client";
import SidebarMenu from "@/components/SidebarMenu";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { AnimatedListDemo } from "@/components/ui/AnimatedListDemo";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import BlurFade from "@/components/ui/blur-fade";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import {
  ArrowRightIcon,
  BarChart2Icon,
  ClockIcon,
  CogIcon,
  SlidersHorizontal,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function Showcase() {
  const [activeSection, setActiveSection] = useState("");

  const sections = useMemo(
    () => [
      {
        id: "audience-insights",
        title: "Audience Insights",
        body: `Gain a deep understanding of your visitors with detailed demographic analysis. Uncover behavior patterns and tailor your strategies for maximum impact.`,
        cta: "Learn more",
        href: "#audience-insights",
      },
      {
        id: "real-time-analytics",
        title: "Real-Time Analytics",
        body: `Monitor live data streams to capture immediate insights. Stay agile with up-to-the-minute metrics that drive proactive decision-making.`,
        cta: "Learn more",
        href: "#real-time-analytics",
      },
      {
        id: "data-visualization",
        title: "Data Visualization",
        body: `Transform complex datasets into intuitive charts and interactive graphs. Visualize your data in ways that simplify analysis and highlight trends.`,
        cta: "Learn more",
        href: "#data-visualization",
      },
      {
        id: "predictive-analytics",
        title: "Predictive Analytics",
        body: `Leverage advanced algorithms to forecast trends and outcomes. Empower your strategy with data-driven predictions that reveal future opportunities.`,
        cta: "Learn more",
        href: "#predictive-analytics",
      },
      {
        id: "custom-dashboards",
        title: "Custom Dashboards",
        body: `Customize your analytics workspace to focus on what matters most. Build dashboards that reflect your unique KPIs and performance metrics.`,
        cta: "Learn more",
        href: "#custom-dashboards",
      },
      {
        id: "advanced-reporting",
        title: "Advanced Reporting",
        body: `Generate comprehensive reports to drive strategic decisions. Analyze historical and real-time data with robust reporting tools tailored to your needs.`,
        cta: "Learn more",
        href: "#advanced-reporting",
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
          <h2 className="text-xl md:text-1xl xl:text-2xl leading-tight text-white text-center max-w-[750px] text-opacity-80 mb-20">
            Unlock the power of data with our Analytics Hub. Transform raw data
            into actionable insights and drive smarter business decisions.
          </h2>
        </BlurFade>

        <div className="w-full flex flex-row gap-8 pt-40 relative">
          {/* Sidebar */}
          <div
            className="self-start w-[400px] sticky top-40 hidden md:visible sm:flex"
            style={{ position: "sticky" }}
          >
            <SidebarMenu
              sections={sections}
              currentPath={"/features/demographics"}
              activeSection={activeSection}
            />
          </div>

          <div className="flex align-start justify-start flex-col h-full container text-left">
            {sections.map((section, index) => (
              <div key={index}>
                <h2
                  id={section.id}
                  className="text-xl md:text-1xl xl:text-4xl leading-tight text-white max-w-[750px] mb-8 text-left font-bold scroll-mt-40"
                >
                  {section.title}
                </h2>
                <p className="text-xl md:text-1xl xl:text-md leading-tight text-white max-w-[750px] text-opacity-60 mb-8 text-left">
                  {section.body}
                </p>
                <a href={section.href}>
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 pl-0 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 mb-8">
                    <span>{section.cta}</span>
                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </AnimatedShinyText>
                </a>

                <Image
                  src={
                    index % 2 !== 0
                      ? "/images/Frame611.png"
                      : index === 2
                      ? "/images/Frame64.png"
                      : "/images/Frame66.png"
                  }
                  width={1000}
                  height={600}
                  style={{ borderRadius: 15 }}
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
