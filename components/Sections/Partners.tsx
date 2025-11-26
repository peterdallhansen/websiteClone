"use client";

import BlurFade from "../ui/blur-fade";
import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

import MagasinLogo from "@/assets/partners/magasin.svg";
import MicrosoftLogo from "@/assets/partners/microsoft.svg";
import NvidiaLogo from "@/assets/partners/nvidia.svg";
import InnofactorLogo from "@/assets/partners/innofactor.svg";
import DTUSkylabLogo from "@/assets/partners/dtu.svg";

export default function Partners() {
  const companies = [
    { Component: MagasinLogo },
    { Component: MicrosoftLogo },
    { Component: NvidiaLogo },
    { Component: InnofactorLogo },
    { Component: DTUSkylabLogo },
  ];

  return (
    <div className="w-full overflow-hidden">
      <Marquee
        pauseOnHover
        className="[--duration:20s] gap-8 sm:gap-16"
        repeat={20}
      >
        {companies.map(({ Component }, index) => (
          <BlurFade
            inView
            delay={index * 0.1 + 0.2}
            key={index}
            className="flex items-center justify-center mx-4 sm:mx-8"
          >
            <div className="flex items-center justify-center w-24 sm:w-32 h-12 sm:h-16">
              <Component
                style={{ maxWidth: "100%", maxHeight: "100%", fill: "#9ca3af" }}
                className="opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-105"
              />
            </div>
          </BlurFade>
        ))}
      </Marquee>
    </div>
  );
}
