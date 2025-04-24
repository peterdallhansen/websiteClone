import BlurFade from "../ui/blur-fade";
import { Button } from "../ui/button";

function Main() {
  return (
    <section className="relative h-screen w-screen overflow-hidden mb-20">
      {/* Center container for video and overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Video Container */}
        <div className="relative  h-screen w-screen flex align-center justify-center rounded-2xl p-1  md:p-8  md:pt-16 ">
          <video
            className="w-full h-full p-4 lg:w-full md:p-0 md:rounded-xl object-cover "
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/2.mp4" type="video/mp4" />
          </video>
          {/*    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-6 z-[10] px-4 text-center min-w-[350px]  ">
            <BlurFade delay={0} inView>
              <h1 className="text-5xl md:text-5xl xl:text-7xl xl:text-7xl font-bold text-primary leading-tight text-wrap  ">
                Empowering <br />
                Smarter Decisions
              </h1>
            </BlurFade>
            <BlurFade delay={0.1} inView>
              <h2 className="text-lg md:text-lg xl:text-xl text-gray-200 leading-normal font-semibold">
                Using clear, real-time analytics, we empower companies to <br />
                understand their traffic and improve everyday operations.
              </h2>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <a
                className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
                href="#features"
              >
                <Button className="bg-white hover:text-muted-foreground text-black py-5 px-6 rounded-3xl">
                  Learn More
                </Button>
              </a>
            </BlurFade>
          </div> */}
          {/* Text Overlay - positioned relative to the video container */}
          <div className="absolute bottom-8 left-12 p-16 flex flex-col items-start justify-center space-y-6 z-10 text-left min-w-[350px]">
            <BlurFade delay={0} inView>
              <h1 className="text-5xl md:text-5xl xl:text-7xl font-bold text-white leading-tight">
                AI-Driven Insights <br /> from Every Footstep
              </h1>
            </BlurFade>
            <BlurFade delay={0.1} inView>
              <h2 className="text-lg md:text-lg xl:text-xl text-gray-200 leading-normal font-semibold">
                Our cloud-based AI solution enables 2D cameras <br /> to deliver
                real-time analytics, helping companies understand visitor <br />
                behavior, optimize traffic, and enhance everyday operations.
              </h2>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <a
                className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
                href="#features"
              >
                <Button className="bg-white hover:text-muted-foreground text-black py-5 px-6 rounded-3xl">
                  Learn More
                </Button>
              </a>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
