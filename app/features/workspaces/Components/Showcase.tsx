"use client";
import SidebarMenu from "@/components/SidebarMenu";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import BlurFade from "@/components/ui/blur-fade";
import {
  ArrowRightIcon,
  BarChartIcon,
  BriefcaseBusiness,
  Building2,
  ClockIcon,
  FileText,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function Showcase() {
  const [activeSection, setActiveSection] = useState("");

  const features = [
    {
      id: "workspace-insights",
      Icon: BriefcaseBusiness,
      name: "Workspace Insights",
      description: "Understand usage patterns and optimize space allocation.",
      href: "#workspace-insights",
      cta: "Learn more",
      className: "row-span-2 col-span-3 lg:col-span-1",
      background: <></>,
    },
    {
      id: "tenant-management",
      Icon: Users,
      name: "Tenant Management",
      description: "Streamline tenant operations and improve satisfaction.",
      href: "#tenant-management",
      cta: "Learn more",
      className: "row-span-2 col-span-3 lg:col-span-2",
      background: <></>,
    },
    {
      id: "facility-optimization",
      Icon: Building2,
      name: "Facility Optimization",
      description: "Enhance operational efficiency across your facilities.",
      href: "#facility-optimization",
      cta: "Learn more",
      className: "row-span-2 col-span-3 lg:col-span-2",
      background: <></>,
    },
    {
      id: "custom-workspace-reports",
      Icon: FileText,
      name: "Custom Workspace Reports",
      description: "Generate reports tailored to your workspace needs.",
      href: "#custom-workspace-reports",
      cta: "Learn more",
      className: "row-span-3 col-span-3 lg:col-span-1",
      background: <></>,
    },
    {
      id: "real-time-tracking",
      Icon: ClockIcon,
      name: "Real-Time Tracking",
      description: "Get live updates on workspace activity and metrics.",
      href: "#real-time-tracking",
      cta: "Learn more",
      className: "row-span-1 col-span-3 lg:col-span-2",
      background: <></>,
    },
    {
      id: "workspace-performance",
      Icon: BarChartIcon,
      name: "Workspace Performance",
      description: "Measure and analyze workspace efficiency with precision.",
      href: "#workspace-performance",
      cta: "Learn more",
      className: "row-span-2 col-span-3 lg:col-span-4",
      background: <></>,
    },
  ];

  const sections = useMemo(
    () => [
      {
        id: "workspace-insights",
        title: "Workspace Insights",
        body: `Gain a clear understanding of workspace usage patterns, including occupancy rates, peak usage times, and resource allocation. This feature helps you identify underutilized spaces and optimize layouts to enhance productivity and cost-efficiency. Transform workspace data into actionable strategies that benefit your team and organization.`,
        cta: "Learn more",
        href: "#workspace-insights",
      },
      {
        id: "tenant-management",
        title: "Tenant Management",
        body: `Simplify tenant operations with centralized management tools. From onboarding to communication, this feature streamlines tenant interactions and ensures satisfaction. Keep track of lease agreements, payment statuses, and requests, making tenant management seamless and efficient.`,
        cta: "Learn more",
        href: "#tenant-management",
      },
      {
        id: "facility-optimization",
        title: "Facility Optimization",
        body: `Maximize operational efficiency by optimizing facility management processes. Use real-time data to optimize cleaning schedules, adjust staffing levels, and enhance visitor flow. Gain insights into peak usage times to improve space utilization and deliver a seamless experience while reducing operational costs. This approach ensures facilities are managed intelligently and effectively.`,
        cta: "Learn more",
        href: "#facility-optimization",
      },
      {
        id: "custom-workspace-reports",
        title: "Custom Workspace Reports",
        body: `Create detailed reports tailored to your workspace management needs. Highlight key metrics, trends, and insights to support strategic decision-making. Whether you need high-level overviews or deep dives into specific areas, Custom Workspace Reports keep you informed and prepared.`,
        cta: "Learn more",
        href: "#custom-workspace-reports",
      },
      {
        id: "real-time-tracking",
        title: "Real-Time Tracking",
        body: `Stay updated with real-time tracking of workspace activity. Monitor occupancy levels, environmental conditions, and resource usage as they happen. This feature empowers you to respond quickly to changes, improving responsiveness and operational agility.`,
        cta: "Learn more",
        href: "#real-time-tracking",
      },
      {
        id: "workspace-performance",
        title: "Workspace Performance",
        body: `Track and analyze key performance metrics across your workspaces. Identify trends, measure efficiency, and gain actionable insights to drive better outcomes. Use this data to improve productivity, reduce costs, and align workspace operations with your organizational goals.`,
        cta: "Learn more",
        href: "#workspace-performance",
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
          <h2 className="text-xl md:text-1xl xl:text-2xl leading-tight text-primary text-center max-w-[750px] text-opacity-80 mb-20">
            Gain detailed insights into workspace utilization, operational
            efficiency, and user preferences. Understand patterns, identify
            trends, and make informed decisions to optimize your environments.
            Enhance productivity, collaboration, and user satisfaction while
            driving meaningful improvements in workspace management and business
            growth.
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
              currentPath="/features/workspaces"
            />
          </div>

          <div className="flex align-start justify-start flex-col h-full container text-left ">
            {sections.map((section, index) => (
              <div key={index}>
                <h2
                  id={section.id}
                  className="text-xl md:text-1xl xl:text-4xl leading-tight text-primary  max-w-[750px] mb-8 text-left font-bold scroll-mt-40"
                >
                  {section.title}
                </h2>
                <h2 className="text-xl md:text-1xl xl:text-md leading-tight text-primary max-w-[750px] text-opacity-60 mb-8 text-left">
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
