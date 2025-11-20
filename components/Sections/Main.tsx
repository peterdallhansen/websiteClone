"use client";
import { useEffect, useState } from "react";
import BlurFade from "../ui/blur-fade";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

function Main() {
  const [paddingTop, setPaddingTop] = useState(0);

  useEffect(() => {
    if (window.innerWidth <= 768) return; // Disable on mobile

    const scrollFactor = 0.2;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxPad = window.innerHeight;
      const rawPad = scrollY * scrollFactor;
      setPaddingTop(Math.min(rawPad, maxPad));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-screen overflow-hidden mb-20 min-h-screen">
      <div className="">
        <div
          className="relative h-screen w-full flex align-center justify-center rounded-2xl"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: paddingTop,
          }}
        >
          <div className="w-full h-full relative">
            {/* Background Video */}
            <video
              className={cn(
                "w-full h-full object-cover ",
                paddingTop === 0 ? "rounded-none" : "rounded-2xl"
              )}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/bg2.mp4" type="video/mp4" />
            </video>

            {/* Text Overlay - bottom left */}
            <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-2 md:left-6 sm:left-10 md:left-16 flex flex-col items-start justify-end space-y-6 z-10 text-left max-w-3xl px-4">
              <BlurFade delay={0} inView>
                <h1 className="text-4xl sm:text-5xl xl:text-7xl font text-white leading-tight tracking-tight ">
                  AI-Driven Insights <br /> from Every Footstep
                </h1>
              </BlurFade>

              <BlurFade delay={0.1} inView>
                <h2 className="text-base sm:text-lg xl:text-xl text-gray-200 leading-relaxed font-medium ">
                  The only AI platform that transforms your existing cameras into a strategic asset - giving shopping centers and retailers unmatched visitor intelligence without new hardware.
                </h2>
              </BlurFade>

              <BlurFade delay={0.3} inView>
                <a href="#features">
                  <Button className="bg-white hover:text-white text-black  py-5 px-6 rounded-3xl shadow-lg hover:bg-black transition-all duration-300">
                    See It In Action
                  </Button>
                </a>
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
