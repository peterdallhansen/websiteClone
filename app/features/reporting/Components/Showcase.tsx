"use client";
import SidebarMenu from "@/components/SidebarMenu";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import BlurFade from "@/components/ui/blur-fade";
import DotPattern from "@/components/ui/dot-pattern";
import {
  ArrowRightIcon,
  BarChartIcon,
  BriefcaseBusiness,
  ClockIcon,
  FileText,
  TrendingUpIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function Showcase() {
  const [activeSection, setActiveSection] = useState("");

  const features = [
    {
      id: "custom-reports",
      Icon: FileText,
      name: "Customizable Reports",
      description: "Tailor reports to your specific needs and goals.",
      href: "#custom-reports",
      cta: "Learn more",
      className: "row-span-2 col-span-3 lg:col-span-1",
      background: <></>,
    },
    {
      id: "data-visualization",
      Icon: BarChartIcon,
      name: "Data Visualization",
      description: "Visualize key metrics with dynamic charts and graphs.",
      href: "#data-visualization",
      cta: "Learn more",
      className: "row-span-2 col-span-3 lg:col-span-2",
      background: (
        <div
          style={{
            boxShadow: "inset 0px -240px 200px 0px rgba(0,153,255,0.75)",
          }}
          className="absolute flex h-full [mask-image:radial-gradient(550px_circle_at_top_center,white,transparent)]  w-full flex-col items-center justify-center overflow-hidden rounded-lg   md:shadow-xl"
        >
          <Image
            src={"/images/cards.png"}
            alt="Drag & Drop Preview"
            width={2783}
            height={1741}
            quality={100}
            className="w-[80%] absolute bottom-64 object-contain hover:bottom-60 transition-all  "
            style={{
              borderRadius: "15px",
              zIndex: 99999,
            }}
          />

          <DotPattern />
        </div>
      ),
    },
    {
      id: "real-time-insights",
      Icon: ClockIcon,
      name: "Real-Time Insights",
      description: "Access up-to-the-minute data for faster decision-making.",
      href: "#real-time-insights",
      cta: "Learn more",
      className: "row-span-2 col-span-3 lg:col-span-2",
      background: <></>,
    },
    {
      id: "trend-analysis",
      Icon: TrendingUpIcon,
      name: "Trend Analysis",
      description: "Discover patterns and predict future outcomes.",
      href: "#trend-analysis",
      cta: "Learn more",
      className: "row-span-3 col-span-3 lg:col-span-1",
      background: <></>,
    },
    {
      id: "performance-metrics",
      Icon: BriefcaseBusiness,
      name: "Performance Metrics",
      description: "Evaluate your success with measurable data.",
      href: "#performance-metrics",
      cta: "Learn more",
      className: "row-span-1 col-span-3 lg:col-span-2",
      background: <></>,
    },
  ];

  const sections = useMemo(
    () => [
      {
        id: "custom-reports",
        title: "Customizable Reports",
        body: `Create tailored reports that match your unique requirements. Filter, sort, and organize data to gain a clear picture of performance metrics, trends, and outcomes that matter most to you.`,
        cta: "Learn more",
        href: "#custom-reports",
      },
      {
        id: "data-visualization",
        title: "Data Visualization",
        body: `Transform complex datasets into intuitive charts, graphs, and dashboards. Communicate insights effectively and make informed decisions with visually engaging analytics.`,
        cta: "Learn more",
        href: "#data-visualization",
      },
      {
        id: "real-time-insights",
        title: "Real-Time Insights",
        body: `Access live data updates for accurate and timely decision-making. Stay ahead by monitoring performance in real time and responding proactively to changes.`,
        cta: "Learn more",
        href: "#real-time-insights",
      },
      {
        id: "trend-analysis",
        title: "Trend Analysis",
        body: `Identify patterns and trends that shape your business. Use predictive analytics to anticipate challenges and capitalize on opportunities for sustained growth.`,
        cta: "Learn more",
        href: "#trend-analysis",
      },
      {
        id: "performance-metrics",
        title: "Performance Metrics",
        body: `Track essential metrics to evaluate success. From sales figures to operational efficiency, measure progress against benchmarks and drive continuous improvement.`,
        cta: "Learn more",
        href: "#performance-metrics",
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
            Leverage customizable reports, real-time data, and advanced
            analytics to uncover trends and gain actionable insights. Access
            accurate, up-to-date information to make data-driven decisions with
            confidence, optimize performance, and drive measurable success.
          </h2>{" "}
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
              currentPath="/features/reporting"
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
                  quality={100}
                  style={{
                    borderRadius: 15,
                  }}
                  className="mb-20"
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
