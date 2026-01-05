"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Cpu,
  BarChart3,
  ArrowRight,
  LucideCctv,
  CloudCog,
  ChartArea,
} from "lucide-react";
import BlurFade from "../ui/blur-fade";

const steps = [
  {
    icon: LucideCctv,
    step: "01",
    title: "Connect",
    description:
      "Plug into your existing camera infrastructure. No new sensors, no complex installations.",
  },
  {
    icon: CloudCog,
    step: "02",
    title: "Process",
    description:
      "Our AI analyzes video feeds in real-time, tracking visitor movement and behavior patterns.",
  },
  {
    icon: ChartArea,
    step: "03",
    title: "Act",
    description:
      "Get actionable insights to optimize operations, justify rents, and improve visitor experience.",
  },
];

export default function HowItWorks2() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <BlurFade delay={0} inView>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary/50 mb-4">
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl font-medium text-balance">
              From cameras to clarity in three steps
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <BlurFade key={step.step} delay={0.1 * (index + 1)} inView>
              <div className="relative flex flex-col items-start p-8 rounded-2xl bg-[#F8F9FA] border border-border/50 h-full">
                <div className="flex items-center justify-between w-full mb-6">
                  <span className="text-5xl font-light text-primary/20">
                    {step.step}
                  </span>
                  <step.icon
                    className="w-8 h-8 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-2xl font-medium mb-3">{step.title}</h3>
                <p className="text-primary/60 leading-relaxed">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-7 top-1/2 -translate-y-1/2 w-8 h-8 text-primary/80 z-10" />
                )}
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
