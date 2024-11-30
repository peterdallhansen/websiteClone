import { BentoDemo } from "@/components/ui/BentoDemo";
import BlurFade from "@/components/ui/blur-fade";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import React from "react";

function Main() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center flex-1 p-8 pb-0 gap-16 sm:p-20">
      <main className="flex flex-col gap-4 row-start-2 items-center ">
        <BlurFade delay={0.25} inView>
          <h4
            className="text-sm md:text-lg text-accent text-center"
            style={{
              textShadow: "0 0 12px rgba(107, 183, 225, 1)",
              backgroundImage:
                "linear-gradient(309deg, rgb(166, 221, 255) 2.25%, rgba(107,183,225,1) 48.08%, rgb(0, 119, 255) 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            3D Map
          </h4>
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold  leading-tight text-white text-center  ">
            Visualize, Interact, Analyze
          </h2>
        </BlurFade>
        <BlurFade delay={0.6} inView>
          <h2 className="text-xl md:text-1xl xl:text-2xl  mb-8 leading-tight text-white text-center max-w-[750px] text-opacity-60">
            Experience the future of data visualization with dynamic 3D maps.
          </h2>
        </BlurFade>
        <BlurFade delay={0.6} inView>
          <div className="relative">
            <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="/images/localhost_3001_ (1).png"
              thumbnailAlt="Hero Video"
            />
          </div>
        </BlurFade>
      </main>
    </div>
  );
}

export default Main;
