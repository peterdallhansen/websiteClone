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

  const [isMainVisible, setIsMainVisible] = useState(false);
  const [isMissionVisible, setIsMissionVisible] = useState(false);

  useEffect(() => {
    // Observer for the Main section
    const mainObserver = new IntersectionObserver(
      ([entry]) => {
        setIsMainVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    // Observer for the Mission Statement section
    const missionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsMissionVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (mainRef.current) {
      mainObserver.observe(mainRef.current);
    }

    if (missionStatementRef.current) {
      missionObserver.observe(missionStatementRef.current);
    }

    return () => {
      setTheme("dark");
      if (mainRef.current) {
        mainObserver.unobserve(mainRef.current);
      }
      if (missionStatementRef.current) {
        missionObserver.unobserve(missionStatementRef.current);
      }
    };
  }, []);

  // Switch themes based on the visibility of the two sections:
  // If either section is visible, use dark mode; otherwise, light mode.
  useEffect(() => {
    if (isMainVisible || isMissionVisible) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [isMainVisible, isMissionVisible, setTheme]);

  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col overflow-hidden items-center transition-colors duration-500">
      {/* Main Section with ref */}
      <div ref={mainRef}>
        <Main />
      </div>
      <Info />
      <Offerings />

      {/* Mission Statement Section with ref */}
      <main className="flex-col items-center justify-center space-y-6 z-[10] px-4 text-center max-w-[800px] py-40 ">
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
      </main>
      <div className=" items-center justify-items-center  mb-20  gap-32 sm:p-20 py-40 ">
        <section className="w-[1200px] h-[700px] bg-[#F6F6F6] rounded-xl p-20 flex relative">
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
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 pl-0 py-2 transition ease-out hover:text-black/60  text-accent   mb-8">
                <span>{"Read Full Article"}</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </a>
          </div>
          <LucideLock
            className="h-full w-2/3 flex align-center justify-center "
            color="black"
          />
        </section>
      </div>
      <div
        ref={missionStatementRef}
        className=" antialiased w-full mx-auto scroll-smooth flex flex-col overflow-hidden items-center "
      >
        {/*   <News /> */}
        <Gallery />
      </div>
    </div>
  );
}
