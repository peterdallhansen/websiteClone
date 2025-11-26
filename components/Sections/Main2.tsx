"use client";
import { useEffect, useState } from "react";
import BlurFade from "../ui/blur-fade";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Mouse } from "lucide-react";
import Partners from "./Partners";
import LayeredParallax from "../ui/LayeredParallax";

function Main2() {
  return (
    <section className="relative w-screen overflow-hidden mb-20 h-screen pb-0 flex flex-col p-2">
      <div className="flex-1 w-full min-h-0">
        <div
          className="relative h-full w-full flex align-center justify-center rounded-2xl overflow-hidden"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Background Image */}
          {/* Background Image */}
          <LayeredParallax
            background="/images/background2.png"
            foreground="/images/depthlayer.png"
            sensitivity={0.2}
            brightness={0.9}
            alt="Background Fallback"
            className="w-full h-full object-cover rounded-2xl absolute inset-0"
          />
          {/* Subtle black gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)] rounded-2xl pointer-events-none"></div>
          {/* Linear gradient at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black/20 via-transparent to-black/20 rounded-b-2xl pointer-events-none"></div>
          {/* Text Overlay - bottom left */}
          <div className="absolute bottom-12 sm:bottom-16 md:bottom-8 left-2 md:left-6 sm:left-10 md:left-16 flex flex-col items-start justify-end space-y-6 z-10 text-left max-w-3xl px-4">
            <BlurFade delay={0} inView>
              <h1 className="text-4xl sm:text-5xl xl:text-7xl font text-white leading-tight tracking-tight ">
                Total clarity from
                <br /> cloud to crowd.
              </h1>
            </BlurFade>

            <BlurFade delay={0.1} inView>
              <h2 className="text-base sm:text-lg xl:text-2xl text-gray-200 leading-relaxed font-medium ">
                Zonify.ai is forging the new frontier of spatial intelligence to
                unlock a more intelligent, interoperable environment.
              </h2>
            </BlurFade>
          </div>
        </div>
      </div>
      <div className="w-full h-24 flex items-center">
        <Partners />
      </div>
    </section>
  );
}

export default Main2;
