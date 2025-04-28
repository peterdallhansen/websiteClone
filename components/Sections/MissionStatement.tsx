import React from "react";
import BlurFade from "../ui/blur-fade";

function MissionStatement() {
  return (
    <section className="flex-col items-center justify-center space-y-6 z-[10] px-4 text-center max-w-[800px] py-40 ">
      <BlurFade delay={0.25} inView>
        <h4 className="text-sm md:text-lg text-primary text-center">
          Mission Statement
        </h4>
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold leading-tight text-primary text-center">
          Transforming everyday spaces into intelligent environments.
        </h2>
      </BlurFade>
      {/*  <BlurFade delay={0.6} inView>
        <p className="text-base md:text-lg text-primary text-center">
          We turn everyday spaces into sources of intelligence—helping
          organizations move faster, plan smarter, and shape better experiences.
        </p>
      </BlurFade> */}
    </section>
  );
}

export default MissionStatement;
