import React from "react";
import AnimatedShinyText from "../ui/animated-shiny-text";
import { ArrowRightIcon, LucideLock } from "lucide-react";

function GDPR() {
  return (
    <section className="items-center justify-items-center mb-20 gap-32 sm:p-20 py-40 px-4">
      <div className="w-full   max-w-6xl bg-[#F6F6F6] rounded-2xl p-6 md:p-12 lg:p-20 flex flex-col lg:flex-row relative overflow-hidden gap-8">
        <div className="space-y-6 w-full">
          <h4 className="text-sm md:text-lg text-black text-left">
            GDPR Compliance
          </h4>
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            Build With <br /> Privacy in Mind
          </h1>
          <p className="text-black/80 max-w-3xl">
            Our platform is built with{" "}
            <span className="font-bold">full GDPR compliance</span> and{" "}
            <span className="font-bold">privacy by design</span>, ensuring that{" "}
            <span className="font-bold">all data is anonymized</span> and
            processed securely. We{" "}
            <span className="font-bold">
              never store or use personally identifiable information or employ
              facial recognition
            </span>
            ; our analytics focus solely on behavioral insights, not identity
            tracking.{" "}
            {/* To safeguard your information, we employ{" "}
            <span className="font-bold">enterprise-grade security</span> with{" "}
            <span className="font-bold">
              data encrypted both in transit and at rest
            </span>
            , <span className="font-bold">role-based access controls</span>, and
            a <span className="font-bold">secure cloud infrastructure</span>. */}
          </p>

          <a href="/compliance">
            <AnimatedShinyText
              color="text-accent"
              className="inline-flex items-center justify-center px-4 pl-0 py-2 transition ease-out hover:text-black/60 text-accent mb-8"
            >
              <span>Read Full Article</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </a>
        </div>
        <LucideLock
          className="h-full w-2/3 flex align-center justify-center"
          color="black"
        />
      </div>
    </section>
  );
}

export default GDPR;
