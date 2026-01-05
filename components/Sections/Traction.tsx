"use client";

import BlurFade from "../ui/blur-fade";
import { MapPin, Camera, Footprints, Building2 } from "lucide-react";

const stats = [
  {
    icon: MapPin,
    value: "17+",
    label: "Locations Live",
    description: "Across retail and commercial spaces",
  },
  {
    icon: Camera,
    value: "1000+",
    label: "Cameras Connected",
    description: "Processing video in real-time",
  },
  {
    icon: Footprints,
    value: "10M+",
    label: "Visitors Tracked",
    description: "Journeys mapped and analyzed",
  },
  {
    icon: Building2,
    value: "2M+",
    label: "Sq Meters Covered",
    description: "Of commercial floor space",
  },
];

export default function Traction() {
  return (
    <section className="w-full py-20 md:py-32 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <BlurFade delay={0} inView>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary/50 mb-4">
              Proven at Scale
            </p>
            <h2 className="text-4xl md:text-5xl font-medium text-balance">
              Already in Production
            </h2>
            <p className="text-primary/60 mt-4 text-lg max-w-2xl mx-auto">
              Our platform is live and delivering insights across commercial
              properties today.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <BlurFade
              key={stat.label}
              delay={0.1 * (index + 1)}
              inView
              className="h-full"
            >
              <div className="h-full flex flex-col items-center justify-center text-center p-6 md:p-8 rounded-2xl bg-white border border-border/50">
                <stat.icon
                  className="w-8 h-8 mb-4 text-primary/70"
                  strokeWidth={1.5}
                />
                <p className="text-4xl md:text-5xl font-semibold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-lg font-medium text-primary/90 mb-1">
                  {stat.label}
                </p>
                <p className="text-sm text-primary/50">{stat.description}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
