"use client";
import { useEffect, useState } from "react";
import BlurFade from "../ui/blur-fade";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Mouse } from "lucide-react";

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
            <div className="absolute bottom-12 sm:bottom-16 md:bottom-8 left-2 md:left-6 sm:left-10 md:left-16 flex flex-col items-start justify-end space-y-6 z-10 text-left max-w-3xl px-4">
              <BlurFade delay={0} inView>
                <h1 className="text-4xl sm:text-5xl xl:text-8xl font text-white leading-tight tracking-tight ">
                  Total clarity from cloud to crowd.
                </h1>
              </BlurFade>

              <BlurFade delay={0.1} inView>
                <h2 className="text-base sm:text-lg xl:text-2xl text-gray-200 leading-relaxed font-medium ">
                  Zonify.ai is forging the new frontier of spatial intelligence
                  to unlock a more intelligent, interoperable built environment.
                </h2>
              </BlurFade>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-80">
          <Mouse className="w-8 h-8 text-white" />
          <span className="text-white text-sm font-medium">Scroll</span>
        </div>
      </div>
    </section>
  );
}

export default Main;
