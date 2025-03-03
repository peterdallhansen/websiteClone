import BlurFade from "@/components/ui/blur-fade";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import Image from "next/image";

function Main() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center flex-1 p-8 pb-0 gap-16 sm:p-20">
      <main className="flex flex-col gap-4 row-start-2 items-center ">
        <BlurFade delay={0.25} inView>
          <h4 className="text-sm md:text-lg text-primary text-center">
            AI-Powered BI
          </h4>
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold leading-tight text-primary text-center">
            Transform Data Into Actionable Insights
          </h2>
        </BlurFade>
        <BlurFade delay={0.6} inView>
          <h2 className="text-xl md:text-1xl xl:text-2xl  mb-8 leading-tight text-primary text-center max-w-[750px] text-opacity-60">
            Harness AI to analyze data, predict trends, and drive smarter
            business decisions.
          </h2>
        </BlurFade>
        <BlurFade delay={0.6} inView>
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/images/Frame70.png"
              className="transform scale-100 hover:scale-110 transition-transform duration-500"
              alt="Hero image"
              width={1500}
              height={2016}
            />
          </div>
        </BlurFade>
      </main>
    </div>
  );
}

export default Main;
