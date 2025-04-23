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
  LucideFileChartColumn,
  LucideGlobe,
  LucideShare2,
  LucideUsers,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function Showcase() {
  const [activeSection, setActiveSection] = useState("");

  const features = [
    {
      id: "interactive-map",
      Icon: LucideGlobe, // Replace with your preferred icon
      name: "Interactive Map",
      description:
        "Visualize visitor flows, heatmaps, and spatial interactions in real time.",
      href: "#interactive-map",
      cta: "Learn more",
      className: "row-span-1 col-span-3 lg:col-span-5",
      background: <></>,
    },

    {
      id: "automated-reports",
      Icon: LucideFileChartColumn,
      name: "Automated Reports",
      description:
        "Schedule and send workspace performance reports via email on a daily, weekly, monthly, or custom cadence.",
      href: "#automated-reports",
      cta: "Learn more",
      className: "row-span-1 col-span-3 lg:col-span-2",

      background: <></>,
    },
    {
      id: "role-based-sharing",
      Icon: LucideUsers,
      name: "Role-Based Sharing",
      description:
        "Invite colleagues with Viewer, Editor, or Admin permissions—track, resend, or revoke access as needed.",
      href: "#role-based-sharing",
      cta: "Learn more",
      className: "row-span-1 col-span-3 lg:col-span-2",
      background: <></>,
    },
  ];

  const sections = useMemo(
    () => [
      {
        id: "interactive-movement-analytics",
        title: "Interactive Movement Analytics",
        body: `Explore how visitors move through your space with powerful, visual insights. This feature offers animated playback of movement patterns, heatmaps of high-traffic zones, and interactive time filtering—giving you a complete picture of how people interact with your environment. Zoom in to specific areas, compare structure activity, and customize filters to focus on key demographic groups. Perfect for optimizing layouts, planning operations, and improving visitor experience.`,
        cta: "Learn more",
        href: "#interactive-movement-analytics",
        image: "/images/3dmap.png",
      },
      {
        id: "role-based-sharing",
        title: "Role-Based Sharing & Permissions",
        body: `Easily invite team members or external users to your workspace and assign them Viewer, Editor, or Admin roles. Track pending invitations, resend or revoke access, and adjust permissions instantly to keep collaboration secure and organized.`,
        cta: "Learn more",
        href: "#role-based-sharing",
      },
      {
        id: "automated-reports",
        title: "Automated Scheduled Reports",
        body: `Set up custom schedules to automatically generate and deliver workspace reports. Choose from summary or detailed formats, specify multiple email recipients, and receive updates on a daily, weekly, monthly—or any custom—cadence without lifting a finger.`,
        cta: "Learn more",
        href: "#automated-reports",
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
                  src={section.image || "/images/DashboardPreview.png"}
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
