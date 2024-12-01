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

  const features = [
    {
      id: "event-planning",
      Icon: CogIcon,
      name: "Event Planning",
      description: "Organize your events with precision and clarity.",
      href: "#event-planning",
      cta: "Learn more",
      className: "row-span-1 col-span-2 lg:col-span-1",
      background: (
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]"
          )}
        />
      ),
    },

    {
      id: "success-measurement",
      Icon: BarChart2Icon,
      name: "Success Measurement",
      description: "Analyze key metrics to gauge event impact.",
      href: "#success-measurement",
      cta: "Learn more",
      className: "row-span-1 col-span-3 lg:col-span-2",
      background: (
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0  height-[200%]   skew-y-12"
          )}
        />
      ),
    },
    {
      id: "schedule-management",
      Icon: ClockIcon,
      name: "Schedule Management",
      description: "Effortlessly manage schedules across teams and projects.",
      href: "#schedule-management",
      cta: "Learn more",
      className: "row-span-2 col-span-3 lg:col-span-3",
      background: (
        <div className="absolute flex h-full [mask-image:radial-gradient(700px_circle_at_top_center,white,transparent)]  w-full flex-col items-center justify-center overflow-hidden rounded-lg   md:shadow-xl">
          <Image
            src={"/images/calendar.png"}
            alt="Drag & Drop Preview"
            width={6374}
            height={3574}
            quality={100}
            className="w-[80%] absolute bottom-48 object-contain hover:bottom-[180px] transition-all  "
            style={{
              borderRadius: "15px",
              zIndex: 99999,
            }}
          />
        </div>
      ),
    },
    {
      id: "team-collaboration",
      Icon: Users,
      name: "Team Collaboration",
      description: "Enhance collaboration with shared calendars and tasks.",
      href: "#team-collaboration",
      cta: "Learn more",
      className: "row-span-2 col-span-3 lg:col-span-2",
      background: (
        <div className="relative flex h-[600px] [mask-image:radial-gradient(620px_circle_at_top_center,white,transparent)]  w-full flex-col items-center justify-center overflow-hidden rounded-lg   md:shadow-xl">
          <Image
            src={"/images/Share.png"}
            alt="Share preview"
            width={1281}
            height={1054}
            quality={100}
            className="w-[50%] absolute bottom-0 object-contain hover:bottom-2 transition-all  "
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
      id: "reminders-alerts",
      Icon: SlidersHorizontal,
      name: "Reminders & Alerts",
      description: "Stay informed with automatic reminders and alerts.",
      href: "#reminders-alerts",
      cta: "Learn more",
      className: "row-span-2 col-span-1 lg:col-span-1",
      background: (
        <AnimatedListDemo className="absolute right-2 top-4 h-[600px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      ),
    },
  ];

  const sections = useMemo(
    () => [
      {
        id: "event-planning",
        title: "Event Planning",
        body: `Plan your events with ease using intuitive tools designed for clarity and organization. Ensure every detail is accounted for with templates and customizable workflows that fit your needs.`,
        cta: "Learn more",
        href: "#event-planning",
      },
      {
        id: "schedule-management",
        title: "Schedule Management",
        body: `Keep track of every event, task, and deadline with an advanced scheduling system. Coordinate across teams, adjust timelines on the fly, and avoid conflicts effortlessly.`,
        cta: "Learn more",
        href: "#schedule-management",
      },
      {
        id: "validation-tools",
        title: "Validation Tools",
        body: `Use built-in validation tools to check dependencies, approvals, and readiness before events go live. Avoid last-minute surprises with a structured approach to planning.`,
        cta: "Learn more",
        href: "#validation-tools",
      },
      {
        id: "success-measurement",
        title: "Success Measurement",
        body: `Analyze outcomes with comprehensive metrics and insights. Measure attendee engagement, feedback, and ROI to refine your strategies for future success.`,
        cta: "Learn more",
        href: "#success-measurement",
      },
      {
        id: "team-collaboration",
        title: "Team Collaboration",
        body: `Enable seamless collaboration with shared calendars, task assignments, and progress tracking. Keep everyone aligned and informed at every stage.`,
        cta: "Learn more",
        href: "#team-collaboration",
      },
      {
        id: "reminders-alerts",
        title: "Reminders & Alerts",
        body: `Never miss a beat with automated reminders and alerts for key tasks and deadlines. Stay proactive and focused with notifications tailored to your preferences.`,
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center flex-1 p-8  pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col gap-4 row-start-2 items-center ">
        <BlurFade delay={0} inView>
          <h2 className="text-xl md:text-1xl xl:text-2xl leading-tight text-white text-center max-w-[750px] text-opacity-80 mb-20">
            Elevate your event planning with a powerful calendar platform. Plan
            effectively, schedule seamlessly, validate readiness, and measure
            success with tools that keep you ahead.
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
            className="self-start w-[400px] sticky top-40 hidden sm:flex"
            style={{
              position: "sticky",
            }}
          >
            <SidebarMenu
              sections={sections}
              currentPath={"/feautures/calendar"}
              activeSection={activeSection}
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
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4  pl-0 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400  mb-8 ">
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
