import {
  Clock,
  Eye,
  LucideShare2,
  LucideTrendingUpDown,
  Map,
  Route,
  Users,
} from "lucide-react";
import BlurFade from "../ui/blur-fade";

export default function WhatYouGet() {
  const features = [
    {
      icon: Eye,
      title: "Live Visitor Counts",
      description:
        "See exactly how many people are in your space at any moment—with zero delay.",
    },
    {
      icon: Users,
      title: "Demographic Segmentation",
      description:
        "Break down traffic by age, gender, and group size for targeted insights.",
    },
    {
      icon: Clock,
      title: "Heatmaps & Dwell-Time Analytics",
      description:
        "Visualize hotspots and measure how long visitors linger in key areas.",
    },

    {
      icon: Route,
      title: "End-to-End Journey",
      description:
        "Track each visitor’s complete journey—from entry to exit—to reveal visit patterns, timing, and repeat behaviors.",
    },
    {
      icon: LucideTrendingUpDown,
      title: "Predictive Forecasting",
      description:
        "Anticipate peaks and valleys in foot traffic to optimize staffing and promotions.",
    },
    {
      icon: LucideShare2,
      title: "Reports, Alerts & Data Export",
      description:
        "Generate custom reports, set real-time alerts, and push data to your BI tools via our API.",
    },
  ];

  return (
    <section className="container mx-auto py-16 px-4 mb-20">
      <BlurFade inView delay={0.1}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What You Get
        </h2>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, idx) => (
          <BlurFade inView delay={0.2 + idx * 0.1} key={f.title}>
            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-2xl shadow-sm h-40">
              <div className="p-2  rounded-full">
                <f.icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{f.title}</h3>
                <p className="text-gray-600">{f.description}</p>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
