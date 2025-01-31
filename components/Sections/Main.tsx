import BlurFade from "../ui/blur-fade";
import { Button } from "../ui/button";

function Main() {
  return (
    <div className="relative h-screen w-screen overflow-hidden mb-20 ">
      {/* Shine Borders */}

      {/* Video Background - Centered */}
      <video
        className="
          absolute top-1/2 left-1/2
          w-full h-full p-4
          md:max-w-[1900px] md:h-auto md:p-0 md:rounded-xl
          object-cover
          transform -translate-x-1/2 -translate-y-1/2
          pointer-events-none
          rounded-3xl
        "
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/loop4.mp4" type="video/mp4" />
      </video>
      {/*  <video
        className="
          absolute top-1/2 left-[-700px]
          w-full h-full p-4
          md:max-w-[1900px] md:h-auto md:p-0 md:rounded-xl
          object-cover
          transform -translate-x-1/2 -translate-y-1/2
          pointer-events-none
          rounded-3xl
        "
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/vid2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video
        className="
          absolute top-1/2 left-[3250px]
          w-full h-full p-4
          md:max-w-[1900px] md:h-auto md:p-0 md:rounded-xl
          object-cover
          transform -translate-x-1/2 -translate-y-1/2
          pointer-events-none
          rounded-3xl
        "
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/vid3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Text Content - Centered */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-6 z-[10] px-4 text-center min-w-[350px]  ">
        <BlurFade delay={0} inView>
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold text-white leading-tight text-wrap  md:text-nowrap">
            Customer Profiling Unveiled
          </h1>
        </BlurFade>
        <BlurFade delay={0.1} inView>
          <h2 className="text-lg md:text-xl text-gray-200 leading-normal font-semibold">
            Through AI-driven customer profiling, we help you capitalize on the
            full value of your customer base
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
  );
}

export default Main;
