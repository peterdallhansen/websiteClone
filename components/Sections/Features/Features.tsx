import { BentoDemo } from "@/components/ui/BentoDemo";
import BlurFade from "@/components/ui/blur-fade";
import React from "react";

function Features() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center flex-1 p-8 pb-20 gap-16 sm:p-20">
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
            Features
          </h4>
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-8 leading-tight text-white text-center  ">
            Uncover Unexplored Business Insights
          </h2>
        </BlurFade>
        <BlurFade delay={1} inView>
          <BentoDemo />
        </BlurFade>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}

export default Features;
