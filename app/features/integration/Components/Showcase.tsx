"use client";
import SidebarMenu from "@/components/SidebarMenu";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { AnimatedBeamDemo } from "@/components/ui/AnimatedBeamDemo";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import BlurFade from "@/components/ui/blur-fade";
import DotPattern from "@/components/ui/dot-pattern";
import GridPattern from "@/components/ui/grid-pattern";
import { Integration } from "@/components/ui/Integration";
import { cn } from "@/lib/utils";
import {
  ArrowRightIcon,
  BarChartIcon,
  BriefcaseBusiness,
  Building2,
  ClockIcon,
  File,
  FileText,
  Globe,
  GlobeIcon,
  Layers,
  Share2,
  ShieldIcon,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function Showcase() {
  const [activeSection, setActiveSection] = useState("");

  const features = [
    {
      id: "pos-integration",
      Icon: GlobeIcon,
      name: "POS Integration",
      description: "Integrate point-of-sale data directly into your platform.",
      href: "#pos-integration",
      cta: "Learn more",
      className: "row-span-1 col-span-3 lg:col-span-1",
      background: (
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0  height-[200%]   skew-y-12"
          )}
        />
      ),
    },
    {
      id: "tenant-data-integration",
      Icon: Users,
      name: "Tenant Data Integration",
      description: "Sync tenant data directly from your existing systems.",
      href: "#tenant-data-integration",
      cta: "Learn more",
      className: "row-span-1   col-span-3 lg:col-span-2",
      background: (
        <Integration className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      ),
    },
    {
      id: "drag-and-drop",
      Icon: FileText,
      name: "Drag & Drop Updates",
      description:
        "Quickly update tenant lists with drag-and-drop functionality.",
      href: "#drag-and-drop",
      cta: "Learn more",
      className: "row-span-2 col-span-3 lg:col-span-2",
      background: (
        <div className="relative flex h-[500px] [mask-image:radial-gradient(550px_circle_at_top_center,white,transparent)]  w-full flex-col items-center justify-center overflow-hidden rounded-lg   md:shadow-xl">
          <Image
            src={"/images/drag.png"}
            alt="Drag & Drop Preview"
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
      id: "real-time-sync",
      Icon: ClockIcon,
      name: "Real-Time Sync",
      description: "Ensure data accuracy with automatic real-time updates.",
      href: "#real-time-sync",
      cta: "Learn more",
      className: "row-span-3 col-span-3 lg:col-span-1",
      background: (
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
      ),
    },
    {
      id: "data-security",
      Icon: ShieldIcon,
      name: "Data Security",
      description:
        "Protect your data with enterprise-grade security protocols.",
      href: "#data-security",
      cta: "Learn more",
      className: "row-span-1 col-span-3 lg:col-span-2",
      background: (
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0  height-[200%]   skew-y-12"
          )}
        />
      ),
    },
  ];

  const sections = useMemo(
    () => [
      {
        id: "pos-integration",
        title: "POS Integration",
        body: `Integrate your point-of-sale data seamlessly into the platform. Gain real-time insights into sales performance, track trends, and enhance decision-making with a fully connected ecosystem.`,
        cta: "Learn more",
        href: "#pos-integration",
      },
      {
        id: "tenant-data-integration",
        title: "Tenant Data Integration",
        body: `Connect your tenant data directly from your existing systems. Keep your information synchronized across platforms, ensuring accurate and up-to-date records with minimal manual intervention.`,
        cta: "Learn more",
        href: "#tenant-data-integration",
      },
      {
        id: "drag-and-drop",
        title: "Drag & Drop Updates",
        body: `Streamline tenant list updates with drag-and-drop functionality. Upload Excel or CSV files effortlessly, making it easier to maintain and adapt to changes in real time.`,
        cta: "Learn more",
        href: "#drag-and-drop",
      },
      {
        id: "real-time-sync",
        title: "Real-Time Sync",
        body: `Enjoy peace of mind with real-time data synchronization. Eliminate delays and inaccuracies by ensuring every update is reflected instantly across your system.`,
        cta: "Learn more",
        href: "#real-time-sync",
      },
      {
        id: "data-security",
        title: "Data Security",
        body: `Protect sensitive information with robust security protocols. Benefit from encryption, user access controls, and continuous monitoring to keep your data safe and compliant.`,
        cta: "Learn more",
        href: "#data-security",
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
            Seamlessly integrate POS and tenant data directly from your
            platform. Enjoy effortless maintenance, including drag-and-drop file
            uploads for quick updates, ensuring your system is always
            up-to-date.
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
              currentPath="/features/integration"
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
