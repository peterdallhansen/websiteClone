import React from "react";
import { Button } from "../ui/button";
import {
  ArrowRight,
  LucideCable,
  LucideGlobe,
  LucideRocket,
} from "lucide-react";
import Image from "next/image";
import BlurFade from "../ui/blur-fade";

function Infoo() {
  const features = [
    {
      title: "AI-Powered Video Analytics",
      description:
        "Turn any 2D camera into a smart sensor with real-time computer vision—no new hardware needed.",
      image: {
        src: "/images/Detection.svg",
        alt: "AI video analytics",
        style: { width: "auto", height: "300px", objectFit: "contain" },
      },
    },
    {
      title: "Next-Gen Spatial Intelligence",
      description:
        "Move from fragmented, offline systems to a unified, real-time view of your entire environment—seamless, consistent, and always on.",
      image: (
        <div className="w-full h-full flex items-center justify-center min-h-[300px]">
          <LucideGlobe className="w-40 h-40" color="black" />
        </div>
      ),
    },
    {
      title: "Plug-and-Play Deployment",
      description:
        "Install effortlessly with no on-site setup or new hardware required.",
      image: (
        <div className="w-full h-full flex items-center justify-center min-h-[300px]">
          <LucideRocket className="w-40 h-40 " color="black" />
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col  py-20 px-2  mb-20">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <BlurFade inView delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight max-w-5xl mx-auto">
              Discover a Whole New Way to See and Understand Your Visitors
            </h1>
          </BlurFade>
        </section>

        <section className="container mx-auto  py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, idx) => (
              <BlurFade inView delay={idx * 0.1 + 0.2} key={idx}>
                <div key={idx} className="flex flex-col items-center">
                  <div className="bg-gray-100 rounded-2xl mb-8 w-full flex items-center justify-center">
                    <div className="w-full h-auto rounded-xl overflow-hidden">
                      {typeof feature.image === "object" &&
                      "src" in feature.image ? (
                        <Image
                          src={feature.image.src}
                          alt={feature.image.alt}
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={feature.image.style as React.CSSProperties}
                        />
                      ) : (
                        feature.image
                      )}
                    </div>
                  </div>
                  <h2 className={`text-2xl font-bold mb-4 w-full text-left`}>
                    {feature.title}
                  </h2>
                  <p className={`text-gray-700 text-left`}>
                    {feature.description}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Infoo;
