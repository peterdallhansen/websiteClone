"use client";
import SidebarMenu from "@/components/SidebarMenu";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import BlurFade from "@/components/ui/blur-fade";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function Showcase() {
  const [activeSection, setActiveSection] = useState("");

  const sections = useMemo(
    () => [
      {
        id: "seamless-integration",
        title: "Seamless Integration",
        body: `Our integration platform connects effortlessly with your existing infrastructure. Enjoy a hassle-free setup with flexible interfaces designed for rapid deployment and minimal disruption.`,
        cta: "Learn more",
        href: "#seamless-integration",
      },
      {
        id: "ease-of-maintenance",
        title: "Ease of Maintenance",
        body: `Engineered for simplicity, our solution minimizes hardware dependencies and streamlines updates. Experience robust performance with reduced downtime, letting your team focus on strategic initiatives instead of system upkeep.`,
        cta: "Learn more",
        href: "#ease-of-maintenance",
      },
      {
        id: "data-migration",
        title: "Data Migration & Legacy Support",
        body: `Transition effortlessly from legacy systems. Our platform supports smooth data migration from popular people counters like Vemco and Xovis, integrating historical data into a unified analytics solution without disruption.`,
        cta: "Learn more",
        href: "#data-migration",
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
          <h2 className="text-xl md:text-1xl xl:text-2xl leading-tight text-primary text-center max-w-[750px]  mb-20">
            Discover our integration capabilities designed for ease of
            maintenance and seamless data migration—from legacy people counters
            like Vemco and Xovis to our modern, unified analytics platform.
          </h2>
        </BlurFade>

        <div className="w-full flex flex-row gap-8 pt-40 relative">
          {/* Sidebar */}
          <div
            className="self-start w-[400px] hidden md:block sticky top-40"
            style={{ position: "sticky" }}
          >
            <SidebarMenu
              sections={sections}
              activeSection={activeSection}
              currentPath="/features/integration"
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
                <p className="text-xl md:text-1xl xl:text-md leading-tight text-primary max-w-[750px] text-opacity-60 mb-8 text-left">
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
