import React from "react";
import { Button } from "../ui/button";
import {
  ArrowRight,
  LucideCable,
  LucideGlobe,
  LucideRocket,
} from "lucide-react";
import Image from "next/image";

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
      title: "Unified Camera Network",
      description:
        "Merge camera feeds into one live view and gain complete visibility across your locations.",
      image: (
        <div className="w-full h-full flex items-center justify-center min-h-[300px]">
          <LucideGlobe className="w-40 h-40 " color="black" />
        </div>
      ),
    },
    {
      title: "Plug-and-Play Deployment",
      description:
        "Install effortlessly with no on-site setup or special equipment required.",
      image: (
        <div className="w-full h-full flex items-center justify-center min-h-[300px]">
          <LucideRocket className="w-40 h-40 " color="black" />
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col  py-20 px-2 min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight max-w-5xl mx-auto">
            Discover a Whole New Way to See and Understand Your Visitors
          </h1>
        </section>

        <section className="container mx-auto  py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="bg-gray-50 rounded-2xl mb-8 w-full flex items-center justify-center">
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
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Infoo;
