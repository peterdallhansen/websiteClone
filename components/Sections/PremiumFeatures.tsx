"use client";

import {
  ArrowRight,
  BarChart3,
  Clock,
  Footprints,
  GitGraph,
  Map,
  Share2,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import BlurFade from "../ui/blur-fade";

const features = [
  {
    icon: Footprints,
    title: "Long Customer Journey",
    description:
      "Track the complete path from entry to exit. Understand cross-shopping patterns, total dwell time, and flow between zones without losing identity.",
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
  },
  {
    icon: Users,
    title: "Demographic Insights",
    description:
      "Segment visitors by age and gender. Tailor your tenant mix and marketing to who is actually there.",
    colSpan: "md:col-span-1",
    bg: "bg-gray-50",
  },
  {
    icon: BarChart3,
    title: "Leasing Intelligence",
    description:
      "Justify rents with data. Prove the value of every square meter with concrete traffic evidence.",
    colSpan: "md:col-span-1",
    bg: "bg-gray-50",
  },
  {
    icon: GitGraph,
    title: "True Conversion",
    description:
      "Measure capture rate. Know exactly how many passersby enter each store vs. just walking by.",
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-br from-emerald-50 to-teal-50",
  },
  {
    icon: Map,
    title: "Zone Heatmaps",
    description:
      "Visualize engagement. See exactly where visitors stop, linger, and interact with displays.",
    colSpan: "md:col-span-1",
    bg: "bg-gray-50",
  },
  {
    icon: Clock,
    title: "Predictive Analytics",
    description:
      "Forecast traffic. Optimize staffing and operations before the rush happens.",
    colSpan: "md:col-span-1",
    bg: "bg-gray-50",
  },
  {
    icon: Share2,
    title: "API & Integration",
    description:
      "Connect to your ecosystem. Push raw data or insights directly to your BI tools and data lakes.",
    colSpan: "md:col-span-1",
    bg: "bg-gray-50",
  },
];

export default function PremiumFeatures() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 max-w-3xl">
          <BlurFade delay={0.1} inView>
            <h2 className="text-5xl md:text-7xl font-normal tracking-tight text-black mb-8 leading-[1.1]">
              Measure what matters. <br />
              <span className="text-gray-400">Improve everything.</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Go beyond simple counting. Our AI reconstructs the entire visitor experience to give you actionable insights for leasing, marketing, and operations.
            </p>
          </BlurFade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group relative p-8 rounded-3xl border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-100/50 ${feature.colSpan} ${feature.bg} overflow-hidden`}
              >
                <div className="relative z-10 h-full flex flex-col justify-between min-h-[280px]">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon size={24} className="text-black" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-medium text-black mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2 text-sm font-medium text-black">
                    Learn more <ArrowRight size={16} />
                  </div>
                </div>

                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/40 transition-colors duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
