"use client";
import React, { useState, useEffect } from "react";
import { BarChart3, Brain, FileText, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";
import BlurFade from "@/components/ui/blur-fade";
import Ripple from "@/components/ui/ripple";

const HowItWorks = () => {
  const [activeCard, setActiveCard] = useState(0);

  // Cycle through the cards every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 4); // Loop back to the first card after the last one
    }, 5000); // 5 seconds per card
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const cards = [
    {
      title: "AI-Powered Dashboard",
      description: "Visualize trends and gain insights at a glance.",
      Icon: BarChart3,
      image: "/images/Dashboard.jpeg",
    },
    {
      title: "Natural Language Processing",
      description: "Analyze text and extract sentiment effortlessly.",
      Icon: Brain,
      image: "/images/Paths.jpeg",
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions.",
      Icon: LineChart,
      image: "/images/Heat (2).jpeg",
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive reports with one click.",
      Icon: FileText,
      image: "/images/Paths.jpeg",
    },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center flex-1 p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-4 row-start-2 items-center">
        <BlurFade delay={0.25} inView>
          <h4
            className="text-sm md:text-lg text-accent text-center"
            style={{
              textShadow: "0 0 12px rgba(107, 183, 225, 1)",
              backgroundImage:
                "linear-gradient(309deg, rgb(166, 221, 255) 2.25%, rgba(107,183,225,1) 48.08%, rgb(0, 119, 255) 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Empower Your Workflow
          </h4>
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold  leading-tight text-white text-center">
            4 Key Features to Unlock Your Potential
          </h2>
        </BlurFade>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background align-center flex justify-center">
          <div className="container px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cards.map((card, index) => (
                <BlurFade
                  delay={0.25 + 0.25 * index}
                  inView
                  key={index}
                  className="border-none bg-transparent relative cursor-pointer"
                >
                  <Card
                    className="border-none bg-transparent relative cursor-pointer"
                    onClick={() => setActiveCard(index)}
                  >
                    <CardContent className="pt-6 text-center">
                      <div className="mb-4 flex items-center justify-center">
                        <div className="rounded-full bg-transparent p-4">
                          <card.Icon className="h-8 w-8 text-accent" />
                        </div>
                      </div>
                      <h3 className="font-bold text-xl my-3">{card.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {card.description}
                      </p>
                    </CardContent>
                    {/* Progress Line */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-200">
                      <div
                        className={`h-full ${
                          activeCard === index ? "fill-animation" : "hidden"
                        }`}
                        style={{
                          backgroundColor: "rgba(107, 183, 225, 1)",
                          // Optionally, add background size and repeat if needed
                          backgroundSize: "100% 100%",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                    </div>
                  </Card>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <div className="relative w-[100%] rounded-xl aspect-[2428/1217] h-[750px]">
          <div
            style={{
              boxShadow: "0px 0px 300px -57px rgba(107,183,255,1)",
              borderRadius: "1rem", // Match the rounded-xl radius
              zIndex: 9999,
            }}
            className="w-full h-full"
          >
            <BorderBeam
              colorFrom="rgb(0, 119, 255)"
              colorTo="rgba(107,183,255,1)"
            />

            <Image
              className="w-full h-full rounded-xl bg-transparent"
              width={2428}
              height={2000}
              quality={100}
              alt="Dashboard-Image"
              src={cards[activeCard].image}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HowItWorks;
