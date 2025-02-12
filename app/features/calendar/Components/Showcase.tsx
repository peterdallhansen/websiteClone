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
        id: "event-planning",
        title: "Event Planning",
        body: `Plan and coordinate events effortlessly with our intuitive platform. Customize templates and workflows to ensure every detail is covered.`,
        cta: "Learn more",
        href: "#event-planning",
        image: "/images/frame69.png",
      },
      {
        id: "schedule-management",
        title: "Schedule Management",
        body: `Optimize your timelines with dynamic scheduling tools. Sync tasks, set deadlines, and execute flawlessly.`,
        cta: "Learn more",
        href: "#schedule-management",
      },
      {
        id: "validation-tools",
        title: "Validation Tools",
        body: `Confirm dependencies and approvals ahead of time using robust validation tools to guarantee readiness before every event.`,
        cta: "Learn more",
        href: "#validation-tools",
      },
      {
        id: "success-measurement",
        title: "Success Measurement",
        body: `Analyze engagement and ROI with comprehensive metrics. Refine strategies with data-driven insights post-event.`,
        cta: "Learn more",
        href: "#success-measurement",
      },
      {
        id: "team-collaboration",
        title: "Team Collaboration",
        body: `Facilitate seamless teamwork with shared calendars and task assignments. Keep everyone aligned and informed throughout the planning process.`,
        cta: "Learn more",
        href: "#team-collaboration",
      },
      {
        id: "reminders-alerts",
        title: "Reminders & Alerts",
        body: `Stay on track with automated reminders and timely alerts. Never miss a deadline with notifications tailored to your schedule.`,
        cta: "Learn more",
        href: "#reminders-alerts",
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
            Elevate your event planning with a powerful calendar platform. Plan
            effectively, schedule seamlessly, validate readiness, and measure
            success with tools that keep you ahead.
          </h2>
        </BlurFade>

        <div className="w-full flex flex-row gap-8 pt-40 relative">
          {/* Sidebar */}
          <div
            className="self-start w-[400px] sticky top-40 hidden sm:flex"
            style={{ position: "sticky" }}
          >
            <SidebarMenu
              sections={sections}
              currentPath={"/features/calendar"}
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
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 pl-0 py-1 transition ease-out hover:text-neutral-600  hover:dark:text-neutral-400 mb-8">
                    <span>{section.cta}</span>
                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </AnimatedShinyText>
                </a>

                <Image
                  src={
                    section.image
                      ? section.image
                      : index % 2 !== 0
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
