"use client";

import { motion } from "framer-motion";
import { Camera, Cloud, Map, BarChart } from "lucide-react";

const steps = [
  {
    title: "Connect",
    description: "We plug into your existing RTSP video streams. No new cameras needed.",
    icon: Camera,
  },
  {
    title: "Process",
    description: "Our AI analyzes video feeds in real-time, fully GDPR compliant.",
    icon: Cloud,
  },
  {
    title: "Map",
    description: "We stitch visitor journeys across multiple cameras for a complete view.",
    icon: Map,
  },
  {
    title: "Act",
    description: "You get actionable dashboards for Leasing, Marketing, and Operations.",
    icon: BarChart,
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-normal mb-6 text-black">
            From Feed to Insight
          </h2>
          <p className="text-lg text-gray-600">
            Transforming your surveillance footage into strategic data in four simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center bg-gray-50 md:bg-transparent p-4"
              >
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 border border-gray-100 relative z-10">
                  <Icon size={32} className="text-black" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-3 text-black">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
