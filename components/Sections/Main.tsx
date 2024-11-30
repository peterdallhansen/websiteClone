import React from "react";
import Header from "../Header";
import { BorderBeam } from "../ui/border-beam";
import BlurFade from "../ui/blur-fade";
import { Button } from "../ui/button";
import {
  ArrowRightIcon,
  Check,
  LucidePlay,
  LucidePlayCircle,
  LucideVideo,
} from "lucide-react";
import AnimatedShinyText from "../ui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { FaCirclePlay } from "react-icons/fa6";

function Main() {
  return (
    <div
      className=" h-[100vh]  overflow-hidden overflow-x-hidden w-screen"
      style={{ overflowX: "hidden" }}
    >
      <BorderBeam
        size={1000}
        className="z-20 overflow-hidden overflow-x-hidden"
        colorFrom="#6BB7E1"
        borderWidth={2}
        duration={50}
        colorTo="#13DEB9"
      />
      {/* Video Background */}
      <video
        className="absolute top-1/2 left-1/3 w-[80vw] h-[100vh] object-cover transform -translate-y-1/2 pointer-events-none overflow-hidden overflow-x-hidden"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-[100vh] bg-gradient-to-r from-black via-black to-black/20 via-40%  pointer-events-none"></div>

      {/* Text Content */}
      <div className="absolute top-1/3 left-[10%] flex flex-col items-start justify-center space-y-6">
        <BlurFade delay={0.25} inView>
          <h1
            className="text-5xl md:text-7xl xl:text-8xl font-extrabold text-white leading-tight"
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
        <BlurFade delay={0.5} inView>
          <h2 className="text-lg md:text-xl text-gray-300 leading-normal">
            Profit from understanding your consumers thoroughly. <br />
            Get access to panoramic and holistic insights on your entire
            operation.
          </h2>
        </BlurFade>
        <BlurFade delay={0.75} inView>
          <div className="flex items-center space-x-4">
            <Button className="bg-accent hover:text-muted-foreground  text-white py-5 ">
              Contact Sales
            </Button>
            <Button
              variant={"ghost"}
              className="py-5 hover:bg-transparent hover:text-muted font-bold "
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
