import { ArrowRight, CheckCircle, Clock, Zap } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ProcessSteps() {
  const steps = [
    {
      number: "01",
      title: "Visitor Behavior Insights",
      description:
        "Gain insights into visitor behavior across your physical space by analyzing movement patterns, dwell times, and interactions with custom-defined engagement zones.",
      image: {
        src: "/images/3dmap2.png",
        alt: "Visitor behavior analytics dashboard",
        style: "object-contain",
      },
    },
    {
      number: "02",
      title: "Optimised Layouts, operations and promotions",
      description:
        "Refine your layout to streamline visitor flow, align staffing levels to elevate service quality, and directly measure the impact of promotions to determine what works best.",
      image: {
        src: "/images/reports9.png",
        alt: "Layout optimization visualization",
      },
    },
    {
      number: "03",
      title: "Act Faster With Real-Time Intelligence",
      description:
        "Respond quickly to changing conditions on the ground using real-time insights to improve daily operations and the customer experience.",
      image: {
        src: "/images/EditingDashboard3.png",
        alt: "Real-time intelligence dashboard",
      },
    },
  ];

  return (
    <div className="py-20 min-h-screen bg-gray-100 w-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto">
            Analytics That Drive Results
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your physical space with data-driven insights
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col md:flex-row gap-8 md:gap-16 items-center",
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Content Side */}
              <div className="w-full md:w-1/2 space-y-6">
                {/* <div className="flex items-center gap-4">
                  <div className="text-5xl font-bold text-primary">
                    {step.number}
                  </div>
                  <div className="h-px bg-gray-300 flex-grow"></div>
                </div> */}

                <div className="flex items-start gap-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="rounded-2xl">
                  <div className="relative w-full h-[400px]">
                    <Image
                      src={step.image.src || "/placeholder.svg"}
                      alt={step.image.alt}
                      fill
                      className={cn(
                        "object-cover rounded-lg",
                        step.image.style
                      )}
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center"></div>
        <div className="mt-20 text-center">
          <button className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
            Request a Demo
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
