"use client";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import Main from "@/components/Sections/Main";
import Info from "@/components/Sections/Info/page";
import Offerings from "@/components/Offerings";
import News from "@/components/Sections/News/News";
import { Gallery } from "@/components/Sections/Gallary/Gallary";
import BlurFade from "@/components/ui/blur-fade";
import { ArrowRightIcon, ArrowUpRight, LucideLock } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

export default function Home() {
  const { setTheme } = useTheme();
  const mainRef = useRef(null);
  const missionStatementRef = useRef(null);
  const [sectionsVisible, setSectionsVisible] = useState({
    main: false,
    mission: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Use functional updates to get the current state
        setSectionsVisible((prevVisibility) => {
          const updatedVisibility = { ...prevVisibility };
          entries.forEach((entry) => {
            if (entry.target === mainRef.current) {
              updatedVisibility.main = entry.isIntersecting;
            }
            if (entry.target === missionStatementRef.current) {
              updatedVisibility.mission = entry.isIntersecting;
            }
          });
          return updatedVisibility;
        });
      },
      { threshold: 0.1 }
    );

    if (mainRef.current) observer.observe(mainRef.current);
    if (missionStatementRef.current)
      observer.observe(missionStatementRef.current);

    // Cleanup the observer on unmount
    return () => {
      if (mainRef.current) observer.unobserve(mainRef.current);
      if (missionStatementRef.current)
        observer.unobserve(missionStatementRef.current);
    };
  }, []); // empty dependency array is fine now

  useEffect(() => {
    if (sectionsVisible.main) {
      console.log("Main became visible");
    }
    if (sectionsVisible.mission) {
      console.log("Mission became visible");
    }
    // Switch themes based on the visibility of the two sections:
    if (sectionsVisible.main || sectionsVisible.mission) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [sectionsVisible]);

  return (
    <main className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col overflow-hidden items-center transition-colors duration-500">
      {/* Main Section with ref */}
      <div ref={mainRef}>
        <Main />
      </div>
      <Info />
      <Offerings />

      {/* Mission Statement Section with ref */}
      <section className="flex-col items-center justify-center space-y-6 z-[10] px-4 text-center max-w-[800px] py-40 ">
        <BlurFade delay={0.25} inView>
          <h4 className="text-sm md:text-lg text-primary text-center">
            Mission Statement
          </h4>
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold leading-tight text-primary text-center">
            Empowering Smarter Decisions
          </h2>
        </BlurFade>
        <BlurFade delay={0.6} inView>
          <p className="text-base md:text-lg text-primary text-center">
            Transforming raw data into actionable insights with advanced,
            AI-driven analytics that not only fuel your business success but
            also drive sustainable growth, inspire innovation, and empower
            operational excellence across every sector.
          </p>
        </BlurFade>
      </section>
      <section className=" items-center justify-items-center  mb-20  gap-32 sm:p-20 py-40 ">
        <div className="w-[1200px] h-[700px] bg-[#F6F6F6] rounded-2xl p-20 flex relative">
          <div className=" space-y-6 w-full   ">
            <h4 className="text-sm md:text-lg text-black text-left">
              GDPR Compliance
            </h4>
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Secure Data.
              <br /> Trusted Privacy.
            </h1>
            <p className="text-black/80 max-w-3xl">
              Our platform is engineered to meet the{" "}
              <span className="font-bold">highest GDPR standards</span> fully
              complying with <span className="font-bold">GDPR</span> and the{" "}
              <span className="font-bold">AI Act</span>. We ensure{" "}
              <span className="font-bold">transparent user consent</span>,
              robust <span className="font-bold">data anonymization</span>, and
              strict <span className="font-bold">data protection</span> measures
              so you gain actionable insights without compromising privacy.
            </p>
            <a href={"/compliance"}>
              <AnimatedShinyText
                color={"text-accent"}
                className="inline-flex items-center justify-center px-4 pl-0 py-2 transition ease-out hover:text-black/60  text-accent   mb-8"
              >
                <span>{"Read Full Article"}</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </a>
          </div>
          <LucideLock
            className="h-full w-2/3 flex align-center justify-center "
            color="black"
          />
        </div>
      </section>
      <div
        ref={missionStatementRef}
        className=" antialiased w-full mx-auto scroll-smooth flex flex-col overflow-hidden items-center "
      >
        {/*   <News /> */}
        <Gallery />
      </div>
    </main>
  );
}
