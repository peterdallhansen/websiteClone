import { FaCirclePlay } from "react-icons/fa6";
import BlurFade from "../ui/blur-fade";
import { Button } from "../ui/button";
import ShineBorder from "../ui/shine-border";

function Main() {
  return (
    <div className="relative h-[calc(100vh-10px)] w-screen overflow-hidden  mb-20">
      <ShineBorder
        borderRadius={0}
        borderWidth={5}
        className="absolute inset-0 -top-[10px] z-[99999] flex items-center justify-center bg-transparent pointer-events-none blur scale-x-125"
        color={["rgba(107,183,225,1)", "rgb(0, 119, 255)"]}
      >
        <div className="relative h-[calc(100vh+20px)] w-screen bg-transparent"></div>
      </ShineBorder>
      <ShineBorder
        borderRadius={0}
        borderWidth={10}
        className="absolute inset-0 -top-[20px] z-[99999] flex items-center justify-center bg-transparent pointer-events-none blur-[30px] scale-x-125"
        color={["rgba(107,183,225,1)", "rgb(0, 119, 255)"]}
      >
        <div className="relative h-[calc(100vh+30px)] w-screen bg-transparent"></div>
      </ShineBorder>
      {/* Video Background */}
      <video
        className="absolute top-1/2 left-1/3 w-[80vw] h-[100vh] object-cover transform -translate-y-1/2 pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-full h-screen bg-gradient-to-r from-black via-black to-black/20 pointer-events-none"></div>

      {/* Text Content */}
      <div className="absolute top-1/3 left-[10%] flex flex-col items-start justify-center space-y-6 z-[10]">
        <BlurFade delay={0} inView>
          <h1
            className="text-5xl md:text-7xl xl:text-8xl font-bold text-white leading-tight"
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundImage:
                "linear-gradient(281deg, rgba(255, 255, 255, 0.56) 0%, rgba(255, 255, 255, 0.88) 47%, rgb(255, 255, 255) 100%)",
            }}
          >
            Footfall Analytics <br /> for Smarter Retail
          </h1>
        </BlurFade>
        <BlurFade delay={0.1} inView>
          <h2 className="text-lg md:text-xl text-gray-300 leading-normal">
            Profit from understanding your consumers thoroughly. <br />
            Get access to panoramic and holistic insights on your entire
            operation.
          </h2>
        </BlurFade>
        <BlurFade delay={0.3} inView>
          <div className="flex items-center space-x-4">
            <Button className="bg-accent hover:text-muted-foreground text-white py-5">
              Contact Sales
            </Button>
            <Button
              variant={"ghost"}
              className="py-5 hover:bg-transparent hover:text-muted font-bold"
            >
              <FaCirclePlay size={24} />
              Watch video
            </Button>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}

export default Main;
