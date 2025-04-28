import BlurFade from "../ui/blur-fade";
import { Button } from "../ui/button";

function Main() {
  return (
    <section className="relative h-screen w-screen overflow-hidden mb-20 ">
      {/* Center container for video and overlay */}
      <div className="">
        {/* Video Container */}
        <div className="relativ   h-screen w-screen flex align-center justify-center rounded-2xl  ">
          <div className="w-full h-full relative">
            <video
              className="w-full h-full p-0 lg:w-full md:p-0 md:rounded-xl object-cover "
              autoPlay
              muted
              loop
              playsInline
              controls={false} // Ensures the play button is hidden
            >
              <source src="/videos/bg2.mp4" type="video/mp4" />
            </video>

            <div className="absolute bottom-8 left-2 md:left-10 p-4 md:p-16 flex flex-col items-start justify-center space-y-6 z-10 text-left min-w-[350px]">
              <BlurFade delay={0} inView>
                <h1 className="text-5xl md:text-5xl xl:text-7xl font-bold text-white leading-tight">
                  AI-Driven Insights <br /> from Every Footstep
                </h1>
              </BlurFade>
              <BlurFade delay={0.1} inView>
                <h2 className="text-lg md:text-lg xl:text-xl text-gray-200 leading-normal font-semibold">
                  Our cloud-based AI solution enables 2D cameras <br /> to
                  deliver real-time analytics, helping companies understand
                  visitor <br />
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
            {/*  <img
            className="w-full h-full p-4 lg:w-full md:p-0 md:rounded-xl object-cover "
            src="/images/pexels-bob-price-2512175-764880.jpg"
          /> */}
          </div>

          {/* Text Overlay - positioned relative to the video container */}
        </div>
      </div>
    </section>
  );
}

export default Main;
