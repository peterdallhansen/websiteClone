"use client";
import BlurFade from "@/components/ui/blur-fade";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import Image from "next/image";

function Main() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center flex-1 p-8 pb-0 gap-16 sm:p-20">
      <main className="flex flex-col gap-4 row-start-2 items-center">
        <BlurFade delay={0.25} inView>
          <h4 className="text-sm md:text-lg text-primary text-center">
            Analytics Hub
          </h4>
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold leading-tight text-primary text-center">
            Unlock Actionable Insights with Advanced Analytics
          </h2>
        </BlurFade>
        <BlurFade delay={0.6} inView>
          <p className="text-xl md:text-1xl xl:text-2xl mb-8 leading-tight text-primary text-center max-w-[750px] text-opacity-60">
            Leverage real-time data and powerful visualization tools to
            transform your raw data into strategic insights that drive business
            growth.
          </p>
        </BlurFade>
        <BlurFade delay={0.6} inView>
          <div className="relative overflow-hidden rounded-xl">
            <video
              src="/ad2.mp4"
              width={1500}
              height={2016}
              autoPlay
              loop
              muted
            />
          </div>
        </BlurFade>
      </main>
    </div>
  );
}

export default Main;
