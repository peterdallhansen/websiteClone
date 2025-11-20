"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const stats = [
  {
    value: "2.4M",
    label: "Avg. Annual Savings",
    prefix: "$",
    suffix: "",
  },
  {
    value: "18",
    label: "Tenant Sales Lift",
    prefix: "+",
    suffix: "%",
  },
  {
    value: "23",
    label: "Days to Deploy",
    prefix: "",
    suffix: " Days",
  },
  {
    value: "99.8",
    label: "System Uptime",
    prefix: "",
    suffix: "%",
  },
];

function Counter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: string;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (inView) {
      // Simple count up animation
      let start = 0;
      const end = parseFloat(value.replace(/,/g, ""));
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out quart
        const ease = 1 - Math.pow(1 - progress, 4);
        
        const current = start + (end - start) * ease;
        
        if (value.includes(".")) {
            setDisplayValue(current.toFixed(1));
        } else {
            setDisplayValue(Math.floor(current).toLocaleString());
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
            setDisplayValue(value);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export default function ROIStats() {
  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-normal mb-6"
            >
              The Numbers Don't Lie
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400"
            >
              Real results from real portfolios. See how data-driven decisions translate directly to your bottom line.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">
                    <Counter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column: Case Study */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl overflow-hidden"
            >
              <div className="relative h-[300px] w-full">
                <Image
                  src="/images/case-study.png"
                  alt="Case Study Visualization"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
              
              <div className="p-8 relative z-10 -mt-20">
                <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full mb-4 border border-blue-500/20">
                  CASE STUDY
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  How Westfield increased NOI by 12%
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  By analyzing visitor flow patterns, they identified underperforming zones, restructured their tenant mix, and increased property value by $18M in just 14 months.
                </p>
                <Button variant="outline" className="group text-white border-white/20 hover:bg-white hover:text-black">
                  Read Full Case Study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
