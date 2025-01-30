import { BentoDemo } from "@/components/ui/BentoDemo";
import BlurFade from "@/components/ui/blur-fade";
import React from "react";

function Features() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center flex-1 p-8 pb-20 gap-16 sm:p-20"
      id="features"
    >
      <main className="flex flex-col gap-4 row-start-2 items-center ">
        <BlurFade delay={0.25} inView>
          <h4 className="text-sm md:text-lg text-white text-center">
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
    </div>
  );
}

export default Features;
