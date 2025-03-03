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
import GDPR from "@/components/Sections/GDPR";
import MissionStatement from "@/components/Sections/MissionStatement";
import CookieBanner from "@/components/CookieBanner";
import Image from "next/image";

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
      setTheme("dark");
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
      <BlurFade delay={0.25} inView>
        <h4 className="text-sm md:text-lg text-primary text-center mt-20">
          Cases
        </h4>
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold leading-tight text-primary text-center mb-8">
          Proven Results in Action
        </h2>
      </BlurFade>
      <div className="flex flex-row gap-8 container">
        <div className="rounded-lg overflow-hidden w-full space-y-2 snap-end">
          <BlurFade delay={0.25} inView>
            <div className="h-[500px] relative bg-[#f6f6f6] rounded-xl">
              <Image
                alt="Magasin Aalborg"
                src="https://files.guidedanmark.org/files/483/206197_Magasin_Aalborg.jpg"
                fill
                quality={100}
                className="object-cover rounded-lg h-full object-center"
              />
            </div>
            <div className="p-2">
              <p className="text-sm text-primary/60 mb-1">Magasin</p>
              <h3 className="text-xl font-semibold mb-2">
                Live Analytics Fuel 20% Footfall Surge
              </h3>
              <p className="text-sm text-primary/80">
                Magasin Aalborg leverages our real-time analytics to track
                visitor behavior, optimize store layouts, and boost in-store
                performance. Their adoption of our solution resulted in a{" "}
                <span className="font-bold">20% increase in footfall</span> and
                a <span className="font-bold">15% rise in sales</span>,
                significantly enhancing both customer engagement and operational
                efficiency.
              </p>
            </div>
          </BlurFade>
        </div>
        <div className="rounded-lg overflow-hidden w-full space-y-2 snap-end">
          <BlurFade delay={0.25} inView>
            <div className="h-[500px] relative bg-[#f6f6f6] rounded-xl">
              <Image
                src="https://bestofhorsens.dk/f/bytorvhorsens_shopping.jpg"
                alt="SSCP Shopping Center"
                fill
                quality={100}
                className="object-cover rounded-lg h-full object-center"
              />
            </div>
            <div className="p-2">
              <p className="text-sm text-primary/60 mb-1">SSCP</p>
              <h3 className="text-xl font-semibold mb-2">
                Predictive Insights Drive 30% Conversion Boost
              </h3>
              <p className="text-sm text-primary/80">
                Scandinavian Shopping Center Partners (SSCP) utilizes our
                predictive analytics to anticipate visitor trends and fine-tune
                their operations. With our solution, they achieved a{" "}
                <span className="font-bold">25% reduction in idle times</span>{" "}
                and a{" "}
                <span className="font-bold">30% boost in conversion rates</span>
                , driving measurable improvements in overall efficiency.
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
      <MissionStatement />
      <GDPR />
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
