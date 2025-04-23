import React from "react";
import AnimatedShinyText from "../ui/animated-shiny-text";
import { ArrowRightIcon, LucideLock } from "lucide-react";

function GDPR() {
  return (
    <section className=" items-center justify-items-center  mb-20  gap-32 sm:p-20 py-40 ">
      <div className="w-[1200px] h-[700px] bg-[#F6F6F6] rounded-2xl p-20 flex relative">
        <div className=" space-y-6 w-full   ">
          <h4 className="text-sm md:text-lg text-black text-left">
            GDPR Compliance
          </h4>
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            Secure Data.
            <br /> Trusted Privacy.
          </h1>
          <p className="text-black/80 max-w-3xl">
            Our platform is designed with{" "}
            <span className="font-bold">privacy by default</span>, fully
            compliant with
            <span className="font-bold"> GDPR</span> and the{" "}
            <span className="font-bold">AI Act</span>. We use
            <span className="font-bold"> real-time anonymization</span>, avoid
            storing
            <span className="font-bold">
              {" "}
              personally identifiable information
            </span>
            . You gain deep insights—without ever compromising user privacy.
          </p>

          <a href={"/compliance"}>
            <AnimatedShinyText
              color={"text-accent"}
              className="inline-flex items-center justify-center px-4 pl-0 py-2 transition ease-out hover:text-black/60  text-accent   mb-8"
            >
              <span>{"Read Full Article"}</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </a>
        </div>
        <LucideLock
          className="h-full w-2/3 flex align-center justify-center "
          color="black"
        />
      </div>
    </section>
  );
}

export default GDPR;
