import React from "react";
import BlurFade from "../ui/blur-fade";
import Image from "next/image";

function CaseStudy() {
  return (
    <>
      <BlurFade delay={0.25} inView>
        <h4 className="text-sm md:text-lg text-primary text-center mt-20">
          Cases
        </h4>
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold leading-tight text-primary text-center mb-8">
          Proven Results in Action
        </h2>
      </BlurFade>
      <div className="flex flex-row gap-8 container">
        <div className="rounded-lg overflow-hidden w-full space-y-2 snap-end">
          <BlurFade delay={0.25} inView>
            <div className="h-[500px] relative bg-gray-100 rounded-xl">
              <Image
                alt="Magasin Aalborg"
                src="https://files.guidedanmark.org/files/483/206197_Magasin_Aalborg.jpg"
                fill
                quality={100}
                className="object-cover rounded-lg h-full object-center"
              />
            </div>
            <div className="p-2">
              <p className="text-sm text-primary/60 mb-1">Magasin</p>
              <h3 className="text-xl font-semibold mb-2">
                Live Analytics Fuel 20% Footfall Surge
              </h3>
              <p className="text-sm text-primary/80">
                Magasin Aalborg leverages our real-time analytics to track
                visitor behavior, optimize store layouts, and boost in-store
                performance. Their adoption of our solution resulted in a{" "}
                <span className="font-bold">20% increase in footfall</span> and
                a <span className="font-bold">15% rise in sales</span>,
                significantly enhancing both customer engagement and operational
                efficiency.
              </p>
            </div>
          </BlurFade>
        </div>
        <div className="rounded-lg overflow-hidden w-full space-y-2 snap-end">
          <BlurFade delay={0.25} inView>
            <div className="h-[500px] relative bg-gray-100 rounded-xl">
              <Image
                src="https://bestofhorsens.dk/f/bytorvhorsens_shopping.jpg"
                alt="SSCP Shopping Center"
                fill
                quality={100}
                className="object-cover rounded-lg h-full object-center"
              />
            </div>
            <div className="p-2">
              <p className="text-sm text-primary/60 mb-1">SSCP</p>
              <h3 className="text-xl font-semibold mb-2">
                Predictive Insights Drive 30% Conversion Boost
              </h3>
              <p className="text-sm text-primary/80">
                Scandinavian Shopping Center Partners (SSCP) utilizes our
                predictive analytics to anticipate visitor trends and fine-tune
                their operations. With our solution, they achieved a{" "}
                <span className="font-bold">25% reduction in idle times</span>{" "}
                and a{" "}
                <span className="font-bold">30% boost in conversion rates</span>
                , driving measurable improvements in overall efficiency.
              </p>
            </div>
          </BlurFade>
        </div>
      </div>{" "}
    </>
  );
}

export default CaseStudy;
